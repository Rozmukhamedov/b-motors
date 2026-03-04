import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import KurumsalPage from "./pages/KurumsalPage";
import UrunlerPage from "./pages/UrunlerPage";
import MedyaPage from "./pages/MedyaPage";
import TatesPage from "./pages/TatesPage";
import IletisimPage from "./pages/IletisimPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kurumsal" element={<KurumsalPage />} />
          <Route path="/urunler" element={<UrunlerPage />} />
          <Route path="/medya" element={<MedyaPage />} />
          <Route path="/tates" element={<TatesPage />} />
          <Route path="/iletisim" element={<IletisimPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
