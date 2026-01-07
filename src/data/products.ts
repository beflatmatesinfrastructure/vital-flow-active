import productTop1 from "@/assets/product-top-1.jpg";
import productTop2 from "@/assets/product-top-2.jpg";
import productLegging1 from "@/assets/product-legging-1.jpg";
import productLegging2 from "@/assets/product-legging-2.jpg";
import productSet1 from "@/assets/product-set-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  images: string[];
  category: string;
  categorySlug: string;
  colors: string[];
  sizes: string[];
  description: string;
  details: string[];
  isNew?: boolean;
  isSale?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "top-essential-teal",
    name: "Top Essential Teal",
    price: 29990,
    image: productTop1,
    images: [productTop1, productTop1],
    category: "Tops",
    categorySlug: "tops",
    colors: ["#376e75", "#77c8b8", "#fa6e53"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Top deportivo de alto soporte con diseño minimalista. Perfecto para entrenamientos de alta intensidad y yoga.",
    details: [
      "Tela de compresión suave",
      "Soporte medio-alto",
      "Tirantes ajustables",
      "Tecnología anti-humedad",
      "Secado rápido",
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "top-power-black",
    name: "Top Power Black",
    price: 34990,
    originalPrice: 44990,
    image: productTop2,
    images: [productTop2, productTop2],
    category: "Tops",
    categorySlug: "tops",
    colors: ["#1a1a1a", "#fa6e53"],
    sizes: ["XS", "S", "M", "L"],
    description: "Sports bra de alto impacto con detalles coral. Diseñado para máximo rendimiento.",
    details: [
      "Soporte alto",
      "Banda elástica inferior",
      "Copas removibles",
      "Diseño de espalda cruzada",
      "Compresión media",
    ],
    isSale: true,
    isFeatured: true,
  },
  {
    id: "legging-coral-flow",
    name: "Legging Coral Flow",
    price: 39990,
    image: productLegging1,
    images: [productLegging1, productLegging1],
    category: "Leggings",
    categorySlug: "leggings",
    colors: ["#fa6e53", "#376e75", "#1a1a1a"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Legging de cintura alta con compresión suave. Tu aliado perfecto para cualquier entrenamiento.",
    details: [
      "Cintura alta ultra cómoda",
      "Tela de 4 vías de estiramiento",
      "Bolsillo lateral oculto",
      "Costuras planas anti-fricción",
      "Opaco y resistente",
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "legging-teal-sculpt",
    name: "Legging Teal Sculpt",
    price: 42990,
    image: productLegging2,
    images: [productLegging2, productLegging2],
    category: "Leggings",
    categorySlug: "leggings",
    colors: ["#376e75", "#77c8b8"],
    sizes: ["XS", "S", "M", "L"],
    description: "Legging escultor con tecnología de compresión gradual. Define y estiliza tu silueta.",
    details: [
      "Compresión escultora",
      "Cintura extra alta",
      "Control de abdomen",
      "Tela premium 280gsm",
      "Secado ultra rápido",
    ],
    isFeatured: true,
  },
  {
    id: "set-mint-power",
    name: "Set Mint Power",
    price: 64990,
    originalPrice: 79990,
    image: productSet1,
    images: [productSet1, productSet1],
    category: "Sets",
    categorySlug: "sets",
    colors: ["#77c8b8", "#376e75", "#fa6e53"],
    sizes: ["XS", "S", "M", "L"],
    description: "Conjunto completo de top y legging coordinados. Look profesional listo para brillar.",
    details: [
      "Incluye top + legging",
      "Diseño coordinado",
      "Tela premium",
      "Compresión suave",
      "Ideal para entrenamiento y lifestyle",
    ],
    isSale: true,
    isFeatured: true,
  },
  {
    id: "set-coral-energy",
    name: "Set Coral Energy",
    price: 69990,
    image: productSet1,
    hoverImage: productTop1,
    images: [productSet1, productTop1],
    category: "Sets",
    categorySlug: "sets",
    colors: ["#fa6e53", "#fab057"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Conjunto vibrante para entrenamientos llenos de energía. Destaca en cada sesión.",
    details: [
      "Incluye sports bra + shorts",
      "Colores vibrantes",
      "Tela transpirable",
      "Perfecto para HIIT",
      "Fit atlético",
    ],
    isNew: true,
    isFeatured: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  if (categorySlug === "todos") return products;
  return products.filter((product) => product.categorySlug === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.isFeatured);
};
