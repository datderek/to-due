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

  static renderTodo(todo) {
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    const title = document.createElement("h2");
    const priority = document.createElement("div");
    const dueDate = document.createElement("div");
    const description = document.createElement("div");


    dialog.classList.add("modal");
    title.textContent = todo.title;
    description.textContent = todo.description;

    dialog.appendChild(title);
    dialog.appendChild(priority);
    dialog.appendChild(dueDate);
    dialog.appendChild(description);
    body.appendChild(dialog);
    dialog.showModal();
    return;
  }

  static clearContent() {
    [this.backlog, this.inProgress, this.completed].forEach((section) => {
      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
    });
  }
}