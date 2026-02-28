"use client"
import { useForm, SubmitHandler } from "react-hook-form"

interface EmailForm {
    name: string,
    email: string,
    message: string,
}

export default function ContactForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<EmailForm>();

    
    const submitEmail: SubmitHandler<EmailForm> = async (data) => {

        if (!data) {
            console.log("ERROR: No user input");
            return;
        }

        try {
            const response = await fetch("/api/send-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    message: data.message,
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
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[15vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                    Contact Us        
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-white">
                    Got any <span className="text-gradient-orange">questions?</span>
                </h1>
            </div>
            <div className="px-4">
                <p className="mt-8 md:mx-[25vw] text-white">
                    Send us a message through the contact form below!
                </p>
            </div>
            <div className="flex flex-col text-start">
                <form className="flex flex-col" onSubmit={handleSubmit(submitEmail)}>

                    <label htmlFor="name" className="text-white mt-5 px-2">Name</label>
                    <input className="md:w-[30vw] w-full mt-2 mb-5 px-5 py-3 bg-[#1e1e1e] border border-[#5b5b5b] rounded-lg text-[#929292]" 
                    type="text" id="name-input" placeholder="Your Name" 
                    {...register("name", {
                        required: "Your name is required!",
                    })} />

                    <label htmlFor="email" className="text-white mt-5 px-2">Email</label>
                    <input className="md:w-[30vw] w-full mt-2 mb-5 px-5 py-3 bg-[#1e1e1e] border border-[#5b5b5b] rounded-lg text-[#929292]" 
                    type="email" id="email-input" placeholder="Your Email" 
                    {...register("email", {
                        required: "Email is required!",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address!"
                        }
                    })} />
                    
                    <label htmlFor="message" className="text-white mt-5 px-2">Message</label>
                    <textarea className="md:w-[30vw] w-full h-[8em] mt-2 mb-5 bg-[#1e1e1e] p-3 border border-[#5b5b5b] rounded-md text-[#929292]"
                    id="message-input" placeholder="Write your message here..."
                    {...register("message", {
                        required: "Please write a message!",
                    })} />
                    
                    <button className="cta-button cursor-pointer rounded-lg border border-brand-orange px-6 py-3 bg-brand-orange text-white
                    hover-bg-brand-opaque-dark transition mx-3 my-3">
                        Submit
                    </button>
                    {
                        errors.email && (
                            <p className="text-white text-sm px-2 text-center">
                                {errors.email.message}
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}