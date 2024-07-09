import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      data-scroll-section
      className="w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 overflow-hidden flex whitespace-nowrap">
        <motion.h1
          intitial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase -mb-20 pt-10 font-semibold"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          intitial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase -mb-[7vw] pt-10 font-semibold"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
