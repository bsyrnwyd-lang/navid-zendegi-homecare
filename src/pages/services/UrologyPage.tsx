import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { User, CheckCircle, Phone, Shield } from "lucide-react";
import urologyImage from "@/assets/urology.jpg";

const UrologyPage = () => {
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
                  ویزیت متخصص اورولوژی در منزل
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  تشخیص و درمان بیماری‌های کلیه، مثانه و دستگاه ادراری تناسلی توسط متخصص اورولوژی در خصوصیت منزل.
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
                  src={urologyImage} 
                  alt="ویزیت متخصص اورولوژی در منزل - درمان بیماری‌های ادراری تناسلی"
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
            <h2 className="section-title text-center mb-12">خدمات متخصص اورولوژی در منزل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <User className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">بیماری‌های کلیه و مثانه</h3>
                  <p className="text-muted-foreground mb-4">
                    تشخیص و درمان اختلالات دستگاه ادراری
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">عفونت‌های ادراری</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">سنگ کلیه و مثانه</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">اختلالات پروستات</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">مشاوره تخصصی</h3>
                  <p className="text-muted-foreground mb-4">
                    ارائه راهکارهای درمانی و پیشگیرانه
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">مشاوره سلامت مردان</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">راهنمایی پیشگیری</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">پیگیری درمان</span>
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
            <h2 className="section-title mb-6">ویزیت متخصص اورولوژی در منزل</h2>
            <p className="text-lg text-muted-foreground mb-8">
              مشاوره و درمان بیماری‌های اورولوژی در خصوصیت منزل
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

export default UrologyPage;