import React from "react";

export default function Empty() {
  return (
    <div className="w-[300] h-[600] flex flex-col relative bg-transparent border-[10px] border-[#C4C4C4] rounded-lg items-center justify-center mx-auto md:h-[400px] md:w-[1200px] xs:w-[370px] xs:h-[271px]">
      <p className="text-[#A5A5A5] font-bold font-body md:text-[72px] text-[24px] mb-3 ">
        WOW, SUCH EMPTY!
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/emptyFace.svg" alt="Empty" className="md-h-52 md:w-52 h-24 w-24" />
    </div>
  );
}
