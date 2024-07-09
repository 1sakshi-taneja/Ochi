import React from "react";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      className="overflow-hidden w-full h-full mt-10 mb-10 flex items-center px-20 gap-5 bg-zinc-900"
    >
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        <div className="card relative w-full rounded-xl h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
