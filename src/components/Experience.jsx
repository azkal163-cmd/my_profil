import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      year: "2023",
      role: "Web Developer",
      place: "PT Dirgantara Indonesia",
      desc: "Membangun dan merancang sistem informasi pengelolaan data karyawan.",
    },
    {
      year: "2024",
      role: "Web Developer",
      place: "PT Dirgantara Indonesia",
      desc: "Menerapkan sistem Face-ID untuk opsi tambahan keamanan Data.",
    },
    {
      year: "2026",
      role: "Web Developer",
      place: "Freelance Project",
      desc: "Membangun sebuah project 'Jasa Pembuatan Website'.",
      link: "https://peweb-builder.vercel.app",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.a
            key={i}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="block border-l-2 border-gray-300 pl-6 cursor-pointer hover:bg-gray-50 rounded-md transition"
          >
            <span className="text-sm text-gray-500">{exp.year}</span>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="font-medium text-gray-700">{exp.place}</p>
            <p className="text-gray-600 mt-2">{exp.desc}</p>
            <span className="text-sm text-blue-600 mt-2 inline-block">
              View details →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
