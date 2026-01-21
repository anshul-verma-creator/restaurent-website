import { Clock, MapPin, Phone, Utensils } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sage-light rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-beige rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sage text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-2 mb-6">
              A Tradition of Royal Flavors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Born from a passion for authentic Indian cuisine, Royal Flaverts
              brings the rich culinary heritage of India to your table. Our
              recipes have been passed down through generations, each dish
              crafted with love and the finest ingredients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the aromatic biryanis of Hyderabad to the creamy curries of
              Punjab, we invite you to experience the diverse flavors that make
              Indian cuisine truly extraordinary.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Authentic Recipes
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional family recipes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <Clock className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Fresh Daily</h4>
                  <p className="text-sm text-muted-foreground">
                    Made fresh every day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Hours Card */}
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">
                    11:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium text-foreground">
                    9:00 AM - 11:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Find Us
                </h3>
              </div>
              <p className="text-muted-foreground">
                123 Spice Street, Culinary District
                <br />
                New Delhi, 110001
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Reservations
                </h3>
              </div>
              <p className="text-muted-foreground">
                Call us at{" "}
                <a
                  href="tel:+911234567890"
                  className="text-terracotta font-medium hover:underline"
                >
                  +91 123 456 7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
