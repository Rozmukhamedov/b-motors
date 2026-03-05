import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import teamTogetherImg from "@/assets/team-together.png";
import team2Img from "@/assets/team2.png";
import bannerImg from "@/assets/banner-kurumsal.jpg";

const departments = [
  {
    ruName: "Отдел продаж",
    uzName: "Savdo bo'limi",
    ruDesc:
      "Профессиональная консультация и подбор техники для каждого клиента.",
    uzDesc: "Har bir mijoz uchun professional maslahat va texnika tanlash.",
  },
  {
    ruName: "Технический отдел",
    uzName: "Texnik bo'lim",
    ruDesc:
      "Инженеры и механики с многолетним опытом обслуживания сельхозтехники.",
    uzDesc:
      "Qishloq xo'jaligi texnikasini ko'p yillik tajribaga ega muhandis va mexaniklar.",
  },
  {
    ruName: "Отдел запчастей",
    uzName: "Ehtiyot qismlar bo'limi",
    ruDesc:
      "Быстрый поиск и поставка оригинальных запасных частей по всей стране.",
    uzDesc:
      "Butun mamlakat bo'ylab original ehtiyot qismlarni tez topish va yetkazib berish.",
  },
  {
    ruName: "Логистика",
    uzName: "Logistika",
    ruDesc: "Оперативная доставка и подготовка техники к эксплуатации.",
    uzDesc: "Tezkor yetkazib berish va texnikani foydalanishga tayyorlash.",
  },
];

const TeamPage = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1={isRu ? "НАША" : "BIZNING"}
        titleLine2={isRu ? "КОМАНДА" : "JAMOAMIZ"}
        breadcrumbs={[
          { label: isRu ? "Главная" : "Bosh sahifa", path: "/" },
          { label: isRu ? "Команда" : "Jamoa", path: "/team" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight mb-4">
                {isRu ? "МЫ ВМЕСТЕ РАДИ ВАС" : "SIZ UCHUN BIRGAMIZ"}
              </h2>
              <div className="w-16 h-1.5 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {isRu
                  ? "У нас есть команда, которая всегда уважает права потребителей, следит за развивающимися технологиями, обладает командным духом и верит в землю."
                  : "Bizda iste'molchi huquqlariga doimo hurmatli, rivojlanayotgan texnologiyani kuzatuvchi, jamoaviy ruhga ega va yerga ishonuvchi jamoa bor."}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {isRu
                  ? "Каждый сотрудник Bulung'ur Motors разделяет одну цель — сделать сельское хозяйство Узбекистана более эффективным и современным."
                  : "Bulung'ur Motors-ning har bir xodimi bitta maqsadni baham ko'radi — O'zbekiston qishloq xo'jaligini yanada samarali va zamonaviy qilish."}
              </p>
            </div>
            <div className="relative">
              <img
                src={teamTogetherImg}
                alt={isRu ? "Наша команда" : "Bizning jamoa"}
                className="w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24 bg-section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-section-dark-foreground tracking-tight mb-2">
            {isRu ? "ОТДЕЛЫ" : "BO'LIMLAR"}
          </h2>
          <div className="w-16 h-1.5 bg-primary mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((d, i) => (
              <div
                key={i}
                className="border border-section-dark-foreground/10 p-6 hover:border-primary/50 transition-colors"
              >
                <span className="text-primary text-4xl font-black leading-none">
                  0{i + 1}
                </span>
                <h3 className="text-section-dark-foreground font-black text-sm tracking-wide mt-4 mb-3 uppercase">
                  {isRu ? d.ruName : d.uzName}
                </h3>
                <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
                  {isRu ? d.ruDesc : d.uzDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <img
            src={team2Img}
            alt={isRu ? "Команда Bulung'ur Motors" : "Bulung'ur Motors jamoasi"}
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
