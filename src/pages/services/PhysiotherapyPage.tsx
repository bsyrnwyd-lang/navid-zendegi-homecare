import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import physiotherapyImage from "@/assets/physiotherapy.jpg";

const PhysiotherapyPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqItems = [
    {
      question: "فیزیوتراپی در منزل چگونه انجام می‌شود؟",
      answer: "فیزیوتراپیست مجرب با تجهیزات لازم به منزل شما مراجعه کرده، ابتدا یک ارزیابی جامع از وضعیت شما انجام می‌دهد و سپس برنامه درمانی شخصی‌سازی شده‌ای برای شما تنظیم می‌کند. جلسات درمانی شامل تمرینات تقویتی، کششی، تعادلی و استفاده از دستگاه‌های فیزیوتراپی است."
    },
    {
      question: "چه بیماری‌هایی با فیزیوتراپی در منزل قابل درمان است؟",
      answer: "فیزیوتراپی در منزل برای توانبخشی سکته مغزی، بازیابی پس از جراحی ارتوپدی (تعویض مفصل)، کمردرد، گردن درد، سیاتیک، آرتروز، درمان پارکینسون، MS، آسیب‌های نخاعی و توانبخشی تنفسی مفید است."
    },
    {
      question: "آیا فیزیوتراپیست دستگاه‌های لازم را به منزل می‌آورد؟",
      answer: "بله، فیزیوتراپیست‌های نوید زندگی تجهیزات پیشرفته مانند دستگاه TENS، EMS، اولتراسوند، لیزر درمانی پرتابل و ابزارهای تمرینی تخصصی را به همراه خود به منزل شما می‌آورند."
    },
    {
      question: "فیزیوتراپی در منزل برای سالمندان مناسب است؟",
      answer: "بله، فیزیوتراپی در منزل برای سالمندان بسیار مناسب است. این روش استرس جابجایی را حذف کرده و امکان درمان در محیطی آشنا و آرام را فراهم می‌کند. همچنین ریسک سقوط و عفونت‌های بیمارستانی کاهش می‌یابد."
    },
    {
      question: "چند جلسه فیزیوتراپی نیاز دارم؟",
      answer: "تعداد جلسات بسته به نوع بیماری، شدت آن و پاسخ بدن به درمان متفاوت است. معمولاً برنامه درمانی بین ۱۰ تا ۳۰ جلسه متغیر است که فیزیوتراپیست پس از ارزیابی اولیه، تعداد دقیق جلسات را تعیین می‌کند."
    },
    {
      question: "آیا فیزیوتراپی در منزل در تمام مناطق تهران ارائه می‌شود؟",
      answer: "بله، نوید زندگی خدمات فیزیوتراپی در منزل را در تمام مناطق تهران شامل شمال، غرب، شرق و مرکز تهران ارائه می‌دهد. برای هماهنگی با ما تماس بگیرید."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="فیزیوتراپی در منزل تهران: بهترین فیزیوتراپیست برای سکته مغزی و ارتوپدی - نوید زندگی"
        description="خدمات تخصصی فیزیوتراپی در منزل تهران توسط فیزیوتراپیست‌های مجرب. توانبخشی سکته مغزی، بازیابی پس از جراحی، درمان کمردرد و گردن‌درد"
        keywords="فیزیوتراپی در منزل تهران, فیزیوتراپیست در منزل, توانبخشی سکته مغزی, فیزیوتراپی در خانه, درمان کمردرد در منزل"
        canonical="https://navidzendegi.com/services/physiotherapy"
      />
      <Header />
      <FloatingContact />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              فیزیوتراپی در منزل تهران: تخصصی‌ترین خدمات توانبخشی و درمانی در خانه شما
            </h1>
            <div className="flex flex-col gap-2 text-muted-foreground text-lg mb-6">
              <p>ارائه‌دهنده: نوید زندگی</p>
              <p>آخرین به‌روزرسانی: ۲ بهمن ۱۴۰۳</p>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              آیا به دنبال بهبود دامنه حرکتی، کاهش درد، یا بازیابی توانایی‌های حرکتی پس از جراحی یا آسیب هستید؟ فیزیوتراپی در منزل بهترین راهکار برای بیمارانی است که نیاز به محیطی آرام و بدون استرس برای توانبخشی دارند. نوید زندگی با اعزام فیزیوتراپیست‌های مجرب و متخصص به کلیه مناطق تهران، برنامه‌های درمانی کاملاً شخصی‌سازی شده را ارائه می‌دهد.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src={physiotherapyImage}
              alt="فیزیوتراپی در منزل تهران - خدمات توانبخشی تخصصی"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
              چرا فیزیوتراپی در منزل بهترین انتخاب برای شماست؟
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              انتخاب خدمات فیزیوتراپی در خانه، به ویژه در تهران، مزایای بالینی و لجستیکی قابل توجهی دارد که فرآیند بهبودی شما را تسریع می‌بخشد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              ۱. محیط درمانی اختصاصی و آرامش‌بخش
            </h3>
            <ul className="list-disc pr-6 mb-6 space-y-3">
              <li className="text-lg leading-relaxed text-foreground">
                <strong>کاهش ریسک و استرس:</strong> حذف استرس ناشی از جابجایی، ترافیک و خطرات محیطی، به‌ویژه برای <a href="/articles/elderly-care-guide" className="text-primary hover:underline">بیماران سالمند</a>، <a href="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</a> یا پس از جراحی ارتوپدی.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>برنامه درمانی شخصی‌سازی شده:</strong> تمرینات فیزیوتراپی به طور مستقیم با توجه به محیط خانه و چالش‌های واقعی زندگی روزمره شما (مانند بالا رفتن از پله‌ها یا استفاده از حمام) تنظیم می‌شود.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              ۲. تخصص در توانبخشی بیماری‌های مزمن و حاد
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              خدمات ما توسط فیزیوتراپیست‌هایی ارائه می‌شود که در زمینه‌های کلیدی زیر تخصص دارند:
            </p>
            <ul className="list-disc pr-6 mb-6 space-y-3">
              <li className="text-lg leading-relaxed text-foreground">
                <strong>توانبخشی سکته مغزی و آسیب‌های مغزی (نوروفیزیوتراپی):</strong> تمرکز بر بازیابی حرکت، تعادل و هماهنگی عضلانی.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>توانبخشی پس از تعویض مفصل (زانو و لگن):</strong> تمرینات تقویتی هدفمند برای بازگشت سریع‌تر به راه رفتن عادی.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>مدیریت دردهای مزمن:</strong> استفاده از تکنیک‌های دستی (Manual Therapy) و دستگاه‌های فیزیوتراپی پرتابل برای کاهش دردهای سیاتیک، کمردرد و گردن درد.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>فیزیوتراپی تنفسی:</strong> ضروری برای بیماران دارای مشکلات ریوی مزمن یا پس از بستری طولانی.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
              تجهیزات فیزیوتراپی پیشرفته در خانه شما
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-6">
              ما بر این باوریم که کیفیت درمان نباید به دلیل محل ارائه خدمات کاهش یابد. فیزیوتراپیست‌های نوید زندگی، دستگاه‌های لازم برای یک جلسه درمانی کامل را همراه خود به منزل می‌آورند:
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">دستگاه TENS و EMS</h4>
                  <p className="text-foreground"><strong>کاربرد:</strong> کاهش درد عصبی و تحریک عضلات</p>
                  <p className="text-muted-foreground"><strong>مزیت:</strong> تسکین درد حاد و جلوگیری از آتروفی (تحلیل عضلانی)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">اولتراسوند و لیزردرمانی پرتابل</h4>
                  <p className="text-foreground"><strong>کاربرد:</strong> درمان التهاب عمقی بافت‌ها و تاندون‌ها</p>
                  <p className="text-muted-foreground"><strong>مزیت:</strong> تسریع ترمیم بافت‌های آسیب‌دیده</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">ابزارهای تمرینی تخصصی</h4>
                  <p className="text-foreground"><strong>کاربرد:</strong> کش‌ها، وزنه‌ها و توپ‌های تعادلی</p>
                  <p className="text-muted-foreground"><strong>مزیت:</strong> افزایش قدرت، انعطاف‌پذیری و تعادل</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
              مناطق تحت پوشش: فیزیوتراپی در منزل در سراسر تهران
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              نوید زندگی با داشتن تیم گسترده، امکان اعزام سریع فیزیوتراپیست را به تمام مناطق تهران فراهم می‌کند تا زمان شروع درمان به حداقل برسد:
            </p>

            <ul className="list-disc pr-6 mb-8 space-y-2">
              <li className="text-lg leading-relaxed text-foreground">
                <strong>فیزیوتراپی در منزل شمال تهران:</strong> شامل نیاوران، زعفرانیه، قیطریه
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>فیزیوتراپی در منزل غرب تهران:</strong> شامل سعادت‌آباد، شهرک غرب، جنت‌آباد
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>فیزیوتراپی در منزل شرق و مرکز تهران:</strong> پوشش‌دهی کامل برای دسترسی آسان
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
              چگونه جلسه فیزیوتراپی در منزل خود را آغاز کنید؟
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              روند دریافت خدمات تخصصی ما ساده و سریع است:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
                <h4 className="font-semibold text-lg text-foreground mb-2">۱. تماس و مشاوره</h4>
                <p className="text-foreground">با تیم پشتیبانی ما تماس بگیرید و نوع بیماری یا نیاز توانبخشی خود را شرح دهید.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
                <h4 className="font-semibold text-lg text-foreground mb-2">۲. ارزیابی اولیه توسط متخصص</h4>
                <p className="text-foreground">فیزیوتراپیست ما به منزل شما اعزام شده و یک ارزیابی جامع برای تعیین سطح عملکرد و محدودیت‌ها انجام می‌دهد.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
                <h4 className="font-semibold text-lg text-foreground mb-2">۳. تنظیم برنامه درمانی شخصی</h4>
                <p className="text-foreground">بر اساس ارزیابی، یک برنامه درمانی زمان‌بندی شده (شامل تعداد جلسات، نوع تمرینات و استفاده از دستگاه‌ها) طراحی می‌شود.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
                <h4 className="font-semibold text-lg text-foreground mb-2">۴. شروع درمان</h4>
                <p className="text-foreground">جلسات درمانی در فضایی آرام در منزل شما آغاز می‌گردد.</p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-secondary/10 p-8 rounded-xl my-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                فرآیند بهبودی خود را در منزل تسریع کنید
              </h3>
              <p className="text-lg text-center text-foreground mb-6 leading-relaxed">
                برای دریافت مشاوره تخصصی، اطلاع از <a href="/pricing" className="text-primary hover:underline">تعرفه فیزیوتراپی در منزل</a> و اعزام فیزیوتراپیست مجرب به محل خود در تهران، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  تماس فوری: 09386117912
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  size="lg"
                  className="gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  پیام در واتساپ
                </Button>
              </div>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                چرا نوید زندگی را انتخاب کنید؟
              </h3>
              <ul className="list-disc pr-6 space-y-2">
                <li className="text-lg leading-relaxed text-foreground">فیزیوتراپیست‌های مجرب و دارای مدرک تخصصی</li>
                <li className="text-lg leading-relaxed text-foreground">استفاده از دستگاه‌های پیشرفته و استاندارد</li>
                <li className="text-lg leading-relaxed text-foreground">برنامه‌های درمانی کاملاً شخصی‌سازی شده</li>
                <li className="text-lg leading-relaxed text-foreground">پوشش تمام مناطق تهران</li>
                <li className="text-lg leading-relaxed text-foreground">مشاوره رایگان و <a href="/contact" className="text-primary hover:underline">پشتیبانی ۲۴ ساعته</a></li>
                <li className="text-lg leading-relaxed text-foreground">قیمت‌های شفاف و منصفانه</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          {/* Pricing Info */}
          <div className="mt-12">
            <PricingInfo />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PhysiotherapyPage;