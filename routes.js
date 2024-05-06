const express = require("express");
const Task = require("./models");
const router = express.Router();

router.post("/todos", async (req, res) => {
  const { content, description } = req.body; // Use req.body to access request body data

  const newTask = Task.build({
    content,
    description,
  });

  try {
    await newTask.save();
    res.status(201).json(newTask); // Respond with the newly created task
  } catch (error) {
    console.error("Error saving task:", error);
    res.status(400).json({ error: "Failed to create task" });
  }
});

// router.post("/todos", (req, res) => {
//   const data = request.body;

//   response.status(201).json(data);
// });

router.get("/todo/:id", (req, res) => {});

router.put("/todo/:id", (req, res) => {});

router.delete("/todo/:id", (req, res) => {});

module.exports = router;
