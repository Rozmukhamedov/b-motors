import HeroSlider from "@/components/HeroSlider";
import ProductsSection from "@/components/ProductsSection";
import PowerSection from "@/components/PowerSection";
import TimeSection from "@/components/TimeSection";
import ExportSection from "@/components/ExportSection";
import TeamSection from "@/components/TeamSection";
import ServiceSection from "@/components/ServiceSection";
import FutureSection from "@/components/FutureSection";

const HomeContainer = () => {
  return (
    <>
      <HeroSlider />
      <ProductsSection />
      <PowerSection />
      <TimeSection />
      <ExportSection />
      <TeamSection />
      <ServiceSection />
      <FutureSection />
    </>
  );
};

export default HomeContainer;
