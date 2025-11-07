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
    <div className=" flex">
          <Sidebar />
        <div className='flex-1 flex-col'>
        <Header />
        <main className='ml-5'>
          <div className='grid grid-cols-2 '>
          <div className='grid grid-cols-1'>
            <Card />
          </div>
          <div className=' flex flex-col top-[149px] left-[863px]'>
            <img src={Statistic} alt="" className='Statistics'/>
          </div>
          </div>
        
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