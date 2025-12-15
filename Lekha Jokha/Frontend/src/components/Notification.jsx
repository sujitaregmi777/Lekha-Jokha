import {  X } from 'lucide-react';

export default function Notification({open , onclose}) {
    if (!open)
    return (true);
  return (
            <div className={`fixed  right-0  w-64 h-screen z-50  bg-white dark:bg-blue-950  shadow-xl transition-transform duration-300 ${ open ? 'translate-x-0 ': '-translate-x-full'}`}>
              <button onClick={onclose } className='p-2'>< X size={20}/></button>
        <h1 className="text-xl font-bold text-black dark:text-white ">Message</h1>
      
    </div>
  )
}

