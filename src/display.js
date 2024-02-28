export default class Display {
  static content = document.querySelector("#content");
  static projects = document.querySelector("#projects");

  static renderProjectButton(project) {
    // Skip the button if it has already been rendered
    if (document.querySelector(`[data-title="${project.title}"]`)) {
      return;
    }

    const button = document.createElement("button");
    button.dataset.title = project.title;
    button.innerText = project.title;
    this.projects.appendChild(button);
  }

  static renderProjectList(projects) {
    for (const project of projects) {
      this.renderProjectButton(project);
    }
  }

  static renderProject(project) {
    const title = document.createElement("h2");
    title.textContent = project.title;
    const list = document.createElement("ul");
    for (const task of project.todos) {
      const listItem = document.createElement("li");
      listItem.textContent = `${task.title}`;
      list.appendChild(listItem);
    }
    this.content.appendChild(title);
    this.content.appendChild(list);
  }

  static clearContent() {
    while (this.content.firstChild) {
      this.content.removeChild(content.firstChild);
    }
  }
}