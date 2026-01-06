import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

export default function Licenses() {
  const licenses = [
    {
      icon: <FaCertificate size={32} />,
      title: "Junior Web Developer",
      org: "Badan Nasional Sertifikasi Profesi",
      year: "2025",
      img: "../images/bnsp_logo.png",
      link: "https://bnsp.net/sertifikat-bnsp/junior-web-developer",
    },
    {
      icon: <FaCertificate size={32} />,
      title: "Web Development",
      org: "Magang PT Dirgantara Indonesia",
      year: "2023",
      img: "../images/PTDI.png",
      link: "https://www.indonesian-aerospace.com/en/",
    },
    {
      icon: <FaCertificate size={32} />,
      title: "CCNAv7: Introduction to Networks",
      org: "Cisco Networking Academy",
      year: "2023",
      img: "../images/cisco.png",
      link: "https://www.netacad.com/courses/ccna-introduction-networks?courseLang=en-US",
    },
    {
      icon: <FaCertificate size={32} />,
      title: "CCNAv7: Switching, Routing, and Wireless Essentials",
      org: "Cisco Networking Academy",
      year: "2023",
      img: "../images/cisco.png",
      link: "https://www.netacad.com/courses/ccna-switching-routing-wireless-essentials?courseLang=en-US",
    },
  ];

  return (
    <section id="licenses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12">My Licenses & Certifications</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {licenses.map((license, i) => (
            <motion.a
              key={license.title}
              href={license.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition flex flex-col items-center gap-4"
            >
              {/* Icon atau Gambar */}
              {license.img ? (
                <img src={license.img} alt={license.title} className="w-16 h-16 object-contain" />
              ) : (
                <div className="text-blue-500">{license.icon}</div>
              )}

              <h4 className="font-semibold text-2xl">{license.title}</h4>
              <p className="text-neutral-600">{license.org}</p>
              <p className="text-sm text-neutral-500">{license.year}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
