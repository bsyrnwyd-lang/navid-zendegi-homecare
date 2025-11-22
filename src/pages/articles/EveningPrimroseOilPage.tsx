import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import LazyImage from "@/components/LazyImage";
import eveningPrimroseOilImage from "@/assets/evening-primrose-oil-article.jpg";
import eveningPrimroseBotanicalImage from "@/assets/evening-primrose-botanical.jpg";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import gynecologyImage from "@/assets/gynecology.jpg";
import onlineDoctorImage from "@/assets/home-medical-consultation.jpg";

const EveningPrimroseOilPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "روغن گل مغربی", url: "/articles/evening-primrose-oil" }
  ];

  const faqs = [
    {
      question: "آیا روغن گل مغربی واقعاً برای PMS مؤثر است؟",
      answer: "شواهد بالینی نشان می‌دهد که اسید گاما-لینولنیک (GLA) موجود در روغن گل مغربی می‌تواند برخی علائم PMS مانند حساسیت سینه و نوسانات خلقی را کاهش دهد. با این حال، پاسخ‌ها در افراد متفاوت است و باید تحت نظر پزشک استفاده شود."
    },
    {
      question: "آیا می‌توانم روغن گل مغربی را با داروهای دیگر مصرف کنم؟",
      answer: "خیر، بدون مشورت با پزشک نباید روغن گل مغربی را با داروهای ضد انعقاد، فشار خون یا داروهای روانپزشکی مصرف کنید. این مکمل می‌تواند تداخلات دارویی خطرناکی داشته باشد."
    },
    {
      question: "چقدر طول می‌کشد تا اثرات روغن گل مغربی مشهود شود؟",
      answer: "معمولاً نیاز به مصرف منظم حداقل ۲ تا ۳ ماه است تا اثرات مکمل بر علائم PMS یا مشکلات پوستی مشخص شود. صبر و پیگیری مداوم ضروری است."
    },
    {
      question: "آیا روغن گل مغربی عوارض جانبی دارد؟",
      answer: "شایع‌ترین عوارض جانبی شامل ناراحتی معده، تهوع و اسهال است. در افراد با سابقه تشنج یا مصرف داروهای خاص، ممکن است خطرات جدی‌تری وجود داشته باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "ویتامین E: خواص آنتی‌اکسیدانی و نقش در سلامت پوست",
      description: "راهنمای جامع ویتامین E: خواص ضد پیری، نقش در حفاظت از پوست و عوارض مصرف بیش از حد",
      link: "/articles/vitamin-e",
      image: vitaminEImage,
      category: "تغذیه و سلامت"
    },
    {
      title: "ویزیت متخصص زنان در منزل",
      description: "دریافت خدمات تخصصی زنان و زایمان در راحتی منزل شما",
      link: "/services/gynecology",
      image: gynecologyImage,
      category: "خدمات"
    },
    {
      title: "ویزیت آنلاین پزشک",
      description: "مشاوره پزشکی آنلاین برای دسترسی آسان به متخصصان",
      link: "/services/online-doctor",
      image: onlineDoctorImage,
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="روغن گل مغربی (Evening Primrose Oil): خواص GLA، مدیریت PMS و عوارض پوستی | نوید زندگی"
        description="راهنمای جامع روغن گل مغربی: نقش اسید گاما-لینولنیک (GLA)، مدیریت سندرم پیش از قاعدگی، علائم یائسگی، درمان اگزما، تداخلات دارویی و هشدارهای ایمنی مصرف."
        keywords="روغن گل مغربی، Evening Primrose Oil، EPO، GLA، اسید گاما-لینولنیک، PMS، سندرم پیش از قاعدگی، یائسگی، اگزما، مکمل گیاهی، تداخل دارویی، سلامت زنان"
        canonical="https://navidzendegi.com/articles/evening-primrose-oil"
        ogType="article"
        publishedTime="2025-01-15"
        modifiedTime="2025-01-15"
      />

      <ArticleSchema
        title="روغن گل مغربی (Evening Primrose Oil): خواص GLA، مدیریت PMS و عوارض پوستی"
        description="راهنمای جامع روغن گل مغربی و نقش اسید گاما-لینولنیک در سلامت هورمونی و پوست"
        publishedTime="2025-01-15"
        modifiedTime="2025-01-15"
        image={eveningPrimroseOilImage}
      />

      <main className="py-12 px-4 max-w-4xl mx-auto">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <LazyImage
            src={eveningPrimroseOilImage}
            alt="کپسول‌های روغن گل مغربی و گل‌های زرد"
            className="w-full h-auto rounded-lg mb-8"
            width={1920}
            height={1080}
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            روغن گل مغربی (Evening Primrose Oil): خواص اسید گاما-لینولنیک (GLA)، مدیریت علائم سندرم پیش از قاعدگی (PMS) و عوارض پوستی
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            روغن گل مغربی (Evening Primrose Oil - EPO) که از دانه‌های گیاه <em>Oenothera biennis</em> استخراج می‌شود، یکی از محبوب‌ترین مکمل‌های گیاهی در جهان است. این روغن به دلیل محتوای بالای اسیدهای چرب امگا-۶، به‌ویژه اسید گاما-لینولنیک (GLA)، شهرت دارد. GLA یک اسید چرب ضروری است که در بدن به ترکیبات ضدالتهابی تبدیل می‌شود و نقش مهمی در سلامت هورمونی و حفظ سد دفاعی پوست ایفا می‌کند [1].
          </p>

          <LazyImage
            src={eveningPrimroseBotanicalImage}
            alt="تصویر بوتانیکال گل مغربی"
            className="w-full h-auto rounded-lg my-8"
            width={1920}
            height={1080}
          />

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            مکانیسم اثر: نقش اسید گاما-لینولنیک (GLA)
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            اثرات درمانی روغن گل مغربی مستقیماً با متابولیسم GLA در بدن مرتبط است:
          </p>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <strong>پیش‌ساز پروستاگلاندین‌ها:</strong> GLA یک اسید چرب ضروری از خانواده امگا-۶ است که پس از مصرف، در بدن به اسید دیهومو-گاما-لینولنیک (DGLA) تبدیل می‌شود.
            </li>
            <li>
              <strong>تولید ترکیبات ضدالتهابی:</strong> DGLA پیش‌ساز پروستاگلاندین‌های نوع ۱ (مانند PGE₁) است. این پروستاگلاندین‌ها دارای خواص ضدالتهابی و رگ‌گشادکننده هستند و به تنظیم پاسخ‌های التهابی بدن کمک می‌کنند [2].
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            کاربردهای درمانی اصلی روغن گل مغربی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            روغن گل مغربی به طور سنتی برای مدیریت شرایطی که در آن‌ها اختلال در مسیرهای التهابی یا هورمونی وجود دارد، استفاده می‌شود:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۱. مدیریت سندرم پیش از قاعدگی (PMS)
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            بسیاری از زنان برای کاهش علائم <a href="/services/gynecology" className="text-primary hover:underline">سندرم پیش از قاعدگی</a> از EPO استفاده می‌کنند. مطالعات نشان می‌دهند که GLA ممکن است به تعدیل حساسیت سینه‌ای (درد پستان)، نوسانات خلقی و نفخ مرتبط با PMS کمک کند.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۲. علائم یائسگی (Menopausal Symptoms)
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            برخی شواهد بالینی نشان می‌دهد که EPO می‌تواند در کاهش دفعات و شدت گرگرفتگی (Hot Flashes) در زنان یائسه مؤثر باشد، هرچند شواهد بیشتری مورد نیاز است.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۳. بیماری‌های پوستی التهابی
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>اگزما (درماتیت آتوپیک):</strong> کمبود GLA در بیماران مبتلا به اگزما مشاهده شده است. مصرف EPO ممکن است به بهبود عملکرد سد پوستی، کاهش خشکی و التهاب پوست کمک کند [3].
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            ملاحظات مصرف، تداخلات و هشدارهای ایمنی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            با وجود ماهیت طبیعی، مصرف EPO بدون مشورت پزشکی، به ویژه برای افراد دارای بیماری‌های مزمن، توصیه نمی‌شود.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۱. عوارض جانبی و هشدارها
          </h3>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <strong>عوارض گوارشی:</strong> شایع‌ترین عوارض شامل ناراحتی معده، تهوع و اسهال است که معمولاً با مصرف همراه غذا کاهش می‌یابد.
            </li>
            <li>
              <strong>افزایش خطر تشنج:</strong> در افراد مبتلا به اختلالات تشنجی، یا کسانی که داروهای کاهش‌دهنده آستانه تشنج مصرف می‌کنند، باید با احتیاط فراوان مصرف شود.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۲. تداخلات دارویی (هشدار مهم)
          </h3>

          <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg my-8">
            <p className="text-foreground font-semibold mb-2">
              ⚠️ هشدار بسیار مهم:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              مصرف روغن گل مغربی می‌تواند با داروهای خاص تداخل داشته و عوارض جدی ایجاد کند. به هیچ عنوان آن را بدون تجویز و نظر پزشک مصرف نکنید.
            </p>
          </div>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <strong>داروهای ضد انعقاد:</strong> EPO ممکن است خطر خونریزی را در افرادی که داروهای رقیق‌کننده خون (مانند <a href="/articles/warfarin" className="text-primary hover:underline">وارفارین</a> یا <a href="/articles/aspirin" className="text-primary hover:underline">آسپرین</a>) مصرف می‌کنند، افزایش دهد.
            </li>
            <li>
              <strong>داروهای کاهش‌دهنده فشار خون:</strong> تئوریکاً، ممکن است اثر داروهای <a href="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون</a> را تشدید کند.
            </li>
            <li>
              <strong>داروهای روانپزشکی:</strong> تداخل با برخی داروهای روان‌پریشی (مانند فنوتیازین‌ها) می‌تواند خطر تشنج را افزایش دهد [4].
            </li>
          </ul>

          <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
            <p className="text-foreground font-semibold mb-2">
              💊 تذکر مهم:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              هرگز خودسرانه از روغن گل مغربی یا هر مکمل دیگری استفاده نکنید. حتی مکمل‌های گیاهی می‌توانند عوارض جانبی جدی داشته باشند و با داروهای شما تداخل کنند.
            </p>
          </div>

          <section className="bg-gradient-to-l from-primary/5 to-primary/10 rounded-xl p-8 my-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              برای تصمیم‌گیری درباره مصرف روغن گل مغربی
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              برای تصمیم‌گیری در مورد مصرف روغن گل مغربی جهت مدیریت PMS یا علائم یائسگی، و همچنین بررسی تداخلات احتمالی با داروهای دیگر، <a href="/services/gynecology" className="text-primary font-semibold hover:underline">ویزیت آنلاین متخصص زنان و زایمان</a> یا <a href="/services/online-doctor" className="text-primary font-semibold hover:underline">ویزیت آنلاین پزشک عمومی</a> خود را از طریق نوید زندگی رزرو کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <span>تماس فوری: 09386117912</span>
              </a>
              <a
                href="/services/gynecology"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                ویزیت متخصص زنان
              </a>
            </div>
          </section>

          <h3 className="text-2xl font-semibold text-foreground mt-12 mb-4">
            منابع (References)
          </h3>

          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-2 mb-8">
            <li>
              Khoo, L. T., et al. (2018). Omega-6 Fatty Acids and Menopause. <em>Nutrients</em>, 10(7), 896.
            </li>
            <li>
              Fan, Y. Y., & Chapkin, R. S. (1998). Importance of dietary gamma-linolenic acid in human health and nutrition. <em>The Journal of Nutrition</em>, 128(9), 1411-1414.
            </li>
            <li>
              Lin, T. K., et al. (2017). Anti-inflammatory and skin barrier repair effects of topical application of oils. <em>International Journal of Molecular Sciences</em>, 19(1), 70.
            </li>
            <li>
              Mills, S., & Bone, K. (2013). <em>The Essential Guide to Herbal Safety</em>. Elsevier Health Sciences.
            </li>
          </ol>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default EveningPrimroseOilPage;
