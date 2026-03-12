import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import { products, categories } from "@/data/products";

type ProductSpec = { label: string; value: string };

interface Product {
  id: string;
  name: string;
  nameUz: string;
  category: string;
  image: string;
  specs: ProductSpec[];
  specsUz: ProductSpec[];
}

const UrunlerPage = () => {
  const { i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const isRu = i18n.language === "ru";

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      {/* Hero header */}
      <section className="bg-section-dark py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-primary mb-4">
            {isRu ? "КАТАЛОГ ТЕХНИКИ" : "TEXNIKA KATALOGI"}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-section-dark-foreground/60">
            {isRu
              ? "«Bulung'ur Motors» МЧЖ — техника, ожидаемая к продаже в 2026 году"
              : "«Bulung'ur Motors» MChJ — 2026 yilda sotuvga qo'yilishi kutilayotgan texnikalar"}
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="border-t border-section-dark-foreground/10 sticky top-0 z-30 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-semibold border transition-colors ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-section-dark-foreground/70 border-section-dark-foreground/20 hover:border-primary hover:text-primary"
                }`}
              >
                {isRu ? cat.ru : cat.uz}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 md:py-20 min-h-screen bg-section-dark">
        <div className="container mx-auto px-4">
          <p className="text-section-dark-foreground/40 text-sm mb-8">
            {isRu
              ? `Найдено: ${filtered.length}`
              : `Topildi: ${filtered.length}`}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const isOpen = expandedProduct === product.id;
              const specs = isRu ? product.specs : product.specsUz;

              return (
                <div
                  key={product.id}
                  className="group border border-section-dark-foreground/10 bg-section-dark hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-foreground/5 p-6 flex items-center justify-center h-56">
                    <img
                      src={product.image}
                      alt={isRu ? product.name : product.nameUz}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      {
                        categories.find((c) => c.key === product.category)?.[
                          isRu ? "ru" : "uz"
                        ]
                      }
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-section-dark-foreground font-bold text-sm md:text-base leading-tight mb-3">
                      {isRu ? product.name : product.nameUz}
                    </h3>

                    <div className="space-y-1.5 mb-3">
                      {specs.slice(0, 2).map((s, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-section-dark-foreground/50">
                            {s.label}
                          </span>
                          <span className="text-section-dark-foreground font-semibold">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {specs.length > 2 && (
                      <>
                        {isOpen && (
                          <div className="space-y-1.5 mb-3">
                            {specs.slice(2).map((s, i) => (
                              <div
                                key={i}
                                className="flex justify-between text-xs"
                              >
                                <span className="text-section-dark-foreground/50">
                                  {s.label}
                                </span>
                                <span className="text-section-dark-foreground font-semibold">
                                  {s.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          onClick={() =>
                            setExpandedProduct(isOpen ? null : product.id)
                          }
                          className="text-primary text-xs font-semibold hover:underline"
                        >
                          {isOpen
                            ? isRu
                              ? "Свернуть ▲"
                              : "Yig'ish ▲"
                            : isRu
                              ? "Все характеристики ▼"
                              : "Barcha xususiyatlar ▼"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UrunlerPage;
