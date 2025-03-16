import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="flex justify-between bg-white text-gray-700 h-[10vh] px-4 shadow-sm w-full">
      <button className="md:hidden" onClick={toggleSidebar}>
        <FiMenu size={24} />
      </button>
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/services">Service</Link>
        <Link to="/PortfolioPage">Portfolio</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/">
          <h2>Dhananjay Singh</h2>
          Amount - $ <span className="text-green-600">1000</span>
        </Link>
      </div>
    </header>
  );
}
