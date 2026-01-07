import { Heart, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl lg:text-3xl mb-4">
              ÚNETE A LA COMUNIDAD
            </h3>
            <p className="font-body font-light text-primary-foreground/80 mb-6">
              Recibe ofertas exclusivas, tips de entrenamiento y sé la primera en conocer nuestros lanzamientos.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="btn-cta whitespace-nowrap"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl tracking-wider">
                DEAR<span className="text-accent">PAOO</span>
              </span>
            </Link>
            <p className="font-body font-light text-sm text-primary-foreground/70 mb-6">
              Ropa deportiva que te empodera. Diseñada para mujeres que se atreven a brillar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-4">Tienda</h4>
            <ul className="space-y-3">
              <li><Link to="/categoria/tops" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Tops</Link></li>
              <li><Link to="/categoria/leggings" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Leggings</Link></li>
              <li><Link to="/categoria/sets" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Sets</Link></li>
              <li><Link to="/categoria/accesorios" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Accesorios</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-4">Ayuda</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Guía de tallas</a></li>
              <li><a href="#" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Envíos</a></li>
              <li><a href="#" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Devoluciones</a></li>
              <li><a href="#" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="font-body font-light text-sm text-primary-foreground/70 hover:text-accent transition-colors">Política de privacidad</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-body font-light text-xs text-primary-foreground/60">
              © 2025 DEARPAOO. Todos los derechos reservados.
            </p>
            <p className="font-body font-light text-xs text-primary-foreground/60 flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-accent" /> para mujeres que brillan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
