import { useTranslation } from "react-i18next";
import teamImg from "@/assets/team-together.png";
import team2Img from "@/assets/team2.png";

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="absolute top-0 left-0 section-label select-none pointer-events-none opacity-10">TEAM</div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={teamImg} alt={t("team.title")} className="w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-6">{t("team.title")}</h2>
            <p className="text-section-dark-foreground/80 text-lg leading-relaxed">{t("team.desc")}</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <img src={team2Img} alt="" className="w-full max-w-2xl" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
