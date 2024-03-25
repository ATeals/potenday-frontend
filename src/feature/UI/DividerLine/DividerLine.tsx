import { generateClassName } from "@/feature/common/utils";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";

type DividerLineProps = {
  direction?: "horizontal" | "vertical";
};

export const DividerLine = ({
  direction = "horizontal",
  className,
  ...props
}: PolymorphicComponentProps<"div", DividerLineProps>) => {
  const tailwind = generateClassName(
    "border-gray-300",
    direction === "horizontal" && `border-b-[1px] w-full`,
    direction === "vertical" && `border-l-[1px] h-full`,
    className
  );

  return <div className={tailwind} {...props} />;
};
