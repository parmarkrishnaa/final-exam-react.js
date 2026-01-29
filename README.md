# 📚 Student Management System (React JS)

## 🔹 Project Overview

This is a **Student Management System** developed using **React JS** as part of the **final practical exam**.

The project includes:
- User Authentication (Login / Signup)
- Protected Routes
- Student CRUD Operations
- Redux Toolkit for state management
- JSON Server (`db.json`) for backend data handling

---

## 🔗 Live Demo

👉 **Live Visit:**  
[Live visit](https://final-exam-react-js.vercel.app/)

---

## 🔑 Features

- 🔐 Login & Signup functionality
- 🛡 Protected routes using authentication
- ➕ Add student data
- 📋 View student list
- ✏️ Update student details
- ❌ Delete student
- 📦 Redux Toolkit integration
- 🗄 JSON Server (db.json)
- 🎨 Bootstrap UI

---

## 🔄 Application Flow

1. User visits the website for the first time
2. Clicks on **Add Student**
3. If not logged in → redirected to **Login**
4. New user → redirected to **Signup**
5. After successful signup → Login
6. After login:
   - User can add student data
   - View student list
   - Edit or delete student
7. All student data is stored in **db.json**

---

## 🛠 Technologies Used

- React JS (Vite)
- Redux Toolkit
- React Router DOM
- Axios
- Bootstrap 5
- JSON Server
- LocalStorage

---

## 📂 Project Structure

src/
│── api/
│ └── apiInstance.js
│
│── app/
│ └── store.js
│
│── features/
│ └── user/
│ └── userSlice.js
│
│── components/
│ ├── Header.jsx
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── StudentForm.jsx
│ └── StudentList.jsx
│
│── App.jsx
│── main.jsx


---

## 🗄 JSON Server Setup

### db.json Example

```json
{
  "accounts": [
    {
      "id": 1,
      "username": "admin",
      "email": "admin@gmail.com",
      "password": "123456"
    }
  ],
  "users": [
    {
      "id": 101,
      "name": "Krishna",
      "rollNo": "12",
      "stdClass": "10"
    }
  ]
}

▶️ How to Run the Project
1️⃣ Install Dependencies
npm install

2️⃣ Start React Application
npm run dev

3️⃣ Start JSON Server
json-server --watch db.json --port 3000

📌 CRUD Operations
Operation	Method	Endpoint
Add Student	POST	/users
Get Students	GET	/users
Update Student	PUT	/users/:id
Delete Student	DELETE	/users/:id
🔐 Authentication Example
localStorage.setItem("isLogin", "true");
localStorage.setItem("currentUser", JSON.stringify(user));

🎯 Exam Conclusion

This project fulfills all final practical exam requirements including:

Authentication

Routing

Redux Toolkit

CRUD Operations

JSON Server integration

👨‍💻 Developed By

Parmar Krishna
Frontend Developer (React JS)

---
