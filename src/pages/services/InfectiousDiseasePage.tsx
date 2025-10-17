import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import infectiousImage from "@/assets/infectious-disease.jpg";

const InfectiousDiseasePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت متخصص عفونی در منزل تهران | تشخیص و درمان تب، کرونا و عفونت‌های پیچیده | نوید زندگی"
        description="اعزام فوری متخصص عفونی در منزل تهران برای تشخیص و درمان تب‌های طولانی، عفونت‌های ریوی، زخم و کرونا. مدیریت آنتی‌بیوتیک تراپی در خانه."
        keywords="ویزیت متخصص عفونی در منزل، دکتر عفونی در خانه، درمان تب طولانی، کرونا در منزل، عفونت ریوی، آنتی‌بیوتیک تراپی، متخصص عفونی تهران"
        canonical="https://navidzendegi.ir/services/infectious-disease"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                ویزیت متخصص عفونی در منزل تهران (مدیریت تب‌های نامشخص و عفونت‌های پیچیده)
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                بیماری‌های عفونی می‌توانند به سرعت وضعیت بیمار را تغییر دهند و نیازمند تشخیص سریع و دقیق هستند. نوید زندگی با اعزام متخصص عفونی در منزل تهران، خدمات تخصصی خود را برای تشخیص، مدیریت و درمان انواع عفونت‌ها در محیط امن خانه شما ارائه می‌دهد. این خدمات به خصوص برای بیماران دارای نقص ایمنی، سالمندان یا افرادی که شرایط حاد دارند و نباید در محیط‌های پرخطر بیمارستانی قرار گیرند، ضروری است.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={infectiousImage} 
                alt="ویزیت متخصص عفونی در منزل تهران"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center mb-8">
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              موارد ضروری برای استفاده از متخصص عفونی در منزل
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تب‌های طولانی و با منشأ نامشخص:</strong> تشخیص دلیل تب‌هایی که به درمان‌های عمومی پاسخ نمی‌دهند.
              </li>
              <li className="text-base text-foreground">
                <strong>عفونت‌های پیچیده:</strong> مدیریت عفونت‌های دستگاه تنفسی (مانند ذات‌الریه)، دستگاه ادراری و عفونت‌های زخم.
              </li>
              <li className="text-base text-foreground">
                <strong>مشاوره و درمان بیماری‌های واگیر:</strong> تشخیص و مدیریت بیماری‌های ویروسی مانند آنفولانزا، کرونا و سایر بیماری‌های واگیر.
              </li>
              <li className="text-base text-foreground">
                <strong>کنترل آنتی‌بیوتیک تراپی:</strong> ارزیابی نیاز به آنتی‌بیوتیک‌های وریدی و مدیریت دوره درمان در خانه.
              </li>
              <li className="text-base text-foreground">
                <strong>عفونت در بیماران نقص ایمنی:</strong> مراقبت ویژه از بیماران دیابتی، سرطانی یا HIV مثبت که به عفونت‌ها حساس هستند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خدمات تخصصی ارائه شده توسط متخصص عفونی در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              دکتر عفونی در منزل ما، با تجهیزات لازم، این خدمات را در محل شما ارائه می‌دهد:
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              تشخیص و برنامه‌ریزی درمانی
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>معاینه کامل و شرح حال‌گیری تخصصی:</strong> بررسی دقیق علائم برای رسیدن به تشخیص افتراقی درست.
              </li>
              <li className="text-base text-foreground">
                <strong>تفسیر آزمایش‌ها:</strong> بررسی و تفسیر نتایج آزمایش‌های کشت خون، ادرار و سایر نمونه‌ها و مشاوره در مورد آنتی‌بیوتیک مقاومتی.
              </li>
              <li className="text-base text-foreground">
                <strong>شروع آنتی‌بیوتیک تراپی:</strong> تجویز و شروع درمان‌های دارویی، از جمله آنتی‌بیوتیک‌های تزریقی در منزل.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              خدمات مدیریت عفونت در منزل
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>مدیریت درمان کرونا و سایر بیماری‌های تنفسی:</strong> پایش علائم تنفسی و سطح اکسیژن، ویزیت متخصص و نظارت بر قرنطینه در منزل.
              </li>
              <li className="text-base text-foreground">
                <strong>درمان عفونت زخم:</strong> مدیریت زخم‌های عفونی و عفونت‌های پس از جراحی با همکاری تیم پرستاری.
              </li>
              <li className="text-base text-foreground">
                <strong>تزریق واکسن‌های تخصصی:</strong> ارائه خدمات تزریق واکسن‌های مورد نیاز برای افراد در معرض خطر.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مزایای دریافت خدمات تخصصی عفونی در خانه
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>کاهش خطر انتقال عفونت:</strong> جلوگیری از ورود بیماران عفونی به محیط‌های عمومی و کاهش خطر سرایت.
              </li>
              <li className="text-base text-foreground">
                <strong>مراقبت ایمن برای بیماران ضعیف:</strong> بهترین گزینه برای سالمندان یا بیماران دارای بیماری زمینه‌ای که نباید در معرض آلودگی‌های بیمارستانی قرار گیرند.
              </li>
              <li className="text-base text-foreground">
                <strong>پایش مستمر:</strong> نظارت دقیق بر پاسخ بدن به آنتی‌بیوتیک‌ها و تنظیم سریع دوز دارو.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              ویزیت متخصص عفونی در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای تشخیص دقیق و مدیریت مؤثر بیماری‌های عفونی و تب‌های طولانی، همین حالا برای ویزیت متخصص عفونی در منزل با نوید زندگی تماس بگیرید.
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

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default InfectiousDiseasePage;