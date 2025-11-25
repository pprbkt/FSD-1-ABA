const API_URL = 'http://localhost:5000/api';

// DOM Elements
const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');
const emptyState = document.getElementById('emptyState');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const refreshBtn = document.getElementById('refreshBtn');
const methodIndicator = document.getElementById('methodIndicator');

// State
let isEditMode = false;
let editTaskId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

// Show method indicator
function showMethodIndicator(method) {
    methodIndicator.textContent = `${method} Request`;
    methodIndicator.className = `method-indicator show ${method.toLowerCase()}`;
    
    setTimeout(() => {
        methodIndicator.classList.remove('show');
    }, 2000);
}

// GET - Load all tasks
async function loadTasks() {
    try {
        showMethodIndicator('GET');
        
        const response = await fetch(`${API_URL}/tasks`);
        const result = await response.json();
        
        if (result.success) {
            displayTasks(result.data);
        } else {
            console.error('Error loading tasks:', result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load tasks. Please check if the server is running on port 5000.');
    }
}

// Display tasks
function displayTasks(tasks) {
    if (tasks.length === 0) {
        tasksContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    tasksContainer.style.display = 'grid';
    emptyState.style.display = 'none';
    
    tasksContainer.innerHTML = tasks.map(task => `
        <div class="task-card priority-${task.priority}">
            <div class="task-header">
                <div>
                    <div class="task-title">${task.title}</div>
                    <div class="task-badges">
                        <span class="badge badge-status ${task.status}">${task.status}</span>
                        <span class="badge badge-priority">${task.priority}</span>
                    </div>
                </div>
            </div>
            <p class="task-description">${task.description}</p>
            ${task.dueDate ? `<div class="task-date">📅 Due: ${new Date(task.dueDate).toLocaleDateString()}</div>` : ''}
            <div class="task-date">🕒 Created: ${new Date(task.createdAt).toLocaleDateString()}</div>
            <div class="task-actions">
                <button class="btn btn-edit" onclick="editTask('${task._id}')">✏️ Edit</button>
                <button class="btn btn-delete" onclick="deleteTask('${task._id}')">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

// POST - Create new task
async function createTask(taskData) {
    try {
        showMethodIndicator('POST');
        
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Task created successfully!');
            taskForm.reset();
            loadTasks();
        } else {
            alert('❌ Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Failed to create task');
    }
}

// PUT - Update existing task
async function updateTask(taskId, taskData) {
    try {
        showMethodIndicator('PUT');
        
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Task updated successfully!');
            resetForm();
            loadTasks();
        } else {
            alert('❌ Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Failed to update task');
    }
}

// DELETE - Remove task
async function deleteTask(taskId) {
    if (!confirm('⚠️ Are you sure you want to delete this task?')) {
        return;
    }
    
    try {
        showMethodIndicator('DELETE');
        
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
            method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('✅ Task deleted successfully!');
            loadTasks();
        } else {
            alert('❌ Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Failed to delete task');
    }
}

// GET - Edit task (fetch single task)
async function editTask(taskId) {
    try {
        showMethodIndicator('GET');
        
        const response = await fetch(`${API_URL}/tasks/${taskId}`);
        const result = await response.json();
        
        if (result.success) {
            const task = result.data;
            
            // Populate form
            document.getElementById('taskId').value = task._id;
            document.getElementById('title').value = task.title;
            document.getElementById('description').value = task.description;
            document.getElementById('status').value = task.status;
            document.getElementById('priority').value = task.priority;
            
            if (task.dueDate) {
                document.getElementById('dueDate').value = task.dueDate.split('T')[0];
            }
            
            // Update form state
            isEditMode = true;
            editTaskId = task._id;
            formTitle.textContent = '✏️ Edit Task';
            submitBtn.textContent = 'Update Task';
            cancelBtn.style.display = 'inline-block';
            
            // Scroll to form
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Failed to load task details');
    }
}

// Form submit handler
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const taskData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
        priority: document.getElementById('priority').value,
        dueDate: document.getElementById('dueDate').value || undefined
    };
    
    if (isEditMode) {
        await updateTask(editTaskId, taskData);
    } else {
        await createTask(taskData);
    }
});

// Cancel edit
cancelBtn.addEventListener('click', resetForm);

// Refresh tasks
refreshBtn.addEventListener('click', loadTasks);

// Reset form
function resetForm() {
    taskForm.reset();
    isEditMode = false;
    editTaskId = null;
    formTitle.textContent = '➕ Add New Task';
    submitBtn.textContent = 'Add Task';
    cancelBtn.style.display = 'none';
    document.getElementById('taskId').value = '';
}
