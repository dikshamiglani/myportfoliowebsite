import type { SVGProps } from "react";

export function WingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.5 12.5c-1.5-1-4-2.5-6-2.5s-4.5 1.5-6 2.5" />
      <path d="M20.5 8.5c-1.5-1-4-2.5-6-2.5s-4.5 1.5-6 2.5" />
      <path d="M20.5 16.5c-1.5-1-4-2.5-6-2.5s-4.5 1.5-6 2.5" />
      <path d="M3.5 12.5c1.5-1 4-2.5 6-2.5s4.5 1.5 6 2.5" />
      <path d="M3.5 8.5c1.5-1 4-2.5 6-2.5s4.5 1.5 6 2.5" />
      <path d="M3.5 16.5c1.5-1 4-2.5 6-2.5s4.5 1.5 6 2.5" />
    </svg>
  );
}
