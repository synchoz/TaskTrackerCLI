const utils = require('../src/utils');
const _isFileExists = utils.checkIsJSONExists();
const _initialStatus = "todo";
const _tasks = _isFileExists ? utils.readJSONContent() : [{}];
const validUpdateDeleteAction = ['update', 'delete', 'mark-in-progress', 'mark-done'];
const validListActions = ['done', 'todo', 'in-progress'];


module.exports = {_tasks, validUpdateDeleteAction, validListActions, _isFileExists, _initialStatus}