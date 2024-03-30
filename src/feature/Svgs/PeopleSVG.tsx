import { SVGProps } from "./SVG";

export const PeopleSVG = ({ ...props }: SVGProps) => (
  <svg
    width="23"
    height="16"
    viewBox="0 0 23 16"
    className={props.className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6.24012" cy="3.12" r="3.12" />
    <circle cx="16.64" cy="3.12" r="3.12" />
    <path d="M0 13.52C0 10.0738 2.79374 7.28003 6.24 7.28003C9.68626 7.28003 12.48 10.0738 12.48 13.52V15.6H0V13.52Z" />
    <path d="M10.3999 13.52C10.3999 10.0738 13.1936 7.28003 16.6399 7.28003C20.0862 7.28003 22.8799 10.0738 22.8799 13.52V15.6H10.3999V13.52Z" />
  </svg>
);
