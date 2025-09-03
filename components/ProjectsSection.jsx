import { motion } from "framer-motion";
import { FaEye, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import foodImage from "../src/assets/food.jpg";
import todoImage from "../src/assets/todo.jpg";
import calImage from "../src/assets/cal.jpg";
import amazonImage from "../src/assets/amazon.png";
import portImage from "../src/assets/pt.jpg";
import quizImage from "../src/assets/quiz.jpg";
const projects = [
  {
    category: "Web App",
    title: "E-commerce Website",
    desc: "A shopping platform with product pages, cart, and secure checkout system.",
    image: foodImage,
    links: { demo: "https://arybites.netlify.app/", github: "https://github.com/aryanverma98/food-site" },
  },
  {
    category: "Web App",
    title: "Quiz App",
    desc: "Interactive quiz platform with real-time scoring and leaderboard support.",
    image: quizImage,
    links: { demo: "https://quizbyaryan.netlify.app/", github: "https://github.com/aryanverma98" },
  },
  {
    category: "Utility",
    title: "To-Do List",
    desc: "A simple and efficient to-do list app to manage daily tasks with local storage.",
    image: todoImage,
    links: { demo: "https://todulistbyaryan.netlify.app/", github: "https://github.com/aryanverma98" },
  },
  {
    category: "Utility",
    title: "Calculator",
    desc: "A clean and responsive calculator with modern UI and real-time calculations.",
    image: calImage,
    links: { demo: "https://aryancalc.netlify.app", github: "https://github.com/aryanverma98" },
  },
  {
    category: "Web App",
    title: "Amazon Clone",
    desc: "An Amazon-inspired e-commerce clone with product listings, cart, and checkout flow.",
    image: amazonImage,
    links: { demo: "https://aryanamazon.netlify.app", github: "https://github.com/aryanverma98" },
  },
  {
    category: "Portfolio",
    title: "Portfolio Website",
    desc: "My personal portfolio showcasing skills, projects, and contact details.",
    image: portImage,
    links: { demo: "https://aryanpo.netlify.app", github: "https://github.com/aryanverma98/portfolio" },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          My Projects
        </h2>
        <p className="text-gray-600 mt-2 mb-12">
          A showcase of my recent work and creative solutions
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-30">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: index * 0,
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative group"
            >
              {/* Image / Banner */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
                  {project.category}
                </span>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300"
                >
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  >
                    <FaEye size={18} />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-black transition"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
