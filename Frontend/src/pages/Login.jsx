import { useState } from "react";
export default function Login() {
    const [ username , setUsername] = useState();
    const [ password, setPassword] = useState();
    // const [message, setmessage] = useState();

    const handleLogin = e => {
        e.preventDefault();
        alert(`login as ${ username}`);
    };

    return(
        <div className="  h-screen w-screen">
        <div className=" flex flex-col items-center justify-center  mt-10 p-6  ">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
            type="text"
            className="p-2 border-rounded"
            placeholder="Enter your username"
            value = {username} 
            onChange = {e => setUsername(e.target.value)}
            />
            <input 
            type="text"
            className="p-2 border-rounded"
            placeholder="Enter your password"
            value = {password} 
            onChange = {e => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
           </form> 
        </div>
        </div>
    );
}