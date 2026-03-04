import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import toprakImg from "@/assets/toprak-isleme-grubu.png";
import ekimImg from "@/assets/ekim-grubu.png";

const UrunlerPage = () => {
  const { t } = useTranslation();

  const products = [
    { title: t("urunler.toprakGroup"), image: toprakImg, link: "/urunler/toprak-isleme" },
    { title: t("urunler.ekimGroup"), image: ekimImg, link: "/urunler/ekim" },
  ];

  return (
    <PageLayout>
      <section className="bg-section-dark py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product) => (
              <Link key={product.title} to={product.link} className="group text-center">
                <div className="overflow-hidden mb-6">
                  <img src={product.image} alt={product.title} className="w-full max-w-sm mx-auto transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-section-dark-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UrunlerPage;
