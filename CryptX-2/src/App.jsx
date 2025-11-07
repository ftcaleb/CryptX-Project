import React from 'react'
import Sidebar, { SidebarItem } from './Components/Sidebar'
import { LifeBuoy, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings, ImageOff, Import } from 'lucide-react'
import Header from './Components/Header'
import Card from './Components/Card';
import Markets from './Components/Markets';
import Transactions from './Components/Transactions';
import Statistic from './assets/Statistic.png';


function App() {
  return (
    // Opened div for all content
    <div className=" flex">
          <Sidebar />
          
          {/* Opened div to and used flex-1 to push content away from sidebar */}
        <div className='flex-1 flex-col'>
        <Header />

        {/* added a margin left of 5 for main content */}
        <main className='ml-5'>

          {/* created a grid for the card component and statistics graph  */}
          <div className='grid grid-cols-2 '>
          <div className='grid grid-cols-1'>
            <Card />
          </div>
          {/* added seperate div for graph to posiition it correctly */}
          <div className=' flex flex-col top-[149px] left-[863px]'>
            <img src={Statistic} alt="Statistics Graph" className='Statistics'/>
          </div>
          </div>
        {/* Opened another div to take in the markets and transactions componenents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Markets />
            <Transactions/>
          </div>
        </main>
        </div>
        
        
    </div>
  )
}

export default App