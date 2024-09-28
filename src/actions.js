const { _tasks,_initialStatus} = require('../src/constants');
const {getCurrentDate, writeContentToJSON, getNewId, appendObjToExistingJSON} = require('../src/utils');

function addTask(taskName) {
    const newId = getNewId(_tasks);
    const jsonObj = {
        id: newId,
        name: taskName,
        description: "",
        status: _initialStatus,
        createdAt: getCurrentDate(),
        updatedAt: "",
    };
    const newContent = appendObjToExistingJSON(_tasks, jsonObj);
    writeContentToJSON(newContent);
    return `Task added succesfully (Id: ${newId})`;
}

function updateTasks(id, action, description) {
    let newTasksList;
    switch (action) {
        case "update":
            newTasksList = updateTaskByActionId(id, "description", description);
            break;
        case "mark-in-progress":
        case "mark-done":
            newTasksList = updateTaskByActionId(id, "status", action);
            break;
        case "delete":
            newTasksList = deleteTask(id);
            break;
        default:
            break;
    }

    writeContentToJSON(newTasksList);
}

function updateTaskByActionId(id, actionRequired, userInput) {
    const modifiedTasks = _tasks.map((task) => {
        if (task.id == id && actionRequired == "status") {
            return {
                ...task,
                status: userInput.substring(5),
                updatedAt: getCurrentDate(),
            };
        } else if (task.id == id && actionRequired == "description") {
            return { ...task, description: userInput == undefined ? "" : userInput, updatedAt: getCurrentDate() };
        } else {
            return task;
        }
    });

    return modifiedTasks;
}

function deleteTask(deleteId) {
    return _tasks.filter((task) => task.id != deleteId);
}

function showList(tasks) {
    console.log("\n");
    console.log("---TASKS ARE---");
    tasks.map((task) => {
        console.log(`*Id: ${task.id} || Name: ${task.name} || Description: ${task.description} || Status: ${task.status}*`);
    });
    console.log("---------------");
}

function showListByFilter(status) {
    const filteredData = _tasks.filter((task) => task.status === status);
    showList(filteredData);
}

module.exports = {showList , deleteTask, updateTaskByActionId, updateTasks, addTask, showListByFilter}