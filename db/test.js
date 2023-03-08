const { request } = require("./request");

request("SELECT * FROM authors")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
