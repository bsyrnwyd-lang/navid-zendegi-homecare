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
    title: "ویزیت متخصص گوش، حلق و بینی (ENT) در منزل تهران | درمان سرگیجه و مشکلات گوش | نوید زندگی",
    description: "اعزام فوری متخصص ENT در منزل تهران برای معاینه گوش، حلق و بینی. تشخیص و درمان مشکلات شنوایی، سرگیجه، سینوزیت حاد و خونریزی بینی در خانه.",
    keywords: "ویزیت متخصص ENT در منزل، گوش حلق بینی در منزل، درمان سرگیجه، درمان ورتیگو، سینوزیت حاد، خونریزی بینی، متخصص گوش تهران"
  });

  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h1 className="text-5xl font-bold text-foreground leading-relaxed">
            ویزیت متخصص گوش، حلق و بینی در منزل
          </h1>
          
          <p className="text-3xl text-foreground leading-loose">
            مشکلات گوش، حلق و بینی را در خانه درمان کنید
          </p>
          
          <p className="text-2xl text-muted-foreground leading-loose">
            برای بیماران سرگیجه و کسانی که نمی‌توانند به کلینیک بروند، متخصص به منزل شما می‌آید
          </p>
          
          <Button 
            onClick={handleCall}
            size="lg"
            className="text-3xl px-20 py-12 mt-8"
          >
            <Phone className="ml-4 h-10 w-10" />
            تماس فوری
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 text-foreground">
            خدمات در منزل
          </h2>

          <div className="space-y-16">
            {/* گوش و شنوایی */}
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-foreground pb-6 border-b-2 border-primary">
                گوش و شنوایی
              </h3>
              
              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">معاینه گوش</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  بررسی دقیق گوش با تجهیزات پزشکی
                </p>
              </div>

              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">درمان سرگیجه</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  تشخیص و درمان ورتیگو در منزل
                </p>
              </div>

              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">درمان عفونت گوش</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  تشخیص و درمان انواع عفونت گوش
                </p>
              </div>

              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">برداشتن جرم گوش</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  پاکسازی گوش در منزل
                </p>
              </div>
            </div>

            {/* حلق و حنجره */}
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-foreground pb-6 border-b-2 border-primary">
                حلق و حنجره
              </h3>
              
              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">عفونت حلق</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  تشخیص و درمان فارنژیت و تونسیلیت
                </p>
              </div>

              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">مشکلات بلع</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  ارزیابی و راهنمایی تخصصی
                </p>
              </div>
            </div>

            {/* بینی و سینوس */}
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-foreground pb-6 border-b-2 border-primary">
                بینی و سینوس
              </h3>
              
              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">سینوزیت حاد</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  درمان عفونت‌های سینوسی
                </p>
              </div>

              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">خونریزی بینی</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  کنترل و درمان خونریزی بینی
                </p>
              </div>

              <div className="bg-card p-12 rounded-xl border border-border">
                <h4 className="font-bold text-2xl mb-4 text-foreground">مشکلات بویایی</h4>
                <p className="text-2xl text-muted-foreground leading-loose">
                  ارزیابی اختلالات بویایی
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 text-foreground">
            چرا ویزیت در منزل؟
          </h2>
          
          <div className="space-y-10">
            <div className="bg-card p-12 rounded-xl border border-border">
              <h3 className="font-bold text-2xl mb-4 text-foreground">راحتی بیماران</h3>
              <p className="text-2xl text-muted-foreground leading-loose">
                بیماران سرگیجه نیازی به جابجایی ندارند
              </p>
            </div>

            <div className="bg-card p-12 rounded-xl border border-border">
              <h3 className="font-bold text-2xl mb-4 text-foreground">درمان سریع</h3>
              <p className="text-2xl text-muted-foreground leading-loose">
                تشخیص و شروع درمان بدون تاخیر
              </p>
            </div>

            <div className="bg-card p-12 rounded-xl border border-border">
              <h3 className="font-bold text-2xl mb-4 text-foreground">صرفه‌جویی در زمان</h3>
              <p className="text-2xl text-muted-foreground leading-loose">
                بدون نیاز به انتظار در مطب
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            نحوه درخواست
          </h2>
          <div className="bg-card p-12 rounded-xl border border-border">
            <p className="text-2xl text-muted-foreground leading-loose text-center">
              با شماره تماس بگیرید، متخصص به منزل شما می‌آید
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-foreground leading-relaxed">
            برای ویزیت متخصص در منزل
          </h2>
          <p className="text-2xl text-muted-foreground">
            همین الان تماس بگیرید
          </p>
          <Button 
            onClick={handleCall}
            size="lg"
            className="text-3xl px-20 py-12"
          >
            <Phone className="ml-4 h-10 w-10" />
            تماس فوری
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ENTPage;