import NavBar from "@/app/Components/Layout/NavBar";
import Footer from "@/app/Components/Layout/Footer";
import Hero from "./Components/Sections/Hero";
import About from "./Components/Sections/About";
import Services from "./Components/Sections/Services";
import Experience from "./Components/Sections/Experience"
import Items from "./Components/Sections/Items";
import Gallery from "./Components/Sections/Gallery";
import Testimonials from "./Components/Sections/Testimonials";
import Contact from "./Components/Sections/Contact";

export default function HomePage() {
  return (
    <>
      <NavBar />

      <main>
        {/* Sections */}
        <Hero/>
        <About/>
        <Services/>
        <Experience/>
        <Items/>
        <Gallery/>
        <Testimonials/>
        <Contact/>
      </main>

      <Footer />
    </>
  );
}