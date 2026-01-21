import { Star, Flame, Leaf, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FoodCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  spiceLevel?: number;
  isVeg?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  calories?: number;
  variant?: "default" | "sage";
}

export function FoodCard({
  image,
  name,
  description,
  price,
  originalPrice,
  rating,
  spiceLevel = 0,
  isVeg = false,
  isBestSeller = false,
  isNew = false,
  calories,
  variant = "default",
}: FoodCardProps) {
  const [quantity, setQuantity] = useState(1);

  const cardClass =
    variant === "sage" ? "card-sage p-4" : "card-food bg-card p-4";

  return (
    <div className={cardClass}>
      {/* Image Container */}
      <div className="relative mb-4">
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover image-zoom"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isBestSeller && (
            <span className="bg-coral text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Best Seller
            </span>
          )}
          {isNew && (
            <span className="bg-yellow-soft text-brown px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              New
            </span>
          )}
          {isVeg && (
            <span className="bg-sage text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
              <Leaf className="w-3 h-3" /> Veg
            </span>
          )}
        </div>

        {/* Discount Badge */}
        {originalPrice && originalPrice > price && (
          <div className="absolute top-3 right-3 bg-terracotta text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Spice Level */}
        {spiceLevel > 0 && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <Flame
                key={i}
                className={`w-4 h-4 ${
                  i < spiceLevel ? "text-terracotta" : "text-muted"
                }`}
                fill={i < spiceLevel ? "currentColor" : "none"}
              />
            ))}
          </div>
        )}

        {/* Name */}
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-soft fill-yellow-soft" : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Calories */}
        {calories && (
          <p className="text-xs text-muted-foreground">{calories} Cal</p>
        )}

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-terracotta">
              ${price.toFixed(2)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center border border-border rounded-full overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 hover:bg-muted transition-colors"
              >
                -
              </button>
              <span className="px-2 text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 hover:bg-muted transition-colors"
              >
                +
              </button>
            </div>
            <Button
              size="icon"
              className="rounded-full bg-terracotta hover:bg-terracotta-dark text-primary-foreground h-10 w-10"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
