export default class Display {
  static backlog = document.querySelector("#backlog > .content");
  static inProgress = document.querySelector("#in-progress > .content");
  static completed = document.querySelector("#completed > .content");
  static nav = document.querySelector("#projects");

  static renderProjectTab(project) {
    const button = document.createElement("button");
    button.dataset.title = project.title;
    button.innerText = project.title;
    button.classList.add("project");
    this.nav.appendChild(button);
  }

  static renderProject(project) {
    Display.clearContent();
    const currentProject = document.getElementById("current-project");
    currentProject.textContent = project.title;
    for (const task of project.todos) {
      const listItem = document.createElement("div");
      listItem.classList.add("item");

      const title = document.createElement("div");
      title.textContent = `${task.title}`;

      listItem.appendChild(title);
      this.backlog.appendChild(listItem);
    }
  }

  static clearContent() {
    [this.backlog, this.inProgress, this.completed].forEach((section) => {
      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
    });
  }
}