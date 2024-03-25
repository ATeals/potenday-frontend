import { debounce } from "@/feature/common/hooks/useDebounce/useDebounce";
import { useEffect, useState } from "react";

type UseCarousel = {
  autoSlideDelay?: number;
  length: number;
  onChangeCarousel?: () => unknown;
  enabledScrollSlide?: boolean;
};

export const useCarousel = ({ autoSlideDelay, length, onChangeCarousel }: UseCarousel) => {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? length - 1 : curr - 1));
    onChangeCarousel?.();
  };

  const next = () => {
    setCurr((curr) => (curr === length - 1 ? 0 : curr + 1));
    onChangeCarousel?.();
  };

  useEffect(() => {
    if (!autoSlideDelay) return;
    const slideInterval = setInterval(next, autoSlideDelay);
    return () => clearInterval(slideInterval);
  }, [autoSlideDelay]);

  return { curr, prev, next, length };
};
