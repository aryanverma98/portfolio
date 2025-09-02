import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaUniversity, FaSchool, FaGraduationCap, FaLaptopCode, FaBuilding } from "react-icons/fa";

const items = [
  {
    type: "education",
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    year: "2023 – 2025",
    details:
      "Focused on advanced computer science concepts, software development, and modern technologies.",
    icon: <FaGraduationCap size={40} className="text-purple-600" />,
  },
  {
    type: "education",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "CSJMU University, Kanpur",
    year: "2020 – 2023",
    details:
      "Learned fundamentals of programming, databases, and web technologies.",
    icon: <FaUniversity size={40} className="text-blue-600" />,
  },
  {
    type: "education",
    degree: "Intermediate (12th)",
    institution: "SJ Education Centre School",
    year: "2019 – 2020",
    details:
      "Completed with a focus on Science and Mathematics. Also gained problem-solving and analytical skills that built a strong foundation for higher studies.",
    icon: <FaSchool size={40} className="text-green-600" />,
  },
  {
    type: "experience",
    degree: "Frontend Developer Intern",
    institution: "TechAhead",
    year: "July 2025 – Present",
    details:
      "Developing responsive user interfaces using React.js, Tailwind CSS, and modern frontend libraries. Learned agile workflows and collaboration in real-world projects.",
    icon: <FaLaptopCode size={40} className="text-indigo-600" />,
  },
  {
    type: "experience",
    degree: "Web Development Intern",
    institution: "Yhills",
    year: "Dec 2024 – Feb 2025",
    details:
      "Contributed to building and maintaining web applications. Improved skills in HTML, CSS, JavaScript, and Git while working in a professional environment.",
    icon: <FaBuilding size={40} className="text-orange-600" />,
  },
    {
    type: "experience",
    degree: "Java Developer Intern",
    institution: "Octanet",
    year: "Aug 2024 – Seep 2024",
    details:
      "Contributed to building and maintaining web applications. Improved skills in HTML, CSS, JavaScript, and Git while working in a professional environment.",
    icon: <FaBuilding size={40} className="text-orange-600" />,
  },
];

export default function EducationExperience() {
  return (
    <section id="education" className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-indigo-600">Education & Experience</h2>
        <p className="mt-2 text-gray-600">
          My academic journey and hands-on industry exposure
        </p>
      </div>

      {/* Grid for Education + Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
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
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 min-h-[250px]"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.degree}</h3>
              <p className="text-gray-500 text-sm">{item.institution}</p>
              <p className="text-gray-400 text-sm mb-2">{item.year}</p>
              <p className="text-gray-600 text-sm">{item.details}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
