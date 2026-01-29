import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle, Heart, Activity, Pill, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import postCCUCareImage from "@/assets/post-ccu-care-home.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import heartMedicationsWarningImage from "@/assets/heart-medications-warning.jpg";
import legEdemaImage from "@/assets/leg-edema-article.jpg";

const PostCCUCarePage = () => {
  const phoneNumber = "09386117912";
  
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مراقبت پس از CCU", url: "/articles/post-ccu-care" }
  ];

  const faqs = [
    {
      question: "چه مدت پس از ترخیص از CCU باید استراحت کنم؟",
      answer: "استراحت مطلق توصیه نمی‌شود. در هفته اول، فعالیت‌های سبک مانند پیاده‌روی کوتاه در فضای خانه توصیه می‌شود. از بالا رفتن از پله و فعالیت سنگین خودداری کنید. برنامه فعالیت باید تحت نظر پزشک تنظیم شود."
    },
    {
      question: "آیا ویزیت متخصص قلب در منزل پس از ترخیص ضروری است؟",
      answer: "بله، به شدت توصیه می‌شود. ویزیت متخصص در منزل از استرس جابجایی و خطرات ترافیک و آلودگی جلوگیری می‌کند. همچنین پزشک می‌تواند داروها را در محیط واقعی زندگی بیمار بازبینی کند."
    },
    {
      question: "چه علائمی پس از ترخیص از CCU نگران‌کننده است؟",
      answer: "درد یا سنگینی سینه، تنگی نفس شدید به‌ویژه هنگام دراز کشیدن، ورم جدید پا، ضربان قلب بسیار سریع (بالای ۱۱۰) یا کند (زیر ۵۰)، و گیجی ناگهانی نیاز به تماس فوری دارند."
    },
    {
      question: "آیا امکان انجام اکو و نوار قلب در منزل وجود دارد؟",
      answer: "بله، نوید زندگی با تجهیزات پرتابل، امکان انجام اکوکاردیوگرافی و نوار قلب ۱۲ کاناله را در منزل فراهم می‌کند. این خدمات به‌ویژه برای بیماران تازه ترخیص که جابجایی برایشان خطرناک است، حیاتی است."
    },
    {
      question: "رژیم غذایی پس از ترخیص از CCU چگونه باید باشد؟",
      answer: "نمک باید به حداقل برسد (باعث احتباس آب و فشار به قلب می‌شود). به جای ۳ وعده بزرگ، ۵ وعده کوچک مصرف کنید. از چربی‌های اشباع و غذاهای فرآوری شده پرهیز کنید. میوه، سبزیجات و پروتئین‌های سالم مصرف کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "چرا نباید داروهای قلبی را خودسرانه قطع کرد؟",
      description: "خطرات قطع ناگهانی آسپرین، پلاویکس، استاتین و بتابلاکرها",
      image: heartMedicationsWarningImage,
      link: "/articles/heart-medications-warning",
      category: "قلب و عروق"
    },
    {
      title: "ورم پا؛ زنگ خطر خاموش قلب",
      description: "علت ورم پا و رابطه آن با بیماری قلبی و نارسایی کلیه",
      image: legEdemaImage,
      link: "/articles/leg-edema",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب (ECG) چیست؟ راهنمای کامل تحلیل",
      description: "راهنمای جامع نوار قلب شامل نحوه کارکرد و تحلیل موج‌ها",
      image: ecgHomeImage,
      link: "/articles/ecg-guide",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مراقبت پس از ترخیص از CCU؛ هفته اول حساس | نوید زندگی"
        description="راهنمای جامع مراقبت‌های حیاتی پس از ترخیص از CCU: مدیریت دارویی، پایش علائم، فعالیت بدنی و خدمات اکو و نوار قلب در منزل تهران و کرج"
        keywords="مراقبت بعد از CCU, ویزیت متخصص قلب در منزل, اکو در منزل, نوار قلب در منزل, نارسایی قلب بعد از سکته, نوید زندگی"
        canonical="https://navidzendegi.com/articles/post-ccu-care"
        ogType="article"
        publishedTime="2025-01-29"
        modifiedTime="2025-01-29"
      />

      <ArticleSchema
        title="مراقبت‌های حیاتی پس از ترخیص از CCU؛ هفته اول، پل پیروزی بر بیماری"
        description="راهنمای گام‌به‌گام مراقبت‌های منزل پس از ترخیص از بخش مراقبت‌های ویژه قلبی شامل مدیریت دارویی، پایش علائم و خدمات تخصصی در منزل"
        publishedTime="2025-01-29"
        modifiedTime="2025-01-29"
        image={postCCUCareImage}
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              مراقبت‌های حیاتی پس از ترخیص از CCU
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              هفته اول، پل پیروزی بر بیماری
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</span>
              <span>•</span>
              <span>دسته‌بندی: قلب و عروق</span>
            </div>
            <img
              src={postCCUCareImage}
              alt="مراقبت پس از ترخیص از CCU در منزل"
              className="w-full rounded-lg shadow-md mb-8"
            />
          </header>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-destructive mb-1">هشدار مهم</p>
                <p className="text-sm text-muted-foreground">
                  اطلاعات این مقاله صرفاً جنبه آموزشی دارد. هرگز خودسرانه داروها را تغییر ندهید یا قطع نکنید.
                  در صورت مشاهده علائم هشدار، فوراً با پزشک تماس بگیرید.
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              ترخیص از بخش مراقبت‌های ویژه قلبی (CCU) یک موفقیت بزرگ است، اما به معنای پایان درمان نیست. در واقع، <strong>۷ روز اول پس از ترخیص</strong>، حساس‌ترین بازه زمانی برای بازسازی عضله قلب و جلوگیری از بستری شدن مجدد است. بسیاری از بیماران و خانواده‌ها در این دوره دچار سردرگمی و اضطراب می‌شوند.
            </p>

            <p>
              ما در مرکز نوید زندگی با ارائه پکیج‌های مراقبتی "پس از ترخیص"، بیمارستان را به خانه شما می‌آوریم تا این دوران نقاهت با آرامش و امنیت کامل طی شود.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Pill className="w-6 h-6 text-primary" />
              ۱. مدیریت دارویی؛ ستون اصلی بهبودی
            </h2>

            <p>
              در CCU داروها به صورت وریدی و تحت کنترل دقیق پرستاران تزریق می‌شدند، اما در خانه مسئولیت با شماست.
            </p>

            <ul>
              <li>
                <strong>نظم در مصرف:</strong> داروهای ضدانعقاد (مانند <Link to="/articles/clopidogrel" className="text-primary hover:underline">پلاویکس</Link> یا <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link>) و داروهای کنترل ضربان (<Link to="/articles/bisoprolol" className="text-primary hover:underline">بتابلاکرها</Link>) نباید حتی یک ساعت دیر مصرف شوند.
              </li>
              <li>
                <strong>تداخلات:</strong> از مصرف هرگونه داروی گیاهی یا مسکن‌های بدون نسخه (مثل ژلوفن) بدون مشورت خودداری کنید.
              </li>
              <li>
                <strong>راهکار نوید زندگی:</strong> اگر در مورد دوز داروها یا تداخل آن‌ها سوالی دارید، ویزیت متخصص قلب در منزل بهترین راه برای بازبینی نسخه و اطمینان از صحت درمان است.
              </li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-6">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>مهم:</strong> مطالعه مقاله <Link to="/articles/heart-medications-warning" className="text-primary hover:underline">«چرا نباید داروهای قلبی را خودسرانه قطع کرد؟»</Link> برای بیماران تازه ترخیص ضروری است.
              </p>
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Activity className="w-6 h-6 text-primary" />
              ۲. پایش علائم حیاتی؛ علائم خطر را بشناسید
            </h2>

            <p>
              بدن بیمار پس از سکته یا جراحی، سیگنال‌هایی می‌فرستد که نیاز به پایش مداوم دارد. خانواده بیمار باید روزانه موارد زیر را چک کنند:
            </p>

            <ul>
              <li>
                <strong>فشار خون و ضربان قلب:</strong> نوسانات شدید می‌تواند فشار مضاعفی به قلب وارد کند.
              </li>
              <li>
                <strong>تنگی نفس:</strong> اگر بیمار هنگام دراز کشیدن دچار تنگی نفس می‌شود، ممکن است نشانه تجمع مایع در ریه (نارسایی قلب) باشد.
              </li>
              <li>
                <strong>ورم پا:</strong> همان‌طور که در مقالات قبلی نوید زندگی اشاره کردیم، <Link to="/articles/leg-edema" className="text-primary hover:underline">ورم جدید پا</Link> پس از ترخیص یک زنگ خطر جدی است.
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              ۳. فعالیت بدنی؛ آهسته و پیوسته
            </h2>

            <p>
              اشتباه بزرگ، استراحت مطلق یا فعالیت سنگین ناگهانی است.
            </p>

            <ul>
              <li>
                <strong>پیاده‌روی سبک:</strong> در فضای خانه شروع کنید. اگر بیمار دچار درد قفسه سینه، تنگی نفس یا تعریق سرد شد، بلافاصله فعالیت را متوقف کنید.
              </li>
              <li>
                <strong>پله ممنوع:</strong> در هفته اول تا حد امکان از بالا رفتن از پله‌ها خودداری شود.
              </li>
              <li>
                <strong>پایش با نوار قلب:</strong> برای اطمینان از اینکه فعالیت بدنی به قلب فشار نمی‌آورد، انجام یک <Link to="/articles/ecg-guide" className="text-primary hover:underline">نوار قلب در منزل</Link> در روزهای اول ترخیص، وضعیت ریتم قلب بیمار را در شرایط واقعی خانه مشخص می‌کند.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">۴. خدمات تخصصی نوید زندگی در دوران نقاهت</h2>

            <p>
              چرا جابه‌جایی بیمار تازه ترخیص شده به مطب و کلینیک خطرناک است؟ ترافیک، آلودگی هوا، استرسِ انتظار و پله‌های مطب‌ها می‌تواند منجر به عارضه جدید شود. خدمات ما شامل موارد زیر است:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">الف) اکوکاردیوگرافی (اکو) در منزل</h3>
            <p>
              پزشکان معمولاً توصیه می‌کنند ۲ تا ۴ هفته پس از ترخیص، مجدداً قدرت پمپاژ قلب (EF) چک شود. دستگاه‌های پورتابل نوید زندگی این امکان را فراهم می‌کنند که بدون جابجایی بیمار، روند ترمیم عضله قلب را در منزل بررسی کنیم. برای اطلاعات بیشتر <Link to="/articles/echo-safety-home" className="text-primary hover:underline">اینجا کلیک کنید</Link>.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">ب) نوار قلب دوره‌ای در منزل</h3>
            <p>
              پس از سکته، قلب مستعد بی‌نظمی‌های ضربان (آریتمی) است. چک‌آپ‌های منظم با <Link to="/articles/ecg-guide" className="text-primary hover:underline">نوار قلب</Link> در محل، کوچکترین تغییرات الکتریکی را ثبت کرده و از ایست قلبی ناگهانی پیشگیری می‌کند.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">ج) ویزیت متخصص قلب و آزمایش خون</h3>
            <p>
              تنظیم داروهای حساسی مثل <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link> نیاز به <Link to="/articles/inr-monitoring" className="text-primary hover:underline">آزمایش خون مداوم (INR)</Link> دارد. تیم ما با حضور در منزل، نمونه‌گیری را انجام داده و پزشک متخصص در همان جلسه، بر اساس نتایج، دوز دارو را تنظیم می‌کند.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Utensils className="w-6 h-6 text-primary" />
              ۵. رژیم غذایی پس از CCU
            </h2>

            <ul>
              <li>
                <strong>حذف نمک:</strong> نمک باعث احتباس آب و فشار به قلب می‌شود.
              </li>
              <li>
                <strong>وعده‌های کوچک:</strong> به جای ۳ وعده بزرگ، از ۵ وعده سبک استفاده کنید تا خونرسانی به دستگاه گوارش باعث افت خونرسانی به قلب نشود.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-destructive">چه زمانی باید فوراً تماس بگیرید؟</h2>

            <p>
              در صورت مشاهده موارد زیر، زمان را از دست ندهید و درخواست ویزیت فوری یا اعزام تیم قلبی به منزل بدهید:
            </p>

            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span>درد یا سنگینی در قفسه سینه که با استراحت خوب نمی‌شود</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span>ضربان قلب بسیار سریع (بالای ۱۱۰) یا بسیار کند (زیر ۵۰) در حالت استراحت</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span>گیجی، منگی یا سرد شدن ناگهانی دست و پا</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span>تنگی نفس شدید که بیمار را مجبور به نشستن می‌کند</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">نتیجه‌گیری</h2>

            <p>
              ترخیص از CCU آغاز یک دوره حساس است که مدیریت صحیح آن در خانه، <strong>تضمین‌کننده طول عمر بیمار</strong> است. مرکز نوید زندگی با تیم متخصص خود، امنیت بیمارستان را به آرامش خانه شما پیوند می‌زند تا مسیر بهبودی را با اطمینان کامل طی کنید.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>منابع معتبر علمی:</strong><br />
                • American Heart Association (AHA): Life After a Heart Attack - The First Weeks<br />
                • European Society of Cardiology (ESC): Post-discharge management of acute coronary syndromes<br />
                • Mayo Clinic: Heart attack recovery: What to expect at home<br />
                • Cleveland Clinic: Guidelines for cardiac recovery after intensive care
              </p>
            </div>
          </article>

          {/* CTA Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-10">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              آیا عضوی از خانواده شما به تازگی از CCU ترخیص شده است؟
            </h3>
            <p className="text-muted-foreground mb-4">
              همین حالا برای رزرو پکیج مراقبتی پس از ترخیص (شامل ویزیت متخصص، اکو و نوار قلب در منزل) اقدام کنید.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس فوری: {phoneNumber}
            </a>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection faqs={faqs} />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Pricing Info */}
          <div className="mt-12">
            <PricingInfo />
          </div>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default PostCCUCarePage;
