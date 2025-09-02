import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaWind, FaLaptopCode } from "react-icons/fa";

const skills = [
  { name: "React", level: "85% Proficiency", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "JavaScript", level: "90% Proficiency", icon: <FaJs size={40} className="text-yellow-500" /> },
  { name: "HTML/CSS", level: "95% Proficiency", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "Tailwind CSS", level: "88% Proficiency", icon: <FaWind size={40} className="text-cyan-500" /> },
  { name: "Framer Motion", level: "75% Proficiency", icon: <FaLaptopCode size={40} className="text-purple-500" /> },
  { name: "Responsive Design", level: "85% Proficiency", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-blue-600">Skills & Expertise</h2>
        <p className="mt-2 text-gray-600">Technologies I work with to bring ideas to life</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
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
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level.replace("% Proficiency", "") }}
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
