import { format } from "date-fns";

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
    for (const todo of project.todos) {
      const listItem = document.createElement("div");
      listItem.classList.add("item");

      const title = document.createElement("div");
      title.textContent = `${todo.title}`;

      listItem.appendChild(title);
      if (todo.status === "backlog") {
        Display.backlog.appendChild(listItem);
      } else if (todo.status === "in-progress") {
        Display.inProgress.appendChild(listItem);
      } else {
        Display.completed.appendChild(listItem);
      }
    }
  }

  static renderTodo(todo) {
    const body = document.querySelector("body");
    
    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.classList.add("item-modal");

    const header = document.createElement("div");
    header.classList.add("item-modal-header");
    dialog.appendChild(header);

    const title = document.createElement("h2");
    title.textContent = todo.title;
    header.appendChild(title);

    // Conditionally render if the user inputted a priority, duedate, or description
    if (todo.priority || todo.dueDate) {
      const details = document.createElement("div");
      details.classList.add("item-modal-details");
      if (todo.priority) {
        const priority = document.createElement("div");
        priority.classList.add("item-priority");
        priority.textContent = todo.priority;
        details.appendChild(priority);
      } 
      if (todo.dueDate) {
        const dueDate = document.createElement("div");
        dueDate.classList.add("item-duedate");
        dueDate.textContent = format(new Date(todo.dueDate), "MM/dd");
        details.appendChild(dueDate);
      }
      header.appendChild(details);
    }

    if (todo.description) {
      const description = document.createElement("div");
      description.classList.add("item-modal-description");
      description.textContent = todo.description;
      dialog.appendChild(description);
    }

    Display.renderTodoStatusDropdown(todo, dialog);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("item-modal-delete");
    deleteButton.textContent = "Delete"
    dialog.appendChild(deleteButton);

    body.appendChild(dialog);
    dialog.showModal();
    return dialog;
  }

  static renderTodoStatusDropdown(todo, dialog) {
    const wrapper = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = "Status: "
    const statusSelect = document.createElement("select");

    ["backlog", "in-progress", "completed"].forEach((status) => {
      const option = document.createElement("option");
      option.setAttribute("value", status);
      option.textContent = status;
      if (todo.status == status) {
        option.selected = true;
      }
      statusSelect.appendChild(option);
    })

    wrapper.appendChild(label);
    wrapper.appendChild(statusSelect);
    dialog.appendChild(wrapper);
  }

  static clearContent() {
    [this.backlog, this.inProgress, this.completed].forEach((section) => {
      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
    });
  }
}