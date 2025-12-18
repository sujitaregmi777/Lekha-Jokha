import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutDashboard, BadgeDollarSign, ClipboardMinus, Settings, CalendarCheck, BanknoteIcon as Banknote, X, UsersRound, UserRound, LogOut,Search,ChevronDown,ChevronUp} from 'lucide-react';

export default function Sidebar({ open, onclose }) {
  const [dropdown, setdropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  if (!open) return null;

  const toggledrop = () => {
    setdropdown(prev => !prev);
  };

  const menuItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/settlement", icon: ClipboardMinus, label: "Settlement" },
    { to: "/payment", icon: BadgeDollarSign, label: "Payment" },
    { to: "/approval", icon: CalendarCheck, label: "Approval" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } lg:hidden`}
        onClick={onclose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 md:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Menu
            </h2>
          </div>
          <button
            onClick={onclose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          
          {/* Dashboard */}
          <Link
            to="/dashboard"
            onClick={onclose}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 group"
          >
            <LayoutDashboard size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Dashboard</span>
          </Link>

          {/* Expenses/Income Dropdown */}
          <div className="space-y-1">
            <button
              onClick={toggledrop}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <Banknote size={20} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Expenses/Income</span>
              </div>
              {dropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* Dropdown Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                dropdown ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-4 pl-4 border-l-2 border-purple-200 dark:border-purple-900 space-y-1 py-2">
                <Link
                  to="/solo"
                  onClick={onclose}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 group"
                >
                  <UserRound size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-sm">Solo</span>
                </Link>
                <Link
                  to="/group"
                  onClick={onclose}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 group"
                >
                  <UsersRound size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-sm">Group</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Other Menu Items */}
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onclose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 group"
            >
              <item.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/login"
            onClick={onclose}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 group"
          >
            <LogOut size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}