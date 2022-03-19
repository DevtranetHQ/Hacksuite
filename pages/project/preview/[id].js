import Link from "next/link";
import showdown from "showdown";
import Avatar from "../../../components/Avatar";
import DarkModeToggle from "../../../components/DarkModeToggle";
import Logo from "../../../components/Logo";

const converter = new showdown.Converter({
    emoji: true,
    omitExtraWLInCodeBlocks: true,
    openLinksInNewWindow: true,
    strikethrough: true,
    smoothLivePreview: true,
    underline: true
});

export default function Project({
    name,
    description,
    information,
    tags,
    creatorImage,
    creatorName,
    creatorId,
    image,
    date,
    likes,
    comments
}) {
    const loggedIn = false;
    const markup = () => {
        return { __html: converter.makeHtml(information) };
    };
    return (
        <div className="dark:bg-[#202020] dark:text-white">
            <nav className="flex items-center justify-between pl-8 pr-12">
                <Logo className="w-[120px] py-5" />
                <div className="flex gap-x-2">
                    <DarkModeToggle
                        className="mx-0 w-[40x] h-[40px]"
                        darkClassName="mx-0 w-[40px] h-[42px]"
                    />
                    <a href="https://github.com/TheDynamics">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 63 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M31.501 0.479004C27.3972 0.479004 23.3335 1.31692 19.5421 2.94492C15.7507 4.57292 12.3057 6.95912 9.40389 9.96727C3.54338 16.0425 0.250977 24.2823 0.250977 32.874C0.250977 47.1925 9.21973 59.3406 21.626 63.6492C23.1885 63.9083 23.6885 62.9041 23.6885 62.0294V56.5547C15.0322 58.4984 13.1885 52.2137 13.1885 52.2137C11.751 48.4559 9.71973 47.4517 9.71973 47.4517C6.87598 45.4432 9.93848 45.508 9.93848 45.508C13.0635 45.7348 14.7197 48.8447 14.7197 48.8447C17.4385 53.7687 22.0322 52.3109 23.8135 51.5335C24.0947 49.4278 24.9072 48.0024 25.7822 47.1925C18.8447 46.3827 11.5635 43.5967 11.5635 31.2542C11.5635 27.6584 12.751 24.7752 14.7822 22.4752C14.4697 21.6653 13.376 18.2962 15.0947 13.9229C15.0947 13.9229 17.7197 13.0482 23.6885 17.2272C26.1572 16.5145 28.8447 16.1582 31.501 16.1582C34.1572 16.1582 36.8447 16.5145 39.3135 17.2272C45.2822 13.0482 47.9072 13.9229 47.9072 13.9229C49.626 18.2962 48.5322 21.6653 48.2197 22.4752C50.251 24.7752 51.4385 27.6584 51.4385 31.2542C51.4385 43.6291 44.126 46.3503 37.1572 47.1601C38.2822 48.1644 39.3135 50.1405 39.3135 53.1532V62.0294C39.3135 62.9041 39.8135 63.9407 41.4072 63.6492C53.8135 59.3082 62.751 47.1925 62.751 32.874C62.751 28.6198 61.9427 24.4073 60.3722 20.4769C58.8018 16.5466 56.4999 12.9754 53.5981 9.96727C50.6962 6.95912 47.2513 4.57292 43.4598 2.94492C39.6684 1.31692 35.6048 0.479004 31.501 0.479004Z"
                                fill="#03A9F4"
                            />
                        </svg>
                    </a>
                    <Link href="/project-gallery">
                        <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
                            Other projects
                            <svg
                                width="41"
                                height="16"
                                viewBox="0 0 41 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z"
                                    fill="white"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </nav>
            <header className="bg-[#F8FBFF] container-gray-dark border-b-4 dark:border-gray-dark p-14 rounded-2xl text-center">
                <h1 className="text-deep-sky-blue title">{name}</h1>
                <h2 className="lead mb-2">{description}</h2>
                <div className="inline-flex my-2">
                    <button className="button-medium button-fruit-salad inline-flex gap-x-2">
                        <span className="pt-1">
                            {likes} {likes === 1 ? "Like" : "Likes"}
                        </span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 43 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.5 39L18.3825 36.1946C7.31 26.2692 0 19.7019 0 11.6894C0 5.12207 5.203 0 11.825 0C15.566 0 19.1565 1.72153 21.5 4.42071C23.8435 1.72153 27.434 0 31.175 0C37.797 0 43 5.12207 43 11.6894C43 19.7019 35.69 26.2692 24.6175 36.1946L21.5 39Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <button className="button-medium button-deep-sky-blue inline-flex gap-x-2">
                        <span className="pt-1">
                            {comments} {comments === 1 ? "Comment" : "Comments"}
                        </span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M39.6 0H4.4C1.98 0 0 1.98 0 4.4V44L8.8 35.2H39.6C42.02 35.2 44 33.22 44 30.8V4.4C44 1.98 42.02 0 39.6 0ZM39.6 30.8H7.04L4.4 33.44V4.4H39.6V30.8Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            <section className="grid grid-cols-3 gap-x-2 py-7">
                <div className="col-span-2 px-14 py-7 relative">
                    <img className="w-full" src={image} />
                </div>
                <div className="col-span-1 py-7">
                    <div className="bg-[#f8fbff] container-gray-dark flex flex-col justify-between p-7 rounded-l-md h-full">
                        <div>
                            <h1 className="title font-normal">Made By</h1>
                            <div className="inline-flex gap-2 items-center">
                                <Avatar
                                    className="relative w-[60px] h-[60px]"
                                    border="!border-[3px]"
                                    image={creatorImage}
                                />
                                <h2 className="inline-flex gap-2 headline items-center pt-3">
                                    {creatorName}
                                    <svg
                                        className="cursor-pointer"
                                        width="31"
                                        height="19"
                                        viewBox="0 0 31 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.7917 8.20835C17.5581 8.20835 18.3073 7.98108 18.9445 7.55529C19.5817 7.1295 20.0784 6.52431 20.3717 5.81624C20.665 5.10818 20.7417 4.32905 20.5922 3.57737C20.4427 2.82569 20.0736 2.13523 19.5317 1.59331C18.9898 1.05138 18.2993 0.68232 17.5476 0.532802C16.796 0.383285 16.0168 0.460022 15.3088 0.753312C14.6007 1.0466 13.9955 1.54327 13.5697 2.18051C13.1439 2.81775 12.9167 3.56694 12.9167 4.33335C12.9167 5.36106 13.3249 6.34668 14.0516 7.07338C14.7783 7.80009 15.764 8.20835 16.7917 8.20835ZM16.7917 3.04168C17.0471 3.04168 17.2969 3.11743 17.5093 3.25936C17.7217 3.40129 17.8872 3.60302 17.985 3.83905C18.0828 4.07507 18.1084 4.33478 18.0585 4.58534C18.0087 4.8359 17.8857 5.06605 17.705 5.24669C17.5244 5.42733 17.2942 5.55035 17.0437 5.60019C16.7931 5.65003 16.5334 5.62445 16.2974 5.52669C16.0613 5.42893 15.8596 5.26337 15.7177 5.05096C15.5758 4.83854 15.5 4.58881 15.5 4.33335C15.5 3.99077 15.6361 3.66223 15.8783 3.42C16.1206 3.17776 16.4491 3.04168 16.7917 3.04168ZM22.1004 8.02751C22.8561 6.94384 23.2613 5.65448 23.2613 4.33335C23.2613 3.01221 22.8561 1.72285 22.1004 0.639178C22.4719 0.519587 22.8597 0.458579 23.25 0.458345C24.2777 0.458345 25.2633 0.866603 25.99 1.59331C26.7167 2.32001 27.125 3.30563 27.125 4.33335C27.125 5.36106 26.7167 6.34668 25.99 7.07338C25.2633 7.80009 24.2777 8.20835 23.25 8.20835C22.8597 8.20811 22.4719 8.1471 22.1004 8.02751ZM16.7917 10.7917C9.04167 10.7917 9.04167 15.9583 9.04167 15.9583V18.5417H24.5417V15.9583C24.5417 15.9583 24.5417 10.7917 16.7917 10.7917ZM11.625 15.9583C11.625 15.5838 12.0383 13.375 16.7917 13.375C21.3125 13.375 21.8808 15.39 21.9583 15.9583H11.625ZM31 15.9583V18.5417H27.125V15.9583C27.0948 14.9982 26.8737 14.0536 26.4745 13.1799C26.0753 12.3061 25.5061 11.5206 24.8 10.8692C31 11.5021 31 15.9583 31 15.9583ZM10.3333 9.50001H6.45833V13.375H3.875V9.50001H0V6.91668H3.875V3.04168H6.45833V6.91668H10.3333V9.50001Z"
                                            fill="#03A9F4"
                                        />
                                    </svg>
                                </h2>
                            </div>
                        </div>
                        <div className="inline-flex gap-2 items-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 38 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 35.1C23.0313 35.1 26.8975 33.4564 29.748 30.5309C32.5986 27.6053 34.2 23.6374 34.2 19.5C34.2 15.3626 32.5986 11.3947 29.748 8.46913C26.8975 5.54357 23.0313 3.9 19 3.9C14.9687 3.9 11.1025 5.54357 8.25198 8.46913C5.40142 11.3947 3.8 15.3626 3.8 19.5C3.8 23.6374 5.40142 27.6053 8.25198 30.5309C11.1025 33.4564 14.9687 35.1 19 35.1ZM19 0C21.4951 0 23.9658 0.504382 26.271 1.48435C28.5762 2.46432 30.6707 3.90068 32.435 5.71142C34.1993 7.52216 35.5989 9.67182 36.5537 12.0377C37.5086 14.4035 38 16.9392 38 19.5C38 24.6717 35.9982 29.6316 32.435 33.2886C28.8718 36.9455 24.0391 39 19 39C8.493 39 0 30.225 0 19.5C0 14.3283 2.00178 9.36838 5.56497 5.71142C9.12816 2.05446 13.9609 0 19 0ZM19.95 9.75V19.9875L28.5 25.194L27.075 27.5925L17.1 21.45V9.75H19.95Z"
                                    fill="#03A9F4"
                                />
                            </svg>
                            <h2 className="caption">{date}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-3 prose prose-lg dark:prose-invert leading-tight px-14">
                <article dangerouslySetInnerHTML={markup()} />
                <h1>Made With</h1>
                <p className="flex gap-x-2">
                    {tags.map((tag, key) => (
                        <span
                            className={`${
                                [
                                    "bg-deep-sky-blue",
                                    "bg-fruit-salad",
                                    "bg-orange-peel",
                                    "bg-link"
                                ][key % 4]
                            } px-3 py-1 subheadline text-white`}
                            key={key}>
                            {tag}
                        </span>
                    ))}
                </p>
                <h1>Check it out</h1>
            </div>
            {!loggedIn && (
                <footer className="bg-[#f4f4f4] dark:bg-[#444444] p-5 text-center">
                    <p className="sm">
                        You’ve reached the end, why not become a{" "}
                        <Link href="/signup">
                            <a>member</a>
                        </Link>{" "}
                        and show us all the cool things you’ve made?
                    </p>
                </footer>
            )}
        </div>
    );
}

