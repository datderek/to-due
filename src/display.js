export default class Display {
  static content = document.querySelector("#content");
  static nav = document.querySelector("#nav");

  static renderProjectTab(project) {
    const button = document.createElement("button");
    button.dataset.title = project.title;
    button.innerText = project.title;
    this.nav.appendChild(button);
  }

  static renderProject(project) {
    Display.clearContent();
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