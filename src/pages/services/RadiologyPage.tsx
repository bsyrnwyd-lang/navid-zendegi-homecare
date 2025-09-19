import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, Heart, Shield, Clock, Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import medicalEquipmentImage from "@/assets/medical-equipment.jpg";

const RadiologyPage = () => {
  useSEO({
    title: "رادیولوژی و سونوگرافی در منزل - خدمات تصویربرداری پزشکی نوید زندگی",
    description: "خدمات رادیولوژی و سونوگرافی در منزل توسط تکنسین‌های مجرب. تصویربرداری پزشکی با کیفیت در راحتی منزل شما در تهران.",
    keywords: "رادیولوژی در منزل، سونوگرافی در منزل، تصویربرداری پزشکی، رادیولوژی پرتابل، سونوگرافی تهران"
  });

  const handleCall = () => {
    window.location.href = 'tel:09386117912';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="medical-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                رادیولوژی و سونوگرافی در منزل
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                خدمات تصویربرداری پزشکی با کیفیت بالا در راحتی منزل شما. تیم متخصص نوید زندگی با تجهیزات پیشرفته و پرتابل آماده ارائه خدمات رادیولوژی و سونوگرافی است.
              </p>
              <Button 
                onClick={handleCall}
                size="lg" 
                className="text-lg px-8 py-4"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </Button>
            </div>
            <div className="relative">
              <img 
                src={medicalEquipmentImage} 
                alt="تجهیزات رادیولوژی و سونوگرافی"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="medical-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">خدمات تصویربرداری در منزل</h2>
            <p className="section-subtitle">
              انجام انواع تصویربرداری پزشکی با دقت و کیفیت بالا در محیط آرام منزل
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="medical-card">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Scan className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center">سونوگرافی در منزل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-4">
                  انجام انواع سونوگرافی با دستگاه‌های پیشرفته و پرتابل
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    سونوگرافی شکم و لگن
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    سونوگرافی قلب (اکوکاردیوگرافی)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    سونوگرافی عروق
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    سونوگرافی تیروئید
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center">رادیولوژی پرتابل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-4">
                  تصویربرداری رادیولوژیک با تجهیزات پرتابل
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    رادیوگرافی قفسه سینه
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    رادیوگرافی اندام‌ها
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    رادیوگرافی ستون فقرات
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                    گزارش تخصصی رادیولوژیست
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="section-title">نیاز به تصویربرداری پزشکی دارید؟</h2>
          <p className="section-subtitle mb-8">
            همین حالا با ما تماس بگیرید و خدمات رادیولوژی و سونوگرافی را در منزل دریافت کنید
          </p>
          <Button 
            onClick={handleCall}
            size="lg"
            className="text-lg px-8 py-4"
          >
            <Phone className="ml-2 h-5 w-5" />
            رزرو نوبت: ۰۹۳۸۶۱۱۷۹۱۲
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RadiologyPage;