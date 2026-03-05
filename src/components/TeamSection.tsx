import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-together.png";
import team2Img from "@/assets/team2.png";

const values = [
  { ru: "Уважение к потребителям", uz: "Iste'molchilarga hurmat" },
  { ru: "Командный дух", uz: "Jamoaviy ruh" },
  { ru: "Технологии будущего", uz: "Kelajak texnologiyalari" },
  { ru: "Верность земле", uz: "Yerga sadoqat" },
];

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  return (
    <section className="relative py-20 md:py-32 bg-section-dark overflow-hidden">
      {/* Watermark */}
      <span className="absolute top-6 right-6 text-[9rem] font-black text-section-dark-foreground/[0.04] leading-none select-none pointer-events-none">
        TEAM
      </span>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: images collage */}
          <div className="relative">
            {/* Primary image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20" />
              <img
                src={teamImg}
                alt={t("team.title")}
                className="relative z-10 w-full max-w-md mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-section-dark-foreground leading-tight tracking-tight mb-5">
              {t("team.title")}
            </h2>
            <p className="text-section-dark-foreground/65 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {t("team.desc")}
            </p>

            {/* Values */}
            <ul className="space-y-4 mb-10">
              {values.map((v, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-8 h-px bg-primary shrink-0" />
                  <span className="text-section-dark-foreground/80 text-sm tracking-wide">
                    {isRu ? v.ru : v.uz}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/team"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors group"
            >
              {isRu ? "О нашей команде" : "Jamoamiz haqida"}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
