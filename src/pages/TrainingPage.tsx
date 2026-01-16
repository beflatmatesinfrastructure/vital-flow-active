import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Wifi, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  priceLabel: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  delay?: number;
  note?: string;
}

const PlanCard = ({ icon, title, description, price, priceLabel, features, ctaText, ctaLink, delay = 0, note }: PlanCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-background rounded-2xl p-6 lg:p-8 shadow-elegant border border-border flex flex-col h-full"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-display text-lg text-foreground">
        {title}
      </h3>
    </div>

    <p className="font-body font-light text-muted-foreground mb-6 leading-relaxed text-sm">
      {description}
    </p>

    <div className="mb-6">
      <div className="p-4 bg-accent/10 rounded-xl text-center">
        <p className="font-body text-sm text-foreground/80 mb-1">{priceLabel}</p>
        <p className="font-display text-xl lg:text-2xl text-accent">{price}</p>
      </div>
    </div>

    <div className="mb-6 flex-grow">
      <p className="font-body font-medium text-foreground mb-3 text-sm">Incluye:</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="font-body font-light text-foreground/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <a href={ctaLink} className="btn-cta w-full justify-center group text-sm">
      {ctaText}
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>

    {note && (
      <div className="mt-4 flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
        <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground">{note}</p>
      </div>
    )}
  </motion.div>
);

const TrainingPage = () => {
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

  const plans = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "8 Sesiones / Mes",
      description: "Plan ideal para quienes comienzan o buscan un acompañamiento moderado con 2 sesiones semanales.",
      price: "Desde $200.000 CLP",
      priceLabel: "Entrenamiento presencial",
      features: presencialFeatures,
      ctaText: "Agendar evaluación",
      ctaLink: "#contacto",
      note: "La evaluación inicial es obligatoria para definir el plan adecuado.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "12 Sesiones / Mes",
      description: "Para quienes buscan resultados más rápidos con 3 sesiones semanales y seguimiento cercano.",
      price: "Desde $250.000 CLP",
      priceLabel: "Entrenamiento presencial",
      features: presencialFeatures,
      ctaText: "Agendar evaluación",
      ctaLink: "#contacto",
      note: "La evaluación inicial es obligatoria para definir el plan adecuado.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "16 Sesiones / Mes",
      description: "El plan más completo para máxima dedicación con 4 sesiones semanales y transformación integral.",
      price: "Desde $300.000 CLP",
      priceLabel: "Entrenamiento presencial",
      features: presencialFeatures,
      ctaText: "Agendar evaluación",
      ctaLink: "#contacto",
      note: "La evaluación inicial es obligatoria para definir el plan adecuado.",
    },
    {
      icon: <Wifi className="w-6 h-6 text-primary" />,
      title: "Entrenamiento Online",
      description: "Ideal si quieres entrenar desde cualquier lugar con una estructura clara y acompañamiento profesional.",
      price: "Desde $150.000 CLP",
      priceLabel: "Plan mensual online",
      features: onlineFeatures,
      ctaText: "Quiero entrenar online",
      ctaLink: "#contacto",
    },
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

        {/* Training Plans */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                Elige tu plan de entrenamiento
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                El entrenamiento personalizado es una inversión en tu salud, tu cuerpo y tu proceso.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <PlanCard key={index} {...plan} delay={index * 0.1} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-sm text-muted-foreground mt-8 italic"
            >
              *Los valores pueden variar según frecuencia y objetivos
            </motion.p>
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
