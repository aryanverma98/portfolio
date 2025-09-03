import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = ["Home", "About", "Projects", "Skills", "Education", "Contact"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <a
            href="#home"
            className=" text-2xl md:text-3xl font-extrabold text-blue-600"
          >
            ARYAN
          </a>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <ul className="flex gap-8 text-gray-800 font-medium">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors group-hover:text-indigo-600"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && !isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="text-3xl text-indigo-600 focus:outline-none"
          >
            <HiMenuAlt3 />
          </button>
        )}
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full bg-gradient-to-b from-indigo-600 to-purple-700 shadow-lg z-50 p-6 flex flex-col text-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-4xl text-white hover:text-red-400 transition-colors"
              >
                <HiX />
              </button>

              {/* Sidebar links */}
              <nav className="mt-16 flex flex-col py-10 gap-10 items-center h-250 ">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="flex items-center justify-center w-full text-center text-2xl font-bold text-blue-800 py-4 border-b border-gray-300 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}

                {/* ✅ Social Media Icons below Contact */}
                <div className="flex justify-center gap-6 mt-4  ">
                  <motion.a
                    href="https://www.linkedin.com/in/aryan-verma-7545a4303"
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-indigo-600 hover:text-white transition-colors"
                  >
                    <FaLinkedin size={35} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/aryanverma98"
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-white transition-colors"
                  >
                    <FaGithub size={35} />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/aryan1_786/"
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-pink-600 hover:text-pink-400 transition-colors"
                  >
                    <FaInstagram size={35} />
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
