import Todo from "./todo";

export default class Project {
  constructor(title, description = "") {
    this.title = title;
    this.description = description;
    this._todos = [];
  }

  get title() {
    return this._title;
  }

  set title(val) {
    if (val.length > 75) {
      //TODO: Error class. log error - maximum title length
    }
    this._title = val;
  }

  get description() {
    return this._description;
  }

  set description(val) {
    if (val.length > 200) {
      //TODO: Error class, log error - maximum description length
    }
    this._description = val;
  }

  get todos() {
    return this._todos;
  }
  
  addTodo(todo) {
    this._todos.push(todo);
  }

  removeTodo(index) {
    this._todos.splice(index, 1);
  }

  /**
   * Creates a todo from user inputted form data
   * 
   * @returns the newly created Project or null on failure
   */
  createTodo(title, description, priority, dueDate) {
    for (const todo of this.todos) {
      if (todo.title === title) {
        return null;
      }
    }

    const todo = new Todo(title, description, priority, dueDate);
    this.addTodo(todo);
    return todo;
  }

  /**
   * Updates the status of the specified todo
   */
  changeStatus(todoTitle, newStatus) {
    for (const todo of this._todos) {
      if (todo.title === todoTitle) {
        todo.status = newStatus
        return;
      }
    }
  }
}