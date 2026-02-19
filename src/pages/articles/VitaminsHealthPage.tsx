import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import medicalEquipmentImage from "@/assets/medical-equipment.jpg";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";

const VitaminsHealthPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "اهمیت ویتامین‌ها در سلامت بدن", url: "/articles/vitamins-health" }
  ];
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
        title="اهمیت ویتامین‌ها در سلامت بدن | نوید زندگی"
        description="راهنمای کامل ویتامین‌ها و نقش آنها در سلامت بدن. تعیین نیاز بدن به ویتامین‌ها با ویزیت پزشک در منزل"
        keywords="ویتامین، سلامت بدن، مکمل‌های غذایی، ویزیت پزشک در منزل، کمبود ویتامین"
        ogImage="/images/medical-equipment.jpg"
      />
      
      <Header />
      
      <main className="pt-20 md:pt-24">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اهمیت ویتامین‌ها در سلامت بدن
            </h1>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-primary">دکتر نیره مظاهری تهرانی</p>
              <p className="text-sm text-muted-foreground">متخصص قلب و عروق</p>
            </div>
            <img 
              src={medicalEquipmentImage} 
              alt="ویتامین‌ها و تاثیر آنها بر سلامت بدن" 
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
            />
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              ویتامین‌ها از اصلی‌ترین نیازهای بدن برای رشد، سوخت‌وساز و حفظ سلامتی هستند. برخی ویتامین‌ها مانند ویتامین D و K در بدن ساخته می‌شوند، اما بیشتر ویتامین‌ها و مواد معدنی باید از طریق رژیم غذایی یا محیط تأمین شوند.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              نیاز بدن به ویتامین‌ها در شرایط مختلف متفاوت است. برای مثال:
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6 text-lg">
              <li>زنان باردار به مقدار بیشتری اسید فولیک نیاز دارند.</li>
              <li>افراد گیاه‌خوار معمولاً به دریافت بیشتر ویتامین B نیازمند هستند.</li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              از طرفی در برخی دوره‌ها باید از مصرف بیش‌ازحد یک ویتامین پرهیز کرد. به عنوان نمونه، مصرف زیاد ویتامین A در دوران بارداری می‌تواند باعث مسمومیت شود. همچنین ویتامین‌های محلول در چربی (مانند A، D، E و K) در صورت مصرف بی‌رویه، به راحتی دفع نمی‌شوند و در بافت‌های بدن تجمع کرده و عوارض جدی ایجاد می‌کنند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              نقش پزشک در تنظیم مصرف ویتامین‌ها
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              تعیین نوع و مقدار مصرف ویتامین برای هر فرد باید تحت نظر پزشک انجام شود. خدمات ویزیت پزشک در منزل به شما کمک می‌کند تا بدون نیاز به مراجعه به مراکز درمانی، میزان نیاز بدن به ویتامین‌ها بررسی شود و در صورت نیاز، مکمل‌های دارویی به‌طور اصولی تجویز شوند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              نکات مهم درباره مصرف ویتامین‌ها
            </h2>

            <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
              <li>مصرف ویتامین‌ها باید متناسب با شرایط سنی و وضعیت سلامت باشد.</li>
              <li>مکمل‌های دارویی نباید جایگزین تغذیه سالم شوند.</li>
              <li>مصرف خودسرانه ویتامین‌ها می‌تواند خطرناک باشد.</li>
            </ul>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                خدمات ویزیت پزشک در منزل - نوید زندگی
              </h3>
              <p className="text-muted-foreground mb-4">
                برای دریافت مشاوره و خدمات پزشکی در منزل در زمینه تغذیه و تنظیم مصرف ویتامین‌ها، تیم متخصص ما آماده خدمت‌رسانی است.
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

export default VitaminsHealthPage;