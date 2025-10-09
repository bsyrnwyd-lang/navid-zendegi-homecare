import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import postAngiographyMedicationsImage from "@/assets/post-angiography-medications.jpg";

const WarfarinPage = () => {
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
      title: "داروهای ضروری بعد از آنژیوگرافی و استنت‌گذاری",
      description: "راهنمای کامل داروهای ضد پلاکت، استاتین‌ها و داروهای کنترل فشار خون بعد از آنژیوگرافی و استنت‌گذاری",
      image: postAngiographyMedicationsImage,
      link: "/articles/post-angiography-medications",
      category: "قلب و عروق"
    },
    {
      title: "فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟",
      description: "راهنمای کامل فشار خون بالا، علائم قاتل خاموش، علت‌ها، روش‌های کنترل و اهمیت اندازه‌گیری منظم فشار خون",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن | نوید زندگی"
        description="وارفارین داروی ضدانعقاد خون است که برای پیشگیری از لخته‌های خونی تجویز می‌شود. در این مقاله با موارد مصرف، عوارض و نکات مهم در مصرف وارفارین آشنا شوید. خدمات ویزیت پزشک در منزل از طریق navidzendegi.com."
        keywords="وارفارین, داروی ضدانعقاد, INR, لخته خون, آمبولی ریوی, فیبریلاسیون دهلیزی, خونریزی, ویتامین K, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/warfarin"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی، متخصص قلب و عروق"
      />
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن
            </h1>
            <p className="text-foreground/90 text-lg font-semibold mb-2">نویسنده: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق</p>
          </div>

          <img
            src={warfarinImage}
            alt="وارفارین - داروی ضدانعقاد خون"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">وارفارین چیست؟</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                وارفارین (Warfarin) یکی از داروهای مهم ضدانعقاد خون است که با جلوگیری از ساخت فاکتورهای انعقادی وابسته به ویتامین K، از تشکیل یا بزرگ‌تر شدن لخته‌های خونی جلوگیری می‌کند.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">موارد مصرف وارفارین</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                وارفارین در درمان و پیشگیری از بسیاری از بیماری‌های مرتبط با لخته خون تجویز می‌شود، از جمله:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>لخته در اندام‌های تحتانی یا فوقانی</li>
                <li>آمبولی ریوی (لخته در ریه)</li>
                <li>تعویض دریچه‌های قلبی مصنوعی</li>
                <li>اختلالات ریتم قلبی (مانند فیبریلاسیون دهلیزی)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">عوارض جانبی وارفارین</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                مهم‌ترین عارضه‌ی وارفارین خونریزی است. علائم خونریزی ممکن است به شکل‌های زیر بروز کند:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>وجود خون در مدفوع یا ادرار</li>
                <li>سرفه همراه با خون</li>
                <li>خونریزی لثه یا بینی</li>
                <li>کبودی‌های غیرعادی روی پوست</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                در صورت مشاهده‌ی هر یک از این علائم، لازم است فوراً با پزشک تماس گرفته شود.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">نکات مهم در مصرف وارفارین</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">۱. رژیم غذایی ثابت</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                وارفارین به شدت به رژیم غذایی وابسته است. تغییر در مصرف غذاهای حاوی ویتامین K می‌تواند اثربخشی دارو را تغییر دهد. بنابراین رژیم غذایی بیمار باید ثابت و بدون تغییر ناگهانی باشد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">۲. پرهیز از مصرف خودسرانه دارو</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                وارفارین با بسیاری از داروها، از جمله مسکن‌ها و آنتی‌بیوتیک‌ها، تداخل دارد. بنابراین مصرف هر داروی جدید باید حتماً با مشورت پزشک انجام شود.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">۳. کنترل منظم INR</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                میزان INR (شاخص انعقاد خون) باید به طور منظم با آزمایش بررسی شود تا مقدار دارو دقیق تنظیم گردد. این کار بهتر است توسط پزشک و ترجیحاً در قالب ویزیت پزشکی در منزل انجام شود تا نیاز به مراجعه حضوری به آزمایشگاه کاهش یابد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">۴. مواد غذایی کاهش‌دهنده اثر وارفارین</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                برخی مواد غذایی می‌توانند باعث کاهش اثر وارفارین شوند. از جمله:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>سبزیجات سبز تیره مانند کاهو، اسفناج و بروکلی</li>
                <li>چای سبز</li>
                <li>جگر مرغ</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                مصرف این مواد باید در حد متعادل و با نظر پزشک باشد.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">ویزیت پزشک در منزل برای بیماران مصرف‌کننده وارفارین</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                برای بیمارانی که وارفارین مصرف می‌کنند، پیگیری منظم وضعیت سلامت و کنترل آزمایش INR بسیار مهم است. خدمات ویزیت پزشک در منزل از طریق سایت navidzendegi.com این امکان را فراهم می‌کند تا بدون نیاز به مراجعه به مراکز درمانی، پزشک متخصص وضعیت بیمار را در منزل بررسی کرده و تنظیم دارو را انجام دهد.
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

export default WarfarinPage;
