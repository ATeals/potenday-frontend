"use client";

import { generateClassName } from "@/feature/common/utils";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";
import React, { ElementType, createContext, useContext } from "react";
import { useCarousel } from "./useCarousel";
import { motion, useMotionValue } from "framer-motion";
import { DRAG_BUFFER, SPRING_OPTIONS } from "./const";
import { SlideWapper } from "./SlideWapper";
import { CarouselDots } from "./CarouselDot";
import { CarouselArrow } from "./CarouselArrow";

interface CarouselContextType {
  length: number;
  curr: number;
  prev: () => void;
  next: () => void;
  setSlide: (index: number) => void;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("CarouselContext must be used within CarouselProvider");
  }

  return context;
};

const CAROUSEL_MODIFIERS = ["CarouselArrow", "CarouselPageIndicator"] as const;

const isCarouselModifier = (child: React.ReactNode) => {
  return (
    React.isValidElement(child) &&
    typeof child.type !== "string" &&
    CAROUSEL_MODIFIERS.includes(child.type.name as (typeof CAROUSEL_MODIFIERS)[number])
  );
};

interface CarouselArrow {
  prev: React.ReactNode;
  next: React.ReactNode;
}
interface CarouselProps {
  children: React.ReactNode;
  autoSlideDelay?: number;
  onChangeCarousel?: () => unknown;
  enabledDrag?: boolean;
  enabledDot?: boolean;
  arrow?: CarouselArrow;
}

export const CarouselProvider = <T extends ElementType = "div">({
  children,
  autoSlideDelay,
  className,
  as,
  onChangeCarousel,
  enabledDrag,
  enabledDot,
  arrow,
  ...props
}: PolymorphicComponentProps<T, CarouselProps>) => {
  const childrens = React.Children.toArray(children);

  const { curr, prev, next, length, setSlide } = useCarousel({
    autoSlideDelay,
    length: childrens.length || 0,
    onChangeCarousel,
  });

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    if (!enabledDrag) return;

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && curr < length - 1) {
      next();
    } else if (x >= DRAG_BUFFER && curr > 0) {
      prev();
    } else if (curr === 0 && x >= DRAG_BUFFER) {
      setSlide(length - 1);
    } else if (curr === length - 1 && x <= -DRAG_BUFFER) {
      setSlide(0);
    }
  };

  const Element = as || "div";

  const css = generateClassName("relative w-full overflow-hidden, bg-gray-300", className);

  return (
    <Element className={css} {...props}>
      <CarouselContext.Provider value={{ curr, prev, next, length, setSlide }}>
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{ translateX: -curr * 100 + "%" }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing flex-shrink-0 w-full h-full"
        >
          {childrens.map((child, index) => (
            <SlideWapper key={index} index={index}>
              {child}
            </SlideWapper>
          ))}
        </motion.div>

        {enabledDot && <CarouselDots />}
        {arrow && <CarouselArrow icon={arrow} />}
      </CarouselContext.Provider>
    </Element>
  );
};
