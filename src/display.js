export default class Display {
  static content = document.querySelector("#content");
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
    const list = document.createElement("ul");
    for (const task of project.todos) {
      const listItem = document.createElement("li");
      listItem.textContent = `${task.title}`;
      list.appendChild(listItem);
    }
    this.content.appendChild(list);
  }

  static clearContent() {
    while (this.content.firstChild) {
      this.content.removeChild(content.firstChild);
    }
  }
}