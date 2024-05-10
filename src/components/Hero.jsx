import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white font-poppins">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing With Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-3xl sm:text-2xl text-xl font-600 py-4">
            Fast,Flexible,Financing for
          </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "BTB",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "BMTC",
              1000,
              "SaaS",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="md:text-3xl sm:text-2xl text-xl font-600 pl-2 text-gray-300"
            repeat={Infinity}
          />
        </div>
        <p className="text-xl text-gray-300">
          Monitor Your Data analytics to increase for BTB,BTC & SaaS platform
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
