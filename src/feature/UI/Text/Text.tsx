import { generateClassName } from "@/feature/common/utils";
import { AsChildProps, Slot } from "@UI/Slot";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";

type TextProps = {
  size?: keyof typeof TextSizeMap;
} & AsChildProps;

const TextSizeMap = {
  sm: "text-[0.5rem]",
  md: "text-sm",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

export const Text = <T extends React.ElementType = "p">({
  as,
  size = "md",
  children,
  className,
  asChild,
  ...props
}: PolymorphicComponentProps<T, TextProps>) => {
  const Element = asChild ? Slot : as || "p";

  const tailwind = generateClassName(TextSizeMap[size], className);

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
