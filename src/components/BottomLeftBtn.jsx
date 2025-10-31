import React from "react";
import { ArrowDown } from "lucide-react";
import RippleButton from "./RippleButton"; // adjust path if needed

const BottomLeftBtn = ({
  borderColor = "border-blue-900",
  rippleColor = "rgba(0,31,77,0.5)",
}) => {
  return (
    <div className="absolute lg:bottom-[2vw] bottom-[10vw] lg:left-[2vw] left-[6vw] flex flex-row lg:gap-[3.2vw] gap-[5vw] z-30 lg:text-[1vw] text-[3.5vw]">
      <p className="font-medium ">
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
        <ArrowDown className="iconBtn" />
      </RippleButton>
    </div>
  );
};

export default BottomLeftBtn;
