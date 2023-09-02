import type { SVGProps } from "react";
const SvgPaginationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 7 11"
    {...props}
  >
    <path
      stroke="#373737"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.118.5-5 5 5 5"
    />
  </svg>
);
export default SvgPaginationIcon;
