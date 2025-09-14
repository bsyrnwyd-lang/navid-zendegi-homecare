import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CardiologyServices from "./pages/CardiologyServices";
import GeneralDoctorPage from "./pages/GeneralDoctorPage";
import AboutUsPage from "./pages/AboutUsPage";
import PricingPage from "./pages/PricingPage";
import SpecialistDoctorPage from "./pages/services/SpecialistDoctorPage";
import InternalMedicinePage from "./pages/services/InternalMedicinePage";
import PediatricsPage from "./pages/services/PediatricsPage";
import NursingPage from "./pages/services/NursingPage";
import NeurologyPage from "./pages/services/NeurologyPage";
import UrologyPage from "./pages/services/UrologyPage";
import InfectiousDiseasePage from "./pages/services/InfectiousDiseasePage";
import GynecologyPage from "./pages/services/GynecologyPage";
import BeautyDoctorPage from "./pages/services/BeautyDoctorPage";
import PhysiotherapyPage from "./pages/services/PhysiotherapyPage";
import ContactPage from "./pages/ContactPage";
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
          <Route path="/general-doctor" element={<GeneralDoctorPage />} />
          <Route path="/cardiology" element={<CardiologyServices />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Service Pages */}
          <Route path="/services/specialist" element={<SpecialistDoctorPage />} />
          <Route path="/services/internal" element={<InternalMedicinePage />} />
          <Route path="/services/pediatrics" element={<PediatricsPage />} />
          <Route path="/services/nursing" element={<NursingPage />} />
          <Route path="/services/neurology" element={<NeurologyPage />} />
          <Route path="/services/urology" element={<UrologyPage />} />
          <Route path="/services/infectious" element={<InfectiousDiseasePage />} />
          <Route path="/services/gynecology" element={<GynecologyPage />} />
          <Route path="/services/beauty" element={<BeautyDoctorPage />} />
          <Route path="/services/physiotherapy" element={<PhysiotherapyPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
