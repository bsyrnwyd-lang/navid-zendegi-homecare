import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import cocaineDangersImage from "@/assets/cocaine-dangers.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import heartAttackImage from "@/assets/cardiology-home-visit.jpg";
import nursingImage from "@/assets/nursing-home-care.jpg";

const CocaineDangersPage = () => {
  const relatedArticles = [
    {
      title: "افسردگی: علائم، علل و درمان",
      description: "راهنمای جامع درباره افسردگی، علائم، تشخیص و روش‌های درمانی موثر",
      image: depressionImage,
      link: "/articles/depression",
      category: "سلامت روان"
    },
    {
      title: "علائم سکته قلبی و اقدامات فوری",
      description: "آشنایی با علائم هشداردهنده سکته قلبی و اقدامات ضروری برای نجات جان",
      image: heartAttackImage,
      link: "/articles/heart-attack-symptoms",
      category: "قلب و عروق"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "مراقبت‌های تخصصی پرستاری در منزل برای بیماران نیازمند",
      image: nursingImage,
      link: "/services/nursing",
      category: "خدمات"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEOHead
        title="عوارض خطرناک کوکائین بر قلب، مغز و سیستم عصبی (خطر سکته و مرگ آنی)"
        description="کوکائین یک ماده محرک قوی و خطرناک است. با عوارض جدی کوکائین بر قلب (سکته آنی) و مغز (اسکیزوفرنی و افسردگی) آشنا شوید و برای درمان و مراقبت تخصصی در منزل با ما تماس بگیرید."
        keywords="کوکائین, عوارض کوکائین, سکته قلبی, سکته مغزی, اعتیاد, مواد مخدر, اسکیزوفرنی, افسردگی, ترک اعتیاد, سلامت قلب"
        canonical="https://navidzendegi.com/articles/cocaine-dangers"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی، متخصص قلب و عروق"
        ogImage={cocaineDangersImage}
      />
      
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              عوارض خطرناک کوکائین بر قلب، مغز و سیستم عصبی مرکزی
            </h1>
            <p className="text-muted-foreground">
              نویسنده/ویراستار پزشکی: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق
            </p>
          </div>

          <img
            src={cocaineDangersImage}
            alt="عوارض خطرناک کوکائین بر قلب و مغز - خطر سکته و مرگ آنی"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl mb-6">
              کوکائین یک ماده محرک قوی سیستم عصبی مرکزی است که مصرف آن به دلیل عوارض بسیار خطرناک، غیرمجاز است. این ماده که معمولاً به صورت پودر یا کریستال مصرف می‌شود، یک تهدید جدی و آنی برای سلامت فرد محسوب می‌شود. درک عوارض و خطرات این ماده برای حفظ سلامتی حیاتی است.
            </p>

            <div className="bg-red-50 dark:bg-red-950/20 border-r-4 border-red-500 p-6 my-6 rounded">
              <p className="text-sm text-foreground font-semibold">
                <strong>⚠️ هشدار جدی:</strong> مصرف کوکائین می‌تواند در اولین بار منجر به سکته قلبی، سکته مغزی و مرگ ناگهانی شود. این ماده در هیچ دوزی امن نیست.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۱. عوارض کوکائین بر سیستم قلبی و عروقی (خطر مرگ آنی)
            </h2>
            
            <p>
              یکی از خطرناک‌ترین اثرات کوکائین، تأثیر مستقیم آن بر سلامت قلب است. این ماده حتی می‌تواند در اولین مصرف باعث بروز حوادث جدی و مرگبار شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              افزایش ناگهانی ضربان قلب و فشار خون
            </h3>

            <p>
              مصرف کوکائین باعث انقباض عروق خونی شده و افزایش شدید و ناگهانی فشار خون و ضربان قلب را به دنبال دارد. این وضعیت می‌تواند منجر به پارگی عروق خونی و خونریزی‌های داخلی شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              سکته قلبی و مغزی
            </h3>

            <p>
              نکته قابل توجه این است که حتی یک بار مصرف کوکائین می‌تواند باعث سکته قلبی و مغزی شده و منجر به مرگ شود. این خطر در افراد جوان، حتی بدون سابقه قبلی بیماری قلبی، نیز وجود دارد.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              نارسایی قلب
            </h3>

            <p>
              مصرف طولانی مدت کوکائین به تدریج به عضله قلب آسیب می‌زند و می‌تواند باعث نارسایی مزمن قلب شود. این وضعیت قابل برگشت نیست و نیاز به درمان مادام‌العمر دارد.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۲. اثرات کوکائین بر مغز و سلامت روان
            </h2>

            <p>
              در حالی که کوکائین در کوتاه‌مدت باعث حس سرخوشی کاذب و افزایش موقتی تمرکز می‌شود، اما این اثرات گذرا هستند و مغز را با عوارض بلندمدت و جدی مواجه می‌کنند:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              افت دوپامین و افسردگی شدید
            </h3>

            <p>
              پس از گذر مدت کوتاهی از سرخوشی، سطح دوپامین در مغز به شدت افت می‌کند و فرد دچار احساس افسردگی، خستگی و اضطراب شدید می‌شود. این وضعیت می‌تواند منجر به افکار خودکشی شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              آسیب‌های روانی مزمن
            </h3>

            <p>
              مصرف کوکائین یکی از عواملی است که می‌تواند زمینه‌ساز بروز یا تشدید بیماری‌های شدید روانی مانند اسکیزوفرنی، پارانویا و اختلالات روانپریشی شود. این عوارض ممکن است حتی پس از قطع مصرف نیز ادامه یابند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              اعتیاد قوی
            </h3>

            <p>
              کوکائین بسیار اعتیادآور است و فرد به سرعت وابستگی جسمی و روانی پیدا می‌کند. ترک این ماده بسیار دشوار است و نیازمند مداخلات پزشکی و روانشناختی تخصصی می‌باشد.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۳. خدمات پزشکی و مراقبت در منزل برای بیماران تحت تأثیر مواد
            </h2>

            <p>
              افرادی که با عوارض مصرف مواد مخدر یا محرک مانند کوکائین مواجه هستند، به مراقبت‌های پزشکی و روانی فوری نیاز دارند.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-6 rounded">
              <h3 className="text-lg font-bold text-foreground mb-3">
                خدمات پزشکی نوید زندگی در این زمینه می‌تواند به شما کمک کند:
              </h3>
              
              <ul className="list-disc pr-6 space-y-3">
                <li>
                  <a href="/services/specialist" className="text-primary hover:underline font-semibold">ویزیت پزشک در منزل</a>: برای ارزیابی وضعیت جسمی، کنترل فشار خون و ضربان قلب در شرایط حاد و تجویز درمان‌های اولیه.
                </li>
                <li>
                  <a href="/services/nursing" className="text-primary hover:underline font-semibold">خدمات پرستاری تخصصی</a>: برای کنترل علائم حیاتی و مراقبت‌های ضروری پس از ترخیص از بیمارستان یا در طول دوره ترک.
                </li>
                <li>
                  <a href="/services/specialist" className="text-primary hover:underline font-semibold">مشاوره و ارجاع به متخصص روانپزشکی</a>: برای رسیدگی به مشکلات سلامت روان و شروع فرآیند ترک اعتیاد.
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 border-r-4 border-red-600 p-6 my-6 rounded">
              <p className="text-sm text-foreground font-bold">
                🚨 در صورت مشاهده علائم خطرناک مانند درد قفسه سینه، تنگی نفس شدید، تشنج، از دست دادن هوشیاری یا سردرگمی شدید، فوراً با اورژانس ۱۱۵ تماس بگیرید.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                نیاز به کمک دارید؟
              </h3>
              <p className="text-foreground mb-4">
                اگر شما یا یکی از عزیزانتان با مشکل سوء مصرف مواد مخدر مواجه هستید، تیم پزشکی نوید زندگی آماده است تا در منزل، مراقبت‌های لازم و ارجاع به مراکز تخصصی را فراهم کند.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  تماس فوری با ما
                </a>
                <a 
                  href="/services/specialist" 
                  className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  خدمات پزشکی در منزل
                </a>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 my-6 rounded">
              <p className="text-sm text-foreground">
                <strong>⚠️ نکته مهم:</strong> این مقاله تنها برای اطلاع‌رسانی و آگاهی عمومی است. مصرف هرگونه مواد مخدر علاوه بر غیرقانونی بودن، تهدیدی جدی برای سلامت و زندگی شماست. در صورت نیاز به کمک، حتماً به متخصصین مراجعه کنید.
              </p>
            </div>
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CocaineDangersPage;
