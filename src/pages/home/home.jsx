import React from "react";

export const Home = () => {
  return (
    <>
      {/* Section 1 - Dark Background */}
      <div
        id="home"
        className="h-[100vh] flex justify-center items-center bg-blue-900 header-dark"
      >
        <h1 className="text-white text-[5vw] font-bold text-center">
          Welcome to Our Website
        </h1>
      </div>

      {/* Section 2 - Light Background */}
      <div
        id="about"
        className="h-[100vh] flex justify-center items-center bg-white"
      >
        <p className="text-black text-[2vw] leading-[2.5vw] text-center max-w-[60vw]">
          Explore our features and services
        </p>
      </div>

      {/* Section 3 - Dark Background */}
      <div className="h-[100vh] flex justify-center items-center bg-blue-900 header-dark">
        <h1 className="text-white text-[5vw] font-semibold text-center">
          Another dark section
        </h1>
      </div>
    </>
  );
};

export default Home;
