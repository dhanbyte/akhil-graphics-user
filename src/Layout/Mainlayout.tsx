import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Slidbar";
import Navbar from "../components/Navbar";

export default function MainlayoutPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <Navbar  />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}