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
}