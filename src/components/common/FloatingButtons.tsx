import { menu } from "lib/data";
import { useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { FaHome, FaInfoCircle, FaEnvelope, FaFacebook } from "react-icons/fa";
import { HiBuildingStorefront } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { BsYoutube } from "react-icons/bs";

function FloatingButtons() {
  const [menuExpend, setMenuExpend] = useState(null); // Track individual button expansion
  const [isVisible, setIsVisible] = useState(false); // default close

  const toggleExpand = (button: any) => {
    setMenuExpend(menuExpend === button ? null : button);
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Floating Button Container */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-20 right-6 flex flex-col items-center gap-4 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Main Button */}
            <div className="relative group">
              <button
                className="bg-gray-100 text-darkBlue p-3.5 rounded-full shadow-md hover:bg-gray-200 transition w-12 h-12"
                onClick={() => toggleExpand("main")}
              >
                <HiBuildingStorefront size={22} />
              </button>
              {menuExpend === "main" && (
                <motion.div
                  className="absolute top-0 right-full mr-3 bg-darkBlue text-white p-4 rounded-lg shadow-md flex flex-col items-start gap-3 w-40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {menu.map((link, index) => (
                    <li key={index} className="flex hover:underline">
                      <CgPlayButton size={20} />
                      <a
                        href={link.hash}
                        className="text-sm font-semibold hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Home Button */}
            <motion.div
              className="relative group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="bg-gray-100 text-darkBlue p-3.5 rounded-full shadow-md hover:bg-gray-200 transition w-12 h-12"
                onClick={() => toggleExpand("home")}
              >
                <FaHome size={22} />
              </button>
              {menuExpend === "home" && (
                <motion.div
                  className="absolute top-0 right-full mr-3 bg-gray-100 text-darkBlue p-4 rounded-lg shadow-md flex items-center gap-3 w-36"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <FaHome size={20} />
                  <a
                    href="/"
                    className="text-sm font-semibold hover:underline"
                  >
                    Home
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* About Button */}
            <motion.div
              className="relative group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="bg-gray-100 text-darkBlue p-3.5 rounded-full shadow-md hover:bg-gray-200 transition w-12 h-12"
                onClick={() => toggleExpand("about")}
              >
                <FaInfoCircle size={22} />
              </button>
              {menuExpend === "about" && (
                <motion.div
                  className="absolute top-0 right-full mr-3 bg-gray-100 text-darkBlue p-4 rounded-lg shadow-md flex items-center gap-3 w-36"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <FaInfoCircle size={20} />
                  <a
                    href="/aboutus"
                    className="text-sm font-semibold hover:underline"
                  >
                    About Us
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Button */}
            <motion.div
              className="relative group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <a
                href="mailto:ahsantrustmark67@gmail.com"
                className="bg-gray-100 text-darkBlue p-4 rounded-full shadow-md hover:bg-gray-200 transition w-12 h-12 flex items-center justify-center"
              >
                <FaEnvelope size={22} />
              </a>
            </motion.div>

            {/* Facebook Page Button */}
            <motion.div
              className="relative group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61562241570308",
                    "_blank"
                  )
                }
                className="bg-gray-100 text-darkBlue p-3.5 rounded-full shadow-md hover:bg-gray-200 transition w-12 h-12"
              >
                <FaFacebook size={22} />
              </button>
            </motion.div>

              {/* Youtube Button */}
              <motion.div
              className="relative group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@ahsantrustmark67",
                    "_blank"
                  )
                }
                className="bg-gray-100 text-darkBlue p-3.5 rounded-full shadow-md hover:bg-gray-200 transition w-12 h-12"
              >
                <BsYoutube size={22} />
              </button>
            </motion.div>

            {/* Close Button */}
            <motion.button
              className="bg-darkBlue text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition w-12 h-12"
              onClick={() => setIsVisible(false)}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <IoMdMenu size={22} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show Button */}
      {!isVisible && (
        <motion.button
          className="fixed bottom-20 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition w-12 h-12 z-50"
          onClick={() => setIsVisible(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IoMdMenu size={22} />
        </motion.button>
      )}
    </>
  );
}

export default FloatingButtons;
