const fs = require("node:fs");
const _filePath = __dirname + "/../data/tasktracker.json";

function readJSONContent() {
    let data;
    try {
        data = fs.readFileSync(_filePath, { encoding: "utf-8" });
    } catch (error) {
        console.log("ERROR occured when Reading JSON: ", error);
    }
    return JSON.parse(data);
}

function checkIsJSONExists() {
    let isExists = false;

    try {
        isExists = fs.existsSync(_filePath);
    } catch (error) {
        console.log("AN error Occured while checking existing file: ", error);
    }

    return isExists;
}

function appendObjToExistingJSON(tasksData, jsonObj) {
    return [...tasksData, jsonObj];
}

function writeContentToJSON(newContent) {
    try {
        fs.writeFileSync(_filePath, JSON.stringify(newContent), { flag: "w+" });
    } catch (error) {
        console.log(error);
    }
}

function getCurrentDate() {
    return new Date().toISOString();
}

function getNewId(tasks) {
    let maxId = 0;
    tasks.forEach(task => {
        if (task.id > maxId) {
            maxId = task.id;
        }
    });
    return maxId + 1;
}

module.exports = {getNewId, getCurrentDate, writeContentToJSON, appendObjToExistingJSON, checkIsJSONExists, readJSONContent}