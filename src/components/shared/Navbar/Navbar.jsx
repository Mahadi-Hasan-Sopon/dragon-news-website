import { Link, NavLink } from "react-router-dom";

import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContextProvider";

const navLinks = (
  <>
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/career"
        className={({ isActive, isPending }) =>
          isPending
            ? "text-amber-500 font-bold"
            : isActive
            ? " text-blue-600 text-lg font-bold border-b-2 border-blue-500"
            : "font-medium text-slate-800"
        }
      >
        Career
      </NavLink>
    </li>
  </>
);

function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="py-6">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow">
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2.5">
            <RxAvatar className="text-5xl" />
            {user ? (
              <button
                onClick={() => logOutUser()}
                className="text-xl py-2 px-10 text-white bg-[#403F3F]"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-xl py-2 px-10 text-white bg-[#403F3F]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
