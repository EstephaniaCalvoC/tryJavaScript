#!/usr/bin/node

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* task: status, name
       status (boolean): Status of the task, True if it's done.
       name (string): Name of the task. */

let taskList = [];

// Add task
function addTask(taskList, taskName) {
    taskList.push({status: false, name: taskName});
}

// Print tasklist
function printTaskList(taskList) {

    let signal;
    let task;

    for (let i = 0; i < taskList.length; ++i) {
	task = taskList[i];
	if (task.status === true) {
	    signal = 'x';
	} else {
	    signal = " ";}

	console.log((i + 1)+ '- [' + signal + '] ' + task.name);
    }
}

// Mark task as done
function markTaskAsDone(taskList, taskNumber){
    let index = parseInt(taskNumber);

    if (isNaN(index) || index <= 0 || index > taskList.length){
	console.log("⚠️This task don't exist. Try again!")
    } else {
	taskList[taskNumber - 1].status = true;
    }
}

// Check all done
function checkAllDone(taskList) {
    for (let task of taskList){
	if (!task.status) return false
    }
    return true
}

// mode1: Read and add task.
function mode1(taskList){
    rl.question('Introduce a new task or q() to finish: ', function (taskName){
	switch (taskName) {
	case 'q()':
	    console.log("We've finished to add task!");
	    mode2(taskList);
	    break;
	case 'exit()':
	    console.log("Bye bye!👋");
	    rl.close();
	    break;
	default:
	    addTask(taskList, taskName);
	    mode1(taskList);
	}
    });
}

// Mode 2: Mark task done

function mode2(taskList){
    printTaskList(taskList);
    rl.question("Introduce the task's number that is done: ", function (taskNumber){
        switch (taskNumber) {
	case 'q()':
        case 'exit()':
	    console.log("Bye bye 👋");
            rl.close();
            break;
        default:
            markTaskAsDone(taskList, taskNumber);
	    if (checkAllDone(taskList)) {
		printTaskList(taskList);
		console.log("You've done all task, congrats! 😎✌️\nBye bye 👋");
		rl.close();
	    } else {
		mode2(taskList);
	    }
        }
    });
}

// Run
mode1(taskList);
