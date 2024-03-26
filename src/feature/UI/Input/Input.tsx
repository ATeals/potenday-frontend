import { generateClassName } from "@/feature/common/utils";
import { PolymorphicComponentProps, PolymorphicRef } from "@UI/types/PolymorphicComponentProps";
import { forwardRef } from "react";

type InputProps = {
  size?: keyof typeof InputSizeMap;
  variant?: keyof typeof InputVariantMap;
  label?: string;
  subText?: string;
  icon?: React.ReactNode;
};

const InputSizeMap = {
  sm: " w-[18rem] h-[1rem] text-sm rounded-sm",
  md: " w-[18rem] h-[2rem] text-sm rounded-md",
  lg: " w-[18rem] h-[3rem] text-sm rounded-lg",
};

const InputVariantMap = {
  default: "bg-gray-100 px-2 focus:bg-inherit focus:border-2",
  outline: "border-2 px-2",
  warning: "bg-red-300 px-2 focus:bg-inherit focus:border-2 focus:border-red-300",
  none: "",
  underline: "border-b-2 rounded-none",
};

export const InputComponent = (
  {
    type = "text",
    size = "md",
    variant = "default",
    className,
    ...props
  }: PolymorphicComponentProps<"input", InputProps>,
  ref: PolymorphicRef<"input">
) => {
  const tailwind = generateClassName(InputVariantMap[variant], InputSizeMap[size], className);

  return (
    <>
      <input className={tailwind} type={type} {...props} ref={ref} />
    </>
  );
};

export const Input = forwardRef(InputComponent);
