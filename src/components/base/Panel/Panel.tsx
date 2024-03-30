import { useRef } from "react";
import { Transition } from "react-transition-group";
import { createPortal } from "react-dom";
import { PanelContent } from "./PanelContent";
import { Backdrop } from "../Backdrop/Backdrop";

export type PanelAnchor = "top" | "bottom" | "right" | "left";

export interface PanelProps {
  className?: string;
  open: boolean;
  anchor: PanelAnchor;
  children: React.ReactNode;
  onClose: () => void;
}

export const Panel = ({
  className = "",
  open,
  anchor,
  children,
  onClose,
}: PanelProps): React.ReactElement<PanelProps> => {
  const nodeRef = useRef(null);

  return createPortal(
    <Transition in={open} timeout={360} unmountOnExit nodeRef={nodeRef}>
      {(state) => (
        <div className="fixed inset-0 h-full w-full" ref={nodeRef}>
          <Backdrop state={state} onClick={onClose} />
          <PanelContent state={state} className={className} anchor={anchor}>
            {children}
          </PanelContent>
        </div>
      )}
    </Transition>,
    document.body
  );
};
