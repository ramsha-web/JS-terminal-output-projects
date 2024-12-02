let tasklist = []; 

function Addtask(taskName) {
  const task = {
    task: taskName,
    completed: false
  };
  tasklist.push(task);
  console.log(`"Task Added", ${taskName}`);
}

function markatask(taskName) {
  const task = tasklist.find(t => t.task === taskName);
  if (task) {
    task.completed = true;
    console.log(`Task is completed: ${task.task}`);
  } else {
    console.log(`Task "${taskName}" is not found`);
  }
}

function filteredtask() {
  const filteredtask = tasklist.filter(t => t.completed);
  if (filteredtask.length === 0) {
    console.log("No Task is completed yet");
  } else {
    filteredtask.forEach(t => console.log(`- ${t.task} [Completed]`));
  }
}

function deletetask(taskName) {
  const index = tasklist.findIndex(t => t.task === taskName);
  if (index !== -1) {
    const deletetask = tasklist.splice(index, 1);
    console.log(`Task deleted: "${deletetask[0].task}"`);
  } else {
    console.log(`Task "${taskName}" is not found.`);
  }
}

function Displaylist() {
  if (tasklist.length === 0) {
    console.log("No Task is added in the list");
    return;
  }
  console.log("All Tasks:");
  tasklist.forEach(t =>
    console.log(`- ${t.task} [${t.completed ? "Completed" : "Incomplete"}]`)
  );
}

// Test the functions
Addtask("Learn JavaScript");
Addtask("Do practice question");
Addtask("Create mini projects");

Displaylist();

markatask("Learn JavaScript");

filteredtask(); 

deletetask("Do practice question");

Displaylist();
