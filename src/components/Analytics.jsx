import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4 font-poppins">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics Dashboard
          </p>
          <h1 className="capitalize md:text-4xl sm:text-3xl text-2xl font-700 py-2">
            Manage Data analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            accusamus iure cum! Ullam suscipit quas magnam cupiditate doloribus,
            voluptas labore eos aliquid libero deleniti incidunt ad impedit ab
            qui similique.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
