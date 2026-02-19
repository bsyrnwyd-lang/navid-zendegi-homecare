import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import cardiologyHomeServicesImage from "@/assets/cardiology-home-services.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import cardiologyHomeImage from "@/assets/cardiology-home-visit.jpg";
const CardiologyHomeServicesPage = () => {
  const faqs = [{
    question: "آیا دستگاه‌های نوار قلب و اکو پرتابل دقیق هستند؟",
    answer: "بله، دستگاه‌های پرتابل مورد استفاده در نوید زندگی از تکنولوژی‌های پیشرفته برخوردارند و نتایج آن‌ها با دقت بالا قابل مقایسه با دستگاه‌های بیمارستانی است."
  }, {
    question: "آیا متخصص قلب می‌تواند نسخه و دارو تجویز کند؟",
    answer: "بله، متخصص قلب اعزامی پس از معاینه و بررسی نتایج تست‌ها، نسخه درمانی کامل تجویز می‌کند و آموزش‌های لازم را به بیمار و خانواده ارائه می‌دهد."
  }, {
    question: "زمان انتظار برای اعزام پزشک چقدر است؟",
    answer: "تیم نوید زندگی در کوتاه‌ترین زمان ممکن (معمولاً ۱ تا ۳ ساعت) متخصص قلب و تجهیزات را به منزل شما اعزام می‌کند."
  }, {
    question: "آیا این خدمات در کرج هم ارائه می‌شود؟",
    answer: "بله، تمامی خدمات قلبی شامل ویزیت متخصص، نوار قلب و اکو در تمام مناطق تهران و کرج ارائه می‌شود."
  }, {
    question: "هزینه خدمات قلبی در منزل چقدر است؟",
    answer: "هزینه خدمات بسته به نوع سرویس متفاوت است. برای اطلاع از تعرفه‌های دقیق با شماره 09386117912 تماس بگیرید."
  }];
  const relatedArticles = [{
    title: "علائم سکته قلبی",
    description: "علائم هشداردهنده سکته قلبی را بشناسید",
    image: ecgHomeImage,
    link: "/articles/heart-attack-symptoms",
    category: "قلب و عروق"
  }, {
    title: "تپش قلب و علل آن",
    description: "علل تپش قلب و راه‌های درمان آن",
    image: echoHomeImage,
    link: "/articles/heart-palpitations",
    category: "قلب و عروق"
  }, {
    title: "فشار خون بالا",
    description: "همه چیز درباره کنترل فشار خون",
    image: cardiologyHomeImage,
    link: "/articles/high-blood-pressure",
    category: "قلب و عروق"
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead title="ویزیت متخصص قلب، نوار قلب و اکو در منزل تهران و کرج | نوید زندگی" description="آیا به دنبال ویزیت متخصص قلب، نوار قلب یا اکو در منزل هستید؟ نوید زندگی تخصصی‌ترین خدمات قلبی را با تجهیزات پیشرفته در تهران و کرج ارائه می‌دهد." keywords="اکو قلب در منزل تهران، ویزیت متخصص قلب در منزل کرج، نوار قلب در خانه، دکتر قلب در منزل، اکوکاردیوگرافی در منزل" canonical="https://navidzendegi.com/articles/cardiology-home-services" ogType="article" author="نوید زندگی" publishedTime="2025-06-20" modifiedTime="2025-06-20" />
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 pt-4">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"خدمات قلبی در منزل",url:"/articles/cardiology-home-services"}]} />
        </div>
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                آیا ویزیت متخصص قلب، نوار قلب و اکو در منزل امکان‌پذیر است؟
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                بیماری‌های قلبی و عروقی شوخی‌بردار نیستند و زمان در تشخیص آن‌ها نقش حیاتی ایفا می‌کند. بسیاری از بیماران قلبی به دلیل ضعف جسمانی، کهولت سن یا ترافیک سنگین کلان‌شهرها، توانایی مراجعه حضوری به مطب‌ها را ندارند. پاسخ مرکز نوید زندگی به این سوال «بله» است. ما با بهره‌گیری از تکنولوژی‌های پرتابل، تمام تجهیزات تشخیصی قلب را به بالین شما در تهران و کرج می‌آوریم.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img src={cardiologyHomeServicesImage} alt="ویزیت متخصص قلب در منزل تهران و کرج" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
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
              ۱. ویزیت متخصص قلب در منزل؛ دقت بیمارستانی در آرامش خانه
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              برخلاف تصور عمومی، ویزیت قلب در منزل فقط یک چک‌آپ ساده نیست. متخصص قلب و عروق اعزامی از سوی نوید زندگی، با سابقه درخشان در بیمارستان‌های معتبر، تمام مراحل معاینه را با دقت انجام می‌دهد:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">بررسی دقیق سوابق پزشکی و داروهای مصرفی.</li>
              <li className="text-base text-foreground">معاینه فیزیکی، گوش دادن به صدای قلب و ریه.</li>
              <li className="text-base text-foreground">کنترل فشار خون و علائم حیاتی.</li>
              <li className="text-base text-foreground">ارائه نسخه درمانی و آموزش‌های لازم به خانواده بیمار.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۲. نوار قلب (ECG) در منزل؛ سریع و دقیق
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              نوار قلب یکی از ابتدایی‌ترین و در عین حال حیاتی‌ترین تست‌ها برای تشخیص آریتمی (نامنظمی ضربان) و گرفتگی‌های قلبی است.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تجهیزات ما:</strong> دستگاه‌های نوار قلب پرتابل ما با دقت ۱۲ کاناله، نتایجی دقیق و فوری ارائه می‌دهند.
              </li>
              <li className="text-base text-foreground">
                <strong>مزیت:</strong> در موارد اورژانسی که بیمار دچار درد قفسه سینه است، انجام سریع نوار قلب در منزل می‌تواند از بروز سکته قلبی جلوگیری کند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۳. اکوکاردیوگرافی (اکو قلب) در منزل؛ مشاهده مستقیم عملکرد قلب
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              اکو قلب در واقع سونوگرافی قلب است که ساختار، دریچه‌ها و قدرت پمپاژ قلب را نشان می‌دهد.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>آیا دستگاه‌های پرتابل دقیق هستند؟</strong> بله؛ دستگاه‌های اکو پرتابل مورد استفاده در نوید زندگی، از تکنولوژی‌های پیشرفته برخوردارند و تمامی جزئیات دریچه‌ای و نارسایی‌ها را به وضوح نشان می‌دهند.
              </li>
              <li className="text-base text-foreground">
                <strong>بدون نیاز به جابه‌جایی:</strong> برای سالمندانی که دچار نارسایی قلبی هستند، جابه‌جایی و پله‌های مراکز درمانی می‌تواند خطرناک باشد؛ اکو در منزل این ریسک را حذف می‌کند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا خدمات قلبی «نوید زندگی» در تهران و کرج؟
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>پوشش سراسری تهران و کرج:</strong> فرقی نمی‌کند در شمال تهران باشید یا در محله‌های مختلف کرج؛ تیم ما در کمترین زمان ممکن اعزام می‌شود.
              </li>
              <li className="text-base text-foreground">
                <strong>حذف استرس و ترافیک:</strong> استرس ناشی از ترافیک و شلوغی مراکز درمانی، خود یکی از عوامل تشدید بیماری‌های قلبی است. ما محیط امن خانه را برای شما مهیا می‌کنیم.
              </li>
              <li className="text-base text-foreground">
                <strong>تفسیر آنی نتایج:</strong> متخصص قلب بلافاصله پس از انجام نوار قلب و اکو، نتایج را تفسیر کرده و اقدامات درمانی را آغاز می‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>کاهش خطر عفونت:</strong> برای بیماران قلبی که سیستم ایمنی حساسی دارند، دوری از محیط‌های بیمارستانی (به‌ویژه در فصول سرد) یک ضرورت است.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه زمانی باید با ما تماس بگیرید؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              اگر خود یا عزیزانتان با موارد زیر روبرو هستید، بدون جابه‌جا کردن بیمار با ما تماس بگیرید:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">درد یا فشار در قفسه سینه.</li>
              <li className="text-base text-foreground">تنگی نفس ناگهانی یا هنگام فعالیت.</li>
              <li className="text-base text-foreground">تپش قلب شدید یا نامنظم.</li>
              <li className="text-base text-foreground">نیاز به چک‌آپ دوره‌ای برای بیماران دیابتی یا دارای فشار خون بالا.</li>
              <li className="text-base text-foreground">نیاز به گواهی پزشکی برای جراحی‌های دیگر (مشاوره قلب قبل از عمل).</li>
            </ul>

            {/* Warning Box */}
            
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              رزرو نوبت ویزیت قلب در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              سلامت قلب شما، نباید قربانی ترافیک و دوری راه شود. نوید زندگی با تیمی متشکل از بهترین متخصصین قلب و مدرن‌ترین تجهیزات، مراقبت‌های ویژه بیمارستانی را به خانه شما در تهران و کرج آورده است.
            </p>
            <a href="tel:09386117912" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <RelatedArticles articles={relatedArticles} />
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
    </div>;
};
export default CardiologyHomeServicesPage;