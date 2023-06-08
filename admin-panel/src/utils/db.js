import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import NotEnoughBooks from "@/errors/NotEnoughBooks";
import moment from "moment";

export const loginUser = async ({ email, password }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);

    const [values] = await conn.execute(
        "SELECT id, first_name, middle_name, last_name, email, password, role, avatar_link FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    if (values.length <= 0) {
        return null;
    }

    const user = values[0];
    let match = await bcrypt.compare(password, user.password);

    if (!match) {
        return null;
    }

    conn.end();

    return user;
};

export const findUser = async ({ id }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    const sqlStatement =
        "SELECT id, first_name, middle_name, last_name, email, role, avatar_link FROM users WHERE id = ?";
    const inputValues = [id];
    const [values] = await conn.execute(sqlStatement, inputValues);
    return values;
};

export const addUser = async ({
    first_name,
    middle_name,
    last_name,
    email,
    password,
    role,
    avatar_link = null
}) => {
    const saltRounds = 10;
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    password = await bcrypt.hash(password, saltRounds);

    await conn.execute(
        "INSERT INTO users (first_name, middle_name, last_name, email, password, role, avatar_link) VALUES (?,?,?,?,?,?,?)",
        [first_name, middle_name, last_name, email, password, role, avatar_link]
    );

    const [values] = await conn.execute(
        "SELECT id, first_name, middle_name, last_name, email, password, role, avatar_link FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    conn.end();

    return values.length > 0 ? values[0] : null;
};

export const findBook = async ({ bookBarcode = null, limit = 1 }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    const sqlStatement = !bookBarcode
        ? "SELECT b.id as id, title, author, synopsis, barcode, num_copies, category_id, category, cover_link FROM books b JOIN book_categories bc ON b.category_id = bc.id"
        : "SELECT b.id as id, title, author, synopsis, barcode, num_copies, category_id, category, cover_link FROM books b JOIN book_categories bc ON b.category_id = bc.id WHERE barcode = ? LIMIT ?";
    const inputValues = !bookBarcode ? [] : [bookBarcode, limit];
    const [values] = await conn.execute(sqlStatement, inputValues);
    return values;
};

export const findBookCategory = async ({ id = null, limit = 100000 }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    const sqlStatement = !id
        ? "SELECT * FROM book_categories"
        : "SELECT * FROM book_categories WHERE id = ? LIMIT ?";
    const inputValues = !id ? [] : [id, limit];
    const [values] = await conn.execute(sqlStatement, inputValues);
    return values;
};

export const findUserRole = async ({ id = null, limit = 100000 }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    const sqlStatement = !id
        ? "SELECT * FROM roles"
        : "SELECT * FROM roles WHERE id = ? LIMIT ?";
    const inputValues = !id ? [] : [id, limit];
    const [values] = await conn.execute(sqlStatement, inputValues);
    return values;
};

export const findBorrowTransaction = async ({ userId, bookBarcode }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    const sqlStatement =
        "SELECT * FROM borrow_transactions JOIN borrow_statuses bs ON bs.id = status WHERE book_barcode = ? and user_id = ?;";
    const inputValues = [bookBarcode, userId];
    const [values] = await conn.execute(sqlStatement, inputValues);
    return values;
};

export const addBorrowTransaction = async ({
    userId,
    bookBarcode,
    librarianId
}) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    await conn.query("START TRANSACTION");

    const promises = [
        conn.query(
            "SELECT id, first_name, middle_name, last_name, email, role, avatar_link FROM users WHERE id = ? LIMIT 1",
            [userId]
        ),
        conn.execute(
            "SELECT b.id as id, barcode, num_copies, category_id, category FROM books b JOIN book_categories bc ON b.category_id = bc.id WHERE barcode = ? LIMIT 1",
            [bookBarcode]
        ),
        conn.query(
            "SELECT id, first_name, middle_name, last_name, email, role, avatar_link FROM users WHERE id = ? LIMIT 1",
            [librarianId]
        )
    ];

    const [userResults, bookResults, librarianResults] = await Promise.all(
        promises
    );

    const users = userResults[0];
    const books = bookResults[0];
    const librarians = librarianResults[0];

    if (users.length <= 0) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("No User found");
    }

    if (books.length <= 0) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("No Book found");
    }

    if (librarians.length <= 0) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("No Librarian found");
    }

    const user = users[0];
    const book = books[0];
    const librarian = librarians[0];

    if (book.num_copies <= 0) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw new NotEnoughBooks("No Book Copies available");
    }

    if (librarian.role !== 1) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("User wiith librarian Id is not a librarian");
    }

    if (book.category !== "Fiction" && book.category !== "General Education") {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("Book is not a borrowable category");
    }

    let dueDate =
        book.category === "Fiction"
            ? moment().add(7, "day")
            : moment().add(1, "day");

    dueDate = dueDate.format("YYYY-MM-DD hh:mm:ss");

    await conn.query("UPDATE books SET num_copies = ? WHERE barcode = ?", [
        book.num_copies - 1,
        book.id
    ]);

    await conn.query(
        "INSERT INTO borrow_transactions(book_barcode, user_id, borrow_librarian_id, book_qty, due_date, status) VALUES (?,?,?,?,?,?)",
        [book.barcode, user.id, librarianId, 1, dueDate, 1]
    );
    await conn.commit();

    let [latestTransactionId] = await conn.query("SELECT LAST_INSERT_ID()");
    latestTransactionId = latestTransactionId[0]["LAST_INSERT_ID()"];
    const [insertedTransactions] = await conn.query(
        "SELECT * FROM borrow_transactions WHERE id = ?",
        [latestTransactionId]
    );
    conn.close();
    return insertedTransactions[0];
};

export const returnBook = async ({ borrowTransactionId, librarianId }) => {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    await conn.query("START TRANSACTION");

    const promises = [
        conn.query(
            "SELECT id, first_name, middle_name, last_name, email, role, avatar_link FROM users WHERE id = ? LIMIT 1",
            [librarianId]
        ),
        conn.query("SELECT * FROM borrow_transactions WHERE id = ? LIMIT 1", [
            borrowTransactionId
        ])
    ];

    const [librarianResults, transactionResults] = await Promise.all(promises);

    const transactions = transactionResults[0];
    const librarians = librarianResults[0];

    if (transactions.length <= 0) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("No Borrow Transaction found");
    }

    if (librarians.length <= 0) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("No Librarian found");
    }

    const transaction = transactions[0];
    const librarian = librarians[0];

    if (transaction.status !== 1) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("Transaction is not in a borrowed state");
    }

    if (librarian.role !== 1) {
        await conn.query("ROLLBACK");
        await conn.end();
        throw Error("User wiith librarian Id is not a librarian");
    }

    let returnDate = moment().format("YYYY-MM-DD hh:mm:ss");

    await conn.query(
        "UPDATE borrow_transactions SET return_librarian_id = ?, returned_at = ?, status = 2 WHERE id = ?",
        [librarianId, returnDate, borrowTransactionId]
    );

    await conn.commit();

    let [updatedTransaction] = await conn.query(
        "SELECT * FROM borrow_transactions WHERE id = ?",
        [borrowTransactionId]
    );
    conn.close();
    return updatedTransaction[0];
};
