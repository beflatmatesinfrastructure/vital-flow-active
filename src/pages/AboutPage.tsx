import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Sobre <span className="text-gradient">mí</span>
              </h1>
              <p className="font-body font-light text-lg lg:text-xl text-muted-foreground">
                La historia detrás de DEARPAOO
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-muted/30 rounded-2xl p-8 lg:p-12 border border-border mb-12"
              >
                <p className="font-body text-lg lg:text-xl text-foreground/90 leading-relaxed">
                  Soy <span className="font-medium text-primary">entrenadora, atleta y asesora de imagen</span>.
                </p>
                <br />
                <p className="font-body text-lg lg:text-xl text-foreground/90 leading-relaxed">
                  Durante años he trabajado con personas reales, entendiendo que el cuerpo no se transforma desde la exigencia extrema, sino desde la <span className="text-accent font-medium">constancia, el cuidado y el respeto</span>.
                </p>
                <br />
                <p className="font-body text-lg lg:text-xl text-foreground/90 leading-relaxed">
                  Desde esa experiencia nace esta marca: <span className="text-primary font-medium">ropa deportiva pensada para entrenar de verdad</span>, y servicios de entrenamiento diseñados para acompañar procesos reales.
                </p>
              </motion.div>

              {/* Values / Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid md:grid-cols-3 gap-6 mb-16"
              >
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-primary">01</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Constancia</h3>
                  <p className="font-body font-light text-muted-foreground text-sm">
                    Los resultados llegan con hábitos sostenibles, no con extremos.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-secondary-foreground">02</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Cuidado</h3>
                  <p className="font-body font-light text-muted-foreground text-sm">
                    Tu cuerpo merece respeto, no castigo. Entrena para sentirte bien.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-accent">03</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Autenticidad</h3>
                  <p className="font-body font-light text-muted-foreground text-sm">
                    Cuerpos reales, procesos reales, resultados reales.
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <p className="font-body text-lg text-muted-foreground mb-6">
                  ¿Quieres comenzar tu proceso?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/entrena-conmigo" className="btn-cta group">
                    Entrena conmigo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/categoria/todos" className="btn-outline-brand">
                    Ver colección
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
