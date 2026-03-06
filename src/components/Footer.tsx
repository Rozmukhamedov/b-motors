import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.corporate"), path: "/about" },
    { label: t("nav.products"), path: "/products" },
    { label: t("nav.partsService"), path: "/parts-service" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 — Company & Contacts */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-primary">
              {t("footer.factory")}
            </h3>
            <div className="w-10 h-0.5 bg-primary mb-6" />
            <div className="space-y-4 text-section-dark-foreground/80 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <p>{t("footer.address")}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+998662330071" className="hover:text-primary transition-colors">
                  +998 66 233 00 71
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+998662330072" className="hover:text-primary transition-colors">
                  +998 66 233 00 72
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href="mailto:contact@bmotors-uz.com" className="hover:text-primary transition-colors">
                  contact@bmotors-uz.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href="mailto:m.b.mallaev@bmotors-uz.com" className="hover:text-primary transition-colors">
                  m.b.mallaev@bmotors-uz.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-primary">
              {t("footer.quickLinks")}
            </h3>
            <div className="w-10 h-0.5 bg-primary mb-6" />
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-section-dark-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-0.5 bg-primary/40 group-hover:bg-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-2 text-primary">
              {t("footer.followUs")}
            </h3>
            <div className="w-10 h-0.5 bg-primary mb-6" />
            <p className="text-section-dark-foreground/80 text-sm mb-6">
              {t("footer.followDesc")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-section-dark-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-section-dark-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="w-10 h-10 border border-section-dark-foreground/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.800-.943-.61-.332-1.044.219-1.649.136-.144 2.614-2.396 2.658-2.6.006-.026.013-.118-.044-.167-.059-.05-.146-.033-.211-.019-.091.019-1.549.985-4.374 2.897-.414.284-.789.423-1.127.417-.371-.008-1.086-.211-1.615-.383-.65-.213-1.167-.325-1.121-.687.024-.194.356-.392.996-.596 3.898-1.697 6.498-2.818 7.798-3.362 3.718-1.55 4.49-1.819 4.99-1.828z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-section-dark-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center text-section-dark-foreground/50 text-sm">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
