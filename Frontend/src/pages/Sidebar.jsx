import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import { LayoutDashboard, BadgeDollarSign, ClipboardMinus, Settings, CalendarCheck, BanknoteArrowDown, X } from 'lucide-react';


export default function Sidebar(){
    const [open , setopen] = useState(true);
    const nav = useNavigate();
    if (!open) 
        return (true);


    return(
        <div className="relative w-72">
        < X size = { 25}  className="flex bg-blue-950 text-white hover:underline hover:text-blue-500 absolute top-4 right-4 " onClick={() => {setopen(false);
             nav("/dashboard")}}/>
        <div  className="p-4 flex  flex-col gap-7 pt-20" >
            <input type="Search" placeholder="  Search" className="w-40 h-10 border-black border rounded-md" />
            <Link to = "/dashboard" className="text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500" >< LayoutDashboard size = { 25 } />Dashboard</Link> 
            <Link to = "/expenses" className="text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500" >< BanknoteArrowDown size = { 25 } />Expenses/Income</Link>  
            <Link to = "/reports" className="text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500" >< ClipboardMinus size = { 25 } />Report</Link>  
            <Link to = "/payment" className="text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500" >< BadgeDollarSign size = { 25 } />Payment</Link>  
            <Link to = "/approval" className="text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500" >< CalendarCheck size = { 25 } />Approval</Link>  
            <Link to = "/settings" className="text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500" >< Settings size = { 25 } />Settings</Link>  

        </div>
        
        </ div>

    );
}