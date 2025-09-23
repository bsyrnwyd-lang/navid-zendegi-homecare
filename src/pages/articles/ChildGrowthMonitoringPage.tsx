import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import pediatricsImage from "@/assets/pediatrics.jpg";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";

const ChildGrowthMonitoringPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="رشد کودک؛ اهمیت پایش منظم در منزل | نوید زندگی"
        description="پایش رشد کودک در منزل با خدمات ویزیت پزشک اطفال. بررسی قد، وزن و تکامل رفتاری کودک توسط متخصص در منزل"
        keywords="رشد کودک, پایش رشد, ویزیت پزشک اطفال, پزشک کودک در منزل, تکامل کودک"
        ogImage="/images/pediatrics.jpg"
      />
      
      <Header />
      
      <main className="pt-20 md:pt-24">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              رشد کودک؛ اهمیت پایش منظم در منزل
            </h1>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-primary">دکتر نیره مظاهری تهرانی</p>
              <p className="text-sm text-muted-foreground">متخصص اطفال</p>
            </div>
            <img 
              src={pediatricsImage} 
              alt="پایش رشد کودک در منزل توسط پزشک متخصص اطفال" 
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
            />
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              رشد کودک یکی از مهم‌ترین شاخص‌های سلامت اوست و تحت تأثیر عوامل مختلفی مانند ژنتیک، هورمون‌ها و شرایط محیطی قرار دارد. سرعت رشد در دوران شیرخوارگی و بلوغ بیشتر از سایر مراحل زندگی است و هر یک از اعضای بدن نیز الگوی رشد متفاوتی دارند. معمولاً اندازه نهایی بدن تا حدود هجده سالگی به دست می‌آید.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              از بدو تولد، کودکان باید به‌طور منظم از نظر قد، وزن و تکامل رفتاری توسط متخصص کودکان بررسی شوند. در بیشتر موارد، روند رشد طبیعی است، اما اگر هرگونه تأخیر یا اختلالی در این مسیر مشاهده شود، لازم است علت آن بررسی و درمان مناسب آغاز شود.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              خدمات ویزیت پزشک اطفال در منزل به خانواده‌ها این امکان را می‌دهد که بدون نیاز به مراجعه حضوری به مراکز درمانی، روند رشد فرزندشان را به صورت منظم و سریالی تحت نظر داشته باشند. پزشک متخصص در منزل می‌تواند با بررسی دقیق وضعیت کودک، اطمینان لازم را به والدین بدهد و در صورت وجود مشکل، راهکارهای درمانی مناسب را ارائه کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              مزایای ویزیت پزشک کودک در منزل
            </h2>

            <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
              <li>پایش مستمر رشد قدی و وزنی کودک</li>
              <li>بررسی تکامل رفتاری و مهارت‌های رشدی</li>
              <li>کاهش استرس و صرفه‌جویی در زمان والدین</li>
              <li>پیشگیری از مراجعه غیرضروری به بیمارستان</li>
            </ul>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                خدمات ویزیت پزشک اطفال در منزل - نوید زندگی
              </h3>
              <p className="text-muted-foreground mb-4">
                تیم متخصص ما آماده ارائه خدمات پایش رشد کودک در منزل است. با تماس یا پیام در واتساپ، همین الان وقت بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleCall} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  واتساپ: ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
              </div>
            </div>

            <PricingInfo />
          </div>
        </article>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ChildGrowthMonitoringPage;