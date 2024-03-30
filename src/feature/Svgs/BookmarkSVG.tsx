import { SVGProps } from "./SVG";

export const BookmarkSVG = ({ ...props }: SVGProps) => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      className={props.className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25118 13.9852L0.769231 18.5226V0.769231H14.6154V18.5226L8.13343 13.9852L7.69231 13.6764L7.25118 13.9852Z"
        strokeWidth="1.53846"
      />
    </svg>
  );
};
