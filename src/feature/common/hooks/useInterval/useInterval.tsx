import { useEffect, useRef } from "react";

export const useInterval = (callback: () => unknown, delay: number) => {
  const id = useRef<number>(0);

  useEffect(() => {
    id.current = window.setInterval(callback, delay);

    return () => window.clearInterval(id.current);
  }, [callback, delay]);
};
