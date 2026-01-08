import { Route, Routes } from "react-router-dom";
import ThemeP from "./context/ThemeContext";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
import Password from "./pages/Password";
import ExpensesSolo from "./pages/Expenses/ExpensesSolo";
import ExpensesGroup from "./pages/Expenses/ExpensesGroup";
import Settlement from "./pages/Settlement/Settlement";
import Approval from "./pages/Approval/Approval";
import NotificationProvider from "./context/NotificationContext";
import Usersetting from "./pages/Usersetting";
import ProfileProvider from "./context/ProfileContext";

export default function App() {
  return (
    <ThemeP>
      <NotificationProvider>
        <ProfileProvider>
          <Navbar />
          <Routes>
            <Route element={<Layout />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settlement" element={<Settlement />} />
            {/* <Route  path = "/home" element = {<Home/>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/group" element={<ExpensesGroup />} />
            <Route path="/solo" element={<ExpensesSolo />} />
            <Route path="/password" element={<Password />} />
            <Route path="/usersetting" element={<Usersetting />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
            <Route path="/approval" element={<Approval />} />
          </Routes>
        </ProfileProvider>
      </NotificationProvider>
    </ThemeP>
  );
}
