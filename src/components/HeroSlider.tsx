import heroImg from "@/assets/hero-slider.webp";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const HeroSlider = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setOffsetY(window.scrollY * 0.4);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      <img
        src={heroImg}
        alt={t("hero.line1")}
        className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
        style={{ transform: `translateY(${offsetY}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-primary-foreground leading-[0.95] tracking-tight">
            {t("hero.line1")}
            <br />
            {t("hero.line2")}
            <br />
            <span className="text-primary-foreground">{t("hero.line3")}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
