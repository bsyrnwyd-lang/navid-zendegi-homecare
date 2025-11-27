import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import citalopramImage from "@/assets/citalopram-antidepressant.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";
import medicalAnxietyImage from "@/assets/medical-anxiety-article.jpg";

const CitalopramPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "قرص سیتالوپرام", url: "/articles/citalopram" },
  ];

  const faqs = [
    {
      question: "سیتالوپرام چه مدت طول می‌کشد تا اثر کند؟",
      answer: "شروع اثر ضد افسردگی سیتالوپرام معمولاً 1 تا 4 هفته طول می‌کشد و تأثیر کامل آن ممکن است پس از 8 تا 12 هفته مشاهده شود. بنابراین، قطع یا تغییر دوز نباید خودسرانه باشد و باید با صبر و پیگیری تحت نظر روانپزشک ادامه یابد."
    },
    {
      question: "چرا سیتالوپرام نباید به طور ناگهانی قطع شود؟",
      answer: "قطع ناگهانی سیتالوپرام منجر به سندرم قطع مصرف (Discontinuation Syndrome) می‌شود که شامل علائمی مانند تهوع، سرگیجه، لرزش، اضطراب، اختلال خواب و احساس شوک الکتریکی در دست‌ها و پاها است. دوز دارو باید همیشه تحت نظر پزشک و به تدریج کاهش یابد."
    },
    {
      question: "چه عوارض قلبی خطرناکی با مصرف سیتالوپرام مرتبط است؟",
      answer: "سیتالوپرام، به ویژه در دوزهای بالاتر از 40 میلی‌گرم، می‌تواند باعث طولانی شدن فاصله QT در نوار قلب شود که خطر آریتمی قلبی خطرناک به نام تورساد دو پوانت و ایست قلبی ناگهانی را افزایش می‌دهد. علائم هشداردهنده شامل غش کردن، سرگیجه شدید، تپش قلب و درد قفسه سینه است."
    },
    {
      question: "سندرم سروتونین چیست؟",
      answer: "سندرم سروتونین یک وضعیت نادر اما بالقوه کشنده است که در اثر افزایش بیش از حد سروتونین در مغز ایجاد می‌شود، به ویژه هنگام مصرف همزمان با داروهای دیگر. علائم شامل بی‌قراری شدید، توهم، تند شدن ضربان قلب، افزایش تعریق، تب بالا، سفت شدن عضلات و مشکلات هماهنگی است."
    },
    {
      question: "آیا سیتالوپرام برای کودکان و نوجوانان امن است؟",
      answer: "داروهای ضد افسردگی، به ویژه در شروع درمان در کودکان، نوجوانان و جوانان زیر 25 سال، ممکن است ریسک افکار یا اقدام به خودکشی را افزایش دهند. پایش دقیق بیمار توسط خانواده و پزشک در هفته‌های ابتدایی درمان ضروری است."
    },
    {
      question: "چه کسانی نباید سیتالوپرام مصرف کنند؟",
      answer: "افرادی که سابقه آریتمی قلبی، طولانی شدن فاصله QT، نارسایی قلبی، یا مصرف همزمان داروهایی که سروتونین را افزایش می‌دهند (مانند MAOIs) دارند، نباید سیتالوپرام مصرف کنند. همچنین در سالمندان و افرادی با مشکلات کلیوی یا کبدی باید با احتیاط بیشتری تجویز شود."
    }
  ];

  const relatedArticles = [
    {
      title: "افسردگی: علائم، تشخیص و روش‌های درمان",
      description: "آشنایی کامل با علائم افسردگی، روش‌های تشخیص و گزینه‌های درمانی مؤثر",
      image: depressionImage,
      link: "/articles/depression",
      category: "روانپزشکی"
    },
    {
      title: "اضطراب پزشکی: علل، علائم و راهکارهای کنترل",
      description: "بررسی جامع اضطراب پزشکی و روش‌های مدیریت آن با کمک متخصصان",
      image: medicalAnxietyImage,
      link: "/articles/medical-anxiety",
      category: "روانپزشکی"
    },
    {
      title: "خدمات روانپزشکی در منزل",
      description: "دریافت مشاوره و ویزیت روانپزشک در منزل برای درمان افسردگی و اضطراب",
      image: psychiatryImage,
      link: "/services/psychiatry",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="قرص سیتالوپرام: کاربردها، عوارض جانبی و هشدارهای حیاتی | نوید زندگی"
        description="راهنمای کامل قرص سیتالوپرام (SSRI): مکانیسم عمل، کاربردها در درمان افسردگی و اضطراب، عوارض قلبی، سندرم سروتونین و ضرورت نظارت پزشکی"
        keywords="سیتالوپرام، ضد افسردگی، SSRI، افسردگی، اضطراب، OCD، عوارض قلبی، سندرم سروتونین، QT طولانی، قطع دارو، روانپزشکی"
        canonical="https://navidzendegi.com/articles/citalopram"
        ogType="article"
        publishedTime="2025-01-15T12:00:00+03:30"
        modifiedTime="2025-01-15T12:00:00+03:30"
      />
      <ArticleSchema
        title="قرص سیتالوپرام (Citalopram): کاربردها، مکانیسم عمل، عوارض جانبی و هشدارهای حیاتی"
        description="راهنمای جامع قرص سیتالوپرام شامل کاربردها، عوارض جانبی و هشدارهای مهم"
        publishedTime="2025-01-15T12:00:00+03:30"
        modifiedTime="2025-01-15T12:00:00+03:30"
        image="/src/assets/citalopram-antidepressant.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              قرص سیتالوپرام (Citalopram): کاربردها، مکانیسم عمل، عوارض جانبی و هشدارهای حیاتی
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>تاریخ انتشار: 15 ژانویه 2025</span>
            </div>
          </header>

          <img
            src={citalopramImage}
            alt="قرص سیتالوپرام - داروی ضد افسردگی SSRI"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg mb-8">
            <p className="text-destructive-foreground font-semibold mb-2">
              ⚠️ هشدار مهم: خودسرانه مصرف دارو ممنوع است
            </p>
            <p className="text-sm text-muted-foreground">
              سیتالوپرام باید فقط با تجویز پزشک متخصص و تحت نظارت دقیق مصرف شود. قطع یا تغییر دوز خودسرانه خطرناک است.
            </p>
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              قرص سیتالوپرام یکی از داروهای پرمصرف و مؤثر در گروه مهارکننده‌های انتخابی بازجذب سروتونین (SSRIs) است. این دارو با تنظیم سطح یکی از مهم‌ترین انتقال‌دهنده‌های عصبی در مغز، به بهبود خلق‌وخو و کاهش علائم اضطرابی کمک می‌کند. سیتالوپرام، مانند تمام داروهای مؤثر بر سیستم عصبی مرکزی، باید فقط با تجویز <a href="/services/psychiatry" className="text-primary hover:underline">پزشک متخصص روانپزشکی</a> و تحت نظارت دقیق مصرف شود.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              کاربردها و مکانیسم عمل سیتالوپرام
            </h2>
            <p>
              سیتالوپرام یک داروی ضد <a href="/articles/depression" className="text-primary hover:underline">افسردگی</a> است و برای درمان اختلالات زیر تجویز می‌شود:
            </p>

            <ul className="list-disc list-inside space-y-2 mr-6">
              <li><strong>اختلال افسردگی اساسی (Major Depressive Disorder):</strong> کمک به بهبود خلق‌وخو، افزایش سطح انرژی و انگیزه.</li>
              <li><strong>اختلال وسواس فکری-عملی (OCD):</strong> کمک به کنترل افکار وسواسی و اعمال اجباری.</li>
              <li><strong>اختلالات اضطرابی:</strong> از جمله اختلال هراس (Panic Disorder) و اختلال <a href="/articles/medical-anxiety" className="text-primary hover:underline">اضطراب اجتماعی</a>.</li>
              <li><strong>سایر موارد (خارج از برچسب):</strong> در مواردی مانند نوروپاتی دیابتی، انزال زودرس و اختلالات خوردن نیز ممکن است تجویز شود.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              مکانیسم عمل
            </h3>
            <p>
              سیتالوپرام با مهار انتخابی بازجذب سروتونین از شکاف سیناپسی در پایانه‌های عصبی، باعث افزایش سطح سروتونین فعال در مغز می‌شود. سروتونین که اغلب به عنوان "هورمون شادی" شناخته می‌شود، نقش کلیدی در تنظیم خلق‌وخو، خواب، اشتها و احساس خوب بودن دارد. افزایش فعالیت سروتونین به مرور زمان باعث ایجاد تعادل روانی و کاهش علائم بیماری می‌شود.
            </p>

            <div className="bg-accent/20 border-r-4 border-accent p-6 rounded-lg my-6">
              <p className="font-semibold mb-2">💡 نکته مهم:</p>
              <p className="text-sm">
                شروع اثر ضد افسردگی سیتالوپرام معمولاً 1 تا 4 هفته طول می‌کشد و تأثیر کامل آن ممکن است پس از 8 تا 12 هفته مشاهده شود. بنابراین، قطع یا تغییر دوز نباید خودسرانه باشد.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              عوارض جانبی شایع و موقت
            </h2>
            <p>
              مانند هر داروی دیگری، سیتالوپرام می‌تواند عوارض جانبی ایجاد کند که اغلب در چند هفته اول مصرف مشاهده شده و با عادت کردن بدن به دارو، برطرف می‌شوند:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">سیستم بدن</th>
                    <th className="border border-border p-3 text-right">عوارض شایع</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">دستگاه گوارش</td>
                    <td className="border border-border p-3">تهوع (شایع‌ترین عارضه)، سوءهاضمه، اسهال یا یبوست، خشکی دهان</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">سیستم عصبی مرکزی</td>
                    <td className="border border-border p-3">خواب‌آلودگی، بی‌خوابی، سردرد، گیجی، لرزش (Tremor)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">عملکرد جنسی</td>
                    <td className="border border-border p-3">کاهش میل جنسی، اختلال در رسیدن به ارگاسم، تأخیر در انزال (در مردان)</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">سایر موارد</td>
                    <td className="border border-border p-3">تعریق بیش‌ازحد، خستگی یا ضعف، تغییر در اشتها و وزن</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              هشدارهای حیاتی و عوارض جانبی جدی
            </h2>
            <p>
              برخی عوارض جانبی سیتالوپرام نادر، اما جدی هستند و در صورت مشاهده، باید فوراً به پزشک اطلاع داده شود:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. عوارض قلبی (سندرم QT طولانی)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>سیتالوپرام، به ویژه در دوزهای بالاتر از 40 میلی‌گرم (یا در سالمندان بالاتر از 20 میلی‌گرم)، می‌تواند باعث طولانی شدن فاصله QT در نوار قلب شود.</li>
              <li>این عارضه خطر یک آریتمی قلبی خطرناک به نام تورساد دو پوانت (Torsades de Pointes) و <a href="/articles/heart-attack-symptoms" className="text-primary hover:underline">ایست قلبی ناگهانی</a> را افزایش می‌دهد.</li>
              <li><strong>علائم هشداردهنده:</strong> غش کردن، سرگیجه شدید، تپش قلب سریع یا نامنظم، یا درد قفسه سینه.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. سندرم سروتونین
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>این یک وضعیت نادر اما بالقوه کشنده است که در اثر افزایش بیش از حد سروتونین در مغز ایجاد می‌شود، به ویژه هنگام مصرف همزمان با داروهای دیگر که سطح سروتونین را بالا می‌برند (مثل MAOIs یا برخی داروهای میگرن).</li>
              <li><strong>علائم:</strong> بی‌قراری شدید، توهم، تند شدن ضربان قلب، افزایش تعریق، تب بالا، سفت شدن عضلات و مشکلات هماهنگی.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۳. افکار و رفتار خودکشی
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>داروهای ضد افسردگی، به ویژه در شروع درمان یا هنگام تغییر دوز در کودکان، نوجوانان و جوانان زیر 25 سال، ممکن است ریسک افکار یا اقدام به خودکشی را افزایش دهند.</li>
              <li>پایش دقیق بیمار توسط خانواده و پزشک در هفته‌های ابتدایی درمان ضروری است.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۴. علائم قطع مصرف (Discontinuation Syndrome)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>هرگز نباید سیتالوپرام را به طور ناگهانی قطع کرد. قطع ناگهانی منجر به علائمی مانند تهوع، سرگیجه، لرزش، اضطراب، اختلال خواب و احساس شوک الکتریکی در دست‌ها و پاها می‌شود.</li>
              <li>دوز دارو باید همیشه تحت نظر پزشک و به تدریج کاهش یابد.</li>
            </ul>

            <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                مشاوره تخصصی برای مصرف ایمن سیتالوپرام
              </h3>
              <p className="text-foreground mb-4">
                مصرف سیتالوپرام نیازمند نظارت تخصصی است، به‌ویژه به دلیل هشدارهای قلبی و روانی. برای <a href="/services/psychiatry" className="text-primary hover:underline font-semibold">مشاوره روانپزشکی آنلاین</a> جهت تنظیم دقیق دوز و ارزیابی قلبی (ECG) قبل و حین مصرف، با نوید زندگی تماس بگیرید تا از ایمنی درمان خود مطمئن شوید.
              </p>
              <a href="tel:09386117912">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="ml-2 h-5 w-5" />
                  مشاوره روانپزشکی: 09386117912
                </Button>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Mayo Clinic. (2024). Citalopram (Oral Route) - Side Effects & Dosage.
              </li>
              <li>
                Stahl, S. M. (2017). Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Applications. Cambridge University Press.
              </li>
              <li>
                U.S. Food and Drug Administration (FDA). (2011). FDA Drug Safety Communication: Revised recommendations for citalopram related to a potential for abnormal heart rhythms with high doses.
              </li>
            </ol>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default CitalopramPage;
