import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppChat } from "./components/WhatsAppChat";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat
        phoneNumber="7043577723"
        defaultCountryCode="91"
        message="Hello! I’d like to make a reservation. Could you please share available timings and table options?"
      />
    </div>
  );
}
