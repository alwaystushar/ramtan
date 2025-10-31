import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const ContactLast = () => {
  return (
    <div className="w-full overflow-hidden header-dark">
      {/* SECTION 1 */}
      <section
        className="relative flex items-end justify-center text-white lg:h-[100vh] h-[100vh]"
        style={{
          backgroundColor: "#002D9C",
          backgroundImage:
            "url('/svg/contact-bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
      >
        <h1 className="lg:text-[25vw] text-[49vw] font-bold lg:leading-[0.6] leading-[0.9] text-center mb-[-11vw] lg:whitespace-nowrap">
          Let’s Talk
        </h1>
      </section>

      {/* SECTION 2 - FOOTER */}
      <footer className="bg-white text-[#002D9C] px-[6vw] py-[5vw] flex flex-col md:flex-row justify-between gap-[6vw]">
        {/* Left Column - Navigation */}
        <div className="flex flex-col gap-[1vw] lg:text-[1.6vw] text-[5.6vw] font-medium">
          <a href="#" className="hover:text-[#0055ff]">Home</a>
          <a href="#" className="hover:text-[#0055ff]">About Us</a>
          <a href="#" className="hover:text-[#0055ff]">Events & Exhibitions</a>
          <a href="#" className="hover:text-[#0055ff]">Partners & Media</a>
          <a href="#" className="hover:text-[#0055ff]">Contact Us</a>

        </div>

        {/* Right Column - Contact Info */}
        <div className="flex flex-col lg:gap-[.2vw] gap-[1.2vw] lg:text-[1.2vw] text-[3.2vw] lg:text-end lg:items-end">
          <div className="flex items-center lg:gap-[0.8vw] gap-[3.8vw]">
            
            <span>+966 11 217 1717</span>
          </div>

          <div className="flex items-center lg:gap-[0.8vw] gap-[3.8vw]">
            
            <span>Event@ramtan-expo.com</span>
          </div>

          <div className="flex items-center lg:gap-[0.8vw] gap-[3.8vw] max-w-[25vw] leading-tight">
            
            <span>
              Al Olaya • King Fahad Road, Riyadh<br />
              Kingdom of Saudi Arabia
            </span>
          </div>

          <div className="flex items-center lg:gap-[.2vw] gap-[1.2vw] lg:pt-[1vw] pt-[3vw]">
            <a href="#"><Facebook size={22} /></a>
            <a href="#"><Instagram size={22} /></a>
            Ramtan
          </div>


        </div>


      </footer>

              <div className="flex lg:flex-row flex-col gap-[1vw] justify-between w-full text-[#002D9C] px-[6vw] pb-[4vw]">
                      <a href="mailto:join@ramtan-expo.com" className="mt-[1vw] lg:text-[1vw] text-[3vw]">
            join@ramtan-expo.com (Join Us)
          </a>

                    <p className="lg:text-[1vw] text-[3vw]">
            © 2025 Ramtan for Exhibitions and Conferences
          </p>
        </div>
    </div>
  );
};

export default ContactLast;
