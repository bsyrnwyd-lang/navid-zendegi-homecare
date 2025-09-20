import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
import RadiologyPage from "./pages/services/RadiologyPage";
import ENTPage from "./pages/services/ENTPage";
import ContactPage from "./pages/ContactPage";
import InfluenzaTreatmentPage from "./pages/articles/InfluenzaTreatmentPage";
import StrokeSymptomsPage from "./pages/articles/StrokeSymptomsPage";
import HeartAttackSymptomsPage from "./pages/articles/HeartAttackSymptomsPage";
import SmokingHeartEffectsPage from "./pages/articles/SmokingHeartEffectsPage";
import CholesterolTestPage from "./pages/articles/CholesterolTestPage";
import BreathingTreatmentPage from "./pages/articles/BreathingTreatmentPage";
import NeurobionAmpoule from "./pages/articles/NeurobionAmpoule";
import HeatExhaustionPage from "./pages/articles/HeatExhaustionPage";
import GardasilVaccinePage from "./pages/articles/GardasilVaccinePage";
import GenitalWartsPage from "./pages/articles/GenitalWartsPage";
import HPVPoolPage from "./pages/articles/HPVPoolPage";
import NailSpotsPage from "./pages/articles/NailSpotsPage";
import AICardiologyPage from "./pages/articles/AICardiologyPage";
import ChildrenFeverPage from "./pages/articles/ChildrenFeverPage";
import MigrainePage from "./pages/articles/MigrainePage";
import MeningitisPage from "./pages/articles/MeningitisPage";
import AirPollutionPage from "./pages/articles/AirPollutionPage";
import CoffeeHeartPage from "./pages/articles/CoffeeHeartPage";
import MedicalConsultationPage from "./pages/articles/MedicalConsultationPage";
import ArticlesPage from "./pages/ArticlesPage";
import CollaborationPage from "./pages/CollaborationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/general-doctor" element={<GeneralDoctorPage />} />
          <Route path="/cardiology" element={<CardiologyServices />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          
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
          <Route path="/services/radiology" element={<RadiologyPage />} />
          <Route path="/services/ent" element={<ENTPage />} />
          
          {/* Article Pages */}
          <Route path="/articles/influenza-treatment" element={<InfluenzaTreatmentPage />} />
          <Route path="/articles/stroke-symptoms" element={<StrokeSymptomsPage />} />
          <Route path="/articles/heart-attack-symptoms" element={<HeartAttackSymptomsPage />} />
          <Route path="/articles/smoking-heart-effects" element={<SmokingHeartEffectsPage />} />
          <Route path="/articles/cholesterol-test" element={<CholesterolTestPage />} />
          <Route path="/articles/breathing-treatment" element={<BreathingTreatmentPage />} />
          <Route path="/articles/neurobion-ampoule" element={<NeurobionAmpoule />} />
          <Route path="/articles/heat-exhaustion" element={<HeatExhaustionPage />} />
          <Route path="/articles/gardasil-vaccine" element={<GardasilVaccinePage />} />
          <Route path="/articles/genital-warts" element={<GenitalWartsPage />} />
          <Route path="/articles/hpv-pool" element={<HPVPoolPage />} />
          <Route path="/articles/nail-spots" element={<NailSpotsPage />} />
          <Route path="/articles/ai-cardiology" element={<AICardiologyPage />} />
          <Route path="/articles/children-fever" element={<ChildrenFeverPage />} />
          <Route path="/articles/migraine" element={<MigrainePage />} />
          <Route path="/articles/meningitis" element={<MeningitisPage />} />
          <Route path="/articles/air-pollution" element={<AirPollutionPage />} />
           <Route path="/articles/coffee-heart" element={<CoffeeHeartPage />} />
           <Route path="/articles/medical-consultation" element={<MedicalConsultationPage />} />
           
           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
