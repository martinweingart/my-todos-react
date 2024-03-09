import { useId } from "react";

export interface SwitchProps {
  className?: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch = ({
  className = "",
  label,
  checked,
  onChange,
}: SwitchProps): React.ReactElement<SwitchProps> => {
  const id = useId();

  return (
    <div className={`flex gap-2 items-center w-fit ${className}`}>
      <div className="flex relative">
        <input
          className="peer appearance-none cursor-pointer h-5 w-9 rounded-xl bg-gray-100 checked:bg-cyan-600 checked:bg-opacity-60"
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white border border-gray-200 hover:shadow-md peer-checked:translate-x-full transition-transform"
        ></label>
      </div>

      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
};
