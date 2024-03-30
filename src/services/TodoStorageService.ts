import { addTodo, removeTodo, toggleTodo } from "../helpers";
import { Todo } from "../models/Todo";

const LS_STORAGE_TODOS_KEY = "MyTodos.List";

class TodoStorageServiceClass {
  private list: Todo[];

  constructor() {
    const lsItem = localStorage.getItem(LS_STORAGE_TODOS_KEY);
    this.list = lsItem ? (JSON.parse(lsItem) as Todo[]) : [];
  }

  save() {
    localStorage.setItem(LS_STORAGE_TODOS_KEY, JSON.stringify(this.list));
  }

  get(): Todo[] {
    return this.list;
  }

  add(todo: Todo) {
    this.list = addTodo(this.list, todo);
    this.save();
  }

  remove(id: number) {
    this.list = removeTodo(this.list, id);
    this.save();
  }

  toggle(id: number) {
    this.list = toggleTodo(this.list, id);
    this.save();
  }
}

export const TodoStorageService = new TodoStorageServiceClass();
