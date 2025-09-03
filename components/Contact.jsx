import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const contacts = [
  {
    type: "Email",
    value: "@14vermaaryan.com",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    icon: <FaEnvelope size={40} className="text-red-500" />,
  },
  {
    type: "Phone",
    value: "+91 9696388409",
    link: "tel:+9696388409",
    icon: <FaPhoneAlt size={40} className="text-green-600" />,
  },
  {
    type: "Location",
    value: "Kanpur, Uttar Pradesh, India",
    link: "https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh/@26.44715,80.2558096,12z/data=!3m1!4b1!4m6!3m5!1s0x399c4770b127c46f:0x1778302a9fbe7b41!8m2!3d26.449923!4d80.3318736!16zL20vMDFfcTdo?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
    icon: <FaMapMarkerAlt size={40} className="text-blue-600" />,
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/aryanverma",
    link: "https://www.linkedin.com/in/aryan-verma-7545a4303",
    icon: <FaLinkedin size={40} className="text-indigo-600" />,
  },
  {
    type: "GitHub",
    value: "github.com/aryanverma",
    link: "https://github.com/aryanverma98",
    icon: <FaGithub size={40} className="text-gray-800" />,
  },
  {
    type: "Instagram",
    value: "@aryan1_786",
    link: "https://www.instagram.com/aryan1_786/",
    icon: <FaInstagram size={40} className="text-pink-500" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-indigo-600">Contact Me</h2>
        <p className="mt-2 text-gray-600">
          Let’s connect! You can reach me through the following platforms
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareColor="lightblue"
            glarePosition="all"
            className="w-full"
          >
            <motion.a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 min-h-[200px]"
            >
              {contact.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{contact.type}</h3>
              <p className="text-gray-600 text-sm">{contact.value}</p>
            </motion.a>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
