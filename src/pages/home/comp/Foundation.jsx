import LeftSection from './utils/FoundationLeft';
import RightSection from './utils/FoundationRight';

export default function Foundation() {
  return (
    <section
      id="about"
      className="
        grid grid-cols-12 
        w-[100vw] 
        overflow-hidden 
        header-dark
      "
    >
      {/* Left Side (5/12) */}
      <div className="col-span-12 lg:col-span-5">
        <LeftSection />
      </div>

      {/* Right Side (7/12) */}
      <div className="col-span-12 lg:col-span-7">
        <RightSection />
      </div>
    </section>
  );
}
