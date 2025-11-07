import React from 'react'
import LEther from "../assets/LEther.png";
import Pattern from "../assets/Pattern.png";
import Ygraph from "../assets/Ygraph.png"
import Ggraph from "../assets/Ggraph.png"
import Bitcoin from '../assets/BitLogo.png';
import Litecoin from "../assets/Litelogo.png"
import Cardano from "../assets/CardanoLogo.png"




function Markets() {
  const markets = [
    {
      logo: LEther,
      name: "Ethereum",
      symbol: "ETH/USDT",
      price: "39,786 USD",
      change: "+14.02%",
      image: Pattern,
    },
    {
      logo: Bitcoin,
      name: "Bitcoin",
      symbol: "ETH/USDT",
      price: "21,786 USD",
      change: "+4.02%",
      image: Ygraph,
    },
    {
      logo: Litecoin,
      name: "Litecoin",
      symbol: "ETH/USDT",
      price: "9,786 USD",
      change: "-4.02%",
      image: Pattern,
    },
    {
      logo: Cardano,
      name: "Cardano",
      symbol: "ETH/USDT",
      price: "4,786 USD",
      change: "+0.02%",
      image: Ggraph,
    },

  ]

  return (
    <div>
      
      <h1 className='LiveMarket'>Live Markets</h1>
      {markets.map((market, index) => (
        <div
          key={index}
          className="grid grid-cols-[auto_1fr_auto_auto_1fr] gap-x-4 items-center"
        >
          {/* Market Logo image */}
          <img src={market.logo} alt={market.name} className="w-[50px] h-[50px] " />
          
          {/* Targets Logo name and Market symbol ensuring that they are placed accordingly */}
          <div>
            <p className="font-semibold text-#0000">{market.name}</p>
            <p className="Change">{market.symbol}</p>
          </div>

          
          <div>
            <p className='Change'>Change</p>
            {/* Gets the market change value */}
            <p className={`font-semibold ${market.change}`}>
            {market.change}
            </p>
          </div>

          {/* Targets the price and ensures that they are on the left */}
          <div className='text-left ml-10'>
            <p className='Change'>Price</p>
            <p className="Price font-semibold">{market.price}</p>
            
          </div>
          
          {/* Graph image */}
          <div className='ml-10'>
            <img src={market.image} alt={market.name} />
          </div>
        
          
        </div>
      ))}
    </div>
  )
}

export default Markets