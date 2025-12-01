import { useState } from "react";
import { Link } from "react-router";
import { ShieldUser } from "lucide-react";
export default function Register(){

    const [rusername , rsetusername] = useState();
    const [rpassword , rsetpassword] = useState();
    const [email , setemail] = useState();
    const [password , setpassword] = useState();

    const handleregister = (e) => {
        e.preventDefault();
        alert('Register as ${rusername} with email ${email}');
    };

    return(
                <div className=" h-screen w-screen  border flex flex-col items-center justify-center relative">
        <img src="https://cdn.bookmyforex.com/blog/uploads/2023/08/6-Best-International-Money-Transfer-Services-in-India.png" alt="" className="blur-sm w-full h-full bg-cover absolute" />
        <div className=" flex flex-col items-center justify-center  mt-10 p-10 h-fit w-fit bg-blue-200 mb-10 border border-black relative">
            <h1 className=" flex items-center text-3xl font-bold mb-4 gap-1"> < ShieldUser  size = { 30 }/>Register</h1>
            <p className="text-sm font-mono font-bold mb-10" >Connect with us</p>
            <form onSubmit={handleregister} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
            <label className="text-black font-bold text-xl">Username :</label>
            <input 
            type="text"
            className=" flex-1 p-3  border-black border-2 rounded bg-slate-300 text-black text-xl  focus:border-emerald-400"
            placeholder="   Enter your username"
            value = {rusername} 
            onChange = {e => rsetusername(e.target.value)}
            />
          </div>
            <div className="flex  items-center gap-2">
            <label className="text-black font-bold text-xl flex-1">Email :</label>
            <input 
            type="email"
            className=" flex-1 p-3  border-black border-2 rounded bg-slate-300 text-black text-xl"
            placeholder="   Enter your email"
            value = {email} 
            onChange = {e => setemail(e.target.value)}
            />
          </div>
            
            <div className="flex items-center gap-2">
                <label  className=" flex-1 text-black font-bold text-xl">Password :</label>
            <input 
            type="password"
            className=" flex-1 p-3 border-black border-2 rounded  bg-slate-300 text-black text-xl"
            placeholder="   Enter your password"
            value = {password} 
            onChange = {e => setpassword(e.target.value)}
            />
            </div>
            <div className="flex items-center gap-2">
                <label  className=" flex-1 text-black font-bold text-xl">Password :</label>
            <input 
            type="password"
            className=" flex-1 p-3 border-black border-2 rounded  bg-slate-300 text-black text-xl"
            placeholder="   Enter your password"
            value = {rpassword} 
            onChange = {e => rsetpassword(e.target.value)}
            />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded mb-2 w-40 self-center mt-2">
          Register
        </button>
        <p className="text-black text-xl font-semibold self-center">Already register?
            <Link to = "/login"  className = "font-bold hover:text-black hover:underline text-blue-500 p-2">Login</Link>
        </p>
           </form> 
        </div>
        </div>
    );
}
    