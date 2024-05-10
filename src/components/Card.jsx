import React from "react";

const Card = ({ img, mainText, price, storage, users, capacity }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img src={img} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white" />
      <h2 className="text-2xl font-bold text-center py-8">{mainText}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className=" text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage} </p>
        <p className="py-2 border-b mx-8">{users} </p>
        <p className="py-2 border-b mx-8">{capacity} </p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black">
        Start Trail
      </button>
    </div>
  );
};

export default Card;
