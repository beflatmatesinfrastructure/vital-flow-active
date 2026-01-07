import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Entrenadora Personal",
    content: "La calidad de DEARPAOO es incomparable. Cada prenda se siente como una segunda piel y me da la confianza para dar lo mejor en cada entrenamiento.",
    rating: 5,
  },
  {
    id: 2,
    name: "Camila Rodríguez",
    role: "Amante del Fitness",
    content: "Finalmente encontré ropa deportiva que combina estilo y comodidad. Los sets son perfectos para ir del gym a la calle sin cambiarme.",
    rating: 5,
  },
  {
    id: 3,
    name: "Valentina Muñoz",
    role: "Instructora de Yoga",
    content: "La tela es increíble, no transparenta y tiene el soporte perfecto. Mis alumnas siempre me preguntan dónde compro mi ropa.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/20">
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
            LO QUE DICEN NUESTRAS CLIENTAS
          </h2>
          <p className="font-body font-light text-muted-foreground max-w-lg mx-auto">
            Historias de mujeres que confían en DEARPAOO
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-secondary">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-amarillo text-brand-amarillo" />
                ))}
              </div>

              {/* Content */}
              <p className="font-body font-light text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <span className="font-display text-lg text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-sm text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-body font-light text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
