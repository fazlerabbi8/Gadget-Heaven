import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Home</Link></li>
           <li><Link to="/statistics">Statistics</Link></li>
           <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
       <div className="flex items-center justify-center gap-4">
        <img className="w-16 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTD6sT9J-ouyGypqu_-mu9XJ13r98RGS2Mg2EqAZOhbw&s=10" alt="" />
         <a className="text-2xl font-bold"><Link to="/">Gadgets Heaven</Link></a>
         
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/statistics">Statistics</Link></li>
           <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <Link className="text-2xl">
          <LuShoppingCart />
        </Link>
        <Link className="text-2xl btn">
          <MdOutlineFavoriteBorder />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
