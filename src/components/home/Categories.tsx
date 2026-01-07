import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import categoryTops from "@/assets/category-tops.jpg";
import categoryLeggings from "@/assets/category-leggings.jpg";
import categorySets from "@/assets/category-sets.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  {
    name: "Tops",
    description: "Sports bras y tops de alto rendimiento",
    image: categoryTops,
    href: "/categoria/tops",
  },
  {
    name: "Leggings",
    description: "Ajuste perfecto para cada movimiento",
    image: categoryLeggings,
    href: "/categoria/leggings",
  },
  {
    name: "Sets",
    description: "Outfits coordinados listos para brillar",
    image: categorySets,
    href: "/categoria/sets",
  },
  {
    name: "Accesorios",
    description: "Todo lo que necesitas para tu entrenamiento",
    image: categoryAccessories,
    href: "/categoria/accesorios",
  },
];

const Categories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl lg:text-5xl text-foreground mb-4">
            EXPLORA CATEGORÍAS
          </h2>
          <p className="font-body font-light text-muted-foreground max-w-lg mx-auto">
            Encuentra la prenda perfecta para tu estilo de entrenamiento
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="group relative block aspect-square rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-2">
                        {category.name}
                      </h3>
                      <p className="font-body font-light text-sm text-primary-foreground/80">
                        {category.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
