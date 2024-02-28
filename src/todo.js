export default class Todo {
  constructor(title, description = "", priority = 0, dueDate = "") {
    // Calls setters
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
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

  get priority() {
    return this._priority;
  }

  set priority(val) {
    if (val < 0 || val > 5) {
      //TODO: Error class, log error - priority must be between 0 and 5
    }
    this._priority = val;
  }
}
