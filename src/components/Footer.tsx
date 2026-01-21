import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Wave decoration */}
      <div className="h-24 bg-cream">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(25 40% 25%)"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,50 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Main footer */}
      <div className="bg-brown text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-serif text-3xl font-bold">Royal</span>
                <span className="font-serif text-3xl font-light text-terracotta">
                  Flaverts
                </span>
              </div>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Experience the authentic taste of India with our royal recipes
                passed down through generations.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-xl font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "Menu", "About Us", "Reviews", "Reservations"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-primary-foreground/70 hover:text-terracotta transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-xl font-semibold mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terracotta mt-0.5" />
                  <span className="text-primary-foreground/70">
                    123 Spice Street, Culinary District
                    <br />
                    New Delhi, 110001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-terracotta" />
                  <a
                    href="tel:+911234567890"
                    className="text-primary-foreground/70 hover:text-terracotta"
                  >
                    +91 123 456 7890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-terracotta" />
                  <a
                    href="mailto:hello@royalflaverts.com"
                    className="text-primary-foreground/70 hover:text-terracotta"
                  >
                    hello@royalflaverts.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-serif text-xl font-semibold mb-6">
                Newsletter
              </h4>
              <p className="text-primary-foreground/70 mb-4">
                Subscribe for exclusive offers and updates!
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-full"
                />
                <Button className="bg-terracotta hover:bg-terracotta-dark rounded-full px-6">
                  Join
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative palm trees */}
          <div className="flex justify-center gap-8 my-12 opacity-20">
            <svg className="w-16 h-24" viewBox="0 0 64 96" fill="currentColor">
              <path d="M32 96V40M32 40c-8-4-16 0-20 8M32 40c8-4 16 0 20 8M32 40c-4-8-4-20 0-28M32 40c4-8 4-20 0-28M32 40c-12-2-20-12-24-20M32 40c12-2 20-12 24-20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <svg className="w-20 h-28" viewBox="0 0 80 112" fill="currentColor">
              <path d="M40 112V48M40 48c-10-5-20 0-25 10M40 48c10-5 20 0 25 10M40 48c-5-10-5-25 0-35M40 48c5-10 5-25 0-35M40 48c-15-2-25-15-30-25M40 48c15-2 25-15 30-25" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <svg className="w-16 h-24" viewBox="0 0 64 96" fill="currentColor">
              <path d="M32 96V40M32 40c-8-4-16 0-20 8M32 40c8-4 16 0 20 8M32 40c-4-8-4-20 0-28M32 40c4-8 4-20 0-28M32 40c-12-2-20-12-24-20M32 40c12-2 20-12 24-20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/50 text-sm">
                © 2024 Royal Flaverts. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-primary-foreground/50 hover:text-terracotta"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/50 hover:text-terracotta"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
