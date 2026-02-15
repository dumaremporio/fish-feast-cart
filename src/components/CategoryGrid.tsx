import { categories } from "@/data/products";

interface Props {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string | null;
}

const CategoryGrid = ({ onSelectCategory, selectedCategory }: Props) => {
  return (
    <section id="categorias" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Nosso Catálogo</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Categorias</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative overflow-hidden rounded-xl aspect-square transition-all duration-300 hover:shadow-xl hover:shadow-ocean-deep/10 hover:-translate-y-1 ${
                selectedCategory === cat.id ? "ring-2 ring-gold ring-offset-2 ring-offset-background" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-serif text-sm md:text-base font-semibold text-primary-foreground leading-tight">
                  {cat.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
