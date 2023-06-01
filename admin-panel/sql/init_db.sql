-- DROP DATABASE IF EXISTS `alis`;
-- CREATE DATABASE IF NOT EXISTS `alis`;

USE `alis`;

DROP TABLE IF EXISTS `roles`;
DROP TABLE IF EXISTS `borrow_statuses`;
DROP TABLE IF EXISTS `book_categories`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `books`;
DROP TABLE IF EXISTS `borrow_transactions`;
DROP TABLE IF EXISTS `fine_transactions`;

CREATE TABLE IF NOT EXISTS `roles`(
    id INT AUTO_INCREMENT,
    name TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS borrow_statuses(
    id INT AUTO_INCREMENT,
    status_name TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS book_categories(
    id INT AUTO_INCREMENT,
    category TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS `users`(
    id INT AUTO_INCREMENT,
    first_name TEXT NOT NULL,
    middle_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `role` INT NOT NULL,
    avatar_link TEXT DEFAULT "",
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    -- FOREIGN KEY (`role`) REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS `books`(
    id INT AUTO_INCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    synopsis TEXT NOT NULL,
    category_id INT NOT NULL,
    barcode INT NOT NULL,
    num_copies INT DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    -- FOREIGN KEY (category_id) REFERENCES book_categories(id),
    UNIQUE(barcode),
    INDEX (barcode) 
);

CREATE TABLE IF NOT EXISTS `borrow_transactions`(
    id INT,
    book_barcode INT NOT NULL,
    user_id INT NOT NULL,
    librarian_id INT NOT NULL,
    book_qty INT NOT NULL,
    due_date DATETIME NOT NULL,
    `status` INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    -- FOREIGN KEY (book_barcode) REFERENCES books(barcode),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (librarian_id) REFERENCES users(id),
--     FOREIGN KEY (status_name) REFERENCES borrow_statuses(id)

);

CREATE TABLE IF NOT EXISTS `fine_transactions`(
    id INT,
    borrow_transaction_id INT,
    fine FLOAT,
    paid_amt FLOAT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
   --  FOREIGN KEY (borrow_transaction_id) REFERENCES borrow_transactions(id)
);

INSERT INTO roles (`name`) VALUES ("admin");
INSERT INTO roles (`name`) VALUES ("teacher");
INSERT INTO roles (`name`) VALUES ("student");

INSERT INTO borrow_statuses (`status_name`) VALUES ("Borrowed");
INSERT INTO borrow_statuses (`status_name`) VALUES ("Returned");
INSERT INTO borrow_statuses (`status_name`) VALUES ("Exceeded");

INSERT INTO book_categories (`category`) VALUES ("Fiction");
INSERT INTO book_categories (`category`) VALUES ("General Education");
INSERT INTO book_categories (`category`) VALUES ("Thesis");
INSERT INTO book_categories (`category`) VALUES ("References");
INSERT INTO book_categories (`category`) VALUES ("Periodicals");

INSERT INTO users (first_name, middle_name, last_name, email, password, role) VALUES ("Librarian", "L.", "1", "librarian1@sti.edu.ph", "", 0);
INSERT INTO users (first_name, middle_name, last_name, email, password, role) VALUES ("Teacher", "T.", "1", "teacher1@sti.edu.ph", "", 1);
INSERT INTO users (first_name, middle_name, last_name, email, password, role) VALUES ("User", "U.", "1", "user1@sti.edu.ph", "", 2);

INSERT INTO books (title, author, synopsis, category_id, barcode) VALUES ("When Blood Meets Earth", "E.A. Noble", "Synompys kuno pero mema lang to kase wala akong maisip ilagay daming white space so dadamihan ko pa ang kamemahan kase dami pang white space", 0, 0);
INSERT INTO books (title, author, synopsis, category_id, barcode) VALUES ("LRT & MRT", "E.A. Noble", "Train Routes in PH", 1,2);
INSERT INTO books (title, author, synopsis, category_id, barcode) VALUES ("ALIS", "Tristan", "ALIS THESIS", 2, 1);