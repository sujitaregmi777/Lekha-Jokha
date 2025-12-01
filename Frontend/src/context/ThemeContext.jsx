import { createContext , useState, useEffect} from "react";

export const ThemeContext = createContext();

export default function ThemeP( { children }) {
    const [ptheme ,newtheme]  = useState("light");

    const toggletheme= ()=>{
    newtheme((prev ) => (prev === "light" ? "dark" :"light"));
    // localStorage.setItem("theme",ptheme)
    };
    useEffect(() => {
        const root = document.documentElement;
        if (ptheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [ptheme]);


    return(
        <ThemeContext.Provider value = {{ ptheme, toggletheme}}>
            {/* <div className={ptheme ==="light" ? "bg-white text-black min-h-screen w-full" : "bg-blue-900 text-white min-h-screen w-full "}> { children }</div> */}
            <div>{ children }</div>

        </ThemeContext.Provider>

    )
}