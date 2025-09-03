const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-600">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate developer with a love for creating beautiful, functional web experiences
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Left Side - Intro */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Hi, I'm Aryan Verma</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a creative and detail-oriented Frontend Developer. My focus is on creating
            user-friendly, responsive, and visually appealing web applications. I specialize in
            React, Tailwind CSS, and JavaScript, and I enjoy solving real-world problems through
            elegant code and design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond coding, I'm passionate about video editing, generative AI, and networking. I
            believe in continuous learning and staying updated with the latest web technologies to
            build websites that feel professional, engaging, and impactful.
          </p>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-blue-600">15+</h4>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-blue-600">3+</h4>
            <p className="mt-2 text-gray-600">Internships</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-blue-600">100+</h4>
            <p className="mt-2 text-gray-600">Hours Coding</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h4 className="text-3xl font-bold text-blue-600">100%</h4>
            <p className="mt-2 text-gray-600">Dedication</p>
            
          </div>
        </div>
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                    {[
                      "React",
                      "JavaScript",
                      "Tailwind CSS",
                      "HTML/CSS",
                      "Git",
                      "Framer Motion"
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-full shadow-sm hover:bg-blue-100 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
      </div>

    </section>
  );
};

export default About;
