interface VerifiedIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const VerifiedIcon: React.FC<VerifiedIconProps> = ({ className, width, height }) => (
  <svg
    width={width ? width : 28}
    height={height ? height : 27}
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}>
    <path
      d="M27.5 13.075L24.45 9.6L24.875 5L20.3625 3.975L18 0L13.75 1.825L9.5 0L7.1375 3.975L2.625 4.9875L3.05 9.5875L0 13.075L3.05 16.55L2.625 21.1625L7.1375 22.1875L9.5 26.1625L13.75 24.325L18 26.15L20.3625 22.175L24.875 21.15L24.45 16.55L27.5 13.075ZM11.25 19.325L6.25 14.325L8.0125 12.5625L11.25 15.7875L19.4875 7.55L21.25 9.325L11.25 19.325Z"
      fill="#03A9F4"
    />
  </svg>
);

export default VerifiedIcon;
