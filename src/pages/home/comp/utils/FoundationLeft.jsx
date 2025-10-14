import { ArrowDown } from "lucide-react";
import BottomLeftBtn from "../../../../components/BottomLeftBtn";


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
      <div className="flex flex-col gap-[1vw] max-w-[16vw] mt-[8vw]">
        <div>
          <h3 className="uppercase text-[1vw] leading-[1.5] text-white/70">
            Our reputation is built upon <br />a foundation of
          </h3>
        </div>

        <div className="space-y-[.75vw] text-[0.95vw] leading-[1.6]">
          <div>
            <h4 className="text-white">Deep Expertise:</h4>
            <p className="font-light text-white/70">
              Extensive industry knowledge and a proven track record of success.
            </p>
          </div>

          <div>
            <h4 className="text-white">
              Operational Excellence:
            </h4>
            <p className="font-light text-white/70">
              Efficient project management and seamless execution.
            </p>
          </div>

          <div>
            <h4 className="text-white">Global Reach:</h4>
            <p className="font-light text-white/70">
              A strong network and a diverse portfolio of events across the
              Middle East and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* === Bottom Left Text + Ripple Button === */}
      <BottomLeftBtn
        borderColor="border-white" 
  rippleColor="#ffffff80" 
   />
    </section>
  );
}
