import { useCarouselContext } from "./CarouselProvider";
import { generateClassName } from "@/feature/common/utils";

interface CarouselArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: {
    prev: React.ReactNode;
    next: React.ReactNode;
  };
}

export const CarouselArrow = ({
  icon = { prev: "⬅️", next: "➡️" },
  className,
}: CarouselArrowProps) => {
  const { prev, next } = useCarouselContext();

  const buttonStyle = generateClassName(
    "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white absolute flex items-center justify-between",
    "transform -translate-y-1/2",
    className
  );

  return (
    <>
      <button onClick={prev} className={buttonStyle + " left-0 top-1/2 "}>
        <span>{icon.prev}</span>
      </button>
      <button onClick={next} className={buttonStyle + " right-0 top-1/2"}>
        <span>{icon.next}</span>
      </button>
    </>
  );
};
