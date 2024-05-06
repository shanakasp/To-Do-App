const express = require("express");
const User = require("./models");
const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const tasks = await User.findAll(); // Fetch all tasks from User model
    res.status(200).json(tasks); // Send tasks as JSON response with status 200
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" }); // Handle error with 500 status
  }
});

router.post("/todos", (req, res) => {});

router.get("/todo/:id", (req, res) => {});

router.put("/todo/:id", (req, res) => {});

router.delete("/todo/:id", (req, res) => {});

module.exports = router;
