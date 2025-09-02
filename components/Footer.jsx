import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-indigo-700">Aryan Verma</h2>
        <p className="text-gray-700 mt-2">Frontend Developer | MCA Graduate</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-5">
          <motion.a
            href="https://www.linkedin.com/in/aryan-verma-7545a4303"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://github.com/aryanverma98"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-800 hover:text-black transition-colors"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aryan1_786/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={30} />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 my-6"></div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Aryan Verma. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
