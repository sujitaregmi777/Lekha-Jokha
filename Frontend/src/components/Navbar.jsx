import { Link, Outlet, useLocation } from "react-router-dom";
import {Home  , Moon ,Sun,Menu, MessageCircleMore, Bell ,Bot } from "lucide-react";
import React, { useContext,useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "./Sidebar";
import Message from "./Message";
import Notification from "./Notification";


export default function Nabvar(){
    const { ptheme , toggletheme} = useContext(ThemeContext); 
    const [sidebar, setsidebar ] = useState(false);
    const [message, setmessage ] = useState(false);
    const [notif, setnotif ] = useState(false);
    const [ai , setai] = useState(false);
    const togglesidebar =() =>{
        setsidebar(prev => !prev);
    }
    const togglemessage = () => {
        setmessage(prev => !prev);

    }
    const togglenotif = () => {
        setnotif(prev => !prev);

    }
    const toggleai = () => {
        setnotif(prev => !prev);

    }
    const location = useLocation();
    const hidelayout = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/";
    if(hidelayout) {
        return <Outlet/>;
    }
    return(
        <>
            <div className="p-4 border-2 flex gap-6 items-center justify-between">  
                <button onClick={togglesidebar}  className="bg-white text-purple-700  hover:bg-black ">< Menu size = { 20 }/></button>
                <div className="flex gap-6 justify-center items-center">
                    {/* <Link to = "/" className = "flex items-center gap-2">< Home size = { 20 }/> Home</Link> */}
                </div>
        <div className="flex gap-4 items-center">
                <button onClick={togglemessage}  className="bg-white text-purple-700   hover:bg-black ">< MessageCircleMore size = { 20 }/></button>
                <button onClick={togglenotif}  className="bg-white text-purple-700   ">< Bell size = { 20 }/></button>
                <button onClick={toggletheme} className=" px-2 py-3">{ptheme === "light" ? <Moon size={18}/> : <Sun size={18}/>}</button>
      </div>
                <button onClick={toggleai} className=" px-2 py-3 self-end justify-end"> <Bot size={20}/> </button>

      </div>
            <Sidebar open={sidebar} onclose={() => setsidebar(false)} />
                      {/* <div
        className={`p-4 transition-all duration-300 dark:bg-blue-950 dark:text-white ${
          sidebar ? "ml-64" : "ml-30"
        }`}></div> */}

            <Message open={message} onclose={() => setmessage(false)} />
            <Notification open={notif} onclose={() => setnotif(false)} />
            {/* <Chat open={ai} onclose={() => setai(false)} /> */}
        </>

    );
}


