import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      {/* Left Content */}
      <div className="flex-1 max-w-xl mt-50 md:mt-32 md:ml-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I’m <span className="text-blue-600">Aryan Verma</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
          A passionate <span className="font-semibold">Frontend Developer</span>{" "}
          creating beautiful and interactive web experiences.
        </p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <motion.a
            href="#projects"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition text-sm sm:text-base font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white rounded-full shadow hover:bg-black transition text-sm sm:text-base font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-start gap-6 mt-10 md:ml-20">
          <motion.a
            href="https://www.linkedin.com/in/aryan-verma-7545a4303"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/aryanverma98"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-800 hover:text-black transition-colors"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aryan1_786/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={28} />
          </motion.a>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex-1 mb-10 md:mt-40 flex justify-center"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <img
          src="/my.png"
          alt="Hero"
          className="rounded-full shadow-lg w-40 sm:w-52 md:w-64 lg:w-90 object-cover"
        />
      </motion.div>
    </section>
  );
}
