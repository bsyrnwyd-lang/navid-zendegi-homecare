import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import LazyImage from "@/components/LazyImage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ginsengImage from "@/assets/ginseng-article.jpg";
import vitaminsHealthImage from "@/assets/vitamins-cold-article.jpg";
import onlineDoctorImage from "@/assets/home-medical-consultation.jpg";
import generalDoctorImage from "@/assets/general-doctor-home-clean.jpg";

const GinsengPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "جینسینگ: خواص و ملاحظات مصرف", url: "/articles/ginseng" }
  ];

  const relatedArticles = [
    {
      title: "نقش ویتامین‌ها در حفظ سلامتی",
      description: "اهمیت ویتامین‌ها و مکمل‌های غذایی در تقویت سیستم ایمنی و سلامت عمومی",
      image: vitaminsHealthImage,
      link: "/articles/vitamins-health",
      category: "تغذیه"
    },
    {
      title: "ویزیت آنلاین پزشک: راهنمای کامل",
      description: "مزایای ویزیت آنلاین، نحوه انجام مشاوره پزشکی از راه دور و موارد استفاده",
      image: onlineDoctorImage,
      link: "/services/online-doctor",
      category: "خدمات"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "خدمات ویزیت پزشک عمومی در منزل برای تشخیص و درمان بیماری‌های شایع",
      image: generalDoctorImage,
      link: "/general-doctor",
      category: "خدمات"
    }
  ];

  const faqs = [
    {
      question: "آیا جینسینگ برای همه افراد مناسب است؟",
      answer: "خیر، جینسینگ برای همه افراد مناسب نیست. افراد مبتلا به فشار خون بالا، بیماری‌های قلبی، دیابت، اختلالات خونریزی، بیماری‌های خودایمنی و زنان باردار یا شیرده باید قبل از مصرف حتماً با پزشک مشورت کنند. همچنین کودکان نباید بدون نظر پزشک جینسینگ مصرف کنند."
    },
    {
      question: "چه مقدار جینسینگ مصرف کنم؟",
      answer: "دوز مصرف جینسینگ بستگی به نوع آن (آسیایی یا آمریکایی)، فرم مصرفی (کپسول، پودر، عصاره) و هدف درمانی دارد. معمولاً دوز روزانه بین 200 تا 400 میلی‌گرم عصاره استاندارد شده توصیه می‌شود، اما حتماً باید با پزشک یا متخصص تغذیه مشورت کنید تا دوز مناسب برای شما تعیین شود."
    },
    {
      question: "چه زمانی باید جینسینگ مصرف کنم؟",
      answer: "بهترین زمان مصرف جینسینگ، صبح یا اوایل بعدازظهر است، زیرا خواص محرک آن می‌تواند باعث بی‌خوابی شود. از مصرف جینسینگ نزدیک به زمان خواب خودداری کنید. همچنین مصرف همراه با غذا می‌تواند از ناراحتی معده جلوگیری کند."
    },
    {
      question: "آیا جینسینگ با داروهای من تداخل دارد؟",
      answer: "بله، جینسینگ می‌تواند با داروهای متعددی تداخل جدی داشته باشد، از جمله داروهای ضد انعقاد (مانند وارفارین)، داروهای دیابت (مانند متفورمین)، داروهای فشار خون، داروهای ضد افسردگی (MAOIs) و برخی داروهای شیمی‌درمانی. قبل از مصرف جینسینگ، حتماً با پزشک خود مشورت کنید و لیست کامل داروهای مصرفی خود را ارائه دهید."
    },
    {
      question: "آیا مصرف طولانی‌مدت جینسینگ خطرناک است؟",
      answer: "مصرف طولانی‌مدت و مداوم جینسینگ (بیش از 3 تا 6 ماه) ممکن است با عوارضی همراه باشد. توصیه می‌شود پس از 2 تا 3 ماه مصرف، یک دوره استراحت 2 تا 3 هفته‌ای داشته باشید. برخی عوارض مصرف طولانی‌مدت شامل بی‌خوابی، تپش قلب، نوسانات فشار خون و تغییرات هورمونی است. همیشه تحت نظر پزشک مصرف کنید."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="جینسینگ (Ginseng): خواص آداپتوژنیک، انواع دارویی و ملاحظات مصرف | نوید زندگی"
        description="راهنمای جامع جینسینگ: انواع آسیایی و آمریکایی، خواص آداپتوژنیک، فواید برای انرژی و تمرکز، عوارض جانبی و تداخلات دارویی خطرناک. مشاوره تخصصی قبل از مصرف."
        keywords="جینسینگ, Ginseng, Panax ginseng, جینسینگ آسیایی, جینسینگ آمریکایی, آداپتوژن, جینسنوزید, خواص جینسینگ, عوارض جینسینگ, تداخلات دارویی جینسینگ, مکمل گیاهی, مشاوره مصرف جینسینگ"
        canonical="https://navidzendegi.com/articles/ginseng"
        ogType="article"
        publishedTime="2025-01-21"
        modifiedTime="2025-01-21"
      />

      <ArticleSchema
        title="جینسینگ (Ginseng): خواص آداپتوژنیک، انواع دارویی و ملاحظات مصرف"
        description="راهنمای جامع جینسینگ: انواع آسیایی و آمریکایی، خواص آداپتوژنیک، فواید برای انرژی و تمرکز، عوارض جانبی و تداخلات دارویی خطرناک"
        publishedTime="2025-01-21"
        modifiedTime="2025-01-21"
        image="/assets/ginseng-article.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            جینسینگ (Ginseng): خواص آداپتوژنیک، انواع دارویی و ملاحظات مصرف
          </h1>

          <LazyImage
            src={ginsengImage}
            alt="ریشه جینسینگ و مکمل‌های گیاهی - Ginseng root and herbal supplements"
            className="w-full h-auto rounded-lg shadow-md mb-8"
            width={800}
            height={400}
          />

          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">هشدار مهم: عدم خودسرانه مصرف</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              مصرف خودسرانه جینسینگ، به‌ویژه در افراد مبتلا به بیماری‌های مزمن یا مصرف‌کنندگان داروهای قلبی، فشار خون و دیابت، 
              می‌تواند تداخلات دارویی خطرناکی ایجاد کند. قبل از مصرف هرگونه مکمل گیاهی، حتماً با پزشک یا داروساز مشورت کنید.
            </AlertDescription>
          </Alert>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            جینسینگ نامی رایج برای ریشه گیاهان خانواده <strong>Panax</strong> است و یکی از محبوب‌ترین و پرمصرف‌ترین گیاهان دارویی در سراسر جهان به شمار می‌آید. 
            این گیاه در <a href="/articles/medical-consultation" className="text-primary hover:underline">طب سنتی چین</a> برای قرن‌ها به عنوان یک 
            آداپتوژن (Adaptogen) مورد استفاده قرار گرفته است؛ به این معنی که به بدن کمک می‌کند تا با استرس‌های فیزیکی، شیمیایی و محیطی سازگار شود [1].
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            انواع اصلی و ترکیبات فعال جینسینگ
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            دو نوع اصلی جینسینگ که بیشترین مطالعه علمی را دارند، عبارت‌اند از:
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              جینسینگ آسیایی یا کره‌ای (Panax ginseng)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>این نوع جینسینگ در کره و چین کشت می‌شود و اغلب به صورت خام (سفید) یا بخارپز و خشک شده (قرمز) مصرف می‌شود.</li>
              <li>اعتقاد بر این است که دارای خواص "گرم‌کننده" و محرک است.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              جینسینگ آمریکایی (Panax quinquefolius)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>این گونه در آمریکای شمالی کشت می‌شود و دارای خواص "خنک‌کننده" توصیف می‌شود.</li>
              <li>بیشتر برای بهبود آرامش استفاده می‌شود.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            ترکیبات فعال (جینسنوزیدها)
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-8">
            خواص دارویی جینسینگ عمدتاً ناشی از ترکیباتی به نام <strong>جینسنوزیدها (Ginsenosides)</strong> است. 
            جینسنوزیدها بر سیستم عصبی مرکزی، سیستم قلبی عروقی و سیستم ایمنی تأثیر می‌گذارند و مسئول اصلی اثرات آداپتوژنیک این گیاه هستند [2].
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            کاربردهای دارویی و اثرات تقویت‌کننده سلامتی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            مطالعات علمی گسترده‌ای در مورد اثرات جینسینگ انجام شده است. برخی از کاربردهای اصلی آن عبارت‌اند از:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                کاهش خستگی و افزایش انرژی
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                جینسینگ به بهبود استقامت فیزیکی و کاهش خستگی مرتبط با استرس یا بیماری‌های مزمن کمک می‌کند.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                عملکرد شناختی
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                برخی شواهد نشان می‌دهد که جینسینگ می‌تواند حافظه، تمرکز و زمان واکنش را بهبود بخشد.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                تنظیم قند خون
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                جینسینگ آمریکایی به ویژه می‌تواند به کاهش قند خون پس از غذا کمک کند و به عنوان یک مکمل برای افراد مبتلا به 
                <a href="/articles/diabetes" className="text-primary hover:underline mx-1">دیابت نوع 2</a>
                مورد مطالعه قرار گرفته است [3].
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                تقویت سیستم ایمنی
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                جینسنوزیدها می‌توانند فعالیت سلول‌های ایمنی را تنظیم کرده و به پاسخ ایمنی بدن در برابر عفونت‌ها کمک کنند.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                عملکرد جنسی
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                در طب سنتی، جینسینگ برای بهبود عملکرد جنسی مردان و مدیریت اختلال نعوظ استفاده می‌شود.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            ملاحظات مصرف، عوارض جانبی و تداخلات دارویی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            با وجود فواید گسترده، مصرف جینسینگ باید با احتیاط و آگاهی کامل انجام شود.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            ۱. عوارض جانبی و هشدارها
          </h3>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              بی‌خوابی
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              شایع‌ترین عارضه جینسینگ، به‌ویژه نوع آسیایی، می‌تواند بی‌خوابی و عصبی شدن باشد، 
              به خصوص اگر در دوزهای بالا یا نزدیک به زمان خواب مصرف شود.
            </p>
            
            <h4 className="text-lg font-semibold text-foreground mb-3">
              نوسانات فشار خون
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              جینسینگ ممکن است بر 
              <a href="/articles/blood-pressure" className="text-primary hover:underline mx-1">فشار خون</a>
              تأثیر بگذارد. افراد مبتلا به فشار خون بالا یا پایین باید با احتیاط مصرف کنند.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            ۲. تداخلات دارویی (هشدار مهم)
          </h3>

          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">خطر تداخلات دارویی جدی</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              مصرف خودسرانه جینسینگ، به ویژه در بیماران مزمن، بسیار خطرناک است. این گیاه می‌تواند به طور جدی با داروهای زیر تداخل داشته باشد [4]:
            </AlertDescription>
          </Alert>

          <div className="space-y-4 mb-8">
            <div className="bg-card border-l-4 border-destructive p-4">
              <h4 className="font-semibold text-foreground mb-2">
                داروهای ضد انعقاد (مانند 
                <a href="/articles/warfarin" className="text-primary hover:underline mx-1">وارفارین</a>
                )
              </h4>
              <p className="text-muted-foreground text-sm">
                جینسینگ ممکن است اثر این داروها را کاهش داده و خطر لخته شدن خون را افزایش دهد.
              </p>
            </div>

            <div className="bg-card border-l-4 border-destructive p-4">
              <h4 className="font-semibold text-foreground mb-2">
                داروهای دیابت (مانند متفورمین)
              </h4>
              <p className="text-muted-foreground text-sm">
                مصرف همزمان ممکن است باعث افت بیش از حد قند خون (هیپوگلیسمی) شود.
              </p>
            </div>

            <div className="bg-card border-l-4 border-destructive p-4">
              <h4 className="font-semibold text-foreground mb-2">
                داروهای ضد افسردگی (MAOIs)
              </h4>
              <p className="text-muted-foreground text-sm">
                تداخل با برخی داروهای روانپزشکی می‌تواند منجر به اثرات نامطلوب شود.
              </p>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 mt-12 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                نیاز به مشاوره تخصصی دارید؟
              </h2>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                قبل از شروع هرگونه مکمل گیاهی، به ویژه جینسینگ، جهت ارزیابی تداخلات دارویی با داروهای قلبی یا دیابت خود،
                <a href="/services/online-doctor" className="text-primary hover:underline mx-1 font-semibold">
                  ویزیت آنلاین پزشک عمومی
                </a>
                یا
                <a href="/services/internal-medicine" className="text-primary hover:underline mx-1 font-semibold">
                  متخصص داخلی
                </a>
                را رزرو کنید.
              </p>
              <div className="flex justify-center">
                <a href="tel:09386117912">
                  <Button size="lg" className="gap-2">
                    <Phone className="w-5 h-5" />
                    تماس با نوید زندگی: 09386117912
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/50 rounded-lg p-6 mt-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Lee, S., & Kim, Y. S. (2018). The roles of ginsenosides in the central nervous system. 
                <em> Biomedicine & Pharmacotherapy</em>, 101, 196-206.
              </li>
              <li>
                Attele, A. S., et al. (1999). Anti-fatigue effects of Panax ginseng. 
                <em> Journal of Clinical Pharmacology</em>, 39(12), 1259-1262.
              </li>
              <li>
                Vuksan, V., et al. (2000). American ginseng (Panax quinquefolius L.) reduces postprandial glycemia in nondiabetic subjects and subjects with type 2 diabetes mellitus. 
                <em> Archives of Internal Medicine</em>, 160(7), 1009-1013.
              </li>
              <li>
                Izzo, A. A., & Ernst, E. (2001). Interactions between herbal medicines and prescribed drugs: a systematic review. 
                <em> Drugs</em>, 61(15), 2163-2175.
              </li>
            </ol>
          </div>
        </article>

        <FAQSection faqs={faqs} />

        <div className="mt-12">
          <PricingInfo />
        </div>

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default GinsengPage;
