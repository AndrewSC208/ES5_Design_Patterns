//import { class } from 'class';
const Task = require('./task');

var task1 = new Task('create a demo for constuctors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();