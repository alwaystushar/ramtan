import React from "react";

export default function PartnersTenth() {
  const team = [
    { name: "Rawan Al Farraj", role: "COO" },
    { name: "Mohamed Biuomey", role: "Senior Event Director" },
    { name: "Rehab Alsaheel", role: "Event Solutions Specialist" },
    { name: "Sufiyan Alnasri", role: "Client Experience Lead" },
  ];

  const cards = [
    {
      tag: "ROI",
      title: "Event ROI: Measuring Impactful Experiences vs. Costly Incentives",
      date: "2 Apr 2023",
    },
    {
      tag: "EVENTS",
      title:
        "Unforgettable Events: Creating Extraordinary Experiences Beyond Monetary Rewards",
      date: "1 Apr 2023",
    },
    {
      tag: "MANAGEMENT",
      title:
        "Maximizing Engagement: Experiential Gifts vs. Traditional Incentives",
      date: "30 Mar 2023",
    },
  ];

  return (
    <section className="w-full bg-white px-[6vw] py-[5vw] flex justify-center">
      {/* ====== DESKTOP VIEW ====== */}
      <div className="hidden sm:grid w-full max-w-[75vw] grid-cols-3 gap-[1vw] auto-rows-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border border-gray-300 p-[3vw] pt-[2.5vw] bg-white flex flex-col justify-between h-[23vw]"
          >
            <div>
              <p className="inline-block text-[0.8vw] text-gray-700 border border-gray-400 rounded-full px-[0.7vw] py-[0.2vw] mb-[1.5vw]">
                {card.tag}
              </p>
              <h3 className="text-[1.3vw] font-semibold text-[#001489] leading-tight mb-[1vw]">
                {card.title}
              </h3>
            </div>
            <p className="text-[0.85vw] text-gray-500">{card.date}</p>
          </div>
        ))}

        <div className="col-span-2 bg-[#001489] text-white p-[2.5vw] flex flex-col justify-between mt-[1vw]">
          <h3 className="lg:text-[2vw] leading-[125%] text-[1.5vw] font-semibold mb-[1vw]">
            What are you <br className="max-sm:hidden" /> looking for?
          </h3>
          <input
            type="text"
            placeholder="Enter your request"
            className="mt-[1vw] py-[1vw] w-full bg-transparent border-b border-b-[#2A4DFF30] text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>

        <div className="bg-white border border-gray-300 p-[2vw] mt-[1vw]">
          {team.map((person, i) => (
            <div
              key={i}
              className="flex items-center gap-[1vw] py-[0.9vw] border-b border-gray-200 last:border-0"
            >
              <div className="w-[2.8vw] h-[2.8vw] bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="text-[1vw] font-medium text-[#001489]">
                  {person.name}
                </h4>
                <p className="text-[0.9vw] text-gray-500">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== MOBILE VIEW ====== */}
      <div className="flex flex-col w-full gap-6 sm:hidden">
        {/* Scrollable Cards */}
        <div className="flex gap-2 overflow-x-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="max-w-[86vw] flex-shrink-0 border border-gray-300 p-4 bg-white flex flex-col justify-between h-[45vh]"
            >
              <div>
                <p className="inline-block text-[2vw] text-gray-700 border border-gray-400 rounded-full px-2 py-[2px] mb-2">
                  {card.tag}
                </p>
                <h3 className="text-[8vw] font-semibold text-[#001489] leading-snug mb-2">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500">{card.date}</p>
            </div>
          ))}
        </div>

        {/* Blue Input Box */}
        <div className="bg-[#001489] text-white p-6 flex flex-col justify-between h-[80vw]">
          <h3 className="mb-3 text-lg font-semibold">
            What are you looking for ?
          </h3>
          <input
            type="text"
            placeholder="Enter your request"
            className="p-2 bg-transparent border-b border-b-[#2A4DFF30] text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>

        {/* Team List */}
        <div className="p-4 bg-white border border-gray-300">
          {team.map((person, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-3 border-b border-gray-200 last:border-0"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="text-[#001489] font-medium text-sm">
                  {person.name}
                </h4>
                <p className="text-xs text-gray-500">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
