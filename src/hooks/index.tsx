import { useEffect, useRef } from "react";

export function useTextFocus() {
  const refText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refText.current) {
      refText.current.focus();
    }
  }, []);

  return refText;
}
