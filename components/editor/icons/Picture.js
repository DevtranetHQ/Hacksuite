import React from "react";

export default function Picture({ className }) {
  return (
    <svg
      className={className}
      width="42"
      height="32"
      viewBox="0 0 42 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.8412 3.54321V28.3457H5.00505V3.54321H36.8412ZM36.8412 0H5.00505C2.50364 0 0.457031 1.59444 0.457031 3.54321V28.3457C0.457031 30.2944 2.50364 31.8889 5.00505 31.8889H36.8412C39.3426 31.8889 41.3892 30.2944 41.3892 28.3457V3.54321C41.3892 1.59444 39.3426 0 36.8412 0ZM25.7895 15.6964L18.9675 22.5525L14.1011 17.9641L7.27907 24.8025H34.5672L25.7895 15.6964Z"
        fill="black"
      />
    </svg>
  );
}
