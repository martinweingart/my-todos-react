import { Todo } from "../models/Todo";

export function formatDate(date: Date): string {
  return date.toISOString().substring(0, 10);
}

export function addTodo(list: Todo[], todo: Todo): Todo[] {
  return [...list, todo];
}

export function removeTodo(list: Todo[], id: number): Todo[] {
  return list.filter((t) => t.id !== id);
}

export function toggleTodo(list: Todo[], id: number): Todo[] {
  const todoIndex = list.findIndex((t) => t.id === id);
  const todo = { ...list[todoIndex] };
  todo.done = !todo.done;
  todo.done_at = todo.done ? formatDate(new Date()) : undefined;

  return [...list.slice(0, todoIndex), todo, ...list.slice(todoIndex + 1)];
}

export function saveTxt(list: Todo[]): void {
  let txtBody: string = "";
  let todoLine: string;
  for (const todo of list) {
    todoLine = "";

    if (todo.done) todoLine += "x ";
    if (todo.priority) todoLine += `(${todo.priority}) `;
    if (todo.done) todoLine += `${todo.done_at} `;

    todoLine += `${todo.created_at} `;
    todoLine += `${todo.description} `;

    if (todo.project) todoLine += `+${todo.project} `;
    if (todo.context) todoLine += `@${todo.context} `;
    if (todo.due) todoLine += `due:${todo.due}`;

    txtBody += `${todoLine}\n`;
  }

  const anchor = document.createElement("a");
  anchor.href = window.URL.createObjectURL(
    new Blob([txtBody], { type: "text/plain" })
  );
  anchor.download = "mytodos.txt";
  anchor.click();
}
