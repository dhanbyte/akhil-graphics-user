import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex pl-[10vw] lg:pl-[1vw] justify-between items-center bg-white text-gray-700 h-[8vh] md:h-[10vh] px-4 shadow-sm w-full">
    
   

      {/* Navigation Links */}
      <nav className="flex items-center pl-[8vw] md:pl-[1vw]  gap-2 text-sm md:gap-4 md:text-base">
        <Link to="/" className="hover:text-blue-500 hidden md:block">Home</Link>
        <Link to="/services" className="hover:text-blue-500">Order Status</Link>
        <Link to="/PortfolioPage" className="hover:text-blue-500">Add Money</Link>
        <Link to="/contact" className="hover:text-blue-500 hidden md:block">Help</Link>
      </nav>

      {/* User Info */}
      <div className="flex items-center gap-2 text-xs md:gap-4 md:text-base">
        <Link to="/">
          <h2 className="font-semibold">Dhananjay Singh</h2>
          <span>Amount - $<span className="text-green-600">1000</span></span>
        </Link>
      </div>
    </header>
  );
} 