import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50000 ? 0 : 4990;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Seguir comprando
          </Link>

          <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-8">
            TU CARRITO
          </h1>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="font-display text-xl text-foreground mb-4">
                Tu carrito está vacío
              </h2>
              <p className="font-body font-light text-muted-foreground mb-8">
                ¡Explora nuestra colección y encuentra tu outfit perfecto!
              </p>
              <Link to="/categoria/todos" className="btn-cta">
                Explorar Productos
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.article
                    key={`${item.id}-${item.size}-${item.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-card rounded-2xl"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                  >
                    {/* Image */}
                    <Link to={`/producto/${item.id}`} className="shrink-0">
                      <div className="w-24 h-32 lg:w-32 lg:h-40 rounded-xl overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <Link to={`/producto/${item.id}`}>
                          <h3 className="font-display text-base lg:text-lg text-foreground hover:text-accent transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="font-body font-light text-sm text-muted-foreground mt-1">
                          Talla: {item.size} | Color:{" "}
                          <span
                            className="inline-block w-3 h-3 rounded-full align-middle border border-border"
                            style={{ backgroundColor: item.color }}
                          />
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-body text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-display text-foreground">
                          ${(item.price * item.quantity).toLocaleString("es-CL")}
                        </span>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      className="self-start p-2 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.article>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl p-6 sticky top-28"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <h2 className="font-display text-lg uppercase tracking-wider text-foreground mb-6">
                    Resumen del Pedido
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">${subtotal.toLocaleString("es-CL")}</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="text-foreground">
                        {shipping === 0 ? (
                          <span className="text-secondary">Gratis</span>
                        ) : (
                          `$${shipping.toLocaleString("es-CL")}`
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="font-body font-light text-xs text-secondary">
                        ¡Agrega ${(50000 - subtotal).toLocaleString("es-CL")} más para envío gratis!
                      </p>
                    )}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-display text-lg text-foreground">Total</span>
                      <span className="font-display text-lg text-foreground">
                        ${total.toLocaleString("es-CL")}
                      </span>
                    </div>
                  </div>

                  <button className="btn-cta w-full mb-3">
                    Ir al Checkout
                  </button>

                  <p className="font-body font-light text-xs text-center text-muted-foreground">
                    Pago 100% seguro • Cambios gratis por 30 días
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
