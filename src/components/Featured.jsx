import { motion, useAnimation } from "framer-motion";
import { GoDotFill } from "react-icons/go";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: 0 });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div>
      <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-20">
          <h1 className="text-8xl tracking-tight font-['Neue_Montreal']">
            Featured projects
          </h1>
        </div>
        <div className="px-20">
          <div className="cards w-full flex mt-20 gap-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="relative cardcontainer w-1/2 h-[75vh]"
            >
              <h1 className="absolute font-['Neue_Montreal'] flex -translate-x-1/2 top-1/2 overflow-hidden -translate-y-1/2 left-full z-[9] text-[#CDEA67] text-9xl font-bold -mb-10 leading-none tracking-tighter">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="flex">
                <GoDotFill className="text-2xl" />
                <h1 className="ml-[0.2vw] font-['Neue_Montreal']">FYDE</h1>
              </div>

              <div className="card w-full h-full overflow-hidden">
                <img
                  className="w-full h-full bg-cover mt-4 rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt="FYDE"
                />
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className=" relative cardcontainer w-1/2 h-[75vh]"
            >
              <h1 className="absolute font-['Neue_Montreal'] flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 right-full z-[9] text-[#CDEA67] text-9xl font-bold -mb-10 leading-none tracking-tighter">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="flex">
                <GoDotFill className="text-2xl" />
                <h1 className="ml-[0.2vw] font-['Neue_Montreal']">TRAWA</h1>
              </div>
              <div className="card w-full  h-full overflow-hidden">
                <img
                  className="w-full h-full bg-cover mt-4 rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                  alt="TRAWA"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
