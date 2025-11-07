import { ChevronFirst, ChevronLast, MoreVertical, LifeBuoy, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings } from 'lucide-react';
import { createContext, useContext, useState } from 'react';
import cryptX from '../assets/cryptX.png';
import { FiPieChart, FiRepeat, FiMail, FiLogOut, FiX } from "react-icons/fi";
import { AiFillAppstore } from "react-icons/ai";
import { Wallet } from "lucide-react";



const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside>
      <nav className="h-full min-h-full flex flex-col bg-[#F4F5FA] border-r shadow-sm ">
        {/* Top Section */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={cryptX}
            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
            alt="logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        

        {/* Sidebar items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <SidebarItem icon={<AiFillAppstore size={20} />} text="Overview" active alert/>
            <SidebarItem icon={<FiPieChart size={20} />} text="Charts" />
            <SidebarItem icon={<FiRepeat size={20} />} text="Transactions" />
            <SidebarItem icon={<Wallet size={20} />} text="Wallet"  />
            <SidebarItem icon={<FiMail size={20} />} text="Mail Box" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<FiLogOut size={20} />} text="Logout" />
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
      ${
        active
          ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-700'
          : 'hover:bg-indigo-50 text-gray-600'
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 ml-6 bg-indigo-100 text-sm invisible opacity-20 -translate-x-3
          transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
