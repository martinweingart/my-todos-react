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

export interface BackdropProps {
  state: string;
  onClick: () => void;
}

export const Backdrop = ({
  state,
  onClick,
}: BackdropProps): React.ReactElement<BackdropProps> => {
  return (
    <div
      style={{
        ...defaultStyles,
        ...transitionStyles[state],
      }}
      className="h-full w-full bg-black bg-opacity-50"
      onClick={onClick}
    />
  );
};
