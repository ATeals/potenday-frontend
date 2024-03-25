import { CarouselArrow } from "./CarouselArrow";
import { CarouselPageIndicator } from "./CarouselPageIndicator";
import { CarouselProvider } from "./CarouselProvider";

export const Carousel = Object.assign(CarouselProvider, {
  Arrow: CarouselArrow,
  PageIndicator: CarouselPageIndicator,
});
