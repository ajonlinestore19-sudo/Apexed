"use client"
import { useState } from "react";
import Image from "next/image";

export default function Team() {

    const [members, toggleMembers] = useState<boolean>(false);

    return (

    <section className="relative flex flex-col justify-center text-center items-center my-[5em]
    gap-y-3 urbanist">
        <div>
            <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-gradient-orange">
                Our Team
            </h1>
            <span className="flex justify-center text-center my-5 md:px-[34.5vw] px-5">
                <p className="text-sm text-white leading-[2em]">
                    We’re a small team focused on building practical AI automation solutions that help businesses simplify processes and work more efficiently.
                </p>
            </span>
            <span className="glass-button inline-block justify-center py-2 text-center border border-[#1e1e1e] rounded-full cursor-pointer"
            onClick={() => toggleMembers(!members)}>
                <button className={!members ? 
                `text-white text-sm py-3 px-4 rounded-full mx-2 bg-[#121212] border border-[#1e1e1e] cursor-pointer` :
                `text-white text-sm py-3 px-4 mx-2 rounded-full cursor-pointer`}>Founders</button>
                <button className={members ? 
                `text-white text-sm py-3 px-4 rounded-full mx-2 bg-[#121212] border border-[#1e1e1e] cursor-pointer` :
                `text-white text-sm py-3 px-4 mx-2 rounded-full cursor-pointer`}>Executives</button>
            </span>
        </div>
            
        <div className="flex flex-col md:flex-row justify-center gap-y-5 m-[1em] md:gap-x-[15px] text-start z-20">
            <div className="relative md:w-[395px] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                <span className="flex flex-col justify-center align-center items-center rounded-lg">
                    <Image src={!members ? 
                        "/assets/images/sjay-prof.webp" :
                        "/assets/images/skyrone-prof.webp"
                    } alt="professional-pic-1" width={400} height={450} />
                </span>
                <div className="absolute flex flex-col md:w-[375px] w-[90%] bottom-5 left-5 z-20 p-2 bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <h3 className="text-white text-md">{!members ? "SJ Inoue" : "Mckinley Soguilon"}</h3>
                    <span className="absolute z-20 right-5 bottom-4 p-2 border border-[#c64811] rounded-full">
                        <Image src="/assets/plus-icon.svg" alt="plus-icon" width={15} height={15} />
                    </span>
                    <p className="text-[#929292] text-sm">{!members ? "Co-Founder" : "Head Of Media"}</p>
                </div>
            </div>

            <div className="relative md:w-[395px] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                <span className="flex flex-col justify-center align-center items-center rounded-lg">
                    <Image src={!members ?
                        "/assets/images/ajay-prof.webp" :
                        "/assets/images/lance-prof.webp"
                    } alt="professional-pic-2" width={400} height={450} />
                </span>
                <div className="absolute flex flex-col md:w-[375px] w-[90%] bottom-5 left-5 z-20 p-2 bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <h3 className="text-white text-md">{!members ? "Ajay Camacho" : "Lance Maghanoy"}</h3>
                    <span className="absolute z-20 right-5 bottom-4 p-2 border border-[#c64811] rounded-full">
                        <Image src="/assets/plus-icon.svg" alt="plus-icon" width={15} height={15} />
                    </span>
                    <p className="text-[#929292] text-sm">{!members ? "Founder" : "CTO"}</p>
                </div>
            </div>

            <div className="relative md:w-[395px] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                <span className="flex flex-col justify-center align-center items-center rounded-lg">
                    <Image src={!members ?
                        "/assets/images/tim-prof.webp" :
                        "/assets/images/dave-prof.webp"
                    } alt="professional-pic-3" width={400} height={450} />
                </span>
                <div className="absolute flex flex-col md:w-[375px] w-[90%] bottom-5 left-5 z-20 p-2 bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <h3 className="text-white text-md">{!members ? "Tim Cuasay" : "Dave Glomar"}</h3>
                    <span className="absolute z-20 right-5 bottom-4 p-2 border border-[#c64811] rounded-full">
                        <Image src="/assets/plus-icon.svg" alt="plus-icon" width={15} height={15} />
                    </span>
                    <p className="text-[#929292] text-sm">{!members ? "COO" : "Head Of Design"}</p>
                </div>
            </div>
        </div>
    </section>
    )
}