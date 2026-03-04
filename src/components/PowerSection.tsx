import { useTranslation } from "react-i18next";
import techImg from "@/assets/power-tech.png";
import pioneerImg from "@/assets/power-pioneer.png";
import futureImg from "@/assets/power-future.png";

const PowerSection = () => {
  const { t } = useTranslation();

  const cards = [
    { title: t("power.techTitle"), subtitle: t("power.techSubtitle"), image: techImg },
    { title: t("power.pioneerTitle"), subtitle: t("power.pioneerSubtitle"), image: pioneerImg },
    { title: t("power.futureTitle"), subtitle: t("power.futureSubtitle"), image: futureImg },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 section-label select-none pointer-events-none">PO-WER</div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img src={card.image} alt={card.title} className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {card.title}<br />
                <span className="text-primary">{card.subtitle}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
