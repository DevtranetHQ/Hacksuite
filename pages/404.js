import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Error() {
  return (
    <div className="relative h-screen">
      <div className="absolute m-0 -translate-y-2/4 top-2/4 left-0 right-0">
        <div className="flex items-center mx-auto justify-center">
          <img src="/assets/404.svg" className="w-[750px] h-auto" alt="404" />
        </div>

        <div className="button-small md:button-medium button-fruit-salad text-12px  w-fit mx-auto">
          <Link href="/">
            <p className="text-white dark:text-white flex items-center">
              <Icon icon="mdi:home" className="mr-2" />
              Go back home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
