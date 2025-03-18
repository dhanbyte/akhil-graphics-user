import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Slidbar";
import Navbar from "../components/Navbar";

export default function MainlayoutPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex  h-screen">
     <div className="fixed ">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
     </div>
     
      <div className={`flex-1 lg:pl-[16%]  transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <Navbar  />

          
        <main className="p-2   lg:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}