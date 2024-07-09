import React from "react";

const data = [
  { title: "Planetly", name: "Nina Walloch", action: "READ" },
  { title: "Workiz Easy", name: "Tomer Levy", action: "READ" },
  { title: "Premium Blend", name: "Ellen Kim", action: "READ" },
  { title: "Hypercare Systems", name: "Brendan Goss", action: "READ" },
  { title: "Officevibe", name: "Raff Labrie", action: "READ" },
  { title: "Orderlion", name: "Stefan Strohmer", action: "READ" },
  { title: "Black Book", name: "Jaci Smith", action: "READ" },
  { title: "Trawa Energy", name: "David Budde", action: "READ" },
];

function ClientReviews() {
  return (
    <div className="w-full h-full p-20">
      <h1 className="text-7xl font-['Neue_Montreal']">Clients’ reviews</h1>
      <div className="border-t-[1px] border-[#B2B2B2] -mx-20 mt-10 mb-7"></div>
      <div className="flex align-items font-['Neue_Montreal']">
        <div className="w-1/3">
          <h1 className="text-[2.2vh] font-normal leading-6">
            Karman Ventures
          </h1>
        </div>
        <div className="w-1/3">
          <h1 className="text-[2.2vh] font-normal leading-6">Services:</h1>
          <div className="flex flex-col items-start font-thin">
            <button className="text-[1vw] p-[1vh] mt-16 mb-2 uppercase rounded-3xl border-[1px] border-[#B2B2B2] mt-[5vw] ">
              investor deck
            </button>
            <button className="text-[1vw] p-[1vh] uppercase rounded-3xl border-[1px] border-[#B2B2B2]">
              sales deck
            </button>
          </div>
        </div>
        <div className="w-1/2 flex">
          <div className="mx-20">
            <h1 className="text-[2.2vh] font-normal leading-6">
              William Barnes
            </h1>
            <img
              className="mt-16 mb-10 w-[6vw] h-[6vw] rounded"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
            />
            <p className="text-[20px] w-[30vw] leading-7 mb-8 ">
              They were transparent about the time and the stages of the
              project.The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        <h1 className="text-[2.2vh]"> READ</h1>
      </div>

      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="border-t-[1px] -mx-20 mt-6 border-[#B2B2B2] pt-3 flex align-items font-['Neue_Montreal']"
          >
            <div className="mx-20 w-1/2">
              <a className="text-[2.2vh] underline" href="#">
                {item.title}
              </a>
            </div>
            <div className="w-1/2 flex justify-between">
              <h1 className="text-[2.2vh] ml-[2.6vw] font-normal">
                {item.name}
              </h1>
              <h1 className="text-[2.2vh] mx-20">{item.action}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-[#B2B2B2] -mx-20 mt-4"></div>
    </div>
  );
}

export default ClientReviews;
