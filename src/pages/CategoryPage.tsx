import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/data/products";

const categoryNames: Record<string, string> = {
  tops: "Tops",
  leggings: "Leggings",
  sets: "Sets",
  accesorios: "Accesorios",
  todos: "Todos los Productos",
};

const CategoryPage = () => {
  const { slug = "todos" } = useParams<{ slug: string }>();
  const products = getProductsByCategory(slug);
  const categoryName = categoryNames[slug] || "Productos";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="section-padding bg-muted/30 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mb-4">
              {categoryName.toUpperCase()}
            </h1>
            <p className="font-body font-light text-muted-foreground max-w-lg mx-auto">
              Descubre nuestra colección de {categoryName.toLowerCase()} diseñados para empoderar tu entrenamiento
            </p>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {products.map((product) => (
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
            ) : (
              <div className="text-center py-16">
                <p className="font-body text-muted-foreground">
                  No hay productos en esta categoría aún.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
