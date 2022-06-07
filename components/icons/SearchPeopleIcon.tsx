interface SearchPeopleIconProps {
  className?: string;
  width?: number;
  height?: number;
}
const SearchPeopleIcon: React.FC<SearchPeopleIconProps> = ({ className, width, height }) => (
  <svg
    width={width ? width : 35}
    height={height ? height : 33}
    viewBox="0 0 35 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}>
    <path
      d="M22.832 13.9998C26.9987 13.9998 30.332 17.3332 30.332 21.4998C30.332 22.9665 29.9154 24.3498 29.182 25.4998L34.3154 30.6665L31.9987 32.9832L26.7987 27.8665C25.6487 28.5832 24.282 28.9998 22.832 28.9998C18.6654 28.9998 15.332 25.6665 15.332 21.4998C15.332 17.3332 18.6654 13.9998 22.832 13.9998ZM22.832 17.3332C21.727 17.3332 20.6672 17.7722 19.8858 18.5536C19.1044 19.335 18.6654 20.3948 18.6654 21.4998C18.6654 22.6049 19.1044 23.6647 19.8858 24.4461C20.6672 25.2275 21.727 25.6665 22.832 25.6665C23.9371 25.6665 24.9969 25.2275 25.7783 24.4461C26.5597 23.6647 26.9987 22.6049 26.9987 21.4998C26.9987 20.3948 26.5597 19.335 25.7783 18.5536C24.9969 17.7722 23.9371 17.3332 22.832 17.3332ZM13.6654 0.666504C15.4335 0.666504 17.1292 1.36888 18.3794 2.61913C19.6297 3.86937 20.332 5.56506 20.332 7.33317C20.332 8.84984 19.8154 10.2498 18.9654 11.3832C17.532 11.9165 16.2487 12.7665 15.182 13.8332L13.6654 13.9998C11.8973 13.9998 10.2016 13.2975 8.95132 12.0472C7.70108 10.797 6.9987 9.10128 6.9987 7.33317C6.9987 5.56506 7.70108 3.86937 8.95132 2.61913C10.2016 1.36888 11.8973 0.666504 13.6654 0.666504ZM0.332031 27.3332V23.9998C0.332031 20.4665 5.8487 17.5665 12.832 17.3332C12.2987 18.6332 11.9987 20.0332 11.9987 21.4998C11.9987 23.6498 12.632 25.6665 13.6654 27.3332H0.332031Z"
      fill="white"
    />
  </svg>
);
export default SearchPeopleIcon;
