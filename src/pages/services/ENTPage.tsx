import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import entImage from "@/assets/iranian-doctor-home-visit.jpg";

const ENTPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت متخصص گوش، حلق و بینی (ENT) در منزل تهران | درمان سرگیجه و مشکلات گوش | نوید زندگی"
        description="اعزام فوری متخصص ENT در منزل تهران برای معاینه گوش، حلق و بینی. تشخیص و درمان مشکلات شنوایی، سرگیجه، سینوزیت حاد و خونریزی بینی در خانه."
        keywords="ویزیت متخصص ENT در منزل، گوش حلق بینی در منزل، درمان سرگیجه، درمان ورتیگو، سینوزیت حاد، خونریزی بینی، متخصص گوش تهران"
        canonical="https://navidzendegi.ir/services/ent"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                ویزیت متخصص گوش، حلق و بینی در منزل تهران
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                خدمات تخصصی گوش، حلق و بینی در منزل برای بیماران سرگیجه و کسانی که نمی‌توانند به کلینیک مراجعه کنند. متخصص ENT به منزل شما می‌آید و معاینات دقیق و درمان‌های لازم را در محیط آرام خانه انجام می‌دهد.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={entImage} 
                alt="ویزیت متخصص گوش، حلق و بینی در منزل تهران"
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
              خدمات متخصص گوش، حلق و بینی در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              متخصص ENT در خانه طیف وسیعی از بیماری‌ها و مشکلات مربوط به گوش، حلق و بینی را تشخیص و درمان می‌کند:
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              گوش و شنوایی
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>معاینه گوش:</strong> بررسی دقیق گوش با تجهیزات پزشکی تخصصی.
              </li>
              <li className="text-base text-foreground">
                <strong>درمان سرگیجه و ورتیگو:</strong> تشخیص و درمان انواع سرگیجه‌های ناشی از مشکلات گوش داخلی.
              </li>
              <li className="text-base text-foreground">
                <strong>درمان عفونت گوش:</strong> تشخیص و درمان عفونت‌های گوش میانی و خارجی.
              </li>
              <li className="text-base text-foreground">
                <strong>برداشتن جرم گوش:</strong> پاکسازی ایمن و تخصصی گوش در منزل.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              حلق و حنجره
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>عفونت حلق:</strong> تشخیص و درمان فارنژیت، تونسیلیت و سایر عفونت‌های حلق.
              </li>
              <li className="text-base text-foreground">
                <strong>مشکلات بلع:</strong> ارزیابی و راهنمایی تخصصی برای مشکلات قورت دادن.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              بینی و سینوس
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>سینوزیت حاد:</strong> تشخیص و درمان عفونت‌های سینوسی.
              </li>
              <li className="text-base text-foreground">
                <strong>خونریزی بینی:</strong> کنترل و درمان خونریزی بینی.
              </li>
              <li className="text-base text-foreground">
                <strong>مشکلات بویایی:</strong> ارزیابی و درمان اختلالات حس بویایی.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مزایای ویزیت متخصص ENT در منزل
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>راحتی بیماران سرگیجه:</strong> بیماران با ورتیگو نیازی به جابجایی و مراجعه دشوار به کلینیک ندارند.
              </li>
              <li className="text-base text-foreground">
                <strong>درمان سریع:</strong> تشخیص و شروع درمان بدون تاخیر در محیط آرام خانه.
              </li>
              <li className="text-base text-foreground">
                <strong>صرفه‌جویی در زمان:</strong> بدون نیاز به انتظار طولانی در مطب یا کلینیک.
              </li>
              <li className="text-base text-foreground">
                <strong>معاینه دقیق:</strong> استفاده از تجهیزات پزشکی تخصصی برای معاینه در منزل.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مناطق تحت پوشش اعزام متخصص ENT در منزل
            </h2>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              خدمات ما شامل تمامی مناطق تهران می‌شود. تیم نوید زندگی آماده اعزام فوری متخصص گوش، حلق و بینی به منزل شما در شمال، جنوب، شرق و غرب تهران است.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              ویزیت متخصص گوش، حلق و بینی در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای تشخیص و درمان مشکلات گوش، حلق و بینی در محیط آرام خانه، همین حالا با نوید زندگی تماس بگیرید.
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

export default ENTPage;