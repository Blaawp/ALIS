const mysql = require('mysql2');

export default function handler(req, res) {

    // const connection = mysql.createConnection({
    //     host: 'aws.connect.psdb.cloud',
    //     user: 'usl35jqqhwy7mmkkpsyr',
    //     database: process.env.DATABASE_URL
    // });

    // connection.query(
    //     'SELECT * FROM `users`',
    //     function(err, results, fields) {
    //         console.log(results);
    //         console.log(fields);
    //     }
    // );


    const { bookCode, studentId } = JSON.parse(req.body);

    let message = "Book Code: " + bookCode + " Student ID: " + studentId;

    res.status(200).json({ message: message });
}
  