import About from "../components/About";
import Contact from "../components/Contact";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
