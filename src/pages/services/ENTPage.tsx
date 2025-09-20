import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useSEO } from "@/hooks/useSEO";
import entImage from "@/assets/iranian-doctor-home-visit.jpg";

const ENTPage = () => {
  useSEO({
    title: "ویزیت متخصص گوش حلق و بینی در منزل تهران | نوید زندگی",
    description: "ویزیت متخصص گوش حلق و بینی در منزل، خدمات شستشو گوش، درمان خونریزی بینی و اودیومتری در منزل توسط متخصصان مجرب نوید زندگی در تهران",
    keywords: "ویزیت متخصص گوش حلق بینی در منزل، ENT در منزل، شستشو گوش در منزل، درمان خونریزی بینی، اودیومتری در منزل، متخصص گوش حلق بینی تهران"
  });

  const handleCall = () => {
    window.location.href = "tel:02191002090";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                ویزیت متخصص گوش حلق و بینی در منزل تهران
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                خدمات تخصصی گوش حلق و بینی در منزل توسط متخصصان مجرب نوید زندگی. شستشو گوش، درمان خونریزی بینی و اودیومتری در راحتی منزل شما.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleCall}
              >
                <Phone className="ml-2 h-5 w-5" />
                رزرو نوبت فوری - ۰۲۱۹۱۰۰۲۰۹۰
              </Button>
            </div>
            <div className="relative">
              <img 
                src={entImage} 
                alt="ویزیت متخصص گوش حلق و بینی در منزل"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="medical-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">خدمات متخصص گوش حلق و بینی در منزل</h2>
            <p className="section-subtitle">
              ارائه کلیه خدمات تخصصی ENT در منزل با بالاترین کیفیت و ایمنی
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="medical-card group hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Ear className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">شستشو گوش در منزل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  پاکسازی ایمن و تخصصی گوش از جرم گوش و مواد خارجی
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    برداشتن جرم گوش
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    شستشو تخصصی گوش
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    برداشتن مواد خارجی
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    بهبود شنوایی
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Ear className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">درمان خونریزی بینی</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  تشخیص و درمان فوری خونریزی بینی در منزل
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    توقف فوری خونریزی
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    تشخیص علت خونریزی
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    درمان تخصصی
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    پیشگیری از عود
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card group hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Ear className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">اودیومتری در منزل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  تست تخصصی شنوایی و ارزیابی عملکرد گوش
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    تست شنوایی کامل
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    ارزیابی کم‌شنوایی
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    تشخیص مشکلات شنوایی
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                    مشاوره سمعک
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="medical-section bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-8">رزرو نوبت ویزیت متخصص گوش حلق و بینی</h2>
          <p className="section-subtitle mb-8">
            برای دریافت خدمات تخصصی گوش حلق و بینی در منزل همین حالا تماس بگیرید
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={handleCall}
          >
            <Phone className="ml-2 h-5 w-5" />
            تماس فوری: ۰۲۱۹۱۰۰۲۰۹۰
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ENTPage;