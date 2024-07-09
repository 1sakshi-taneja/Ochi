import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      data-scroll-section
      className="w-full h-screen bg-zinc-900 pt-1 "
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[9vw] h-[5.7vw] mt-[1vw]"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt="My Image"
                    />
                  </motion.div>
                )}
                <h1 className="py-[1vw] pt-[2vw] text-[9vw] uppercase -mb-[3vw] leading-[.75]  font-['Founders_Grotesk_X-Condensed'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 ">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={item}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
