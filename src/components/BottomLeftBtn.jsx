import React from "react";
import { ArrowDown } from "lucide-react";
import RippleButton from "./RippleButton"; // adjust path if needed

const BottomLeftBtn = ({
  borderColor = "border-blue-900",
  rippleColor = "rgba(0,31,77,0.5)",
}) => {
  return (
    <div className="absolute bottom-[2vw] left-[3vw] flex flex-row gap-[1.2vw] z-30 text-[1vw]">
      <p className="opacity-90">
        Discover how we can <br />
        elevate your business
      </p>

      <RippleButton
        bg="rgba(0,0,0,0.4)"
        hoverBg="rgba(255,255,255,0.8)"
        color="#000"
        hoverColor="#000"
        borderColor={borderColor}
        rippleColor={rippleColor}
      >
        <ArrowDown className="w-[1.2vw] h-[1.2vw]" />
      </RippleButton>
    </div>
  );
};

export default BottomLeftBtn;
