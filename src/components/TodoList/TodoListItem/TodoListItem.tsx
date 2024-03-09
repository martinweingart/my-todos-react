import { Checkbox, Icon, IconButton } from "../../base";

export interface TodoListItemProps {
  description: string;
  done: boolean;
  onDone: () => void;
  onDelete: () => void;
}

export const TodoListItem = ({
  description,
  done,
  onDone,
  onDelete,
}: TodoListItemProps): React.ReactElement<TodoListItemProps> => {
  return (
    <li className="flex items-start gap-1 py-2 border-l-4  border-b rounded border-cyan-600">
      <Checkbox checked={done} onChange={onDone} />

      <div className="flex flex-1 flex-col gap-1">
        <span className={`mt-1 break-words ${done ? "line-through" : ""}`}>
          {description}
        </span>
      </div>

      <IconButton
        onClick={onDelete}
        icon={<Icon className="flex size-6 text-cyan-800" name="trash" />}
      />
    </li>
  );
};
