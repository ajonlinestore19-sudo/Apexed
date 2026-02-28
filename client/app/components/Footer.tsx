"use client"
import Image from "next/image"
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"

interface EmailForm {
    email: string,
}

export default function Footer() {

    const { register, handleSubmit, formState: { errors } } = useForm<EmailForm>();

    const submitEmail: SubmitHandler<EmailForm> = async (data) => {

        if (!data) {
            console.log("ERROR: No user input");
            return;
        }

        try {
            const response = await fetch("/api/send-emailopt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                })
            });

            const result = await response.json();

            if (!response.ok) {
                console.log("ERROR: ", result.error);
            }

            console.log("Email sent successfully!", result);
        } catch (error) {
            console.log("Something went wrong: ", error);
        }
    }

    return (
        <>
        <section className="md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-5 text-start urbanist">
            <div className="grid-rows-3 px-[8vw]">
                <span className="flex flex-col">
                    <Image src="/assets/images/apexed-logo.webp" alt="footer-logo" width={70} height={70} />
                </span>
                <span className="flex flex-col py-3">
                    <p className="text-sm text-[#929292]">
                        Stay ahead with Automation Insights get the latest AI
                        automation trends and smart solutions delivered straight to your inbox
                    </p>
                </span>
                <span className="relative flex flex-col py-3">
                    <form className="flex flex-row" onSubmit={handleSubmit(submitEmail)}>
                        <input className="md:w-[25vw] w-full px-5 py-3 bg-[#1e1e1e] border border-[#5b5b5b] rounded-full text-[#929292]" 
                        type="text" id="email-input" placeholder="Your Email"
                        {...register("email", {
                            required: "Your email is required!",
                        })} />
                        <button className="absolute z-10 bottom-4 right-1 p-2 rounded-full bg-[#c64811] cursor-pointer">
                            <Image src="/assets/arrow-icon.svg" alt="submit-icon" width={25} height={25} />
                        </button>
                    </form>
                </span>
            </div>
            <div className="flex flex-col px-6 py-3 gap-y-1">
                <p className="text-[#929292] text-sm py-3">/NAVIGATION</p>
                <Link href="/"><span className="text-sm text-white no-underline">Home</span></Link>
                <a className="text-sm text-white no-underline" href="#">Services</a>
                <a className="text-sm text-white no-underline" href="#">About</a>
                <Link href="/contact"><span className="text-sm text-white no-underline">Contact Us</span></Link>
            </div>
            <div className="flex flex-col px-6 py-3 gap-y-1">
                <p className="text-[#929292] text-sm py-3">/RESOURCES</p>
                <a className="text-sm text-white no-underline" href="#">Privacy Policy</a>
                <a className="text-sm text-white no-underline" href="#">Terms of Service</a>
            </div>
            <div className="flex flex-col px-6 py-3 gap-y-1">
                <p className="text-[#929292] text-sm py-3">/SOCIALS</p>
                <a className="text-sm text-white no-underline" href="#">Facebook</a>
                <a className="text-sm text-white no-underline" href="#">Instagram</a>
                <a className="text-sm text-white no-underline" href="#">X/Twitter</a>
                <a className="text-sm text-white no-underline" href="#">LinkedIn</a>
            </div>
        </section>
            <div className="relative flex flex-col p-6 text-center items-center">
                <span>
                    <h1 className="text-[#929292] font-medium md:text-[15em] text-8xl py-3">APEXED</h1>
                </span>
                <span className="md:flex md:flex-row justify-between md:gap-x-[25vw]">
                    <p className="text-sm text-[#929292] py-1">© Copyright 2026. All Rights Reserved by Apexed</p>
                    <p className="text-sm text-[#929292] py-1">Designed & developed by Apexed Team</p>
                </span>
                <div className="absolute rotate-[180deg] bottom-0 -z-10 w-[1920px] md:h-[500px] h-[1080px]">
                    <Image src="/assets/glow-right.webp" alt="glow-effect" fill />
                </div>
                <div className="absolute rotate-[180deg] bottom-0 -z-10 w-[1920px] md:h-[500px] h-[1080px]">
                    <Image src="/assets/glow-left.webp" alt="glow-effect" fill />
                </div>
            </div>
        </>
    )
}