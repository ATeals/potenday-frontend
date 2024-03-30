import { SVGProps } from "./SVG";

export const BellSVG = ({ ...props }: SVGProps) => (
  <svg
    width="18"
    height="21"
    viewBox="0 0 18 21"
    className={props.className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.28829 15.4825L3.40944 12.7087V6.67158C3.40944 4.87251 6.02003 2.07034 9.28332 1.9398C12.5466 1.80927 14.9941 4.70935 14.9941 6.67158V12.7087L16.6257 15.4825C17.1533 16.294 16.8977 16.5159 16.6257 16.7878H1.28829C0.766166 16.5267 1.07074 15.8088 1.28829 15.4825Z"
      stroke="black"
      strokeWidth="1.95798"
    />
    <path
      d="M11.4426 17.2731C11.4426 18.5347 10.4199 19.5574 9.15832 19.5574C7.89673 19.5574 6.87401 18.5347 6.87401 17.2731"
      stroke="black"
      strokeWidth="1.95798"
    />
  </svg>
);
