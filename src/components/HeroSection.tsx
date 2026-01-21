import { Button } from "@/components/ui/button";
import heroBiryani from "@/assets/hero-biryani.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-warm-beige rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-sage-light rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-soft rounded-full opacity-30 blur-2xl" />
      </div>

      {/* Decorative botanical elements */}
      <div className="absolute top-32 left-8 text-sage opacity-50">
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 4C20 8 18 16 18 24c0 8 2 16 6 20-4-4-6-12-6-20s2-16 6-20z" />
          <path d="M24 4c4 4 6 12 6 20s-2 16-6 20c4-4 6-12 6-20s-2-16-6-20z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-12 text-sage opacity-40">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
          <circle cx="16" cy="16" r="4" />
          <path d="M16 2v28M2 16h28M6 6l20 20M26 6L6 26" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-muted-foreground mb-2 tracking-wide">
              9 AM - 10 PM • OPEN TODAY
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brown leading-tight mb-6">
              Mutton
              <br />
              <span className="text-terracotta">Biryani</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              A majestic symphony of aromatic basmati rice layered with tender,
              slow-cooked mutton, infused with saffron, caramelized onions, and
              our secret blend of royal spices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-secondary text-lg px-8 py-6">
                Order Now
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-brown text-brown hover:bg-brown hover:text-primary-foreground rounded-full transition-all"
              >
                View Menu
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Decorative circle behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] bg-sage-light rounded-full opacity-50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-warm-beige rounded-full opacity-60" />
            </div>
            
            {/* Main image */}
            <div className="relative z-10 w-full max-w-lg">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-cream">
                <img
                  src={heroBiryani}
                  alt="Aromatic Mutton Biryani in a traditional copper pot"
                  className="w-full h-full object-cover image-zoom"
                />
              </div>
              
              {/* Steam effect */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-60">
                <div className="flex gap-2">
                  <div className="w-2 h-16 bg-gradient-to-t from-transparent to-muted rounded-full animate-steam" style={{ animationDelay: "0s" }} />
                  <div className="w-2 h-20 bg-gradient-to-t from-transparent to-muted rounded-full animate-steam" style={{ animationDelay: "0.5s" }} />
                  <div className="w-2 h-14 bg-gradient-to-t from-transparent to-muted rounded-full animate-steam" style={{ animationDelay: "1s" }} />
                </div>
              </div>
            </div>

            {/* Floating price badge */}
            <div className="absolute bottom-8 right-8 bg-terracotta text-primary-foreground px-6 py-3 rounded-full shadow-lg animate-float">
              <span className="font-serif text-2xl font-bold">$18.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
