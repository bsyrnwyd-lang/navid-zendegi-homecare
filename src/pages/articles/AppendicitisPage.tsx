import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import LazyImage from "@/components/LazyImage";
import appendicitisImage from "@/assets/appendicitis.jpg";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import internalMedicineImage from "@/assets/internal-medicine.jpg";
import generalDoctorImage from "@/assets/general-doctor-home-clean.jpg";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AppendicitisPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqItems = [
    {
      question: "علائم اولیه آپاندیسیت چیست؟",
      answer: "علائم اولیه شامل درد مبهم در اطراف ناف، از دست دادن اشتها، تهوع خفیف و احساس ناخوشی است. پس از چند ساعت، درد به سمت پایین و راست شکم منتقل می‌شود و شدت می‌یابد."
    },
    {
      question: "چرا آپاندیسیت یک فوریت پزشکی است؟",
      answer: "آپاندیسیت می‌تواند منجر به پارگی آپاندیس و انتشار عفونت در شکم (پریتونیت) شود که یک وضعیت تهدیدکننده حیات است. تشخیص و درمان سریع برای جلوگیری از این عارضه خطرناک ضروری است."
    },
    {
      question: "چه زمانی باید فوراً به اورژانس مراجعه کنم؟",
      answer: "اگر درد شکمی شدید و پایدار دارید که از ناف به سمت راست پایین منتقل شده است، همراه با تب، تهوع، استفراغ و از دست دادن اشتها، باید فوراً به اورژانس مراجعه کنید."
    },
    {
      question: "آیا می‌توانم در منزل آپاندیسیت را درمان کنم؟",
      answer: "خیر، هرگز نباید آپاندیسیت را در منزل درمان کنید. از مصرف مسکن‌ها، ملین‌ها یا گذاشتن پد گرم روی شکم خودداری کنید. تنها درمان قطعی آپاندیسیت، جراحی است."
    },
    {
      question: "درمان آپاندیسیت چگونه است؟",
      answer: "درمان قطعی آپاندیسیت، جراحی برداشتن آپاندیس (آپاندکتومی) است که می‌تواند به روش باز یا لاپاراسکوپی انجام شود. این جراحی معمولاً ساده و ایمن است."
    },
    {
      question: "پس از پارگی آپاندیس چه اتفاقی می‌افتد؟",
      answer: "پارگی آپاندیس باعث انتشار باکتری‌ها و عفونت در شکم (پریتونیت) می‌شود. علائم شامل درد شدید در تمام شکم، تب بالا، افت فشار و علائم شوک است. این وضعیت نیاز به جراحی فوری و آنتی‌بیوتیک‌های وریدی دارد."
    }
  ];

  const relatedArticles = [
    {
      title: "درد شکم: علل، تشخیص و درمان",
      description: "راهنمای جامع درباره انواع درد شکم و علل آن",
      image: abdominalPainImage,
      link: "/articles/abdominal-pain",
      category: "سلامت گوارش"
    },
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "خدمات تخصصی ویزیت پزشک داخلی در منزل",
      image: internalMedicineImage,
      link: "/services/internal-medicine",
      category: "خدمات پزشکی"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "مشاوره و معاینه توسط پزشک عمومی در منزل",
      image: generalDoctorImage,
      link: "/general-doctor",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آپاندیسیت: علائم، تشخیص فوری و درمان جراحی | نوید زندگی"
        description="راهنمای کامل آپاندیسیت شامل علائم کلاسیک، مراحل پیشرفت درد، خطرات پارگی و فوریت مراجعه به اورژانس"
        keywords="آپاندیسیت, درد آپاندیس, علائم آپاندیسیت, پارگی آپاندیس, جراحی آپاندیس, آپاندکتومی, اورژانس, درد شکم"
        canonical="https://navidzendegi.com/articles/appendicitis"
        ogType="article"
        publishedTime="2024-01-20T12:00:00Z"
        modifiedTime="2024-01-20T12:00:00Z"
      />

      <ArticleSchema
        title="آپاندیسیت (Appendicitis): تشخیص سریع، علائم خطر و فوریت مراجعه به اورژانس"
        description="راهنمای کامل آپاندیسیت شامل علائم کلاسیک، مراحل پیشرفت درد، خطرات پارگی و فوریت مراجعه به اورژانس"
        publishedTime="2024-01-20T12:00:00Z"
        modifiedTime="2024-01-20T12:00:00Z"
        image="/src/assets/appendicitis.jpg"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "آپاندیسیت", url: "/articles/appendicitis" }
          ]}
        />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              آپاندیسیت (Appendicitis): تشخیص سریع، علائم خطر و فوریت مراجعه به اورژانس
            </h1>
            <p className="text-muted-foreground">
              آخرین بروزرسانی: دی ۱۴۰۳ | زمان مطالعه: ۷ دقیقه
            </p>
          </header>

          <Alert className="mb-8 bg-red-50 border-red-200">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>هشدار فوری:</strong> آپاندیسیت یک فوریت پزشکی است. اگر علائم مشکوک دارید، فوراً به اورژانس مراجعه کنید. هرگز خودسرانه دارو مصرف نکنید یا خود درمانی انجام ندهید.
            </AlertDescription>
          </Alert>

          <LazyImage
            src={appendicitisImage}
            alt="آپاندیسیت - التهاب آپاندیس و فوریت جراحی"
            className="w-full h-auto rounded-lg mb-8"
          />

          <section className="mb-8">
            <p className="text-lg leading-relaxed text-foreground mb-4">
              آپاندیسیت به التهاب و عفونت حاد آپاندیس (یک کیسه کوچک و لوله‌ای شکل که به روده بزرگ متصل است) گفته می‌شود. این وضعیت یک اورژانس پزشکی است که نیاز به تشخیص و درمان جراحی فوری دارد. تأخیر در درمان آپاندیسیت می‌تواند منجر به پارگی آپاندیس، انتشار عفونت در شکم (پریتونیت) و در نهایت، تهدید جدی زندگی بیمار شود.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              علائم کلاسیک و مراحل پیشرفت درد آپاندیسیت
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              درد آپاندیسیت معمولاً به صورت ناگهانی شروع شده و به سرعت پیشرفت می‌کند:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">
              ۱. محل شروع و انتشار درد
            </h3>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">شروع اولیه</h4>
                <p className="text-foreground leading-relaxed">
                  درد معمولاً در اطراف ناف (Periumbilical Area) شروع می‌شود. این درد ممکن است مبهم و خفیف باشد.
                </p>
              </div>

              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">انتقال درد (مهاجرت)</h4>
                <p className="text-foreground leading-relaxed">
                  پس از چند ساعت (معمولاً 4 تا 24 ساعت)، درد به ناحیه پایین و راست شکم، معروف به نقطه مک‌بورنی (McBurney's Point)، منتقل شده و به صورت پایدار و شدید درمی‌آید. این انتقال درد، یک علامت کلاسیک آپاندیسیت است.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">
              ۲. علائم همراه کلیدی
            </h3>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">تهوع و استفراغ:</strong> اغلب پس از شروع درد شکمی شروع می‌شوند.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">از دست دادن اشتها (Anorexia):</strong> یکی از شایع‌ترین علائم همراه.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">تب خفیف:</strong> افزایش دمای بدن (معمولاً بین 37.5 تا 38 درجه سانتی‌گراد).
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">حساسیت در لمس:</strong> لمس ملایم ناحیه پایین و راست شکم، باعث درد شدید و ناگهانی می‌شود (تندرنس).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              هشدارها و عوارض خطرناک آپاندیسیت
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              آپاندیسیت هرگز نباید در منزل درمان شود یا با داروهای مسکن ساده مدیریت شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">
              ۱. فوریت مراجعه به اورژانس
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              آپاندیسیت یک <strong className="text-red-600">فوریت پزشکی</strong> است. اگر <Link to="/articles/abdominal-pain" className="text-primary hover:underline">درد شکمی</Link> به صورت پایدار، شدید و مهاجر (از ناف به سمت راست پایین) همراه با تب و تهوع وجود دارد، باید فوراً به نزدیک‌ترین مرکز درمانی مراجعه کرد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3">
              ۲. عارضه پارگی (Perforation)
            </h3>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">پارگی آپاندیس:</strong> اگر آپاندیسیت به موقع درمان نشود، فشار و تورم درون آپاندیس باعث پارگی آن می‌شود.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">علائم پارگی:</strong> پارگی ممکن است باعث تسکین موقت و ناگهانی درد شود، اما پس از مدت کوتاهی، درد به دلیل گسترش عفونت به تمام شکم (پریتونیت) به طور شدیدتری بازمی‌گردد و با تب بالا و افت فشار همراه است. پریتونیت یک وضعیت تهدیدکننده حیات است.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              تشخیص و درمان: ویزیت جراح و اعزام آمبولانس در منزل
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              تشخیص قطعی آپاندیسیت بر اساس معاینه فیزیکی توسط پزشک متخصص و نتایج آزمایشات استوار است.
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">معاینه فیزیکی:</strong> پزشک با ارزیابی حساسیت ناحیه مک‌بورنی و علائم ریباند (افزایش درد پس از برداشتن ناگهانی دست)، تشخیص اولیه را می‌دهد. برای <Link to="/services/internal-medicine" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</Link> با ما تماس بگیرید.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">آزمایش و تصویربرداری:</strong> آزمایش خون (افزایش گلبول‌های سفید)، سونوگرافی شکمی و/یا CT اسکن برای تأیید تشخیص ضروری است.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">جراحی (آپاندکتومی):</strong> درمان قطعی آپاندیسیت، برداشتن آپاندیس متورم از طریق جراحی (به روش باز یا لاپاراسکوپی) است.
              </p>
            </div>

            <Alert className="mb-8 bg-amber-50 border-amber-200">
              <AlertDescription className="text-amber-800">
                <strong>هشدار عدم خوددرمانی:</strong> به بیمارانی که مشکوک به آپاندیسیت هستند، توصیه می‌شود که از مصرف داروهای مسکن، ملین یا قرار دادن پد گرم روی شکم خودداری کنند، زیرا این اقدامات می‌توانند علائم را پنهان کرده و پارگی آپاندیس را تسریع کنند.
              </AlertDescription>
            </Alert>
          </section>

          <section className="my-12 p-8 bg-primary/5 rounded-lg border-2 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              در صورت مشاهده علائم مشکوک به آپاندیسیت، زمان را از دست ندهید
            </h2>
            <p className="text-center text-foreground mb-6 text-lg">
              برای مشاوره فوری پزشکی و اعزام سریع آمبولانس به منزل جهت انتقال ایمن بیمار به مرکز درمانی، همین حالا با نوید زندگی تماس بگیرید.
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
                واتساپ
              </Button>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Barth, R. J., & Riker, A. J. (2018). Appendicitis. The New England Journal of Medicine, 379(20), 1957-1964.</li>
              <li>Wagner, J. M., et al. (2009). The value of symptoms and signs in the diagnosis of appendicitis. The American Journal of Surgery, 198(1), 127-133.</li>
              <li>Sifri, Z. C., & Kapadia, M. R. (2018). Acute Appendicitis. In: Cameron, J. L., & Cameron, A. M. (Eds.), Current Surgical Therapy (12th ed.). Elsevier.</li>
            </ol>
          </section>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default AppendicitisPage;
