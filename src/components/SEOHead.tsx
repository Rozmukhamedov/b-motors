import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noSuffix?: boolean;
}

const BASE_URL = "https://bulungur-motors.uz";

const SEOHead = ({ title, description, path = "", ogImage, noSuffix }: SEOHeadProps) => {
  const canonical = `${BASE_URL}${path}`;
  const fullTitle = noSuffix ? title : `${title} | Bulungur Motors`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
