import { SVGProps } from "./SVG";

export const BackSVG = ({ ...props }: SVGProps) => (
  <svg
    width="11"
    height="17"
    className={props.className}
    viewBox="0 0 11 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.34241 1L1.99999 8.34242L9.34241 15.6848"
      className={props.fill}
      stroke="#656565"
      strokeWidth="1.95798"
    />
  </svg>
);
