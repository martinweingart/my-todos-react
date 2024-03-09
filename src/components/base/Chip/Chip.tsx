const inactiveColors = {
  primary: "outline-cyan-700 text-cyan-700",
  secondary: "outline-cyan-400 text-cyan-400",
  neutral: "outline-gray-500 text-gray-500",
};

const activeBg = {
  primary: "bg-cyan-700 ",
  secondary: "bg-cyan-400",
  neutral: "bg-gray-500",
};

export type ChipColor = "primary" | "secondary" | "neutral";

export interface ChipProps {
  className?: string;
  children: string;
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
      className={`w-fit py-0.5 px-1 rounded-lg text-sm cursor-pointer hover:shadow-md outline ${
        active ? "text-white" : inactiveColors[color]
      } ${active ? activeBg[color] : "hover:bg-cyan-50"} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
