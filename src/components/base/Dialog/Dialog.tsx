import { useRef } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import { Backdrop } from "../Backdrop/Backdrop";
import { DialogContent } from "./DialogContent";

export interface DialogProps {
  className?: string;
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Dialog = ({
  className,
  open,
  children,
  onClose,
}: DialogProps): React.ReactElement<DialogProps> => {
  const nodeRef = useRef(null);

  const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) =>
    e.key === "Escape" && onClose();

  return createPortal(
    <Transition in={open} timeout={360} unmountOnExit nodeRef={nodeRef}>
      {(state) => (
        <div
          className="fixed inset-0 h-full w-full"
          ref={nodeRef}
          tabIndex={0}
          onKeyUp={onKeyUp}
        >
          <Backdrop state={state} onClick={onClose} />
          <DialogContent state={state} className={className}>
            {children}
          </DialogContent>
        </div>
      )}
    </Transition>,
    document.body
  );
};
