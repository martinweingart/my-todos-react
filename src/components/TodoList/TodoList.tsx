import { useContext } from "react";
import { Todo } from "../../models/Todo";
import { TodoListItem } from "./TodoListItem/TodoListItem";
import { AppContext } from "../../context";

export const TodoList = (): React.ReactElement => {
  const todos = useContext(AppContext).todos;

  const onDelete = (id: number) => {
    //TODO
  };

  const onDone = (id: number) => {
    //TODO
  };

  return (
    <ul className="flex flex-col gap-2  ">
      {todos.map((todo: Todo) => (
        <TodoListItem
          key={`todolist-item-${todo.id}`}
          description={todo.description}
          done={todo.done}
          onDelete={() => onDelete(todo.id)}
          onDone={() => onDone(todo.id)}
        />
      ))}
    </ul>
  );
};
