import { useTranslation } from "react-i18next";
import satelliteImg from "@/assets/future-satellite.png";

const FutureSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 section-label select-none pointer-events-none">
        FUTURE
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={satelliteImg}
              alt={t("future.title")}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("future.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("future.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
