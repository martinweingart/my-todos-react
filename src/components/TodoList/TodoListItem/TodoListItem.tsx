import { Checkbox } from "../../base";

export interface TodoListItemProps {
  description: string;
  done: boolean;
}

export const TodoListItem = ({
  description,
  done,
}: TodoListItemProps): React.ReactElement<TodoListItemProps> => {
  return (
    <li className="flex items-start gap-1 py-2 border-l-4  border-b rounded border-cyan-600">
      <Checkbox checked={done} />
      <span className={`mt-1 break-words ${done ? "line-through" : ""}`}>
        {description}
      </span>
    </li>
  );
};
