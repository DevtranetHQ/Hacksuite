export default function CalendarIcon({ fill, width, height, className }) {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 34 40"
      fill="none"
      className={className ? className : " "}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.305 20.2016L23.3617 18.1599L14.415 27.5597L10.5283 23.4761L8.585 25.5179L14.415 31.6432L25.305 20.2016V20.2016ZM29.8333 4.67653H28V0.824158H24.3333V4.67653H9.66667V0.824158H6V4.67653H4.16667C2.13167 4.67653 0.518333 6.4101 0.518333 8.52891L0.5 35.4956C0.5 36.5173 0.886308 37.4971 1.57394 38.2196C2.26158 38.9421 3.19421 39.3479 4.16667 39.3479H29.8333C31.85 39.3479 33.5 37.6144 33.5 35.4956V8.52891C33.5 6.4101 31.85 4.67653 29.8333 4.67653ZM29.8333 35.4956H4.16667V14.3075H29.8333V35.4956Z"
        fill={fill ? fill : "#FFFFFF"}
      />
    </svg>
  );
}
