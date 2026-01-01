import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import liverEnzymesImage from "@/assets/liver-enzymes-test.jpg";
import itraconazoleImage from "@/assets/itraconazole-medication.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import annualScreeningImage from "@/assets/annual-screening-tests.jpg";

const LiverEnzymesPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تفسیر آنزیم‌های کبدی", url: "/articles/liver-enzymes" }
  ];

  const faqs = [
    {
      question: "آیا برای آزمایش آنزیم‌های کبدی باید ناشتا باشم؟",
      answer: "معمولاً برای آزمایش آنزیم‌های کبدی نیازی به ناشتایی نیست، اما اگر آزمایش همراه با چک‌آپ چربی خون باشد، ۱۰ تا ۱۲ ساعت ناشتایی توصیه می‌شود. بهتر است قبل از آزمایش با پزشک یا تکنسین آزمایشگاه هماهنگ کنید."
    },
    {
      question: "آیا بالا بودن آنزیم‌های کبدی همیشه نشانه بیماری جدی است؟",
      answer: "خیر، افزایش خفیف آنزیم‌های کبدی گاهی موقتی است و می‌تواند به دلیل مصرف برخی داروها، ورزش شدید یا حتی غذاهای چرب باشد. اما افزایش مداوم یا قابل توجه نیاز به بررسی تخصصی دارد."
    },
    {
      question: "چه زمانی باید نگران نتایج آزمایش کبد باشم؟",
      answer: "اگر آنزیم‌ها بیش از ۲ تا ۳ برابر حد نرمال بالا باشند، یا همراه با علائمی مانند زردی، درد شکم یا خستگی شدید باشد، حتماً باید به متخصص داخلی مراجعه کنید."
    },
    {
      question: "نسبت AST به ALT چه اطلاعاتی به پزشک می‌دهد؟",
      answer: "اگر نسبت AST/ALT بیشتر از ۲ باشد، معمولاً نشان‌دهنده آسیب کبدی ناشی از الکل است. در کبد چرب غیرالکلی معمولاً ALT بالاتر از AST است."
    },
    {
      question: "آیا کبد چرب قابل درمان است؟",
      answer: "بله، کبد چرب غیرالکلی در مراحل اولیه با تغییر سبک زندگی (کاهش وزن، ورزش منظم و رژیم غذایی سالم) قابل بهبود و حتی درمان کامل است. تشخیص زودهنگام از طریق آزمایش خون بسیار مهم است."
    }
  ];

  const relatedArticles = [
    {
      title: "آزمایش‌های سالانه غربالگری سلامت",
      description: "چه آزمایش‌هایی را باید هر سال انجام دهید؟",
      image: annualScreeningImage,
      link: "/articles/annual-screening-tests",
      category: "چک‌آپ"
    },
    {
      title: "داروی ایتراکونازول و عوارض کبدی",
      description: "نکات مهم درباره مصرف ایتراکونازول و پایش کبد",
      image: itraconazoleImage,
      link: "/articles/itraconazole",
      category: "دارو"
    },
    {
      title: "دیابت و تأثیر آن بر سلامت کبد",
      description: "ارتباط دیابت نوع ۲ با کبد چرب غیرالکلی",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "غدد"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="تفسیر کامل آنزیم‌های کبدی؛ ALT، AST، ALP و GGT | نوید زندگی"
        description="راهنمای علمی تفسیر آنزیم‌های کبدی در آزمایش خون. بررسی ALT، AST، ALP و GGT و علل افزایش آن‌ها. آزمایش خون کبد در منزل تهران و کرج."
        keywords="آنزیم‌های کبدی، تفسیر آزمایش کبد، ALT، AST، ALP، GGT، کبد چرب، آزمایش خون در منزل، تست عملکرد کبد"
        canonical="https://navidzendegi.com/articles/liver-enzymes"
        ogType="article"
        publishedTime="2026-01-01"
        modifiedTime="2026-01-01"
      />
      <ArticleSchema
        title="تفسیر کامل آنزیم‌های کبدی؛ آنچه آزمایش خون درباره سلامت کبد شما می‌گوید"
        description="راهنمای علمی تفسیر آنزیم‌های کبدی ALT، AST، ALP و GGT و خدمات آزمایش خون در منزل"
        publishedTime="2026-01-01"
        modifiedTime="2026-01-01"
        image={liverEnzymesImage}
      />
      <Header />
      <FloatingContact />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <img
              src={liverEnzymesImage}
              alt="آزمایش آنزیم‌های کبدی"
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            />

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              تفسیر کامل آنزیم‌های کبدی؛ آنچه آزمایش خون درباره سلامت کبد شما می‌گوید
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              کبد، بزرگترین ارگان داخلی بدن، مسئول بیش از ۵۰۰ عملکرد حیاتی از جمله سم‌زدایی، سنتز پروتئین و تولید صفرا است. زمانی که سلول‌های کبدی آسیب می‌بینند یا ملتهب می‌شوند، آنزیم‌های خاصی را به درون جریان خون آزاد می‌کنند. اندازه‌گیری این آنزیم‌ها که به <strong>آزمون‌های عملکرد کبد (LFTs)</strong> معروف هستند، اولین قدم برای تشخیص مشکلات پنهان کبد است.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              مرکز نوید زندگی با ارائه خدمات <Link to="/services/laboratory" className="text-primary underline">آزمایش خون در منزل</Link> و <Link to="/services/internal" className="text-primary underline">ویزیت متخصص داخلی</Link> (تهران و کرج)، این امکان را فراهم کرده تا بدون مراجعه به آزمایشگاه، چک‌آپ کامل کبد خود را انجام دهید.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
              <p className="text-destructive font-semibold text-sm">
                ⚠️ هشدار: هرگز نتایج آزمایش را خودسرانه تفسیر نکنید. تفسیر دقیق نتایج باید توسط پزشک متخصص انجام شود.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۱. آنزیم‌های اصلی کبد کدامند؟
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                در یک آزمایش خون استاندارد، چهار آنزیم کلیدی بررسی می‌شوند که هر کدام نشان‌دهنده بخش خاصی از سلامت کبد هستند:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">الف) ALT (آلانین آمینوترانسفراز)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>تفسیر:</strong> این آنزیم عمدتاً در کبد یافت می‌شود. بالا رفتن آن در خون، اختصاصی‌ترین نشانه آسیب سلول‌های کبدی است.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>علت افزایش:</strong> هپاتیت، کبد چرب، یا مصرف داروهای خاص.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">ب) AST (آسپارتات آمینوترانسفراز)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>تفسیر:</strong> علاوه بر کبد، در قلب و عضلات نیز وجود دارد.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>نکته علمی:</strong> نسبت AST به ALT برای پزشکان بسیار مهم است؛ مثلاً در آسیب‌های ناشی از الکل، معمولاً مقدار AST دو برابر ALT می‌شود.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">ج) ALP (آلکالین فسفاتاز)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>تفسیر:</strong> این آنزیم در کبد، مجاری صفراوی و استخوان‌ها وجود دارد.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>علت افزایش:</strong> مسدود شدن مجاری صفراوی، سنگ کیسه صفرا یا بیماری‌های استخوانی.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">د) GGT (گاما گلوتامیل ترانسفراز)</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>تفسیر:</strong> آنزیمی بسیار حساس به آسیب‌های مجاری صفراوی و مصرف الکل.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>کاربرد:</strong> اگر هم ALP و هم GGT بالا باشند، منشأ مشکل قطعاً کبد یا مجاری صفراوی است (نه استخوان).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۲. جدول مقادیر نرمال و علل تغییرات
              </h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-right">نام آنزیم</th>
                      <th className="border border-border p-2 text-right">مقدار نرمال (U/L)</th>
                      <th className="border border-border p-2 text-right">علت اصلی افزایش</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">ALT</td>
                      <td className="border border-border p-2">۷ تا ۵۵</td>
                      <td className="border border-border p-2">کبد چرب، هپاتیت ویروسی</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-2">AST</td>
                      <td className="border border-border p-2">۸ تا ۴۸</td>
                      <td className="border border-border p-2">آسیب کبدی، قلبی یا عضلانی</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">ALP</td>
                      <td className="border border-border p-2">۴۰ تا ۱۲۹</td>
                      <td className="border border-border p-2">انسداد صفراوی، بیماری استخوان</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-2">GGT</td>
                      <td className="border border-border p-2">۸ تا ۶۱</td>
                      <td className="border border-border p-2">مصرف الکل، بیماری کیسه صفرا</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm">
                <strong>نکته:</strong> مقادیر نرمال ممکن است بر اساس استانداردهای هر آزمایشگاه و سن و جنسیت بیمار کمی متفاوت باشد.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۳. علل شایع بالا رفتن آنزیم‌های کبدی
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                بر اساس گزارش‌های Cleveland Clinic، شایع‌ترین دلایل افزایش این آنزیم‌ها عبارتند از:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>بیماری کبد چرب غیرالکلی (NAFLD):</strong> که به دلیل چاقی و دیابت بسیار شایع شده است.</li>
                <li><strong>مصرف داروها:</strong> داروهای مسکن (مانند دوز بالای استامینوفن)، داروهای ضد چربی خون (استاتین‌ها) و برخی آنتی‌بیوتیک‌ها.</li>
                <li><strong>هپاتیت:</strong> عفونت‌های ویروسی (A, B, C).</li>
                <li><strong>مصرف الکل:</strong> که منجر به التهاب کبد می‌شود.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۴. چه زمانی باید آزمایش آنزیم‌های کبدی بدهیم؟
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                اگر علائم زیر را دارید، کبد شما نیاز به بررسی فوری دارد:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>زردی پوست یا چشم‌ها (یرقان)</li>
                <li>درد و تورم در ناحیه شکم (سمت راست بالا)</li>
                <li>خستگی مفرط و بی‌اشتهایی</li>
                <li>تیره شدن رنگ ادرار یا روشن شدن رنگ مدفوع</li>
                <li>خارش مداوم پوست</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۵. مزایای آزمایش خون کبد در منزل با «نوید زندگی»
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                تشخیص زودهنگام، کلید درمان بیماری‌های کبد است. ما در تهران و کرج این فرآیند را برای شما آسان کرده‌ایم:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>خون‌گیری در منزل:</strong> بدون نیاز به ناشتا ماندن در صف‌های طولانی آزمایشگاه.</li>
                <li><strong>تفسیر تخصصی:</strong> نتایج آزمایش شما توسط پزشک متخصص داخلی تحلیل شده و در صورت نیاز، سونوگرافی در منزل نیز هماهنگ می‌شود.</li>
                <li><strong>دقت بالا:</strong> همکاری با معتبرترین آزمایشگاه‌های مرجع برای اطمینان از صحت نتایج.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                منابع و رفرنس‌های معتبر
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Mayo Clinic: Liver function tests: Purpose, procedure, and results</li>
                <li>American Association for the Study of Liver Diseases (AASLD): Guidelines for the evaluation of abnormal liver tests</li>
                <li>National Institutes of Health (NIH): Liver Enzyme Tests (ALT, AST, ALP, GGT)</li>
                <li>Cleveland Clinic: Elevated Liver Enzymes: Causes and Management</li>
              </ul>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                کبد شما، پالایشگاه بدن شماست؛ از آن مراقبت کنید
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                برای رزرو نوبت آزمایش خون یا ویزیت متخصص در منزل، همین حالا با کارشناسان ما تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </section>

            <FAQSection faqs={faqs} />
          </article>

          <PricingInfo />
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiverEnzymesPage;
