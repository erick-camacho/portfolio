import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Erick Camacho | Web Developer</title>
      </Head>
      <div className="text-gray-800">
        <Navbar />
        <Hero />
        <Portfolio/>
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
