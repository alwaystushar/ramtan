import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default: first open

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
    <section className="w-full bg-white py-[6vw] px-[6vw] pb-0 flex flex-wrap items-center justify-between ">
      {/* === Left Side (Image + Text) === */}
      <div className="w-full lg:w-[50%] flex items-start justify-center">
        <h2 className="text-[2.8vw] w-[46vw] font-semibold text-[#001489] leading-tight mb-[2vw]">
          A few things you <br /> may want to ask us
        </h2>

        {/* Image */}
        <div className="mt-[3vw]">
          <img
            src="/img/Saudi_women.png" // replace with your image path
            alt="Ramtan Representative"
            className="w-[35vw] object-cover"
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
            {/* Question */}
            <div className="flex items-center justify-between">
              <h3
                className={`text-[1.1vw] font-medium transition-colors ${
                  openIndex === index
                    ? "text-[#001489]"
                    : "text-[#001489]/80 hover:text-[#001489]"
                }`}
              >
                {faq.question}
              </h3>

            </div>

            {/* Answer */}
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
    </section>
  );
}
