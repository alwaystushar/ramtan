import { ArrowDown } from "lucide-react";
import BottomLeftBtn from "../../../../components/BottomLeftBtn";
import FadeUp from "../../../../components/FadeUp";


export default function FoundationLeft() {
  return (
    <section
      className="
        relative 
        flex flex-col justify-between
        bg-[var(--blue)] text-white
        px-[8vw] py-[6vw]
        h-full   
      "
    >
     
        
      
      {/* === Top Content === */}
      <div className="flex flex-col lg:gap-[1vw] gap-[5vw] lg:w-[16vw]  mt-[8vw]">
        <div>

           <FadeUp>
            <h3 className="uppercase lg:text-[1vw] text-[4.5vw] leading-[120%] text-white/80">
            Our reputation is built upon <br />a foundation of
          </h3>
           </FadeUp>
          
        </div>

        <div className="lg:space-y-[.75vw] space-y-[3vw] lg:text-[0.95vw] text-[4vw] leading-[120%]">
          <div>

             <FadeUp>
               <h4 className="text-white">Deep Expertise:</h4>
               <p className="font-light text-white/70 max-sm:mt-[2vw]">
                 Extensive industry knowledge and a proven track record of success.
               </p>
             </FadeUp>
          </div>

          <div>

             <FadeUp>
               <h4 className="text-white">
                 Operational Excellence:
               </h4>
               <p className="font-light text-white/70 max-sm:mt-[2vw]">
                 Efficient project management and seamless execution.
               </p>
             </FadeUp>
          </div>
            

          <div>
             <FadeUp>
            <h4 className="text-white">Global Reach:</h4>
            <p className="font-light text-white/70 max-sm:mt-[2vw]">
              A strong network and a diverse portfolio of events across the
              Middle East and beyond.
            </p>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* === Bottom Left Text + Ripple Button === */}
      <div className="hidden lg:block">
              <BottomLeftBtn
        borderColor="border-white" 
  rippleColor="#ffffff80" 
   />
      </div>

      

    </section>
  );
}
