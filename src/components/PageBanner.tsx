import { Link } from "react-router-dom";

interface PageBannerProps {
  image: string;
  titleLine1: string;
  titleLine2?: string;
  breadcrumbs: { label: string; path: string }[];
}

const PageBanner = ({ image, titleLine1, titleLine2, breadcrumbs }: PageBannerProps) => {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
      <img src={image} alt={titleLine1} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase">
          <span className="text-primary">{titleLine1}</span>
          {titleLine2 && (
            <>
              <br />
              <span className="text-primary-foreground">{titleLine2}</span>
            </>
          )}
        </h1>
        <nav className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/80">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.path} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              <Link to={crumb.path} className="hover:text-primary transition-colors">
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
