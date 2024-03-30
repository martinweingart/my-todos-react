import { useId } from "react";

export interface InputBaseProps {
  className?: string;
  label?: string;
  renderInput: (className: string, id: string) => React.ReactNode;
}

export const InputBase = ({
  className = "",
  label = "",
  renderInput,
}: InputBaseProps): React.ReactElement<InputBaseProps> => {
  const id = useId();

  return (
    <div className={`relative min-w-16 h-11 ${className}`}>
      {renderInput(
        "peer text-sm outline-0 h-full w-full p-2.5 box-border border rounded bg-white dark:bg-slate-800 text-gray-400 dark:text-gray-100 border-gray-400 dark:border-gray-200 focus:border-cyan-800 dark:focus:border-cyan-600",
        id
      )}
      <label
        htmlFor={id}
        className="absolute -top-2 left-1 bg-white dark:dark:bg-slate-800 text-xs text-gray-400 dark:text-gray-200 peer-focus:text-cyan-800 dark:peer-focus:text-cyan-600"
      >
        {label}
      </label>
    </div>
  );
};
