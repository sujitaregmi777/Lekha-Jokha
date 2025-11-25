import { createContext , useState } from "react";

export const ThemeContext = createContext();

export default function ThemeP( { children }) {
    const [ptheme ,newtheme]  = useState("light");

    const toggletheme= ()=>{
    newtheme((prev ) => (prev === "light" ? "dark" :"light"));
    };


    return(
        <ThemeContext.Provider value = {{ ptheme, toggletheme}}>
            <div className={ptheme ==="light" ? "bg-blue-200 text-black h-full w-full" : "bg-blue-700 text-white h-full w-full "}> { children }</div>


        </ThemeContext.Provider>

    )
}