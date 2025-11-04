import React from 'react'
import Sidebar, { SidebarItem } from './Components/Sidebar'
import { LifeBuoy, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings } from 'lucide-react'
import Header from './Components/Header'



function App() {
  return (
    <main className="App">
      <div>
        <Header />
      </div>
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Overview" active />
        <SidebarItem icon={<BarChart3 size={20} />} text="Charts" />
        <SidebarItem icon={<UserCircle size={20} />} text="Transactions" />
        <SidebarItem icon={<Boxes size={20} />} text="Wallet" alert />
        <SidebarItem icon={<Package size={20} />} text="Mail Box" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Logout" />
      </Sidebar>
      
    </main>
    
  )
}

export default App