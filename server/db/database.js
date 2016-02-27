var mysql = require('mysql');

var connection = mysql.createConnection({
  host:  process.env.DB_HOST || "localhost",
  user: process.env.DB_username ||"root",
  password: process.env.DB_password || "",
  database: process.env.DB_database || "fileData"
});

connection.connect(function(err) {
if (err) {
  console.error("didn't work");
  return;
}
console.log("connected");
});

connection.query('SELECT * from users', function(err,rows) {
    if (err) throw err;

    console.log('Data received:');
    console.log(rows[0].username);
});

module.exports = connection;