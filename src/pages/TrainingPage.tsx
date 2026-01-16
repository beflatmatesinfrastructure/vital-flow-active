import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Wifi, Compass, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TrainingPage = () => {
  const presencialPlans = [
    { sessions: "8 sesiones / mes", price: "Desde $200.000 CLP" },
    { sessions: "12 sesiones / mes", price: "Desde $250.000 CLP" },
    { sessions: "16 sesiones / mes", price: "Desde $300.000 CLP" },
  ];

  const presencialFeatures = [
    "Evaluación inicial",
    "Plan de entrenamiento personalizado",
    "Seguimiento constante",
    "Adaptaciones según progreso",
  ];

  const onlineFeatures = [
    "Rutina personalizada",
    "Indicaciones claras",
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
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Presencial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 shadow-elegant border border-border flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-lg lg:text-xl text-foreground">
                    Entrenamiento Personalizado Presencial
                  </h2>
                </div>

                <p className="font-body font-light text-muted-foreground mb-6 leading-relaxed text-sm">
                  El entrenamiento personalizado es una inversión en tu salud, tu cuerpo y tu proceso.
                  Cada plan se adapta a tu nivel, objetivos y condición física.
                </p>

                <div className="mb-6">
                  <p className="font-body font-medium text-foreground mb-3 text-sm">Planes mensuales:</p>
                  <div className="space-y-3">
                    {presencialPlans.map((plan, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="font-body text-sm text-foreground/80">{plan.sessions}</span>
                        <span className="font-display text-sm text-accent">{plan.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    *Los valores pueden variar según frecuencia y objetivos
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="font-body font-medium text-foreground mb-3 text-sm">Incluye:</p>
                  <ul className="space-y-2">
                    {presencialFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="font-body font-light text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a href="#contacto" className="btn-cta w-full justify-center group text-sm">
                    Agendar evaluación
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#contacto" className="btn-outline-brand w-full justify-center text-sm">
                    Solicitar información
                  </a>
                </div>

                <div className="mt-4 flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                  <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    La evaluación inicial es obligatoria para definir el plan adecuado.
                  </p>
                </div>
              </motion.div>

              {/* Online */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-elegant border border-border flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h2 className="font-display text-lg lg:text-xl text-foreground">
                    Entrenamiento Online
                  </h2>
                </div>

                <p className="font-body font-light text-muted-foreground mb-6 leading-relaxed text-sm">
                  Ideal si quieres entrenar desde cualquier lugar con una estructura clara y acompañamiento profesional.
                </p>

                <div className="mb-6">
                  <div className="p-4 bg-accent/10 rounded-xl text-center">
                    <p className="font-body text-sm text-foreground/80 mb-1">Plan mensual online</p>
                    <p className="font-display text-2xl text-accent">Desde $150.000 CLP</p>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="font-body font-medium text-foreground mb-3 text-sm">Incluye:</p>
                  <ul className="space-y-2">
                    {onlineFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="font-body font-light text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contacto" className="btn-cta w-full justify-center group text-sm mt-auto">
                  Quiero entrenar online
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Asesorías */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background rounded-2xl p-8 shadow-elegant border border-border flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="font-display text-lg lg:text-xl text-foreground">
                    Asesorías / Planes
                  </h2>
                </div>

                <p className="font-body font-light text-muted-foreground mb-6 leading-relaxed text-sm">
                  Pensado para quienes necesitan orden, claridad y una guía profesional para comenzar o retomar el entrenamiento.
                </p>

                <div className="mb-6">
                  <div className="p-4 bg-accent/10 rounded-xl text-center">
                    <p className="font-body text-sm text-foreground/80 mb-1">Asesoría personalizada</p>
                    <p className="font-display text-2xl text-accent">Desde $85.000 CLP</p>
                  </div>
                </div>

                <div className="flex-grow" />

                <a href="#contacto" className="btn-outline-brand w-full justify-center group text-sm mt-auto">
                  Ver opciones
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
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
