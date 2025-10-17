import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import cardiacImage from "@/assets/iranian-cardiology-home.jpg";

const EchoECGPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="اکو قلب در منزل تهران (اکوکاردیوگرافی) | نوار قلب (ECG) در خانه | نوید زندگی"
        description="انجام اکو قلب در منزل تهران و نوار قلب (ECG) فوری با دستگاه‌های پرتابل و پیشرفته. تفسیر نتایج توسط متخصص قلب در منزل. آسایش و دقت در تشخیص بیماری‌های قلبی."
        keywords="اکو قلب در منزل، نوار قلب در منزل، اکوکاردیوگرافی در خانه، ECG در منزل، متخصص قلب تهران، تست قلب منزل"
        canonical="https://navidzendegi.ir/services/echo-ecg"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                اکو قلب و نوار قلب (ECG) در منزل تهران (خدمات کامل تشخیصی قلب)
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                تشخیص دقیق بیماری‌های قلبی نیازمند تجهیزات پیشرفته است. برای بیماران قلبی، سالمندان یا افرادی که شرایط انتقال به کلینیک‌های شلوغ را ندارند، نوید زندگی با اعزام کادر متخصص و دستگاه‌های پرتابل، خدمات اکو قلب و نوار قلب (ECG) را مستقیماً در خانه شما فراهم می‌کند. این خدمات تضمین می‌کند که پایش سلامت قلب شما بدون هیچگونه استرس و تأخیری انجام شود.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={cardiacImage} 
                alt="اکو قلب و نوار قلب در منزل تهران"
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
              خدمات تخصصی نوار قلب (ECG) در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              نوار قلب یا الکتروکاردیوگرام (ECG/EKG) یکی از اساسی‌ترین تست‌ها برای ارزیابی عملکرد قلب است.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>انجام نوار قلب فوری:</strong> ثبت فعالیت الکتریکی قلب برای تشخیص آریتمی‌ها، مشکلات هدایتی و علائم حمله قلبی.
              </li>
              <li className="text-base text-foreground">
                <strong>تفسیر توسط متخصص:</strong> نوار قلب ثبت شده بلافاصله توسط متخصص قلب و عروق تفسیر شده و نتایج آن در اختیار پزشک معالج قرار می‌گیرد.
              </li>
              <li className="text-base text-foreground">
                <strong>پایش آریتمی:</strong> استفاده از نوار قلب برای بررسی و پیگیری نامنظمی‌های ضربان قلب.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خدمات تخصصی اکو قلب (اکوکاردیوگرافی) در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              اکوکاردیوگرافی یک سونوگرافی تخصصی از قلب است که ساختار و عملکرد قلب را به صورت تصویری نشان می‌دهد.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>ارائه اکو قلب پرتابل:</strong> انجام اکوکاردیوگرافی با دستگاه‌های پیشرفته و قابل حمل توسط کارشناس یا دکتر قلب در منزل.
              </li>
              <li className="text-base text-foreground">
                <strong>بررسی ساختار قلب:</strong> ارزیابی اندازه اتاقک‌های قلب، عملکرد دریچه‌ها و ضخامت دیواره‌های قلبی.
              </li>
              <li className="text-base text-foreground">
                <strong>تشخیص نارسایی قلبی:</strong> بررسی قدرت پمپاژ قلب (EF) که برای تشخیص و مدیریت نارسایی قلبی حیاتی است.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مزایای انتخاب نوید زندگی برای تست‌های قلبی در خانه
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>دقت تشخیص بالا:</strong> استفاده از دستگاه‌های استاندارد پزشکی که نتایجی مشابه کلینیک‌ها ارائه می‌دهند.
              </li>
              <li className="text-base text-foreground">
                <strong>کاهش استرس بیمار:</strong> معاینه در محیط آشنای خانه، اضطراب بیمار را کاهش داده و به ثبت نوار قلب و اکوی دقیق‌تر کمک می‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>عدم نیاز به جابجایی:</strong> ایده‌آل برای بیماران بدحال، سالمندان و افرادی که تحت مراقبت‌های ویژه هستند.
              </li>
              <li className="text-base text-foreground">
                <strong>اعزام فوری:</strong> امکان اعزام سریع در مواقعی که نیاز به ارزیابی فوری وضعیت قلب وجود دارد.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              اکو قلب و نوار قلب در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای ارزیابی دقیق سلامت قلب خود یا عزیزانتان، همین حالا برای رزرو اکو قلب و نوار قلب (ECG) در منزل با نوید زندگی تماس بگیرید.
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

export default EchoECGPage;
