import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="containwer mx-auto py-4 px-6 flex justify-between items-center">
      <div>
        <Link to={"/"} className="text-2xl font-meduim">
          Rabbit
        </Link>
      </div>
      {/* Center Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/men"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Men
        </Link>
        <Link
          to="/women"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Women
        </Link>
        <Link
          to="/top-wear"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Top Wear
        </Link>
        <Link
          to="/bottom-wear"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Bottom Wear
        </Link>
      </div>
      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <Link to={"/profile"} className="hover:text-black">
          <HiOutlineUser className="h-6 w-6 text-gray-700" />
        </Link>
        <button className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
            4
          </span>
        </button>
        {/* Search */}
        <SearchBar />
        <button className="md:hidden">
          <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
