import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg" : "bg-[#0D0D0D]/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex flex-col">
              <span className="text-[#C9A84C] tracking-wide" style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, lineHeight: 1.2 }}>
                Relax Point
              </span>
              <span className="text-[#9E9E9E] text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Restaurant & Bar
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Contact
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block bg-[#C9A84C] text-[#0D0D0D] px-6 py-3 rounded-full hover:bg-[#E6C76A] transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
            >
              Reserve a Table
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#F5F5F5] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0D0D]/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors text-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors text-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors text-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors text-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors text-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 rounded-full hover:bg-[#E6C76A] transition-all duration-300 mt-4"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </>
  );
}
