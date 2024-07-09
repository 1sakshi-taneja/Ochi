import React from "react";
import { RxDotFilled } from "react-icons/rx";

function EyeFooter() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="overflow-visible h-[150vh] w-full bg-[#CDEA67] text-zinc-900 z-10"
    >
      <div className="flex justify-center flex-col items-center pt-[28vh] font-['Founders_Grotesk_X-Condensed']">
        <h1 className=" text-[30vh] leading-[0.7] font-semibold">READY</h1>
        <h1 className="text-[30vh] leading-[0.7] font-semibold">TO START</h1>
        <h1 className="text-[30vh] leading-[0.7] font-semibold">
          THE PROJECT ?
        </h1>
        <button className="flex bg-zinc-900 text-[1vw] font-thin rounded-full mb-5 p-5 text-zinc-100 font-['Neue_Montreal']">
          <div className="mr-5 pl-3 pr-3"> START THE PROJECT</div>
          <span className="text-3xl">
            <RxDotFilled />
          </span>
        </button>
        <h1 className="text-[1vw] font-['Neue_Montreal']">OR</h1>
        <button className="flex border  border-slate-950 text-[1vw] bg-[#CDEA67] rounded-full m-5 p-5 text-zinc-900 font-['Neue_Montreal']">
          <div className="mr-5 pl-3 pr-3">HELLO@OCHI.DESIGN</div>
          <span className="text-3xl">
            <RxDotFilled />
          </span>
        </button>
      </div>
    </div>
  );
}

export default EyeFooter;
