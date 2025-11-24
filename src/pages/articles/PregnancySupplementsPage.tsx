import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import pregnancySupplementsImage from "@/assets/pregnancy-supplements.jpg";

const PregnancySupplementsPage = () => {
  const faqs = [
    {
      question: "چرا فولیک اسید در دوران بارداری ضروری است؟",
      answer: "فولیک اسید احتمال بروز نقایص جدی مادرزادی در مغز و ستون فقرات جنین (نقص لوله عصبی - NTDs) را به شدت کاهش می‌دهد. مصرف آن باید حداقل یک ماه پیش از بارداری آغاز شود و در طول سه ماهه اول ادامه یابد، زیرا لوله عصبی در هفته‌های ابتدایی بارداری تشکیل می‌شود."
    },
    {
      question: "چه زمانی باید مصرف مکمل آهن را شروع کنم؟",
      answer: "معمولاً مصرف مکمل آهن از سه ماهه دوم بارداری (زمانی که نیاز به آهن افزایش می‌یابد) تجویز می‌شود. در دوران بارداری، حجم خون مادر تا 50 درصد افزایش می‌یابد و نیاز به تولید بیشتر گلبول‌های قرمز وجود دارد. کمبود آهن می‌تواند منجر به کم‌خونی، خستگی شدید، و افزایش خطر زایمان زودرس شود."
    },
    {
      question: "آیا می‌توانم همه مکمل‌ها را با هم مصرف کنم؟",
      answer: "خیر، برخی مکمل‌ها با یکدیگر تداخل دارند. به عنوان مثال، کلسیم می‌تواند جذب آهن را کاهش دهد. بهتر است مکمل آهن را جداگانه و با فاصله از مکمل کلسیم مصرف کنید. همیشه با متخصص زنان خود در مورد زمان‌بندی مصرف مکمل‌ها مشورت کنید."
    },
    {
      question: "چرا نباید ویتامین A دوز بالا در بارداری مصرف کرد؟",
      answer: "مصرف دوزهای بالای ویتامین A (بیشتر از 10,000 IU در روز) در دوران بارداری می‌تواند نقص‌های مادرزادی جدی ایجاد کند. بنابراین باید از مصرف خودسرانه مکمل‌های حاوی دوز بالای ویتامین A خودداری شود و تنها تحت نظر پزشک از مکمل‌های مولتی ویتامین مخصوص بارداری استفاده کنید."
    },
    {
      question: "چگونه می‌توانم سطح ویتامین‌ها و آهن خود را بسنجم؟",
      answer: "بهترین راه برای تعیین دقیق کمبودها، انجام آزمایش خون است. آزمایش‌هایی مانند CBC (شمارش کامل خون)، فریتین، ویتامین D و سایر شاخص‌ها می‌توانند وضعیت واقعی بدن شما را نشان دهند. شما می‌توانید از خدمات آزمایش خون در منزل استفاده کنید تا بدون نیاز به مراجعه به آزمایشگاه، نمونه‌گیری انجام شود."
    },
    {
      question: "آیا مکمل امگا-3 برای جنین ضروری است؟",
      answer: "بله، اسیدهای چرب امگا-3 (به ویژه DHA) برای تکامل بینایی و مغزی جنین حیاتی هستند. مصرف آن‌ها به‌ویژه در سه ماهه سوم بارداری توصیه می‌شود. اگر ماهی چرب (مانند سالمون) مصرف نمی‌کنید، مصرف مکمل امگا-3 تحت نظر پزشک مفید است."
    }
  ];

  const relatedArticles = [
    { 
      title: "تغذیه صحیح در بارداری", 
      description: "راهنمای کامل تغذیه مادران باردار: مواد مغذی ضروری، رژیم غذایی متعادل و نکات تغذیه‌ای",
      image: "/src/assets/pregnancy-nutrition.jpg",
      link: "/articles/pregnancy-nutrition",
      category: "تغذیه"
    },
    { 
      title: "دیابت بارداری: علائم و مدیریت", 
      description: "راهنمای جامع دیابت بارداری: علل، علائم، تشخیص، عوارض و درمان",
      image: "/src/assets/diabetes-pregnancy.jpg",
      link: "/articles/diabetes-pregnancy",
      category: "بارداری"
    },
    { 
      title: "آزمایش خون در منزل", 
      description: "خدمات نمونه‌گیری و آزمایش خون در منزل با تجهیزات استاندارد",
      image: "/src/assets/medical-equipment-home.jpg",
      link: "/services/laboratory",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مکمل‌های ضروری دوران بارداری: فولیک اسید، آهن و ویتامین D | نوید زندگی"
        description="راهنمای جامع مکمل‌های حیاتی دوران بارداری: فولیک اسید برای پیشگیری از نقایص لوله عصبی، آهن برای جلوگیری از کم‌خونی، ویتامین D و سایر مکمل‌ها، زمان‌بندی مصرف و هشدارهای مهم."
        keywords="مکمل بارداری، فولیک اسید، آهن بارداری، ویتامین D بارداری، کم‌خونی بارداری، نقص لوله عصبی، مکمل مولتی ویتامین، ید بارداری، کلسیم بارداری، امگا-3 بارداری، DHA، مشاوره تغذیه بارداری، آزمایش خون در منزل، متخصص زنان"
        canonical="https://navidzendegi.ir/articles/pregnancy-supplements"
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />

      <ArticleSchema
        title="مکمل‌های ضروری دوران بارداری: تأمین نیازهای حیاتی مادر و جنین"
        description="راهنمای جامع مکمل‌های حیاتی دوران بارداری: فولیک اسید، آهن، ویتامین D و سایر مکمل‌ها، زمان‌بندی مصرف و هشدارهای مهم."
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={pregnancySupplementsImage}
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "مکمل‌های ضروری دوران بارداری", url: "/articles/pregnancy-supplements" }
          ]}
        />

        <article className="prose prose-lg max-w-none">
          <img
            src={pregnancySupplementsImage}
            alt="مکمل‌های ضروری دوران بارداری برای سلامت مادر و جنین"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            loading="eager"
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            مکمل‌های ضروری در دوران بارداری: تأمین نیازهای حیاتی مادر و جنین (فولیک اسید، آهن و ویتامین D)
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            دوران بارداری یک دوره حساس با نیازهای تغذیه‌ای بالا است. حتی با داشتن یک رژیم غذایی سالم و متعادل، برای اطمینان از رشد بهینه جنین و حفظ سلامت مادر، <strong>مصرف مکمل‌های خاص ضروری است</strong>. مهم‌ترین این مکمل‌ها شامل <Link to="/articles/vitamins-health" className="text-primary hover:underline">فولیک اسید (Folic Acid)</Link>، آهن (Iron)، و ویتامین D هستند که نقش‌های حیاتی در ساختار سلولی، خون‌سازی و تکامل استخوان‌ها دارند.
          </p>

          <section className="my-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              مکمل‌های حیاتی و الزامی دوران بارداری
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              توصیه می‌شود مصرف مکمل‌های زیر از پیش از بارداری یا بلافاصله پس از آگاهی از آن شروع شود:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ۱. فولیک اسید (Folic Acid / Vitamin B9)
              </h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-4">
                <li>
                  <strong>اهمیت:</strong> فولیک اسید احتمال بروز نقایص جدی مادرزادی در مغز و ستون فقرات جنین را، که تحت عنوان نقص لوله عصبی (Neural Tube Defects - NTDs) شناخته می‌شوند، به شدت کاهش می‌دهد
                </li>
                <li>
                  <strong>زمان مصرف:</strong> مصرف این مکمل باید حداقل یک ماه پیش از بارداری آغاز شده و در طول سه ماهه اول ادامه یابد، زیرا لوله عصبی در هفته‌های ابتدایی بارداری تشکیل می‌شود
                </li>
                <li>
                  <strong>میزان توصیه شده:</strong> معمولاً روزانه 400 تا 800 میکروگرم (μg) توصیه می‌شود
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ۲. آهن (Iron)
              </h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-4">
                <li>
                  <strong>اهمیت:</strong> در دوران بارداری، حجم خون مادر تا 50 درصد افزایش می‌یابد و نیاز به تولید بیشتر گلبول‌های قرمز وجود دارد. کمبود آهن می‌تواند منجر به کم‌خونی فقر آهن (Anemia)، خستگی شدید مادر، و افزایش خطر زایمان زودرس و وزن کم هنگام تولد شود
                </li>
                <li>
                  <strong>زمان مصرف:</strong> اغلب از سه ماهه دوم (زمانی که نیاز افزایش می‌یابد) تجویز می‌شود
                </li>
                <li>
                  <strong>میزان توصیه شده:</strong> معمولاً 27 میلی‌گرم در روز
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ۳. ویتامین D
              </h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-4">
                <li>
                  <strong>اهمیت:</strong> <Link to="/articles/vitamins-health" className="text-primary hover:underline">ویتامین D</Link> برای جذب کلسیم و فسفر و در نتیجه، تکامل استخوان‌ها و دندان‌های جنین حیاتی است. همچنین در تنظیم سیستم ایمنی مادر و پیشگیری از پره‌اکلامپسی نقش دارد
                </li>
                <li>
                  <strong>میزان توصیه شده:</strong> اغلب 400 تا 600 واحد بین‌المللی (IU) توصیه می‌شود، اما در صورت کمبود شدید، دوزهای بالاتر تجویز می‌گردد
                </li>
              </ul>
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              سایر مکمل‌های مهم و حمایتی
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              در کنار مکمل‌های الزامی، مصرف مکمل‌های زیر نیز بر اساس شرایط فردی مادر و تشخیص پزشک توصیه می‌شود:
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mr-4">
              <li>
                <strong>کلسیم:</strong> برای حفظ تراکم استخوان‌های مادر و تأمین نیازهای رشد اسکلت جنین، به‌ویژه در زنانی که محصولات لبنی کمی مصرف می‌کنند
              </li>
              <li>
                <strong>ید (Iodine):</strong> برای عملکرد صحیح غده تیروئید مادر و تکامل مغز و سیستم عصبی جنین ضروری است
              </li>
              <li>
                <strong>اسیدهای چرب امگا-3 (به ویژه DHA):</strong> برای تکامل بینایی و مغزی جنین حیاتی هستند و مصرف آن‌ها به‌ویژه در سه ماهه سوم توصیه می‌شود
              </li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              هشدارها: پایش دقیق و مصرف تحت نظارت پزشک
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              مصرف مکمل‌ها در دوران بارداری باید به طور جدی تحت نظارت <Link to="/services/gynecology" className="text-primary hover:underline">متخصص زنان و زایمان</Link> باشد.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-destructive mb-3">
                    خطرات مصرف خودسرانه
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                    <li>
                      <strong>خطر مسمومیت با ویتامین A:</strong> مصرف دوزهای بالای ویتامین A (بیشتر از 10,000 IU در روز) در دوران بارداری می‌تواند نقص‌های مادرزادی جدی ایجاد کند. بنابراین باید از مصرف خودسرانه مکمل‌های حاوی دوز بالا خودداری شود
                    </li>
                    <li>
                      <strong>تشخیص دقیق کمبود:</strong> دوز مورد نیاز مکمل‌ها (مانند آهن و ویتامین D) بر اساس سطح پایه آن‌ها در بدن مادر تنظیم می‌شود. انجام <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link> برای اندازه‌گیری دقیق سطح ویتامین‌ها و هموگلوبین مادر پیش از شروع مصرف، ضروری است
                    </li>
                    <li>
                      <strong>تداخلات:</strong> مکمل‌ها می‌توانند با سایر داروها یا حتی بین خودشان تداخل داشته باشند (مانند تداخل کلسیم با جذب آهن)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-destructive/10 border-r-4 border-destructive p-6 my-8 rounded">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive text-lg mb-2">هشدار مهم</h3>
                <p className="text-muted-foreground leading-relaxed">
                  مصرف خودسرانه مکمل‌ها در دوران بارداری می‌تواند برای مادر و جنین خطرناک باشد. همیشه قبل از مصرف هر مکمل، با متخصص زنان و زایمان مشورت کنید و آزمایش‌های لازم را انجام دهید. دوز و زمان‌بندی صحیح مکمل‌ها بر اساس وضعیت فردی شما تعیین می‌شود.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              مشاوره تخصصی و آزمایش در منزل
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              تغذیه دوران بارداری خود را ایمن و تخصصی مدیریت کنید. برای <Link to="/services/laboratory" className="text-primary hover:underline font-semibold">بررسی کمبودهای تغذیه‌ای با آزمایش خون در منزل</Link> و <Link to="/services/gynecology" className="text-primary hover:underline font-semibold">ویزیت متخصص زنان و زایمان در منزل</Link> جهت تجویز دقیق مکمل‌ها، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس: 09386117912
            </a>
          </div>

          <section className="my-8 text-sm text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground mb-3">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li>American College of Obstetricians and Gynecologists (ACOG). (2020). Nutrition During Pregnancy. ACOG Practice Bulletin, No. 222.</li>
              <li>Centers for Disease Control and Prevention (CDC). (2022). Iron and Iron Deficiency. (Guidance on anemia in pregnancy).</li>
              <li>Koletzko, B., et al. (2018). The role of long-chain polyunsaturated fatty acids DHA and AA in pregnancy and early childhood. Early Human Development, 126, 1-7.</li>
            </ol>
          </section>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default PregnancySupplementsPage;