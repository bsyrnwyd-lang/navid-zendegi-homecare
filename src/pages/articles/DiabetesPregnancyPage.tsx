import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import LazyImage from "@/components/LazyImage";
import diabetesPregnancyImage from "@/assets/diabetes-pregnancy.jpg";
import breastfeedingImage from "@/assets/diabetes-article.jpg";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";
import cholesterolTestImage from "@/assets/cholesterol-test-article.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DiabetesPregnancyPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "دیابت در بارداری", url: "/articles/diabetes-pregnancy" },
  ];

  const relatedArticles = [
    {
      title: "دیابت: علائم، انواع و راهکارهای کنترل قند خون",
      description: "راهنمای جامع دیابت شامل انواع، علائم، تشخیص و روش‌های کنترل قند خون",
      link: "/articles/diabetes",
      image: breastfeedingImage,
      category: "مقالات"
    },
    {
      title: "تغذیه در بارداری: راهنمای کامل تغذیه مادران باردار",
      description: "اصول تغذیه صحیح در دوران بارداری برای سلامت مادر و جنین",
      link: "/articles/pregnancy-nutrition",
      image: pregnancyNutritionImage,
      category: "مقالات"
    },
    {
      title: "آزمایش کلسترول و چربی خون: راهنمای کامل",
      description: "اطلاعات کامل درباره آزمایش‌های چربی خون و تفسیر نتایج",
      link: "/articles/cholesterol-test",
      image: cholesterolTestImage,
      category: "مقالات"
    },
  ];

  return (
    <>
      <SEOHead
        title="دیابت در بارداری | تشخیص و مدیریت GDM | آزمایش خون در منزل"
        description="راهنمای جامع دیابت در بارداری (GDM): انواع، علائم، ریسک‌ها، غربالگری و مدیریت تخصصی. آزمایش خون و ویزیت متخصص غدد و زنان در منزل با نوید زندگی"
        keywords="دیابت بارداری، GDM، دیابت حاملگی، قند خون بارداری، تست تحمل گلوکز، آزمایش خون در منزل، متخصص غدد در منزل، متخصص زنان در منزل"
        canonical="https://navidzendegi.com/articles/diabetes-pregnancy"
        ogType="article"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2024-01-15T10:00:00Z"
      />

      <ArticleSchema
        title="دیابت در بارداری: تشخیص، مدیریت تخصصی و کنترل قند خون"
        description="راهنمای جامع دیابت در بارداری شامل انواع، ریسک‌ها، غربالگری و مدیریت تخصصی با آزمایش در منزل"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2024-01-15T10:00:00Z"
        image={diabetesPregnancyImage}
      />

      <div className="min-h-screen bg-background py-12 px-4">
        <article className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              دیابت در بارداری: تشخیص، مدیریت تخصصی و کنترل قند خون برای سلامت مادر و جنین
            </h1>
          </header>

          <LazyImage
            src={diabetesPregnancyImage}
            alt="دیابت در بارداری - آزمایش خون و ویزیت متخصص در منزل"
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6">
            <p>
              دیابت در بارداری به حالتی گفته می‌شود که سطح قند خون (گلوکز) در بدن مادر باردار بالاتر از حد طبیعی باشد. این وضعیت یکی از شایع‌ترین عوارض پزشکی دوران بارداری است و می‌تواند سلامت مادر و جنین را به طور جدی تحت تأثیر قرار دهد. دیابت در بارداری به دو دسته اصلی تقسیم می‌شود: دیابت پیش از بارداری (Pre-existing Diabetes) و دیابت بارداری (Gestational Diabetes Mellitus - GDM).
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              انواع دیابت در دوران بارداری
            </h2>

            <p>
              درک تفاوت بین انواع دیابت برای مدیریت صحیح و کاهش ریسک عوارض، حیاتی است:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              دیابت پیش از بارداری (Pre-existing Diabetes)
            </h3>

            <p>
              این شامل زنان بارداری است که قبل از بارداری مبتلا به <Link to="/articles/diabetes" className="text-primary hover:underline">دیابت نوع ۱ (وابسته به انسولین)</Link> یا <Link to="/articles/diabetes" className="text-primary hover:underline">دیابت نوع ۲ (غیروابسته به انسولین)</Link> بوده‌اند. این نوع دیابت نیاز به کنترل بسیار سخت‌گیرانه از پیش از لقاح دارد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              دیابت بارداری (Gestational Diabetes Mellitus - GDM)
            </h3>

            <p>
              این وضعیت در زنانی ایجاد می‌شود که قبلاً دیابت نداشته‌اند و معمولاً در نیمه دوم بارداری (پس از هفته ۲۰) تشخیص داده می‌شود. علت اصلی آن، مقاومت به انسولین ناشی از هورمون‌هایی است که جفت ترشح می‌کند و نیاز مادر به انسولین را افزایش می‌دهد. بدن مادر نمی‌تواند این نیاز اضافی را تأمین کند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              ریسک‌ها و عوارض دیابت بارداری
            </h2>

            <p>
              کنترل ضعیف قند خون در دوران بارداری ریسک عوارض متعددی را برای مادر و نوزاد به همراه دارد:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              ۱. عوارض برای نوزاد
            </h3>

            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>
                <strong>ماکروزومی (Macrosomia):</strong> وزن بیش از حد نوزاد به دلیل دریافت گلوکز اضافی، که زایمان طبیعی را دشوار و ریسک آسیب حین تولد را افزایش می‌دهد.
              </li>
              <li>
                <strong>هایپوگلیسمی نوزادی:</strong> افت شدید قند خون نوزاد بلافاصله پس از تولد.
              </li>
              <li>
                <strong>ریسک‌های بلندمدت:</strong> افزایش احتمال چاقی و دیابت نوع ۲ در آینده نوزاد.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              ۲. عوارض برای مادر
            </h3>

            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>
                <strong>پره‌اکلامپسی:</strong> دیابت بارداری ریسک ابتلا به <Link to="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون بالا در بارداری</Link> (پره‌اکلامپسی) را افزایش می‌دهد.
              </li>
              <li>
                <strong>نیاز به سزارین:</strong> به دلیل خطر ماکروزومی.
              </li>
              <li>
                <strong>دیابت آینده:</strong> حدود ۵۰ درصد از زنان مبتلا به GDM در ۵ تا ۱۰ سال آینده به دیابت نوع ۲ مبتلا خواهند شد.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              غربالگری، پایش و مدیریت دیابت در منزل
            </h2>

            <p>
              تشخیص به‌موقع دیابت بارداری از طریق غربالگری منظم ضروری است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              زمان غربالگری
            </h3>

            <p>
              غربالگری GDM معمولاً بین هفته ۲۴ تا ۲۸ بارداری از طریق تست‌های تحمل گلوکز خوراکی (Oral Glucose Tolerance Test - OGTT) انجام می‌شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              آزمایش خون در منزل
            </h3>

            <p>
              برای زنان پرخطر (دارای سابقه خانوادگی دیابت یا چاقی)، پایش قند خون در خانه پیش از زمان غربالگری رسمی ضروری است. خدمات <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link> توسط نوید زندگی، این پایش دقیق را آسان می‌سازد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              درمان و مدیریت
            </h3>

            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>
                <strong>تغییرات سبک زندگی:</strong> <Link to="/articles/pregnancy-nutrition" className="text-primary hover:underline">رژیم غذایی کنترل‌شده</Link> (زیر نظر متخصص تغذیه) و ورزش منظم (مانند پیاده‌روی سبک) اولین خط درمان است.
              </li>
              <li>
                <strong>درمان دارویی:</strong> در صورت عدم کنترل قند خون با سبک زندگی، متخصص غدد یا متخصص زنان ممکن است انسولین یا داروهای خوراکی مانند متفورمین را تجویز کنند.
              </li>
            </ul>

            <div className="bg-destructive/10 border-r-4 border-destructive p-6 my-8 rounded">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-destructive mb-2">هشدار مهم:</h4>
                  <p className="text-foreground/90">
                    تحت هیچ شرایطی داروهای انسولین یا داروهای ضد دیابت را بدون تجویز و نظارت پزشک متخصص مصرف نکنید. مصرف خودسرانه این داروها می‌تواند به کاهش خطرناک قند خون (هایپوگلیسمی) منجر شود که برای مادر و جنین بسیار خطرناک است.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              نقش ویزیت متخصصین در منزل در کنترل دیابت بارداری
            </h2>

            <p>
              مدیریت GDM نیازمند یک تیم تخصصی است:
            </p>

            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>
                <strong>ویزیت <Link to="/services/gynecology" className="text-primary hover:underline">متخصص زنان و زایمان</Link>:</strong> برای ارزیابی سلامت جنین، نظارت بر وزن مادر و زمان‌بندی زایمان.
              </li>
              <li>
                <strong>ویزیت متخصص غدد:</strong> برای تنظیم دقیق دوزهای انسولین یا داروهای خوراکی و آموزش نحوه استفاده از دستگاه‌های سنجش قند خون.
              </li>
            </ul>

            <p>
              دریافت این خدمات تخصصی در محیط آرام و بدون استرس منزل، برای زنان باردار، به ویژه آن‌هایی که محدودیت حرکت دارند یا پرخطر محسوب می‌شوند، بهترین رویکرد درمانی را فراهم می‌کند.
            </p>

            <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">برای کنترل دقیق قند خون با ما تماس بگیرید</h4>
                  <p className="text-foreground/90 mb-3">
                    کنترل دقیق قند خون، رمز سلامت شما و نوزادتان است. برای هماهنگی جهت تست تحمل گلوکز، انجام آزمایش خون در منزل و ویزیت متخصص غدد و زنان در منزل، همین حالا با نوید زندگی تماس بگیرید.
                  </p>
                  <a
                    href="tel:09386117912"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg"
                  >
                    <Phone className="h-5 w-5" />
                    ۰۹۳۸۶۱۱۷۹۱۲
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              سوالات متداول (FAQ)
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-right">
                  تفاوت دیابت بارداری با دیابت نوع ۱ و ۲ چیست؟
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  دیابت بارداری (GDM) فقط در دوران بارداری ایجاد می‌شود و معمولاً پس از زایمان برطرف می‌شود. دیابت نوع ۱ و ۲ بیماری‌های مزمن هستند که قبل از بارداری وجود دارند و نیاز به مدیریت مادام‌العمر دارند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-right">
                  چه زمانی باید تست تحمل گلوکز انجام دهم؟
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  تست تحمل گلوکز (OGTT) معمولاً بین هفته‌های ۲۴ تا ۲۸ بارداری انجام می‌شود. اما اگر عوامل خطر مانند چاقی یا سابقه خانوادگی دیابت دارید، ممکن است پزشک زودتر تست را درخواست کند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-right">
                  آیا دیابت بارداری پس از زایمان ادامه می‌یابد؟
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  در اکثر موارد، دیابت بارداری پس از زایمان برطرف می‌شود. اما حدود ۵۰ درصد از زنان مبتلا به GDM در ۵ تا ۱۰ سال آینده به دیابت نوع ۲ مبتلا می‌شوند. بنابراین پایش منظم قند خون پس از زایمان ضروری است.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-right">
                  آیا می‌توانم با رژیم غذایی دیابت بارداری را کنترل کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  بله، در بسیاری از موارد، تغییرات سبک زندگی شامل رژیم غذایی کنترل‌شده و ورزش منظم می‌تواند قند خون را در محدوده سالم نگه دارد. اما در برخی موارد، پزشک ممکن است انسولین یا داروهای خوراکی را تجویز کند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-right">
                  چگونه می‌توانم قند خون را در منزل پایش کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  با استفاده از دستگاه‌های سنجش قند خون (گلوکومتر) می‌توانید در منزل قند خون خود را اندازه‌گیری کنید. همچنین خدمات آزمایش خون در منزل نوید زندگی این امکان را فراهم می‌کنند که پرستار متخصص برای نمونه‌گیری به منزل شما بیاید.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-right">
                  عوارض دیابت بارداری برای نوزاد چیست؟
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  عوارض شامل وزن بیش از حد نوزاد (ماکروزومی)، افت قند خون نوزاد پس از تولد (هایپوگلیسمی نوزادی)، زردی و در بلندمدت، افزایش ریسک چاقی و دیابت نوع ۲ در آینده است.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h3 className="text-2xl font-semibold text-foreground mt-12 mb-4">
              منابع (References)
            </h3>

            <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/70 mr-4">
              <li>
                American Diabetes Association (ADA). (2024). Standards of Care in Diabetes—2024: Diabetes in Pregnancy.
              </li>
              <li>
                ACOG Practice Bulletin No. 201: Gestational Diabetes Mellitus. (2018). Obstetrics & Gynecology, 132(6), e273-e291.
              </li>
              <li>
                Metzger, B. E., et al. (2007). Hyperglycemia and adverse pregnancy outcomes (HAPO) study: associations with maternal body mass index, newborn fat mass, and other known risk factors. Diabetes Care, 30(Suppl 2), B14-20.
              </li>
            </ol>
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>
      </div>
    </>
  );
};

export default DiabetesPregnancyPage;
