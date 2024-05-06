const express = require("express");
const Task = require("./models");
const router = express.Router();

// router.post("/todos", async (req, res) => {
//   const { content, description } = req.body; // Use req.body to access request body data

router.post("/todos", async (req, res) => {
  const { content, description } = req.body;

  try {
    const newTask = await Task.create({
      content,
      description,
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error Saving Data:", error);
    res.status(400).json({ error: "Failed to create task" });
  }
});

router.post("/todos", async (req, res) => {
  const { content, description } = req.body;
  const newTask = Task.build({
    content,
    description,
  });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error Savind Data", error);
    res.status(400).json({ error: "Failed to create task" });
  }
});

router.get("/task", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching data");
    res.status(400).json({ error: " Failed to load data" });
  }
});

router.get("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Task.findByPk(id);
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching data");
    res.status(400).json({ error: " Failed to load data" });
  }
});

router.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { content, description } = req.body;

  try {
    const todo = await Task.findByPk(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // Update todo properties
    todo.content = content;
    todo.description = description;

    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
});
router.delete("/todo/:id", (req, res) => {});

module.exports = router;
