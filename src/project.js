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

  removeTodo(todo) {
    const title = todo.title;
    this._todos = this._todos.filter((todo) => todo.title !== title);
  }

  getTodo(title) {
    for (const todo of this.todos) {
      if (todo.title === title) {
        return todo;
      }
    }

    return null;
  } 

  /**
   * Creates a todo from user inputted form data and adds it to the project
   * 
   * @returns the newly created Project or null on failure
   */
  createTodo(title, description, priority, dueDate, status) {
    if (this.getTodo(title)) {
      return null;
    }

    const todo = new Todo(title, description, priority, dueDate, status);
    this.addTodo(todo);
    return todo;
  }

  /**
   * Updates the status of the specified todo
   */
  changeStatus(title, newStatus) {
    const todo = this.getTodo(title);
    todo.status = newStatus;
    return;
  }
}