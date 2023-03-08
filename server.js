const express = require("express");
const app = express();

app.use((req, res, next) => {
  //   return res.send("Sitio en mantenimiento");
  next();
});

const path = require("path");

app.use("/static", express.static(__dirname + "/public"));

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send(mensaje);
// });

// const authorsRoute = require("./Routes/authorsRouter");
// app.use("/authors", authorsRoute);

app.use("/authors", require("./Routes/authorsRouter"));

app.get("*", (req, res) => {
  // res.sendFile(__dirname + "/404.html");
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 8000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
