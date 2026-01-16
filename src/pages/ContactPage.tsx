import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Respuesta rápida",
      action: "Escríbeme",
      href: "https://wa.me/TUNUMERO",
    },
    {
      icon: Mail,
      title: "Email",
      description: "contacto@dearpaoo.com",
      action: "Enviar email",
      href: "mailto:contacto@dearpaoo.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "@dearpaoo",
      action: "Sígueme",
      href: "https://instagram.com/dearpaoo",
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
                <span className="text-gradient">Contacto</span>
              </h1>
              <p className="font-body font-light text-lg lg:text-xl text-muted-foreground">
                Estoy aquí para ayudarte. Escríbeme y conversemos sobre tus objetivos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-background rounded-2xl p-8 shadow-elegant border border-border hover:border-accent/50 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <method.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{method.title}</h3>
                  <p className="font-body font-light text-muted-foreground text-sm mb-4">{method.description}</p>
                  <span className="inline-flex items-center gap-1 font-body text-sm text-accent group-hover:gap-2 transition-all">
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 border border-border">
                <h2 className="font-display text-2xl text-foreground text-center mb-8">
                  Envíame un mensaje
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-body text-sm text-foreground mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="entrenamiento-presencial">Entrenamiento presencial</option>
                      <option value="entrenamiento-online">Entrenamiento online</option>
                      <option value="asesoria">Asesoría / Planes</option>
                      <option value="productos">Consulta sobre productos</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body resize-none"
                      placeholder="Cuéntame sobre tus objetivos..."
                    />
                  </div>

                  <button type="submit" className="btn-cta w-full justify-center group">
                    Enviar mensaje
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location Note */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 text-primary-foreground"
            >
              <MapPin className="w-5 h-5" />
              <p className="font-body font-light">
                Santiago, Chile
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
