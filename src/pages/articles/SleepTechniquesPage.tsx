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
import depressionImage from "@/assets/depression-article.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";
import diaphragmaticBreathingImage from "@/assets/diaphragmatic-breathing.jpg";

const SleepTechniquesPage = () => {
  const faqs = [
    {
      question: "چرا بعد از خوابیدن چند بار در شب بیدار می‌شوم؟",
      answer: "بیدار شدن مکرر در شب می‌تواند ناشی از استرس، اضطراب، مصرف کافئین یا الکل، آپنه خواب، یا بیماری‌های زمینه‌ای مانند رفلاکس معده باشد. اگر این مشکل مزمن شده، مشاوره با پزشک ضروری است."
    },
    {
      question: "آیا استفاده از ملاتونین برای خواب بی‌خطر است؟",
      answer: "ملاتونین در دوزهای پایین (0.5 تا 5 میلی‌گرم) برای کوتاه‌مدت نسبتاً امن است، اما برای مصرف طولانی‌مدت یا در افراد با بیماری‌های خاص، باید با پزشک مشورت کنید. مصرف خودسرانه توصیه نمی‌شود."
    },
    {
      question: "تکنیک 4-7-8 برای خواب چگونه کار می‌کند؟",
      answer: "این تکنیک تنفسی با کاهش ضربان قلب و فعال کردن سیستم عصبی آرامش‌بخش، به کاهش استرس و تسهیل به خواب رفتن کمک می‌کند. به مدت 4 ثانیه نفس بکشید، 7 ثانیه نگه دارید و 8 ثانیه بازدم کنید."
    },
    {
      question: "چه زمانی باید برای مشکلات خواب به پزشک مراجعه کنم؟",
      answer: "اگر بی‌خوابی بیش از 3 هفته ادامه دارد، بر عملکرد روزانه شما تأثیر می‌گذارد، یا با علائمی مانند خروپف شدید، توقف تنفس در خواب یا خستگی مفرط همراه است، باید به پزشک مراجعه کنید."
    },
    {
      question: "آیا خواب روزانه به بهبود بی‌خوابی شبانه کمک می‌کند؟",
      answer: "خواب روزانه طولانی (بیش از 20-30 دقیقه) می‌تواند چرخه خواب شبانه را مختل کند. اگر بی‌خوابی دارید، بهتر است از خواب روزانه خودداری کنید تا فشار خواب شبانه افزایش یابد."
    },
    {
      question: "آیا داروهای خواب‌آور عادت‌آور هستند؟",
      answer: "بله، بسیاری از داروهای خواب‌آور به ویژه بنزودیازپین‌ها و داروهای Z می‌توانند با مصرف طولانی‌مدت ایجاد وابستگی جسمی و روانی کنند. مصرف آن‌ها باید فقط تحت نظر پزشک و برای دوره‌های کوتاه باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "افسردگی: علائم، انواع و روش‌های درمانی",
      description: "افسردگی یکی از شایع‌ترین اختلالات خلقی است که اغلب با مشکلات خواب همراه است.",
      image: depressionImage,
      link: "/articles/depression",
      category: "سلامت روان"
    },
    {
      title: "تنفس دیافراگمی: تکنیک آرام‌سازی برای استرس و اضطراب",
      description: "آموزش تکنیک تنفس عمیق برای کاهش استرس و بهبود کیفیت خواب.",
      image: diaphragmaticBreathingImage,
      link: "/articles/breathing-treatment",
      category: "سلامت عمومی"
    },
    {
      title: "ویزیت روانپزشک در منزل",
      description: "مشاوره تخصصی روانپزشکی در منزل برای تشخیص و درمان اختلالات خواب.",
      image: psychiatryImage,
      link: "/services/psychiatry",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="راهکارهای کمک به خواب رفتن | تکنیک‌های تنفسی و مکمل‌های دارویی"
        description="راهکارهای علمی و موثر برای بهبود کیفیت خواب شامل تکنیک‌های تنفسی، بهداشت خواب، ملاتونین و داروهای خواب‌آور. مشاوره تخصصی آنلاین و حضوری."
        keywords="راهکارهای خواب, تکنیک خواب, بی خوابی, ملاتونین, تنفس دیافراگمی, تکنیک 4-7-8, داروهای خواب آور, بهداشت خواب, اختلالات خواب, مشاوره خواب"
        canonical="https://navidzendegi.com/articles/sleep-techniques"
        ogType="article"
        publishedTime="2025-01-18"
        modifiedTime="2025-01-18"
      />
      
      <ArticleSchema
        title="راهکارهای کمک به خواب رفتن: از تکنیک‌های تنفسی تا مکمل‌های دارویی"
        description="راهکارهای علمی و موثر برای بهبود کیفیت خواب شامل تکنیک‌های تنفسی، بهداشت خواب، ملاتونین و داروهای خواب‌آور."
        publishedTime="2025-01-18"
        modifiedTime="2025-01-18"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "راهکارهای کمک به خواب رفتن", url: "/articles/sleep-techniques" }
          ]}
        />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            😴 راهکارهای کمک به خواب رفتن: از تکنیک‌های تنفسی تا مکمل‌های دارویی
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            مشکل در به خواب رفتن یا حفظ کیفیت خواب (بی‌خوابی یا Insomnia) یکی از شایع‌ترین اختلالات سلامتی است که بر کیفیت زندگی، تمرکز، و سلامت جسمی و روانی تأثیر می‌گذارد. راهکارهای کمک به خواب را می‌توان به دو دسته کلی تقسیم کرد: <Link to="/articles/breathing-treatment" className="text-primary hover:underline">تکنیک‌های رفتاری-شناختی</Link> و مکمل‌ها/داروها.
          </p>

          <Card className="my-8 border-l-4 border-l-primary bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>یادآوری مهم:</strong> این مقاله صرفاً جنبه اطلاع‌رسانی دارد و جایگزین مشاوره پزشکی نیست. هرگز داروهای خواب‌آور را بدون تجویز پزشک مصرف نکنید.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            🧘 تکنیک‌های رفتاری، شناختی و آرام‌سازی (غیردارویی)
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            بهترین و پایدارترین روش‌های کمک به خواب، بر تغییر الگوهای رفتاری و کاهش استرس متمرکز هستند:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۱. رعایت بهداشت خواب (Sleep Hygiene)
          </h3>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong>ساعت خواب منظم:</strong> تلاش کنید هر روز، حتی در روزهای تعطیل، در ساعت مشخصی بخوابید و بیدار شوید تا ساعت بیولوژیک بدن (Circadian Rhythm) تنظیم شود.
            </li>
            <li>
              <strong>محیط خواب:</strong> اتاق خواب باید تاریک، خنک و آرام باشد. استفاده از پرده‌های ضخیم و حذف نور آبی (مانند صفحه‌نمایش تلفن همراه) حداقل یک ساعت قبل از خواب ضروری است.
            </li>
            <li>
              <strong>تختخواب فقط برای خواب:</strong> از کار کردن، غذا خوردن یا تماشای تلویزیون در رختخواب خودداری کنید تا مغز، تختخواب را فقط با خواب مرتبط بداند.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۲. تکنیک‌های آرام‌سازی و تنفسی
          </h3>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong><Link to="/articles/breathing-treatment" className="text-primary hover:underline">تنفس دیافراگمی (Diaphragmatic Breathing)</Link>:</strong> این تکنیک با فعال کردن سیستم عصبی پاراسمپاتیک (مسئول آرامش)، ضربان قلب و فشار خون را کاهش می‌دهد. به پشت دراز بکشید، یک دست را روی قفسه سینه و دست دیگر را روی شکم قرار دهید. به آرامی و عمیق از طریق بینی نفس بکشید به طوری که فقط شکم شما (و نه قفسه سینه) بالا بیاید. به آرامی از دهان بازدم کنید. این کار را 10 تا 15 بار تکرار کنید.
            </li>
            <li>
              <strong>تکنیک 4-7-8:</strong> به آرامی 4 ثانیه نفس بکشید، نفس را 7 ثانیه نگه دارید، و به آرامی 8 ثانیه بازدم کنید.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۳. محدودیت خواب و کنترل محرک (Sleep Restriction & Stimulus Control)
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            اگر بعد از 20 دقیقه خوابتان نبرد، از رختخواب خارج شوید و به یک فعالیت آرامش‌بخش (مانند مطالعه) در یک اتاق دیگر بپردازید. زمانی به رختخواب برگردید که احساس خواب‌آلودگی کردید. این کار باعث می‌شود ارتباط تختخواب با بیداری و اضطراب قطع شود.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            💊 مکمل‌ها و داروهای کمک به خواب (فقط با مشاوره پزشکی)
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            استفاده از دارو و مکمل باید به عنوان یک راه‌حل موقت و تحت نظر پزشک برای کنترل بی‌خوابی حاد یا کوتاه‌مدت باشد:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۱. مکمل‌های بدون نسخه (OTC Supplements)
          </h3>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong>ملاتونین (Melatonin):</strong> این هورمون به طور طبیعی توسط بدن تولید می‌شود و ساعت بیولوژیک را تنظیم می‌کند. مصرف مکمل ملاتونین (معمولاً در دوزهای پایین 0.5 تا 5 میلی‌گرم) می‌تواند به تنظیم ریتم شبانه‌روزی (مثلاً در پرواززدگی یا تأخیر فاز خواب) کمک کند. برای بی‌خوابی مزمن همیشه مؤثر نیست و مصرف طولانی‌مدت آن توصیه نمی‌شود.
            </li>
            <li>
              <strong>گیاهان دارویی:</strong> مانند سنبل‌الطیب (Valerian)، بابونه و اسطوخودوس که خاصیت آرام‌بخش دارند.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۲. داروهای تجویزی (Prescription Medications)
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            داروهای زیر برای درمان بی‌خوابی مزمن یا شدید تجویز می‌شوند، اما به دلیل ریسک وابستگی، معمولاً برای دوره‌های کوتاه مدت تجویز می‌شوند:
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-6 mb-6">
            <li>
              <strong>داروهای غیر بنزودیازپینی (Non-Benzodiazepines) یا داروهای Z:</strong> مانند زولپیدم (Zolpidem) و زانوپلون (Zaleplon). این داروها با اثرگذاری سریع بر گیرنده‌های GABA، به شروع خواب کمک می‌کنند.
            </li>
            <li>
              <strong>بنزودیازپین‌ها (Benzodiazepines):</strong> مانند لورازپام یا آلپرازولام. این داروها برای درمان بی‌خوابی مرتبط با اضطراب شدید استفاده می‌شوند، اما به دلیل ریسک بالای وابستگی و تحمل، مصرف آن‌ها باید محدود باشد.
            </li>
            <li>
              <strong>داروهای ضد افسردگی با اثر خواب‌آور:</strong> برخی داروهای ضد افسردگی مانند ترازودون (Trazodone) در دوزهای پایین برای القای خواب در افرادی که بی‌خوابی آن‌ها با <Link to="/articles/depression" className="text-primary hover:underline">افسردگی</Link> یا اضطراب همراه است، تجویز می‌شوند.
            </li>
          </ul>

          <Card className="my-8 border-l-4 border-l-destructive bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-2">⚠️ هشدار حیاتی:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    مصرف هرگونه داروی خواب‌آور بدون مشورت پزشک، به ویژه در افراد مسن یا دارای بیماری‌های زمینه‌ای، می‌تواند خطرناک بوده و عوارضی مانند خواب‌آلودگی در طول روز، افزایش خطر سقوط و وابستگی جسمی و روانی ایجاد کند.
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
                    نیاز به مشاوره تخصصی برای اختلالات خواب دارید؟
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    اگر بی‌خوابی شما مزمن شده و با راهکارهای غیردارویی بهبود نیافته است، برای <strong>تشخیص ریشه اصلی اختلال خواب</strong> و <strong>تنظیم برنامه درمانی دارویی یا رفتاری مناسب</strong>, <Link to="/services/psychiatry" className="text-primary hover:underline font-semibold">مشاوره آنلاین یا حضوری با روانپزشک</Link> یا متخصص اعصاب و روان را رزرو کنید.
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
              <li>American Academy of Sleep Medicine (AASM). (2021). Sleep Hypnosis for Insomnia.</li>
              <li>Mayo Clinic. (2024). Melatonin: Safe use of supplements for sleep.</li>
              <li>National Sleep Foundation (NSF). (2023). Insomnia Treatment: Cognitive Behavioral Therapy (CBT-I).</li>
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

export default SleepTechniquesPage;
