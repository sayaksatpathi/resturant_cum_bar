import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1770816307454-892c27fc625e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYmFyJTIwaW50ZXJpb3IlMjBkYXJrJTIwYW1iaWFuY2V8ZW58MXx8fHwxNzc0MjQxMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/60 to-[#0D0D0D]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Label */}
          <p
            className="text-[#C9A84C] tracking-[3px] uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600 }}
          >
            Welcome To
          </p>

          {/* Main Heading */}
          <h1
            className="text-[#F5F5F5]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(40px, 8vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            Relax Point
          </h1>

          {/* Subheading */}
          <p
            className="text-[#C9A84C] italic"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 700
            }}
          >
            Restaurant cum Bar
          </p>

          {/* Description */}
          <p
            className="text-[#F5F5F5] max-w-2xl mt-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: 1.7
            }}
          >
            Where Every Evening Becomes an Experience — Majitar, Sikkim
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 rounded-lg hover:bg-[#E6C76A] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 min-w-[200px]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
            >
              View Our Menu
            </button>
            <a
              href="tel:07043577723"
              className="border-2 border-[#F5F5F5] text-[#F5F5F5] px-8 py-4 rounded-lg hover:bg-[#F5F5F5] hover:text-[#0D0D0D] transition-all duration-300 min-w-[200px] flex items-center justify-center"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#C9A84C]" size={40} />
      </div>
    </section>
  );
}
