import { InputBase } from "../InputBase/InputBase";

export interface SelectProps {
  className?: string;
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const Select = ({
  className = "",
  label = "",
  value,
  options,
  onChange,
}: SelectProps): React.ReactElement<SelectProps> => {
  const color = value === "" ? "text-gray-400" : "auto";

  return (
    <InputBase
      className={className}
      label={label}
      renderInput={(className, id) => (
        <select
          id={id}
          className={`${className} ${color}`}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option key="select-empty-value" value="">
            -
          </option>

          {options.map((o) => (
            <option key={`select-${o}`}>{o}</option>
          ))}
        </select>
      )}
    />
  );
};
