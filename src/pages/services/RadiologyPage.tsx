import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import { Phone } from "lucide-react";
import medicalEquipmentImage from "@/assets/medical-equipment.jpg";

const RadiologyPage = () => {
  const handleCall = () => {
    window.location.href = 'tel:09386117912';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="سونوگرافی در منزل تهران | رادیولوژی و تصویربرداری در خانه | نوید زندگی"
        description="انجام تخصصی سونوگرافی در منزل تهران و رادیولوژی پرتابل با دستگاه‌های پیشرفته. تفسیر نتایج توسط متخصص رادیولوژی برای تشخیص سریع و دقیق بدون نیاز به جابجایی بیمار."
        keywords="سونوگرافی در منزل، رادیولوژی در منزل، تصویربرداری پزشکی، رادیولوژی پرتابل، سونوگرافی تهران"
        canonical="https://navidzendegi.ir/services/radiology"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  خدمات رادیولوژی، سونوگرافی و تصویربرداری پزشکی در منزل تهران
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  تصویربرداری پزشکی نقش کلیدی در تشخیص سریع و دقیق بیماری‌ها دارد. برای بیمارانی که امکان حرکت ندارند، جابجایی برای انجام رادیولوژی و سونوگرافی می‌تواند خطرات و مشقات زیادی به همراه داشته باشد. نوید زندگی با اعزام تکنسین‌های مجرب و دستگاه‌های پرتابل رادیولوژی و سونوگرافی، کلیه خدمات تصویربرداری را در منزل شما ارائه می‌دهد.
                </p>
                <button 
                  onClick={handleCall}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                </button>
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

        {/* سونوگرافی Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              خدمات تخصصی سونوگرافی در منزل (توسط متخصص سونوگرافی)
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              سونوگرافی در منزل با استفاده از امواج صوتی، تصویری واضح از اندام‌ها و بافت‌های داخلی بدن ارائه می‌دهد و کاملاً بدون درد و ایمن است. این خدمات شامل موارد زیر است:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>سونوگرافی شکم و لگن:</strong> بررسی اندام‌هایی مانند کبد، کیسه صفرا، کلیه‌ها، مثانه و پروستات.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>سونوگرافی دستگاه ادراری:</strong> ارزیابی سنگ کلیه، مثانه و مشکلات مجاری ادراری.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>سونوگرافی بافت نرم:</strong> بررسی توده‌ها، آبسه‌ها و ضایعات سطحی بدن.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>سونوگرافی زنان:</strong> سونوگرافی تخصصی برای ارزیابی رحم و تخمدان‌ها (در موارد مجاز به انجام در منزل).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* رادیولوژی Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              خدمات رادیولوژی (عکس‌برداری با اشعه ایکس) پرتابل در منزل
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              برای مواردی که نیاز به عکس‌برداری با اشعه ایکس باشد، ما از دستگاه‌های رادیولوژی پرتابل استفاده می‌کنیم:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>رادیولوژی قفسه سینه:</strong> جهت تشخیص مشکلات ریوی، ذات‌الریه و ارزیابی وضعیت ریه‌ها (مثلاً در بیماران کرونایی).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>رادیولوژی استخوان و مفاصل:</strong> عکس‌برداری از دست و پا، ستون فقرات و سایر نقاط بدن برای تشخیص شکستگی‌ها، دررفتگی‌ها یا آرتروز.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>تفسیر نتایج:</strong> تصاویر ثبت شده توسط متخصص رادیولوژی بررسی و گزارش نهایی برای پزشک معالج ارسال می‌شود.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* مزایا Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              مزایای انجام سونوگرافی و رادیولوژی در خانه
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>راحتی و آسایش بیمار:</strong> حذف نیاز به حمل و نقل بیماران بدحال یا کم‌توان.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>دقت تشخیصی:</strong> استفاده از دستگاه‌های مدرن با کیفیت تصویر بالا، مشابه مراکز درمانی.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>تسریع فرآیند درمان:</strong> تشخیص سریع‌تر، امکان شروع زودهنگام درمان‌های لازم را فراهم می‌کند.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>کاهش خطر عفونت:</strong> جلوگیری از حضور بیماران در محیط‌های عمومی بیمارستان‌ها.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* فرآیند درخواست Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              فرآیند درخواست خدمات تصویربرداری در تهران
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              برای رزرو نوبت سونوگرافی در منزل یا رادیولوژی پرتابل، کافی است نسخه پزشک خود را برای کارشناسان ما ارسال کنید. تیم نوید زندگی در کوتاه‌ترین زمان، هماهنگی‌های لازم را برای اعزام پرسنل و تجهیزات تخصصی به محل شما در سراسر تهران انجام خواهد داد.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="medical-section">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              نیاز به تصویربرداری پزشکی دارید؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              برای تشخیص سریع و دقیق بیماری‌ها بدون نیاز به ترک منزل، همین حالا برای رزرو سونوگرافی و رادیولوژی در منزل با نوید زندگی تماس بگیرید.
            </p>
            <button 
              onClick={handleCall}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              رزرو نوبت: ۰۹۳۸۶۱۱۷۹۱۲
            </button>
          </div>
        </section>

      {/* Pricing Section */}
      <section className="medical-section">
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

export default RadiologyPage;