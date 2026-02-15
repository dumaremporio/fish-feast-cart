import catPescados from "@/assets/cat-pescados.jpg";
import catBacalhau from "@/assets/cat-bacalhau.jpg";
import catCamarao from "@/assets/cat-camarao.jpg";
import catLagosta from "@/assets/cat-lagosta.jpg";
import catMoluscos from "@/assets/cat-moluscos.jpg";
import catConchas from "@/assets/cat-conchas.jpg";
import catSashimi from "@/assets/cat-sashimi.jpg";
import catCeviche from "@/assets/cat-ceviche.jpg";
import catSiri from "@/assets/cat-siri.jpg";

export interface Product {
  id: string;
  name: string;
  description?: string;
  variants: ProductVariant[];
  category: string;
  subcategory?: string;
}

export interface ProductVariant {
  label: string;
  price: number | null; // null = consulte
  unit: string; // "kg", "uni", "duz", "pct"
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories?: string[];
}

export const categories: Category[] = [
  { id: "pescados", name: "Pescados da Semana", image: catPescados, subcategories: ["Filés", "Inteiro"] },
  { id: "bacalhau", name: "Bacalhau", image: catBacalhau, subcategories: ["Noruega", "Porto", "Macro"] },
  { id: "camarao", name: "Camarões", image: catCamarao, subcategories: ["Cinza", "Rosa", "Carabineiro", "Tigre"] },
  { id: "lagosta", name: "Lagostas", image: catLagosta },
  { id: "moluscos", name: "Moluscos", image: catMoluscos },
  { id: "siri", name: "Siri, Caranguejo & Ovas", image: catSiri },
  { id: "conchas", name: "Conchas", image: catConchas },
  { id: "sashimi", name: "Sashimis, Cubos & Carpaccios", image: catSashimi },
  { id: "ceviche", name: "Ceviches & Vinagretes", image: catCeviche },
];

