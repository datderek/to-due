import Project from "./project";
import Todo from "./todo";
import Display from "./display";

const chores = new Project("Chores", "Some chores I have to complete around the house");
const school = new Project("School");
const odin = new Project("Odin Project");
const projects = [];
projects.push(chores, school, odin);

const todo1 = new Todo("Wash dishes");
const todo2 = new Todo("Sweep floor");
const todo3 = new Todo("Fold laundry");
const todo4 = new Todo("Cook dinner");
chores.addTodo(todo1);
chores.addTodo(todo2);
chores.addTodo(todo3);
chores.addTodo(todo4);

Display.renderProject(chores);
Display.renderProjectList(projects);