import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Function to send email using EmailJS
  const submitEmail = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",   // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // replace with your EmailJS Template ID
        templateParams,
        "YOUR_PUBLIC_KEY"    // replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          reset(); // clear form after sending
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col text-start">
      <form className="flex flex-col" onSubmit={handleSubmit(submitEmail)}>
        <label htmlFor="name" className="text-white mt-5 px-2">Name</label>
        <input
          className="md:w-[30vw] w-full mt-2 mb-5 px-5 py-3 bg-[#1e1e1e] border border-[#5b5b5b] rounded-lg text-[#929292]"
          type="text"
          id="name-input"
          placeholder="Your Name"
          {...register("name", { required: "Your name is required!" })}
        />

        <label htmlFor="email" className="text-white mt-5 px-2">Email</label>
        <input
          className="md:w-[30vw] w-full mt-2 mb-5 px-5 py-3 bg-[#1e1e1e] border border-[#5b5b5b] rounded-lg text-[#929292]"
          type="email"
          id="email-input"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address!",
            },
          })}
        />

        <label htmlFor="message" className="text-white mt-5 px-2">Message</label>
        <textarea
          className="md:w-[30vw] w-full h-[8em] mt-2 mb-5 bg-[#1e1e1e] p-3 border border-[#5b5b5b] rounded-md text-[#929292]"
          id="message-input"
          placeholder="Write your message here..."
          {...register("message", { required: "Please write a message!" })}
        />

        <button
          type="submit"
          className="cta-button cursor-pointer rounded-lg border border-brand-orange px-6 py-3 bg-brand-orange text-white hover-bg-brand-opaque-dark transition mx-3 my-3"
        >
          Submit
        </button>

        {errors.email && (
          <p className="text-white text-sm px-2 text-center">
            {errors.email.message}
          </p>
        )}
      </form>
    </div>
  );
}