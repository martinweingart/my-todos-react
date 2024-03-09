import { InputBase } from "../InputBase/InputBase";

export interface DatePickerProps
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

export const DatePicker = ({
  className,
  label,
  value,
  onChange,
  ...props
}: DatePickerProps): React.ReactElement<DatePickerProps> => {
  return (
    <InputBase
      className={className}
      label={label}
      renderInput={(className, id) => (
        <input
          {...props}
          id={id}
          className={className}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    />
  );
};
