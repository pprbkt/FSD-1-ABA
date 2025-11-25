# Task Manager - Full Stack CRUD Application

**Course:** Full-Stack-Development-1  
**Assessment:** Activity-Based Assessment  
**Objective:** Demonstrate GET, POST, PUT, and DELETE HTTP methods

---

## Project Overview

A complete task management system demonstrating CRUD operations using REST API principles. This application showcases the practical implementation of all four primary HTTP methods with a modern tech stack.

---

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with modern design
- **Vanilla JavaScript** - DOM manipulation and API calls

---

## Project Structure

```
FSD-1-ABA/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── mongodb-data/ (created at runtime, not committed to Git)
├── .gitignore
└── README.md
```

---

## API Endpoints

### GET Requests
- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/:id` - Retrieve single task by ID

### POST Request
- `POST /api/tasks` - Create new task
  - Body: `{ title, description, status, priority, dueDate }`

### PUT Request
- `PUT /api/tasks/:id` - Update existing task
  - Body: `{ title, description, status, priority, dueDate }`

### DELETE Request
- `DELETE /api/tasks/:id` - Delete task

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Community Edition (v8.0 or higher)
- Git

### Initial Setup (One-Time)

1. **Clone the repository**
   ```bash
   git clone https://github.com/pprbkt/FSD-1-ABA.git
   cd FSD-1-ABA
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   The `.env` file already exists in the backend folder with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   ```

4. **Create MongoDB data directory**
   ```bash
   cd ..
   mkdir mongodb-data
   ```

---

## How to Run This Application

### Step 1: Start MongoDB Database

Open Terminal 1 and run:

**Windows:**
```bash
mongod --dbpath C:\Users\user\OneDrive\Documents\GitHub\FSD-1-ABA\mongodb-data
```

**Mac/Linux:**
```bash
mongod --dbpath /path/to/your/FSD-1-ABA/mongodb-data
```

**Important:** Keep this terminal window open! MongoDB needs to stay running.

**Expected Output:**
- `MongoDB starting`
- `Waiting for connections on port 27017`
- `mongod startup complete`

---

### Step 2: Start Backend Server

Open Terminal 2 (a NEW terminal window) and run:

```bash
cd backend
npm run dev
```

**Expected Output:**
```
Server running on port 5000
MongoDB connected successfully
API available at http://localhost:5000/api
```

**Important:** Keep this terminal window open as well!

---

### Step 3: Open Frontend

Navigate to the `frontend` folder and open `index.html` in your web browser:

**Option 1 - Direct:**
- Double-click `index.html` file in the frontend folder

**Option 2 - VS Code Live Server:**
- Right-click `index.html` in VS Code
- Select "Open with Live Server"

**Option 3 - Manual:**
- Type in browser address bar:
  ```
  file:///C:/Users/user/OneDrive/Documents/GitHub/FSD-1-ABA/frontend/index.html
  ```
  (Adjust path as needed for your system)

---

## CRUD Operations Demonstration

### CREATE (POST)
1. Fill out the task form with:
   - Task Title
   - Description
   - Status (Pending/In Progress/Completed)
   - Priority (Low/Medium/High)
   - Due Date (optional)
2. Click "Add Task" button
3. New task appears in the tasks grid
4. **Method indicator shows "POST Request" in bottom-right corner**

### READ (GET)
1. All tasks load automatically when page opens
2. Click "Refresh" button to reload all tasks
3. Click "Edit" button to fetch single task details
4. **Method indicator shows "GET Request"**

### UPDATE (PUT)
1. Click "Edit" button on any task card
2. Form populates with existing task data
3. Modify any fields you want to change
4. Click "Update Task" button to save changes
5. **Method indicator shows "PUT Request"**

### DELETE (DELETE)
1. Click "Delete" button on any task card
2. Confirm deletion in the popup dialog
3. Task is removed from database and UI
4. **Method indicator shows "DELETE Request"**

---

## Features

- ✅ Complete CRUD functionality
- ✅ REST API architecture
- ✅ Input validation (frontend and backend)
- ✅ Error handling with meaningful messages
- ✅ Visual HTTP method indicators (bottom-right corner)
- ✅ Responsive design (works on mobile and desktop)
- ✅ Status and priority management
- ✅ Due date tracking
- ✅ Real-time HTTP method visualization
- ✅ Color-coded task cards by priority
- ✅ Smooth animations and transitions

---

## Database Schema

### Task Model

```javascript
{
  title: String (required, max 100 characters),
  description: String (required),
  status: String (enum: 'pending', 'in-progress', 'completed'),
  priority: String (enum: 'low', 'medium', 'high'),
  dueDate: Date (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated on save)
}
```

---

## Testing API Endpoints

### Using Browser Interface (Recommended)
The frontend provides a complete interface to test all CRUD operations with visual feedback. No additional tools needed!

### Using Postman (Optional)

1. **GET all tasks:** 
   - Method: GET
   - URL: `http://localhost:5000/api/tasks`

