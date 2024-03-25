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
    direction === "horizontal" && `border-b-2 w-full`,
    direction === "vertical" && `border-l-2 h-full`,
    className
  );

  return <div className={tailwind} {...props} />;
};
