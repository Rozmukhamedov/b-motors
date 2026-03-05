import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ekimImg from "@/assets/products-ekim.webp";
import toprakImg from "@/assets/products-toprak.webp";

const ProductsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          {t("products.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/products" className="group relative overflow-hidden block">
            <img src={ekimImg} alt={t("products.ekimGroup")} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors flex items-end p-6">
              <span className="text-primary-foreground text-xl font-bold">{t("products.ekimGroup")}</span>
            </div>
          </Link>
          <Link to="/products" className="group relative overflow-hidden block">
            <img src={toprakImg} alt={t("products.toprakGroup")} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors flex items-end p-6">
              <span className="text-primary-foreground text-xl font-bold">{t("products.toprakGroup")}</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
