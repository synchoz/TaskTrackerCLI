# TaskTracker CLI

TaskTracker CLI is a simple command-line application for managing your daily tasks. You can add, update, delete, and list tasks directly from your terminal using a set of predefined commands.
https://roadmap.sh/projects/task-tracker

## Features

- **Add Tasks:** Add new tasks with a name and optional description.
- **Update Tasks:** Update task status or description.
- **Delete Tasks:** Remove tasks from the list.
- **List Tasks:** View all tasks or filter them by status.
- **Manage Task Status:** Mark tasks as "in-progress" or "done".

## Prerequisites

- **Node.js:** Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/synchoz/tasktrackercli.git
   cd tasktrackercli
2. **Install Dependencies:** 
   ```bash
   npm install
2. **Make the Script Executable (Optional):** If you want to run the CLI without specifying node each time, make the script executable:
   ```bash
   npm i -g tsk
4. **Run the CLI:** You can run the CLI using the following command:
   ```bash
   tsk [command] [options]

## Usage
1. **Add a New Task**
   ```bash
   tsk add "Task Name"
   This command will add a new task with the given name and a default status of todo.

2. **List All Tasks**
   ```bash
   tsk list
   Displays all tasks in the system.

3. **List Tasks by Status**
   ```bash
   tsk list [status]
   Replace [status] with done, todo, or in-progress to filter tasks by their status.

4. **Update Task Description**
   ```bash
   tsk update [taskId] "New Description"
   Updates the description of the task with the given taskId.

5. **Mark a Task as In-Progress or Done**
   ```bash
   tsk mark-in-progress [taskId]
   tsk mark-done [taskId]
   Changes the status of the task to in-progress or done.

6. **Delete a Task**
   ```bash
   tsk delete [taskId]

**License**
```
This project is licensed under the MIT License.
