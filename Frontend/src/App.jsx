import {  Route, Routes } from "react-router-dom";
import ThemeP from "./context/ThemeContext";
import Layout  from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
import Expenses from "./pages/Expenses";
import Sidebar from "./components/Sidebar";
import Password from "./pages/Password";
import Message from "./components/Message";
import Notification from "./components/Notification";

export default function App(){
  return(
    <ThemeP>
      <Navbar />
        <Routes>
          <Route element = {<Layout/>} />
          <Route  path = "/" element = {<Home/>} />
          <Route  path = "/dashboard" element = {<Dashboard/>} />
          {/* <Route  path = "/home" element = {<Home/>} /> */}
          {/* <Route  path = "/components/sidebar" element = {<Sidebar/>} />  */}
          {/* <Route  path = "/components/message" element = {<Message/>} />  */}
          {/* <Route  path = "/components/notification" element = {<Notification/>} />  */}
          <Route  path = "/login" element = {<Login/>} />
          <Route  path = "/register" element = {<Register/>} />
          <Route  path = "/expenses" element = {<Expenses/>} />
          <Route  path = "/password" element = {<Password/>} />
        </Routes>


    </ThemeP>
  );
}