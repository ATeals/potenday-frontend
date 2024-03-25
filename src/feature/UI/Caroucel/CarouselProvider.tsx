"use client";

import { generateClassName } from "@/feature/common/utils";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";
import React, { ElementType, createContext, useContext } from "react";
import { useCarousel } from "./useCarousel";

interface CarouselContextType {
  length: number;
  curr: number;
  prev: () => void;
  next: () => void;
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

interface CarouselProps {
  children: React.ReactNode;
  autoSlideDelay?: number;
  onChangeCarousel?: () => unknown;
  enabledScrollSlide?: boolean;
}

export const CarouselProvider = <T extends ElementType = "div">({
  children,
  autoSlideDelay,
  className,
  as,
  onChangeCarousel,
  enabledScrollSlide = false,
}: PolymorphicComponentProps<T, CarouselProps>) => {
  const Element = as || "div";

  const slides = React.Children.toArray(children)
    .filter((child) => !isCarouselModifier(child))
    .map((child, index) => (
      <div className="max-w-full max-h-full inline-block flex-shrink-0" key={index}>
        {child}
      </div>
    ));

  children = React.Children.toArray(children).filter(isCarouselModifier);

  const { curr, prev, next, length } = useCarousel({
    autoSlideDelay,
    length: slides.length,
    onChangeCarousel,
    enabledScrollSlide,
  });

  const styles = generateClassName("relative overflow-hidden", className);

  return (
    <CarouselContext.Provider value={{ curr, prev, next, length }}>
      <Element className={styles}>
        <div
          className="flex transition-transform ease-out duration-500 w-full h-full"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        {children}
      </Element>
    </CarouselContext.Provider>
  );
};
