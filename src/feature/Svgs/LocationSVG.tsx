import { SVGProps } from "./SVG";

export const LocationSVG = ({ ...props }: SVGProps) => {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      className={props.className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.0944837 8.02904C0.770366 11.5211 5.06986 15.398 7.27587 16.9C13.1825 11.5338 13.3597 8.77588 13.5944 7.41473C13.5944 2.05895 9.66961 -0.0909364 7.27587 0.0029362C1.08028 0.115583 -0.423331 5.35369 0.0944837 8.02904Z" />
      <circle cx="6.8932" cy="7.43105" r="3.09779" fill="white" />
    </svg>
  );
};
