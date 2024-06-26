export interface CheckboxProps {
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({
  className = "",
  checked,
  onChange,
}: CheckboxProps): React.ReactElement<CheckboxProps> => {
  return (
    <label
      className={`
        ${className}
        "flex p-2 cursor-pointer rounded-full hover:bg-cyan-200 hover:bg-opacity-20 active:bg-cyan-100 active:bg-opacity-50"
      `}
    >
      <input
        className="size-5 cursor-pointer accent-cyan-700"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
};
