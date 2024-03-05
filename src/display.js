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
    const header = document.createElement("div");
    const details = document.createElement("div");
    const title = document.createElement("h2");
    const priority = document.createElement("div");
    const dueDate = document.createElement("div");
    const description = document.createElement("div");

    dialog.classList.add("modal");
    dialog.classList.add("item-modal")
    header.classList.add("item-modal-header");
    details.classList.add("item-modal-details");
    description.classList.add("item-modal-description");
    title.textContent = todo.title;
    priority.textContent = `Priority: ${todo.priority}`;
    dueDate.textContent = `Due: ${todo.dueDate}`;
    description.textContent = todo.description;

    header.appendChild(title);
    details.appendChild(priority);
    details.appendChild(dueDate);
    header.appendChild(title);
    header.append(details);
    dialog.appendChild(header);
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