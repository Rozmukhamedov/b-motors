import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin } from "lucide-react";
import bannerImg from "@/assets/banner-iletisim.jpg";

const IletisimPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1={t("iletisim.bannerTitle")}
        breadcrumbs={[
          { label: t("breadcrumbs.home"), path: "/" },
          { label: t("iletisim.breadcrumb"), path: "/iletisim" },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <a href="tel:44442 92" className="text-5xl md:text-8xl font-black text-primary hover:opacity-80 transition-opacity">
            444 42 92
          </a>
        </div>
      </section>

      <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 border border-section-dark-foreground/30 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <p className="text-section-dark-foreground">bilgi@tarimoz.com.tr</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-section-dark-foreground/30 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <p className="text-section-dark-foreground text-sm">{t("footer.address")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-section-dark-foreground/30 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <p className="text-section-dark-foreground">+90 332 239 00 71</p>
              <p className="text-section-dark-foreground">+90 332 239 00 72</p>
              <p className="text-section-dark-foreground">+90 332 239 00 74</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d32.5175!3d37.8575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0855c2c3e8b7d%3A0x3161908183424999!2sTar%C4%B1m%C3%B6z!5e0!3m2!1str!2str!4v1"
          className="w-full h-[400px] border-0"
          allowFullScreen
          loading="lazy"
          title="Tarımöz"
        />
      </section>
    </PageLayout>
  );
};

export default IletisimPage;
