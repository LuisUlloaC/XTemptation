import * as React from "react"
const ChatIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 0h49v48H0z" />
    <g clipPath="url(#a)">
      <path fill="#fff" d="M-37-441h1920V661H-37z" />
      <path fill="#79236A" d="M-37-441h315V661H-37V-441Z" />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M34.683 16h4.038c1.071 0 2.098.421 2.856 1.172A3.98 3.98 0 0 1 42.76 20v12a3.98 3.98 0 0 1-1.183 2.828A4.058 4.058 0 0 1 38.72 36h-4.038v8l-8.077-8h-8.077a4.061 4.061 0 0 1-2.855-1.172m0 0L22.567 28h8.077a4.058 4.058 0 0 0 2.856-1.172A3.98 3.98 0 0 0 34.683 24V12A3.98 3.98 0 0 0 33.5 9.172 4.058 4.058 0 0 0 30.644 8H10.452a4.058 4.058 0 0 0-2.856 1.172A3.98 3.98 0 0 0 6.413 12v12a3.98 3.98 0 0 0 1.183 2.828A4.058 4.058 0 0 0 10.452 28h4.038v8l1.184-1.172Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M-37-441h1920V661H-37z" />
      </clipPath>
    </defs>
  </svg>
)
export default ChatIcon