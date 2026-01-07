import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Minus, Plus, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id || "");

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Producto no encontrado</h1>
          <button onClick={() => navigate("/")} className="btn-cta">
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Por favor selecciona una talla");
      return;
    }
    if (!selectedColor) {
      toast.error("Por favor selecciona un color");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    toast.success("¡Producto agregado al carrito!", {
      description: `${product.name} - Talla ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Badges */}
              <div className="flex gap-2">
                {product.isNew && (
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-display uppercase tracking-wider rounded-full">
                    Nuevo
                  </span>
                )}
                {product.isSale && (
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-display uppercase tracking-wider rounded-full">
                    Sale
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div>
                <p className="font-body font-light text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-foreground">
                    ${product.price.toLocaleString("es-CL")}
                  </span>
                  {product.originalPrice && (
                    <span className="font-body text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString("es-CL")}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="font-body font-light text-foreground/80 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              <div>
                <label className="font-display text-sm uppercase tracking-wider text-foreground mb-3 block">
                  Color
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all relative ${
                        selectedColor === color ? "border-foreground scale-110" : "border-border"
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Seleccionar color ${color}`}
                    >
                      {selectedColor === color && (
                        <Check className="absolute inset-0 m-auto w-4 h-4 text-white drop-shadow-lg" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <label className="font-display text-sm uppercase tracking-wider text-foreground mb-3 block">
                  Talla
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-display text-sm transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="font-display text-sm uppercase tracking-wider text-foreground mb-3 block">
                  Cantidad
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-display">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 pt-4">
                <button onClick={handleAddToCart} className="btn-cta flex-1 gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Agregar al Carrito
                </button>
                <button className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Details */}
              <div className="border-t border-border pt-6 mt-6">
                <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">
                  Detalles del Producto
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 font-body font-light text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-secondary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
