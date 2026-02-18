import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import methocarbamolImage from "@/assets/methocarbamol-article.jpg";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import postCCUCareImage from "@/assets/post-ccu-care-home.jpg";

const MethocarbamolPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "متوکاربامول (روباکسین)", url: "/articles/methocarbamol" }
  ];

  const faqs = [
    { question: "متوکاربامول چیست و چه کاربردی دارد؟", answer: "متوکاربامول یک شل‌کننده عضلانی مرکزی است که برای درمان اسپاسم‌های عضلانی ناشی از فتق دیسک، کشیدگی و رگ‌به‌رگ شدن استفاده می‌شود. این دارو با نام تجاری روباکسین (Robaxin) نیز شناخته می‌شود." },
    { question: "آیا متوکاربامول اعتیادآور است؟", answer: "متوکاربامول جزو داروهای با پتانسیل سوءمصرف پایین طبقه‌بندی می‌شود، اما مصرف طولانی‌مدت بدون نظر پزشک توصیه نمی‌شود و قطع ناگهانی آن نیز ممکن است عوارضی داشته باشد." },
    { question: "آیا متوکاربامول را می‌توان همراه داروهای قلبی مصرف کرد؟", answer: "مصرف همزمان با برخی داروهای قلبی و فشار خون نیاز به نظارت پزشک دارد. انجام نوار قلب و هولتر در منزل توسط تیم نوید زندگی می‌تواند ایمنی مصرف را تضمین کند." },
    { question: "چرا ادرار من بعد از مصرف متوکاربامول تیره شده؟", answer: "تیره شدن رنگ ادرار (قهوه‌ای یا سبز) یک عارضه بی‌خطر ناشی از متابولیت‌های دارو است و جای نگرانی ندارد." },
    { question: "آیا سالمندان می‌توانند متوکاربامول مصرف کنند؟", answer: "سالمندان باید با احتیاط و تحت نظر پزشک این دارو را مصرف کنند زیرا خطر سرگیجه، افت فشار و سقوط در آن‌ها بالاتر است. پایش فشار خون با هولتر ۲۴ ساعته توصیه می‌شود." }
  ];

  const relatedArticles = [
    {
      title: "راهنمای کنترل فشار خون با دستگاه‌های خانگی",
      description: "آموزش روش صحیح استفاده از فشارسنج دیجیتال و اشتباهات رایج",
      image: bloodPressureReadingsImage,
      link: "/articles/blood-pressure-readings",
      category: "قلب و عروق"
    },
    {
      title: "عدد EF در اکو قلب چیست؟",
      description: "تفسیر کسر تخلیه‌ای و معنای درصدهای مختلف آن",
      image: ejectionFractionImage,
      link: "/articles/ejection-fraction",
      category: "قلب و عروق"
    },
    {
      title: "مراقبت‌های حیاتی پس از ترخیص از CCU",
      description: "هفته اول، پل پیروزی بر بیماری قلبی",
      image: postCCUCareImage,
      link: "/articles/post-ccu-care",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="متوکاربامول (روباکسین)؛ تاریخچه، مکانیسم اثر و نکات ایمنی | نوید زندگی"
        description="راهنمای جامع متوکاربامول: تاریخچه کشف، مکانیسم اثر مرکزی، فارماکوکینتیک، عوارض جانبی، هشدارها و خدمات پایش در منزل توسط نوید زندگی"
        keywords="متوکاربامول، روباکسین، شل‌کننده عضلانی، مکانیسم اثر، عوارض جانبی، هولتر فشار خون، ویزیت متخصص داخلی در منزل"
        canonical="https://navidzendegi.com/articles/methocarbamol"
        ogType="article"
        publishedTime="2026-02-18"
        modifiedTime="2026-02-18"
      />
      <ArticleSchema
        title="متوکاربامول از صفر تا صد؛ میراثی در خدمت تسکین عضلات"
        description="راهنمای جامع متوکاربامول: تاریخچه کشف، مکانیسم اثر، فارماکوکینتیک، عوارض و هشدارها"
        publishedTime="2026-02-18"
        modifiedTime="2026-02-18"
        image={methocarbamolImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-foreground leading-tight">
          متوکاربامول از صفر تا صد؛ میراثی در خدمت تسکین عضلات (تاریخچه، مکانیسم و نکات ایمنی)
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span>نویسنده: تیم پزشکی نوید زندگی</span>
          <span>تاریخ انتشار: ۱۴۰۴/۱۱/۲۹</span>
        </div>

        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-destructive font-semibold">
            هشدار مهم: این مقاله صرفاً جنبه آموزشی دارد. هرگز بدون تجویز پزشک اقدام به مصرف، تغییر دوز یا قطع دارو نکنید. خوددرمانی خطرناک است.
          </AlertDescription>
        </Alert>

        <LazyImage
          src={methocarbamolImage}
          alt="متوکاربامول - شل‌کننده عضلانی مرکزی"
          className="w-full rounded-lg mb-8"
        />

        <p className="text-lg leading-relaxed mb-6">
          در دنیای داروسازی، برخی داروها مانند ستون‌های استوار عمل می‌کنند که با وجود معرفی داروهای جدید، همچنان جایگاه خود را حفظ کرده‌اند. متوکاربامول، که بیشتر با نام تجاری <strong>روباکسین (Robaxin)</strong> شناخته می‌شود، یکی از همین داروهاست. این دارو نه یک مسکن ساده، بلکه یک «شل‌کننده عضلانی مرکزی» است که دهه‌هاست برای بهبود کیفیت زندگی بیماران دچار دردهای اسکلتی-عضلانی به کار می‌رود.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">۱. تاریخچه: از تلاش برای درمان کزاز تا کشف روباکسین</h2>

        <p className="leading-relaxed mb-4">
          تاریخچه متوکاربامول به اواسط قرن بیستم بازمی‌گردد، زمانی که دانشمندان به دنبال ترکیباتی بودند که بتواند انقباضات مرگبار ناشی از بیماری <Link to="/articles/tetanus" className="text-primary hover:underline">کزاز (Tetanus)</Link> را مهار کند.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">ریشه‌های شیمیایی</h3>
        <p className="leading-relaxed mb-4">
          در دهه ۱۹۴۰، دارویی به نام مفنزین (Mephenesin) کشف شد که اولین شل‌کننده عضلانی با اثر مرکزی بود. اما مفنزین یک مشکل بزرگ داشت: نیمه‌عمر آن بسیار کوتاه بود و به سرعت در بدن از بین می‌رفت.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">تولد متوکاربامول</h3>
        <p className="leading-relaxed mb-4">
          در سال ۱۹۵۶، محققان با تغییر در ساختار شیمیایی مفنزین و ایجاد یک ترکیب «کاربامات»، توانستند متوکاربامول را تولید کنند. این ترکیب جدید نه تنها اثر طولانی‌تری داشت، بلکه سمیت کمتری نیز نشان می‌داد.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">تاییدیه FDA</h3>
        <p className="leading-relaxed mb-4">
          در نهایت در سال ۱۹۵۷، سازمان غذا و داروی آمریکا (FDA) این دارو را برای مصارف انسانی تایید کرد و از آن زمان تاکنون، به یکی از پرفروش‌ترین داروهای شل‌کننده عضلات در جهان تبدیل شده است.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">۲. مکانیسم اثر: متوکاربامول در مغز چه می‌کند؟</h2>

        <p className="leading-relaxed mb-4">
          یک باور اشتباه میان عموم وجود دارد که متوکاربامول مستقیماً روی فیبرهای عضلانی اثر می‌گذارد و آن‌ها را «شل» می‌کند. اما واقعیت علمی بسیار پیچیده‌تر است:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">اثر مرکزی (Central Acting)</h3>
        <p className="leading-relaxed mb-4">
          متوکاربامول هیچ اثر مستقیمی بر روی صفحه محرک عضلانی یا خودِ عضله ندارد. فعالیت این دارو در سیستم عصبی مرکزی (CNS)، به‌ویژه در نخاع و ساقه مغز متمرکز است.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">تضعیف بازتاب‌های پلی‌سیناپتیک</h3>
        <p className="leading-relaxed mb-4">
          این دارو انتقال پیام‌های عصبی در مسیرهای چند-رشته‌ای (Polysynaptic) نخاع را سرکوب می‌کند. در واقع، متوکاربامول مانند یک «کاهنده نویز» در سیستم عصبی عمل کرده و از ارسال پیام‌های مداوم انقباض به عضلات جلوگیری می‌کند.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">اثر آرام‌بخش عمومی</h3>
        <p className="leading-relaxed mb-4">
          بخش بزرگی از اثر درمانی این دارو ناشی از خاصیت آرام‌بخشی (Sedation) آن است که باعث می‌شود آستانه تحمل درد در بیمار بالا برود.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">۳. فارماکوکینتیک؛ دارو در بدن چه مسیری را طی می‌کند؟</h2>

        <p className="leading-relaxed mb-4">
          دانستن نحوه جذب و دفع دارو برای بیماران، به‌ویژه سالمندانی که تحت نظر مرکز نوید زندگی هستند، ضروری است:
        </p>

        <ul className="list-disc pr-6 space-y-3 mb-6">
          <li><strong>جذب:</strong> دارو به سرعت از دستگاه گوارش جذب شده و در کمتر از ۱ تا ۲ ساعت به اوج غلظت خون می‌رسد.</li>
          <li><strong>متابولیسم:</strong> متوکاربامول در کبد دستخوش تغییرات شیمیایی (دآلکیلاسیون و هیدروکسیلاسیون) می‌شود.</li>
          <li><strong>دفع:</strong> دفع دارو عمدتاً از طریق ادرار است. به همین دلیل سلامت کلیه‌ها در مصرف این دارو حیاتی است.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">۴. کاربردهای بالینی گسترده</h2>

        <p className="leading-relaxed mb-4">
          متوکاربامول فراتر از یک قرص کمردرد ساده است:
        </p>

        <ul className="list-disc pr-6 space-y-3 mb-6">
          <li><strong>اسپاسم‌های شدید عضلانی:</strong> ناشی از <Link to="/articles/low-back-pain" className="text-primary hover:underline">فتق دیسک</Link>، کشیدگی‌های لیگامانی و رگ‌به‌رگ شدن.</li>
          <li><strong>درمان کمکی در کزاز:</strong> برای کنترل گرفتگی‌های عضلانی شدید که تنفس را مختل می‌کنند.</li>
          <li><strong>جراحی‌های ارتوپدی:</strong> کاهش دردهای پس از عمل جراحی استخوان و مفاصل.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">۵. هشدارهای جدی و تداخلات</h2>

        <p className="leading-relaxed mb-4">
          مصرف این دارو برای همه افراد بی‌خطر نیست. در اینجا نقش پایش‌های تخصصی ما پررنگ می‌شود:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">الف) خطر سقوط در سالمندان و هولتر فشار خون</h3>
        <p className="leading-relaxed mb-4">
          متوکاربامول به دلیل اثر آرام‌بخشی، می‌تواند باعث سرگیجه و کاهش تمرکز شود. در سالمندان، این موضوع منجر به افت فشار خون وضعیتی می‌شود.
        </p>
        <p className="leading-relaxed mb-4">
          <strong>خدمات ما:</strong> اگر با مصرف این دارو دچار سرگیجه می‌شوید، تیم ما با نصب <Link to="/articles/blood-pressure-readings" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته</Link> در منزل، فشار شما را در وضعیت‌های مختلف پایش می‌کند تا از ریسک شکستگی لگن در اثر زمین‌خوردن پیشگیری شود.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">ب) نارسایی کلیوی و آزمایش در منزل</h3>
        <p className="leading-relaxed mb-4">
          فرم تزریقی متوکاربامول حاوی ماده‌ای به نام «پلی‌اتیلن گلیکول» است که در بیماران با نارسایی کلیه می‌تواند باعث آسیب جدی شود.
        </p>
        <p className="leading-relaxed mb-4">
          <strong>خدمات ما:</strong> قبل از تزریق، متخصصین ما با انجام آزمایش خون در محل (چکاپ کراتینین و GFR)، سلامت کلیه‌های شما را بررسی می‌کنند.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">ج) اثر بر ضربان قلب و هولتر قلب</h3>
        <p className="leading-relaxed mb-4">
          در موارد نادر، این دارو می‌تواند باعث کاهش ضربان قلب (برادی‌کاردیا) یا غش (سنکوپ) شود.
        </p>
        <p className="leading-relaxed mb-4">
          <strong>خدمات ما:</strong> برای بیماران قلبی، انجام <Link to="/articles/ecg-home" className="text-primary hover:underline">نوار قلب (ECG)</Link> یا استفاده از <Link to="/articles/holter-guide" className="text-primary hover:underline">هولتر قلب</Link> در منزل برای اطمینان از عدم تداخل دارو با سیستم برقی قلب توصیه می‌شود.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">۶. عوارض جانبی: از عادی تا خطرناک</h2>

        <ul className="list-disc pr-6 space-y-3 mb-6">
          <li><strong>عوارض شایع:</strong> خواب‌آلودگی، گیجی، حالت تهوع، و تاری دید.</li>
          <li><strong>عارضه خاص:</strong> تیره شدن رنگ ادرار (قهوه‌ای یا سبز) که به دلیل متابولیت‌های دارو است و جای نگرانی ندارد.</li>
          <li><strong>عوارض خطرناک:</strong> کهیر، ورم صورت (آنژیوادم) و تشنج (به‌ویژه در دوزهای بالا).</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">نتیجه‌گیری</h2>

        <p className="leading-relaxed mb-4">
          متوکاربامول دارویی با تاریخچه‌ای درخشان است که اگر درست و تحت نظارت مصرف شود، فرشته نجات دردهای عضلانی است. اما «خوددرمانی» با این دارو، به‌ویژه برای افرادی که داروهای قلبی یا اعصاب مصرف می‌کنند، خطرناک است.
        </p>
        <p className="leading-relaxed mb-6">
          مرکز نوید زندگی با اعزام <Link to="/internal-medicine" className="text-primary hover:underline">متخصص داخلی به منزل</Link> و ارائه تجهیزات پایش مثل هولتر، اکو و آزمایشگاه سیار، این اطمینان را به شما می‌دهد که مسیر درمان دردهای عضلانی شما، باری بر دوش قلب و کلیه‌هایتان نخواهد بود.
        </p>

        {/* CTA Section */}
        <section className="bg-primary/10 rounded-lg p-6 my-8 text-center">
          <h3 className="text-xl font-bold mb-3 text-foreground">مشاوره و ویزیت تخصصی در منزل</h3>
          <p className="mb-4 text-muted-foreground">
            برای بررسی تداخلات دارویی، نصب هولتر یا انجام آزمایش خون در منزل با ما تماس بگیرید.
          </p>
          <a
            href="tel:09386117912"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="h-5 w-5" />
            تماس: ۰۹۳۸۶۱۱۷۹۱۲
          </a>
        </section>

        {/* References */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-bold mb-2 text-foreground">منابع علمی:</h3>
          <ul className="list-disc pr-6 space-y-1 text-sm text-muted-foreground">
            <li>Goodman & Gilman's: The Pharmacological Basis of Therapeutics.</li>
            <li>FDA Medical Review: Robaxin (Methocarbamol) history and labeling.</li>
            <li>Mayo Clinic: Skeletal Muscle Relaxants - Safety and Interactions.</li>
            <li>Journal of Clinical Pharmacology: Pharmacokinetics of Methocarbamol in healthy volunteers.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
        <PricingInfo />
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default MethocarbamolPage;
