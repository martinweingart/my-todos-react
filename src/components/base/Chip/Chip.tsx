const inactiveColors = {
  primary:
    "outline-cyan-700 text-cyan-700 dark:outline-cyan-100 dark:text-cyan-100",
  secondary: "outline-cyan-400 text-cyan-400",
  neutral: "outline-gray-500 text-gray-500",
};

const activeBg = {
  primary: "bg-cyan-700 dark:bg-cyan-100 dark:text-cyan-900",
  secondary: "bg-cyan-400 dark:text-cyan-900",
  neutral: "bg-gray-500",
};

export type ChipColor = "primary" | "secondary" | "neutral";

export interface ChipProps {
  className?: string;
  children: React.ReactNode;
  color?: ChipColor;
  active?: boolean;
  onClick?: () => void;
}

export const Chip = ({
  className = "",
  children,
  color = "primary",
  active = false,
  onClick,
}: ChipProps): React.ReactElement<ChipProps> => {
  return (
    <div
      className={`w-fit py-1 px-2 rounded-xl text-sm cursor-pointer hover:shadow-md outline ${
        active ? "text-white" : inactiveColors[color]
      } ${
        active ? activeBg[color] : "hover:bg-cyan-50 dark:hover:bg-cyan-900"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
