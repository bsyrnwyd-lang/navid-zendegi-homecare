import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import LazyImage from "@/components/LazyImage";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Button } from "@/components/ui/button";
import varicoseVeinsImage from "@/assets/varicose-veins-article.jpg";
import internalMedicineImage from "@/assets/internal-medicine.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";
import skinItchingImage from "@/assets/skin-itching-article.jpg";

const VaricoseVeinsPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "واریس", url: "/articles/varicose-veins" }
  ];

  const faqs = [
    {
      question: "واریس چیست و چگونه ایجاد می‌شود؟",
      answer: "واریس به رگ‌های خونی متورم و پیچ‌خورده‌ای گفته می‌شود که به دلیل نارسایی دریچه‌های وریدی ایجاد می‌شوند. این دریچه‌ها وظیفه هدایت خون به سمت قلب را دارند و زمانی که ضعیف می‌شوند، خون به عقب برمی‌گردد و باعث تورم و گشاد شدن ورید می‌شود."
    },
    {
      question: "علائم واریس چیست؟",
      answer: "علائم شایع واریس شامل درد و سنگینی پاها، تورم مچ پا و ساق پا، خارش و سوزش در اطراف رگ، و در موارد پیشرفته تغییر رنگ پوست یا ایجاد زخم‌های مزمن است. این علائم معمولاً پس از ایستادن طولانی‌مدت شدت می‌یابند."
    },
    {
      question: "چه کسانی بیشتر در معرض خطر واریس هستند؟",
      answer: "افرادی که سابقه خانوادگی واریس دارند، سن بالاتری دارند، اضافه وزن یا چاقی دارند، مدت زمان زیادی ایستاده یا نشسته می‌مانند، و خانم‌های باردار بیشتر در معرض خطر ابتلا به واریس قرار دارند."
    },
    {
      question: "چگونه می‌توان واریس را در منزل مدیریت کرد؟",
      answer: "برای مدیریت واریس در منزل می‌توانید از جوراب‌های فشاری استفاده کنید، ورزش منظم داشته باشید (به‌ویژه پیاده‌روی و شنا)، وزن خود را کاهش دهید، و پاهای خود را چندین بار در روز بالا نگه دارید تا ادم و فشار وریدی کاهش یابد."
    },
    {
      question: "چه زمانی باید برای واریس به پزشک مراجعه کرد؟",
      answer: "اگر درد شدید، تورم قابل توجه، تغییر رنگ پوست، یا ایجاد زخم در پاها مشاهده کردید، باید به پزشک مراجعه کنید. همچنین اگر علائم واریس بر کیفیت زندگی شما تأثیر می‌گذارد یا نگران احتمال ترومبوز ورید عمقی (DVT) هستید، ارزیابی پزشکی ضروری است."
    },
    {
      question: "آیا واریس می‌تواند به مشکلات جدی‌تری منجر شود؟",
      answer: "بله، در صورت عدم درمان، واریس می‌تواند به عوارض جدی‌تری مانند ترومبوز ورید عمقی (DVT)، زخم‌های مزمن پوستی، یا خونریزی از رگ‌های واریسی منجر شود. به همین دلیل پیگیری و مدیریت مناسب آن اهمیت دارد."
    }
  ];

  const relatedArticles = [
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "با خدمات ویزیت متخصص داخلی در منزل، از معاینات تخصصی و مشاوره پزشکی در آسایش خانه بهره‌مند شوید",
      image: internalMedicineImage,
      link: "/services/internal",
      category: "خدمات"
    },
    {
      title: "فیزیوتراپی در منزل",
      description: "دریافت خدمات فیزیوتراپی تخصصی در منزل برای درمان دردهای عضلانی و بهبود حرکت",
      image: physiotherapyImage,
      link: "/services/physiotherapy",
      category: "خدمات"
    },
    {
      title: "خارش پوست: علل و درمان",
      description: "بررسی علل مختلف خارش پوست و روش‌های درمانی مؤثر برای کنترل این مشکل",
      image: skinItchingImage,
      link: "/articles/skin-itching",
      category: "مقالات"
    }
  ];

  return (
    <div className="bg-background">
      <Header />
      <FloatingContact />
      <SEOHead
        title="واریس: علائم، درمان و ویزیت متخصص عروق در منزل - نوید زندگی"
        description="راهنمای جامع واریس (Varicose Veins)، علائم، ریسک فاکتورها، روش‌های درمان محافظه‌کارانه و مدرن، و خدمات ویزیت متخصص عروق در منزل"
        keywords="واریس، نارسایی وریدی، درد پاها، جوراب واریس، متخصص عروق، ویزیت در منزل، درمان واریس، ترومبوز ورید عمقی، DVT، اسکلروتراپی، جراحی واریس"
        canonical="https://navidzendegi.com/articles/varicose-veins"
        ogType="article"
        publishedTime="2025-02-01T08:00:00Z"
        modifiedTime="2025-02-01T08:00:00Z"
        author="نوید زندگی"
      />
      <ArticleSchema
        title="واریس: تشخیص و مدیریت تخصصی نارسایی وریدی در منزل"
        description="راهنمای جامع واریس، علائم، ریسک فاکتورها و روش‌های درمانی"
        publishedTime="2025-02-01T08:00:00Z"
        modifiedTime="2025-02-01T08:00:00Z"
        image={varicoseVeinsImage}
        author="نوید زندگی"
      />

      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            واریس (Varicose Veins): تشخیص و مدیریت تخصصی نارسایی وریدی در منزل
          </h1>
          
          <LazyImage
            src={varicoseVeinsImage}
            alt="تصویر توضیحی واریس و رگ‌های متورم پا"
            className="w-full h-[400px] object-cover rounded-lg my-6"
          />

          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>واریس (Varicose Veins)</strong> به رگ‌های خونی متورم، بزرگ شده و اغلب پیچ‌خورده‌ای گفته می‌شود که معمولاً در پاها ظاهر می‌شوند. این بیماری یک تظاهر شایع از <strong>نارسایی مزمن وریدی (Chronic Venous Insufficiency - CVI)</strong> است. درک مکانیسم ایجاد واریس برای مدیریت مؤثر و پیشگیری از عوارض بعدی آن ضروری است.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            مکانیسم ایجاد واریس: عملکرد نامناسب دریچه‌ها
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ایجاد واریس اساساً به دلیل اختلال در عملکرد دریچه‌های وریدی است:
          </p>
          
          <div className="space-y-4 mr-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">وظیفه دریچه‌ها</h3>
              <p className="text-muted-foreground leading-relaxed">
                وریدهای پا دارای <strong>دریچه‌های یک‌طرفه (One-way Valves)</strong> هستند که وظیفه دارند خون را در خلاف جهت جاذبه و به سمت قلب هدایت کنند.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">نارسایی دریچه</h3>
              <p className="text-muted-foreground leading-relaxed">
                هنگامی که این دریچه‌ها ضعیف یا آسیب می‌بینند، خون به عقب نشت کرده و به سمت پایین برمی‌گردد (جریان برگشتی یا Reflux).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">افزایش فشار</h3>
              <p className="text-muted-foreground leading-relaxed">
                این جریان برگشتی باعث افزایش فشار وریدی در بخش‌های پایین‌تر رگ می‌شود. در نتیجه، رگ متورم شده، گشاد می‌شود و ظاهری پیچ‌خورده (واریسی) پیدا می‌کند.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            علائم و ریسک فاکتورهای واریس
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            واریس اغلب علاوه بر نگرانی‌های زیبایی، علائم آزاردهنده‌ای را نیز ایجاد می‌کند.
          </p>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-3">۱. علائم شایع</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li><strong>درد و سنگینی پاها:</strong> احساس خستگی و سنگینی در پاها، به‌ویژه پس از ایستادن طولانی‌مدت</li>
              <li><strong>تورم:</strong> تورم (ادم) در مچ پا و ساق پا</li>
              <li><strong>خارش و سوزش:</strong> خارش یا سوزش در اطراف ورید آسیب‌دیده</li>
              <li><strong>تغییرات پوستی:</strong> در موارد پیشرفته، ممکن است تغییر رنگ پوست، تیره شدن، یا ایجاد زخم‌های مزمن (Ulceration) رخ دهد</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">۲. ریسک فاکتورها</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              عوامل افزایش‌دهنده خطر ابتلا به واریس شامل موارد زیر است:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>سابقه خانوادگی</li>
              <li>سن بالا</li>
              <li>چاقی و اضافه وزن</li>
              <li>ایستادن یا نشستن طولانی‌مدت</li>
              <li>بارداری (به دلیل افزایش فشار شکمی)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            روش‌های مدیریت و درمان تخصصی واریس
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            درمان واریس از اقدامات محافظه‌کارانه تا مداخلات کم تهاجمی متغیر است.
          </p>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-3">۱. درمان‌های محافظه‌کارانه (درمان‌های غیرتهاجمی در منزل)</h3>
            <div className="space-y-3 mr-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong>جوراب واریس:</strong> استفاده از جوراب‌های فشاری (Compression Stockings) برای اعمال فشار خارجی بر پا و کمک به عملکرد بهتر وریدی.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>ورزش و کاهش وزن:</strong> فعالیت بدنی منظم (به‌ویژه پیاده‌روی و شنا) برای تقویت عضلات ساق پا که به پمپ شدن خون کمک می‌کند (پمپ عضلانی ساق پا). خدمات <Link to="/services/physiotherapy" className="text-primary hover:underline">فیزیوتراپی در منزل</Link> می‌تواند در این زمینه کمک‌کننده باشد.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>بالا نگه داشتن پاها:</strong> بالا نگه داشتن پاها چندین بار در روز برای کاهش ادم و فشار وریدی.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">۲. مداخلات پزشکی مدرن</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              در موارد شدیدتر، پزشک ممکن است مداخلات زیر را توصیه کند:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li><strong>اسکلروتراپی (Sclerotherapy):</strong> تزریق یک ماده شیمیایی به داخل رگ برای بستن و کوچک کردن آن</li>
              <li><strong>جراحی لیزر درون وریدی (Endovenous Laser Treatment - EVLT):</strong> استفاده از حرارت لیزر برای بستن ورید آسیب‌دیده</li>
              <li><strong>فلِبِکتومی (Phlebectomy):</strong> برداشتن رگ‌های واریسی کوچک از طریق برش‌های بسیار کوچک</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            پایش تخصصی و ویزیت متخصص عروق در منزل
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            واریس نیاز به پیگیری مداوم دارد تا از پیشرفت بیماری به فازهای خطرناک‌تر (مانند ترومبوز ورید عمقی - DVT) جلوگیری شود.
          </p>

          <div className="space-y-4 mr-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong>ارزیابی در منزل:</strong> نوید زندگی با اعزام <strong>متخصص عروق (vascular specialist)</strong> یا جراح عروق، امکان معاینه فیزیکی و ارزیابی اولیه شدت واریس، تعیین نیاز به جوراب واریس و تنظیم برنامه درمانی مناسب را در آسایش خانه فراهم می‌کند. برای اطلاعات بیشتر درباره خدمات ما، <Link to="/services/specialist" className="text-primary hover:underline">ویزیت متخصص در منزل</Link> را مشاهده کنید.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>کاهش ریسک DVT:</strong> متخصص می‌تواند در منزل، ریسک فاکتورهای فردی را بررسی کرده و توصیه‌های لازم برای جلوگیری از عوارض جدی‌تر را ارائه دهد.
            </p>
          </div>
        </section>

        <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary" />
            احساس سنگینی و درد پاها را نادیده نگیرید
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            برای ارزیابی تخصصی و دریافت مشاوره در مورد درمان‌های غیرتهاجمی و جراحی واریس، وقت <strong>ویزیت متخصص عروق در منزل</strong> خود را با نوید زندگی رزرو کنید.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => window.location.href = `tel:${phoneNumber}`}
          >
            <Phone className="ml-2 h-5 w-5" />
            تماس با {phoneNumber}
          </Button>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
          <div className="text-sm text-muted-foreground space-y-2 mr-4">
            <p>[1] Lattimer, C. R., et al. (2018). Clinical relevance of chronic venous insufficiency: definitions, pathogenesis, diagnosis and management. <em>Phlebology</em>, 33(4), 221-232.</p>
            <p>[2] Gloviczki, P., et al. (2011). The care of patients with varicose veins and associated chronic venous diseases: Clinical practice guidelines of the Society for Vascular Surgery and the American Venous Forum. <em>Journal of Vascular Surgery</em>, 53(5 Suppl), 2S-48S.</p>
            <p>[3] Meissner, M. H. (2020). Assessment and non-surgical management of varicose veins. <em>Surgical Clinics of North America</em>, 100(2), 297-313.</p>
            <p>[4] Nicolaides, A. N. (2018). Investigation of chronic venous insufficiency: A consensus statement. <em>Circulation</em>, 99(19), 2419-2428.</p>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <div className="mt-12">
          <PricingInfo />
        </div>

        <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default VaricoseVeinsPage;