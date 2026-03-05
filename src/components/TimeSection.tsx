import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import machinesImg from "@/assets/time-machines.png";

const stats = [
  { value: 47, suffix: "+", labelRu: "лет опыта", labelUz: "yillik tajriba" },
  { value: 35, suffix: "+", labelRu: "стран экспорта", labelUz: "eksport mamlakati" },
  { value: 50000, suffix: "м²", labelRu: "площадь завода", labelUz: "zavod maydoni" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

const StatItem = ({ value, suffix, labelRu, labelUz, active, isRu }: {
  value: number; suffix: string; labelRu: string; labelUz: string; active: boolean; isRu: boolean;
}) => {
  const count = useCountUp(value, active);
  return (
    <div>
      <div className="text-3xl md:text-4xl font-black text-primary leading-none">
        {count.toLocaleString()}<span className="text-xl">{suffix}</span>
      </div>
      <p className="text-section-dark-foreground/50 text-xs mt-1 uppercase tracking-widest">
        {isRu ? labelRu : labelUz}
      </p>
    </div>
  );
};

const TimeSection = () => {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-section-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        {/* Image side */}
        <div className="relative flex items-center justify-center h-72 lg:h-auto order-2 lg:order-1 py-12 px-8">
          {/* Rotating ring */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-primary/40 rounded-full" />
          </div>
          {/* Second ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-section-dark-foreground/5" />
          {/* Glow */}
          <div className="absolute w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          {/* Image */}
          <img
            src={machinesImg}
            alt={t("time.title")}
            className="relative z-10 w-64 lg:w-80 object-contain drop-shadow-2xl"
          />
          {/* Right gradient bleed into content */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-section-dark hidden lg:block" />
        </div>

        {/* Content side */}
        <div className="relative order-1 lg:order-2 px-8 md:px-16 py-14 md:py-20 flex flex-col justify-center">
          {/* Watermark */}
          <span className="absolute bottom-2 right-4 text-[7rem] font-black text-section-dark-foreground/[0.04] leading-none select-none pointer-events-none">
            TIME
          </span>

          <div className="relative z-10">
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-section-dark-foreground leading-tight tracking-tight mb-5">
              {t("time.title")}
            </h2>
            <p className="text-section-dark-foreground/65 text-base md:text-lg leading-relaxed mb-12 max-w-lg">
              {t("time.desc")}
            </p>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-section-dark-foreground/10">
              {stats.map((s) => (
                <StatItem key={s.labelRu} {...s} active={visible} isRu={isRu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
