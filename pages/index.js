import Contact from "../components/Contact";
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
      <Contact />
      <Footer />
    </div>
  )
}
