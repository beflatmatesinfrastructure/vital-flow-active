import { motion } from "framer-motion";
import { Truck, RefreshCw, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En compras sobre $50.000",
  },
  {
    icon: RefreshCw,
    title: "Cambios Fáciles",
    description: "30 días para cambiar tu talla",
  },
  {
    icon: Shield,
    title: "Pago Seguro",
    description: "Transacciones 100% protegidas",
  },
  {
    icon: Sparkles,
    title: "Calidad Premium",
    description: "Materiales de alto rendimiento",
  },
];

const Features = () => {
  return (
    <section className="py-12 lg:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="font-body font-light text-xs text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
