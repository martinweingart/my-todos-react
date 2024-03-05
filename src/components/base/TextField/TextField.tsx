import { InputBase } from "../InputBase/InputBase";

export interface TextFieldProps {
  className?: string;
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const TextField = ({
  className = "",
  label = "",
  value,
  placeholder,
  onChange,
}: TextFieldProps): React.ReactElement<TextFieldProps> => {
  return (
    <InputBase
      className={className}
      label={label}
      renderInput={(className, id) => (
        <input
          id={id}
          className={className}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    />
  );
};
