import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import bannerImg from "@/assets/banner-tates.jpg";

const TatesPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1="TATES"
        breadcrumbs={[
          { label: t("breadcrumbs.home"), path: "/" },
          { label: t("breadcrumbs.tates"), path: "/tates" },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("tatesPage.title")} <span className="text-primary">{t("tatesPage.subtitle")}</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">{t("tatesPage.systemName")}</p>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t("tatesPage.p1")}</p>
            <p>{t("tatesPage.p2")}</p>
            <p>{t("tatesPage.p3")}</p>
            <p>
              {t("tatesPage.p4")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-dark relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="section-label select-none pointer-events-none opacity-10">TATES</div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TatesPage;
