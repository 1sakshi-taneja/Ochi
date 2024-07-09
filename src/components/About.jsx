import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA67] rounded-tr-3xl rounded-tl-3xl text-black">
      <h1 className="font-[Neue_Montreal] text-[3.5vw] leading-[3.5vw] tracking-tight font-light">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="border-[#a1b562] border-t-[1px] mt-14 flex align-center ">
        <h1 className="w-1/2 mt-6 text-2xl font-extralight">
          What you can expect:
        </h1>
        <div className="w-1/4">
          <p className="mt-6 text-[1.2vw] font-extralight">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="mt-6 text-[1.2vw] font-extralight">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-[#a1b562] pt-10 mt-20 flex gap-5">
        <div className="w-1/2">
          <h1 className="text-7xl font-light">Our approach:</h1>
          <button className="px-10 py-6 mt-10 bg-zinc-900 text-white rounded-full flex gap-10 items-center ">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] h-auto">
          <img
            className="rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="About-Image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
