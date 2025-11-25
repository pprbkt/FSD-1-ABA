# Task Manager - Full Stack CRUD Application

**Course:** Full-Stack-Development-1  
**Assessment:** Activity-Based Assessment  
**Objective:** Demonstrate GET, POST, PUT, and DELETE HTTP methods

## Project Overview

A complete task management system demonstrating CRUD operations using REST API principles. This application showcases the practical implementation of all four primary HTTP methods with a modern tech stack.

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
├── .gitignore
└── README.md
```

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

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Community Edition)
- Git

### Steps

1. **Clone the repository** (already done)
   ```bash
   git clone <your-repo-url>
   cd FSD-1-ABA
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   - Create `.env` file in backend folder
   - Add: `PORT=5000` and `MONGODB_URI=mongodb://localhost:27017/taskmanager`

4. **Start MongoDB**
   ```bash
   mongod
   ```

5. **Start backend server**
   ```bash
   npm run dev
   ```

6. **Open frontend**
   - Navigate to `frontend/index.html`
   - Open in browser or use Live Server

## CRUD Operations Demonstration

### CREATE (POST)
- Fill out the task form
- Click "Add Task" button
- New task appears in the tasks grid

### READ (GET)
- All tasks load automatically on page load
- Click "Refresh" to reload tasks
- Click "Edit" to fetch single task details

### UPDATE (PUT)
- Click "Edit" button on any task
- Modify the form fields
- Click "Update Task" to save changes

### DELETE (DELETE)
- Click "Delete" button on any task
- Confirm deletion in popup
- Task is removed from database

## Features
- ✅ Complete CRUD functionality
- ✅ REST API architecture
- ✅ Input validation
- ✅ Error handling
- ✅ Visual method indicators
- ✅ Responsive design
- ✅ Status and priority management
- ✅ Due date tracking

## Database Schema

### Task Model

```json
{
  "title": "String (required)",
  "description": "String (required)",
  "status": "String (enum: pending, in-progress, completed)",
  "priority": "String (enum: low, medium, high)",
  "dueDate": "Date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Testing

Use Postman or browser to test endpoints:

1. **GET all tasks:** `http://localhost:5000/api/tasks`
2. **POST new task:** `http://localhost:5000/api/tasks`
3. **PUT update:** `http://localhost:5000/api/tasks/<task-id>`
4. **DELETE task:** `http://localhost:5000/api/tasks/<task-id>`

## Learning Outcomes
- Understanding of RESTful API design
- HTTP methods implementation
- Database CRUD operations
- Frontend-Backend integration
- Error handling and validation
- Asynchronous JavaScript (async/await)
- DOM manipulation

## Author

Created for Full-Stack-Development-1 course assessment.

## License

This project is for educational purposes.
