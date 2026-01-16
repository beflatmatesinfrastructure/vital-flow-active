import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Wifi } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TrainingPage = () => {
  const presencialFeatures = [
    "Evaluación inicial",
    "Plan de entrenamiento personalizado",
    "Seguimiento constante",
    "Adaptaciones según progreso",
  ];

  const onlineFeatures = [
    "Plan de entrenamiento personalizado",
    "Indicaciones claras y progresiones",
    "Seguimiento y ajustes",
  ];

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
                Entrena <span className="text-gradient">conmigo</span>
              </h1>
              <p className="font-body font-light text-lg lg:text-xl text-muted-foreground">
                Programas de entrenamiento diseñados desde la experiencia, el cuidado del cuerpo y la constancia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Block */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="font-body text-lg lg:text-xl text-foreground leading-relaxed">
                <span className="font-medium text-primary">Entrenar no es solo hacer ejercicio.</span>
                <br /><br />
                Es aprender a moverte, respetar tu cuerpo y construir hábitos que puedas sostener en el tiempo.
                <br /><br />
                Aquí encontrarás distintas formas de entrenar conmigo, según tus objetivos y tu estilo de vida.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Options */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Presencial */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 lg:p-10 shadow-elegant border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl lg:text-2xl text-foreground">
                    Entrenamiento personalizado presencial
                  </h2>
                </div>

                <p className="font-body font-light text-muted-foreground mb-6 leading-relaxed">
                  Sesiones uno a uno, diseñadas según tu nivel, objetivos y condición física.
                  <br /><br />
                  Ideal si buscas un acompañamiento cercano, corrección técnica y un plan adaptado completamente a ti.
                </p>

                <div className="mb-8">
                  <p className="font-body font-medium text-foreground mb-4">Incluye:</p>
                  <ul className="space-y-3">
                    {presencialFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-body font-light text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contacto"
                  className="btn-cta w-full justify-center group"
                >
                  Agendar evaluación
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Online */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background rounded-2xl p-8 lg:p-10 shadow-elegant border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h2 className="font-display text-xl lg:text-2xl text-foreground">
                    Entrenamiento online
                  </h2>
                </div>

                <p className="font-body font-light text-muted-foreground mb-6 leading-relaxed">
                  Para quienes quieren entrenar desde cualquier lugar, con una estructura clara y acompañamiento profesional.
                  <br /><br />
                  El plan se adapta a tu nivel, horarios y objetivos.
                </p>

                <div className="mb-8">
                  <p className="font-body font-medium text-foreground mb-4">Incluye:</p>
                  <ul className="space-y-3">
                    {onlineFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-body font-light text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contacto"
                  className="btn-outline-brand w-full justify-center group"
                >
                  Quiero entrenar online
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-8">
                Sobre <span className="text-gradient">mí</span>
              </h2>
              
              <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 border border-border">
                <p className="font-body font-light text-lg text-foreground/90 leading-relaxed text-center">
                  Soy <span className="font-medium text-primary">entrenadora, atleta y asesora de imagen</span>.
                  <br /><br />
                  Durante años he trabajado con personas reales, entendiendo que el cuerpo no se transforma desde la exigencia extrema, sino desde la constancia, el cuidado y el respeto.
                  <br /><br />
                  Desde esa experiencia nace esta marca: <span className="text-accent font-medium">ropa deportiva pensada para entrenar de verdad</span>, y servicios de entrenamiento diseñados para acompañar procesos reales.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-16 lg:py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl lg:text-4xl text-primary-foreground mb-4">
                ¿Lista para empezar?
              </h2>
              <p className="font-body font-light text-primary-foreground/90 mb-8">
                Escríbeme y conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
              <a
                href="https://wa.me/TUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-display uppercase tracking-wider rounded-full hover:bg-accent/90 transition-colors"
              >
                Contáctame por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingPage;
