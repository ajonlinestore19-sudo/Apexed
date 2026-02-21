import Image from "next/image"

export default function Services() {
    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[10vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                    Services        
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-gradient-orange">
                    Service Categories
                </h1>
                <span className="flex justify-center text-center my-5 px-3">
                    <p className="text-sm text-white">Choose the area where your business
                        needs automation.
                    </p>
                </span>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4 flex flex-col justify-center">
                <div className="p-5 bg-[#121212] border border-[#1e1e1e] rounded-lg text-start">
                    <span className="flex flex-row pb-2 justify-between">
                        <Image src="/assets/people-icon.svg" alt="people-icon" width={35} height={35} />
                        <Image src="/assets/ellipsis-1.svg" alt="ellipsis-1" width={25} height={25} />
                    </span>
                    <h2 className="text-white">HR & Internal Operations Automation</h2>
                    <span className="flex flex-col leading-[5px]">
                        <p className="text-[#929292] text-sm">
                            Resume screening, onboarding,
                            leave requests, <br /> and employee progress tracking.
                        </p>
                    </span>
                </div>
                <div className="md:col-span-2 bg-[#121212] p-5 border border-[#1e1e1e] rounded-lg text-start">
                    <span className="flex flex-row pb-2 justify-between">
                        <Image src="/assets/services-icon-2.svg" alt="services-icon-2" width={35} height={35} />
                        <Image src="/assets/ellipsis-2.svg" alt="ellipsis-2" width={25} height={25} />
                    </span>
                    <h2 className="text-white">Business Systems & Workflow Automation</h2>
                    <span className="flex flex-col leading-[5px]">
                        <p className="text-[#929292] text-sm text-start">
                            Custom web systems, POS solutions, automated <br /> computation,
                            and dashboards.
                        </p>
                    </span>
                </div>

                <div className="md:col-span-2 p-5 bg-[#121212] border border-[#1e1e1e] rounded-lg text-start">
                    <span className="flex flex-row pb-2 justify-between">
                        <Image src="/assets/services-icon-3.svg" alt="services-icon-3" width={35} height={35} />
                        <Image src="/assets/ellipsis-3.svg" alt="ellipsis-3" width={25} height={25} />
                    </span>
                    <h2 className="text-white">Customer Engagement Automation</h2>
                    <span className="flex flex-col leading-[5px]">
                        <p className="text-[#929292] text-sm">
                            Chatbots, auto-replies, announcements
                            and <br /> lead response workflows.
                        </p>
                    </span>
                </div>
                <div className="bg-[#121212] p-5 border border-[#1e1e1e] rounded-lg text-start">
                    <span className="flex flex-row pb-2 justify-between">
                        <Image src="/assets/growth-icon.svg" alt="growth-icon" width={35} height={35} />
                        <Image src="/assets/ellipsis-4.svg" alt="ellipsis-4" width={25} height={25} />
                    </span>
                    <h2 className="text-white">Business Systems & Workflow Automation</h2>
                    <span className="flex flex-col leading-[5px]">
                        <p className="text-[#929292] text-sm text-start">
                            Custom web systems, POS solutions, automated <br /> computation,
                            and dashboards.
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
}