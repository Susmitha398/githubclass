const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express with CORS enabled 🚀");
});
app.get("/movie", (req, res) => {
  res.send("Hello 🚀");
});
app.get("/movie hello", (req, res) => {
  res.send("Hello pythin 🚀");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
