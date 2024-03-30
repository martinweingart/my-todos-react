import { TextField } from "../../base/TextField/TextField";
import { useTextFocus } from "../../../hooks";

export interface SimpleFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const SimpleForm = ({
  value,
  onChange,
  onSubmit,
}: SimpleFormProps): React.ReactElement<SimpleFormProps> => {
  const refText = useTextFocus();

  const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) =>
    e.key === "Enter" && onSubmit();

  return (
    <TextField
      ref={refText}
      label="Todo"
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder="(A) description +project @context due:YYYY-MM-DD"
    />
  );
};
