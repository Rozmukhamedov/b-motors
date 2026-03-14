import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import teamTogetherImg from "@/assets/team.png";
import bannerImg from "@/assets/banner-kurumsal.jpg";

const management = [
  {
    name: "Baboev Toshpulat",
    ruTitle: "Директор",
    uzTitle: "Direktor",
    qualification: "Higher Education",
    experience: 20,
  },
  {
    name: "Abduraimov Hasan",
    ruTitle: "Менеджер по продажам",
    uzTitle: "Savdo menejeri",
    qualification: "Higher Education",
    experience: 20,
  },
  {
    name: "Mallaev Muhammad Bakhromovich",
    ruTitle: "Менеджер по продажам",
    uzTitle: "Savdo menejeri",
    qualification: "Higher Education",
    experience: 20,
  },
  {
    name: "Buranov Rakhmatillo",
    ruTitle: "Инженер",
    uzTitle: "Muhandis",
    qualification: "Higher Education",
    experience: 30,
  },
  {
    name: "Tursunov Uktam",
    ruTitle: "Директор по маркетингу",
    uzTitle: "Marketing direktori",
    qualification: "Higher Education",
    experience: 45,
  },
  {
    name: "Atakulov Fayzullo",
    ruTitle: "Руководитель сборки",
    uzTitle: "Yig'ish bo'limi boshlig'i",
    qualification: "Higher Education",
    experience: 20,
  },
  {
    name: "Jumaev Avaz",
    ruTitle: "Руководитель сборки",
    uzTitle: "Yig'ish bo'limi boshlig'i",
    qualification: "Higher Education",
    experience: 20,
  },
  {
    name: "Khamroev Qahhor",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Secondary Education",
    experience: 5,
  },
  {
    name: "Khaydarov Khusanjhon",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Higher Education",
    experience: 4,
  },
  {
    name: "Sagdullaev Sardor",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Higher Education",
    experience: 4,
  },
  {
    name: "Ochylov Olimjon",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Higher Education",
    experience: 4,
  },
  {
    name: "Begimalieva Feruza",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Higher Education",
    experience: 5,
  },
  {
    name: "Zikrieev Khuzhaakhmat",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Higher Education",
    experience: 5,
  },
  {
    name: "Karshiev O.",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Secondary Education",
    experience: 5,
  },
  {
    name: "Gulboev Anvar",
    ruTitle: "Торговый агент",
    uzTitle: "Savdo agenti",
    qualification: "Higher Education",
    experience: 5,
  },
  {
    name: "Sharipov Khusan",
    ruTitle: "Механик",
    uzTitle: "Mexanik",
    qualification: "Higher Education",
    experience: 5,
  },
  {
    name: "Kholmatov Vokhid",
    ruTitle: "Водитель",
    uzTitle: "Haydovchi",
    qualification: "Secondary Education",
    experience: 4,
  },
  {
    name: "Narzullaev Anvar",
    ruTitle: "Водитель",
    uzTitle: "Haydovchi",
    qualification: "Secondary Education",
    experience: 4,
  },
  {
    name: "Qo'shboqov Zayniddin",
    ruTitle: "Сервисный техник",
    uzTitle: "Servis texniki",
    qualification: "Higher Education",
    experience: 4,
  },
  {
    name: "Buranov Olimjon",
    ruTitle: "Сервисный техник",
    uzTitle: "Servis texniki",
    qualification: "Secondary Education",
    experience: 4,
  },
  {
    name: "Ochylov Olimjon (Servis)",
    ruTitle: "Сервисный техник",
    uzTitle: "Servis texniki",
    qualification: "Higher Education",
    experience: 4,
  },
  {
    name: "Khujakulov Furkat",
    ruTitle: "Сервисный техник",
    uzTitle: "Servis texniki",
    qualification: "Higher Education",
    experience: 4,
  },
];

const departments = [
  {
    ruName: "Отдел продаж и маркетинга",
    uzName: "Savdo va marketing bo'limi",
    ruDesc:
      "Профессиональная консультация, работа с крупными агрокластерами и продвижение на выставках.",
    uzDesc:
      "Professional maslahat, yirik agroclasterlar bilan ishlash va ko'rgazmalarda ishtirok.",
  },
  {
    ruName: "Импорт и логистика",
    uzName: "Import va logistika",
    ruDesc:
      "Прямые поставки от производителей, таможенное оформление и складской учёт техники.",
    uzDesc:
      "Ishlab chiqaruvchilardan to'g'ridan-to'g'ri yetkazib berish, bojxona rasmiylashtiruvi va ombor hisobi.",
  },
  {
    ruName: "Технический сервис",
    uzName: "Texnik servis",
    ruDesc:
      "Поддержка 24/7 в сезон, выездные бригады для ремонта прямо на поле и обучение операторов.",
    uzDesc:
      "Mavsumda 24/7 qo'llab-quvvatlash, dala ta'miri va operator tayyorlash.",
  },
  {
    ruName: "Финансы и право",
    uzName: "Moliya va huquq",
    ruDesc:
      "Банковские кредиты, субсидии 15%, налоговая отчётность и юридическое сопровождение.",
    uzDesc:
      "Bank kreditlari, 15% subsidiya rasmiylashtiruvi, soliq hisoboti va yuridik xizmat.",
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
                  ? "Каждый сотрудник Bulungur Motors разделяет одну цель — сделать сельское хозяйство Узбекистана более эффективным и современным."
                  : "Bulungur Motors-ning har bir xodimi bitta maqsadni baham ko'radi — O'zbekiston qishloq xo'jaligini yanada samarali va zamonaviy qilish."}
              </p>
            </div>
            <div className="relative">
              <img
                src={teamTogetherImg}
                alt={isRu ? "Наша команда" : "Bizning jamoa"}
                className="w-full object-cover"
              />
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

      {/* Management Table */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-2">
            {isRu ? "СОСТАВ КОМАНДЫ" : "JAMOA TARKIBI"}
          </h2>
          <div className="w-16 h-1.5 bg-primary mb-12" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide">
                    #
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide">
                    {isRu ? "ФИО" : "Ism Familiya"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide">
                    {isRu ? "Должность" : "Lavozim"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide">
                    {isRu ? "Образование" : "Ma'lumot"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide">
                    {isRu ? "Опыт (лет)" : "Tajriba (yil)"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {management.map((m, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                  >
                    <td className="px-4 py-3 text-muted-foreground font-medium">
                      {i + 1}
                    </td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {m.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {isRu ? m.ruTitle : m.uzTitle}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {isRu
                        ? m.qualification === "Higher Education"
                          ? "Высшее"
                          : "Среднее"
                        : m.qualification === "Higher Education"
                          ? "Oliy"
                          : "O'rta"}
                    </td>
                    <td className="px-4 py-3 text-primary font-bold">
                      {m.experience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
