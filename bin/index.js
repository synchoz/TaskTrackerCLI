#! /usr/bin/env node
const firstAction = process.argv[2];
const secondAction = process.argv[3];
const description = process.argv[4];

const actions = require('../src/actions');
const constants = require('../src/constants');
const validations = require('../src/validations');

if(!validations.isValidAction(firstAction, secondAction)) {
    console.log('INVALID arguments were given');
    return;
}

let output;

switch (firstAction) {
    case "add":
        output = actions.addTask(secondAction);
        console.log(output);
        break;
    case "list":
        secondAction !== undefined
            ? actions.showListByFilter(secondAction)
            : actions.showList(constants._tasks);
        break;
    case "mark-in-progress":
    case "mark-done":
    case "update":
    case "delete":
        actions.updateTasks(secondAction, firstAction, description);
        break;
    default:
        console.log(`invalid actions!`);
        break;
}