export async function getServerSideProps(context) {
    // TODO: Use id to get project information from database
    // NOTE: Edit page based on whether information is being stored as Markdown, HTML, or JSON
    const { id } = context.query;
    return {
        props: {
            name: "Web scraper",
            description:
                "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
            information: `
# Lorem Ipsum

LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiaIpsum

# Lorum Ipsum

LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure hbddolor in reprehenderit in voluptate velit esse cillum dolore eu fugiaIpsum. Ut enim  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea hubb.
                `,
            tags: ["NextJS", "JavaScript", "HTML", "Python"],
            creatorName: "Zach Latta",
            creatorImage:
                "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            creatorId: "123",
            image:
                "https://s3-alpha-sig.figma.com/img/ed76/0bd2/dc09e6a239152f3692e81f49e87d94ed?Expires=1648425600&Signature=SH5jfL4wpxDK9owW63TVmcEX50ridBg7eLXkDa3RhBiCnTR~2WNrtBk-msr4RNRoYYRS~YfdposbXQqU2mLbWTCPk1plAnY~NIGg5moaKvRmYS4dKsHLvWmw~yE6R948kU4fRb8jhHgyIImyeTcoTL3UUZAv~ndSe31W4mvwqM~ov6NodRIFLDB02PEGoMdpERHVv-iXJ4dOS~k3DW06B0VDzNDhPfG543D0fzBcub7DGou7ocYkBOpC-Majx6amUPGcV5oyc5JVFEZCqH226y2dfm-J-7izNcd0vhQLp8ByDmP0FLjmotz7jLcCeyW-ZcIrufurzmSJRHEBmNhWvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            date: "11:00 am, Today",
            links: {},
            likes: 3,
            comments: 2
        }
    };
}
