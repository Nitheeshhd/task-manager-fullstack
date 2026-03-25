# 🚀 Task Manager Full Stack App

A complete full-stack task management application that allows users to manage daily tasks efficiently with authentication and analytics.

---

## 🌐 Live Demo

* 🔗 Frontend (Vercel): https://your-vercel-link
* 🔗 Backend (Render): https://your-render-link

---

## 🧠 Project Overview

This application enables users to:

* Register and login securely
* Create and manage tasks
* Track task completion
* View analytics of tasks

---

## 🔑 Features

✔ User Authentication (JWT-based)
✔ Create Tasks
✔ Update Task Status (Todo → Done)
✔ Delete Tasks
✔ Filter & Search Tasks
✔ Task Analytics (Total, Completed, Pending)

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js

---

## 📂 Project Structure

```
task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🔄 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tasks

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`
* GET `/api/tasks/analytics`

---

## 🚀 Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* MongoDB hosted on MongoDB Atlas

---

## 💡 Key Learning

* Full-stack application development
* REST API design
* Authentication using JWT
* MongoDB integration
* Deployment on cloud platforms

---

## 📌 Author

**Nitheesh H D**

* GitHub: https://github.com/Nitheeshhd
* LinkedIn: https://www.linkedin.com/in/nithish-h-d-238197312/

---

## ⭐ Future Improvements

* Add due dates for tasks
* Add priority filters
* Improve UI/UX
* Add notifications

---

## 🏁 Conclusion

This project demonstrates the complete workflow of building, testing, and deploying a full-stack application using modern technologies.

---
