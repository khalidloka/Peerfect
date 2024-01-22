import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="151"
      height="60"
      fill="none"
      viewBox="0 0 161 122"
    >
      <path fill="url(#pattern0)" d="M0 0H161V122H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0025 0 0 .0033 0 -.16)"
            xlinkHref="#image0_223_173"
          ></use>
        </pattern>
        <image
          id="image0_223_173"
          width="400"
          height="400"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default Logo;