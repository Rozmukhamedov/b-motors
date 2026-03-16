import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import PageBanner from "@/components/PageBanner";
import bannerImg from "@/assets/banner-kurumsal.jpg";
import misyonImg from "@/assets/misyon.png";
import vizyonImg from "@/assets/vizyon.png";
import PartnersSection from "@/components/PartnersSection";

const timelineYears = [
  "2018",
  "2019",
  "2020",
  "2021",
] as const;

const KurumsalPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <SEOHead
        title="О компании"
        description="История, миссия и ценности компании Bulungur Motors — лидера сельскохозяйственного машиностроения Узбекистана."
        path="/about"
      />
      <PageBanner
        image={bannerImg}
        titleLine1={t("kurumsal.bannerLine1")}
        titleLine2={t("kurumsal.bannerLine2")}
        breadcrumbs={[
          { label: t("breadcrumbs.home"), path: "/" },
          { label: t("breadcrumbs.corporate"), path: "/about" },
        ]}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              {t("kurumsal.aboutLabel")}
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t("kurumsal.aboutCompanyName")}
            </h2>
            <p className="text-foreground leading-relaxed mb-8">
              {t("kurumsal.aboutIntro")}
            </p>
            <h4 className="font-bold text-foreground mb-3">
              {t("kurumsal.ourExperience")}
            </h4>
            <ul className="space-y-2 mb-8">
              {(
                t("kurumsal.experienceItems", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-foreground"
                >
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/70 leading-relaxed mb-4">
              <span className="font-bold text-foreground">
                {t("kurumsal.ourApproachLabel")}{" "}
              </span>
              {t("kurumsal.ourApproachText")}
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <span className="font-bold text-foreground">
                {t("kurumsal.ourCommitmentLabel")}{" "}
              </span>
              {t("kurumsal.ourCommitmentText")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t("kurumsal.advantagesTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {t("kurumsal.aboutText1")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("kurumsal.aboutText2")}
            </p>
          </div>
        </div>
      </section>



      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-4 section-label select-none pointer-events-none">
          TRAVEL
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t("kurumsal.timeTravel")}
          </h2>
          <div className="max-w-3xl mx-auto">
            {timelineYears.map((year) => (
              <div key={year} className="flex gap-6 mb-10">
                <div className="shrink-0 w-20">
                  <span className="text-2xl font-black text-primary">
                    {year}
                  </span>
                </div>
                <div className="border-l-2 border-primary pl-6 pb-2">
                  <h3 className="font-bold text-foreground mb-2">
                    {t(`timeline.${year}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`timeline.${year}.desc`)}
                  </p>
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
              <img
                src={misyonImg}
                alt={t("kurumsal.mission")}
                className="w-full max-w-xs mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-section-dark-foreground mb-4">
                {t("kurumsal.mission")}
              </h3>
              <p className="text-section-dark-foreground/70 leading-relaxed">
                {t("kurumsal.missionText")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-section-dark-foreground mb-4">
                {t("kurumsal.vision")}
              </h3>
              <p className="text-section-dark-foreground/70 leading-relaxed mb-6">
                {t("kurumsal.visionText")}
              </p>
              <img
                src={vizyonImg}
                alt={t("kurumsal.vision")}
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <PartnersSection />
    </PageLayout>
  );
};

export default KurumsalPage;
