import About from "@/pages/about/page";
import Contacts from "@/pages/contacts/page";
import Footer from "@/pages/footer/page";
import Hero from "@/pages/hero/page";
import NavBar from "@/pages/navbar/page";
import Projects from "@/pages/projects/page";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
