const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home page!!! Update ne 3000 Update Nguyen Ngoc Hai");
});

app.get("/admin", (req, res) => {
  res.send("Admin page!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
