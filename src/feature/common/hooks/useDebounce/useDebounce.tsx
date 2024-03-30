import { useEffect, useMemo } from "react";

type DebounceCallback<Params> = (...args: Params[]) => void;

export function debounce<Params extends any>(
  callback: DebounceCallback<Params>,
  delay: number = 300
) {
  let timer: NodeJS.Timeout;

  const debounce = (...args: Params[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  const clear = () => clearTimeout(timer);

  return { debounce, clear };
}

export const useDebounce = <Params extends any>(
  callback: DebounceCallback<Params>,
  delay: number = 300
) => {
  const { debounce: debounceCallback, clear } = useMemo(() => debounce(callback, delay), []);

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return debounceCallback;
};
