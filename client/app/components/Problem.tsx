"use client"
import { motion, useInView } from "framer-motion";
import { Card } from "../types";
import Image from "next/image";
import { useRef } from "react";

const items: Card[] = [
    {
        card_id: "0",
        content: "Customer inquiries are answered late",
        icon: "/assets/clock-icon.svg",
    },
    {
        card_id: "1",
        content: "Sales and inventory are tracked manually",
        icon: "/assets/sales-icon.svg",
    },
    {
        card_id: "2",
        content: "Internal processes are slow and error-prone",
        icon: "/assets/exclamation-icon.svg",
    },
    {
        card_id: "3",
        content: "Social media execution is inconsistent",
        icon: "/assets/people-icon.svg",
    },
    {
        card_id: "4",
        content: "Business owners spend time on repetitive tasks instead of growth",
        icon: "/assets/thunder-icon.svg",
    },
    {
        card_id: "5",
        content: "Result: Lost leads, inefficiency, errors, and slower business growth",
        icon: "/assets/growth-icon.svg",
    },
];

export default function Problem() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[10vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                The Problem       
            </div>
            <div>
                <h1 className={`${isInView ? "typing-active" : ""}
                text-3xl md:text-4xl md:px-[27vw] mx-3 my-5`} ref={ref}>
                    <span className="typing-overlay block">
                        Many businesses lose opportunities not
                    </span>
                    <span className="typing-overlay block">
                        because of lack of demand, but because
                    </span>
                    <span className="typing-overlay block">
                        their operations can't keep up.
                    </span>
                </h1>
            </div>
            <div className="slider flex my-8 gap-x-[1vw]">
                <motion.section className="track flex w-max overflow-x-hidden gap-x-[1vw]" initial={{ x: 0 }}
                animate={{ x: "-35%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                }}>
                    {
                        items.map((item) => (
                            <div key={item.card_id} className="border border-[#1E1E1E] bg-[#121212] rounded-lg p-[5px]">
                                <div className="flex-row bg-[#121212] flex py-[1em] px-[3vw] align-center 
                                justify-center border border-[#1e1e1e] rounded-lg">
                                    <div className="md:ms-[-2vw] flex items-center justify-center 
                                        w-12 h-12  border border-[#2a2a2a]  rounded-md">
                                        <Image src={item.icon} alt={item.content} width={25} height={25}/>
                                    </div>
                                    <p className="text-gradient-orange text-sm p-3">{item.content}</p>
                                    <Image className="md:ms-[1vw] md:me-[-2vw]" src="/assets/ellipse-icon.svg" alt="ellipse" width={7} height={7} />
                                </div>
                            </div>
                        ))
                    }
                    {
                        items.map((item) => (
                            <div key={item.card_id} className="border border-[#1E1E1E] bg-[#121212] rounded-lg p-[5px]">
                                <div className="flex-row bg-[#121212] flex py-[1em] px-[3vw] align-center 
                                justify-center border border-[#1e1e1e] rounded-lg">
                                    <div className="md:ms-[-2vw] flex items-center justify-center 
                                        w-12 h-12  border border-[#2a2a2a]  rounded-md">
                                        <Image src={item.icon} alt={item.content} width={25} height={25}/>
                                    </div>
                                    <p className="text-gradient-orange text-sm p-3">{item.content}</p>
                                    <Image className="md:ms-[1vw] md:me-[-2vw]" src="/assets/ellipse-icon.svg" alt="ellipse" width={7} height={7} />
                                </div>
                            </div>
                        ))
                    }
                </motion.section>
            </div>
        </section>
    )
}