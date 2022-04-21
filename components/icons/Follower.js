export default function FollowerIcon({ fill, width, height, className }) {
    return (
        <svg
            width={width ? width : 31}
            height={height ? height : 19}
            viewBox="0 0 31 19"
            fill="none"
            className={className ? className : ""}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.7917 8.20835C17.5581 8.20835 18.3073 7.98108 18.9445 7.55529C19.5817 7.1295 20.0784 6.52431 20.3717 5.81624C20.665 5.10818 20.7417 4.32905 20.5922 3.57737C20.4427 2.82569 20.0736 2.13523 19.5317 1.59331C18.9898 1.05138 18.2993 0.68232 17.5476 0.532802C16.796 0.383285 16.0168 0.460022 15.3088 0.753312C14.6007 1.0466 13.9955 1.54327 13.5697 2.18051C13.1439 2.81775 12.9167 3.56694 12.9167 4.33335C12.9167 5.36106 13.3249 6.34668 14.0516 7.07338C14.7783 7.80009 15.764 8.20835 16.7917 8.20835ZM16.7917 3.04168C17.0471 3.04168 17.2969 3.11743 17.5093 3.25936C17.7217 3.40129 17.8872 3.60302 17.985 3.83905C18.0828 4.07507 18.1084 4.33478 18.0585 4.58534C18.0087 4.8359 17.8857 5.06605 17.705 5.24669C17.5244 5.42733 17.2942 5.55035 17.0437 5.60019C16.7931 5.65003 16.5334 5.62445 16.2974 5.52669C16.0613 5.42893 15.8596 5.26337 15.7177 5.05096C15.5758 4.83854 15.5 4.58881 15.5 4.33335C15.5 3.99077 15.6361 3.66223 15.8783 3.42C16.1206 3.17776 16.4491 3.04168 16.7917 3.04168ZM22.1004 8.02751C22.8561 6.94384 23.2613 5.65448 23.2613 4.33335C23.2613 3.01221 22.8561 1.72285 22.1004 0.639178C22.4719 0.519587 22.8597 0.458579 23.25 0.458345C24.2777 0.458345 25.2633 0.866603 25.99 1.59331C26.7167 2.32001 27.125 3.30563 27.125 4.33335C27.125 5.36106 26.7167 6.34668 25.99 7.07338C25.2633 7.80009 24.2777 8.20835 23.25 8.20835C22.8597 8.20811 22.4719 8.1471 22.1004 8.02751ZM16.7917 10.7917C9.04167 10.7917 9.04167 15.9583 9.04167 15.9583V18.5417H24.5417V15.9583C24.5417 15.9583 24.5417 10.7917 16.7917 10.7917ZM11.625 15.9583C11.625 15.5838 12.0383 13.375 16.7917 13.375C21.3125 13.375 21.8808 15.39 21.9583 15.9583H11.625ZM31 15.9583V18.5417H27.125V15.9583C27.0948 14.9982 26.8737 14.0536 26.4745 13.1799C26.0753 12.3061 25.5061 11.5206 24.8 10.8692C31 11.5021 31 15.9583 31 15.9583ZM10.3333 9.50001H6.45833V13.375H3.875V9.50001H0V6.91668H3.875V3.04168H6.45833V6.91668H10.3333V9.50001Z"
                fill={fill ? fill : "#03A9F4"}
            />
        </svg>
    );
}
