import { FoodCard } from "./FoodCard";
import butterChicken from "@/assets/butter-chicken.jpg";
import samosas from "@/assets/samosas.jpg";
import lambBiryani from "@/assets/lamb-biryani.jpg";
import paneerTikka from "@/assets/paneer-tikka.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import heroBiryani from "@/assets/hero-biryani.jpg";

const featuredDishes = [
  {
    image: butterChicken,
    name: "Butter Chicken",
    description:
      "Tender chicken in a rich, creamy tomato sauce with aromatic spices and fresh cream",
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.8,
    spiceLevel: 2,
    isVeg: false,
    isBestSeller: true,
    calories: 450,
  },
  {
    image: samosas,
    name: "Golden Samosas",
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
    price: 8.99,
    rating: 4.6,
    spiceLevel: 1,
    isVeg: true,
    isNew: true,
    calories: 280,
  },
  {
    image: lambBiryani,
    name: "Royal Lamb Biryani",
    description:
      "Fragrant basmati rice layered with succulent lamb, saffron, and caramelized onions",
    price: 22.99,
    rating: 4.9,
    spiceLevel: 2,
    isVeg: false,
    isBestSeller: true,
    calories: 620,
  },
];

const popularDishes = [
  {
    image: paneerTikka,
    name: "Paneer Tikka",
    description:
      "Grilled cottage cheese with colorful bell peppers in tandoori marinade",
    price: 14.99,
    originalPrice: 17.99,
    rating: 4.7,
    spiceLevel: 2,
    isVeg: true,
    calories: 380,
  },
  {
    image: dalMakhani,
    name: "Dal Makhani",
    description:
      "Slow-cooked black lentils in a rich, buttery tomato gravy",
    price: 12.99,
    rating: 4.5,
    spiceLevel: 1,
    isVeg: true,
    isBestSeller: true,
    calories: 320,
  },
  {
    image: heroBiryani,
    name: "Vegetable Biryani",
    description:
      "Aromatic basmati rice with garden vegetables, saffron, and royal spices",
    price: 15.99,
    rating: 4.6,
    spiceLevel: 1,
    isVeg: true,
    isNew: true,
    calories: 480,
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-cream relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage-light rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-40 left-0 w-48 h-48 bg-warm-beige rounded-full opacity-50 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section: Arabian Bistro */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-border flex-1 max-w-24" />
            <div className="text-center">
              <span className="text-sage text-sm tracking-widest uppercase">
                Featured Specials
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-2">
                Royal Bistro
              </h2>
            </div>
            <div className="h-px bg-border flex-1 max-w-24" />
          </div>

          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <svg
              className="w-16 h-8 text-sage"
              viewBox="0 0 64 32"
              fill="currentColor"
            >
              <path d="M32 0C24 8 20 16 20 24c0 4 2 8 6 8s6-4 6-8c0-8-4-16-12-24z" />
              <path d="M32 0c8 8 12 16 12 24 0 4-2 8-6 8s-6-4-6-8c0-8 4-16 12-24z" />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.name} {...dish} variant="sage" />
            ))}
          </div>
        </div>

        {/* Section: Must-Have Classics */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-border flex-1 max-w-24" />
            <div className="text-center">
              <span className="text-terracotta text-sm tracking-widest uppercase">
                Customer Favorites
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-2">
                Must-Have Classics
              </h2>
            </div>
            <div className="h-px bg-border flex-1 max-w-24" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((dish) => (
              <FoodCard key={dish.name} {...dish} />
            ))}
          </div>
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-secondary px-10 py-4 text-lg"
          >
            View Full Menu
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
