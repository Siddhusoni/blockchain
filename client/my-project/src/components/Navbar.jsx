import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react"; // Install lucide-react if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated Auth State
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-xl font-bold">
          <Link to="/">🎓 CertVerify</Link>
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Verify", path: "/verify" },
            { name: "Issue", path: "/issue" },
            { name: "Dashboard", path: "/dashboard" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              className="px-3 py-2 rounded transition hover:bg-blue-500"
              to={link.path}
            >
              {link.name}
            </Link>
          ))}

          {/* Login / Profile Dropdown */}
          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                <User size={20} />
                <span>Profile</span>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setShowProfileMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-red-700 py-4">
          {[
            { name: "Home", path: "/" },
            { name: "Verify", path: "/verify" },
            { name: "Issue", path: "/issue" },
            { name: "Dashboard", path: "/dashboard" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              className="block py-2 px-4 w-full text-center hover:bg-blue-500"
              to={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Login / Profile */}
          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="mt-4 bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Login
            </button>
          ) : (
            <div className="mt-4">
              <Link
                to="/profile"
                className="block py-2 px-4 text-center hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="block py-2 px-4 text-center w-full hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
