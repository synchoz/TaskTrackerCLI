const constants = require('../src/constants');

function isValidAction(firstArgument, secondArgument) {
    let isValid = true;

    if(constants.validUpdateDeleteAction.includes(firstArgument) && secondArgument != undefined && Number.isInteger(secondArgument)) {
        isValid = false;
    }
    if(firstArgument == "list" && secondArgument != undefined && !constants.validListActions.includes(secondArgument)) {
        isValid = false;
    }
    if(firstArgument == "add" && secondArgument == undefined) {
        isValid = false;
    }

    return isValid;
}

module.exports = {isValidAction}
