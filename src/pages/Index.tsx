import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import HomeContainer from "@/containers/HomeContainer";

const Index = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Bulungur Motors — Сельскохозяйственная техника в Узбекистане"
        description="Bulungur Motors — продажа сельхозтехники в Узбекистане. Дисковые бороны, сеялки, плуги. Шоурумы в Ташкенте, Самарканде, Джизаке."
        path="/"
        noSuffix
      />
      <HomeContainer />
    </PageLayout>
  );
};

export default Index;
