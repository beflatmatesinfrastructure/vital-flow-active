import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const collectionSubLinks = [
    { name: "Todos", href: "/categoria/todos" },
    { name: "Tops", href: "/categoria/tops" },
    { name: "Leggings", href: "/categoria/leggings" },
    { name: "Sets", href: "/categoria/sets" },
    { name: "Accesorios", href: "/categoria/accesorios" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display font-bold text-xl lg:text-2xl tracking-wider text-primary">
              DEAR<span className="text-accent">PAOO</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="font-body font-light text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              Inicio
            </Link>

            {/* Colección Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCollectionOpen(true)}
              onMouseLeave={() => setIsCollectionOpen(false)}
            >
              <button className="flex items-center gap-1 font-body font-light text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors duration-300">
                Colección
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCollectionOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCollectionOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    {collectionSubLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-3 font-body text-sm text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/entrena-conmigo"
              className="font-body font-light text-sm uppercase tracking-widest text-accent hover:text-accent/80 transition-colors duration-300"
            >
              Entrena conmigo
            </Link>

            <Link
              to="/sobre-mi"
              className="font-body font-light text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              Sobre mí
            </Link>

            <Link
              to="/contacto"
              className="font-body font-light text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              Contacto
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Link to="/carrito" className="relative p-2 hover:text-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block font-display text-lg uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                Inicio
              </Link>

              {/* Mobile Colección Section */}
              <div>
                <button
                  onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                  className="flex items-center gap-2 font-display text-lg uppercase tracking-wider text-foreground hover:text-accent transition-colors w-full"
                >
                  Colección
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isCollectionOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCollectionOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 flex flex-col gap-2"
                    >
                      {collectionSubLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block font-body text-base text-foreground/70 hover:text-accent transition-colors py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/entrena-conmigo"
                onClick={() => setIsMenuOpen(false)}
                className="block font-display text-lg uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
              >
                Entrena conmigo
              </Link>

              <Link
                to="/sobre-mi"
                onClick={() => setIsMenuOpen(false)}
                className="block font-display text-lg uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                Sobre mí
              </Link>

              <Link
                to="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block font-display text-lg uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
