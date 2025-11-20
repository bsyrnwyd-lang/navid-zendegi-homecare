import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import LazyImage from "@/components/LazyImage";
import herniatedDiscImage from "@/assets/herniated-disc.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";
import neurologyImage from "@/assets/neurology.jpg";
import internalMedicineImage from "@/assets/internal-medicine.jpg";
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LowBackPainPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqItems = [
    {
      question: "کمر درد حاد چقدر طول می‌کشد؟",
      answer: "کمر درد حاد معمولاً کمتر از 6 هفته طول می‌کشد و اغلب با استراحت، مصرف داروهای ضد درد و فیزیوتراپی بهبود می‌یابد. در صورتی که درد بیش از 6 هفته ادامه یابد، باید توسط متخصص ارزیابی شود."
    },
    {
      question: "چه زمانی باید برای کمر درد به پزشک مراجعه کنم؟",
      answer: "اگر کمر درد با علائمی مانند بی‌حسی یا ضعف در پاها، مشکل در کنترل مثانه یا روده، تب، کاهش وزن غیرمنتظره یا درد شدید شبانه همراه باشد، باید فوراً به پزشک مراجعه کنید. همچنین اگر درد بیش از 6 هفته ادامه یابد، ارزیابی تخصصی ضروری است."
    },
    {
      question: "آیا استراحت کامل برای کمر درد خوب است؟",
      answer: "خیر، استراحت مطلق بیش از یک یا دو روز توصیه نمی‌شود. تحقیقات نشان داده‌اند که حفظ فعالیت‌های روزمره سبک و انجام تمرینات اصلاحی، بهبودی را تسریع می‌کند و از ضعف عضلانی جلوگیری می‌کند."
    },
    {
      question: "فیزیوتراپی چگونه به درمان کمر درد کمک می‌کند؟",
      answer: "فیزیوتراپی با تمرینات تقویتی عضلات مرکزی بدن (Core)، عضلات شکم و پشت، تمرینات کششی و حرکات اصلاحی، انعطاف‌پذیری و ثبات ستون فقرات را بهبود می‌بخشد و از عود کمر درد جلوگیری می‌کند."
    },
    {
      question: "چه داروهایی برای کمر درد تجویز می‌شود؟",
      answer: "داروهای ضد التهاب غیر استروئیدی (NSAIDs) مانند ایبوپروفن برای کاهش درد و التهاب، داروهای شل کننده عضلات در موارد اسپاسم شدید، و در موارد خاص تزریقات استروئیدها توسط متخصص تجویز می‌شود. توجه: هرگز خودسرانه دارو مصرف نکنید."
    },
    {
      question: "فتق دیسک چیست و چگونه درمان می‌شود؟",
      answer: "فتق دیسک زمانی رخ می‌دهد که ماده ژلاتینی داخل دیسک بین مهره‌ها بیرون زده و بر اعصاب نخاعی فشار وارد کند. این می‌تواند باعث درد انتشاری به پاها (سیاتیک) شود. درمان شامل فیزیوتراپی، داروهای ضد التهاب و در موارد شدید تزریقات یا جراحی است."
    }
  ];

  const relatedArticles = [
    {
      title: "فیزیوتراپی در منزل",
      description: "خدمات تخصصی فیزیوتراپی و توانبخشی در منزل",
      image: physiotherapyImage,
      link: "/services/physiotherapy",
      category: "خدمات پزشکی"
    },
    {
      title: "ویزیت متخصص مغز و اعصاب در منزل",
      description: "تشخیص و درمان اختلالات عصبی توسط متخصص",
      image: neurologyImage,
      link: "/services/neurology",
      category: "خدمات پزشکی"
    },
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "مشاوره و درمان بیماری‌های داخلی در منزل",
      image: internalMedicineImage,
      link: "/services/internal-medicine",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="کمر درد: علل، تشخیص و درمان با فیزیوتراپی در منزل | نوید زندگی"
        description="راهنمای جامع کمر درد شامل علل، انواع (حاد و مزمن)، فتق دیسک، درمان با فیزیوتراپی و ویزیت متخصص ارتوپدی و مغز و اعصاب در منزل"
        keywords="کمر درد, فتق دیسک, فیزیوتراپی در منزل, درمان کمر درد, ویزیت متخصص ارتوپدی, سیاتیک, تنگی کانال نخاعی"
        canonical="https://navidzendegi.com/articles/low-back-pain"
        ogType="article"
        publishedTime="2024-01-20T10:00:00Z"
        modifiedTime="2024-01-20T10:00:00Z"
      />

      <ArticleSchema
        title="کمر درد (Low Back Pain): علل، تشخیص تخصصی و مدیریت درد با فیزیوتراپی در منزل"
        description="راهنمای جامع کمر درد شامل علل، انواع (حاد و مزمن)، فتق دیسک، درمان با فیزیوتراپی و ویزیت متخصص ارتوپدی و مغز و اعصاب در منزل"
        publishedTime="2024-01-20T10:00:00Z"
        modifiedTime="2024-01-20T10:00:00Z"
        image="/src/assets/herniated-disc.jpg"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "کمر درد", url: "/articles/low-back-pain" }
          ]}
        />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              کمر درد (Low Back Pain): علل، تشخیص تخصصی و مدیریت درد با فیزیوتراپی در منزل
            </h1>
            <p className="text-muted-foreground">
              آخرین بروزرسانی: دی ۱۴۰۳ | زمان مطالعه: ۸ دقیقه
            </p>
          </header>

          <LazyImage
            src={herniatedDiscImage}
            alt="فتق دیسک و کمر درد - تشخیص و درمان با فیزیوتراپی در منزل"
            className="w-full h-auto rounded-lg mb-8"
          />

          <Alert className="mb-8 bg-amber-50 border-amber-200">
            <AlertDescription className="text-amber-800">
              <strong>هشدار:</strong> این مقاله صرفاً جنبه آموزشی دارد. هرگز خودسرانه دارو مصرف نکنید یا خود درمانی انجام ندهید. برای تشخیص دقیق و درمان مناسب، حتماً با پزشک متخصص مشورت کنید.
            </AlertDescription>
          </Alert>

          <section className="mb-8">
            <p className="text-lg leading-relaxed text-foreground mb-4">
              کمر درد (LBP) یکی از شایع‌ترین مشکلات اسکلتی-عضلانی است که تقریباً 80 درصد بزرگسالان حداقل یک بار در طول زندگی آن را تجربه می‌کنند. این عارضه می‌تواند از یک درد مبهم و خفیف تا یک درد شدید و ناتوان‌کننده متغیر باشد و به دو دسته اصلی حاد و مزمن تقسیم می‌شود. مدیریت موفقیت‌آمیز کمر درد نیازمند تشخیص دقیق عامل زمینه‌ای و رویکرد چند رشته‌ای درمانی است.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              طبقه‌بندی و انواع کمر درد
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              کمر درد بر اساس مدت زمان بروز طبقه‌بندی می‌شود:
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">کمر درد حاد</h3>
                <p className="text-foreground leading-relaxed">
                  دردی که کمتر از 6 هفته طول می‌کشد. معمولاً ناشی از یک آسیب خاص (مانند بلند کردن نادرست اشیا یا آسیب ورزشی) است و اغلب با استراحت و داروهای ساده بهبود می‌یابد.
                </p>
              </div>

              <div className="p-4 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">کمر درد تحت حاد</h3>
                <p className="text-foreground leading-relaxed">
                  دردی که بین 6 تا 12 هفته ادامه دارد.
                </p>
              </div>

              <div className="p-4 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">کمر درد مزمن</h3>
                <p className="text-foreground leading-relaxed">
                  دردی که بیش از 12 هفته (سه ماه) طول بکشد و اغلب نیاز به بررسی‌های بیشتر و مداخلات جامع درمانی دارد.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              علل شایع و عوامل خطر در بروز کمر درد
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              بیشتر کمردردها، "غیر اختصاصی" هستند (علت دقیق ساختاری مشخص نیست)، اما عوامل زیر از شایع‌ترین علل ریشه‌ای کمردرد محسوب می‌شوند:
            </p>

            <div className="space-y-4 mb-4">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">فشارهای عضلانی و رباطی:</strong> کشیدگی عضلات کمر یا پارگی رباط‌ها به دلیل حرکات ناگهانی یا بلند کردن اشیای سنگین.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">فتق دیسک کمر (Herniated Disc):</strong> بیرون‌زدگی ماده ژلاتینی داخل دیسک که بر اعصاب نخاعی فشار وارد می‌کند و می‌تواند باعث درد انتشاری به پاها (سیاتیک) شود. برای اطلاعات بیشتر درباره <Link to="/services/neurology" className="text-primary hover:underline">ویزیت متخصص مغز و اعصاب</Link> مراجعه کنید.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">تنگی کانال نخاعی (Spinal Stenosis):</strong> تنگی فضای اطراف نخاع که بر اعصاب فشار وارد می‌کند و معمولاً در افراد مسن شایع‌تر است.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">آرتروز ستون فقرات:</strong> تخریب غضروف مفاصل کوچک (Facet Joints) ستون فقرات که منجر به التهاب و درد می‌شود.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">سبک زندگی:</strong> چاقی، کم‌تحرکی، وضعیت بدنی نامناسب (Poor Posture) در هنگام نشستن یا ایستادن، از عوامل خطر اصلی هستند.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              رویکردهای درمانی و مدیریت درد
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              درمان کمر درد بر تسکین درد، بازیابی عملکرد و جلوگیری از عود متمرکز است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">
              ۱. درمان‌های غیردارویی (خط اول درمان)
            </h3>

            <div className="space-y-4 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">فیزیوتراپی تخصصی:</strong> جلسات منظم <Link to="/services/physiotherapy" className="text-primary hover:underline">فیزیوتراپی در منزل</Link> شامل تمرین‌های تقویتی برای عضلات مرکزی بدن (Core Muscles) و عضلات شکم و پشت، کشش و حرکات اصلاحی، برای بهبود انعطاف‌پذیری و ثبات ستون فقرات ضروری است.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">حفظ فعالیت:</strong> بر خلاف تصور رایج، استراحت مطلق بیش از یک یا دو روز توصیه نمی‌شود. حفظ فعالیت‌های روزمره سبک به تسریع بهبودی کمک می‌کند.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">کاهش وزن:</strong> کاهش فشار وارده بر ستون فقرات، به ویژه در ناحیه کمر، با کاهش وزن.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">درمان‌های گرمایی و سرمایی:</strong> استفاده از کمپرس سرد در 48 ساعت اول و سپس کمپرس گرم.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">
              ۲. درمان‌های دارویی
            </h3>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">داروهای ضد التهاب غیر استروئیدی (NSAIDs):</strong> مانند ایبوپروفن و ناپروکسن، برای کاهش درد و التهاب.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">داروهای شل کننده عضلات (Muscle Relaxants):</strong> در موارد اسپاسم شدید عضلانی، با تجویز پزشک.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">تزریقات:</strong> در موارد خاص، تزریق استروئیدها در فضای اپیدورال توسط متخصص برای کاهش التهاب ریشه عصبی.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              تشخیص و درمان تخصصی با ویزیت متخصصین در منزل
            </h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              برای کمر دردهای مزمن یا همراه با علائم عصبی (مانند بی‌حسی یا ضعف پا)، ارزیابی تخصصی ضروری است:
            </p>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">ویزیت متخصص مغز و اعصاب یا ارتوپدی:</strong> متخصص می‌تواند با انجام معاینات فیزیکی و عصبی دقیق، و بررسی نتایج تصویربرداری (مانند MRI)، علت دقیق فشار بر عصب (مانند فتق دیسک) را تشخیص دهد.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">پایش و تنظیم دارو:</strong> ویزیت پزشک در منزل امکان تنظیم دوز داروهای ضد درد و ضد التهاب را با توجه به شرایط سلامتی و سابقه بیماری‌های گوارشی و کلیوی بیمار فراهم می‌کند.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">توانبخشی مستمر:</strong> خدمات <Link to="/services/physiotherapy" className="text-primary hover:underline">فیزیوتراپی در منزل نوید زندگی</Link>، تضمین می‌کند که بیمار برنامه توانبخشی خود را به طور منظم و بدون وقفه دنبال کند، که این امر کلید اصلی جلوگیری از عود کمر درد مزمن است.
              </p>
            </div>
          </section>

          <section className="my-12 p-8 bg-primary/5 rounded-lg border-2 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              کمر درد مزمن را جدی بگیرید
            </h2>
            <p className="text-center text-foreground mb-6 text-lg">
              برای ارزیابی تخصصی توسط متخصص ارتوپدی یا مغز و اعصاب و شروع جلسات فیزیوتراپی در منزل برای تقویت عضلات مرکزی، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCall}
                size="lg"
                className="gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                تماس تلفنی: 09386117912
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                واتساپ
              </Button>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Deyo, R. A., Mirza, S. K., & Martin, B. I. (2006). Back pain prevalence and determinants of care. Spine, 31(14), 1-13.</li>
              <li>Casazza, B. A. (2012). Diagnosis and treatment of acute low back pain. American Family Physician, 85(4), 343-350.</li>
              <li>Chou, R., et al. (2017). Nonpharmacologic Therapies for Acute and Chronic Low Back Pain: A Review of the Evidence for the American Pain Society and American College of Physicians. Annals of Internal Medicine, 166(7), 493-505.</li>
            </ol>
          </section>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default LowBackPainPage;
