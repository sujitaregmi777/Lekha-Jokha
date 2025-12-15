import { useState } from "react";
import { Link } from "react-router";
import { User, Lock } from 'lucide-react';
export default function Login() {
    const [ username , setUsername] = useState();
    const [ password, setPassword] = useState();
    // const [message, setmessage] = useState();

    const handleLogin = e => {
        e.preventDefault();
        alert(`login as ${ username}`);
    };

    return(
        <div className=" h-screen w-screen flex ">
                  <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img
          src="login.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
        <div className=" w-1/2 flex flex-col items-center justify-center p-10 bg-gray-100 shadow-2xl">
            <h1 className="text-3xl font-extrabold font-serif mb-4">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4  mb-6 mt-10">
                <div className="flex items-center gap-2">   
                    
            {/* <label className="text-black font-bold text-xl">Username :</label> */}
            <input 
            type="text"
            className=" flex-1 p-3  border-black border-2 rounded-lg bg-slate-300 text-black text-xl"
            placeholder="   Enter your username"
            value = {username} 
            onChange = {e => setUsername(e.target.value)}
            />
          </div>
            <div className="flex items-center gap-2">
                {/* <label  className=" flex-1 text-black font-bold text-xl">Password :</label> */}
            <input 
            type="password"
            className=" flex-1 p-3 border-black border-2 rounded-lg  bg-slate-300 text-black text-xl"
            placeholder="   Enter your password"
            value = {password} 
            onChange = {e => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <Link to = "/password"  className = "font-bold hover:text-black hover:underline text-blue-500  self-center">Forget Password?</Link>
        <p className="text-black text-xl font-semibold self-center ">Don't have account?
            <Link to = "/register"  className = "font-bold hover:text-black hover:underline text-blue-500 p-2">Register now</Link>
        </p>
           </form> 
        </div>
        </div>
    );
}