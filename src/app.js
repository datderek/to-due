import Project from "./project";
import Display from "./display";

export default class App {
  static createProjectForm = document.querySelector("#new-project");
  static projects = [];

  static start() {
    App.attachListeners();
  }

  static attachListeners() {
    App.createProjectForm.addEventListener("submit", App.addProject);
  }

  static addProject(event) {
    event.preventDefault();
    const formData = new FormData(App.createProjectForm);
    const projectTitle = formData.get("title");
    const projectDescription = formData.get("description");

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
    App.projects.push(project);
    Display.renderProjectTab(project);
    App.createProjectForm.reset();
  }

}