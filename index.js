const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  console.log(`API Method: ${req.method} : ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
