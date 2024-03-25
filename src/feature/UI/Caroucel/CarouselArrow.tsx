import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";
import { useCarouselContext } from "./CarouselProvider";
import { generateClassName } from "@/feature/common/utils";
import { ElementType } from "react";

interface CarouselArrowProps {
  icon?: {
    prev: React.ReactNode;
    next: React.ReactNode;
  };
}

export const CarouselArrow = <T extends ElementType = "div">({
  as,
  icon = { prev: "⬅️", next: "➡️" },
  className,
}: PolymorphicComponentProps<T, CarouselArrowProps>) => {
  const { prev, next } = useCarouselContext();

  const Element = as || "div";

  const buttonStyle = generateClassName(
    "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
    className
  );

  return (
    <Element className="absolute inset-0 flex items-center justify-between p-4">
      <button onClick={prev} className={buttonStyle}>
        <span>{icon.prev}</span>
      </button>
      <button onClick={next} className={buttonStyle}>
        <span>{icon.next}</span>
      </button>
    </Element>
  );
};
