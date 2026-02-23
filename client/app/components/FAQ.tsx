"use client"
import { useEffect, useState } from "react"
import { QnAComponent } from "../types"
import { questions } from "../questions";
import Image from "next/image";

export default function FAQ() {

    const [questionsList, setQuestionsList] = useState<QnAComponent[]>(questions);

    function toggleAccordion(question_id: number) {
        setQuestionsList(prevQuestionList => questionsList.map(question => question.qna_id === question_id ? {
            ...question, opened: !question.opened
        } : question));
    }

    useEffect(() => {
        console.log("Opened: ", questionsList);
    }, [questionsList]);

    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[10vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                    FAQ        
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-gradient-orange">
                    Need Answers?
                </h1>
                <span className="flex justify-center text-center my-5 px-3">
                    <p className="text-sm text-white">
                        Answers to frequently asked questions about our AI automation services.
                    </p>
                </span>
            </div>
            <div className="flex flex-col gap-y-3">
                {
                    questionsList.map((question) => (
                        <div className={question.opened ? 
                            "accordion-open md:w-[55vw] h-auto mx-4 bg-[#121212] border border-[#1e1e1e] rounded-lg p-3 text-start" :
                            "md:w-[55vw] h-[4.5em] mx-4 bg-[#121212] border border-[#1e1e1e] rounded-lg p-3 text-start"
                        } key={question.qna_id}>
                            <div className="flex flex-row justify-between p-1 items-center">
                                <h3 className="text-white text-md">{question.question}</h3>
                                <span className="w-[35px] h-[35px] p-2 border border-[#C64811] rounded-full cursor-pointer" 
                                onClick={() => {toggleAccordion(question.qna_id)}}>
                                    {question.opened ? 
                                    <Image src="/assets/minus-icon.svg" alt="minus-button" width={15} height={15} /> :
                                    <Image src="/assets/plus-icon.svg" alt="minus-button" width={15} height={15} />}
                                </span>
                            </div>
                            <div className="flex flex-col p-1 mt-3">
                                <p className="text-[#929292] text-sm whitespace-pre-line text-start pr-[18vw]">
                                    {question.opened ? question.answer : ""}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}