export const products: Product[] = [
  // PESCADOS DA SEMANA
  { id: "p1", name: "Salmão", description: "Cativeiro", category: "pescados", variants: [
    { label: "Filé", price: 103.90, unit: "kg" },
    { label: "Inteiro", price: 69.90, unit: "kg" },
  ]},
  { id: "p2", name: "Tilápia", description: "Cativeiro", category: "pescados", variants: [
    { label: "Filé", price: 59.90, unit: "kg" },
  ]},
  { id: "p3", name: "Unagui (Enguia Japonesa)", category: "pescados", variants: [
    { label: "Filé", price: 175.00, unit: "kg" },
  ]},
  { id: "p4", name: "Dourada Mahi-Mahi", category: "pescados", variants: [
    { label: "Filé", price: 112.90, unit: "kg" },
    { label: "Inteiro", price: 78.00, unit: "kg" },
  ]},
  { id: "p5", name: "Agulhão Vela", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 78.90, unit: "kg" },
  ]},
  { id: "p6", name: "Meca", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 94.80, unit: "kg" },
  ]},
  { id: "p7", name: "Robalo", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 160.90, unit: "kg" },
    { label: "Inteiro", price: 98.00, unit: "kg" },
  ]},
  { id: "p8", name: "Agulhinha", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 19.90, unit: "kg" },
  ]},
  { id: "p9", name: "Carapau", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 76.50, unit: "kg" },
    { label: "Inteiro", price: 43.50, unit: "kg" },
  ]},
  { id: "p10", name: "Atum Lombo", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 108.90, unit: "kg" },
    { label: "Inteiro", price: 87.00, unit: "kg" },
  ]},
  { id: "p11", name: "Namorado", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 145.00, unit: "kg" },
    { label: "Inteiro", price: 85.00, unit: "kg" },
  ]},
  { id: "p12", name: "Linguado", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 95.50, unit: "kg" },
    { label: "Inteiro", price: 78.00, unit: "kg" },
  ]},
  { id: "p13", name: "Trilha Espalmada", category: "pescados", variants: [
    { label: "Filé", price: 45.90, unit: "kg" },
  ]},
  { id: "p14", name: "Truta", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 110.50, unit: "kg" },
    { label: "Inteiro", price: 72.00, unit: "kg" },
  ]},
  { id: "p15", name: "Tainha", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 52.00, unit: "kg" },
    { label: "Inteiro", price: 44.90, unit: "kg" },
  ]},
  { id: "p16", name: "Xaréu Amarelo", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 59.90, unit: "kg" },
    { label: "Inteiro", price: 45.00, unit: "kg" },
  ]},
  { id: "p17", name: "Badejo", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 149.00, unit: "kg" },
    { label: "Inteiro", price: 94.00, unit: "kg" },
  ]},
  { id: "p18", name: "Pescada Amarela", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 108.50, unit: "kg" },
    { label: "Inteiro", price: 75.00, unit: "kg" },
  ]},
  { id: "p19", name: "Anchova", description: "Selvagem", category: "pescados", variants: [
    { label: "Filé", price: 64.80, unit: "kg" },
    { label: "Inteiro", price: 48.80, unit: "kg" },
  ]},
  { id: "p20", name: "Cação", description: "Congelado, selvagem", category: "pescados", variants: [
    { label: "Filé", price: 34.90, unit: "kg" },
  ]},

  // BACALHAU
  { id: "b1", name: "Filé Inteiro de Bacalhau da Noruega", description: "Salgado Gadus Morhua (Limpamos)", category: "bacalhau", subcategory: "Noruega", variants: [
    { label: "Por kg", price: 202.50, unit: "kg" },
  ]},
  { id: "b2", name: "Meio Filé de Bacalhau da Noruega", description: "Salgado Gadus Morhua (Limpamos)", category: "bacalhau", subcategory: "Noruega", variants: [
    { label: "Por kg", price: 209.90, unit: "kg" },
  ]},
  { id: "b3", name: "Lombo de Bacalhau da Noruega", description: "Salgado Gadus Morhua (s/ espinha)", category: "bacalhau", subcategory: "Noruega", variants: [
    { label: "Por kg", price: 259.90, unit: "kg" },
  ]},
  { id: "b4", name: "Lombo (Barriga) Bacalhau da Noruega", description: "Salgado Gadus Morhua (s/ espinha)", category: "bacalhau", subcategory: "Noruega", variants: [
    { label: "Por kg", price: 239.90, unit: "kg" },
  ]},
  { id: "b5", name: "Lascas de Bacalhau da Noruega", description: "Salgado Gadus Morhua (s/ espinha)", category: "bacalhau", subcategory: "Noruega", variants: [
    { label: "Por kg", price: 210.50, unit: "kg" },
  ]},
  { id: "b6", name: "Lombo de Bacalhau do Porto", description: "Dessalgado Gadus Morhua 800g", category: "bacalhau", subcategory: "Porto", variants: [
    { label: "800g", price: 149.00, unit: "uni" },
  ]},
  { id: "b7", name: "Lombo de Bacalhau Macro", description: "Dessalgado 800g", category: "bacalhau", subcategory: "Macro", variants: [
    { label: "800g", price: 129.90, unit: "uni" },
  ]},

  // CAMARÃO CINZA
  { id: "c1", name: "Camarão Cinza GG", category: "camarao", subcategory: "Cinza", variants: [
    { label: "Inteiro", price: 97.50, unit: "kg" },
    { label: "Limpo", price: 145.90, unit: "kg" },
  ]},
  { id: "c2", name: "Camarão Cinza G", category: "camarao", subcategory: "Cinza", variants: [
    { label: "Inteiro", price: 82.90, unit: "kg" },
    { label: "Limpo", price: 129.50, unit: "kg" },
  ]},
  { id: "c3", name: "Camarão Cinza M", category: "camarao", subcategory: "Cinza", variants: [
    { label: "Inteiro", price: 69.90, unit: "kg" },
    { label: "Limpo", price: 105.00, unit: "kg" },
  ]},
  { id: "c4", name: "Camarão 7 Barbas", description: "Limpo, Congelado", category: "camarao", subcategory: "Cinza", variants: [
    { label: "Por kg", price: 59.80, unit: "kg" },
  ]},

  // CAMARÃO ROSA
  { id: "c5", name: "Camarão Rosa M", category: "camarao", subcategory: "Rosa", variants: [
    { label: "Inteiro", price: 129.90, unit: "kg" },
    { label: "Limpo", price: 180.70, unit: "kg" },
  ]},
  { id: "c6", name: "Camarão Rosa G", category: "camarao", subcategory: "Rosa", variants: [
    { label: "Inteiro", price: 157.50, unit: "kg" },
    { label: "Limpo", price: 236.80, unit: "kg" },
  ]},
  { id: "c7", name: "Camarão Rosa GG", category: "camarao", subcategory: "Rosa", variants: [
    { label: "Inteiro", price: 268.90, unit: "kg" },
    { label: "Limpo", price: 342.50, unit: "kg" },
  ]},

  // CAMARÃO CARABINEIRO
  { id: "c8", name: "Camarão Carabineiro", description: "Congelado a bordo", category: "camarao", subcategory: "Carabineiro", variants: [
    { label: "Inteiro", price: 290.00, unit: "kg" },
  ]},

  // CAMARÃO TIGRE
  { id: "c9", name: "Camarão Tigre", description: "Congelado", category: "camarao", subcategory: "Tigre", variants: [
    { label: "Inteiro", price: null, unit: "kg" },
  ]},

  // LAGOSTAS
  { id: "l1", name: "Lagosta Inteira 1,5kg up", description: "Bahia", category: "lagosta", variants: [
    { label: "Por kg", price: 179.50, unit: "kg" },
  ]},
  { id: "l2", name: "Lagosta Inteira 500/700g", description: "Bahia", category: "lagosta", variants: [
    { label: "Por kg", price: 119.90, unit: "kg" },
  ]},
  { id: "l3", name: "Lagosta Sapateira", category: "lagosta", variants: [
    { label: "Por kg", price: 158.00, unit: "kg" },
  ]},
  { id: "l4", name: "Lagostim Inteiro M", category: "lagosta", variants: [
    { label: "Por kg", price: 89.00, unit: "kg" },
  ]},
  { id: "l5", name: "Lagostim Inteiro G", category: "lagosta", variants: [
    { label: "Por kg", price: 98.00, unit: "kg" },
  ]},

  // MOLUSCOS
  { id: "m1", name: "Lula Inteira M", category: "moluscos", variants: [
    { label: "Por kg", price: 55.00, unit: "kg" },
  ]},
  { id: "m2", name: "Lula Inteira G", category: "moluscos", variants: [
    { label: "Por kg", price: 72.00, unit: "kg" },
  ]},
  { id: "m3", name: "Lula Tubo G", description: "Para rechear", category: "moluscos", variants: [
    { label: "Por kg", price: 108.90, unit: "kg" },
  ]},
  { id: "m4", name: "Lula em Anéis c/ Tentáculo", category: "moluscos", variants: [
    { label: "Por kg", price: 97.00, unit: "kg" },
  ]},
  { id: "m5", name: "Tentáculo de Lula", category: "moluscos", variants: [
    { label: "Por kg", price: 82.90, unit: "kg" },
  ]},
  { id: "m6", name: "Mini Polvo", category: "moluscos", variants: [
    { label: "Por kg", price: 54.90, unit: "kg" },
  ]},
  { id: "m7", name: "Polvo Inteiro GG", description: "3kg+", category: "moluscos", variants: [
    { label: "Por kg", price: 143.00, unit: "kg" },
  ]},
  { id: "m8", name: "Polvo Inteiro G", description: "1.5 a 2kg", category: "moluscos", variants: [
    { label: "Por kg", price: 110.00, unit: "kg" },
  ]},
  { id: "m9", name: "Polvo Inteiro M", description: "1 a 1,5kg", category: "moluscos", variants: [
    { label: "Por kg", price: 89.90, unit: "kg" },
  ]},
  { id: "m10", name: "Polvo Inteiro P", description: "300 a 400g", category: "moluscos", variants: [
    { label: "Por kg", price: 65.50, unit: "kg" },
  ]},
  { id: "m11", name: "Tentáculo de Polvo", category: "moluscos", variants: [
    { label: "Por kg", price: 152.50, unit: "kg" },
  ]},

  // SIRI, CARANGUEJO & OVAS
  { id: "s1", name: "Carne de Siri Pura", category: "siri", variants: [
    { label: "Por kg", price: 98.90, unit: "kg" },
  ]},
  { id: "s2", name: "Caranguejo Santola", category: "siri", variants: [
    { label: "Por kg", price: 109.90, unit: "kg" },
  ]},
  { id: "s3", name: "Siri Azul Inteiro", category: "siri", variants: [
    { label: "Por kg", price: 32.00, unit: "kg" },
  ]},
  { id: "s4", name: "Caranguejo Pré Cozido s/ Carapaça", category: "siri", variants: [
    { label: "6 uni", price: 52.00, unit: "uni" },
  ]},
  { id: "s5", name: "Caranguejo Pré Cozido", category: "siri", variants: [
    { label: "6 uni", price: 49.00, unit: "uni" },
  ]},
  { id: "s6", name: "Pata de Caranguejo", category: "siri", variants: [
    { label: "500g", price: 60.00, unit: "uni" },
    { label: "1kg", price: 98.00, unit: "uni" },
  ]},
  { id: "s7", name: "Ovas de Ikurá", category: "siri", variants: [
    { label: "100g", price: 142.50, unit: "uni" },
  ]},
  { id: "s8", name: "Ovas de Uni", category: "siri", variants: [
    { label: "100g", price: 120.50, unit: "uni" },
  ]},
  { id: "s9", name: "Ovas de Tobiko", category: "siri", variants: [
    { label: "100g", price: 40.00, unit: "uni" },
  ]},
  { id: "s10", name: "Ovas de Tainha", category: "siri", variants: [
    { label: "Por kg", price: 60.00, unit: "kg" },
  ]},
  { id: "s11", name: "Ovas de Massago", category: "siri", variants: [
    { label: "100g", price: 40.00, unit: "uni" },
  ]},

  // CONCHAS
  { id: "co1", name: "Vieira Peruana", category: "conchas", variants: [
    { label: "200g", price: 75.00, unit: "uni" },
  ]},
  { id: "co2", name: "Vieira Fresca", description: "RJ/viva", category: "conchas", variants: [
    { label: "Por kg", price: 180.00, unit: "kg" },
  ]},
  { id: "co3", name: "Sarnambi", description: "SC/vivo", category: "conchas", variants: [
    { label: "Por kg", price: 72.00, unit: "kg" },
  ]},
  { id: "co4", name: "Ostras Frescas", category: "conchas", variants: [
    { label: "12 uni", price: 58.00, unit: "duz" },
  ]},
  { id: "co5", name: "Ostras com Bechamel", description: "Raspas de limão e Queijo", category: "conchas", variants: [
    { label: "6 uni", price: 55.90, unit: "uni" },
  ]},
  { id: "co6", name: "Mexilhão", description: "SC/vivo", category: "conchas", variants: [
    { label: "Por kg", price: 52.00, unit: "kg" },
  ]},
  { id: "co7", name: "Mexilhão Desconchado", description: "Congelado", category: "conchas", variants: [
    { label: "Por kg", price: 80.00, unit: "kg" },
  ]},
  { id: "co8", name: "Vôngole", description: "Vivo", category: "conchas", variants: [
    { label: "Por kg", price: 50.00, unit: "kg" },
  ]},
  { id: "co9", name: "Vôngole Pré Cozido", description: "Na concha", category: "conchas", variants: [
    { label: "Por kg", price: 60.00, unit: "kg" },
  ]},
  { id: "co10", name: "Vôngole Desconchado", description: "Congelado", category: "conchas", variants: [
    { label: "Por kg", price: 80.00, unit: "kg" },
  ]},
  { id: "co11", name: "Lambreta", description: "Bahia/viva", category: "conchas", variants: [
    { label: "Dúzia", price: 60.00, unit: "duz" },
  ]},
  { id: "co12", name: "Tarioba", description: "Bahia/vivo", category: "conchas", variants: [
    { label: "Por kg", price: 70.00, unit: "kg" },
  ]},
  { id: "co13", name: "Casquinha de Siri", description: "400g", category: "conchas", variants: [
    { label: "6 uni", price: 48.90, unit: "uni" },
  ]},

  // SASHIMIS, CUBOS & CARPACCIOS
  { id: "sa1", name: "Sashimi de Salmão", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 54.90, unit: "uni" },
  ]},
  { id: "sa2", name: "Sashimi de Mahi-Mahi", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 49.00, unit: "uni" },
  ]},
  { id: "sa3", name: "Sashimi de Graçainha", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 46.00, unit: "uni" },
  ]},
  { id: "sa4", name: "Sashimi de Xaréu Amarelo", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 45.00, unit: "uni" },
  ]},
  { id: "sa5", name: "Sashimi de Tilápia", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 36.90, unit: "uni" },
  ]},
  { id: "sa6", name: "Sashimi de Atum", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 49.90, unit: "uni" },
  ]},
  { id: "sa7", name: "Sashimi de Carapau", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 48.90, unit: "uni" },
  ]},
  { id: "sa8", name: "Sashimi Misto", description: "2 ou 4 peixes", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: null, unit: "uni" },
  ]},
  { id: "sa9", name: "Sashimi de Atum Maçaricado", description: "Com gergelim e Tarê", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 54.00, unit: "uni" },
  ]},
  { id: "sa10", name: "Sashimi de Salmão Maçaricado", description: "Com gergelim e Tarê", category: "sashimi", subcategory: "Sashimis", variants: [
    { label: "400g", price: 58.00, unit: "uni" },
  ]},
  { id: "sa11", name: "Carpaccio com Molho Verde", description: "Escolha o peixe", category: "sashimi", subcategory: "Carpaccios", variants: [
    { label: "400g", price: null, unit: "uni" },
  ]},
  { id: "sa12", name: "Carpaccio de Polvo", description: "Com azeite e salsa", category: "sashimi", subcategory: "Carpaccios", variants: [
    { label: "300g", price: 69.00, unit: "uni" },
  ]},
  { id: "sa13", name: "Cubos de Tilápia", category: "sashimi", subcategory: "Cubos", variants: [
    { label: "400g", price: 46.90, unit: "uni" },
  ]},
  { id: "sa14", name: "Cubos de Salmão", category: "sashimi", subcategory: "Cubos", variants: [
    { label: "400g", price: 57.00, unit: "uni" },
  ]},
  { id: "sa15", name: "Cubos de Robalo", category: "sashimi", subcategory: "Cubos", variants: [
    { label: "400g", price: 49.90, unit: "uni" },
  ]},
  { id: "sa16", name: "Cubos de Atum", category: "sashimi", subcategory: "Cubos", variants: [
    { label: "400g", price: 49.90, unit: "uni" },
  ]},
  { id: "sa17", name: "Cubos de Carapau", category: "sashimi", subcategory: "Cubos", variants: [
    { label: "400g", price: 48.90, unit: "uni" },
  ]},
  { id: "sa18", name: "Cubos Mistos", description: "3 peixes", category: "sashimi", subcategory: "Cubos", variants: [
    { label: "400g", price: 49.90, unit: "uni" },
  ]},

  // CEVICHES
  { id: "ce1", name: "Ceviche de Salmão", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 70.00, unit: "uni" },
  ]},
  { id: "ce2", name: "Ceviche de Tilápia", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 59.90, unit: "uni" },
  ]},
  { id: "ce3", name: "Ceviche de Sororoca", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 57.00, unit: "uni" },
  ]},
  { id: "ce4", name: "Ceviche de Peixe Branco", description: "Mar", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 55.00, unit: "uni" },
  ]},
  { id: "ce5", name: "Ceviche de Robalo", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 62.00, unit: "uni" },
  ]},
  { id: "ce6", name: "Ceviche de Atum", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 59.90, unit: "uni" },
  ]},
  { id: "ce7", name: "Ceviche de Marisco", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 62.00, unit: "uni" },
  ]},
  { id: "ce8", name: "Ceviche de Polvo", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 85.00, unit: "uni" },
  ]},
  { id: "ce9", name: "Ceviche de Lula", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 68.00, unit: "uni" },
  ]},
  { id: "ce10", name: "Ceviche de Camarão", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "500g", price: 78.00, unit: "uni" },
  ]},
  { id: "ce11", name: "Ceviche de Ostra", description: "Peso variável", category: "ceviche", subcategory: "Ceviches", variants: [
    { label: "Porção", price: 52.90, unit: "uni" },
  ]},

  // VINAGRETES
  { id: "v1", name: "Vinagrete de Camarão", category: "ceviche", subcategory: "Vinagretes", variants: [
    { label: "500g", price: 82.00, unit: "uni" },
  ]},
  { id: "v2", name: "Vinagrete de Polvo", category: "ceviche", subcategory: "Vinagretes", variants: [
    { label: "500g", price: 88.00, unit: "uni" },
  ]},
  { id: "v3", name: "Vinagrete de Lula", category: "ceviche", subcategory: "Vinagretes", variants: [
    { label: "500g", price: 68.00, unit: "uni" },
  ]},
  { id: "v4", name: "Vinagrete de Marisco", category: "ceviche", subcategory: "Vinagretes", variants: [
    { label: "500g", price: 65.00, unit: "uni" },
  ]},
];
