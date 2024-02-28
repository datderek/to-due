import Project from "./project";
import Display from "./display";
import Todo from "./todo";

export default class App {
  static createProjectForm = document.querySelector("#new-project");
  static createTodoForm = document.querySelector("#new-todo");
  static currentProject;
  static projects = [];

  static start() {
    App.attachFormListeners();
  }

  static attachFormListeners() {
    App.createProjectForm.addEventListener("submit", App.addProject);
    App.createTodoForm.addEventListener("submit", App.addTodo);
  }

  static attachProjectTabListener(project) {
    const projectTab = document.querySelector(`[data-title="${project.title}"]`);
    projectTab.addEventListener("click", () => {
      App.currentProject = project;
      Display.renderProject(project)
    });
  }

  static addProject(event) {
    event.preventDefault();
    const formData = new FormData(App.createProjectForm);
    const projectTitle = formData.get("project-title");
    const projectDescription = formData.get("project-description");

    // Displays an error message and exits if project title is not unique
    for (const project of App.projects) {
      if (project.title === projectTitle) {
        //TODO: Display error - title must be unique
        console.log("Please provide a unique name for your project");
        App.createProjectForm.reset();
        return;
      }
    }

    const project = new Project(projectTitle, projectDescription);
    Display.renderProjectTab(project);
    App.attachProjectTabListener(project);
    App.projects.push(project);
    App.createProjectForm.reset();
  }

  static addTodo(event) {
    event.preventDefault();
    const formData = new FormData(App.createTodoForm);
    const title = formData.get("todo-title");
    const description = formData.get("todo-description");
    const priority = formData.get("todo-priority");
    const dueDate = formData.get("todo-duedate");

    const todo = new Todo(title, description, priority, dueDate);
    App.currentProject.addTodo(todo);
    Display.renderProject(App.currentProject);
  }
}