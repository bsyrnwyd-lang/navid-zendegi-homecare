import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import nursingImage from "@/assets/nursing-home-care.jpg";

const NursingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="پرستاری در منزل تهران (شبانه روزی) | تزریقات، سوند و مراقبت‌های ویژه در خانه | نوید زندگی"
        description="پرستار در منزل تهران را شبانه روزی بخواهید. اعزام کادر پرستاری مجرب برای تزریقات، سرم تراپی، تعویض پانسمان، مراقبت از سالمند و مراقبت‌های پس از جراحی در خانه."
        keywords="پرستاری در منزل، پرستار در خانه تهران، تزریقات در منزل، سرم تراپی، مراقبت از سالمند، پانسمان در منزل، پرستار شبانه روزی"
        canonical="https://navidzendegi.ir/services/nursing"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                خدمات تخصصی پرستاری در منزل تهران (اعزام پرستار شبانه روزی)
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                پرستاری در منزل یکی از مؤثرترین روش‌ها برای تضمین بهبودی سریع‌تر، کاهش خطر عفونت و حفظ آرامش بیمار است. نوید زندگی با اعزام کادر پرستاری مجرب و دارای مجوز، کلیه خدمات درمانی و مراقبتی مورد نیاز را به صورت شبانه روزی در محیط راحت و امن خانه شما ارائه می‌دهد. تخصص ما در ارائه خدمات بالینی دقیق و دلسوزانه است.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={nursingImage} 
                alt="پرستاری در منزل تهران - اعزام پرستار شبانه روزی"
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
              خدمات کلیدی پرستاری که در خانه ارائه می‌دهیم
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              تیم پرستاری ما طیف گسترده‌ای از اقدامات پزشکی و مراقبتی را با حفظ بالاترین استانداردها انجام می‌دهد:
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              خدمات تزریقات و دارورسانی
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تزریقات در منزل:</strong> انجام انواع تزریقات عضلانی و زیرجلدی (مانند انسولین و سایر داروها) با دقت و بهداشت کامل.
              </li>
              <li className="text-base text-foreground">
                <strong>سرم تراپی (تزریق سرم):</strong> نصب و مدیریت سرم درمانی برای جبران آب بدن، دارورسانی یا تقویت سیستم ایمنی.
              </li>
              <li className="text-base text-foreground">
                <strong>آنتی‌بیوتیک تراپی وریدی:</strong> مدیریت تزریق آنتی‌بیوتیک‌های وریدی طبق دستور پزشک برای درمان عفونت‌های پیچیده.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              مراقبت‌های ویژه و تخصصی
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>مدیریت زخم و پانسمان:</strong> تعویض پانسمان‌های ساده و تخصصی (مانند پانسمان زخم بستر و زخم‌های دیابتی) برای تسریع بهبود و جلوگیری از عفونت.
              </li>
              <li className="text-base text-foreground">
                <strong>سوندگذاری و لوله گذاری:</strong> انجام تخصصی سوندگذاری ادراری، نازوگاستریک (NG-Tube) و مراقبت از آن‌ها.
              </li>
              <li className="text-base text-foreground">
                <strong>کنترل علائم حیاتی:</strong> پایش دقیق فشار خون، قند خون، اکسیژن و دمای بدن بیمار و گزارش به پزشک.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              مراقبت‌های پس از جراحی و سالمندی
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>مراقبت‌های پس از جراحی:</strong> کنترل علائم عفونت، کشیدن بخیه، و مدیریت درد در دوره نقاهت.
              </li>
              <li className="text-base text-foreground">
                <strong>مراقبت از سالمند:</strong> کمک به سالمندان در امور بهداشت فردی، تغذیه، جابجایی و جلوگیری از زمین خوردن.
              </li>
              <li className="text-base text-foreground">
                <strong>فیزیوتراپی اولیه:</strong> انجام تمرینات حرکتی ساده زیر نظر پرستار برای جلوگیری از خشکی مفاصل.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا برای خدمات پرستاری در تهران به نوید زندگی اعتماد کنیم؟
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>اعزام پرستار متخصص:</strong> تمامی پرسنل ما دارای مدارک رسمی پرستاری و سابقه کار در محیط‌های بالینی هستند.
              </li>
              <li className="text-base text-foreground">
                <strong>پوشش ۲۴ ساعته:</strong> ارائه خدمات پرستاری در منزل شبانه روزی برای مواقع اضطراری و نیازهای مداوم.
              </li>
              <li className="text-base text-foreground">
                <strong>صرفه جویی در زمان و هزینه:</strong> حذف هزینه‌های جانبی ویزیت و بیمارستان و تسهیل روند درمان.
              </li>
              <li className="text-base text-foreground">
                <strong>تجهیزات استریل:</strong> استفاده از تجهیزات پزشکی استاندارد و یکبار مصرف برای تضمین سلامت بیمار.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              پرستاری در منزل تهران
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای اعزام فوری پرستار مجرب و دریافت خدمات تزریقات، سرم تراپی یا مراقبت ویژه در منزل، همین حالا با نوید زندگی تماس بگیرید.
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

export default NursingPage;