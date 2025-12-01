import { motion  } from "framer-motion";
import { Link } from "react-router";

export default function Home(){
    return(
        <div className="flex h-screen w-full relative items-center justify-center bg-blue-200 dark:bg-blue-600 mb-4" >
            <img src="https://cdn.bookmyforex.com/blog/uploads/2023/08/6-Best-International-Money-Transfer-Services-in-India.png" className="blur-sm w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black font-semibold px-4 mb-4">
                <motion.h1
                initial= {{ opacity: 0 , y: -30 }}
                animate = {{ opacity :1 , y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-6xl font-bold text-white text-center items-center mb-4"
                
                > Welcome to LekhaJokha</motion.h1>

                <motion.div
                initial = {{ opacity :0 , y:30 }}
                animate = {{opacity :1 , y:0 }}
                transition={{ duration : 1, delay :0.3 }}
                >
                    <p className="font-semibold font-serif text-white mb-4 gap-2">Every chapter of living carries its own balance of joy and change from friends to everyday transitions.</p>
                    <div className="flex flex-row  items-center justify-center  gap-4">
                    <Link to = "/register" className = "flex px-8 py-4 font-bold bg-emerald-500 rounded-md text-white hover:bg-emerald-300 hover:text-black">Register</Link>
                    <Link to = "/login" className = "flex px-8 py-4 font-bold  bg-emerald-500 rounded-md text-white hover:bg-emerald-300 hover:text-black">Get Started</Link>
</div>
                </motion.div>
                
      </div>
        </div>
        
    )
}