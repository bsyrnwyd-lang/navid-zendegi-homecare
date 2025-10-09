import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const HighBloodPressurePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09122593357";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989122593357", "_blank");
  };

  const relatedArticles = [
    {
      title: "آتوروستاتین چیست و چه کاربردی دارد؟",
      description: "راهنمای کامل آتوروستاتین، کاربرد در کنترل چربی خون، نحوه مصرف، عوارض و اهمیت پیگیری پزشکی",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "داروها"
    },
    {
      title: "تپش قلب؛ علل، علائم و روش‌های بررسی",
      description: "راهنمای کامل تپش قلب، علل شایع، علائم خطرناک، روش‌های بررسی و خدمات هولتر در منزل",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    },
    {
      title: "وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن",
      description: "راهنمای کامل وارفارین، موارد مصرف، عوارض جانبی، رژیم غذایی، کنترل INR و ویزیت پزشک در منزل",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "داروها"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟ | نوید زندگی"
        description="فشار خون بالا معمولاً بدون علامت است اما می‌تواند خطرناک باشد. در این مقاله با علائم، علت‌ها و روش‌های کنترل فشار خون آشنا شوید. خدمات ویزیت پزشک در منزل در navidzendegi.com."
        keywords="فشار خون بالا, هیپرتانسیون, علائم فشار خون, کنترل فشار خون, دارو فشار خون, اندازه‌گیری فشار خون, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/high-blood-pressure-control"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی، متخصص قلب و عروق"
      />
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟
            </h1>
            <p className="text-foreground/90 text-lg font-semibold mb-2">نویسنده: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق</p>
          </div>

          <img
            src={highBloodPressureImage}
            alt="فشار خون بالا - کنترل و درمان"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">آیا فشار خون بالا علامت دارد؟</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                برخلاف تصور عموم، فشار خون بالا (هیپرتانسیون) معمولاً هیچ علامت خاصی ندارد. بسیاری از افراد سال‌ها دچار فشار خون بالا هستند بدون اینکه متوجه شوند، به همین دلیل به آن «قاتل خاموش» گفته می‌شود.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                برخی ممکن است گاهی سردرد، سرگیجه یا احساس خستگی داشته باشند، اما این علائم اختصاصی نیستند و همیشه نشانه‌ی فشار خون بالا محسوب نمی‌شوند.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">علت‌های اصلی فشار خون بالا</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                فشار خون بالا می‌تواند به دلایل مختلفی ایجاد شود، از جمله:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>ژنتیک و سابقه خانوادگی</li>
                <li>افزایش سن</li>
                <li>رژیم غذایی پرنمک</li>
                <li>چاقی و کم‌تحرکی</li>
                <li>استرس و اضطراب زیاد</li>
                <li>کم‌خوابی یا اختلال خواب</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">روش‌های کنترل فشار خون بالا</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                برای کنترل فشار خون، علاوه بر مصرف داروهای تجویزی پزشک، رعایت چند نکته ساده و مؤثر بسیار کمک‌کننده است:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>کاهش مصرف نمک در غذا</li>
                <li>رعایت رژیم غذایی سالم (رژیم مدیترانه‌ای بهترین گزینه است)</li>
                <li>کنترل استرس و داشتن خواب کافی</li>
                <li>قطع مصرف سیگار و الکل</li>
                <li>ورزش منظم و حفظ وزن متعادل</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">اهمیت مصرف منظم دارو و اندازه‌گیری فشار در منزل</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                اگر پزشک برای بیمار داروی کنترل فشار خون تجویز کرده باشد، باید طبق دستور پزشک و به صورت منظم مصرف شود. میزان دارو نباید خودسرانه تغییر کند و فقط پزشک باید درباره‌ی افزایش یا کاهش دوز تصمیم بگیرد.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                همچنین بیماران مبتلا به فشار خون بالا باید حتماً یک دستگاه فشار خون معتبر در منزل داشته باشند و فشار خود را به‌طور منظم اندازه‌گیری کنند. ثبت نتایج اندازه‌گیری می‌تواند به پزشک کمک کند تا روند درمان را بهتر تنظیم کند.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">ویزیت پزشک در منزل برای کنترل فشار خون</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                خدمات پزشکی در منزل از طریق سایت navidzendegi.com این امکان را فراهم می‌کند تا بیماران بدون نیاز به مراجعه حضوری، فشار خون خود را تحت نظر پزشک بررسی کنند. پزشک در منزل می‌تواند دارو را تنظیم کرده، تغذیه مناسب را توصیه کند و برنامه منظم پیگیری برای بیمار تنظیم نماید.
              </p>
            </section>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              ویزیت پزشک در منزل ۲۴ ساعته
            </h3>
            <p className="text-center text-foreground/80 mb-4">
              برای مشاوره و ویزیت پزشک در منزل با شماره زیر تماس بگیرید:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                onClick={handleCall}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                <Phone className="ml-2 h-4 w-4" />
                تماس: ۰۹۱۲۲۵۹۳۳۵۷
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                واتساپ
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <p className="text-center text-foreground/80">
              برای کسب اطلاعات بیشتر درباره خدمات پزشکی در منزل، به{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                صفحه تماس با ما
              </a>{" "}
              مراجعه کنید یا با{" "}
              <a href="/services/cardiology" className="text-primary hover:underline font-semibold">
                خدمات قلب و عروق
              </a>{" "}
              ما آشنا شوید.
            </p>
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default HighBloodPressurePage;
