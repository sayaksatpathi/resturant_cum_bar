import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080808] py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-3">
            <span
              className="text-[#C9A84C]"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700 }}
            >
              Relax Point
            </span>
            <span
              className="text-[#9E9E9E]"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '2px' }}
            >
              RESTAURANT & BAR
            </span>
            <p
              className="text-[#9E9E9E] mt-2"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.6 }}
            >
              Where Every Evening Becomes an Experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-[#F5F5F5] mb-4"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600 }}
            >
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#9E9E9E] hover:text-[#C9A84C] transition-colors text-left"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-[#9E9E9E] hover:text-[#C9A84C] transition-colors text-left"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-[#9E9E9E] hover:text-[#C9A84C] transition-colors text-left"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#9E9E9E] hover:text-[#C9A84C] transition-colors text-left"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3
              className="text-[#F5F5F5] mb-4"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600 }}
            >
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#C9A84C] transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="text-[#C9A84C] group-hover:text-[#0D0D0D]" size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#C9A84C] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="text-[#C9A84C] group-hover:text-[#0D0D0D]" size={20} />
              </a>
              <a
                href="https://wa.me/917043577723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#C9A84C] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="text-[#C9A84C] group-hover:text-[#0D0D0D]" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A1A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-[#9E9E9E] text-center md:text-left"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
            >
              © 2025 Relax Point Restaurant cum Bar. All rights reserved. | Majitar, Sikkim
            </p>
            <p
              className="text-[#9E9E9E] text-center md:text-right"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
            >
              Crafted with passion for exceptional experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
