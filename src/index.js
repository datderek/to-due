import Project from "./project";
import Todo from "./todo";
import Display from "./display";

const chores = new Project("Chores", "Some chores I have to complete around the house");
const todo1 = new Todo("Wash dishes");
const todo2 = new Todo("Sweep floor");
const todo3 = new Todo("Fold laundry");
const todo4 = new Todo("Cook dinner");
chores.addTodo(todo1);
chores.addTodo(todo2);
chores.addTodo(todo3);
chores.addTodo(todo4);

const projects = []

function addProject(project) {
  projects.push(project);
}

const createProjectForm = document.querySelector("#new-project");
createProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(createProjectForm);
  const project = new Project(formData.get("title"), formData.get("description"));
  addProject(project)
  Display.renderProjectList(projects);
})


Display.renderProject(chores);
Display.renderProjectList(projects);