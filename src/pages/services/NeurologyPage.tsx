import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, CheckCircle, Phone, Activity } from "lucide-react";
import neurologyImage from "@/assets/neurology.jpg";

const NeurologyPage = () => {
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
                  ویزیت متخصص مغز و اعصاب در منزل
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  تشخیص و درمان اختلالات عصبی توسط متخصص مغز و اعصاب در منزل. معاینه دقیق سیستم عصبی با تجهیزات تخصصی.
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
                  src={neurologyImage} 
                  alt="ویزیت متخصص مغز و اعصاب در منزل - تشخیص اختلالات عصبی"
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
            <h2 className="section-title text-center mb-12">خدمات متخصص مغز و اعصاب در منزل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">تشخیص اختلالات عصبی</h3>
                  <p className="text-muted-foreground mb-4">
                    ارزیابی کامل عملکرد سیستم عصبی مرکزی و محیطی
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">سردرد و میگرن</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">اختلالات حرکتی</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">بیماری‌های دمانس</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Activity className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">معاینات تخصصی</h3>
                  <p className="text-muted-foreground mb-4">
                    انجام تست‌های عصبی و ارزیابی عملکرد مغز
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">آزمون‌های عصبی</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">بررسی رفلکس‌ها</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">ارزیابی حس و حرکت</span>
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
            <h2 className="section-title mb-6">ویزیت متخصص مغز و اعصاب در منزل</h2>
            <p className="text-lg text-muted-foreground mb-8">
              تشخیص دقیق اختلالات عصبی در راحتی منزل
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
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default NeurologyPage;