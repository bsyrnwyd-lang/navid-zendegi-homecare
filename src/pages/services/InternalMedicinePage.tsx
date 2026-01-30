import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import SEOSchema from "@/components/SEOSchema";
import InternalLinks, { cardioLinks, generalLinks, diagnosticLinks } from "@/components/InternalLinks";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import internalImage from "@/assets/internal-medicine.jpg";

const InternalMedicinePage = () => {
  const serviceLinks = [
    ...cardioLinks.slice(0, 3),
    ...generalLinks.filter(l => l.to !== "/services/internal"),
    ...diagnosticLinks.slice(0, 2),
  ];

  const faqs = [
    { question: "متخصص داخلی چه بیماری‌هایی را درمان می‌کند؟", answer: "متخصص داخلی بیماری‌های مزمن مثل دیابت، فشار خون، مشکلات تیروئید، بیماری‌های گوارشی و تنفسی را تشخیص و درمان می‌کند." },
    { question: "هزینه ویزیت متخصص داخلی در منزل چقدر است؟", answer: "هزینه ویزیت متخصص داخلی در منزل بسته به منطقه و ساعت متفاوت است. برای اطلاع از تعرفه دقیق با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید." },
    { question: "آیا آزمایش خون هم در منزل انجام می‌شود؟", answer: "بله، همراه با ویزیت متخصص داخلی امکان نمونه‌گیری و انجام آزمایش خون در منزل وجود دارد." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت متخصص داخلی در منزل تهران | نوید زندگی"
        description="اعزام فوری متخصص داخلی در منزل تهران. کنترل دیابت، فشار خون، مشکلات گوارشی و تیروئید. آزمایش در منزل. تماس: ۰۹۳۸۶۱۱۷۹۱۲"
        keywords="متخصص داخلی در منزل، دکتر داخلی تهران، ویزیت داخلی منزل، درمان دیابت، کنترل فشار خون"
        canonical="https://navidzendegi.com/services/internal"
      />
      <SEOSchema 
        type="service"
        serviceName="ویزیت متخصص داخلی در منزل تهران"
        serviceDescription="اعزام فوری متخصص داخلی در منزل تهران برای کنترل و درمان بیماری‌های مزمن"
        areaServed="تهران"
      />
      <SEOSchema type="faq" faqs={faqs} />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                ویزیت متخصص داخلی در منزل تهران (مدیریت بیماری‌های مزمن)
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                متخصص داخلی یکی از حیاتی‌ترین تخصص‌ها در حوزه پزشکی است، به ویژه برای مدیریت بیماری‌های مزمن و پیچیده. نوید زندگی با اعزام متخصص داخلی در منزل تهران، امکان کنترل دقیق بیماری‌هایی چون دیابت، فشار خون، و اختلالات تیروئید را در محیط آرام خانه فراهم می‌کند. هدف ما پایش مستمر وضعیت بیمار و جلوگیری از پیشرفت بیماری‌ها بدون نیاز به مراجعه‌های مکرر و سخت به مراکز درمانی است.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={internalImage} 
                alt="ویزیت متخصص داخلی در منزل تهران - مدیریت بیماری‌های مزمن"
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
              تخصص‌های تحت پوشش دکتر داخلی در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              متخصص داخلی در خانه طیف وسیعی از بیماری‌ها و شرایط را تحت پوشش قرار می‌دهد که از مهم‌ترین آن‌ها می‌توان به موارد زیر اشاره کرد:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>دیابت و اختلالات متابولیک:</strong> تنظیم دوز انسولین، مدیریت قند خون و جلوگیری از عوارض دیابت.
              </li>
              <li className="text-base text-foreground">
                <strong>فشار خون بالا و چربی خون:</strong> پایش دقیق فشار و تجویز داروهای لازم برای کنترل بیماری‌های عروقی.
              </li>
              <li className="text-base text-foreground">
                <strong>بیماری‌های گوارشی:</strong> تشخیص و درمان مشکلات معده، روده، کبد و کیسه صفرا.
              </li>
              <li className="text-base text-foreground">
                <strong>بیماری‌های تنفسی:</strong> مدیریت آسم، برونشیت و عفونت‌های ریوی غیرحاد.
              </li>
              <li className="text-base text-foreground">
                <strong>اختلالات تیروئید و غدد:</strong> تنظیم هورمون‌ها و پیگیری وضعیت غدد درون‌ریز.
              </li>
              <li className="text-base text-foreground">
                <strong>عفونت‌های عمومی و تب‌های طولانی:</strong> تشخیص منشأ تب و عفونت‌های داخلی بدن.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مزایای دریافت خدمات بیماری‌های داخلی در خانه
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>پایش منظم و دقیق:</strong> امکان انجام چکاپ‌ها و آزمایش‌های دوره‌ای برای کنترل وضعیت بیمار بدون تعویق.
              </li>
              <li className="text-base text-foreground">
                <strong>مشاوره تغذیه و سبک زندگی:</strong> دریافت توصیه‌های لازم برای مدیریت بیماری‌های مزمن از متخصص در محیط زندگی بیمار.
              </li>
              <li className="text-base text-foreground">
                <strong>کاهش عوارض:</strong> مدیریت بهتر بیماری‌های مزمن، خطر بروز حملات قلبی، سکته مغزی و سایر عوارض را کاهش می‌دهد.
              </li>
              <li className="text-base text-foreground">
                <strong>انجام آزمایش در محل:</strong> امکان نمونه‌گیری آزمایشگاهی و تفسیر نتایج توسط متخصص داخلی در همان منزل.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مناطق تحت پوشش اعزام دکتر داخلی در منزل
            </h2>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              خدمات ما شامل تمامی مناطق تهران می‌شود. تیم نوید زندگی آماده اعزام فوری متخصص داخلی به منزل شما در شمال، جنوب، شرق و غرب تهران است.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              ویزیت متخصص داخلی در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای مدیریت حرفه‌ای و کنترل دقیق بیماری‌های مزمن، همین حالا برای ویزیت متخصص داخلی در منزل با نوید زندگی تماس بگیرید و آرامش را به خانه خود بیاورید.
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

        {/* Internal Links Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <InternalLinks 
              title="خدمات مرتبط در منزل" 
              links={serviceLinks}
            />
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">مقالات مرتبط</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li><Link to="/articles/diabetes" className="text-primary hover:underline text-sm">دیابت و کنترل قند خون</Link></li>
                <li><Link to="/articles/high-blood-pressure" className="text-primary hover:underline text-sm">فشار خون بالا</Link></li>
                <li><Link to="/articles/cholesterol-test" className="text-primary hover:underline text-sm">آزمایش کلسترول</Link></li>
                <li><Link to="/articles/vitamins-health" className="text-primary hover:underline text-sm">ویتامین‌ها و سلامتی</Link></li>
              </ul>
            </div>
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

export default InternalMedicinePage;