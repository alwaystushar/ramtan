import { ArrowDown } from "lucide-react";
import RippleButton from "../../../../components/RippleButton.jsx";

export default function FoundationLeft() {
  return (
    <section
      className="
        relative
        flex flex-col justify-between
        bg-[#06178b] text-white
        px-[8vw] py-[6vw]
        h-full   /* ← fills height of its grid cell */
      "
    >
      {/* === Top Content === */}
      <div className="flex flex-col gap-[2vw] max-w-[24vw] mt-[8vw]">
        <div>
          <h3 className="uppercase tracking-[0.15em] text-[0.9vw] leading-[1.5] text-white/70">
            Our reputation is built upon a foundation of
          </h3>
        </div>

        <div className="space-y-[1.8vw] text-[0.95vw] leading-[1.6]">
          <div>
            <h4 className="font-semibold text-white">Deep Expertise.</h4>
            <p className="text-white/70">
              Extensive industry knowledge and a proven track record of success.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Operational Excellence.</h4>
            <p className="text-white/70">
              Efficient project management and seamless execution.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Global Reach.</h4>
            <p className="text-white/70">
              A strong network and a diverse portfolio of events across the Middle
              East and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* === Bottom Left Text + Ripple Button === */}
      <div className="absolute bottom-[2vw] left-[3vw] flex flex-row gap-[1.2vw] z-30 text-[1vw] font-light items-center">
        <p className="opacity-90 leading-[1.2vw]">
          Discover how we can <br /> elevate your business
        </p>

        <RippleButton
          bg="rgba(255,255,255,0.1)"
          hoverBg="rgba(255,255,255,0.3)"
          onClick={() => console.log('Scroll to next section')}
        >
          <ArrowDown className="w-[1.2vw] h-[1.2vw]" />
        </RippleButton>
      </div>
    </section>
  );
}
