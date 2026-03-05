import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { Wrench, Package, Clock, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import bannerImg from "@/assets/banner-tates.jpg";

const PartsServicePage = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  const services = [
    {
      icon: ShieldCheck,
      titleRu: "ГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ",
      titleUz: "KAFOLAT XIZMATI",
      descRu: "Полное гарантийное обслуживание всей техники Bulung'ur Motors в течение 12 месяцев с момента покупки.",
      descUz: "Bulung'ur Motors texnikasining sotib olingan kundan boshlab 12 oy davomida to'liq kafolat xizmati.",
    },
    {
      icon: Wrench,
      titleRu: "ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ",
      titleUz: "TEXNIK XIZMAT KO'RSATISH",
      descRu: "Квалифицированные специалисты выполняют плановое и внеплановое техническое обслуживание на месте или в нашем сервисном центре.",
      descUz: "Malakali mutaxassislar rejalashtirilgan va rejalashtirilmagan texnik xizmatni joyida yoki xizmat markazimizda amalga oshiradi.",
    },
    {
      icon: Package,
      titleRu: "ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ",
      titleUz: "ORIGINAL EHTIYOT QISMLAR",
      descRu: "Широкий склад оригинальных запасных частей для всего модельного ряда. Быстрая доставка по всему Узбекистану.",
      descUz: "Barcha model qatori uchun original ehtiyot qismlarning keng ombori. Butun O'zbekiston bo'ylab tez yetkazib berish.",
    },
    {
      icon: Clock,
      titleRu: "ОПЕРАТИВНЫЙ ВЫЕЗД",
      titleUz: "TEZKOR CHIQISH",
      descRu: "Выезд сервисного специалиста в течение 24 часов по всей Самаркандской области и прилегающим регионам.",
      descUz: "Butun Samarqand viloyati va qo'shni hududlarga 24 soat ichida xizmat mutaxassisi chiqishi.",
    },
  ];

  const steps = isRu
    ? ["Позвоните нам или оставьте заявку", "Диагностика техники специалистом", "Согласование стоимости работ", "Выполнение ремонта или замены", "Проверка и сдача техники"]
    : ["Bizga qo'ng'iroq qiling yoki so'rov qoldiring", "Mutaxassis tomonidan texnikani diagnostika qilish", "Ish narxini kelishish", "Ta'mirlash yoki almashtirish", "Texnikani tekshirish va topshirish"];

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1={isRu ? "ЗАПЧАСТИ" : "EHTIYOT QISMLAR"}
        titleLine2={isRu ? "И СЕРВИС" : "VA XIZMAT"}
        breadcrumbs={[
          { label: isRu ? "Главная" : "Bosh sahifa", path: "/" },
          { label: isRu ? "Запчасти и сервис" : "Ehtiyot qismlar va xizmat", path: "/parts-service" },
        ]}
      />

      {/* Services grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-2">
            {isRu ? "НАШИ УСЛУГИ" : "BIZNING XIZMATLAR"}
          </h2>
          <div className="w-16 h-1.5 bg-primary mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="border border-border p-6 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <s.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-black text-foreground text-sm tracking-wide mb-3">
                  {isRu ? s.titleRu : s.titleUz}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isRu ? s.descRu : s.descUz}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-section-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-section-dark-foreground tracking-tight mb-2">
            {isRu ? "КАК МЫ РАБОТАЕМ" : "QANDAY ISHLAYMIZ"}
          </h2>
          <div className="w-16 h-1.5 bg-primary mb-16" />

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-section-dark-foreground/10" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {steps.map((step, i) => (
                <div key={i} className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center group">
                  {/* Number bubble */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 bg-section-dark border-2 border-section-dark-foreground/20 group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                      <span className="text-primary font-black text-xl leading-none">{i + 1}</span>
                    </div>
                  </div>

                  {/* Arrow between items (mobile) */}
                  {i < steps.length - 1 && (
                    <ArrowRight size={14} className="text-primary/40 md:hidden mt-4 shrink-0" />
                  )}

                  <p className="text-section-dark-foreground/70 text-sm leading-relaxed md:mt-6 md:px-2 group-hover:text-section-dark-foreground transition-colors duration-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground tracking-tight">
              {isRu ? "НУЖНА ПОМОЩЬ?" : "YORDAM KERAKMI?"}
            </h2>
            <p className="text-primary-foreground/80 mt-1">
              {isRu ? "Свяжитесь с нашим сервисным центром прямо сейчас" : "Hoziroq xizmat markazimiz bilan bog'laning"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+998662330071"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone size={18} />
              +998 66 233 00 71
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              {isRu ? "Написать нам" : "Bizga yozing"}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartsServicePage;
