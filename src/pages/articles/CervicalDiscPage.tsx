import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cervicalDiscImage from "@/assets/cervical-disc-article.jpg";
import herniatedDiscImage from "@/assets/herniated-disc.jpg";
import neurologyImage from "@/assets/neurology.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";

const CervicalDiscPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "دیسک گردن", url: "/articles/cervical-disc" }
  ];

  const faqItems = [
    {
      question: "آیا دیسک گردن قابل درمان است؟",
      answer: "بله، اکثر موارد دیسک گردن با درمان‌های محافظه‌کارانه مانند فیزیوتراپی، دارودرمانی و استراحت بهبود می‌یابند. تنها در موارد شدید یا میلوپاتی پیشرونده، جراحی توصیه می‌شود."
    },
    {
      question: "علائم هشداردهنده دیسک گردن کدامند؟",
      answer: "درد تیرکشنده از گردن به بازو، بی‌حسی و سوزن سوزن شدن در دست و انگشتان، ضعف عضلانی، مشکل در راه رفتن و تعادل، و در موارد شدید مشکلات کنترل ادرار و مدفوع از علائم هشداردهنده هستند."
    },
    {
      question: "چه زمانی باید به پزشک مراجعه کنم؟",
      answer: "در صورت بروز درد شدید گردن همراه با بی‌حسی یا ضعف در دست‌ها، مشکل در راه رفتن، یا اختلال در کنترل ادرار باید فوراً به پزشک مراجعه کنید. این علائم می‌توانند نشانه میلوپاتی گردنی باشند."
    },
    {
      question: "آیا فیزیوتراپی در منزل برای دیسک گردن مفید است؟",
      answer: "بله، فیزیوتراپی در منزل یکی از روش‌های مؤثر درمان دیسک گردن است. تمرینات کششی و تقویتی تحت نظر فیزیوتراپیست می‌تواند به کاهش درد و بهبود عملکرد کمک کند."
    },
    {
      question: "تفاوت رادیکولوپاتی و میلوپاتی گردنی چیست؟",
      answer: "رادیکولوپاتی به دلیل فشار بر ریشه عصب رخ می‌دهد و علائم آن در یک بازو ظاهر می‌شود. میلوپاتی به دلیل فشار بر طناب نخاعی است و علائم آن شامل مشکلات تعادل، ضعف در دست‌ها و پاها و اختلالات حرکتی است."
    }
  ];

  const relatedArticles = [
    {
      title: "دیسک کمر: علل، علائم و درمان",
      description: "راهنمای جامع درباره دیسک کمر و روش‌های درمانی آن",
      image: herniatedDiscImage,
      link: "/articles/low-back-pain",
      category: "ارتوپدی"
    },
    {
      title: "خدمات مغز و اعصاب در منزل",
      description: "ویزیت متخصص مغز و اعصاب در منزل برای تشخیص و درمان",
      image: neurologyImage,
      link: "/services/neurology",
      category: "خدمات"
    },
    {
      title: "فیزیوتراپی در منزل",
      description: "خدمات فیزیوتراپی تخصصی در محل زندگی شما",
      image: physiotherapyImage,
      link: "/services/physiotherapy",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="دیسک گردن: علل، علائم، تشخیص و درمان | نوید زندگی"
        description="راهنمای جامع دیسک گردن شامل آناتومی، علائم رادیکولوپاتی و میلوپاتی گردنی، روش‌های تشخیص و درمان‌های محافظه‌کارانه و جراحی"
        keywords="دیسک گردن، فتق دیسک گردنی، رادیکولوپاتی گردنی، میلوپاتی گردنی، درد گردن، بی‌حسی دست، فیزیوتراپی گردن"
        canonical="https://navidzendegi.com/articles/cervical-disc"
        ogType="article"
        publishedTime="2024-12-05"
        modifiedTime="2024-12-05"
      />
      <ArticleSchema
        title="دیسک گردن: علل، علائم، تشخیص و درمان"
        description="راهنمای جامع دیسک گردن شامل آناتومی، علائم رادیکولوپاتی و میلوپاتی گردنی، روش‌های تشخیص و درمان"
        publishedTime="2024-12-05"
        modifiedTime="2024-12-05"
        image={cervicalDiscImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            دیسک گردن (Cervical Disc Disease): آسیب‌های دیسک بین مهره‌ای گردنی
          </h1>

          <img
            src={cervicalDiscImage}
            alt="تصویر آناتومی ستون فقرات گردنی و دیسک بین مهره‌ای"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-lg leading-relaxed mb-6">
            دیسک گردن یا آسیب دیسک بین‌مهره‌ای گردنی به وضعیت‌هایی اطلاق می‌شود که دیسک‌های بالشتکی واقع در ستون فقرات گردنی (Cervical Spine) آسیب می‌بینند. این دیسک‌ها در بین هفت مهره گردنی (از C1 تا C7) قرار دارند و وظیفه جذب ضربه، حمایت از سر و امکان حرکت انعطاف‌پذیر گردن را بر عهده دارند. آسیب به این دیسک‌ها می‌تواند منجر به درد، بی‌حسی، ضعف و اختلالات حرکتی شود.
          </p>

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 my-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-800 mb-2">هشدار مهم</p>
                <p className="text-amber-700">
                  خوددرمانی در مشکلات دیسک گردن می‌تواند منجر به عوارض جدی شود. در صورت بروز علائم، حتماً با متخصص مشورت کنید. برای ویزیت متخصص مغز و اعصاب در منزل با شماره <a href="tel:09386117912" className="font-bold hover:underline">09386117912</a> تماس بگیرید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">آناتومی و مکانیسم آسیب</h2>
          
          <p className="mb-4">
            دیسک‌های بین مهره‌ای از دو بخش اصلی تشکیل شده‌اند:
          </p>

          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>بخش خارجی - حلقه فیبری (Annulus Fibrosus):</strong> یک لایه خارجی، محکم و فیبری که دیسک را در جای خود نگه می‌دارد.</li>
            <li><strong>بخش داخلی - هسته پالپوسوس (Nucleus Pulposus):</strong> یک ماده ژلاتینی و آبدار در مرکز که عامل اصلی جذب ضربه است.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">مکانیسم‌های شایع آسیب</h3>

          <p className="mb-4">
            <strong>۱. فتق دیسک (Disc Herniation):</strong> زمانی رخ می‌دهد که حلقه فیبری بیرونی پاره شده و هسته ژلاتینی داخلی به سمت کانال نخاعی یا روزنه عصبی فشار وارد کند. این حالت بیشتر در افراد جوان تا میانسال به دلیل تروما یا فشار ناگهانی مشاهده می‌شود.
          </p>

          <p className="mb-6">
            <strong>۲. دژنراسیون دیسک (Disc Degeneration):</strong> با افزایش سن، دیسک‌ها رطوبت خود را از دست داده، نازک و خشک می‌شوند و ارتفاع آن‌ها کاهش می‌یابد. این فرآیند بخشی از اسپوندیلوز گردنی (Cervical Spondylosis) است و بیشتر در سنین بالاتر شایع است.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">تظاهرات بالینی: رادیکولوپاتی و میلوپاتی</h2>

          <p className="mb-4">
            آسیب‌های دیسک گردن منجر به دو نوع سندرم عصبی اصلی می‌شوند که بر اساس محل فشار طبقه‌بندی می‌گردند:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. رادیکولوپاتی گردنی (Cervical Radiculopathy)</h3>

          <p className="mb-4">
            این شایع‌ترین نتیجه فتق یا تنگی دیسک است که به دلیل فشار بر ریشه عصب نخاعی در هنگام خروج آن از ستون فقرات رخ می‌دهد.
          </p>

          <p className="mb-2"><strong>علائم:</strong></p>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>درد:</strong> تیر کشنده و کوبنده که از گردن شروع شده و به یک بازو و گاهی تا دست و انگشتان امتداد می‌یابد.</li>
            <li><strong>پارستزی (Paresthesia):</strong> احساس سوزن سوزن شدن، خواب رفتگی و بی‌حسی در ناحیه درماتومی مرتبط با ریشه عصبی فشرده‌شده.</li>
            <li><strong>ضعف عضلانی:</strong> ضعف در عضلاتی که توسط عصب درگیر عصب‌دهی می‌شوند (مانند ضعف در مچ دست یا گرفتن اشیاء).</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. میلوپاتی گردنی (Cervical Myelopathy)</h3>

          <p className="mb-4">
            این عارضه جدی‌تر است و زمانی رخ می‌دهد که فشار مستقیماً بر طناب نخاعی (Spinal Cord) در کانال نخاعی وارد می‌شود (اغلب به دلیل دژنراسیون شدید یا استئوفت‌ها).
          </p>

          <p className="mb-2"><strong>علائم:</strong></p>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>اختلالات حرکتی:</strong> بی‌ثباتی در راه رفتن، عدم تعادل، و مشکل در حفظ تعادل.</li>
            <li><strong>دیس‌فانکشن حرکات ظریف:</strong> از دست دادن مهارت در انجام کارهای دقیق با دست (مانند بستن دکمه یا نوشتن).</li>
            <li>سفتی و اسپاسم در پاها (تغییر در رفلکس‌ها).</li>
            <li>مشکلات کنترل ادرار و مدفوع (در مراحل پیشرفته‌تر).</li>
          </ul>

          <div className="bg-red-50 border-r-4 border-red-500 p-4 my-6 rounded-lg">
            <p className="text-red-700 font-semibold">
              نکته مهم: میلوپاتی گردنی به دلیل خطر فلج پیشرونده، یک اندیکاسیون نسبتاً اورژانسی برای جراحی رفع فشار (دکومپرشن) محسوب می‌شود.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">تشخیص و راهبردهای درمانی</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تشخیص</h3>

          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>معاینه فیزیکی و عصبی:</strong> ارزیابی رفلکس‌ها، قدرت عضلانی و حس برای تعیین ریشه عصبی درگیر.</li>
            <li><strong>تصویربرداری رزونانس مغناطیسی (MRI):</strong> بهترین ابزار برای تجسم بافت نرم، فتق دیسک، فشار بر طناب نخاعی و آسیب‌های بافت عصبی.</li>
            <li><strong>عکسبرداری ساده (X-Ray):</strong> برای ارزیابی هم‌ترازی ستون فقرات و شناسایی تغییرات دژنراتیو استخوانی (استئوفت‌ها).</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">درمان</h3>

          <p className="mb-4">
            درمان معمولاً با روش‌های محافظه‌کارانه آغاز می‌شود و تنها در صورت عدم بهبود یا وجود میلوپاتی پیشرونده، جراحی توصیه می‌شود:
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">الف) درمان‌های محافظه‌کارانه:</h4>
          <ul className="list-disc pr-6 mb-4 space-y-2">
            <li><strong>فیزیوتراپی:</strong> تمرینات کششی و تقویتی برای گردن و شانه‌ها. <Link to="/services/physiotherapy" className="text-primary hover:underline">خدمات فیزیوتراپی در منزل</Link></li>
            <li><strong>دارودرمانی:</strong> استفاده از داروهای ضد التهاب غیراستروئیدی (NSAIDs)، شل‌کننده‌های عضلانی، یا داروهای تسکین‌دهنده درد عصبی (مانند گاباپنتین).</li>
            <li><strong>تزریقات ستون فقرات:</strong> تزریق استروئید اپیدورال برای کاهش التهاب و درد ریشه عصب.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">ب) درمان جراحی:</h4>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>دیسککتومی قدامی و فیوژن گردنی (ACDF):</strong> شایع‌ترین روش که شامل برداشتن دیسک آسیب‌دیده و جوش دادن مهره‌ها به یکدیگر است.</li>
            <li><strong>آرتروپلاستی دیسک گردنی (Cervical Disc Arthroplasty):</strong> تعویض دیسک آسیب‌دیده با یک دیسک مصنوعی برای حفظ حرکت ستون فقرات.</li>
            <li><strong>جراحی فورامینوتومی خلفی:</strong> برداشتن استخوان یا دیسک از پشت برای رفع فشار از روی عصب.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">خدمات نوید زندگی برای بیماران دیسک گردن</h2>

          <p className="mb-6">
            مجموعه نوید زندگی با ارائه <Link to="/services/neurology" className="text-primary hover:underline">ویزیت متخصص مغز و اعصاب در منزل</Link> و <Link to="/services/physiotherapy" className="text-primary hover:underline">فیزیوتراپی در منزل</Link>، امکان تشخیص و درمان دیسک گردن را بدون نیاز به مراجعه به مطب فراهم می‌کند. تیم متخصص ما با تجهیزات پیشرفته به منزل شما مراجعه می‌کند.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold mb-4">مشاوره و ویزیت در منزل</h3>
            <p className="mb-4">
              برای ویزیت متخصص مغز و اعصاب یا فیزیوتراپی در منزل با ما تماس بگیرید:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCall} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>تماس: 09386117912</span>
              </Button>
              <Button onClick={handleWhatsApp} variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>پیام در واتساپ</span>
              </Button>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">منابع</h3>
          <ol className="list-decimal pr-6 mb-6 space-y-1 text-sm text-muted-foreground">
            <li>Cervical Spondylotic Myelopathy (CSM) - Diagnosis and Management. American Academy of Orthopaedic Surgeons (AAOS).</li>
            <li>Cervical Radiculopathy: Diagnosis and Management. Mayo Clinic Proceedings.</li>
            <li>Cervical herniated disc. Cleveland Clinic.</li>
            <li>Cervical Radiculopathy: Pathophysiology and Surgical Treatment Options. Neurosurgery Clinics of North America.</li>
            <li>Degenerative Cervical Disc Disease. Johns Hopkins Medicine.</li>
          </ol>
        </article>

        <div className="mt-12">
          <FAQSection faqs={faqItems} />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>

        <div className="mt-12">
          <PricingInfo />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default CervicalDiscPage;
