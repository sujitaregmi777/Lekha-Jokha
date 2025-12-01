import {  X } from 'lucide-react';

export default function Notification({open , onclose}) {
    if (!open)
    return (true);
  return (
            <div className={`fixed top-0 -end-0 border-2  w-64 h-screen bg-blue-300 shadow-xl transition-transform duration-300 ${ open ? 'translate-x-0 ': '-translate-x-full'}`}>
              <button onClick={onclose } className='p-2'>< X size={20}/></button>
        <h1 className="text-xl font-bold ">Notification</h1>
      
    </div>
  )
}

