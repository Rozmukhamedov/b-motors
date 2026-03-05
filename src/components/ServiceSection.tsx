import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Wrench, Package, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    ru: { title: "Гарантия", desc: "12 месяцев гарантийного обслуживания на всю технику" },
    uz: { title: "Kafolat", desc: "Barcha texnikaga 12 oylik kafolat xizmati" },
  },
  {
    icon: Wrench,
    ru: { title: "ТО и ремонт", desc: "Квалифицированные мастера на месте или в сервисном центре" },
    uz: { title: "TexXizmat va ta'mirlash", desc: "Joyida yoki xizmat markazida malakali ustalar" },
  },
  {
    icon: Package,
    ru: { title: "Запчасти", desc: "Оригинальные запасные части с быстрой доставкой по Узбекистану" },
    uz: { title: "Ehtiyot qismlar", desc: "O'zbekiston bo'ylab tez yetkazib beriladigan original ehtiyot qismlar" },
  },
  {
    icon: Clock,
    ru: { title: "Выезд 24ч", desc: "Оперативный выезд специалиста по Самаркандской области" },
    uz: { title: "24 soat chiqish", desc: "Samarqand viloyati bo'ylab mutaxassis tezkor chiqishi" },
  },
];

const ServiceSection = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 section-label select-none pointer-events-none">SERVICE</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="w-12 h-1 bg-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              {isRu ? "ЗАПЧАСТИ" : "EHTIYOT QISMLAR"}
              <br />
              <span className="text-primary">{isRu ? "И СЕРВИС" : "VA XIZMAT"}</span>
            </h2>
          </div>
          <Link
            to="/parts-service"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider hover:gap-4 transition-all group"
          >
            {isRu ? "Подробнее" : "Batafsil"}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-background p-8 group hover:bg-primary/[0.03] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center mb-6 transition-all duration-300">
                <item.icon
                  size={22}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="font-black text-foreground text-base mb-3 uppercase tracking-wide">
                {isRu ? item.ru.title : item.uz.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isRu ? item.ru.desc : item.uz.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
