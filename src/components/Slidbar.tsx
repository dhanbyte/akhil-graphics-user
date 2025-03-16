import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMonitor,
  FiCalendar,
  FiMessageSquare,
  FiLayout,

  FiMenu,
} from "react-icons/fi";

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div className="relative h-screen">
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 md:top-0 left-2 z-50  p-2    lg:hidden"
      >
        {isOpen ? "X"  : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      {(isOpen || window.innerWidth >= 1024) && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween" }}
          className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl p-4 text-gray-700 z-40 lg:relative lg:block"
        >
          <nav className="py-[8vh] lg:py-0">
            <div className="hidden  lg:block">
              <img src="https://akhilgraphics.in/wp-content/uploads/2021/11/cropped-logo-1-1-300x300.png" alt=""
              className="w-[10vh] h-[10vh]   object-cover" />
            </div>

            <h2 className="text-sm font-semibold text-gray-400 mb-2">
              User Dashboard
            </h2>
            <Link
              to="/"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <FiMonitor />
              <span>Home</span>
            </Link>

            <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">
              Account
            </h2>
            <Link
              to="/services"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <FiCalendar /> Add Money
            </Link>
            <Link
              to="/PortfolioPage"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <FiMessageSquare /> Order Status
            </Link>

            <h2 className="text-sm font-semibold text-gray-400 mt-4 mb-2">
              Help & Support
            </h2>
            <Link
              to="/contact"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <FiLayout /> Profile
            </Link>
            <Link
              to="/PortfolioPage"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <FiMessageSquare /> Help
            </Link>
          </nav>
        </motion.aside>
      )}
    </div>
  );
}
