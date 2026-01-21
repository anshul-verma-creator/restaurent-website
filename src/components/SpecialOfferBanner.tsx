import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function SpecialOfferBanner() {
  return (
    <section className="py-12 bg-terracotta relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border-2 border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-primary-foreground rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
                Grand Opening Special!
              </h3>
              <p className="text-primary-foreground/80">
                Get 20% off on your first order. Use code:{" "}
                <span className="font-bold">ROYAL20</span>
              </p>
            </div>
          </div>
          <Button className="bg-brown hover:bg-brown-light text-primary-foreground px-8 py-6 text-lg rounded-full">
            Order Now & Save
          </Button>
        </div>
      </div>
    </section>
  );
}
