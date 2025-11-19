import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import angiographyImage from "@/assets/angiography-article.jpg";
import angiographyRecoveryImage from "@/assets/angiography-recovery.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import postAngiographyMedicationsImage from "@/assets/post-angiography-medications.jpg";

const AngiographySedationPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیهوشی در آنژیوگرافی", url: "" }
  ];

  const relatedArticles = [
    {
      title: "آنژیوگرافی قلب: مراحل انجام و مراقبت",
      description: "راهنمای کامل آنژیوگرافی کرونر: مراحل انجام، مدیریت درد و مراقبت‌های پس از عمل",
      image: angiographyImage,
      link: "/articles/angiography",
      category: "قلب و عروق"
    },
    {
      title: "زمان بهبودی پس از آنژیوگرافی",
      description: "مراقبت‌های لازم و زمان بازگشت به فعالیت‌های روزمره پس از آنژیوگرافی",
      image: angiographyRecoveryImage,
      link: "/articles/angiography-recovery-time",
      category: "قلب و عروق"
    },
    {
      title: "داروهای ضد انعقاد پس از آنژیوگرافی",
      description: "راهنمای کامل مصرف آسپرین، کلوپیدوگرل و سایر داروهای پس از استنت‌گذاری",
      image: postAngiographyMedicationsImage,
      link: "/articles/post-angiography-medications",
      category: "قلب و عروق"
    }
  ];

  const faqItems = [
    {
      question: "آیا در آنژیوگرافی کاملاً بیهوش می‌شوم؟",
      answer: "خیر، در آنژیوگرافی معمولاً بیهوشی کامل استفاده نمی‌شود. شما فقط داروهای آرام‌بخش دریافت می‌کنید که باعث می‌شود در حالت آرامش عمیق قرار بگیرید، اما همچنان هوشیار و قادر به پاسخگویی به پزشک باشید."
    },
    {
      question: "چه نوع داروهایی برای آرام‌بخشی استفاده می‌شود؟",
      answer: "معمولاً از ترکیبی از داروهای آرام‌بخش مانند میدازولام و مسکن‌های خفیف مانند فنتانیل استفاده می‌شود. این داروها از طریق ورید تزریق می‌شوند و باعث کاهش اضطراب و احساس راحتی می‌شوند."
    },
    {
      question: "آیا می‌توانم در حین آنژیوگرافی صحبت کنم؟",
      answer: "بله، با آرام‌بخشی آگاهانه شما می‌توانید با پزشک صحبت کنید و به دستورات او پاسخ دهید. در واقع، همکاری شما در برخی مراحل عمل (مانند نگه داشتن نفس) ضروری است."
    },
    {
      question: "چرا در آنژیوگرافی از بیهوشی کامل استفاده نمی‌شود؟",
      answer: "دلایل متعددی وجود دارد: ماهیت کم‌تهاجمی عمل، نیاز به همکاری بیمار در طول فرآیند، ریسک پایین‌تر آرام‌بخشی نسبت به بیهوشی کامل، و امکان بررسی سریع‌تر وضعیت بیمار پس از عمل."
    },
    {
      question: "بعد از آنژیوگرافی چقدر طول می‌کشد تا اثر داروها از بین برود؟",
      answer: "اثر داروهای آرام‌بخش معمولاً ظرف چند ساعت کاملاً از بین می‌رود. اما در روز عمل نباید رانندگی کنید یا تصمیمات مهمی بگیرید. توصیه می‌شود یک همراه داشته باشید."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آیا آنژیوگرافی نیاز به بیهوشی کامل دارد؟ | آرام‌بخشی در کاتتریزاسیون قلب"
        description="بررسی کامل نوع بیهوشی و آرام‌بخشی در آنژیوگرافی: تفاوت بیهوشی کامل و آرام‌بخشی آگاهانه، مدیریت درد و مراقبت‌های پس از عمل"
        keywords="بیهوشی آنژیوگرافی، آرام‌بخشی قلب، کاتتریزاسیون قلب، بی‌حسی موضعی، آنژیوگرافی کرونر، مدیریت درد، متخصص قلب"
        canonical="https://navidzendegi.com/articles/angiography-sedation"
        ogType="article"
        publishedTime="2024-01-16"
        modifiedTime="2024-01-16"
      />
      <ArticleSchema
        title="آیا آنژیوگرافی نیاز به بیهوشی کامل دارد؟ بررسی نوع آرام‌بخشی و مدیریت درد"
        description="بررسی کامل نوع بیهوشی و آرام‌بخشی در آنژیوگرافی قلب"
        publishedTime="2024-01-16"
        modifiedTime="2024-01-16"
        image={angiographyImage}
      />

      <main className="py-12 px-4">
        <article className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            آیا آنژیوگرافی نیاز به بیهوشی کامل دارد؟ بررسی نوع آرام‌بخشی و مدیریت درد در کاتتریزاسیون قلب
          </h1>

          <div className="mb-8">
            <img
              src={angiographyImage}
              alt="بیهوشی و آرام‌بخشی در آنژیوگرافی قلب"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 text-justify">
              <Link to="/articles/angiography" className="text-primary hover:underline">آنژیوگرافی عروق کرونر</Link> یک روش تشخیصی و گاهی درمانی برای بررسی شریان‌های قلب است که به دلیل ماهیت کم‌تهاجمی خود، معمولاً نیازی به بیهوشی کامل (General Anesthesia) ندارد. در اغلب موارد، این عمل تنها با بی‌حسی موضعی و آرام‌بخشی خفیف تا متوسط (Sedation) انجام می‌شود. هدف از آرام‌بخشی، کاهش اضطراب و حفظ راحتی بیمار در طول فرآیند است، نه بیهوشی کامل.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              تفاوت بیهوشی عمومی و آرام‌بخشی موضعی در آنژیوگرافی
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              درک تفاوت بین انواع مدیریت درد برای آگاهی بیمار حیاتی است:
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              بیهوشی کامل (General Anesthesia)
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              در این حالت، بیمار به طور کامل بیهوش، ناهشیار و بدون توانایی پاسخگویی است و برای حفظ تنفس نیاز به کمک دستگاه ونتیلاتور دارد. این نوع بیهوشی در آنژیوگرافی استفاده نمی‌شود.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              بی‌حسی موضعی (Local Anesthesia)
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              تزریق داروی بی‌حس‌کننده (مانند لیدوکائین) تنها در محل ورود کاتتر (مانند مچ دست یا کشاله ران) انجام می‌شود تا بیمار در حین ایجاد سوراخ ورود و دستکاری‌های اولیه، دردی احساس نکند.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              آرام‌بخشی آگاهانه (Conscious Sedation)
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              این رایج‌ترین روش است. بیمار داروهای آرام‌بخش و ضد درد (مانند میدازولام یا فنتانیل) را از طریق ورید دریافت می‌کند. بیمار در حالت آرامش عمیق قرار می‌گیرد، اما همچنان بیدار، هوشیار و قادر به پاسخگویی به دستورات پزشک است. این حالت امکان همکاری بیمار با پزشک را در طول عمل فراهم می‌کند.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              دلایل عدم نیاز به بیهوشی کامل در آنژیوگرافی
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              دلایل پزشکی و عملی برای اجتناب از بیهوشی کامل در این فرآیند وجود دارد:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-base text-foreground">
                <strong>ماهیت کم‌تهاجمی:</strong> آنژیوگرافی شامل ایجاد یک برش بزرگ نیست، بلکه تنها یک سوراخ کوچک برای ورود کاتتر است که با بی‌حسی موضعی قابل کنترل است.
              </li>
              <li className="text-base text-foreground">
                <strong>نیاز به همکاری بیمار:</strong> پزشک در طول فرآیند ممکن است از بیمار بخواهد که نفس خود را نگه دارد یا سرفه کند. این همکاری برای گرفتن تصاویر واضح و هدایت ایمن کاتتر ضروری است. بیهوشی کامل مانع این تعامل می‌شود.
              </li>
              <li className="text-base text-foreground">
                <strong>ریسک پایین‌تر:</strong> آرام‌بخشی آگاهانه، ریسک کمتری نسبت به بیهوشی کامل دارد، به‌ویژه در بیماران قلبی که اغلب دارای بیماری‌های زمینه‌ای هستند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              مراحل بی‌دردی در طول آنژیوگرافی
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              مدیریت درد در آنژیوگرافی بر دو مرحله تمرکز دارد:
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              مرحله اول: ورود کاتتر
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              دردی که ممکن است احساس شود، فقط مربوط به تزریق داروی بی‌حس‌کننده موضعی در محل دست یا کشاله ران است. پس از بی‌حس شدن، بیمار هیچ دردی احساس نمی‌کند.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              مرحله دوم: تزریق ماده حاجب
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              هنگامی که ماده حاجب (Dye) تزریق می‌شود، بیمار ممکن است احساس گرمای موقت یا سوزش خفیف در بدن خود تجربه کند. این حالت طبیعی و به دلیل انبساط سریع عروق است و درد تلقی نمی‌شود.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              مراقبت‌های پس از آنژیوگرافی و ترخیص در منزل
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              پس از پایان آنژیوگرافی، اثر آرام‌بخش‌ها به تدریج از بین می‌رود. مراقبت‌های پس از عمل، به ویژه در منزل، برای جلوگیری از عوارض حیاتی است:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-base text-foreground">
                <strong>پایش محل ورود:</strong> مهم‌ترین عارضه، خونریزی از محل ورود کاتتر است.
              </li>
              <li className="text-base text-foreground">
                <strong>پایش علائم حیاتی:</strong> بررسی دقیق ضربان قلب و <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link>.
              </li>
              <li className="text-base text-foreground">
                <strong>مراقبت در منزل:</strong> <Link to="/services/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link> پس از ترخیص، اطمینان می‌دهد که وضعیت بیمار (به‌ویژه محل زخم و علائم حیاتی) به درستی پایش می‌شود و داروهای ضد انعقاد جدید (مانند <Link to="/articles/atorvastatin" className="text-primary hover:underline">آتورواستاتین</Link> یا <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link>) به درستی تنظیم شده‌اند.
              </li>
            </ul>

            <div className="bg-destructive/10 border-r-4 border-destructive p-4 my-6 rounded">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-destructive mb-2">هشدار مهم</h4>
                  <p className="text-sm text-foreground">
                    پس از آنژیوگرافی، <strong>هرگز داروهای تجویز شده توسط پزشک را خودسرانه قطع یا تغییر ندهید</strong>. داروهای ضد انعقاد مانند <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link> و <Link to="/articles/clopidogrel" className="text-primary hover:underline">کلوپیدوگرل</Link> برای جلوگیری از تشکیل لخته در استنت حیاتی هستند. قطع خودسرانه این داروها می‌تواند منجر به سکته قلبی شود. برای هر تغییری، حتماً با پزشک متخصص خود مشورت کنید.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">دعوت به اقدام</h3>
              <p className="text-base text-foreground leading-relaxed mb-4">
                اگر در مورد پروسه آنژیوگرافی یا مراقبت‌های پس از آن نگرانی دارید، از خدمات مشاوره تخصصی ما استفاده کنید. برای <strong>ویزیت متخصص قلب در منزل</strong> جهت پایش علائم و تنظیم داروها پس از آنژیوگرافی، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: {phoneNumber}
              </a>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-8">
              منابع (References)
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-8 text-sm text-muted-foreground">
              <li>
                Mason, P. J., et al. (2018). The ACC/AHA/SCAI 2018 Expert Consensus Decision Pathway for Radial Artery Access for Coronary Angiography and Intervention. Journal of the American College of Cardiology, 71(14), 1845-1875.
              </li>
              <li>
                Aung, T., et al. (2019). Procedural sedation for coronary procedures: state of the art. JACC: Cardiovascular Interventions, 12(11), 1011-1025.
              </li>
              <li>
                Levine, G. N., et al. (2016). AHA/ACC guideline for the management of patients with stable ischemic heart disease: A report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines. Journal of the American College of Cardiology, 68(17), e87-e151.
              </li>
            </ol>
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>

          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>
      </main>
    </ArticleLayout>
  );
};

export default AngiographySedationPage;
