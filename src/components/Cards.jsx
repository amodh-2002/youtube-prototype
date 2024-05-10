import React from "react";
import Card from "./Card";
import cardData from "../utils/cardData";

const Cards = () => {
  return (
    <div className="font-poppins w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            mainText={card.mainText}
            price={card.price}
            storage={card.storage}
            users={card.users}
            capacity={card.capacity}
            className={index === 1 ? "bg-gray-300" : "bg-white"}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
