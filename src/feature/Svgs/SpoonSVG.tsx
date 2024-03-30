import { SVGProps } from "./SVG";

export const SpoonSVG = ({ ...props }: SVGProps) => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx="2.69231" cy="3.23077" rx="2.69231" ry="3.23077" />
    <rect x="2.15381" y="5.38428" width="1.07692" height="8.61539" />
    <rect x="7" width="1.4" height="14" />
    <rect x="9.7998" width="1.4" height="14" />
  </svg>
);
