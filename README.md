# Task Manager

CRUD task management app built for the Full-Stack Development 1 activity-based assessment — demonstrates GET, POST, PUT, DELETE against a REST API with a MongoDB backend.

> Built by Dhanush H S, Akash J, Abhilash A, Darshan I C

## ▌Overview

A task manager with full CRUD: create, list, edit, and delete tasks with status/priority/due-date fields, backed by a REST API. The frontend shows a live indicator of which HTTP method just fired, for the benefit of the assessment.

## ▌Tech Stack

```
Backend     Node.js • Express • MongoDB • Mongoose
Frontend    HTML5 • CSS3 • Vanilla JS
```

## ▌Project Structure

```
FSD-1-ABA/
├── backend/
│   ├── config/database.js       MongoDB connection
│   ├── controllers/taskController.js   CRUD logic
│   ├── models/Task.js           Mongoose schema
│   ├── routes/taskRoutes.js     API endpoints
│   ├── server.js                Entry point
│   └── .env
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── mongodb-data/                Created at runtime, not committed
```

## ▌API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | List all tasks |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

Task body: `{ title, description, status, priority, dueDate }`

## ▌Setup

```bash
git clone https://github.com/pprbkt/FSD-1-ABA.git
cd FSD-1-ABA/backend
npm install
mkdir ../mongodb-data
```

`.env` (backend):

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

## ▌Run

Three things need to be running together — MongoDB, the backend, and the frontend in browser.

```bash
# Terminal 1 — MongoDB
mongod --dbpath ./mongodb-data

# Terminal 2 — backend
cd backend
npm run dev
```

Then open `frontend/index.html` directly, or serve it with VS Code Live Server.

## ▌Schema

```js
{
  title: String,        // required, max 100 chars
  description: String,  // required
  status: String,        // pending | in-progress | completed
  priority: String,      // low | medium | high
  dueDate: Date,          // optional
  createdAt: Date,
  updatedAt: Date
}
```

## ▌Troubleshooting

| Problem | Check |
|---|---|
| MongoDB connection error | MongoDB running before backend starts, port 27017 free, `mongodb-data` exists |
| Backend won't start | `npm install` ran, port 5000 free, `.env` present |
| Frontend can't reach API | Backend running, `API_URL` in `script.js` points to `localhost:5000/api`, check console for CORS errors |
| Port already in use | Change `PORT` in `.env`, or kill the process holding 5000 |

## ▌License

Educational use only.
