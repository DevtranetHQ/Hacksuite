import React from "react";

export default function NotifEmpty() {
  return (
    <div className=" flex flex-col relative bg-transparent rounded-lg items-center justify-center mx-auto ">
      <p className="text-[#A5A5A5] font-bold font-body md:text-[72px] text-[24px] mb-3 ">
        WOW, SUCH EMPTY!
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/emptyFace.svg" alt="Empty" className="md-h-52 md:w-52 h-24 w-24" />
    </div>
  );
}
