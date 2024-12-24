import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout.jsx";
import Login from "./Login.jsx";
const Navbar = () => {
   const [authUser] = useAuth();
  return (
    <>
      <div className="navbar bg-gray-600 text-white">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">
                  <p className="text-xl font-semibold">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/design">
                  <p className="text-xl font-semibold">Generate</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-16 rounded-full" src={logo} alt="logo" />
          </div>
          <p className="btn btn-ghost text-xl">Design-Genie</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <p className="text-xl font-semibold">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/design">
                <p className="text-xl font-semibold">Generate</p>
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="navbar-end ml-auto">
         
        {authUser ? (
              <Logout />
            ) : (
              <div
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <Login />
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
