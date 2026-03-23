import { UtensilsCrossed, Beer, MapPin } from "lucide-react";

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="bg-[#0D0D0D] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1768051297578-1ea70392c307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3NDE0NTMwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant Interior"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0D0D0D]/50 to-transparent"></div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <p
              className="text-[#C9A84C] tracking-[3px] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600 }}
            >
              Our Story
            </p>

            {/* Heading */}
            <h2
              className="text-[#F5F5F5]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              A Place to Unwind & Indulge
            </h2>

            {/* Description */}
            <div className="flex flex-col gap-4">
              <p
                className="text-[#9E9E9E]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.8
                }}
              >
                Nestled in the heart of Majitar, Sikkim, Relax Point offers an unforgettable dining experience that blends authentic local flavors with contemporary cuisine.
              </p>
              <p
                className="text-[#9E9E9E]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.8
                }}
              >
                Our carefully curated menu celebrates the rich culinary heritage of the Himalayas while our premium bar serves craft cocktails and finest spirits.
              </p>
              <p
                className="text-[#9E9E9E]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.8
                }}
              >
                Whether you're here for a casual meal, special celebration, or evening drinks, we promise an experience that will linger in your memories.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all">
                <UtensilsCrossed className="text-[#C9A84C]" size={28} />
                <div>
                  <p className="text-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                    Local Cuisine
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all">
                <Beer className="text-[#C9A84C]" size={28} />
                <div>
                  <p className="text-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                    Premium Bar
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all">
                <MapPin className="text-[#C9A84C]" size={28} />
                <div>
                  <p className="text-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                    Majitar, Sikkim
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 rounded-lg hover:bg-[#E6C76A] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
            >
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
