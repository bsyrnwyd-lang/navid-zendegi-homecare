import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Stethoscope, CheckCircle, Phone, Bone, Brain, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import specialistImage from "@/assets/specialist-doctor.jpg";

const SpecialistDoctorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت پزشک متخصص در منزل تهران | اعزام فوق تخصص به خانه | نوید زندگی"
        description="خدمات پزشک متخصص در منزل تهران شامل متخصص داخلی، ارتوپد، مغز و اعصاب و ... . با تجهیزات کامل و اعزام فوری. برای ویزیت فوق تخصص در خانه تماس بگیرید."
        keywords="ویزیت پزشک متخصص در منزل, پزشک فوق تخصص در خانه, متخصص داخلی در منزل, کاردیولوژیست در منزل, ارتوپد در منزل"
        canonical="https://navidzendegi.ir/services/specialist"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  ویزیت پزشک متخصص و فوق تخصص در منزل تهران (خدمات کامل تخصصی)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  درمان بیماری‌های پیچیده و مزمن نیازمند دانش و تجربه پزشک متخصص است. نوید زندگی با هدف تسهیل دسترسی به بهترین خدمات درمانی، امکان ویزیت پزشک متخصص در منزل تهران را فراهم کرده است. ما با همکاری با پزشکان فوق تخصص، اطمینان می‌دهیم که بیماران شما دقیق‌ترین تشخیص و مؤثرترین برنامه درمانی را بدون نیاز به خروج از خانه دریافت کنند.
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
                  alt="ویزیت پزشک متخصص در منزل تهران - خدمات فوق تخصصی پزشکی در خانه"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Home Specialist Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="section-title text-center mb-12">چرا برای خدمات تخصصی، پزشک در منزل را انتخاب کنیم؟</h2>
            <div className="space-y-6">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">کاهش ریسک انتقال بیماری</h3>
                      <p className="text-muted-foreground">
                        جلوگیری از قرار گرفتن بیماران حساس در محیط‌های شلوغ بیمارستانی
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Stethoscope className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">معاینه دقیق‌تر</h3>
                      <p className="text-muted-foreground">
                        پزشک زمان بیشتری برای بررسی کامل سوابق و شرایط زندگی بیمار دارد
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">راحتی بیمار</h3>
                      <p className="text-muted-foreground">
                        حذف سختی‌های جابه‌جایی، به‌ویژه برای بیماران با شرایط حاد یا ناتوانی حرکتی
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">پیگیری مستمر</h3>
                      <p className="text-muted-foreground">
                        امکان هماهنگی برای ویزیت‌های دوره‌ای و پیگیری روند درمان در خانه
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-12">تخصص‌های پزشکی قابل ارائه در منزل توسط نوید زندگی</h2>
            
            <div className="space-y-6">
              {/* Cardiology */}
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">۱. متخصص قلب و عروق در منزل</h3>
                      <p className="text-muted-foreground mb-3">
                        اعزام کاردیولوژیست همراه با تجهیزات اکو و نوار قلب برای بررسی وضعیت قلب و فشار خون.
                      </p>
                      <Link to="/cardiology-services" className="text-primary hover:underline inline-flex items-center">
                        اطلاعات بیشتر درباره خدمات قلب و عروق
                        <CheckCircle className="w-4 h-4 mr-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Internal Medicine */}
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">۲. متخصص داخلی در منزل</h3>
                      <p className="text-muted-foreground mb-3">
                        تشخیص و درمان بیماری‌های مزمن مانند دیابت، فشار خون بالا، مشکلات گوارشی و عفونی.
                      </p>
                      <Link to="/services/internal-medicine" className="text-primary hover:underline inline-flex items-center">
                        اطلاعات بیشتر درباره خدمات داخلی
                        <CheckCircle className="w-4 h-4 mr-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Orthopedics */}
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">۳. متخصص ارتوپدی در منزل</h3>
                      <p className="text-muted-foreground">
                        ویزیت و مشاوره برای بیماران دارای شکستگی، آرتروز شدید، یا پس از جراحی‌های ارتوپدی و مفاصل.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Neurology */}
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">۴. متخصص مغز و اعصاب (نورولوژی) در منزل</h3>
                      <p className="text-muted-foreground mb-3">
                        مراقبت‌های تخصصی برای بیماران سکته مغزی، ام‌اس، پارکینسون و سایر اختلالات عصبی.
                      </p>
                      <Link to="/services/neurology" className="text-primary hover:underline inline-flex items-center">
                        اطلاعات بیشتر درباره خدمات مغز و اعصاب
                        <CheckCircle className="w-4 h-4 mr-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pulmonology */}
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wind className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">۵. متخصص ریه و عفونی در منزل</h3>
                      <p className="text-muted-foreground mb-3">
                        تشخیص و پیگیری درمان بیماری‌های تنفسی، ذات‌الریه و عفونت‌های پیچیده.
                      </p>
                      <Link to="/services/infectious-disease" className="text-primary hover:underline inline-flex items-center">
                        اطلاعات بیشتر درباره خدمات بیماری‌های عفونی
                        <CheckCircle className="w-4 h-4 mr-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Request Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="section-title text-center mb-12">نحوه درخواست ویزیت پزشک فوق تخصص در خانه</h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
              فرآیند درخواست خدمات تخصصی در نوید زندگی بسیار ساده است:
            </p>
            
            <div className="space-y-6">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      ۱
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">تماس و مشاوره</h3>
                      <p className="text-muted-foreground">
                        با ما تماس بگیرید و نوع تخصص مورد نیاز و شرایط بیمار را شرح دهید
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      ۲
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">هماهنگی سریع</h3>
                      <p className="text-muted-foreground">
                        در کوتاه‌ترین زمان، پزشک متخصص مربوطه برای ویزیت هماهنگ می‌شود
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      ۳
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">ویزیت و درمان</h3>
                      <p className="text-muted-foreground">
                        متخصص با تجهیزات کامل به منزل شما اعزام شده و فرآیند تشخیص و درمان را آغاز می‌کند
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">برای دسترسی سریع به بهترین متخصصان تهران، همین حالا تماس بگیرید</h2>
            <p className="text-lg text-muted-foreground mb-8">
              برای رزرو ویزیت پزشک متخصص در منزل با نوید زندگی تماس بگیرید
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