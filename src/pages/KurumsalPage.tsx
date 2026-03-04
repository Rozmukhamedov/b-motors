import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerImg from "@/assets/banner-kurumsal.jpg";
import hakkimizdaImg from "@/assets/hakkimizda.png";
import imzaImg from "@/assets/imza.png";
import misyonImg from "@/assets/misyon.png";
import vizyonImg from "@/assets/vizyon.png";

const timelineYears = ["1977", "1985", "1994", "2008", "2009", "2010", "2016", "2023"] as const;

const KurumsalPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1={t("kurumsal.bannerLine1")}
        titleLine2={t("kurumsal.bannerLine2")}
        breadcrumbs={[
          { label: t("breadcrumbs.home"), path: "/" },
          { label: t("breadcrumbs.corporate"), path: "/kurumsal" },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("kurumsal.aboutText1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{t("kurumsal.aboutText2")}</p>
              <div className="mb-2">
                <p className="font-bold text-foreground">{t("kurumsal.chairman")}</p>
                <p className="text-sm text-muted-foreground">{t("kurumsal.chairmanTitle")}</p>
              </div>
              <img src={imzaImg} alt="İmza" className="h-12" />
            </div>
            <div>
              <img src={hakkimizdaImg} alt="" className="w-full max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-2">50.000</h2>
          <p className="text-xl text-section-dark-foreground/80">{t("kurumsal.sqm")}</p>
          <p className="mt-6 max-w-2xl mx-auto text-section-dark-foreground/70 leading-relaxed">{t("kurumsal.factoryDesc")}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-4 section-label select-none pointer-events-none">TRAVEL</div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">{t("kurumsal.timeTravel")}</h2>
          <div className="max-w-3xl mx-auto">
            {timelineYears.map((year) => (
              <div key={year} className="flex gap-6 mb-10">
                <div className="shrink-0 w-20">
                  <span className="text-2xl font-black text-primary">{year}</span>
                </div>
                <div className="border-l-2 border-primary pl-6 pb-2">
                  <h3 className="font-bold text-foreground mb-2">{t(`timeline.${year}.title`)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(`timeline.${year}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img src={misyonImg} alt={t("kurumsal.mission")} className="w-full max-w-xs mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-section-dark-foreground mb-4">{t("kurumsal.mission")}</h3>
              <p className="text-section-dark-foreground/70 leading-relaxed">{t("kurumsal.missionText")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-section-dark-foreground mb-4">{t("kurumsal.vision")}</h3>
              <p className="text-section-dark-foreground/70 leading-relaxed mb-6">{t("kurumsal.visionText")}</p>
              <img src={vizyonImg} alt={t("kurumsal.vision")} className="w-full max-w-xs mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default KurumsalPage;
