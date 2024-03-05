import { InputBase } from "../InputBase/InputBase";

export interface DatePickerProps {
  className?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const DatePicker = ({
  className,
  label,
  value,
  onChange,
}: DatePickerProps): React.ReactElement<DatePickerProps> => {
  return (
    <InputBase
      className={className}
      label={label}
      renderInput={(className, id) => (
        <input
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
