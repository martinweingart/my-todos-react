import { CSSProperties } from "react";
import { PanelAnchor } from "./Panel";
import { TRANSITION_DURATION } from "../../../constants";

function getDefaultAnchorStyles(anchor: PanelAnchor): CSSProperties {
  const styles: CSSProperties = {
    transition: `transform ${TRANSITION_DURATION}ms ease-in-out`,
  };

  if (anchor === "left") styles.left = "translateX(-100%)";
  if (anchor === "right") styles.right = "translateX(100%)";
  if (anchor === "bottom") styles.bottom = "translateY(100%)";
  if (anchor === "top") styles.top = "translateY(-100%)";

  return styles;
}

const styleByAnchorAndState: Record<
  PanelAnchor,
  Record<string, CSSProperties>
> = {
  left: {
    entering: { transform: "translateX(0)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(-100%)" },
  },
  right: {
    entering: { transform: "translateX(0)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(100%)" },
    exited: { transform: "translateX(100%)" },
  },
  bottom: {
    entering: { transform: "translateY(0)" },
    entered: { transform: "translateY(0)" },
    exiting: { transform: "translateY(100%)" },
    exited: { transform: "translateY(100%)" },
  },
  top: {
    entering: { transform: "translateY(0)" },
    entered: { transform: "translateY(0)" },
    exiting: { transform: "translateY(-100%)" },
    exited: { transform: "translateY(-100%)" },
  },
};

export interface PanelContentProps {
  className?: string;
  anchor: PanelAnchor;
  children: React.ReactNode;
  state: string;
}

export const PanelContent = ({
  className,
  anchor,
  children,
  state,
}: PanelContentProps): React.ReactElement<PanelContentProps> => {
  const xStyles =
    anchor === "right" || anchor === "left" ? "top-0 h-full min-w-64" : "";
  const yStyles =
    anchor === "bottom" || anchor === "top" ? "left-0 w-full min-h-64" : "";

  return (
    <div
      style={{
        ...getDefaultAnchorStyles(anchor),
        ...styleByAnchorAndState[anchor][state],
      }}
      className={`absolute bg-white ${xStyles} ${yStyles}  ${className}`}
    >
      {children}
    </div>
  );
};
