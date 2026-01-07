import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  colors?: string[];
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  category,
  colors = [],
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/producto/${id}`} className="block relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
        {/* Main Image */}
        <img
          src={image}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered && hoverImage ? "opacity-0" : "opacity-100"
          }`}
        />
        
        {/* Hover Image */}
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${name} - vista alternativa`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-display uppercase tracking-wider rounded-full">
              Nuevo
            </span>
          )}
          {isSale && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-display uppercase tracking-wider rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isLiked ? "bg-accent text-accent-foreground" : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
            aria-label="Agregar a favoritos"
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <button className="w-full py-3 bg-primary text-primary-foreground rounded-full font-display text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Agregar
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="px-1">
        <p className="font-body font-light text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {category}
        </p>
        <Link to={`/producto/${id}`}>
          <h3 className="font-display text-base text-foreground mb-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-body font-bold text-foreground">
            ${price.toLocaleString("es-CL")}
          </span>
          {originalPrice && (
            <span className="font-body font-light text-sm text-muted-foreground line-through">
              ${originalPrice.toLocaleString("es-CL")}
            </span>
          )}
        </div>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="flex gap-1.5 mt-3">
            {colors.map((color, index) => (
              <button
                key={index}
                className="w-4 h-4 rounded-full border border-border hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                aria-label={`Color ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProductCard;
