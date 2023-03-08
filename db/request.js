const mysql = require("mysql");

module.exports.request = (query) =>
  new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: "localhost", // 127.0.0.1
      port: 3306,
      user: "root",
      password: "",
      database: "pdtc",
    });

    connection.query(query, (error, data, fields) => {
      if (error) {
        reject(error);
      }

      connection.end((error) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  });
