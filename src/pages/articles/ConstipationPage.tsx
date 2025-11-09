import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import ArticleSchema from "@/components/ArticleSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import constipationImage from "@/assets/constipation-article.jpg";

const ConstipationPage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "یبوست", url: "/articles/constipation" }
  ];

  const faqs = [
    {
      question: "یبوست دقیقاً چیست و چه زمانی باید نگران باشیم؟",
      answer: "یبوست زمانی است که کمتر از سه بار در هفته دفع داشته باشید یا دفع با سختی، زور زدن یا احساس تخلیه ناقص همراه باشد. اگر یبوست همراه با خون در مدفوع، درد شدید شکم، کاهش وزن یا علائم انسداد روده باشد، باید فوراً به پزشک مراجعه کنید."
    },
    {
      question: "چه غذاهایی برای درمان یبوست مفید هستند؟",
      answer: "غذاهای غنی از فیبر مانند غلات کامل، میوه‌های تازه (خصوصاً آلو و انجیر)، سبزیجات برگ‌سبز، حبوبات، و آجیل بسیار مفید هستند. همچنین نوشیدن آب کافی (حداقل 8 لیوان در روز) ضروری است."
    },
    {
      question: "آیا ورزش می‌تواند به بهبود یبوست کمک کند؟",
      answer: "بله، فعالیت بدنی منظم یکی از موثرترین راه‌های پیشگیری و درمان یبوست است. ورزش‌های متوسط مانند پیاده‌روی، دوچرخه‌سواری یا شنا می‌توانند حرکت روده را بهبود بخشند."
    },
    {
      question: "چه داروهایی می‌توانند باعث یبوست شوند؟",
      answer: "برخی مسکن‌ها (خصوصاً اوپیوئیدها)، داروهای ضد تشنج، آنتی‌اسیدهای حاوی کلسیم یا آلومینیوم، مکمل‌های آهن، برخی داروهای فشار خون، و داروهای ضدافسردگی می‌توانند یبوست ایجاد کنند."
    },
    {
      question: "چه زمانی باید از ملین استفاده کرد؟",
      answer: "ملین‌ها زمانی استفاده می‌شوند که تغییرات رژیم غذایی و سبک زندگی کافی نباشند. بهتر است قبل از استفاده طولانی‌مدت از ملین‌ها با پزشک مشورت کنید، زیرا استفاده نادرست می‌تواند به روده آسیب برساند."
    },
    {
      question: "آیا یبوست مزمن می‌تواند خطرناک باشد؟",
      answer: "یبوست مزمن اگر درمان نشود می‌تواند منجر به عوارضی مانند هموروئید، فیشر مقعدی، پرولاپس رکتال یا حتی انسداد روده شود. همچنین می‌تواند کیفیت زندگی را به شدت کاهش دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "درد شکم؛ علل، انواع، تشخیص و مدیریت",
      description: "راهنمای کامل درد شکم از علل ساده تا موارد اورژانسی",
      image: "/src/assets/abdominal-pain-article.jpg",
      link: "/articles/abdominal-pain",
      category: "عمومی"
    },
    {
      title: "ورم پا؛ انواع، علل، تشخیص و درمان",
      description: "راهنمای جامع ورم پا و روش‌های تشخیص و درمان",
      image: "/src/assets/leg-swelling-article.jpg",
      link: "/articles/leg-swelling",
      category: "عمومی"
    },
    {
      title: "دیابت؛ علائم، انواع و مدیریت",
      description: "راهنمای جامع دیابت و کنترل قند خون",
      image: "/src/assets/diabetes-article.jpg",
      link: "/articles/diabetes",
      category: "عمومی"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <SEOHead
        title="یبوست؛ علل، انواع، تشخیص و راهکارهای علمی | راهنمای جامع"
        description="راهنمای کامل یبوست: انواع یبوست حاد و مزمن، علل شایع، تأثیر تغذیه و فعالیت بدنی، روش‌های تشخیص و درمان علمی"
        keywords="یبوست، Constipation، یبوست مزمن، علل یبوست، درمان یبوست، فیبر، رژیم غذایی یبوست، ملین، ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/constipation"
        ogImage={constipationImage}
        ogType="article"
        publishedTime="2024-01-27T09:00:00Z"
        modifiedTime="2024-01-27T09:00:00Z"
      />
      <ArticleSchema
        title="یبوست؛ علل، انواع، تشخیص و راهکارهای علمی"
        description="راهنمای کامل یبوست: انواع یبوست حاد و مزمن، علل شایع، تأثیر تغذیه و فعالیت بدنی، روش‌های تشخیص و درمان علمی"
        publishedTime="2024-01-27T09:00:00Z"
        modifiedTime="2024-01-27T09:00:00Z"
        image={constipationImage}
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <div className="mb-8">
          <img
            src={constipationImage}
            alt="یبوست و سلامت دستگاه گوارش"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
            loading="eager"
          />
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            یبوست؛ علل، انواع، تشخیص و راهکارهای علمی
          </h1>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">مقدمه</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              یبوست زمانی اتفاق می‌افتد که حرکات روده کمتر از معمول باشد یا دفع با سختی، زور زدن یا احساس ناقص بودن همراه باشد. طبق معیارهای بالینی، معمولاً کمتر از سه دفع در هفته یا دفع با سختی را یبوست می‌نامند.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              این وضعیت می‌تواند گذرا باشد یا مزمن شود و تأثیری جدی بر کیفیت زندگی بگذارد.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">تعریف و انواع یبوست</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">یبوست حاد (Acute):</strong> شروع ناگهانی دارد، ممکن است ناشی از تغییر <a href="/articles/diabetes" className="text-primary hover:underline">رژیم غذایی</a>، مسافرت، داروها یا بیماری باشد.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">یبوست مزمن (Chronic):</strong> علائم بیش از چند هفته ادامه دارند و معمولاً باعث ناراحتی، زور زیاد یا احساس ناقص دفع می‌شوند.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">یبوست «عملکردی» (Functional constipation):</strong> بدون علت ساختاری آشکار است (مثلاً اختلال حرکتی روده یا اختلال عضلات کف لگن).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">علل و عوامل خطر</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              یبوست می‌تواند ناشی از عوامل متعدد باشد، از سبک زندگی تا بیماری‌های زمینه‌ای:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>رژیم غذایی فاقد فیبر کافی و مایعات کم</li>
              <li>کم‌تحرکی یا نشستن طولانی مدت</li>
              <li>داروها: مانند برخی مسکن‌ها، داروهای ضد تشنج، دیورتیک‌ها، کلسیم یا آهن</li>
              <li>شرایط پزشکی و متابولیک: هیپوتیروئیدی، <a href="/articles/diabetes" className="text-primary hover:underline">دیابت</a>، اختلال عملکرد روده، مشکلات کف لگن</li>
              <li>بارداری و تغییرات هورمونی یا فشردگی روده‌ها</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">علائم و زمانی که باید به پزشک مراجعه کرد</h2>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">علائم معمول</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4 mb-4">
              <li>کمتر از سه دفع در هفته یا احساس زور زیاد</li>
              <li>مدفوع سفت، خشک یا تکه‌تکه‌شده</li>
              <li>احساس تخلیه ناقص، نفخ یا <a href="/articles/abdominal-pain" className="text-primary hover:underline">درد شکم</a></li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">علائم هشدار که نیاز به بررسی فوری دارند</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>خون یا مخاط در مدفوع</li>
              <li>درد بسیار شدید شکم یا نفخ ناگهانی</li>
              <li>کاهش وزن غیرمستقیم</li>
              <li>نشانه‌های انسداد روده یا اختلال کف لگن</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              در این حالت‌ها باید سریعاً با پزشک تماس گرفت.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">تشخیص</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              پزشک بر اساس تاریخچه، معاینه فیزیکی و در صورت نیاز آزمایش‌ها یا تصویربرداری تصمیم می‌گیرد. از جمله:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>سوال درباره رژیم غذایی، داروهای مصرفی، تحرک، زمان شروع علائم</li>
              <li>معاینه شکم، کف لگن، بررسی نشانه‌های انسداد یا اختلال دفع</li>
              <li>آزمایش خون یا عملکرد تیروئید، تصویربرداری در موارد خاص یا ارجاع به گوارش یا کولورکتال</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">درمان و مدیریت</h2>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">تغییرات سبک زندگی و تغذیه</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4 mb-4">
              <li>رژیم غذایی با فیبر بالا (مثلاً غلات کامل، میوه‌ها، سبزیجات، حبوبات)؛ فیبر به شکل عمده اولین خط درمان است</li>
              <li>مصرف مایعات کافی، خصوصاً زمانی که فیبر افزایش می‌یابد</li>
              <li>تحرک منظم: ورزش متوسط تا زیاد با کاهش ریسک یبوست مرتبط است</li>
              <li>زمان‌بندی منظم برای رفتن به دستشویی (مثلاً پس از صبحانه) و اجتناب از نگه‌داشتن مدفوع</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">درمان دارویی و مداخلات دیگر</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>ملین‌ها و نرم‌کننده‌های مدفوع: در صورتی که تغییرات سبک زندگی کافی نباشد</li>
              <li>در یبوست مزمن یا اختلال عملکرد کف لگن ممکن است نیاز به بیوفیدبک یا درمان تخصصی عضلات کف لگن باشد</li>
              <li>در موارد بسیار خاص، ارجاع به جراحی ممکن است انجام شود</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">ارتباط با خدمات ویزیت پزشک در منزل</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              اگر یبوست دارید و تغییرات ساده تغذیه‌ای/سبک‌زندگی نتیجه‌بخش نبوده است، خدمات <a href="/services/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</a> می‌تواند بسیار مفید باشد:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>پزشک در منزل می‌تواند سابقه دقیق شما را بگیرد، داروها و مکمل‌هایتان را بررسی کند</li>
              <li>رژیم غذایی، تحرک و عوامل محیطی را ارزیابی کند</li>
              <li>در صورت لزوم آزمایش یا ارجاع به متخصص را پیشنهاد دهد</li>
              <li>پیگیری منظم انجام دهد تا یبوست به وضعیت مزمن یا عارضه‌دار تبدیل نشود</li>
            </ul>
          </section>

          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                نیاز به مشاوره پزشکی دارید؟
              </h3>
              <p className="text-muted-foreground mb-4">
                برای دریافت مشاوره تخصصی و ویزیت پزشک در منزل با ما تماس بگیرید.
              </p>
              <Button
                onClick={handleCall}
                className="w-full sm:w-auto"
                size="lg"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس با {phoneNumber}
              </Button>
            </CardContent>
          </Card>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">خلاصه</h2>
            <p className="text-muted-foreground leading-relaxed">
              یبوست مشکل رایجی است که اغلب با تغییرات تغذیه‌ای، مایعات کافی، تحرک و رعایت عادات روزانه قابل کنترل است. اما اگر علائم شدید، مداوم یا همراه با خون بودند، باید با پزشک مشورت شود. استفاده از خدمات پزشکی در منزل می‌تواند روند ارزیابی و درمان را برای شما ساده‌تر کند.
            </p>
          </section>

          <section className="mb-8 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mr-4">
              <li>"Constipation: Symptoms & Causes." Cleveland Clinic.</li>
              <li>Tramonte SM, Brand MB, Mulrow CD, et al. The treatment of chronic constipation in adults: a systematic review. NBK 67055.</li>
              <li>Wadhwa V, et al. Chronic constipation: Current treatment options. PMC.</li>
              <li>Menees SB, et al. Evidence-based treatment recommendations for OTC management… PMC.</li>
              <li>"Constipation: Symptoms, causes, diagnosis, and treatment." Mayo Clinic.</li>
              <li>"Food, drinks and diets and their effect on chronic constipation in adults: systematic review & meta-analysis." Wiley Online Library.</li>
              <li>"Physical activity and constipation: A systematic review of cohort studies." PMC.</li>
              <li>"Foods for Constipation." Johns Hopkins Medicine.</li>
              <li>"Evidence-Based Clinical Guidelines for Chronic Constipation 2023." Karger Digestive Disease & Sciences.</li>
            </ol>
          </section>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ConstipationPage;