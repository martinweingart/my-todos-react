export interface TextFieldProps {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const TextField = ({
  className = "",
  value,
  placeholder,
  onChange,
}: TextFieldProps): React.ReactElement<TextFieldProps> => {
  return (
    <input
      className={`w-full h-full py-2 px-1 border-b border-cyan-700 border-opacity-30 focus:border-opacity-90 outline outline-0 focus:outline-0 placeholder:text-sm sm:placeholder:text-xl ${className}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
