import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import botoxImage from "@/assets/botox-treatment-article.jpg";
import migraineImage from "@/assets/migraine-article.jpg";
import hyperhidrosisImage from "@/assets/hyperhidrosis-article.jpg";
import botulismWarningImage from "@/assets/botulism-warning.jpg";

const BotoxPage = () => {
  const faqs = [
    {
      question: "بوتاکس چگونه عمل می‌کند؟",
      answer: "بوتاکس با مهار آزادسازی استیل کولین از پایانه‌های عصبی، باعث فلج یا تضعیف موقت عضلات تزریق شده می‌شود. این اثر معمولاً ۳ تا ۶ ماه طول می‌کشد."
    },
    {
      question: "چه کسانی نباید بوتاکس تزریق کنند؟",
      answer: "افراد مبتلا به میاستنی گراویس، سندرم ایتون-لامبرت یا حساسیت شناخته شده به سم بوتولینوم نباید بوتاکس تزریق کنند. زنان باردار و شیرده نیز باید از تزریق خودداری کنند."
    },
    {
      question: "اثر بوتاکس چه زمانی ظاهر می‌شود؟",
      answer: "اثرات بوتاکس معمولاً ۳ تا ۷ روز پس از تزریق ظاهر شده و حداکثر تأثیر پس از ۲ هفته قابل مشاهده است."
    },
    {
      question: "عوارض جانبی شایع بوتاکس چیست؟",
      answer: "شایع‌ترین عوارض شامل درد، کبودی، تورم یا قرمزی در محل تزریق است. افتادگی موقت پلک نیز در موارد غیرشایع رخ می‌دهد."
    },
    {
      question: "آیا بوتاکس فقط برای زیبایی استفاده می‌شود؟",
      answer: "خیر، بوتاکس کاربردهای درمانی متعددی دارد از جمله درمان میگرن مزمن، تعریق بیش از حد، دیستونی گردنی و اسپاسم عضلانی پس از سکته مغزی."
    }
  ];

  const relatedArticles = [
    {
      title: "میگرن: علل، علائم و درمان",
      description: "راهنمای جامع میگرن و روش‌های درمانی شامل بوتاکس",
      image: migraineImage,
      link: "/articles/migraine",
      category: "سلامت عمومی"
    },
    {
      title: "تعریق بیش از حد (هایپرهیدروزیس)",
      description: "علل و درمان تعریق بیش از حد شامل تزریق بوتاکس",
      image: hyperhidrosisImage,
      link: "/articles/hyperhidrosis",
      category: "سلامت عمومی"
    },
    {
      title: "بوتولیسم: علائم و پیشگیری",
      description: "شناخت بیماری بوتولیسم و تفاوت آن با بوتاکس درمانی",
      image: botulismWarningImage,
      link: "/articles/botulism",
      category: "سلامت عمومی"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بوتاکس", url: "/articles/botox" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بوتاکس: کاربردها، مکانیسم اثر و ملاحظات درمانی | نوید زندگی"
        description="راهنمای کامل بوتاکس شامل مکانیسم اثر، کاربردهای زیبایی و درمانی، عوارض جانبی و ملاحظات مهم قبل از تزریق"
        keywords="بوتاکس، تزریق بوتاکس، سم بوتولینوم، درمان میگرن، تعریق بیش از حد، چین و چروک"
        canonical="https://navidzendegi.com/articles/botox"
        ogType="article"
        publishedTime="2024-12-10"
        modifiedTime="2024-12-10"
      />
      <ArticleSchema
        title="بوتاکس: کاربردها، مکانیسم اثر و ملاحظات درمانی"
        description="راهنمای کامل بوتاکس شامل مکانیسم اثر، کاربردهای زیبایی و درمانی، عوارض جانبی"
        publishedTime="2024-12-10"
        modifiedTime="2024-12-10"
        image={botoxImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none text-right" dir="rtl">
          <h1 className="text-3xl font-bold mb-6 text-foreground">بوتاکس: کاربردها، مکانیسم اثر و ملاحظات درمانی</h1>

          <img
            src={botoxImage}
            alt="تزریق بوتاکس و کاربردهای درمانی"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>بوتاکس</strong> نام تجاری مشهورترین محصول حاوی <strong>سم بوتولینوم نوع A (Botulinum Toxin Type A)</strong> است. این سم که توسط باکتری <em>کلستریدیوم بوتولینوم</em> تولید می‌شود، یک <strong>نوروتوکسین قوی</strong> است که در دوزهای کنترل‌شده و بسیار کم، کاربردهای گسترده‌ای در پزشکی زیبایی و درمانی پیدا کرده است.
          </p>

          <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg mb-6">
            <p className="text-red-800 font-semibold">
              ⚠️ هشدار: بوتاکس یک داروی تجویزی است و باید توسط پزشکان آموزش‌دیده و مجاز تزریق شود. از تزریق در مراکز غیرمجاز خودداری کنید.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">مکانیسم اثر (Mechanism of Action)</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            مکانیسم عمل بوتاکس به طور دقیق بر روی اتصالات عصبی-عضلانی تمرکز دارد:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۱. هدف‌گیری پایانه‌های عصبی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            بوتاکس به انتهای عصب‌های حرکتی (در محل اتصال عصب به عضله) متصل می‌شود.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۲. مهار آزادسازی استیل کولین</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            این سم از طریق تجزیه پروتئین <strong>SNARE</strong> (به‌ویژه <strong>SNAP-25</strong>) که برای ادغام وزیکول‌های عصبی با غشای سلولی ضروری است، از <strong>آزادسازی پیام‌رسان عصبی استیل کولین</strong> (Acetylcholine) جلوگیری می‌کند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۳. فلج موقت عضله</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            از آنجایی که استیل کولین سیگنال دهنده اصلی برای انقباض عضلانی است، مهار آزادسازی آن باعث <strong>فلج یا تضعیف موقت</strong> عضله تزریق شده می‌شود.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۴. اثر موقت</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            این اثر فلج‌کننده موقتی است و معمولاً <strong>۳ تا ۶ ماه</strong> طول می‌کشد، زیرا پایانه‌های عصبی جدید با گذشت زمان جوانه می‌زنند و ارتباطات جدیدی را با عضله برقرار می‌کنند.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">کاربردهای اصلی بوتاکس</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۱. کاربردهای زیبایی (Cosmetic Uses)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            این شایع‌ترین کاربرد بوتاکس است و برای کاهش چین و چروک‌های دینامیک (چین و چروک‌هایی که در اثر حرکت عضلات صورت ایجاد می‌شوند) استفاده می‌شود:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>چین و چروک‌های پیشانی:</strong> خطوط افقی پیشانی</li>
            <li><strong>خطوط اخم (Glabellar Lines):</strong> خطوط عمودی بین ابروها</li>
            <li><strong>خطوط پنجه کلاغی (Crow's Feet):</strong> چین و چروک‌های گوشه چشم</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۲. کاربردهای درمانی (Therapeutic Uses)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            بوتاکس برای درمان بسیاری از اختلالات مرتبط با اسپاسم یا فعالیت بیش از حد عضلات و غدد مؤثر است:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>دیستونی گردنی (Cervical Dystonia):</strong> اسپاسم شدید و دردناک عضلات گردن که باعث چرخش یا کج شدن سر می‌شود</li>
            <li><strong>هایپرهیدروزیس (Hyperhidrosis):</strong> تعریق بیش از حد در زیر بغل، کف دست‌ها یا کف پاها</li>
            <li><strong>میگرن مزمن:</strong> در افراد با ۱۵ روز یا بیشتر سردرد در ماه، بوتاکس به کاهش فرکانس و شدت حملات کمک می‌کند</li>
            <li><strong>بلفارواسپاسم (Blepharospasm):</strong> پلک زدن غیرارادی یا اسپاسم عضلات اطراف چشم</li>
            <li><strong>اسپاسم عضلات پس از سکته مغزی:</strong> برای کاهش سفتی و اسپاسم عضلانی (اسپاستیسیتی)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">ملاحظات درمانی و عوارض جانبی</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">ملاحظات مهم</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>مجوز FDA:</strong> بوتاکس یک داروی تجویزی است و باید توسط پزشکان آموزش‌دیده تزریق شود</li>
            <li><strong>اثرگذاری:</strong> اثرات درمانی معمولاً پس از ۳ تا ۷ روز ظاهر شده و حداکثر تأثیر پس از ۲ هفته قابل مشاهده است</li>
            <li><strong>منع مصرف:</strong> در افراد مبتلا به میاستنی گراویس، سندرم ایتون-لامبرت یا حساسیت به سم بوتولینوم منع مصرف دارد</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">عوارض جانبی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            عوارض جانبی معمولاً خفیف و موقتی هستند:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>شایع‌ترین عوارض:</strong> درد، کبودی، تورم یا قرمزی در محل تزریق</li>
            <li><strong>افتادگی پلک (Ptosis):</strong> در صورت پخش شدن سم به عضلات پلک (معمولاً موقتی)</li>
            <li><strong>ضعف موضعی:</strong> ضعف در عضلات نزدیک محل تزریق</li>
            <li><strong>عوارض سیستمی (بسیار نادر):</strong> مشکل در تنفس، بلع یا ضعف عضلانی عمومی که نیازمند مراقبت اورژانسی است</li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg mt-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">مشاوره پزشکی</h3>
            <p className="text-muted-foreground mb-4">
              برای مشاوره درباره تزریق بوتاکس و ارزیابی شرایط شما، با تیم پزشکی <strong>نوید زندگی</strong> تماس بگیرید.
            </p>
            <p className="text-lg font-bold text-primary">
              تماس: <a href="tel:09386117912" className="hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">منابع</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
            <li>Botulinum Toxin. In: StatPearls [Internet]. NCBI Bookshelf/NIH.</li>
            <li>Botulinum Toxin: Mechanism of Action. Journal of the American Academy of Dermatology (JAAD).</li>
            <li>Botulinum toxin: a look at the future. Journal of Neurology, Neurosurgery & Psychiatry.</li>
            <li>Botulinum toxin in the treatment of neurological disorders. The Lancet Neurology.</li>
          </ul>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </div>
    </ArticleLayout>
  );
};

export default BotoxPage;
