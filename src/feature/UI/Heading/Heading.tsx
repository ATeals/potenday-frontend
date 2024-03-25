import { generateClassName } from "@/feature/common/utils";
import { AsChildProps, Slot } from "@UI/Slot";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";

type HeadingProps = {
  size?: keyof typeof HeadingSizeMap;
} & AsChildProps;

const HeadingSizeMap = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
};

export const Heading = <T extends React.ElementType = "h1">({
  as,
  size = "md",
  children,
  className,
  asChild,
  ...props
}: PolymorphicComponentProps<T, HeadingProps>) => {
  const Element = asChild ? Slot : as || "h1";

  const tailwind = generateClassName("font-bold", HeadingSizeMap[size], className);

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
