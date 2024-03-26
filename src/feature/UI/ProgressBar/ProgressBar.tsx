import { generateClassName } from "@/feature/common/utils";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number;
  max: number;
  barStyle?: string;
}

export const ProgressBar = ({ current, max, barStyle, ...props }: ProgressBarProps) => {
  const scrollPercent = (current / max) * 100;

  const bgCss = generateClassName(
    "w-full bg-gray-200 rounded-lg overflow-hidden h-[6px]",
    props.className
  );

  const barCss = generateClassName(
    "left-0 rounded-lg h-full transition-all duration-300",
    barStyle || "bg-gradient-to-r from-teal-500 to-green-300"
  );

  return (
    <div className={bgCss} {...props}>
      <div
        className={barCss}
        style={{
          width: `${scrollPercent}%`,
        }}
      />
    </div>
  );
};
