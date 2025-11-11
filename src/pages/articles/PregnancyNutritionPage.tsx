import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";

const PregnancyNutritionPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تغذیه در بارداری", url: "" }
  ];

  const faqs = [
    {
      question: "چقدر باید در بارداری کالری بیشتر مصرف کنم؟",
      answer: "در سه‌ماهه دوم و سوم بارداری، معمولاً توصیه می‌شود حدود ۳۰۰ کالری اضافی در روز دریافت کنید. البته این مقدار بسته به وزن اولیه، BMI و میزان فعالیت بدنی شما متفاوت است و بهتر است با پزشک مشورت کنید."
    },
    {
      question: "چرا اسید فولیک در بارداری مهم است؟",
      answer: "اسید فولیک برای پیشگیری از نقص‌های لوله عصبی جنین بسیار حیاتی است. توصیه می‌شود زنان حتی قبل از بارداری و در سه‌ماهه اول، مکمل اسید فولیک مصرف کنند."
    },
    {
      question: "چگونه می‌توانم تهوع بارداری را کاهش دهم؟",
      answer: "برای کاهش تهوع، می‌توانید قبل از بلند شدن از تخت بیسکویت ساده بخورید، وعده‌های کوچک‌تر و بیشتر مصرف کنید، از گرسنگی شدید جلوگیری کنید و از بوهای تحریک‌کننده دوری کنید."
    },
    {
      question: "آیا نیاز به مصرف مکمل آهن در بارداری دارم؟",
      answer: "بسیاری از زنان باردار به مکمل آهن نیاز دارند، به‌ویژه اگر آزمایش خون نشان‌دهنده کم‌خونی باشد. آهن برای تأمین افزایش حجم خون مادر و جلوگیری از کم‌خونی ضروری است."
    },
    {
      question: "چه مقدار آب باید در بارداری بنوشم؟",
      answer: "توصیه می‌شود حداقل ۸ تا ۱۰ لیوان آب در روز بنوشید. مصرف مایعات کافی برای سلامت مادر و جنین و جلوگیری از یبوست بسیار مهم است."
    }
  ];

  const relatedArticles = [
    {
      title: "دیابت؛ راهنمای کامل بیماری قند",
      description: "شناخت انواع دیابت، علائم، روش‌های تشخیص و درمان این بیماری شایع",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "بیماری‌ها"
    },
    {
      title: "ویتامین E؛ نقش، کاربردها و نکات",
      description: "راهنمای جامع ویتامین E: عملکرد، منابع غذایی و احتیاط‌های مصرف",
      image: vitaminEImage,
      link: "/articles/vitamin-e",
      category: "تغذیه"
    },
    {
      title: "تب در کودکان؛ راهنمای کامل والدین",
      description: "آموزش مدیریت تب کودک، زمان مراجعه به پزشک و نکات مهم",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "اطفال"
    }
  ];

  return (
    <>
      <SEOHead
        title="تغذیه در بارداری | اصول، نیازها و نکات مهم | نوید زندگی"
        description="راهنمای کامل تغذیه در بارداری: نیازهای کالری، پروتئین، ویتامین‌ها، مدیریت تهوع و نکات تغذیه‌ای برای سلامت مادر و جنین"
        keywords="تغذیه بارداری، نیازهای تغذیه‌ای باردار، اسید فولیک، آهن در بارداری، تهوع بارداری، مکمل بارداری، رژیم غذایی حاملگی"
        canonical="https://navidzendegi.com/articles/pregnancy-nutrition"
        ogImage={pregnancyNutritionImage}
        ogType="article"
        publishedTime="2025-01-27"
        modifiedTime="2025-01-27"
      />

      <ArticleSchema
        title="تغذیه در بارداری؛ اصول، نیازها و نکات مهم"
        description="راهنمای کامل تغذیه در بارداری شامل نیازهای کالری، پروتئین، ویتامین‌ها، مدیریت تهوع و نکات عملی برای سلامت مادر و جنین"
        publishedTime="2025-01-27"
        modifiedTime="2025-01-27"
        image={pregnancyNutritionImage}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingContact />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              تغذیه در بارداری؛ اصول، نیازها و نکات مهم
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>تاریخ انتشار: ۱۴۰۳/۱۱/۰۸</span>
              <span>•</span>
              <span>دسته‌بندی: تغذیه</span>
            </div>
            <img
              src={pregnancyNutritionImage}
              alt="تغذیه در بارداری"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2>مقدمه</h2>
            <p>
              دوران بارداری زمانی حیاتی برای مادر و جنین است؛ در این دوره، نیازهای تغذیه‌ای بدن تغییر می‌کند و تغذیه صحیح می‌تواند سلامت مادر و رشد جنینی را تضمین کند. رعایت اصول تغذیه‌ای مناسب می‌تواند به کاهش عوارض، رشد سالم جنین و بهبود تجربه بارداری کمک نماید.
            </p>

            <h2>نیازهای تغذیه‌ای در بارداری</h2>

            <h3>کالری</h3>
            <p>
              در حدود سه‌ماهه دوم و سوم بارداری، نیاز به کالری افزایش می‌یابد. اغلب توصیه می‌شود حدود ۳۰۰ کالری اضافی در روز در دوران بارداری دریافت شود؛ البته این عدد بسته به وزن اولیه، شاخص توده بدن (BMI) و فعالیت بدنی متفاوت است.
            </p>

            <h3>پروتئین</h3>
            <p>
              پروتئین برای رشد بافت‌های جنین، جفت و افزایش حجم خون مادر ضروری است. توصیه می‌شود مادران باردار روزانه حداقل ۱٫۱ گرم پروتئین به ازای هر کیلوگرم وزن بدن در نظر بگیرند.
            </p>

            <h3>ویتامین‌ها و مواد معدنی</h3>
            <p>برخی از مهم‌ترین مواد مغذی در بارداری عبارت‌اند از:</p>
            <ul>
              <li><strong>اسید فولیک (فولات):</strong> برای پیشگیری از نقص‌های لوله عصبی جنین</li>
              <li><strong>آهن:</strong> برای تأمین افزایش حجم خون مادر و جلوگیری از <a href="/articles/anemia" className="text-primary hover:underline">کم‌خونی</a></li>
              <li><strong>کلسیم و ویتامین D:</strong> برای رشد اسکلت جنین و حفظ سلامت استخوان مادر</li>
              <li><strong>ید (یُد):</strong> برای عملکرد تیروئید مادر و جنین</li>
              <li><strong>امگا-۳ (DHA/EPA):</strong> برای توسعه مغز و چشم جنین</li>
            </ul>

            <h3>آب و فیبر</h3>
            <p>
              مصرف مایعات کافی (حداقل ۸ تا ۱۰ لیوان در روز) بسیار مهم است. فیبر غذایی نیز به جهت جلوگیری از <a href="/articles/constipation" className="text-primary hover:underline">یبوست</a> که در بارداری رایج است، اهمیت دارد.
            </p>

            <h2>الگوهای غذایی پیشنهادی</h2>
            <ul>
              <li>خوردن وعده‌های کوچک‌تر و بیشتر (مثلاً ۵ تا ۶ وعده کوچک در روز) به جای سه وعده بزرگ، به‌ویژه اگر تهوع بارداری دارید</li>
              <li>تمرکز بر میوه‌ها، سبزیجات، غلات کامل، پروتئین‌های سالم (ماهی، مرغ، حبوبات)، لبنیات کم‌چرب</li>
              <li>محدود کردن مصرف غذاهای فرآوری‌شده، قند افزوده، چربی‌های اشباع و نمک</li>
              <li>انتخاب منابع سالم چربی مانند روغن زیتون، آووکادو، مغزها و دانه‌ها</li>
            </ul>

            <h2>تهوع، ویار و شرایط رایج تغذیه‌ای</h2>
            <p>
              یکی از مسائل شایع بارداری تهوع و استفراغ (morning sickness / Nausea & Vomiting of Pregnancy – NVP) است که حدود ۷۰-۸۰٪ زنان باردار را در مراحل اولیه تحت تأثیر قرار می‌دهد. مطالعه‌ای نشان داده است که هورمونی به نام GDF15 تولیدشده در جفت ممکن است مسئول میزان شدت آن باشد.
            </p>
            <p>برای کاهش تهوع می‌توان اقدامات زیر را انجام داد:</p>
            <ul>
              <li>قبل از بلند شدن از تخت، چند عدد بیسکویت ساده بخورید</li>
              <li>وعده‌های غذایی کوچک‌تر و بیشتر بخورید، از گرسنگی زیاد جلوگیری کنید</li>
              <li>از بوی غذاها و خوراکی‌هایی که تهوع را تحریک می‌کنند، پرهیز نمایید</li>
              <li>در صورت تهوع شدید (مثلاً Hyperemesis gravidarum) که منجر به کاهش وزن، کمبود مایعات یا الکترولیت‌ها شود، حتماً با پزشک مشورت کنید</li>
            </ul>

            <h2>عوارض تغذیه‌ای نادرست در بارداری</h2>
            <ul>
              <li>دریافت ناکافی اسید فولیک می‌تواند ریسک نقص لوله عصبی در جنین را افزایش دهد</li>
              <li>کمبود آهن ممکن است به کم‌خونی مادر، زایمان زودرس یا رشد ضعیف جنین منجر شود</li>
              <li>مصرف نامناسب کلسیم و ویتامین D ممکن است سلامت استخوان مادر و جنین را تحت تأثیر قرار دهد</li>
              <li>پرخوری یا افزایش وزن زیاد در بارداری می‌تواند ریسک <a href="/articles/diabetes" className="text-primary hover:underline">دیابت بارداری</a>، فشار خون بالا و مشکلات زایمان را افزایش دهد</li>
            </ul>

            <h2>نکات عملی برای مصرف مکمل و ویتامین‌ها</h2>
            <ul>
              <li>اغلب زنان باردار نیاز به مکمل اسید فولیک دارند — معمولاً قبل از بارداری و در سه‌ماهه اول</li>
              <li>مکمل آهن در صورت کم‌خونی توصیه می‌شود (بر اساس آزمایش خون)</li>
              <li>انتخاب مکمل‌های ویتامین باید تحت نظر پزشک انجام شود؛ زیرا مصرف زیاد برخی ویتامین‌ها (مثل <a href="/articles/vitamin-e" className="text-primary hover:underline">ویتامین A زیاد</a>) ممکن است برای جنین مضر باشد</li>
              <li>تغذیه مناسب همیشه باید اولویت باشد، مکمل تنها در صورت لزوم و تحت نظر پزشک استفاده شود</li>
            </ul>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">مشاوره تغذیه در بارداری در منزل</h3>
              <p className="text-foreground mb-4">
                برای مادران بارداری که نیاز به مشاوره تغذیه‌ای، پایش وزنی، ارزیابی ویتامین‌ها یا بررسی تهوع شدید دارند، استفاده از خدمات <a href="/general-doctor" className="text-primary hover:underline font-semibold">ویزیت پزشک در منزل</a> گزینه‌ای بسیار مناسب است.
              </p>
              <p className="text-foreground mb-4">پزشک در منزل می‌تواند:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li>بررسی جامع تغذیه، ویتامین‌ها و مکمل‌ها انجام دهد</li>
                <li>وزن مادر، قند خون، فشار خون و سایر شاخص‌ها را کنترل کند</li>
                <li>در صورت تهوع شدید یا مشکل تغذیه‌ای، هماهنگی ارجاع به متخصص یا انجام آزمایش را انجام دهد</li>
              </ul>
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-lg font-semibold text-foreground mb-2">
                  برای دریافت مشاوره تخصصی تغذیه در بارداری در منزل
                </p>
                <a 
                  href="tel:09386117912" 
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  <span>📞</span>
                  <span dir="ltr">09386117912</span>
                </a>
              </div>
            </div>

            <h2>جمع‌بندی</h2>
            <p>
              تغذیه در بارداری یکی از پایه‌های مهم سلامت مادر و جنین است. رعایت یک رژیم متعادل، توجه به نیازهای خاص بارداری، مدیریت تهوع و استفاده هوشمندانه از مکمل‌ها می‌تواند به تجربهٔ بارداری سالم‌تر و کاهش عوارض کمک نماید. در صورت وجود سؤال، تهوع شدید، مشکلات تغذیه‌ای یا شرایط ویژه، حتماً از خدمات پزشک در منزل استفاده کنید.
            </p>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
          <PricingInfo />
        </article>

        <Footer />
      </div>
    </>
  );
};

export default PregnancyNutritionPage;
