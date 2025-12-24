import {  Route, Routes } from "react-router-dom";
import ThemeP from "./context/ThemeContext";
import Layout  from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
// import Expenses from "./pages/Expenses";
import Password from "./pages/Password";
import ExpensesSolo from "./pages/Expenses/ExpensesSolo";
import ExpensesGroup from "./pages/Expenses/ExpensesGroup";
import Settlement from "./pages/Settlement/Settlement";


export default function App(){
  return(
    <ThemeP>
      <Navbar />
        <Routes>
          <Route element = {<Layout/>} />
          <Route  path = "/" element = {<Home/>} />
          <Route  path = "/dashboard" element = {<Dashboard/>} />
          <Route  path = "/settlement" element = {<Settlement/>} />
          {/* <Route  path = "/home" element = {<Home/>} /> */}
          <Route  path = "/login" element = {<Login/>} />
          <Route  path = "/register" element = {<Register/>} />
          <Route  path = "/group" element = {<ExpensesGroup/>} />
          <Route  path = "/solo" element = {<ExpensesSolo/>} />
          <Route  path = "/password" element = {<Password/>} />
        </Routes>


    </ThemeP>
  );
}