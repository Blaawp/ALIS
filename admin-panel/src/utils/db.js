import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

export const findUser = async ({ email, password }) => {
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
        ? "SELECT b.id as id, title, author, synopsis, barcode, num_copies, category_id, category FROM books b JOIN book_categories bc ON b.category_id = bc.id"
        : "SELECT b.id as id, title, author, synopsis, barcode, num_copies, category_id, category FROM books b JOIN book_categories bc ON b.category_id = bc.id WHERE barcode = ? LIMIT ?";
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
