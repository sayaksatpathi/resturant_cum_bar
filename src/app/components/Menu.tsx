import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: "food" | "drinks" | "specials";
}

const menuItems: MenuItem[] = [
  // Food
  {
    id: 1,
    name: "Traditional Thukpa",
    price: "₹280",
    description: "Authentic Tibetan noodle soup with vegetables and spices",
    image: "https://images.unsplash.com/photo-1631791956434-42468596a5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWlzaW5lJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzc0MjQxMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
  },
  {
    id: 2,
    name: "Grilled Chicken Platter",
    price: "₹420",
    description: "Succulent grilled chicken with herb butter and seasonal vegetables",
    image: "https://images.unsplash.com/photo-1682423187670-4817da9a1b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMG1lYWx8ZW58MXx8fHwxNzc0MTc2MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
  },
  {
    id: 3,
    name: "Creamy Pasta Alfredo",
    price: "₹350",
    description: "Classic Italian pasta in rich cream sauce with parmesan",
    image: "https://images.unsplash.com/photo-1761315601031-f31099c14dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzQyMjcyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
  },
  {
    id: 4,
    name: "Vegetable Curry",
    price: "₹240",
    description: "Aromatic vegetable curry with fragrant basmati rice",
    image: "https://images.unsplash.com/photo-1720949579179-b4d04403f548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwY3VycnklMjByaWNlfGVufDF8fHx8MTc3NDE3Nzk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
  },
  {
    id: 5,
    name: "Sushi Deluxe Platter",
    price: "₹580",
    description: "Fresh assorted sushi with wasabi and pickled ginger",
    image: "https://images.unsplash.com/photo-1764183122524-974ccfb709fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXIlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NzQyMzIzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    price: "₹220",
    description: "Decadent chocolate cake with molten center and vanilla ice cream",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwY2FrZXxlbnwxfHx8fDE3NzQxNjkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "food",
  },
  // Drinks
  {
    id: 7,
    name: "Signature Cocktail",
    price: "₹380",
    description: "House special blend with premium spirits and fresh fruits",
    image: "https://images.unsplash.com/photo-1626167344137-4aafdf31a3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGNvY2t0YWlsJTIwZ2xhc3MlMjBiYXJ8ZW58MXx8fHwxNzc0MjQxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "drinks",
  },
  {
    id: 8,
    name: "Premium Whiskey",
    price: "₹450",
    description: "Single malt aged whiskey served neat or on the rocks",
    image: "https://images.unsplash.com/photo-1583873463426-776e17c904cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza2V5JTIwZ2xhc3MlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzQyNDEzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "drinks",
  },
  {
    id: 9,
    name: "Craft Beer Selection",
    price: "₹280",
    description: "Rotating selection of local and imported craft beers",
    image: "https://images.unsplash.com/photo-1625422007793-d6858a424167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwZ2xhc3MlMjBkcmFmdHxlbnwxfHx8fDE3NzQyNDEzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "drinks",
  },
  {
    id: 10,
    name: "Red Wine Reserve",
    price: "₹520",
    description: "Fine vintage red wine from our exclusive collection",
    image: "https://images.unsplash.com/photo-1665567176924-52c7cd5b9393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3MlMjByZWQlMjBib3R0bGV8ZW58MXx8fHwxNzc0MjQxMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "drinks",
  },
  {
    id: 11,
    name: "Himalayan Mocktail",
    price: "₹180",
    description: "Refreshing non-alcoholic blend with local herbs and fruits",
    image: "https://images.unsplash.com/photo-1626167344137-4aafdf31a3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGNvY2t0YWlsJTIwZ2xhc3MlMjBiYXJ8ZW58MXx8fHwxNzc0MjQxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "drinks",
  },
  {
    id: 12,
    name: "Espresso Martini",
    price: "₹320",
    description: "Coffee liqueur, vodka, and fresh espresso",
    image: "https://images.unsplash.com/photo-1626167344137-4aafdf31a3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGNvY2t0YWlsJTIwZ2xhc3MlMjBiYXJ8ZW58MXx8fHwxNzc0MjQxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "drinks",
  },
  // Specials
  {
    id: 13,
    name: "Chef's Tasting Menu",
    price: "₹1,200",
    description: "Five-course culinary journey featuring our finest dishes",
    image: "https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NDE3Nzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "specials",
  },
  {
    id: 14,
    name: "Weekend Brunch Special",
    price: "₹650",
    description: "All-you-can-eat brunch buffet with live music",
    image: "https://images.unsplash.com/photo-1759027044799-5aed5577f864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZXhwZXJpZW5jZSUyMGZyaWVuZHN8ZW58MXx8fHwxNzc0MjQxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "specials",
  },
  {
    id: 15,
    name: "Happy Hour Package",
    price: "₹999",
    description: "Unlimited select drinks and appetizers (5-7 PM)",
    image: "https://images.unsplash.com/photo-1763771757330-3212b518e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBjb3VudGVyJTIwbmlnaHQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3NDI0MTM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "specials",
  },
  {
    id: 16,
    name: "Couples Dinner Package",
    price: "₹1,800",
    description: "Romantic dinner for two with complimentary wine",
    image: "https://images.unsplash.com/photo-1759027044799-5aed5577f864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZXhwZXJpZW5jZSUyMGZyaWVuZHN8ZW58MXx8fHwxNzc0MjQxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "specials",
  },
  {
    id: 17,
    name: "Live Music Night",
    price: "₹500",
    description: "Cover charge with complimentary appetizer and drink",
    image: "https://images.unsplash.com/photo-1763771757330-3212b518e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBjb3VudGVyJTIwbmlnaHQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3NDI0MTM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "specials",
  },
  {
    id: 18,
    name: "Birthday Celebration",
    price: "₹2,500",
    description: "Special package for 4 with cake and decorations",
    image: "https://images.unsplash.com/photo-1759027044799-5aed5577f864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZXhwZXJpZW5jZSUyMGZyaWVuZHN8ZW58MXx8fHwxNzc0MjQxMzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "specials",
  },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState<"food" | "drinks" | "specials">("food");

  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="bg-[#1A1A1A] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-[#C9A84C] tracking-[3px] uppercase mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600 }}
          >
            What We Serve
          </p>
          <h2
            className="text-[#F5F5F5]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 700,
            }}
          >
            Our Menu
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#0D0D0D] rounded-full p-2 gap-2">
            <button
              onClick={() => setActiveTab("food")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "food"
                  ? "bg-[#C9A84C] text-[#0D0D0D]"
                  : "text-[#9E9E9E] hover:text-[#F5F5F5]"
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
            >
              Food
            </button>
            <button
              onClick={() => setActiveTab("drinks")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "drinks"
                  ? "bg-[#C9A84C] text-[#0D0D0D]"
                  : "text-[#9E9E9E] hover:text-[#F5F5F5]"
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
            >
              Drinks
            </button>
            <button
              onClick={() => setActiveTab("specials")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "specials"
                  ? "bg-[#C9A84C] text-[#0D0D0D]"
                  : "text-[#9E9E9E] hover:text-[#F5F5F5]"
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
            >
              Specials
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0D0D0D] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-[#C9A84C]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-[#F5F5F5]"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700 }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-[#C9A84C]"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-[#9E9E9E]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.6 }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Link */}
        <div className="text-center">
          <a
            href="tel:07043577723"
            className="text-[#C9A84C] hover:text-[#E6C76A] transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500 }}
          >
            Call for Full Menu & Reservations →
          </a>
        </div>
      </div>
    </section>
  );
}
