import {  Route, Routes } from "react-router-dom";
import ThemeP from "./context/ThemeContext";
// import Layout  from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./pages/Sidebar";

export default function App(){
  return(
    <ThemeP>
      <Navbar/>
        <Routes>
          {/* <Route element = {<Layout/>} /> */}
          <Route  path = "/" element = {<Home/>} />
          <Route  path = "/login" element = {<Login/>} />
          <Route  path = "/register" element = {<Register/>} />
          <Route  path = "/dashboard" element = {<Dashboard/>} />
          <Route  path = "/sidebar" element = {<Sidebar/>} />
        </Routes>


    </ThemeP>
  );
}