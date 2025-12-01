import React from 'react'
import {  X } from 'lucide-react';

export default function Message({open , onclose}) {
    if (!open)
    return (true);
  return (
            <div className={`fixed top-0 -end-0  w-64 h-screen z-50 bg-white dark:bg-blue-950  shadow-xl transition-transform duration-300 ${ open ? 'translate-x-0 ': '-translate-x-full'}`}>
              <button onClick={onclose } className='p-2'>< X size={20}/></button>
        <h1 className="text-xl font-bold ">Message</h1>
      
    </div>
  )
}

