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
        "peer text-sm outline-0 h-full w-full p-2.5 box-border border rounded text-gray-400 border-gray-400  focus:border-cyan-800 focus:text-cyan-800",
        id
      )}
      <label
        htmlFor={id}
        className="absolute -top-2 left-1 bg-white text-xs text-gray-400 peer-focus:text-cyan-800"
      >
        {label}
      </label>
    </div>
  );
};
