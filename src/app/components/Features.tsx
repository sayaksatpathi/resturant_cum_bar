import { Wine, Music, Mountain, UtensilsCrossed } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Wine,
      title: "Premium Spirits",
      description: "Curated collection of finest wines, whiskeys, and craft cocktails",
    },
    {
      icon: Music,
      title: "Live Music Nights",
      description: "Enjoy live performances every Friday and Saturday evening",
    },
    {
      icon: Mountain,
      title: "Himalayan Ambiance",
      description: "Stunning views and authentic mountain atmosphere",
    },
    {
      icon: UtensilsCrossed,
      title: "Multi-Cuisine Kitchen",
      description: "From local delicacies to international favorites",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-20 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 p-6 bg-[#0D0D0D]/50 rounded-xl hover:bg-[#0D0D0D] transition-all duration-300 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                  <Icon className="text-[#C9A84C]" size={32} />
                </div>
                <h3
                  className="text-[#F5F5F5]"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#9E9E9E]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.6 }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
