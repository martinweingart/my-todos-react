import { SelectPriority } from "../../SelectPriority/SelectPriority";
import { DatePicker } from "../../base/DatePicker/DatePicker";
import { TextField } from "../../base/TextField/TextField";
import { useTextFocus } from "../../../hooks";

export interface MultipleFormTodo {
  description: string;
  priority?: string;
  due?: string;
  project?: string;
  context?: string;
}

export interface MultipleFormProps {
  value: MultipleFormTodo;
  onChange: (value: MultipleFormTodo) => void;
  onSubmit: () => void;
}

export const MultipleForm = ({
  value,
  onChange,
  onSubmit,
}: MultipleFormProps): React.ReactElement<MultipleFormProps> => {
  const refText = useTextFocus();

  const onFieldChange = (field: keyof MultipleFormTodo, fieldValue: string) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) =>
    e.key === "Enter" && onSubmit();

  return (
    <div className="flex flex-col gap-6">
      <TextField
        ref={refText}
        label="Todo *"
        value={value.description}
        onChange={(v) => onFieldChange("description", v)}
        onKeyUp={onKeyUp}
        placeholder="e.g. add new feature X"
      />

      <div className="flex gap-5">
        <SelectPriority
          value={value.priority ?? ""}
          onChange={(v) => onFieldChange("priority", v)}
        />

        <DatePicker
          className="flex-1 "
          label="Due"
          value={value.due ?? ""}
          onKeyUp={onKeyUp}
          onChange={(v) => onFieldChange("due", v)}
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <TextField
          label="Project"
          value={value.project ?? ""}
          placeholder="e.g. myproject"
          onKeyUp={onKeyUp}
          onChange={(v) => onFieldChange("project", v)}
        />

        <TextField
          label="Context"
          value={value.context ?? ""}
          placeholder="e.g. bugfix"
          onKeyUp={onKeyUp}
          onChange={(v) => onFieldChange("context", v)}
        />
      </div>
    </div>
  );
};
