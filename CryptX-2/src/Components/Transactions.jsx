import React from 'react'
import Ticon from '../assets/Ticon.png'
import Bicon from '../assets/Bicon.png'

function Transactions() {
  // opened array for transaction information
    const transactions = [
        {
            logo: Ticon,
            name: "Ethereum",
            day: "Today, 19:30",
            change: "$24,102",
            take: "Received"
            },
            {
            logo: Bicon,
            name: "Bitcoin",
            day: "Today, 14:32",
            change: "$4,157",
            take: "Buy"
            },
            {
            logo: Bicon,
            name: "Bitcoin",
            day: "Today, 13:50",
            change: "$64,784",
            take: "Buy"
            },
            {
            logo: Bicon,
            name: "Ethereum",
            day: "Today, 19:30",
            change: "$14,265",
            take: "Buy"
            },
    ]


  return (
    <div>
      
      <h1 className='LiveMarket'>Transactions</h1>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="grid grid-cols-[auto_1fr_auto_auto_1fr] gap-x-4 items-end"
        >
          {/* Transaction Logo image */}
          <img src={transaction.logo} alt={transaction.name} className="w-[40px] h-[40px] " />
          
          {/* Targets Logo name and Transactions symbol ensuring that they are placed accordingly */}
          <div>
            <p className="font-semibold text-#0000">{transaction.name}</p>
            <p className="Change">{transaction.take}</p>
          </div>

          
          <div>
            <p className='Change font-[15px]'>{transaction.day}</p> 
            <p className={`font-semibold ${transaction.change}`}>
            {transaction.change}
            </p>
            {/* Gets the market change value */}
           
          </div>

          
        
          
        </div>
      ))}
    </div>
  )
}

export default Transactions