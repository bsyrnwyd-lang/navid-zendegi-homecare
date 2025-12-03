import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import gardasilImage from "@/assets/gardasil-vaccine-article.jpg";
import genitalWartsImage from "@/assets/genital-warts-article.jpg";
import gynecologyImage from "@/assets/gynecology.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";

const HPVVaccinePage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "واکسن HPV", url: "/articles/hpv-vaccine" }
  ];

  const faqs = [
    {
      question: "بهترین سن برای تزریق واکسن HPV چند سال است؟",
      answer: "بهترین سن برای تزریق واکسن HPV سنین 11 تا 12 سالگی است. واکسیناسیون باید قبل از اولین تماس جنسی انجام شود تا حداکثر اثربخشی حاصل شود. با این حال، افراد تا 26 سال و در موارد خاص تا 45 سال نیز می‌توانند واکسینه شوند."
    },
    {
      question: "آیا پسران هم باید واکسن HPV بزنند؟",
      answer: "بله، واکسن HPV برای هر دو جنس توصیه می‌شود. در پسران، این واکسن از سرطان‌های آلت تناسلی، مقعد و سر و گردن که مرتبط با HPV هستند جلوگیری می‌کند. همچنین از زگیل تناسلی نیز پیشگیری می‌کند."
    },
    {
      question: "واکسن HPV چند دوز دارد؟",
      answer: "تعداد دوزها به سن فرد بستگی دارد. کودکان زیر 15 سال به 2 دوز با فاصله 6 تا 12 ماه نیاز دارند. نوجوانان و بزرگسالان 15 تا 26 سال به 3 دوز نیاز دارند که دوز دوم 1 تا 2 ماه و دوز سوم 6 ماه پس از دوز اول تزریق می‌شود."
    },
    {
      question: "عوارض جانبی واکسن HPV چیست؟",
      answer: "شایع‌ترین عوارض جانبی شامل درد، تورم و قرمزی در محل تزریق، سردرد و تب خفیف است. این عوارض موقتی هستند. در نوجوانان ممکن است به دلیل ترس از سوزن غش رخ دهد، لذا توصیه می‌شود 15 دقیقه پس از تزریق استراحت کنند."
    },
    {
      question: "آیا واکسن HPV بعد از ابتلا به ویروس هم مؤثر است؟",
      answer: "واکسن نمی‌تواند عفونت‌های موجود را درمان کند، اما حتی اگر فرد به یکی از انواع HPV مبتلا شده باشد، واکسن می‌تواند در برابر سایر سویه‌هایی که هنوز به آن‌ها مبتلا نشده محافظت ایجاد کند."
    }
  ];

  const relatedArticles = [
    {
      title: "زگیل تناسلی: علل، علائم و درمان",
      description: "راهنمای جامع شناخت و درمان زگیل‌های تناسلی ناشی از HPV",
      image: genitalWartsImage,
      link: "/articles/genital-warts",
      category: "زنان"
    },
    {
      title: "خدمات زنان در منزل",
      description: "دسترسی به خدمات تخصصی زنان و زایمان در محل زندگی شما",
      image: gynecologyImage,
      link: "/services/gynecology",
      category: "خدمات"
    },
    {
      title: "واکسیناسیون: راهنمای کامل",
      description: "اهمیت واکسیناسیون و برنامه زمان‌بندی واکسن‌ها",
      image: vaccinationImage,
      link: "/articles/vaccination",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="واکسن HPV: پیشگیری از سرطان دهانه رحم و بیماری‌های تناسلی | نوید زندگی"
        description="راهنمای جامع واکسن HPV شامل انواع واکسن، سن مناسب تزریق، برنامه دوزبندی، اثربخشی و عوارض جانبی. خدمات تزریق واکسن در منزل."
        keywords="واکسن HPV، گارداسیل، سرطان دهانه رحم، زگیل تناسلی، واکسیناسیون، پیشگیری از سرطان"
        canonical="https://navidzendegi.com/articles/hpv-vaccine"
        ogType="article"
        publishedTime="2024-12-03"
        modifiedTime="2024-12-03"
      />
      <ArticleSchema
        title="واکسن HPV: پیشگیری از سرطان‌های مرتبط با ویروس پاپیلومای انسانی"
        description="راهنمای جامع واکسن HPV شامل انواع واکسن، سن مناسب تزریق، برنامه دوزبندی و اثربخشی"
        publishedTime="2024-12-03"
        modifiedTime="2024-12-03"
        image={gardasilImage}
      />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                واکسن HPV: پیشگیری از سرطان‌های مرتبط با ویروس پاپیلومای انسانی
              </h1>
              <img
                src={gardasilImage}
                alt="واکسن HPV برای پیشگیری از سرطان دهانه رحم"
                className="w-full rounded-lg shadow-md mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="text-lg mb-6">
                واکسن ویروس پاپیلومای انسانی (HPV) یک واکسن حیاتی است که برای جلوگیری از عفونت با سویه‌های پرخطر HPV و در نتیجه پیشگیری از چندین نوع سرطان و بیماری تناسلی تجویز می‌شود. این واکسن یک موفقیت بزرگ در بهداشت عمومی محسوب می‌شود، زیرا می‌تواند از سرطان قبل از شروع آن جلوگیری کند.
              </p>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
                <p className="text-destructive font-semibold mb-0">
                  هشدار: تصمیم‌گیری درباره واکسیناسیون باید با مشورت پزشک انجام شود. این مقاله جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">هدف و بیماری‌های قابل پیشگیری</h2>
              <p className="mb-4">
                HPV شایع‌ترین عفونت منتقله از راه جنسی در جهان است. سویه‌های پرخطر HPV مسئول تقریباً تمام موارد سرطان دهانه رحم هستند. هدف اصلی واکسن، مقابله با سویه‌های زیر است:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">سویه‌های پرخطر (High-Risk)</h3>
              <p className="mb-4">
                HPV نوع 16 و 18 مسئول حدود 70 تا 90 درصد از موارد <a href="/articles/genital-warts" className="text-primary hover:underline">سرطان دهانه رحم</a> و بخش قابل توجهی از سرطان‌های واژن، فرج، مقعد، آلت تناسلی و اوروفارنکس (سر و گردن) هستند.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">سویه‌های کم‌خطر (Low-Risk)</h3>
              <p className="mb-4">
                HPV نوع 6 و 11 مسئول حدود 90 درصد از موارد <a href="/articles/genital-warts" className="text-primary hover:underline">زگیل تناسلی</a> هستند.
              </p>

              <p className="mb-6">
                هدف نهایی واکسیناسیون گسترده با واکسن HPV، یکی از اجزای اصلی برنامه حذف سرطان دهانه رحم سازمان جهانی بهداشت (WHO) است.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">انواع واکسن و پروتکل‌های دوز</h2>
              <p className="mb-4">
                در حال حاضر، واکسن 9-ظرفیتی (Gardasil 9) که در برابر 9 سویه شایع و پرخطر ایمنی ایجاد می‌کند، توسط نهادهای بهداشتی بزرگ جهانی توصیه می‌شود.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">توصیه‌های سنی اصلی</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>سن هدف:</strong> واکسیناسیون به طور روتین برای دختران و پسران در سنین 11 تا 12 سالگی توصیه می‌شود</li>
                <li><strong>اهمیت:</strong> واکسیناسیون باید پیش از اولین تماس جنسی انجام شود تا حداکثر اثربخشی حاصل شود</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">برنامه‌های دوزبندی</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>کودکان زیر 15 سال:</strong> 2 دوز، دوز دوم 6 تا 12 ماه پس از دوز اول</li>
                <li><strong>نوجوانان و بزرگسالان 15 تا 26 سال:</strong> 3 دوز، دوز دوم 1 تا 2 ماه و دوز سوم 6 ماه پس از دوز اول</li>
                <li><strong>بزرگسالان 27 تا 45 سال:</strong> 3 دوز، فقط در موارد خاص و با مشورت پزشک (تصمیم‌گیری مشترک)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">اثربخشی و ایمنی واکسن</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">اثربخشی</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>اثربخشی بالا:</strong> در افرادی که پیش از قرار گرفتن در معرض ویروس واکسینه می‌شوند، واکسن در جلوگیری از ضایعات پیش‌سرطانی نزدیک به 90 تا 100 درصد مؤثر است</li>
                <li><strong>نتایج بلندمدت:</strong> مطالعات نشان داده‌اند که واکسیناسیون HPV به طور قابل توجهی نرخ سرطان دهانه رحم را در کشورهایی که واکسیناسیون را به طور گسترده اجرا کرده‌اند، کاهش داده است</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ایمنی</h3>
              <p className="mb-4">
                بررسی‌های گسترده نهادهای نظارتی جهانی (مانند CDC و FDA) تأیید کرده‌اند که واکسن HPV ایمن است و ارتباطی بین آن و بیماری‌های مزمن یا خودایمنی مشاهده نشده است.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">عوارض جانبی شایع</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>درد، تورم و قرمزی در محل تزریق</li>
                <li>سردرد یا تب خفیف</li>
                <li><strong>غش (سنکوپ):</strong> در نوجوانان به دلیل ترس از سوزن شایع است؛ توصیه می‌شود فرد پس از تزریق 15 دقیقه در حالت نشسته یا خوابیده استراحت کند</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">خدمات تزریق واکسن در منزل</h2>
              <p className="mb-6">
                مجموعه <a href="/" className="text-primary hover:underline">نوید زندگی</a> خدمات تزریق واکسن HPV را در منزل شما ارائه می‌دهد. پرستاران مجرب ما با رعایت کامل اصول بهداشتی، واکسیناسیون ایمن را انجام می‌دهند. برای دریافت <a href="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</a> و مشاوره با ما تماس بگیرید.
              </p>

              {/* CTA Section */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">مشاوره و تزریق واکسن در منزل</h3>
                <p className="text-muted-foreground mb-4">
                  برای مشاوره تخصصی و تزریق واکسن HPV در منزل با کارشناسان ما تماس بگیرید.
                </p>
                <Button onClick={handleCall} size="lg" className="text-lg">
                  <Phone className="ml-2 h-5 w-5" />
                  <span>تماس: </span>
                  <a href={`tel:${phoneNumber}`} className="mr-1">{phoneNumber}</a>
                </Button>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">منابع</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>World Health Organization (WHO). Human papillomavirus (HPV) and cervical cancer.</li>
                <li>Centers for Disease Control and Prevention (CDC). HPV Vaccine Information For Clinicians.</li>
                <li>Human papillomavirus vaccine: a systematic review of effectiveness and safety. Cochrane Database.</li>
                <li>HPV Vaccine - Safety and Efficacy. Mayo Clinic.</li>
              </ul>
            </div>
          </article>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default HPVVaccinePage;
