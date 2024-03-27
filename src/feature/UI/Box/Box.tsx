import { generateClassName } from "@/feature/common/utils/generateClassName";
import { AsChildProps, Slot } from "@UI/Slot";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";

type BoxProps = {
  size?: keyof typeof BoxSizeMap;
  variant?: keyof typeof BoxVariantMap;
} & AsChildProps;

const BoxSizeMap = {
  sm: " w-[2rem] h-[2rem] ",
  md: " w-[4rem] h-[4rem] ",
  lg: " w-[4rem] h-[4rem]",
  xl: " w-[5rem] h-[5rem] ",
  "2xl": " w-[6rem] h-[6rem] ",
  default: "",
};

const BoxVariantMap = {
  primary: "bg-teal-300",
  default: "bg-gray-200",
  outline: "border-[0.1rem] border-gray-300",
  warning: "bg-red-300",
  none: "",
};

export const Box = <T extends React.ElementType = "div">({
  as,
  size = "default",
  variant = "default",
  asChild,
  children,
  className,
  ...props
}: PolymorphicComponentProps<T, BoxProps>) => {
  const Element = asChild ? Slot : as || "div";

  const tailwind = generateClassName(
    " flex justify-center items-center overflow-hidden",
    BoxSizeMap[size],
    BoxVariantMap[variant],
    className
  );

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
