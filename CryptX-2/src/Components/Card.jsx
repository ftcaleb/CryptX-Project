import React from "react";

//import images
import Bitcoin from "../assets/Bitcoin.png";
import Ethereum from "../assets/Ether.png";
import Litecoin from "../assets/Lite.png";
import Cardano from "../assets/Cardano.png";
import TrendG from "../assets/TrendG.png"
import TrendR from "../assets/TrendR.svg"


export default function Card() {
  // Array of objects are created
  const cards = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      image: Bitcoin,
      price: "$40,291",
      trend: "+0.25%",
      icon: TrendG,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      image: Ethereum,
      price: "$18,291",
      trend: "+0.25%",
      icon: TrendG,
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      image: Litecoin,
      price: "$8,291",
      trend: "+0.25%",
      icon: TrendG,
 
    },
    {
      name: "Cardano",
      symbol: "ADA",
      image: Cardano,
      price: "$3,291",
      trend: "-0.25%",
      icon: TrendR,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-rows-1 items-start gap-5 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 h-full shadow-md"
        >

             {/* Coin image */}
            <img
              src={card.image}
              alt={card.name}
              className="w-12 h-12 object-contain"
            />

          {/* Icon + change */}
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${card.bg} ${card.color} text-xl`}
            >
              
            </div>
            {/* up and down icons */}
            <img src={card.icon} alt={card.name} />
            <p
              className={`text-sm font-semibold ${
                card.trend.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {/* Trend Value */}
              {card.trend}
            </p>
          </div>

          {/* Price + name */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{card.price}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {card.name} - {card.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

