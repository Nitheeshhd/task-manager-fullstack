const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  console.log("TASK API HIT 🔥"); // 👈 ADD HERE

  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.id,
    });

    res.json({
        message:"TASK CREATE SUCCESSFUL",
        data:task 
});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
  console.log("GET TASKS HIT 🔥"); // 👈 OPTIONAL DEBUG

  try {
    const { status, priority, search } = req.query;

    let filter = { userId: req.user.id };

    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;

    const total = await Task.countDocuments({ userId });

    const completed = await Task.countDocuments({
      userId,
      status: "Done",
    });

    const pending = total - completed;

    const completionRate =
      total === 0 ? 0 : ((completed / total) * 100).toFixed(2);

    res.json({
      total,
      completed,
      pending,
      completionRate: completionRate + "%",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};