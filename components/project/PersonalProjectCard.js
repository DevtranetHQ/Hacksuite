import Image from "next/image";
import Link from "next/link";
import TimeIcon from "../icons/Time";
import PencilIcon from "../icons/Pencil";
import TrashIcon from "../icons/Trash";
import ViewIcon from "../icons/View";

export default function PersonalProjectCard({ name, description, image, published, date, id }) {
  const previewRoute = `/project/preview/${id}`;

  async function unpublishProject() {
    // TODO: Use id parameter
  }

  async function publishProject() {
    // TODO: Use id parameter
  }

  async function deleteProject() {
    // TODO: Use id parameter
  }

  return (
    <>
      <style jsx>{`
        article {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      <article className="mxs:mx-2 mxs:mb-8 mxs:mt-0 mxs:px-3 mxs:pb-3 mxs:rounded-[22px] container-gray-dark my-14 px-5 pt-5 pb-2 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <svg
              className="mxs:w-[12px] mxs:h-[12px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C4.47 20 0 15.5 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10.5 5V10.25L15 12.92L14.25 14.15L9 11V5H10.5Z"
                fill="#03A9F4"
              />
            </svg>
            <span className="mxs:text-12px caption">{date}</span>
          </div>
          <div className="inline-flex gap-x-2">
            <svg
              className="cursor-pointer fill-black dark:fill-white mxs:w-[12px] mxs:h-[12px]"
              width="20"
              height="20"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6758 9.875L19.125 11.3242L5.12667 25.2917H3.70833V23.8733L17.6758 9.875ZM23.2258 0.625C22.8404 0.625 22.4396 0.779167 22.1467 1.07208L19.3254 3.89333L25.1067 9.67458L27.9279 6.85333C28.5292 6.25208 28.5292 5.25 27.9279 4.67958L24.3204 1.07208C24.0121 0.76375 23.6267 0.625 23.2258 0.625ZM17.6758 5.54292L0.625 22.5938V28.375H6.40625L23.4571 11.3242L17.6758 5.54292Z" />
            </svg>
            <Link href={previewRoute}>
              <svg
                className="cursor-pointer stroke-black dark:stroke-white mxs:w-[12px] mxs:h-[12px]"
                width="25"
                height="25"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.375 4.625H23.125"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.375 4.625V13.875"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M20.043 16.9583L30.8346 6.16663" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M16.959 7.70837H7.70898V29.2917H29.2923V20.0417"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mxs:py-3 py-4">
          <div className="mxs:h-[128px] relative w-full h-[350px]">
            <Image layout="fill" objectFit="cover" src={image} />
            {!published && (
              <div className="mxs:rounded-xl mxs:text-24px mxs:p-1.5 mxs:top-2 mxs:right-2 absolute top-5 right-5 bg-white container-gray-dark p-3 rounded-md headline leading-none">
                Draft
              </div>
            )}
          </div>
          <h1 className="mxs:mt-2 mxs:text-24px heading">{name}</h1>
          <p className="mxs:text-12px font-bold italic">{description}</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <button className="flex gap-x-1 text-18px items-center" onClick={deleteProject}>
            <TrashIcon />
            <span className="mxs:text-12px pt-1">Delete</span>
          </button>
          {published ? (
            <button
              className="mxs:text-12px button-small button-heading dark:!bg-white dark:!text-heading"
              onClick={unpublishProject}>
              Unpublish
            </button>
          ) : (
            <button
              className="mxs:text-12px button-small button-orange-peel"
              onClick={publishProject}>
              Publish
            </button>
          )}
        </div>
      </article>
    </>
  );
}
