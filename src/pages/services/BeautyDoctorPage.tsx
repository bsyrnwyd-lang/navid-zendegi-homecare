import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, CheckCircle, Phone, Star } from "lucide-react";
import beautyImage from "@/assets/beauty-doctor.jpg";

const BeautyDoctorPage = () => {
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
                  پزشک زیبایی در منزل
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  خدمات زیبایی و درمان‌های تخصصی پوست توسط پزشک زیبایی مجرب در راحتی منزل شما. زیبایی طبیعی با ایمنی کامل.
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
                  src={beautyImage} 
                  alt="پزشک زیبایی در منزل - خدمات زیبایی و درمان پوست"
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
            <h2 className="section-title text-center mb-12">خدمات پزشک زیبایی در منزل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">تزریقات زیبایی</h3>
                  <p className="text-muted-foreground mb-4">
                    انواع تزریقات زیبایی با محصولات معتبر و روش‌های ایمن
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">تزریق بوتاکس</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">تزریق فیلر</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">پلاسماتراپی</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Star className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">مراقبت پوست</h3>
                  <p className="text-muted-foreground mb-4">
                    درمان‌های تخصصی پوست و جوانسازی
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">درمان آکنه</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">جوانسازی پوست</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">درمان لک‌های پوستی</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">مزایای خدمات زیبایی در منزل</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">خصوصیت کامل</h3>
                <p className="text-muted-foreground text-sm">انجام درمان در راحتی و خصوصیت منزل</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">کیفیت بالا</h3>
                <p className="text-muted-foreground text-sm">استفاده از بهترین محصولات و تجهیزات</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">ایمنی کامل</h3>
                <p className="text-muted-foreground text-sm">رعایت کامل استانداردهای بهداشتی</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">ویزیت پزشک زیبایی در منزل</h2>
            <p className="text-lg text-muted-foreground mb-8">
              زیبایی و جوانی پوست را در منزل تجربه کنید
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

export default BeautyDoctorPage;