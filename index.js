const express = require("express");
const cors = require("cors");
const { sequelize, connectToDb } = require("./db");
const apiRoutes = require("./routes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", apiRoutes);

// Logging middleware
app.use((req, res, next) => {
  console.log(`API Method: ${req.method} : ${req.path}`);
  next();
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start the server and connect to the database
const startServer = async () => {
  try {
    await connectToDb(); // Connect to the database before starting the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
