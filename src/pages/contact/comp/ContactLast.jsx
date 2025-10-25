import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const ContactLast = () => {
  return (
    <div className="w-full overflow-hidden header-dark">
      {/* SECTION 1 */}
      <section
        className="relative flex items-end justify-center text-white h-[100vh]"
        style={{
          backgroundColor: "#002D9C",
          backgroundImage:
            "url('/svg/contact-bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
      >
        <h1 className="text-[25vw] font-bold leading-[80%] whitespace-nowrap">
          Let’s Talk
        </h1>
      </section>

      {/* SECTION 2 - FOOTER */}
      <footer className="bg-white text-[#002D9C] px-[6vw] py-[5vw] flex flex-col md:flex-row justify-between gap-[6vw]">
        {/* Left Column - Navigation */}
        <div className="flex flex-col gap-[1vw] text-[1.6vw] font-medium">
          <a href="#" className="hover:text-[#0055ff]">Home</a>
          <a href="#" className="hover:text-[#0055ff]">About Us</a>
          <a href="#" className="hover:text-[#0055ff]">Events & Exhibitions</a>
          <a href="#" className="hover:text-[#0055ff]">Partners & Media</a>
          <a href="#" className="hover:text-[#0055ff]">Contact Us</a>

        </div>

        {/* Right Column - Contact Info */}
        <div className="flex flex-col gap-[.2vw] text-[1.2vw] text-end items-end">
          <div className="flex items-center gap-[0.8vw]">
            
            <span>+966 11 217 1717</span>
          </div>

          <div className="flex items-center gap-[0.8vw]">
            
            <span>Event@ramtan-expo.com</span>
          </div>

          <div className="flex items-center gap-[0.8vw] max-w-[25vw] leading-tight">
            
            <span>
              Al Olaya • King Fahad Road, Riyadh<br />
              Kingdom of Saudi Arabia
            </span>
          </div>

          <div className="flex items-center gap-[.2vw] pt-[1vw]">
            <a href="#"><Facebook size={22} /></a>
            <a href="#"><Instagram size={22} /></a>
            Ramtan
          </div>


        </div>


      </footer>

              <div className="flex justify-between w-full text-[#002D9C] px-[6vw] pb-[4vw]">
                      <a href="mailto:join@ramtan-expo.com" className="mt-[1vw] text-[1vw]">
            join@ramtan-expo.com (Join Us)
          </a>

                    <p className="text-[1vw]">
            © 2025 Ramtan for Exhibitions and Conferences
          </p>
        </div>
    </div>
  );
};

export default ContactLast;
