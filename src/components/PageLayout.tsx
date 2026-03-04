import { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
