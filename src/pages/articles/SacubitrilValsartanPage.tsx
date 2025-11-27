import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Explicitly import all related article images
import heartAttackImage from "@/assets/heart-palpitations.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";

const SacubitrilValsartanPage = () => {
  const faqs = [
    {
      question: "چه کسانی نباید ساکوبیتریل/والزارتان مصرف کنند؟",
      answer: "افراد باردار یا شیرده، کسانی با سابقه آنژیوادم، بیماران با مشکلات شدید کلیوی یا کبدی، و افرادی که به تازگی داروهای مهارکننده ACE مصرف کرده‌اند نباید این دارو را مصرف کنند."
    },
    {
      question: "آیا می‌توانم ساکوبیتریل/والزارتان را با مهارکننده‌های ACE همزمان مصرف کنم؟",
      answer: "خیر، این دارو نباید همزمان با مهارکننده‌های ACE مصرف شود. باید حداقل 36 ساعت فاصله بین قطع مهارکننده ACE و شروع ساکوبیتریل/والزارتان رعایت شود تا خطر آنژیوادم کاهش یابد."
    },
    {
      question: "چرا باید سطح پتاسیم خون را در حین مصرف این دارو کنترل کنم؟",
      answer: "ساکوبیتریل/والزارتان می‌تواند باعث افزایش سطح پتاسیم خون شود که می‌تواند خطرناک باشد و منجر به ضربان قلب نامنظم شود. به همین دلیل پزشک به طور منظم آزمایش خون درخواست می‌کند."
    },
    {
      question: "آیا می‌توانم ساکوبیتریل/والزارتان را خودسرانه قطع کنم؟",
      answer: "خیر، هرگز این دارو را بدون مشورت با پزشک قطع نکنید. قطع ناگهانی می‌تواند باعث بدتر شدن علائم نارسایی قلبی شود. پزشک در صورت نیاز، برنامه کاهش تدریجی دوز را تعیین خواهد کرد."
    },
    {
      question: "چه زمانی باید در صورت مصرف این دارو به پزشک مراجعه کنم؟",
      answer: "اگر تورم صورت، لب‌ها، زبان یا گلو، مشکل در تنفس، سرگیجه شدید، غش کردن، ضربان قلب خیلی کند یا نامنظم، یا کاهش حجم ادرار داشتید، فوراً به پزشک مراجعه کنید."
    },
    {
      question: "آیا ساکوبیتریل/والزارتان با غذا مصرف می‌شود؟",
      answer: "این دارو می‌تواند با یا بدون غذا مصرف شود. مهم این است که آن را طبق دستور پزشک و در ساعات مشخص هر روز مصرف کنید تا اثربخشی بهینه داشته باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "علائم حمله قلبی: چه زمانی باید به اورژانس مراجعه کرد؟",
      description: "شناخت علائم هشداردهنده حمله قلبی برای دریافت کمک فوری و کاهش آسیب به قلب.",
      image: heartAttackImage,
      link: "/articles/heart-attack-symptoms",
      category: "قلب و عروق"
    },
    {
      title: "فشار خون بالا: علل، علائم و روش‌های کنترل",
      description: "راهنمای جامع درباره فشار خون بالا، عوامل خطر و روش‌های کنترل آن.",
      image: bloodPressureImage,
      link: "/articles/high-blood-pressure",
      category: "قلب و عروق"
    },
    {
      title: "ویزیت متخصص قلب و عروق در منزل",
      description: "خدمات ویزیت تخصصی قلب و عروق در منزل برای بیماران قلبی و کنترل دارو.",
      image: cardiologyImage,
      link: "/services/cardiology",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="داروی ساکوبیتریل/والزارتان (Entresto) | کاربردها و عوارض جانبی"
        description="راهنمای جامع داروی ساکوبیتریل/والزارتان (انترستو) برای درمان نارسایی قلبی: مکانیسم اثر، موارد مصرف، عوارض جانبی و هشدارهای مهم."
        keywords="ساکوبیتریل والزارتان, انترستو, Entresto, نارسایی قلبی, داروهای قلبی, ARNI, HFrEF, داروی قلب, مشاوره قلب"
        canonical="https://navidzendegi.com/articles/sacubitril-valsartan"
        ogType="article"
        publishedTime="2025-01-18"
        modifiedTime="2025-01-18"
      />
      
      <ArticleSchema
        title="داروی ساکوبیتریل/والزارتان (Sacubitril/Valsartan) - انترستو (Entresto)"
        description="راهنمای جامع داروی ساکوبیتریل/والزارتان برای درمان نارسایی قلبی: مکانیسم اثر، موارد مصرف و عوارض جانبی."
        publishedTime="2025-01-18"
        modifiedTime="2025-01-18"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "ساکوبیتریل/والزارتان (Entresto)", url: "/articles/sacubitril-valsartan" }
          ]}
        />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            💊 داروی ساکوبیتریل/والزارتان (Sacubitril/Valsartan) - انترستو (Entresto)
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            ساکوبیتریل/والزارتان یک داروی ترکیبی جدید و پیشگام در درمان نارسایی مزمن قلبی است. این دارو به عنوان یک مهارکننده گیرنده آنژیوتانسین و نپریلیسین (ARNI) طبقه‌بندی می‌شود و به طور قابل توجهی خطر مرگ و میر و بستری شدن مجدد در بیمارستان ناشی از نارسایی قلبی را کاهش می‌دهد.
          </p>

          <Card className="my-8 border-l-4 border-l-primary bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>یادآوری مهم:</strong> این مقاله صرفاً جنبه اطلاع‌رسانی دارد و جایگزین مشاوره پزشکی نیست. ساکوبیتریل/والزارتان یک داروی تخصصی قلبی است و مصرف آن باید تحت نظارت دقیق <Link to="/services/cardiology" className="text-primary hover:underline font-semibold">متخصص قلب و عروق</Link> باشد.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            موارد مصرف اصلی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            کاربرد اصلی این داروی ترکیبی در بیماری‌های قلبی به شرح زیر است:
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong>نارسایی مزمن قلبی (Chronic Heart Failure):</strong> این دارو به طور خاص برای بزرگسالان مبتلا به نارسایی مزمن قلبی با کسر تخلیه کاهش‌یافته (HFrEF) تجویز می‌شود.
            </li>
            <li>
              <strong>کاهش خطر:</strong> اصلی‌ترین مزیت این دارو، کاهش قابل توجه خطر مرگ و میر ناشی از مشکلات قلبی و نیاز به بستری شدن در بیمارستان به دلیل بدتر شدن علائم نارسایی قلبی است.
            </li>
            <li>
              <strong>اطفال:</strong> این دارو همچنین برای درمان نارسایی قلبی علامت‌دار در کودکان بالای یک سال نیز مورد تأیید است.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            مکانیسم اثر (چگونگی عملکرد)
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            ساکوبیتریل/والزارتان از ترکیب دو جزء فعال تشکیل شده است که هر کدام از طریق یک مسیر جداگانه بر نارسایی قلبی تأثیر می‌گذارند:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-right">جزء فعال</th>
                  <th className="border border-border p-3 text-right">مکانیسم عمل</th>
                  <th className="border border-border p-3 text-right">نتیجه</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">
                    <strong>۱. والزارتان (Valsartan)</strong>
                  </td>
                  <td className="border border-border p-3">
                    یک مسدودکننده گیرنده آنژیوتانسین II (ARB) است. این بخش با مسدود کردن ماده‌ای در بدن که باعث انقباض عروق خونی می‌شود، رگ‌ها را شل کرده و <Link to="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون</Link> را کاهش می‌دهد.
                  </td>
                  <td className="border border-border p-3">
                    کاهش بار کاری روی قلب
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <strong>۲. ساکوبیتریل (Sacubitril)</strong>
                  </td>
                  <td className="border border-border p-3">
                    یک مهارکننده آنزیم نپریلیسین (Neprilysin Inhibitor) است. نپریلیسین وظیفه تجزیه پپتیدهای ناتریورتیک (هورمون‌هایی با اثر محافظتی قلبی) را دارد. ساکوبیتریل با مهار این آنزیم، سطح پپتیدهای ناتریورتیک را افزایش می‌دهد.
                  </td>
                  <td className="border border-border p-3">
                    اتساع عروق، دفع سدیم و آب از طریق کلیه‌ها و کاهش فشار خون
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>اثر ترکیبی:</strong> این ترکیب دوگانه باعث می‌شود که رگ‌های خونی شل شوند، سدیم و آب اضافی از بدن دفع شود، و در نتیجه، فشار خون کاهش یافته و کارایی پمپاژ قلب بهبود یابد.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            عوارض جانبی و نکات احتیاطی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            این دارو یک داروی تخصصی است و مصرف آن باید با دقت زیاد و تحت نظارت مستمر پزشک قلب و عروق باشد:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۱. عوارض جانبی شایع
          </h3>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong>کاهش فشار خون (Hypotension):</strong> احساس سرگیجه، سبکی سر یا غش کردن (به ویژه هنگام تغییر وضعیت ناگهانی) از عوارض شایع است.
            </li>
            <li>
              <strong>افزایش پتاسیم خون (Hyperkalemia):</strong> این حالت می‌تواند جدی باشد و منجر به ضعف عضلانی یا ضربان قلب نامنظم شود. لازم است سطح پتاسیم به طور منظم کنترل شود.
            </li>
            <li>
              <strong>آسیب کلیوی:</strong> ممکن است در عملکرد کلیه تغییراتی ایجاد کند و به همین دلیل نیاز به پایش آزمایشگاهی دارد.
            </li>
            <li>
              <strong>سرفه:</strong> برخی بیماران ممکن است دچار سرفه خشک و مداوم شوند.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۲. هشدارها و منع مصرف مهم
          </h3>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong>بارداری (Pregnancy):</strong> مصرف این دارو در دوران بارداری ممنوع است، به ویژه در سه ماهه دوم و سوم، زیرا می‌تواند باعث آسیب یا مرگ جنین شود. زنانی که از این دارو استفاده می‌کنند باید از روش‌های پیشگیری از بارداری مؤثر استفاده کنند.
            </li>
            <li>
              <strong>آنژیوادم (Angioedema):</strong> تورم جدی و ناگهانی صورت، لب‌ها، زبان، گلو و مشکل در تنفس و بلع. اگر سابقه آنژیوادم، به ویژه در پی مصرف مهارکننده‌های ACE (مانند انالاپریل) یا ARBs را دارید، باید فوراً به پزشک اطلاع دهید.
            </li>
            <li>
              <strong>تداخل با مهارکننده‌های ACE:</strong> نباید این دارو را ظرف مدت 36 ساعت قبل یا بعد از مصرف داروهای مهارکننده آنزیم مبدل آنژیوتانسین (ACE Inhibitors) مانند کاپتوپریل یا انالاپریل مصرف کرد.
            </li>
          </ul>

          <Card className="my-8 border-l-4 border-l-primary bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-2">💡 نکته مهم:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    در طول درمان با ساکوبیتریل/والزارتان، پزشک به طور منظم <Link to="/articles/blood-pressure-measurement" className="text-primary hover:underline">فشار خون</Link>، سطح پتاسیم و عملکرد کلیه شما را با آزمایش خون کنترل خواهد کرد. از مصرف خودسرانه مکمل‌های حاوی پتاسیم و جایگزین‌های نمک که پتاسیم دارند، خودداری کنید.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="my-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    نیاز به مشاوره تخصصی قلب و عروق دارید؟
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    برای <strong>تنظیم دقیق دوز ساکوبیتریل/والزارتان</strong>، <strong>پایش منظم عوارض جانبی</strong> و <strong>کنترل عملکرد قلبی</strong>، <Link to="/services/cardiology" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب و عروق در منزل</Link> را رزرو کنید. ویزیت تخصصی در منزل برای بیماران قلبی راحتی و آسودگی خیال بیشتری فراهم می‌کند.
                  </p>
                  <a href="tel:09386117912">
                    <Button size="lg" className="gap-2">
                      <Phone className="w-5 h-5" />
                      تماس با نوید زندگی: 09386117912
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="my-8">
            <PricingInfo />
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mr-4">
              <li>ساکوبیتریل؛والزارتان - قلب شما، کلینیک تخصصی قلب و عروق</li>
              <li>بیتوال® (ساکوبیتریل/ والسارتان) - داروسازی اکتوورکو</li>
              <li>ساکوبیتریل والسارتان چیست ؟ - دکتر کدیور</li>
              <li>Sacubitril and valsartan Uses, Side Effects & Warnings - Drugs.com</li>
              <li>Sacubitril/Valsartan – Uses, Dosage, Benefits, Side Effects & Precautions - Amberlife</li>
              <li>بررسی ترکیب ساکوبیتریل و والزارتان بر درمان مشکلات قلبی - داروخانه آنلاین</li>
            </ol>
          </div>

          <FAQSection faqs={faqs} />

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>
      </main>
    </ArticleLayout>
  );
};

export default SacubitrilValsartanPage;
