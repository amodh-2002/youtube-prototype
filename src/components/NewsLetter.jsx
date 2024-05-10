import React from "react";

const NewsLetter = () => {
  return (
    <div className="font-poppins w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2 my-2">
          <h1 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Wants tips and trick to optimize the flow ?
          </h1>
          <p>Sign Up for Our NewsLetter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-4 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data . Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
