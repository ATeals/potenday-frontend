import { useCarouselContext } from "./CarouselProvider";

export const CarouselDots = () => {
  const { curr, length, setSlide } = useCarouselContext();

  return (
    <div className="absolute bottom-0 p-2 flex w-full justify-center gap-2">
      {Array(length)
        .fill(0)
        .map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`h-2 w-2 rounded-full transition-colors ${
                curr === idx ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          );
        })}
    </div>
  );
};
