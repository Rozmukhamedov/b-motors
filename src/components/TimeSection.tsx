import { useTranslation } from "react-i18next";
import machinesImg from "@/assets/time-machines.png";

const TimeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="absolute top-0 left-0 section-label select-none pointer-events-none opacity-10">TIME</div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={machinesImg} alt={t("time.title")} className="w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-6">{t("time.title")}</h2>
            <p className="text-section-dark-foreground/80 text-lg leading-relaxed">{t("time.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
