import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Gangtok, Sikkim",
    rating: 5,
    text: "Absolutely wonderful experience! The food quality is exceptional and the ambiance is perfect for a relaxing evening. The staff is courteous and attentive. Highly recommend the local cuisine!",
  },
  {
    id: 2,
    name: "Priya Rai",
    location: "Darjeeling, West Bengal",
    rating: 5,
    text: "Best restaurant-bar combination in the region! Live music nights are fantastic. The cocktails are crafted to perfection and the mountain views from the outdoor seating are breathtaking.",
  },
  {
    id: 3,
    name: "Amit Gurung",
    location: "Siliguri, West Bengal",
    rating: 5,
    text: "A hidden gem in Majitar! Whether you're looking for a quiet dinner or a lively evening with friends, Relax Point delivers on all fronts. The chef's special is a must-try!",
  },
  {
    id: 4,
    name: "Neha Chettri",
    location: "Namchi, Sikkim",
    rating: 5,
    text: "Perfect spot for celebrations! We hosted our anniversary dinner here and it was magical. The couples package is excellent value and the service was impeccable throughout.",
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#9E9E9E] hover:bg-[#C9A84C] transition-all mt-8"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="bg-[#0D0D0D] py-20 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#F5F5F5]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 700,
            }}
          >
            What Our Guests Say
          </h2>
        </div>

        {/* Carousel */}
        <style>
          {`
            .custom-dots li.slick-active div {
              background-color: #C9A84C !important;
              transform: scale(1.2);
            }
            .custom-dots {
              bottom: -40px !important;
            }
          `}
        </style>
        
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-[#1A1A1A] rounded-xl p-8 md:p-12 border border-[#C9A84C]/20">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#C9A84C] fill-[#C9A84C]" size={24} />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[#F5F5F5] text-center italic mb-6"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    lineHeight: 1.8,
                  }}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <p
                    className="text-[#C9A84C]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600 }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-[#9E9E9E]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
