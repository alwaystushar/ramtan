import { ArrowDown } from "lucide-react";
import BottomLeftBtn from "../../../../components/BottomLeftBtn";


export default function FoundationLeft() {
  return (
    <section
      className="
        relative 
        flex flex-col justify-between
         text-[#061685]
        px-[8vw] py-[6vw]
        h-full   
      "
    >


      {/* === Bottom Left Text + Ripple Button === */}
   
   <div className="hidden lg:block">
   <BottomLeftBtn
        borderColor="border-[#061685]" 
  rippleColor="#061685" 
   />
   </div>

    </section>
  );
}
