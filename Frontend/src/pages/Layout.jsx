import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Message from "../components/Message";
import Notification from "../components/Notification";

export default function Layout() {
  return (
    
    <>
    <Sidebar />
    <Message />
    <Notification />
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </>
  );
}
