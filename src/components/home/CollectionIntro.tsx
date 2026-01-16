import { motion } from "framer-motion";

const CollectionIntro = () => {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-foreground mb-4">
            Colección
          </h2>
          <p className="font-body font-light text-base lg:text-lg text-muted-foreground leading-relaxed">
            Cada prenda fue pensada para acompañar el movimiento, la comodidad y el entrenamiento real.
            <br />
            <span className="text-primary">No para posar, sino para entrenar, moverte y sentirte segura.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionIntro;
