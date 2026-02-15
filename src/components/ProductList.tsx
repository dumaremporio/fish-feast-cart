import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

interface Props {
  selectedCategory: string | null;
}

const ProductList = ({ selectedCategory }: Props) => {
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const categoryName = selectedCategory
    ? categories.find(c => c.id === selectedCategory)?.name
    : "Todos os Produtos";

  // Group by subcategory if applicable
  const subcategories = [...new Set(filteredProducts.map(p => p.subcategory).filter(Boolean))];
  const hasSubcategories = subcategories.length > 0;

  return (
    <section id="produtos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">
            {selectedCategory ? "Categoria" : "Balcão Virtual"}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{categoryName}</h2>
          {selectedCategory === "pescados" && (
            <p className="text-muted-foreground text-sm mt-2">
              Cortes: Espalmados, manta, posta do filé, posta com osso, Saku
            </p>
          )}
        </div>

        {hasSubcategories ? (
          subcategories.map(sub => {
            const subProducts = filteredProducts.filter(p => p.subcategory === sub);
            return (
              <div key={sub} className="mb-10">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 border-l-4 border-gold pl-3">
                  {sub}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {subProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Also render products without subcategory */}
        {hasSubcategories && filteredProducts.filter(p => !p.subcategory).length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            {filteredProducts.filter(p => !p.subcategory).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
