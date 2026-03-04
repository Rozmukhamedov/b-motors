import { useTranslation } from "react-i18next";
import containerImg from "@/assets/export-container.png";
import bgImg from "@/assets/export-bg.webp";

const ExportSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 section-label select-none pointer-events-none">EXPORT</div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={containerImg} alt={t("export.title")} className="w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("export.title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("export.desc")}</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <img src={bgImg} alt="" className="w-full h-[200px] md:h-[300px] object-cover opacity-30" />
      </div>
    </section>
  );
};

export default ExportSection;
