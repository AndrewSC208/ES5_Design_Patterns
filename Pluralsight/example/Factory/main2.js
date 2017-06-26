var Task = require('./task');
var repoFactory = require('./repoFacotry');

var task1 = new Task(repoFactory.getRepo('task').get(1));