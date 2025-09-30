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
import NursingPage from "./pages/services/NursingPage";
import NeurologyPage from "./pages/services/NeurologyPage";
import UrologyPage from "./pages/services/UrologyPage";
import InfectiousDiseasePage from "./pages/services/InfectiousDiseasePage";
import PhysiotherapyPage from "./pages/services/PhysiotherapyPage";
import RadiologyPage from "./pages/services/RadiologyPage";
import ENTPage from "./pages/services/ENTPage";
import EchoECGPage from "./pages/services/EchoECGPage";
import HolterPage from "./pages/services/HolterPage";
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
import ColdTreatmentPage from "./pages/articles/ColdTreatmentPage";
import DepressionHeartDiseasePage from "./pages/articles/DepressionHeartDiseasePage";
import MedicalConsultationPage from "./pages/articles/MedicalConsultationPage";
import ChildGrowthMonitoringPage from "./pages/articles/ChildGrowthMonitoringPage";
import VitaminsHealthPage from "./pages/articles/VitaminsHealthPage";
import VaccinationPage from "./pages/articles/VaccinationPage";
import HIVAidsPage from "./pages/articles/HIVAidsPage";
import DiabetesPage from "./pages/articles/DiabetesPage";
import HyperhidrosisPage from "./pages/articles/HyperhidrosisPage";
import HeadachePage from "./pages/articles/HeadachePage";
import DizzinessPage from "./pages/articles/DizzinessPage";
import DepressionPage from "./pages/articles/DepressionPage";
import IVTherapyHomePage from "./pages/articles/IVTherapyHomePage";
import PatientDemandsPage from "./pages/articles/PatientDemandsPage";
import FeverTrackingPage from "./pages/articles/FeverTrackingPage";
import GreenTeaWeightLossPage from "./pages/articles/GreenTeaWeightLossPage";
import BreastMassPage from "./pages/articles/BreastMassPage";
import SkinItchingPage from "./pages/articles/SkinItchingPage";
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
          <Route path="/services/nursing" element={<NursingPage />} />
          <Route path="/services/neurology" element={<NeurologyPage />} />
          <Route path="/services/urology" element={<UrologyPage />} />
          <Route path="/services/infectious" element={<InfectiousDiseasePage />} />
          <Route path="/services/physiotherapy" element={<PhysiotherapyPage />} />
          <Route path="/services/radiology" element={<RadiologyPage />} />
          <Route path="/services/ent" element={<ENTPage />} />
          <Route path="/services/echo-ecg" element={<EchoECGPage />} />
          <Route path="/services/holter" element={<HolterPage />} />
          
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
          <Route path="/articles/cold-treatment" element={<ColdTreatmentPage />} />
          <Route path="/articles/depression-heart-disease" element={<DepressionHeartDiseasePage />} />
           <Route path="/articles/medical-consultation" element={<MedicalConsultationPage />} />
           <Route path="/articles/child-growth-monitoring" element={<ChildGrowthMonitoringPage />} />
           <Route path="/articles/vitamins-health" element={<VitaminsHealthPage />} />
           <Route path="/articles/vaccination" element={<VaccinationPage />} />
           <Route path="/articles/hiv-aids" element={<HIVAidsPage />} />
           <Route path="/articles/diabetes" element={<DiabetesPage />} />
           <Route path="/articles/hyperhidrosis" element={<HyperhidrosisPage />} />
           <Route path="/articles/headache" element={<HeadachePage />} />
           <Route path="/articles/dizziness" element={<DizzinessPage />} />
          <Route path="/articles/depression" element={<DepressionPage />} />
          <Route path="/articles/iv-therapy-home" element={<IVTherapyHomePage />} />
          <Route path="/articles/patient-demands" element={<PatientDemandsPage />} />
          <Route path="/articles/fever-tracking" element={<FeverTrackingPage />} />
          <Route path="/articles/green-tea-weight-loss" element={<GreenTeaWeightLossPage />} />
          <Route path="/articles/breast-mass" element={<BreastMassPage />} />
          <Route path="/articles/skin-itching" element={<SkinItchingPage />} />
           
           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
