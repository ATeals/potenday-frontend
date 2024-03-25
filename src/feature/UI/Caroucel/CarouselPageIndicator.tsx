import { useCarouselContext } from "./CarouselProvider";

export const CarouselPageIndicator = () => {
  const { curr, length } = useCarouselContext();
  return (
    <div className="absolute bottom-4 right-0 left-0">
      <div className="flex items-center justify-center gap-2">
        {Array(length)
          .fill(0)
          .map((s, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`}
            />
          ))}
      </div>
    </div>
  );
};
