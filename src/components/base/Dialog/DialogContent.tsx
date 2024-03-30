import { CSSProperties } from "react";
import { TRANSITION_DURATION } from "../../../constants";

const defaultStyles = {
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: Record<string, CSSProperties> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
  state: string;
}

export const DialogContent = ({
  className,
  children,
  state,
}: DialogContentProps): React.ReactElement<DialogContentProps> => {
  return (
    <div
      style={{
        ...defaultStyles,
        ...transitionStyles[state],
      }}
      className={`absolute inset-1/2 -translate-x-2/4 -translate-y-2/4 bg-white  dark:dark:bg-slate-800 ${className}`}
    >
      {children}
    </div>
  );
};
