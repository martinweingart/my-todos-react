import { forwardRef } from "react";
import { InputBase } from "../InputBase/InputBase";

export interface TextFieldProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange" | "value"
  > {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function (
  { className = "", label = "", value, placeholder, onChange, ...props },
  ref
): React.ReactElement<TextFieldProps> {
  return (
    <InputBase
      className={className}
      label={label}
      renderInput={(className, id) => (
        <input
          {...props}
          ref={ref}
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
});
