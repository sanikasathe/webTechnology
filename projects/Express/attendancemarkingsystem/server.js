const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname)); // serve HTML

// POST API
app.post("/api/attendance", (req, res) => {
  console.log("Attendance Data:", req.body); 
  res.send("Saved");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});