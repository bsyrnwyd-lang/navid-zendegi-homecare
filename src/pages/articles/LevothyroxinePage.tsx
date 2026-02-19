import { Phone, AlertTriangle } from "lucide-react";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LazyImage from "@/components/LazyImage";
import { Link } from "react-router-dom";

import levothyroxineImage from "@/assets/levothyroxine-article.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";
import echoSafetyHomeImage from "@/assets/echo-safety-home.jpg";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";

const LevothyroxinePage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "لووتیروکسین", url: "/articles/levothyroxine" },
  ];

  const faqs = [
    {
      question: "لووتیروکسین چه زمانی از روز باید مصرف شود؟",
      answer: "لووتیروکسین باید حداقل ۳۰ تا ۶۰ دقیقه قبل از صبحانه با آب فراوان و معده خالی مصرف شود. مصرف همزمان با غذا، چای یا قهوه باعث کاهش جذب دارو می‌شود."
    },
    {
      question: "آیا لووتیروکسین عوارض قلبی دارد؟",
      answer: "بله، اگر دوز دارو بیش از نیاز باشد، می‌تواند باعث تپش قلب، آریتمی و فیبریلاسیون دهلیزی شود. پایش با هولتر قلب برای بیماران حساس توصیه می‌شود."
    },
    {
      question: "آیا مصرف مکمل آهن همراه لووتیروکسین مشکلی دارد؟",
      answer: "بله، مکمل‌های آهن، کلسیم و مولتی‌ویتامین‌ها باید حداقل ۴ ساعت با لووتیروکسین فاصله داشته باشند، زیرا مانع جذب دارو می‌شوند."
    },
    {
      question: "هر چند وقت یک‌بار باید آزمایش تیروئید بدهم؟",
      answer: "معمولاً هر ۶ تا ۸ هفته پس از شروع یا تغییر دوز و پس از تثبیت، هر ۶ ماه تا ۱ سال یک‌بار آزمایش TSH و Free T4 لازم است."
    },
    {
      question: "آیا لووتیروکسین باید مادام‌العمر مصرف شود؟",
      answer: "در اکثر موارد کم‌کاری تیروئید (مثل هاشیموتو یا پس از جراحی تیروئید) بله، مصرف لووتیروکسین مادام‌العمر است. قطع خودسرانه دارو خطرناک است."
    },
  ];

  const relatedArticles = [
    {
      title: "عدد EF در اکو قلب چیست؟",
      description: "تفسیر EF نرمال و غیرنرمال و نقش اکو در پایش قدرت قلب",
      image: ejectionFractionImage,
      link: "/articles/ejection-fraction",
      category: "قلب و عروق",
    },
    {
      title: "راهنمای کنترل فشار خون با دستگاه‌های خانگی",
      description: "آموزش روش صحیح استفاده از فشارسنج دیجیتال و خدمات کالیبره در منزل",
      image: bloodPressureReadingsImage,
      link: "/articles/blood-pressure-readings",
      category: "قلب و عروق",
    },
    {
      title: "دقت اکو و نوار قلب در منزل با بیمارستان برابر است؟",
      description: "مقایسه تجهیزات پورتابل با دستگاه‌های ثابت بیمارستانی",
      image: echoSafetyHomeImage,
      link: "/articles/portable-device-accuracy",
      category: "قلب و عروق",
    },
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="لووتیروکسین؛ از تاریخچه کشف تا مکانیسم اثر و پایش‌های قلبی | نوید زندگی"
        description="راهنمای جامع لووتیروکسین: تاریخچه، مکانیسم اثر، تأثیر بر قلب، قوانین مصرف و خدمات پایش تیروئید و قلب در منزل"
        keywords="قرص لووتیروکسین, عوارض لووتیروکسین بر قلب, تپش قلب و تیروئید, هولتر قلب در منزل, آزمایش تیروئید در منزل"
        canonical="https://navidzendegi.com/articles/levothyroxine"
        ogType="article"
      />
      <ArticleSchema
        title="لووتیروکسین؛ عصای معجزه‌گر غده تیروئید"
        description="راهنمای جامع لووتیروکسین: از تاریخچه کشف تا مکانیسم اثر و پایش‌های قلبی"
        publishedTime="2025-02-19"
        modifiedTime="2025-02-19"
        image={levothyroxineImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 leading-relaxed">
          لووتیروکسین؛ عصای معجزه‌گر غده تیروئید (از تاریخچه کشف تا مکانیسم اثر و پایش‌های قلبی)
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
          <span>نویسنده: تیم تحریریه نوید زندگی</span>
          <span>تاریخ انتشار: ۱۴۰۴/۱۱/۳۰</span>
        </div>

        <Alert className="mb-8 border-destructive bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive font-bold">هشدار مهم</AlertTitle>
          <AlertDescription className="text-destructive/90">
            اطلاعات این مقاله صرفاً جنبه آموزشی دارد. هرگز بدون تجویز پزشک، دوز لووتیروکسین را تغییر ندهید یا آن را قطع نکنید. خوددرمانی با هورمون تیروئید خطرناک است.
          </AlertDescription>
        </Alert>

        <LazyImage
          src={levothyroxineImage}
          alt="لووتیروکسین و ارتباط آن با قلب و تیروئید"
          className="w-full rounded-lg mb-8"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          غده تیروئید، با وجود اندازه کوچکش در گلو، مانند «ترموسات» بدن عمل می‌کند. وقتی این غده به هر دلیلی کم‌کار شود (Hypothyroidism)، تمام موتورهای بدن از حرکت باز می‌ایستند. در این میان، لووتیروکسین نه تنها یک دارو، بلکه یک «هورمون جایگزین» حیاتی است که بیش از نیمی از قرن است که حیات را به میلیون‌ها نفر بازگردانده است.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۱. تاریخچه: از عصاره تیروئید گوسفند تا سنتز آزمایشگاهی</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          مسیر کشف لووتیروکسین یکی از جذاب‌ترین داستان‌های علم پزشکی است:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">قرن ۱۹ و عصاره‌درمانی</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          در اواخر دهه ۱۸۰۰، پزشکان برای درمان کم‌کاری تیروئید، از عصاره غده تیروئید گوسفند یا گاو (به صورت خشک شده) استفاده می‌کردند. این روش دوز مشخصی نداشت و اغلب باعث مسمومیت یا عدم درمان می‌شد.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">جداسازی تیروکسین (۱۹۱۴)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ادوارد کندال در کلینیک مایو موفق شد برای اولین بار هورمون تیروکسین را به صورت کریستال خالص جدا کند.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">سنتز شیمیایی (۱۹۲۷)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          دانشمندان بریتانیایی ساختار دقیق آن را شناسایی و به صورت مصنوعی تولید کردند.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تاییدیه مدرن</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          فرم خوراکی و دقیق لووتیروکسین که امروزه مصرف می‌کنیم، در دهه ۱۹۵۰ وارد بازار شد و به دلیل دقت بالا در دوزبندی، جایگزین عصاره‌های حیوانی گشت.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۲. مکانیسم اثر: لووتیروکسین در سطح سلول چه می‌کند؟</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          لووتیروکسین در واقع فرم مصنوعی هورمون T4 (تیروکسین) است. فرآیند عملکرد آن در بدن به این صورت است:
        </p>

        <ul className="list-disc pr-6 space-y-3 text-muted-foreground leading-relaxed mb-6">
          <li><strong className="text-foreground">تبدیل به فرم فعال:</strong> پس از مصرف، لووتیروکسین در کبد و کلیه به هورمون T3 (فرم فعال) تبدیل می‌شود.</li>
          <li><strong className="text-foreground">ورود به هسته سلول:</strong> این هورمون وارد هسته تک‌تک سلول‌های بدن شده و به گیرنده‌های مخصوص می‌چسبد.</li>
          <li><strong className="text-foreground">تولید انرژی:</strong> با تحریک بیان ژن‌ها، متابولیسم (سوخت‌وساز) بدن را بالا می‌برد، دمای بدن را تنظیم می‌کند و ضربان قلب را افزایش می‌دهد.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۳. ارتباط حیاتی لووتیروکسین با قلب (بخش تخصصی نوید زندگی)</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          بزرگترین چالش در مصرف لووتیروکسین، تأثیر مستقیم آن بر سیستم قلبی-عروقی است. تنظیم دوز این دارو مانند حرکت روی لبه تیغ است:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) تپش قلب و آریتمی با هولتر قلب در منزل</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          اگر دوز لووتیروکسین حتی اندکی بیش از نیاز بدن باشد، می‌تواند باعث تپش قلب شدید، لرزش و آریتمی قلبی (به‌ویژه فیبریلاسیون دهلیزی یا AF) شود.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">خدمات ما:</strong> بیمارانی که تازه درمان را شروع کرده‌اند یا دوز دارویشان تغییر کرده است، ممکن است دچار تپش قلب پنهان شوند. ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ریتم قلب شما را ۲۴ تا ۷۲ ساعت پایش می‌کنیم تا از عدم بروز آریتمی ناشی از دارو مطمئن شویم.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) فشار خون و هولتر فشار خون ۲۴ ساعته</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          کم‌کاری تیروئید باعث افزایش فشار خون دیاستولیک (فشار پایین) می‌شود و درمان با لووتیروکسین این وضعیت را تغییر می‌دهد.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">خدمات ما:</strong> برای تنظیم دقیق داروهای فشار خون همزمان با لووتیروکسین، استفاده از <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون در منزل</Link> ضروری است تا نوسانات فشار در طول شبانه‌روز رصد شود.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ج) اکوکاردیوگرافی و قدرت پمپاژ قلب</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          هورمون تیروئید مستقیماً بر قدرت انقباضی قلب اثر می‌گذارد. در سالمندان، شروع لووتیروکسین باید با احتیاط فراوان باشد تا به قلب فشار وارد نشود.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">خدمات ما:</strong> متخصصین نوید زندگی با انجام <Link to="/articles/echo-home" className="text-primary hover:underline">اکو در منزل</Link> قبل و بعد از تنظیم دوز، قدرت پمپاژ قلب (EF) و سلامت دریچه‌ها را بررسی می‌کنند.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۴. قوانین طلایی مصرف لووتیروکسین</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          برای اینکه این دارو بهترین اثر را داشته باشد، باید به نکات زیر دقت کرد:
        </p>

        <ul className="list-disc pr-6 space-y-3 text-muted-foreground leading-relaxed mb-6">
          <li><strong className="text-foreground">معده خالی:</strong> دارو باید حداقل ۳۰ تا ۶۰ دقیقه قبل از صبحانه با آب فراوان مصرف شود.</li>
          <li><strong className="text-foreground">تداخل با آهن و کلسیم:</strong> مکمل‌های کلسیم، آهن و مولتی‌ویتامین‌ها باید حداقل ۴ ساعت با لووتیروکسین فاصله داشته باشند، چون مانع جذب آن می‌شوند.</li>
          <li><strong className="text-foreground">ثبات در برند:</strong> به دلیل حساسیت بالای دوز، توصیه می‌شود همیشه از یک برند مشخص استفاده کنید.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۵. آزمایشگاه سیار نوید زندگی؛ پایش فاکتورهای تیروئید</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          تنظیم دوز لووتیروکسین بدون آزمایش خون غیرممکن است. ما با اعزام تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه به منزل</Link>، تست‌های TSH، Free T4 و Free T3 را انجام می‌دهیم تا <Link to="/services/specialist-visit" className="text-primary hover:underline">متخصص داخلی</Link> ما در زمان ویزیت، دقیق‌ترین دوز را بر اساس نتایج آزمایشگاهی برای شما تجویز کند.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          لووتیروکسین دارویی برای تمام عمر است که مدیریت آن نیاز به دقت بالایی دارد. کوچکترین تغییر در دوز این دارو می‌تواند روی خواب، اعصاب و مهم‌تر از همه، قلب شما تأثیر بگذارد. مرکز نوید زندگی با فراهم کردن زنجیره کامل خدمات شامل آزمایش خون، ویزیت متخصص، هولتر قلب و اکو در منزل، همراه شماست تا تیروئید شما همیشه در بهترین حالت تنظیم باشد.
        </p>

        {/* CTA */}
        <section className="mt-10 p-6 bg-primary/10 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">مشاوره و پایش تیروئید و قلب در منزل</h3>
          <p className="text-muted-foreground mb-4">
            برای انجام آزمایش تیروئید، هولتر قلب یا اکو در منزل با ما تماس بگیرید.
          </p>
          <a
            href="tel:09386117912"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            <Phone className="h-5 w-5" />
            تماس: ۰۹۳۸۶۱۱۷۹۱۲
          </a>
        </section>

        {/* References */}
        <div className="mt-10 pt-6 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-3">منابع معتبر علمی</h3>
          <ul className="list-disc pr-6 space-y-1 text-sm text-muted-foreground">
            <li>American Thyroid Association (ATA): Guidelines for the Treatment of Hypothyroidism.</li>
            <li>The Lancet: History and Evolution of Thyroid Hormone Replacement.</li>
            <li>Journal of Clinical Endocrinology & Metabolism (JCEM): Levothyroxine and Cardiovascular Health.</li>
            <li>Mayo Clinic: Hypothyroidism (underactive thyroid) diagnosis and treatment.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
        <PricingInfo />
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default LevothyroxinePage;
