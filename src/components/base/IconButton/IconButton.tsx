import React from "react";

export interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: React.ReactNode;
}

export const IconButton = ({
  className,
  icon,
  ...props
}: IconButtonProps): React.ReactElement<IconButtonProps> => {
  return (
    <button
      className={`p-1.5 hover:bg-cyan-300 hover:bg-opacity-20 active:bg-cyan-300 active:bg-opacity-50 rounded-full ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