2. **POST new task:** 
   - Method: POST
   - URL: `http://localhost:5000/api/tasks`
   - Body (raw JSON):
     ```json
     {
       "title": "Sample Task",
       "description": "This is a test task",
       "status": "pending",
       "priority": "high"
     }
     ```

3. **PUT update:** 
   - Method: PUT
   - URL: `http://localhost:5000/api/tasks/<task-id>`
   - Body (raw JSON):
     ```json
     {
       "status": "completed"
     }
     ```

4. **DELETE task:** 
   - Method: DELETE
   - URL: `http://localhost:5000/api/tasks/<task-id>`

---

## Stopping the Application

To properly shut down the application:

1. **Stop Backend Server:** Press `Ctrl + C` in Terminal 2 (backend terminal)
2. **Stop MongoDB:** Press `Ctrl + C` in Terminal 1 (MongoDB terminal)
3. **Close Browser:** Close the browser tab with the frontend

---

## Troubleshooting

### MongoDB Connection Error
**Problem:** Backend shows "MongoDB connection error"

**Solutions:**
- Ensure MongoDB is running before starting the backend
- Check if port 27017 is available (not used by another app)
- Verify the mongodb-data folder exists
- Check if MongoDB service is running: `net start MongoDB` (Windows)

### Backend Not Starting
**Problem:** Backend server won't start or shows errors

**Solutions:**
- Run `npm install` in the backend folder to install dependencies
- Check if port 5000 is already in use by another application
- Verify `.env` file exists in backend folder with correct configuration
- Delete `node_modules` folder and run `npm install` again

### Frontend Not Connecting
**Problem:** Frontend can't connect to backend API

**Solutions:**
- Ensure backend server is running on port 5000
- Check browser console (F12) for CORS or network errors
- Verify API_URL in `script.js` points to `http://localhost:5000/api`
- Try disabling browser extensions that might block requests

### Port Already in Use
**Problem:** Error: "Port 5000 is already in use"

**Solutions:**
- Close other applications using port 5000
- Change PORT value in `.env` file to another port (e.g., 3000)
- On Windows, run: `netstat -ano | findstr :5000` to find process ID, then kill it

### CORS Errors
**Problem:** Browser shows CORS policy errors

**Solutions:**
- Verify `cors` package is installed in backend
- Check that `app.use(cors())` is present in `server.js`
- Ensure backend is running when opening frontend

---

## Learning Outcomes

By completing this project, you will demonstrate understanding of:

- **RESTful API Design** - Proper use of HTTP methods and endpoints
- **HTTP Methods Implementation** - Practical use of GET, POST, PUT, DELETE
- **Database CRUD Operations** - Create, Read, Update, Delete in MongoDB
- **Frontend-Backend Integration** - Connecting UI with REST API
- **Error Handling and Validation** - Both client-side and server-side
- **Asynchronous JavaScript** - Using async/await and Promises
- **DOM Manipulation** - Dynamic content rendering
- **MongoDB Schema Design** - Using Mongoose models
- **Express.js Middleware** - CORS, body-parser, error handling
- **Project Structure** - MVC-like organization (Models, Routes, Controllers)

---

## Project Structure Explanation

### Backend
- **config/database.js** - MongoDB connection configuration
- **models/Task.js** - Mongoose schema defining task structure
- **controllers/taskController.js** - Business logic for CRUD operations
- **routes/taskRoutes.js** - API endpoint definitions
- **server.js** - Main application entry point
- **.env** - Environment variables (port, database URI)

### Frontend
- **index.html** - UI structure and form
- **style.css** - Styling and responsive design
- **script.js** - API calls and DOM manipulation

---

## Authors

1. DHANUSH H S
2. AKASH J 
3. ABHILASH A 
4. DARSHAN I C 

**GitHub Repository:** https://github.com/pprbkt/FSD-1-ABA

---

## License

This project is for educational purposes only.

---

## Acknowledgments

- MongoDB documentation for database setup
- Express.js documentation for API development
- Mongoose documentation for ODM implementation

---

**Last Updated:** November 25, 2025
