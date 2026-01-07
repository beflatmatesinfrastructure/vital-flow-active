import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl lg:text-5xl text-foreground mb-4">
              PRODUCTOS DESTACADOS
            </h2>
            <p className="font-body font-light text-muted-foreground max-w-lg">
              Nuestras prendas más queridas, seleccionadas para ti
            </p>
          </div>
          <Link
            to="/categoria/todos"
            className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-primary hover:text-accent transition-colors group"
          >
            Ver todo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              hoverImage={product.hoverImage}
              category={product.category}
              colors={product.colors}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
