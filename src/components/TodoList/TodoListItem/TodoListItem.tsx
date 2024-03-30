import { Todo } from "../../../models/Todo";
import { Checkbox, Icon, IconButton, Text } from "../../base";
import { Chip } from "../../base/Chip/Chip";

export interface TodoListItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoListItem = ({
  todo,
  onToggle,
  onDelete,
}: TodoListItemProps): React.ReactElement<TodoListItemProps> => {
  return (
    <li className="flex items-start gap-1 py-2 border-l-4  border-b rounded border-cyan-600">
      <Checkbox checked={todo.done} onChange={onToggle} />

      <div className="flex flex-1 flex-col gap-4">
        <Text className={`mt-1 break-words ${todo.done ? "line-through" : ""}`}>
          {todo.description}
        </Text>

        <div className="flex gap-2 self-end">
          {todo.context && (
            <Chip active color="secondary">
              {todo.context}
            </Chip>
          )}
          {todo.project && <Chip active>{todo.project}</Chip>}
        </div>
      </div>

      <IconButton
        onClick={onDelete}
        icon={<Icon className="flex size-6 text-cyan-800" name="trash" />}
      />
    </li>
  );
};
