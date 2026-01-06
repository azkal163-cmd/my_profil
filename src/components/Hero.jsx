import { motion } from "framer-motion";
import profile from "../assets/Azka.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm Azka <br />
            <span className="text-neutral-400">Web Developer</span>
          </h2>

          <div className="flex gap-4">
            <a
              href="#skills"
              className="px-7 py-3 rounded-2xl bg-white text-black font-medium"
            >
              View My Skill
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-2xl border border-neutral-400"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-neutral-600 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
