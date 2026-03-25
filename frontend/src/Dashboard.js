import { useState, useEffect } from "react";
import API from "./api";

export default function Dashboard({ token }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [analytics, setAnalytics] = useState({});

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // ✅ FETCH TASKS
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", { headers });
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ CREATE TASK
  const createTask = async () => {
    if (!title) return alert("Enter task title");

    try {
      await API.post(
        "/tasks",
        {
          title,
          status: "Todo",
          priority: "High",
        },
        { headers }
      );

      setTitle(""); // clear input
      fetchTasks();
      fetchAnalytics();
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ UPDATE TASK (MARK DONE)
  const updateTask = async (id) => {
    try {
      await API.put(
        `/tasks/${id}`,
        { status: "Done" },
        { headers }
      );

      fetchTasks();
      fetchAnalytics();
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ DELETE TASK
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, { headers });
      fetchTasks();
      fetchAnalytics();
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ FETCH ANALYTICS
  const fetchAnalytics = async () => {
    try {
      const res = await API.get("/tasks/analytics", { headers });
      setAnalytics(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ INITIAL LOAD
  useEffect(() => {
    fetchTasks();
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {/* 🔥 ANALYTICS */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Analytics</h3>
        <p>Total: {analytics.total}</p>
        <p>Completed: {analytics.completed}</p>
        <p>Pending: {analytics.pending}</p>
      </div>

      {/* 🔥 CREATE TASK */}
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createTask}>Add Task</button>

      {/* 🔥 TASK LIST */}
      <div style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <div key={task._id} style={{ marginBottom: "10px" }}>
            <strong>{task.title}</strong> - {task.status}

            <button
              onClick={() => updateTask(task._id)}
              style={{ marginLeft: "10px" }}
            >
              Done
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}