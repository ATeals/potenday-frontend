import { AsChildProps, Slot } from "@UI/Slot";
import { GridItemStyles, getGridItemStyles } from "./GridItem.styles";
import { PolymorphicComponentProps } from "@UI/types/PolymorphicComponentProps";
import { generateClassName } from "@/feature/common/utils/generateClassName";

type GridItemProps = {
  style?: GridItemStyles & React.CSSProperties;
} & AsChildProps;

export const GridItem = <T extends React.ElementType = "div">({
  as,
  style = {},
  asChild,
  ...props
}: PolymorphicComponentProps<T, GridItemProps>) => {
  const Element = asChild ? Slot : as || "div";

  const tailwind = generateClassName(props.className);

  return (
    <Element
      className={tailwind}
      style={{
        ...getGridItemStyles(style),
      }}
      {...props}
    >
      {props.children}
    </Element>
  );
};
