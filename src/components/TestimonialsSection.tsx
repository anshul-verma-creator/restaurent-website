import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    role: "Food Blogger",
    rating: 5,
    text: "The Mutton Biryani here is absolutely divine! The flavors transport you straight to the royal kitchens of Hyderabad. A must-visit!",
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    role: "Regular Customer",
    rating: 5,
    text: "I've been coming here for 3 years and the quality has never dropped. The Butter Chicken is creamy perfection every single time.",
  },
  {
    name: "Aisha Patel",
    avatar: "AP",
    role: "Food Critic",
    rating: 5,
    text: "Royal Flaverts brings authentic Indian flavors with a modern twist. The ambiance is warm, and the service is impeccable.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-warm-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-sage opacity-20">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 text-sage opacity-20 rotate-180">
        <Quote className="w-24 h-24" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sage text-sm tracking-widest uppercase">
            What Our Guests Say
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-2">
            Customer Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card hover-lift"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-soft fill-yellow-soft"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
