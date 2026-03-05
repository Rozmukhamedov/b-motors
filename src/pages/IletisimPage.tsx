import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import bannerImg from "@/assets/banner-iletisim.jpg";
import { useState } from "react";

const IletisimPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: t("iletisim.addressLabel"),
      value: t("footer.address"),
      href: undefined,
    },
    {
      icon: Phone,
      label: t("iletisim.phoneLabel"),
      value: "+998 66 233 00 71",
      href: "tel:+998662330071",
    },
    {
      icon: Mail,
      label: t("iletisim.emailLabel"),
      value: "info@bulungurmotors.uz",
      href: "mailto:info@bulungurmotors.uz",
    },
    {
      icon: Clock,
      label: t("iletisim.workHours"),
      value: t("iletisim.workHoursValue"),
      href: undefined,
    },
  ];

  return (
    <PageLayout>
      <PageBanner
        image={bannerImg}
        titleLine1={t("iletisim.bannerTitle")}
        breadcrumbs={[
          { label: t("breadcrumbs.home"), path: "/" },
          { label: t("iletisim.breadcrumb"), path: "/contact" },
        ]}
      />

      {/* Main Contact Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.03] -skew-x-12 translate-x-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left — Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-3">
                {t("iletisim.infoTitle")}
              </h2>
              <div className="w-20 h-1.5 bg-primary mb-10" />

              <div className="space-y-8">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <item.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground text-lg font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional phones */}
              <div className="mt-12 p-8 bg-section-dark">
                <p className="text-primary-foreground text-sm font-bold uppercase tracking-wider mb-4">
                  {t("iletisim.phoneLabel")}
                </p>
                <div className="space-y-2">
                  {["+998 66 233 00 71", "+998 66 233 00 72", "+998 66 233 00 74"].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors text-lg"
                    >
                      <ArrowRight size={14} className="text-primary" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-3">
                {t("iletisim.formTitle")}
              </h2>
              <div className="w-20 h-1.5 bg-primary mb-4" />
              <p className="text-muted-foreground mb-10 text-lg">
                {t("iletisim.formDesc")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                      {t("iletisim.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("iletisim.namePlaceholder")}
                      className="w-full px-4 py-4 bg-muted border-0 border-b-2 border-transparent focus:border-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                      {t("iletisim.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("iletisim.emailPlaceholder")}
                      className="w-full px-4 py-4 bg-muted border-0 border-b-2 border-transparent focus:border-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                      {t("iletisim.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("iletisim.phonePlaceholder")}
                      className="w-full px-4 py-4 bg-muted border-0 border-b-2 border-transparent focus:border-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                      {t("iletisim.subject")}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("iletisim.subjectPlaceholder")}
                      className="w-full px-4 py-4 bg-muted border-0 border-b-2 border-transparent focus:border-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                    {t("iletisim.message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("iletisim.messagePlaceholder")}
                    rows={5}
                    className="w-full px-4 py-4 bg-muted border-0 border-b-2 border-transparent focus:border-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-bold text-lg uppercase tracking-wider hover:bg-primary/90 transition-colors group"
                >
                  <Send size={20} />
                  {t("iletisim.send")}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div className="bg-section-dark py-6">
          <div className="container mx-auto px-4 text-center">
            <a
              href="tel:+998662330071"
              className="text-4xl md:text-7xl font-black text-primary hover:text-primary/80 transition-colors tracking-tight"
            >
              +998 66 233 00 71
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d66.8312!3d39.7548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ1JzE3LjMiTiA2NsKwNDknNTIuMyJF!5e0!3m2!1sru!2s!4v1"
          className="w-full h-[450px] border-0 grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
          title="Bulung'ur Motors"
        />
      </section>
    </PageLayout>
  );
};

export default IletisimPage;
