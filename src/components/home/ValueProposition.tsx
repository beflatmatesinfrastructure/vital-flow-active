import { motion } from "framer-motion";

const ValueProposition = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-8">
            Esta marca nace del{" "}
            <span className="text-gradient">entrenamiento real.</span>
          </h2>
          <p className="font-body font-light text-lg lg:text-xl text-muted-foreground leading-relaxed">
            De años trabajando con personas reales, cuerpos distintos y objetivos distintos.
            <br /><br />
            Por eso aquí no solo encuentras ropa deportiva, sino también la posibilidad de{" "}
            <span className="text-primary font-medium">entrenar conmigo</span> y aprender a cuidar tu cuerpo desde adentro hacia afuera.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
