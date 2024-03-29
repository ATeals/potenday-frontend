import { CSSProperties } from "react";
import { FlexStyles, getFlexStyles } from "./Flex.styles";
import { AsChildProps, Slot } from "@UI/Slot";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";
import { generateClassName } from "@/feature/common/utils/generateClassName";

type FlexProps = {
  style?: FlexStyles & Omit<CSSProperties, "direction">;
} & AsChildProps;

export const Flex = <T extends React.ElementType = "div">({
  as,
  style = {},
  asChild,
  ...props
}: PolymorphicComponentProps<T, FlexProps>) => {
  const Element = asChild ? Slot : as || "div";

  const tailwind = generateClassName("inline-flex", props.className);

  return (
    <Element
      className={tailwind}
      style={{
        ...getFlexStyles(style),
      }}
      {...props}
    >
      {props.children}
    </Element>
  );
};
