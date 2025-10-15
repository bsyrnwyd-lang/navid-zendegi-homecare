import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import StructuredData from "@/components/StructuredData";
import { Phone } from "lucide-react";
import urologyImage from "@/assets/urology.jpg";

const UrologyPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "خدمات", url: "/#services" },
    { name: "ویزیت متخصص اورولوژی در منزل", url: "/services/urology" }
  ];

  const faqs = [
    {
      question: "سوندگذاری در منزل چگونه انجام می‌شود؟",
      answer: "متخصص اورولوژی با تجهیزات استریل و استاندارد به منزل شما مراجعه کرده و با رعایت کامل نکات بهداشتی، سوندگذاری را انجام می‌دهد."
    },
    {
      question: "آیا خدمات اورولوژی در تمام مناطق تهران ارائه می‌شود؟",
      answer: "بله، نوید زندگی در تمامی مناطق تهران خدمات متخصص اورولوژی در منزل را ارائه می‌دهد."
    },
    {
      question: "چه زمانی باید متخصص اورولوژی را در منزل بخواهم؟",
      answer: "در صورت احتباس ادرار، عفونت‌های شدید ادراری، نیاز به سوندگذاری یا مشکلات حاد پروستات، می‌توانید متخصص اورولوژی را در منزل درخواست کنید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ویزیت متخصص اورولوژی در منزل تهران | سوندگذاری و درمان مشکلات مجاری ادراری | نوید زندگی"
        description="متخصص اورولوژی در منزل تهران را برای تشخیص و درمان مشکلات کلیه، مثانه، پروستات و مجاری ادراری بخواهید. اعزام فوری جهت سوندگذاری در منزل و مشاوره تخصصی."
        keywords="متخصص اورولوژی در منزل تهران, سوندگذاری در منزل, درمان مشکلات ادراری, ویزیت اورولوژی در خانه, دکتر اورولوژی در منزل, مشکلات پروستات, عفونت ادراری"
        canonical="https://navidzendegi.ir/services/urology"
        ogType="website"
      />
      <StructuredData
        breadcrumbs={breadcrumbItems}
        service={{
          name: "ویزیت متخصص اورولوژی در منزل تهران",
          description: "خدمات تخصصی اورولوژی شامل سوندگذاری، درمان مشکلات کلیه، مثانه و پروستات در منزل",
          provider: "نوید زندگی",
          areaServed: "تهران",
          serviceType: "پزشکی"
        }}
        faqs={faqs}
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
<section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <img 
                  src={urologyImage} 
                  alt="ویزیت متخصص اورولوژی در منزل تهران"
                  className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
                />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
                ویزیت متخصص اورولوژی در منزل تهران
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                تشخیص و درمان مشکلات کلیه، پروستات و مثانه در منزل شما
              </p>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <p className="text-lg leading-relaxed text-foreground">
                  مشکلات مربوط به کلیه، مثانه، پروستات و مجاری ادراری اغلب نیازمند رسیدگی فوری و تخصصی است. نوید زندگی با اعزام متخصص اورولوژی به منزل شما، خدمات تشخیصی و درمانی کامل را در خانه شما ارائه می‌دهد.
                </p>
              </div>

              <a 
                href="tel:09386117912" 
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-bold mb-12"
              >
                <Phone className="ml-2 h-6 w-6" />
                تماس فوری: 09386117912
              </a>

              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    چه زمانی باید از خدمات متخصص اورولوژی در منزل استفاده کرد؟
                  </h2>
                  
                  <ul className="space-y-4 text-lg">
                    <li className="leading-relaxed">
                      <strong>نیاز به سوندگذاری:</strong> بیمارانی که دچار احتباس ادرار شده‌اند یا نیاز به تعویض و نصب سوند دارند
                    </li>
                    <li className="leading-relaxed">
                      <strong>مشکلات ادراری حاد:</strong> عفونت‌های شدید ادراری، خون در ادرار یا درد شدید
                    </li>
                    <li className="leading-relaxed">
                      <strong>بیماران پس از جراحی:</strong> مراقبت پس از عمل و کشیدن بخیه
                    </li>
                    <li className="leading-relaxed">
                      <strong>سالمندان:</strong> پایش منظم پروستات و مدیریت عوارض
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    خدمات ما در منزل شما
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">
                        سوندگذاری و مدیریت مشکلات مجاری ادراری
                      </h3>
                      <ul className="space-y-3 text-lg mr-6">
                        <li className="leading-relaxed">• نصب و تعویض سوند فولی</li>
                        <li className="leading-relaxed">• کشیدن سوند بعد از درمان</li>
                        <li className="leading-relaxed">• درمان عفونت‌های ادراری</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">
                        مشاوره و پایش تخصصی
                      </h3>
                      <ul className="space-y-3 text-lg mr-6">
                        <li className="leading-relaxed">• مشاوره مشکلات پروستات</li>
                        <li className="leading-relaxed">• کنترل و مدیریت سنگ کلیه و مثانه</li>
                        <li className="leading-relaxed">• بررسی مشکلات مثانه عصبی</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    چرا نوید زندگی؟
                  </h2>
                  
                  <ul className="space-y-4 text-lg">
                    <li className="leading-relaxed">
                      <strong>اعزام سریع:</strong> حضور متخصص در کوتاه‌ترین زمان
                    </li>
                    <li className="leading-relaxed">
                      <strong>تجهیزات استریل:</strong> استفاده از ابزار کاملاً استریل و استاندارد
                    </li>
                    <li className="leading-relaxed">
                      <strong>آسایش بیمار:</strong> انجام درمان در محیط آرام خانه
                    </li>
                    <li className="leading-relaxed">
                      <strong>پوشش کامل تهران:</strong> خدمات در تمامی مناطق
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              برای اعزام فوری متخصص اورولوژی تماس بگیرید
            </h2>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-bold"
            >
              <Phone className="ml-2 h-6 w-6" />
              09386117912
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default UrologyPage;