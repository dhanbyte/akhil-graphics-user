
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMonitor,
  FiCalendar,
  FiMessageSquare,
  FiLayout,

} from "react-icons/fi";

export default function Sidebar({ isOpen,  }: { isOpen: boolean; toggleSidebar: () => void }) {
  return (
    <div className="relative">
      
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl p-4 text-gray-700 z-40 md:relative md:w-[18vw] md:block"
          >
            
              <nav className="py-11">
                <h2 className="text-sm font-semibold text-gray-400 mb-2">User Dashboard</h2>
                <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <FiMonitor />
                  <span>User Portal </span>
                </Link>
                <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">Applications</h2>
                <Link to="/services" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <FiCalendar /> Web Design Services
                </Link>
                <Link to="/PortfolioPage" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <FiMessageSquare /> Creative Resources
                </Link>
                <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">Help & Support</h2>
                <Link to="/contact" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <FiLayout /> Get a Quote
                </Link>
              </nav>
            
          </motion.aside>
        )}
      
    </div>
  );
}