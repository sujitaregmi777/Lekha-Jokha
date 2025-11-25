import { Link } from "react-router-dom";
import {Home , UserPlus , Moon ,Sun,Menu } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Nabvar(){

    const { ptheme , toggletheme} = useContext(ThemeContext); 
    const [open ,setopen ] = useState(true); 
    return(
        <>
            <div className="p-4 bg-blue-200 dark:bg-blue-800 flex gap-6 items-center justify-between">  
                <Link to = "/sidebar" className="bg-white text-purple-700 absolute-right-2 top-9 ">< Menu size = { 20 }/></Link>
                <div className="flex gap-6 justify-center items-center">
                    <Link to = "/" className = "flex items-center gap-2">< Home size = { 20 }/> Home</Link>
                    <Link to = "/login" className = "flex items-center gap-2"> Login</Link>
                    <Link to = "/register" className = "flex items-center gap-2">< UserPlus size = { 20 }/> Register</Link>
                    {/* <Link to = "/dashboard" className = "flex items-center gap-2"> Dashboard</Link> */}
                </div>

                <button onClick={toggletheme} className=" px-2 py-3">{ptheme === "light" ? <Moon size={18}/> : <Sun size={18}/>}</button>
      </div>
        </>

    );
}


