// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },

    // ⭐ Added Specification (Final)
    { name: "Specification", path: "/specification" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          shadow
            ? "bg-[#061125]/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/public/logo.jpeg"
              alt="Radhika SolarTech"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-lg font-semibold">
              Radhika <span className="text-solarBlue">SolarTech</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-solarBlue"
                      : "text-gray-300 hover:text-solarBlue"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-lg bg-solarBlue text-black font-semibold hover:opacity-95"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#071026] z-[1000] p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-white font-semibold text-lg">Menu</h3>
          <button
            className="p-1 text-gray-300"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Items */}
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-solarBlue" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block px-4 py-2 bg-solarBlue text-black rounded-lg font-semibold"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* OVERLAY (Mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
