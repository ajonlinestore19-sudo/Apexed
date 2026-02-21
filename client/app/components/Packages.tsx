"use client"
import Image from "next/image"
import { packages } from "../package-inclusions"
import { useState } from "react"

export default function Packages() {

    const [yearly, toggleYearly] = useState<boolean>(false);

    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[10vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                    Packages        
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-gradient-orange">
                    Workflow Packages
                </h1>
                <span className="flex justify-center text-center my-5 px-3">
                    <p className="text-sm text-white">
                        After choosing a service category, select how many workflows you want automated.
                    </p>
                </span>
                <span className="glass-button inline-block justify-center py-2 text-center border border-[#1e1e1e] rounded-full"
                onClick={() => toggleYearly(!yearly)}>
                    <button className={!yearly ? 
                    `text-white text-sm py-3 px-4 rounded-full mx-2 bg-[#121212] border border-[#1e1e1e]` :
                    `text-white text-sm py-3 px-4 mx-2 rounded-full`}>Monthly</button>
                    <button className={yearly ? 
                    `text-white text-sm py-3 px-4 rounded-full mx-2 bg-[#121212] border border-[#1e1e1e]` :
                    `text-white text-sm py-3 px-4 mx-2 rounded-full`}>Yearly</button>
                </span>
            </div>
                
            <div className="flex flex-col md:flex-row justify-center gap-y-5 m-[1em] md:gap-x-[15px] text-start z-20">

                <div className="py-3 px-[2vw] md:w-[395px] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <p className="text-gradient-orange rounded-lg inline-block px-5 font-medium text-center text-lg p-2 border border-[#1e1e1e] my-3">Basic</p>
                    <span>
                        {!yearly ? 
                        <h3 className="text-white text-lg font-medium py-3">$446 /month</h3> : 
                        <h3 className="text-white text-lg font-medium py-3">$15,000 /yearly</h3>}
                        <p className="text-[#929292] py-3">Essential automation to get your workflows up and running fast.</p>
                    </span>
                    <div className="flex flex-col self-center">
                        <button className="flex flex-col glass-button rounded-lg px-6 py-3 text-white 
                        gradient-border transition text-center">
                            Get Started
                        </button>
                    </div>
                    <span>
                        <h3 className="text-white text-lg font-medium py-3">What's included:</h3>
                        {packages.filter((item) => item.type === "basic").map((item) => (
                            <span key={item.package_id} className="text-[#929292] py-3 text-wrap flex flex-row whitespace-pre-line">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-md border border-[#1e1e1e]">
                                    <Image src="/assets/checkmark.svg" alt="checkmark" width={20} height={20} />
                                </div>
                                <p className="px-3">{item.content}</p>
                            </span>
                        ))}
                    </span>
                </div>
                <div className="relative py-3 px-[2vw] md:w-[395px] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <p className="text-gradient-orange rounded-lg inline-block px-5 font-medium text-center text-lg p-2 border border-[#1e1e1e] my-3">Standard</p>
                    <span>
                        <Image src="/assets/light-ray.svg" className="absolute rounded-lg top-0 right-0" alt="light-ray-effect" width={250} height={250} />
                        {!yearly ? 
                        <h3 className="text-white text-lg font-medium py-3">$500 /month</h3> : 
                        <h3 className="text-white text-lg font-medium py-3">$15,000 /yearly</h3>}
                        <p className="text-[#929292] py-3">Advanced automation with custom workflows and integrations.</p>
                    </span>
                    <div className="flex flex-col">    
                        <button className="flex flex-col glass-button rounded-lg px-6 py-3 text-white 
                        gradient-border transition">
                            Get Started
                        </button>
                    </div>
                    <span className="flex flex-col">
                        <h3 className="text-white text-lg font-medium py-3">What's included:</h3>
                        {packages.filter((item) => item.type === "standard").map((item) => (
                            <span key={item.package_id} className="text-[#929292] py-3 text-wrap flex flex-row">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-[#1e1e1e] rounded-md">
                                    <Image src="/assets/checkmark.svg" alt="checkmark" width={20} height={20} />
                                </div>
                                <p className="px-3">{item.content}</p>
                            </span>
                        ))}
                    </span>
                </div>
                <div className="py-3 px-[2vw] md:w-[395px] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <p className="text-gradient-orange rounded-lg inline-block px-5 font-medium text-center text-lg p-2 border border-[#1e1e1e] my-3">Enterprise</p>
                    <span>
                        {!yearly ? 
                        <h3 className="text-white text-lg font-medium py-3">$1,199 /month</h3> : 
                        <h3 className="text-white text-lg font-medium py-3">$15,000 /yearly</h3>}
                        <p className="text-[#929292] py-3">Fully customied automation built for complex business needs.</p>
                    </span>
                    <div className="flex flex-col">
                        <button className="flex flex-col glass-button rounded-lg px-6 py-3 text-white 
                        gradient-border transition text-center">
                            Get Started
                        </button>
                    </div>
                    <span>
                        <h3 className="text-white text-lg font-medium py-3">What's included:</h3>
                        {packages.filter((item) => item.type === "enterprise").map((item) => (
                            <span key={item.package_id} className="text-[#929292] py-3 text-wrap flex flex-row">
                                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-[#1e1e1e] rounded-md">
                                    <Image src="/assets/checkmark.svg" alt="checkmark" width={20} height={20} />
                                </div>
                                <p className="px-3">{item.content}</p>
                            </span>
                        ))}
                    </span>
                </div>
            </div>
        </section>
    )
}