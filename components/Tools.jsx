import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGitAlt, FaLaptopCode, FaVideo, FaNetworkWired } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const tools = [
  { name: "Git / GitHub", level: "80% Proficiency", icon: <FaGitAlt size={40} className="text-red-500" /> },
  { name: "Figma", level: "70% Proficiency", icon: <SiFigma size={40} className="text-pink-500" /> },
  { name: "VS Code", level: "90% Proficiency", icon: <FaLaptopCode size={40} className="text-blue-600" /> },
  { name: "Video Editing", level: "75% Proficiency", icon: <FaVideo size={40} className="text-purple-500" /> },
  { name: "Generative AI", level: "70% Proficiency", icon: <GiArtificialIntelligence size={40} className="text-pink-600" /> },
  { name: "Networking", level: "65% Proficiency", icon: <FaNetworkWired size={40} className="text-cyan-600" /> },
];

export default function Tools() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-blue-600">Tools & Technologies</h2>
        <p className="mt-2 text-gray-600">Technologies I use to build and deploy projects</p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareColor="lightblue"
            glarePosition="all"
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100"
            >
              {tool.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{tool.name}</h3>
              <p className="text-gray-600">{tool.level}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: tool.level.replace("% Proficiency", "") }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
