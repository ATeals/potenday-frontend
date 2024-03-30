import { SVGProps } from "./SVG";

export const HomeSVG = ({ ...props }: SVGProps) => {
  return (
    <svg
      width="18"
      height="18"
      className={props.className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.77539 0L0 7.67846V17.7075H6.42484V12.0662C6.92629 10.6872 8.20081 10.238 8.77539 10.1857C10.4051 10.0604 11.2304 11.3871 11.4393 12.0662V17.7075H17.8642V7.67846L8.77539 0Z" />
    </svg>
  );
};
