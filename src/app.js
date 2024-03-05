import Project from "./project";
import Display from "./display";

export default class App {
  static projectForm = document.getElementById("project-form");
  static todoForm = document.getElementById("todo-form");
  static currentProject;
  static projects = [];

  static start() {
    App.attachFormListeners();
    App.attachButtonListeners();
  }

  /**
   * Attaches submission listeners to new project and todo forms
   */
  static attachFormListeners() {
    App.projectForm.addEventListener("submit", (e) => {
      App.handleProjectForm();
    });
    App.todoForm.addEventListener("submit", (e) => {
      App.handleTodoForm();
    });
  }

  static attachButtonListeners() {
    const showProjectModalBtn = document.getElementById("show-project-modal");
    showProjectModalBtn.addEventListener('click', () => {
      const projectModal = document.getElementById("project-modal");
      projectModal.showModal();
    })

    const showTodoModalBtn = document.getElementById("show-todo-modal")
    showTodoModalBtn.addEventListener('click', () => {
      const todoModal = document.getElementById("todo-modal");
      todoModal.showModal();
    })
  }

  static attachTodoListeners() {
    const backlogTodos = document.querySelectorAll("#backlog .item");
    backlogTodos.forEach((backlogTodo) => {
      backlogTodo.addEventListener("click", (event) => {
        const todo = App.currentProject.getTodo(backlogTodo.textContent);
      });
    });
  }

  /**
   * Attaches listener to project tab, allowing the user to switch tabs
   * @param {project} 
   */
  static attachProjectTabListener(project) {
    const projectTab = document.querySelector(`[data-title="${project.title}"]`);
    projectTab.addEventListener("click", () => {
      App.currentProject = project;
      Display.renderProject(project)
    });
  }

  /**
   * Creates a project from user inputted form data
   * 
   * @returns the newly created Project or null on failure
   */
  static createProject(title, description) {
    for (const project of App.projects) {
      if (project.title === title) {
        return null;
      }
    }

    const project = new Project(title, description);
    App.projects.push(project);
    return project;
  }

  /**
   * Handles project form submission by attempting to create a new project. On
   * success it adds projects tab and switches to the new project.
   */
  static handleProjectForm() {
    const formData = new FormData(App.projectForm);
    const title = formData.get("project-title");
    const description = formData.get("project-description");

    const project = App.createProject(title, description);
    if (project) {
      App.currentProject = project;
      Display.renderProject(App.currentProject);
      Display.renderProjectTab(project);
      App.attachProjectTabListener(project);
    } else {
      //TODO: Display error - title must be unique
      console.log("Please provide a unique name for your project");
    }
    App.projectForm.reset();
  }

  /**
   * Handles todo form submission by attempting to create a new project. On
   * success it re-renders the current project tab to display the new todo.
   */
  static handleTodoForm() {
    const formData = new FormData(App.todoForm);
    const title = formData.get("todo-title");
    const description = formData.get("todo-description");
    const priority = formData.get("todo-priority");
    const dueDate = formData.get("todo-duedate");

    const todo = App.currentProject.createTodo(title, description, priority, dueDate);
    if (todo) {
      Display.renderProject(App.currentProject);
      App.attachTodoListeners();
    } else {
      //TODO: Display error - title must be unique
      console.log("Please provide a unique name for your todo");
    }
    App.todoForm.reset();
  }
}