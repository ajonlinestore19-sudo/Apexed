"use client";
import { Card } from "../types";
import { motion } from "framer-motion";
import Image from "next/image";

const items: Card[] = [
    {
        card_id: "0",
        content: "Save time without adding complexity",
        icon: "/assets/clock-icon.svg",
    },
    {
        card_id: "1",
        content: "Reduce human error",
        icon: "/assets/shield-icon.svg",
    },
    {
        card_id: "2",
        content: "Speed up daily workflows",
        icon: "/assets/thunder-icon.svg",
    },
    {
        card_id: "3",
        content: "Allow business owners to focus on strategy, not repetition",
        icon: "/assets/briefcase-icon.svg",
    },
];

function Solution() {
  return (
    <section className="flex md:flex-row flex-col gap-x-[15em] my-[5em] mx-[3vw] items-center justify-center
    urbanist">
      <div className="flex flex-col md:items-start items-center">
        <div className="md:w-[10vw] w-[50vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
              The Solution       
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl mx-3 my-5 text-white leading-[1em]">
              <span className="text-gradient-orange">Apexed AI </span> removes <br />
              operational friction through <br /> intelligent automation.
          </h1>
          <span>
            <p className="text-white my-5 mx-3">We design systems that:</p>
          </span>
        </div>
      </div>  
        <div className="flex flex-col relative h-[350px] overflow-y-hidden my-8 bg-[#121212] px-[1vw] border border-[#1E1E1E] rounded-lg">
          <section className="flex flex-col py-[1em] bg-[#121212] z-20 items-center">
            <div className="flex md:w-[20vw] w-[80vw] p-3 text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center justify-center rounded-full">
              This is work smarter done properly.       
            </div>
          </section>
          <motion.section className="flex flex-col"
            animate={{ y: "-50%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {
              items.map((item) => (
                <div key={item.card_id} className="border border-[#1E1E1E] bg-[#121212] rounded-lg p-[5px]
                my-[8px]">
                    <div className="flex items-center gap-4 w-full py-4 px-6
                      border border-[#1e1e1e] rounded-lg">
                        <div className="flex items-center justify-center 
                            w-12 h-12  border border-[#2a2a2a] rounded-md">
                            <Image src={item.icon} alt={item.content} width={25} height={25}/>
                        </div>
                        <p className="text-gradient-orange text-sm p-3 flex-1">{item.content}</p>
                        <Image src="/assets/ellipse-icon.svg" alt="ellipse" width={7} height={7} />
                    </div>
                </div>
              ))
            }
            {
              items.map((item) => (
                <div key={item.card_id} className="border border-[#1E1E1E] bg-[#121212] rounded-lg p-[5px]
                my-[8px]">
                    <div className="flex items-center gap-4 w-full py-4 px-6
                      border border-[#1e1e1e] rounded-lg">
                        <div className="flex items-center justify-center 
                            w-12 h-12  border border-[#2a2a2a] rounded-md">
                            <Image src={item.icon} alt={item.content} width={25} height={25}/>
                        </div>
                        <p className="text-gradient-orange text-sm p-3 flex-1">{item.content}</p>
                        <Image src="/assets/ellipse-icon.svg" alt="ellipse" width={7} height={7} />
                    </div>
                </div>
              ))
            }
          </motion.section>
        </div>
    </section>
  );
}


export default Solution;