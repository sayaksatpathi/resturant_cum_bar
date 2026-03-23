import Masonry from "react-responsive-masonry";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1759027044799-5aed5577f864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZXhwZXJpZW5jZSUyMGZyaWVuZHN8ZW58MXx8fHwxNzc0MjQxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dining Experience",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1763771757330-3212b518e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBjb3VudGVyJTIwbmlnaHQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3NDI0MTM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Bar Counter",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NDE3Nzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Chef Cooking",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1631791956434-42468596a5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWlzaW5lJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzc0MjQxMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Food Platter",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1626167344137-4aafdf31a3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGNvY2t0YWlsJTIwZ2xhc3MlMjBiYXJ8ZW58MXx8fHwxNzc0MjQxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cocktails",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1769882199542-2de5bf54c486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcmVzdGF1cmFudCUyMHNlYXRpbmclMjBoaW1hbGF5YW58ZW58MXx8fHwxNzc0MjQxMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Outdoor Seating",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-[#0D0D0D] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-[#C9A84C] tracking-[3px] uppercase mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600 }}
          >
            Moments
          </p>
          <h2
            className="text-[#F5F5F5]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 700,
            }}
          >
            Gallery
          </h2>
        </div>

        {/* Masonry Grid */}
        <Masonry columnsCount={window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 3} gutter="16px">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-[#C9A84C]" size={40} />
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0D0D0D]/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
