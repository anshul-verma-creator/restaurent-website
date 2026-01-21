import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="font-serif text-2xl md:text-3xl font-bold text-brown">
                Royal
              </span>
              <span className="font-serif text-2xl md:text-3xl font-light text-terracotta ml-1">
                Flaverts
              </span>
            </div>
            <svg
              className="w-6 h-6 text-sage"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7L12 22l2.7-11.8c1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brown-light hover:text-brown font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-brown hover:bg-sage-light"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="btn-primary rounded-full px-6">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brown p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brown-light hover:text-brown font-medium py-2 px-4 rounded-lg hover:bg-sage-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4 px-4">
                <Button className="btn-primary rounded-full flex-1">
                  Order Now
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-brown hover:bg-sage-light"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
