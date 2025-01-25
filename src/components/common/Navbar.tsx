import { links } from "../../lib/data";
import AhsanTrustLogo from "../shared/ahsanTrustLogo";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import FloatingButtons from "./FloatingButtons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Primary Navbar */}
      <nav className="flex justify-between items-center p-4 fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-md z-50">
        {/* Logo */}
        <AhsanTrustLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {links.map((link, index) => (
              <li
                key={index}
                className="bg-transparent px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <a
                  href={link.hash}
                  className="text-base font-medium text-darkBlue"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-darkBlue p-2 bg-gray-100 rounded-full focus:outline-none"
          >
            {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`absolute top-16 left-0 w-full bg-white shadow-md z-40 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-3 py-4">
            {links.map((link, index) => (
              <li
                key={index}
                className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition w-1/2 text-center"
              >
                <a
                  href={link.hash}
                  className="text-base font-medium text-darkBlue"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Secondary Navbar (Floating Action Buttons) */}
      <FloatingButtons />
    </>
  );
}

export default Navbar;
