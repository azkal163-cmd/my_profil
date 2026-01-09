import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Licenses from "./components/Licenses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Licenses />
      <Contact />
      <Footer />
    </main>
  );
}
