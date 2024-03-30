import { useContext } from "react";
import { Todo } from "../../models/Todo";
import { TodoListItem } from "./TodoListItem/TodoListItem";
import { AppContext } from "../../context";
import { TodoStorageService } from "../../services/TodoStorageService";

function filterTodos(
  todos: Todo[],
  filters: string[],
  hideCompleted: boolean
): Todo[] {
  return todos.filter((t) => {
    if (hideCompleted && t.done) return false;
    else if (filters.length === 0) return true;
    else {
      if (
        (t.project && !filters.includes(`projects:${t.project}`)) ||
        (t.context && !filters.includes(`contexts:${t.context}`))
      ) {
        return false;
      }
    }

    return true;
  });
}

export const TodoList = (): React.ReactElement => {
  const { state, remove, toggle } = useContext(AppContext);

  const visible = filterTodos(
    state.todos,
    state.filters,
    state.settings.hideCompleted
  );

  const onDelete = (id: number) => {
    TodoStorageService.remove(id);
    remove(id);
  };

  const onToggle = (id: number) => {
    TodoStorageService.toggle(id);
    toggle(id);
  };

  return (
    <ul className="flex flex-col gap-2  ">
      {visible.map((todo: Todo) => (
        <TodoListItem
          key={`todolist-item-${todo.id}`}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </ul>
  );
};
