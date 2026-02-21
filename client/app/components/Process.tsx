"use client"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Process() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
    <>

    <section className="flex md:flex-row flex-col gap-x-[45vw] my-[5em] mx-[3vw] items-center justify-center
    urbanist">
      <div className="flex flex-col md:items-start items-center">
        <div className="md:w-[10vw] w-[50vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
              Process       
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl mx-3 my-5 text-white leading-[1em]">
            <span className="text-gradient-orange">How It Works</span>
          </h1>
        </div>
      </div>

        <div className="flex flex-col my-8 px-[1vw]">
          <section>
            <span>
                <p className="text-white my-5 mx-3">From setup to automation, we streamline<br/>
                your operations in just a few easy steps.
                </p>
            </span>
          </section>
        </div>
    </section>

    <section className="md:grid grid-cols-4 md:gap-x-5 mx-[5vw] mb-[2em] text-white urbanist">
        <div className="flex flex-col p-5 gap-y-4 bg-[#121212] my-[2em] border border-[#1e1e1e] rounded-lg">
            <div className="flex md:justify-center md:p-4 text-center bg-[#121212] border border-[#1e1e1e] rounded-md md:w-[4vw] w-[10vw]">
                <Image src="/assets/HIW-icon-1.svg" alt="how-it-works-1" width={25} height={25} />
            </div>
            <span className="flex">
                <p>Gain access to your personalized dashboard</p>
            </span>

            <div className="hiw-container border border-[#1e1e1e] rounded-lg flex flex-col md:text-center justify-center md:items-center p-5">
                <Image src="/assets/switch-1.svg" alt="switch-1" width={75} height={75} />
                <span className={`${isInView ? "typing-active" : ""}`} ref={ref}>
                    <p className="typing-overlay block">Get started with a custom</p>
                    <p className="typing-overlay block">workspace tailored to your</p>
                    <p className="typing-overlay block">business needs.</p>
                </span>
            </div>
        </div>
        <div className="flex flex-col p-5 gap-y-4 bg-[#121212] my-[2em] border border-[#1e1e1e] rounded-lg">
            <div className="flex md:justify-center md:p-4 text-center bg-[#121212] border border-[#1e1e1e] rounded-md md:w-[4vw] w-[10vw]">
                <Image src="/assets/HIW-icon-2.svg" alt="how-it-works-2" width={25} height={25} />
            </div>
            <span className="flex">
                <p>Choose which business processes you want automated</p>
            </span>

            <div className="hiw-container border border-[#1e1e1e] rounded-lg flex flex-col md:text-center justify-center md:items-center p-5">
                <Image src="/assets/switch-2.svg" alt="switch-2" width={75} height={75} />
                <span className={`${isInView ? "typing-active" : ""}`} ref={ref}>
                    <p className="typing-overlay block">Select from our range of</p>
                    <p className="typing-overlay block">automation solutions that</p>
                    <p className="typing-overlay block">fit your workflow.</p>
                </span>
            </div>
        </div>
        <div className="flex flex-col p-5 gap-y-4 bg-[#121212] my-[2em] border border-[#1e1e1e] rounded-lg">
            <div className="flex md:justify-center md:p-4 text-center bg-[#121212] border border-[#1e1e1e] rounded-md md:w-[4vw] w-[10vw]">
                <Image src="/assets/HIW-icon-3.svg" alt="how-it-works-3" width={25} height={25} />
            </div>
            <span className="flex">
                <p>We deploy automation tailored to your workflow</p>
            </span>

            <div className="hiw-container border border-[#1e1e1e] rounded-lg flex flex-col md:text-center justify-center md:items-center p-5">
                <Image src="/assets/switch-3.svg" alt="switch-3" width={75} height={75} />
                <span className={`${isInView ? "typing-active" : ""}`} ref={ref}>
                    <p className="typing-overlay block">Our team configures and</p>
                    <p className="typing-overlay block">implements solutions specific</p>
                    <p className="typing-overlay block">to your operations.</p>
                </span>
            </div>
        </div>
        <div className="flex flex-col p-5 gap-y-4 bg-[#121212] my-[2em] border border-[#1e1e1e] rounded-lg">
            <div className="flex md:justify-center md:p-4 text-center bg-[#121212] border border-[#1e1e1e] rounded-md md:w-[4vw] w-[10vw]">
                <Image src="/assets/HIW-icon-4.svg" alt="how-it-works-4" width={25} height={25} />
            </div>
            <span className="flex">
                <p>Experience faster, cleaner, and more efficient operations</p>
            </span>
            
            <div className="hiw-container border border-[#1e1e1e] rounded-lg flex flex-col md:text-center justify-center md:items-center p-5">
                <Image src="/assets/switch-4.svg" alt="switch-4" width={75} height={75} />
                <span className={`${isInView ? "typing-active" : ""}`} ref={ref}>
                    <p className="typing-overlay block">Watch your business</p>
                    <p className="typing-overlay block">transform with intelligent</p>
                    <p className="typing-overlay block">automation at work.</p>
                </span>
            </div>
        </div>
    </section>

    </>
    )
}