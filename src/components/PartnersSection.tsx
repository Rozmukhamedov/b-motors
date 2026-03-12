import { useTranslation } from "react-i18next";
import alpego from "@/assets/partners/alpego.png";
import belarus from "@/assets/partners/partner4.png";
import ebrar from "@/assets/partners/ebrar.png";
import partner2 from "@/assets/partners/partner2.png";
import mascar from "@/assets/partners/mascar.png";
import deutzFahr from "@/assets/partners/partner3.png";
import tarimoz from "@/assets/partners/tarimoz.png";
import masseyFerguson from "@/assets/partners/massey-ferguson.png";
import tym from "@/assets/partners/partner5.png";
import zeppelin from "@/assets/partners/zeppelin.png";

const partners = [
  { img: partner2, name: "Partner 2", scale: 1.8 },
  { img: masseyFerguson, name: "Massey Ferguson", scale: 1 },
  { img: deutzFahr, name: "Deutz-Fahr", scale: 2.2 },
  { img: belarus, name: "Belarus", scale: 2.2 },
  { img: tym, name: "TYM Tractors", scale: 2.2 },
  { img: alpego, name: "Alpego", scale: 1 },
  { img: mascar, name: "Mascar", scale: 1 },
  { img: ebrar, name: "Ebrar", scale: 1 },
  { img: zeppelin, name: "Zeppelin", scale: 1 },
  { img: tarimoz, name: "Tarımöz", scale: 1 },
];

const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          {t("partners.title")}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          {t("partners.desc")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="group bg-background rounded-2xl border border-border p-6 md:p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:border-primary/30 aspect-[3/2]"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-contain"
                style={{ transform: `scale(${p.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
