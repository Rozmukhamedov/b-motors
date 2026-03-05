import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Download } from "lucide-react";
import bannerImg from "@/assets/banner-medya.jpg";
import img14 from "@/assets/media/14.jpg";
import img11 from "@/assets/media/11.jpg";
import img9 from "@/assets/media/9.jpg";
import img2 from "@/assets/media/2.jpg";
import img15 from "@/assets/media/15.jpg";
import img6 from "@/assets/media/gorsel6.jpg";

const photos = [img14, img11, img9, img2, img15, img6];

const MedyaPage = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1={t("medya.bannerLine1")}
        titleLine2={t("medya.bannerLine2")}
        breadcrumbs={[
          { label: t("breadcrumbs.home"), path: "/" },
          { label: t("breadcrumbs.media"), path: "/media" },
        ]}
      />

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-4 section-label select-none pointer-events-none">
          PHOTO
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-foreground mb-10">
            {t("medya.photos")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="cursor-pointer overflow-hidden group"
                onClick={() => setSelectedImg(photo)}
              >
                <img
                  src={photo}
                  alt={`${t("medya.photos")} ${i + 1}`}
                  className="w-full h-[200px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default MedyaPage;
