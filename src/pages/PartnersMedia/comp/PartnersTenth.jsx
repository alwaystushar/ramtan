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
      {/* === Container === */}
      <div className="w-full max-w-[75vw] grid grid-cols-3 gap-[1vw] auto-rows-auto">
        {/* === Top Row (3 Cards) === */}
        {cards.map((card, i) => (
          <div
            key={i}
            className="border border-gray-300  p-[1.5vw] pt-[2.5vw] bg-white flex flex-col justify-between h-[50vh]"
          >


            <div>
                           <p className="inline-block text-[0.8vw] text-gray-700 border border-gray-400 rounded-full px-[0.7vw] py-[0.2vw] mb-[0.7vw]">
              {card.tag}
            </p>
            <h3 className="text-[1.1vw] font-semibold text-[#001489] leading-tight mb-[1vw]">
              {card.title}
            </h3> 
            </div>

            <p className="text-[0.85vw] text-gray-500">{card.date}</p>
          </div>
        ))}

        {/* === Bottom Left: Blue Box (spans 2 columns) === */}
        <div className="col-span-2 bg-[#001489] text-white  p-[2.5vw] flex flex-col justify-between mt-[1vw]">
          <h3 className="text-[1.5vw] font-semibold mb-[1vw]">
            What are you looking for ?
          </h3>
          <input
            type="text"
            placeholder="Enter your request"
            className="mt-[1vw] p-[1vw] w-full  bg-transparent  border-b border-b-[#2A4DFF30] text-white placeholder:text-white/60 focus:outline-none"
          />
        </div>

        {/* === Bottom Right: Team List === */}
        <div className="bg-white border border-gray-300  p-[2vw] mt-[1vw]">
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


    </section>
  );
}
