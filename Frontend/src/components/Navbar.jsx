import { Outlet, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, MessageCircle, Bell, Bot } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AI from "./AI";
import Sidebar from "./Sidebar";
import Message from "./Message";
import Notification from "./Notification";
import User from "./User";

export default function Navbar() {
  const { ptheme, toggletheme } = useContext(ThemeContext);
  const [sidebar, setsidebar] = useState(false);
  const [message, setmessage] = useState(false);
  const [notif, setnotif] = useState(false);
  const [ai, setai] = useState(false);
  const [user, setuser] = useState(false);

  const togglesidebar = () => setsidebar(prev => !prev);
  const togglemessage = () => setmessage(prev => !prev);
  const togglenotif = () => setnotif(prev => !prev);
  const toggleai = () => setai(prev => !prev);
  const toggleuser = () => setuser(prev => !prev);

  const location = useLocation();
  const hidelayout = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/";
  
  const handleOnClick = () => {
    
  }
  if (hidelayout) {
    return <Outlet />;
  }

  return (
    <div  >
      {/* Main Navbar */}
      <div className="fixed top-0 z-40 backdrop-blur-lg  bg-white dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between " onClick={handleOnClick}  >

            {/* Left Section - Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglesidebar}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Toggle sidebar"
              >
                <Menu size={22} />
              </button>
              
              <div className=" sm:block">
                <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> 
                  Dashboard
                </h1>
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-2 ">
            {/* //  onClick={handleOnClick}> */}
              
              {/* Messages */}
              <button
                onClick={togglemessage}
                className="relative p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Messages"
              >
                <MessageCircle size={20} />
                <div className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              </button>

              {/* Notifications */}
              <button
                onClick={togglenotif}
                className="relative p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Notifications"
              >
                <Bell size={20} />
                <div className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  3
                </div>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggletheme}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {ptheme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* User Profile */}
              <button
                onClick={toggleuser}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="User menu"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  X
                </div>
                <div className="hidden md:block font-medium">Xyz</div>
              </button>
            </div>
          </div>
          {/* as outlet is where all pages are wrapped so i put pt as main */}
        <main className="pt-12">
        <Outlet />
      </main>



      {/* Floating AI Assistant Button */}
      <button
        onClick={toggleai}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl z-50 hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="AI Assistant"
      >
        <Bot size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        {/* <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
      </button>

      {/* Modals/Sidebars */}
      <Sidebar open={sidebar} onclose={() => setsidebar(false)} />
      <Message open={message} onclose={() => setmessage(false)} />
      <Notification open={notif} onclose={() => setnotif(false)} />
      <AI open={ai} onclose={() => setai(false)} />
      <User open={user} onclose={() => setuser(false)} />

      {/* Overlay for mobile */}
      {/* {(sidebar || message || notif || ai || user) && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => {
            setsidebar(false);
            setmessage(false);
            setnotif(false);
            setai(false);
            setuser(false);
          }}
        />
      )} */}
    </div>
  );
}