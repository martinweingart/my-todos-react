export type ButtonVariant = "solid" | "outlined";
export type ButtonColor = "cyan" | "slate";

const colorClasses = {
  solid: {
    base: "bg-opacity-60 text-white hover:bg-opacity-70 active:bg-opacity-90",
    disabled: "bg-gray-300",
    cyan: "bg-cyan-500",
    slate: "bg-slate-500",
  },
  outlined: {
    base: "bg-transparent outline outline-1",
    disabled: "outline-gray-300 text-gray-300",
    cyan: "outline-cyan-600 text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100",
    slate:
      "outline-slate-600 text-slate-600 hover:bg-slate-50 active:bg-slate-100",
  },
};

export interface ButtonProps {
  className?: string;
  children: string;
  color?: ButtonColor;
  disabled?: boolean;
  variant?: ButtonVariant;
  onClick: () => void;
}

export const Button = ({
  className = "",
  children,
  color = "cyan",
  disabled = false,
  variant = "solid",
  onClick,
}: ButtonProps) => {
  const variantClasses = `${colorClasses[variant].base} ${
    colorClasses[variant][disabled ? "disabled" : color]
  }`;
  const disabledClasses = disabled ? "pointer-events-none" : "";

  return (
    <button
      className={`py-1.5 px-3 text-sm font-semibold hover:shadow-lg rounded-md ${variantClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
    >
      <span className={variant === "solid" ? "drop-shadow-md" : ""}>
        {children}
      </span>
    </button>
  );
};
