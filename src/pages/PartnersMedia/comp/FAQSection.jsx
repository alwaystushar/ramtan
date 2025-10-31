import React, { useState } from "react";
import BottomLeftBtn from "../../../components/BottomLeftBtn.jsx";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can exhibitions and events benefit my organization?",
      answer:
        "Well-crafted events build lasting connections with attendees by showcasing unique value and fostering loyalty. Ramtan helps you engage your audience, grow your brand presence, and drive lasting impact through memorable experiences that boost recognition and overall organizational growth.",
    },
    {
      question: "What event services does Ramtan expertly provide?",
      answer:
        "Ramtan provides comprehensive event design, production, and management services, ensuring every project aligns with your goals and brand image.",
    },
    {
      question: "Why choose Ramtan to elevate your exhibitions and events?",
      answer:
        "Our experience, creativity, and attention to detail make every Ramtan event stand out — delivering exceptional quality and measurable results.",
    },
    {
      question: "How Ramtan can elevate your organization?",
      answer:
        "Through strategic event planning, immersive design, and flawless execution, Ramtan helps your organization connect meaningfully with your audience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===================== DESKTOP VIEW ===================== */}
      <section className="w-full relative bg-white  py-[6vw] px-[2vw] pb-0 flex flex-wrap items-center justify-between max-sm:hidden">
        {/* === Left Side (Image + Text) === */}
        <div className="w-full lg:w-[50%] lg:flex-row flex-col flex items-start justify-center">
          <h2 className="text-[2.8vw] w-[46vw] font-medium text-[#0021a9] leading-tight mb-[2vw] whitespace-nowrap">
            A few things you <br /> may want to ask us
          </h2>

          {/* Image */}
          <div className="mt-[3vw]">
            <img
              src="/img/Saudi_women.png"
              alt="Ramtan Representative"
              className="w-[65vw] object-cover"
            />
          </div>
        </div>

        {/* === Right Side (FAQ) === */}
        <div className="w-full lg:w-[50%] flex flex-col gap-[1vw]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#001489]/20 py-[1vw] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-[1.2vw] transition-colors ${
                    openIndex === index
                      ? "text-[#001489]"
                      : "text-[#001489]/80 hover:text-[#001489]"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[20vw] mt-[1vw]" : "max-h-0"
                }`}
              >
                <p className="text-[0.9vw] text-[#555] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Left Button */}
        <div className="text-blue-900">
          <BottomLeftBtn />
        </div>
      </section>

      {/* ===================== MOBILE VIEW ===================== */}
      <section className="w-full bg-white px-[6vw] py-[10vw] max-sm:pb-[0vw] flex flex-col gap-[6vw] sm:hidden">
        {/* Heading */}
        <h2 className="text-[9vw] font-semibold text-[#0021a9] leading-[110%] mb-[5vw]">
          A few things you <br /> may want to ask us
        </h2>

        {/* FAQs */}
        <div className="flex flex-col gap-[4vw]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#001489]/20 pb-[4vw] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-[4.5vw] font-medium transition-colors ${
                  openIndex === index
                    ? "text-[#001489]"
                    : "text-[#001489]/80 hover:text-[#001489]"
                }`}
              >
                {faq.question}
              </h3>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[100vw] mt-[3vw]" : "max-h-0"
                }`}
              >
                <p className="text-[3.8vw] text-[#555] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image at bottom */}
        <div className="w-full flex justify-center mt-[6vw]">
          <img
            src="/img/Saudi_women.png"
            alt="Ramtan Representative"
            className="w-[80vw] object-cover"
          />
        </div>
      </section>
    </>
  );
}
