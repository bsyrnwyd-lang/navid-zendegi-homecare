import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Core pages - load immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load other pages for better performance
const CardiologyServices = lazy(() => import("./pages/CardiologyServices"));
const GeneralDoctorPage = lazy(() => import("./pages/GeneralDoctorPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CollaborationPage = lazy(() => import("./pages/CollaborationPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));

// Service pages
const SpecialistDoctorPage = lazy(() => import("./pages/services/SpecialistDoctorPage"));
const InternalMedicinePage = lazy(() => import("./pages/services/InternalMedicinePage"));
const NursingPage = lazy(() => import("./pages/services/NursingPage"));
const NeurologyPage = lazy(() => import("./pages/services/NeurologyPage"));
const UrologyPage = lazy(() => import("./pages/services/UrologyPage"));
const InfectiousDiseasePage = lazy(() => import("./pages/services/InfectiousDiseasePage"));
const PhysiotherapyPage = lazy(() => import("./pages/services/PhysiotherapyPage"));
const RadiologyPage = lazy(() => import("./pages/services/RadiologyPage"));
const ENTPage = lazy(() => import("./pages/services/ENTPage"));
const EchoECGPage = lazy(() => import("./pages/services/EchoECGPage"));
const HolterPage = lazy(() => import("./pages/services/HolterPage"));
const LaboratoryPage = lazy(() => import("./pages/services/LaboratoryPage"));

// Article pages - lazy loaded
const InfluenzaTreatmentPage = lazy(() => import("./pages/articles/InfluenzaTreatmentPage"));
const StrokeSymptomsPage = lazy(() => import("./pages/articles/StrokeSymptomsPage"));
const HeartAttackSymptomsPage = lazy(() => import("./pages/articles/HeartAttackSymptomsPage"));
const SmokingHeartEffectsPage = lazy(() => import("./pages/articles/SmokingHeartEffectsPage"));
const CholesterolTestPage = lazy(() => import("./pages/articles/CholesterolTestPage"));
const BreathingTreatmentPage = lazy(() => import("./pages/articles/BreathingTreatmentPage"));
const NeurobionAmpoule = lazy(() => import("./pages/articles/NeurobionAmpoule"));
const HeatExhaustionPage = lazy(() => import("./pages/articles/HeatExhaustionPage"));
const GardasilVaccinePage = lazy(() => import("./pages/articles/GardasilVaccinePage"));
const GenitalWartsPage = lazy(() => import("./pages/articles/GenitalWartsPage"));
const HPVPoolPage = lazy(() => import("./pages/articles/HPVPoolPage"));
const NailSpotsPage = lazy(() => import("./pages/articles/NailSpotsPage"));
const AICardiologyPage = lazy(() => import("./pages/articles/AICardiologyPage"));
const ChildrenFeverPage = lazy(() => import("./pages/articles/ChildrenFeverPage"));
const MigrainePage = lazy(() => import("./pages/articles/MigrainePage"));
const MeningitisPage = lazy(() => import("./pages/articles/MeningitisPage"));
const AirPollutionPage = lazy(() => import("./pages/articles/AirPollutionPage"));
const CoffeeHeartPage = lazy(() => import("./pages/articles/CoffeeHeartPage"));
const ColdTreatmentPage = lazy(() => import("./pages/articles/ColdTreatmentPage"));
const DepressionHeartDiseasePage = lazy(() => import("./pages/articles/DepressionHeartDiseasePage"));
const MedicalConsultationPage = lazy(() => import("./pages/articles/MedicalConsultationPage"));
const ChildGrowthMonitoringPage = lazy(() => import("./pages/articles/ChildGrowthMonitoringPage"));
const VitaminsHealthPage = lazy(() => import("./pages/articles/VitaminsHealthPage"));
const VaccinationPage = lazy(() => import("./pages/articles/VaccinationPage"));
const HIVAidsPage = lazy(() => import("./pages/articles/HIVAidsPage"));
const DiabetesPage = lazy(() => import("./pages/articles/DiabetesPage"));
const HyperhidrosisPage = lazy(() => import("./pages/articles/HyperhidrosisPage"));
const HeadachePage = lazy(() => import("./pages/articles/HeadachePage"));
const DizzinessPage = lazy(() => import("./pages/articles/DizzinessPage"));
const DepressionPage = lazy(() => import("./pages/articles/DepressionPage"));
const IVTherapyHomePage = lazy(() => import("./pages/articles/IVTherapyHomePage"));
const PatientDemandsPage = lazy(() => import("./pages/articles/PatientDemandsPage"));
const FeverTrackingPage = lazy(() => import("./pages/articles/FeverTrackingPage"));
const GreenTeaWeightLossPage = lazy(() => import("./pages/articles/GreenTeaWeightLossPage"));
const BreastMassPage = lazy(() => import("./pages/articles/BreastMassPage"));
const SkinItchingPage = lazy(() => import("./pages/articles/SkinItchingPage"));
const BloodPressurePage = lazy(() => import("./pages/articles/BloodPressurePage"));
const HairLossPage = lazy(() => import("./pages/articles/HairLossPage"));
const SkinMolesPage = lazy(() => import("./pages/articles/SkinMolesPage"));
const RubellaPregnancyPage = lazy(() => import("./pages/articles/RubellaPregnancyPage"));
const AngiographyFearPage = lazy(() => import("./pages/articles/AngiographyFearPage"));
const PostAngiographyMedicationsPage = lazy(() => import("./pages/articles/PostAngiographyMedicationsPage"));
const AngiographyRecoveryTimePage = lazy(() => import("./pages/articles/AngiographyRecoveryTimePage"));
const PostAngiographyLiftingPage = lazy(() => import("./pages/articles/PostAngiographyLiftingPage"));
const HeartPalpitationsPage = lazy(() => import("./pages/articles/HeartPalpitationsPage"));
const WarfarinPage = lazy(() => import("./pages/articles/WarfarinPage"));
const HighBloodPressurePage = lazy(() => import("./pages/articles/HighBloodPressurePage"));
const AtorvastatinPage = lazy(() => import("./pages/articles/AtorvastatinPage"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground text-lg">در حال بارگذاری...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/services/laboratory" element={<LaboratoryPage />} />
          
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
           <Route path="/articles/blood-pressure" element={<BloodPressurePage />} />
           <Route path="/articles/hair-loss" element={<HairLossPage />} />
           <Route path="/articles/skin-moles" element={<SkinMolesPage />} />
           <Route path="/articles/rubella-pregnancy" element={<RubellaPregnancyPage />} />
           <Route path="/articles/angiography-fear" element={<AngiographyFearPage />} />
           <Route path="/articles/post-angiography-medications" element={<PostAngiographyMedicationsPage />} />
           <Route path="/articles/angiography-recovery-time" element={<AngiographyRecoveryTimePage />} />
           <Route path="/articles/post-angiography-lifting" element={<PostAngiographyLiftingPage />} />
           <Route path="/articles/heart-palpitations" element={<HeartPalpitationsPage />} />
           <Route path="/articles/warfarin" element={<WarfarinPage />} />
           <Route path="/articles/high-blood-pressure-control" element={<HighBloodPressurePage />} />
           <Route path="/articles/atorvastatin" element={<AtorvastatinPage />} />
             
             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
           <Route path="*" element={<NotFound />} />
         </Routes>
        </Suspense>
       </BrowserRouter>
     </TooltipProvider>
   </QueryClientProvider>
 );
 
 export default App;
