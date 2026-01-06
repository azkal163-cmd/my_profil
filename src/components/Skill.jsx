import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaRocket, FaTasks, FaDatabase, FaFigma } from "react-icons/fa";

export default function Skill() {
  const technicalSkills = [
    {
      icon: <FaLaptopCode size={32} />,
      title: "Frontend Development",
      level: 90,
      desc: "Mahir membuat halaman web interaktif menggunakan React & Vite.",
      tools: ["React", "Vite", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: <FaDatabase size={32} />,
      title: "Web Application",
      level: 90,
      desc: "Mampu membangun aplikasi web modern dan scalable.",
      tools: ["Node.js", "MySQL"],
    },
    {
      icon: <FaPaintBrush size={32} />,
      title: "UI / UX Design",
      level: 85,
      desc: "Mendesain antarmuka yang modern, clean, dan user-friendly.",
      tools: ["Figma"],
    },
  ];

  const renderSkill = (skill, i) => (
    <motion.div
      key={skill.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      whileHover={{ y: -8 }}
      className="p-8 rounded-3xl bg-white shadow-md hover:shadow-xl transition"
    >
      <div className="mb-4 text-neutral-800">{skill.icon}</div>
      <h4 className="font-semibold text-2xl mb-2">{skill.title}</h4>
      <p className="text-neutral-600 mb-4">{skill.desc}</p>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-sm text-neutral-500 mb-2">{skill.level}% skill level</p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mt-2">
        {skill.tools.map((tool) => (
          <span key={tool} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills & Competencies
        </h3>

        {/* Technical Skills */}
        <h4 className="text-2xl font-semibold mb-6">Technical Skills</h4>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {technicalSkills.map(renderSkill)}
        </div>
      </div>
    </section>
  );
}
