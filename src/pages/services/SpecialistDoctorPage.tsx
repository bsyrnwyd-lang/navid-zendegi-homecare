import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, CheckCircle, Phone, Clock } from "lucide-react";
import specialistImage from "@/assets/specialist-doctor.jpg";

const SpecialistDoctorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  ویزیت پزشک متخصص در منزل
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  دسترسی به بهترین پزشکان متخصص در راحتی منزل شما. ویزیت تخصصی با تجهیزات پیشرفته و تجربه بالا.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: 09386117912
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={specialistImage} 
                  alt="ویزیت پزشک متخصص در منزل - خدمات تخصصی پزشکی"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">خدمات پزشک متخصص در منزل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <Stethoscope className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">معاینه تخصصی کامل</h3>
                  <p className="text-muted-foreground mb-4">
                    بررسی دقیق وضعیت سلامت با استفاده از آخرین روش‌های تشخیصی
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">معاینه بالینی جامع</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">ارزیابی علائم و نشانه‌ها</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">مشاوره و درمان</h3>
                  <p className="text-muted-foreground mb-4">
                    ارائه راهکارهای درمانی مناسب و پیگیری روند بهبودی
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">تجویز دارو و نسخه</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">برنامه‌ریزی درمان</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">همین حالا ویزیت پزشک متخصص را رزرو کنید</h2>
            <p className="text-lg text-muted-foreground mb-8">
              پزشکان متخصص ما آماده ویزیت در منزل شما هستند
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* Pricing Info Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default SpecialistDoctorPage;