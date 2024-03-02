import { Todo } from "../../models/Todo";
import { TodoListItem } from "./TodoListItem/TodoListItem";

export interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({
  todos,
}: TodoListProps): React.ReactElement<TodoListProps> => {
  return (
    <ul className="flex flex-col gap-2  ">
      {todos.map((todo) => (
        <TodoListItem description={todo.description} done={todo.done} />
      ))}
    </ul>
  );
};
