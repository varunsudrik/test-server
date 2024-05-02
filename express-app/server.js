const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! v5");
});
app.get("/health", (req, res) => {
  res.send("Health check");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
