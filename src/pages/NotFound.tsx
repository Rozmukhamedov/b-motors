import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="bg-section-dark min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        {/* Background "404" watermark */}
        <span className="absolute select-none pointer-events-none text-[20rem] font-black text-section-dark-foreground/5 leading-none">
          404
        </span>

        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6">
            {isRu ? "Страница не найдена" : "Sahifa topilmadi"}
          </p>
          <h1 className="text-8xl md:text-[12rem] font-black text-section-dark-foreground leading-none tracking-tight mb-6">
            404
          </h1>
          <p className="text-section-dark-foreground/50 text-lg md:text-xl max-w-md mx-auto mb-12">
            {isRu
              ? "Запрошенная страница не существует или была перемещена"
              : "So'ralgan sahifa mavjud emas yoki ko'chirilgan"}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={18} />
            {isRu ? "На главную" : "Bosh sahifaga"}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
