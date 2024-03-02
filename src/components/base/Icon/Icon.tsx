import IconPathMap from "./icons/icons";

export interface IconProps {
  name: string;
  className: string;
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      {IconPathMap[name]}
    </svg>
  );
}
