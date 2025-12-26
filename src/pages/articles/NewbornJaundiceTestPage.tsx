import SEOHead from "@/components/SEOHead";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import StructuredData from "@/components/StructuredData";
import biliCheckImage from "@/assets/bilicheck-newborn.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import pediatricsImage from "@/assets/pediatrics.jpg";
import nurseHomeCareImage from "@/assets/iranian-nurse-home-care.jpg";

const NewbornJaundiceTestPage = () => {
  const faqs = [
    {
      question: "آیا تست بیلی‌چک دقت کافی دارد؟",
      answer: "بله، دستگاه بیلی‌چک دقت بالایی در غربالگری و پایش زردی نوزاد دارد. در صورت بالا بودن نتیجه، ممکن است پزشک برای تأیید نهایی آزمایش خون توصیه کند."
    },
    {
      question: "تست زردی بدون سوزن برای چه سنی مناسب است؟",
      answer: "این تست برای نوزادان از بدو تولد تا چند هفتگی که در معرض خطر زردی هستند قابل انجام است و به خصوص برای پایش روزانه زردی در منزل بسیار مناسب است."
    },
    {
      question: "آیا امکان اجاره دستگاه فتوتراپی همراه با تست وجود دارد؟",
      answer: "بله، در صورت بالا بودن سطح زردی، تیم نوید زندگی می‌تواند همان لحظه دستگاه فتوتراپی ۴، ۸ یا ۱۲ لامپه را به منزل شما بیاورد."
    },
    {
      question: "هزینه تست زردی در منزل چقدر است؟",
      answer: "برای اطلاع از تعرفه‌های به‌روز تست زردی بدون سوزن در منزل با شماره 09386117912 تماس بگیرید."
    },
    {
      question: "چه زمانی باید برای تست زردی نوزاد اقدام کنم؟",
      answer: "اگر سفیدی چشم نوزاد زرد شده، پوست صورت و بدن رنگ زرد گرفته، نوزاد خواب‌آلود و بی‌اشتها شده یا گریه‌های غیرعادی دارد، باید فوراً تست انجام دهید."
    }
  ];

  const relatedArticles = [
    {
      title: "تب در کودکان: علل، علائم و درمان خانگی",
      description: "راهنمای کامل مدیریت تب کودکان در منزل",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "اطفال"
    },
    {
      title: "ویزیت متخصص اطفال در منزل",
      description: "معاینه و درمان کودکان در محیط آرام خانه",
      image: pediatricsImage,
      link: "/general-doctor",
      category: "خدمات پزشکی"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "مراقبت‌های تخصصی پرستاری برای نوزادان و کودکان",
      image: nurseHomeCareImage,
      link: "/services/nursing",
      category: "خدمات پزشکی"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تست زردی نوزاد بدون سوزن", url: "/articles/newborn-jaundice-test" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آزمایش زردی نوزاد در منزل بدون سوزن | بیلی‌چک | نوید زندگی"
        description="آیا نگران درد کشیدن نوزاد حین آزمایش زردی هستید؟ نوید زندگی تست زردی بدون سوزن و خون‌گیری (بیلی‌چک) را در منزل شما در تهران و کرج انجام می‌دهد. پاسخدهی آنی و بدون درد."
        keywords="تست زردی نوزاد در منزل، قیمت بیلی چک در منزل تهران، آزمایش زردی بدون خونگیری، دستگاه زردی نوزاد کرج، بیلی‌روبین‌متر پوستی"
        canonical="https://navidzendegi.ir/articles/newborn-jaundice-test"
        ogType="article"
        publishedTime="2024-12-26"
        modifiedTime="2024-12-26"
      />

      <StructuredData
        breadcrumbs={breadcrumbItems}
        article={{
          title: "آزمایش زردی نوزاد در منزل بدون سوزن؛ تشخیص سریع و بدون درد",
          description: "راهنمای کامل تست زردی نوزاد با دستگاه بیلی‌چک در منزل تهران و کرج",
          author: "تیم پزشکی نوید زندگی",
          publishedDate: "2024-12-26",
          modifiedDate: "2024-12-26",
          image: "https://navidzendegi.ir/assets/bilicheck-newborn.jpg"
        }}
        faqs={faqs}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
            آزمایش زردی نوزاد در منزل بدون سوزن؛ تشخیص سریع و بدون درد (تهران و کرج)
          </h1>

          <img 
            src={biliCheckImage} 
            alt="تست زردی نوزاد با دستگاه بیلی‌چک بدون سوزن" 
            className="w-full rounded-lg mb-8"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            زردی نوزاد یکی از شایع‌ترین دغدغه‌های والدین در روزهای اول تولد است. تا پیش از این، تنها راه تشخیص میزان زردی، گرفتن نمونه خون از پاشنه پا یا رگ نوزاد بود که با درد، گریه و استرس زیاد همراه می‌شد. اما حالا مرکز نوید زندگی با استفاده از تکنولوژی نوین، امکان <strong>تست زردی نوزاد بدون سوزن و خون‌گیری</strong> را در منزل شما (سراسر تهران و کرج) فراهم کرده است.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <p className="text-destructive font-semibold mb-0">
              ⚠️ هشدار: هرگز زردی نوزاد را جدی نگیرید. زردی شدید درمان نشده می‌تواند به آسیب مغزی دائمی منجر شود. در صورت مشاهده علائم، فوراً تست انجام دهید.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            دستگاه بیلی‌چک (Bilicheck) چیست و چگونه کار می‌کند؟
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            این دستگاه که به آن «بیلی‌روبین‌متر پوستی» نیز می‌گویند، یک ابزار پیشرفته است که از طریق تاباندن طیف خاصی از نور به پوست نوزاد (معمولاً روی پیشانی یا قفسه سینه)، میزان بیلی‌روبین خون را اندازه‌گیری می‌کند.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            نحوه کار بسیار ساده است: دستگاه روی پوست قرار می‌گیرد، نوری ارسال می‌شود و در کمتر از چند ثانیه، عدد دقیق زردی روی صفحه نمایش ظاهر می‌شود. <strong>بدون هیچ‌گونه خراش، سوزن یا خون‌ریزی!</strong>
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            مزایای تست زردی بدون سوزن در منزل
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            چرا والدین در تهران و کرج، خدمات «نوید زندگی» را به مراجعه حضوری به آزمایشگاه ترجیح می‌دهند؟
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li><strong>بدون درد و گریه:</strong> نوزاد شما هیچ دردی حس نمی‌کند و حتی ممکن است حین انجام تست در خواب باشد.</li>
            <li><strong>پاسخدهی آنی:</strong> برخلاف آزمایش خون که چندین ساعت زمان می‌برد، نتیجه بیلی‌چک همان لحظه مشخص می‌شود.</li>
            <li><strong>پیشگیری از عفونت:</strong> با حذف سوزن، خطر ورود آلودگی به بدن حساس نوزاد کاملاً از بین می‌رود.</li>
            <li><strong>کاهش استرس مادر:</strong> محیط آرام خانه و عدم شنیدن صدای گریه نوزاد، آرامش خانواده را حفظ می‌کند.</li>
            <li><strong>دوری از آلودگی بیمارستان:</strong> نوزاد تازه متولد شده نباید در معرض ویروس‌های موجود در مراکز درمانی قرار بگیرد.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            مقایسه تست زردی پوستی (بدون سوزن) با آزمایش خون
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="border border-border px-4 py-2 text-right">ویژگی</th>
                  <th className="border border-border px-4 py-2 text-right">آزمایش خون (سنتی)</th>
                  <th className="border border-border px-4 py-2 text-right">تست با بیلی‌چک (نوید زندگی)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">درد و سوزن</td>
                  <td className="border border-border px-4 py-2">دارد (تهاجمی)</td>
                  <td className="border border-border px-4 py-2 text-primary font-semibold">ندارد (غیرتهاجمی)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">زمان اعلام نتیجه</td>
                  <td className="border border-border px-4 py-2">۴ تا ۶ ساعت</td>
                  <td className="border border-border px-4 py-2 text-primary font-semibold">آنی و در لحظه</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">محل انجام</td>
                  <td className="border border-border px-4 py-2">آزمایشگاه یا بیمارستان</td>
                  <td className="border border-border px-4 py-2 text-primary font-semibold">در منزل شما</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">دقت</td>
                  <td className="border border-border px-4 py-2">بسیار بالا</td>
                  <td className="border border-border px-4 py-2">بالا (مناسب برای غربالگری و پایش)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            چه زمانی باید برای تست زردی اقدام کنید؟
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            اگر متوجه علائم زیر در نوزاد شدید، بدون جابه‌جا کردن او در ترافیک تهران و کرج، با ما تماس بگیرید:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>زرد شدن سفیدی چشم نوزاد</li>
            <li>زرد شدن پوست صورت که به سمت شکم و پاها پیشروی می‌کند</li>
            <li>خواب‌آلودگی بیش از حد و عدم تمایل به شیر خوردن</li>
            <li>بی‌قراری و گریه‌های غیرعادی</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            خدمات تکمیلی «نوید زندگی» برای درمان زردی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            اگر پس از انجام تست بدون سوزن، عدد زردی نوزاد بالا باشد، ما شما را تنها نمی‌گذاریم:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li><strong>اجاره دستگاه زردی (فتوتراپی) در منزل:</strong> بهترین و پیشرفته‌ترین دستگاه‌های ۴، ۸ و ۱۲ لامپه را به منزل شما می‌آوریم.</li>
            <li><strong>ویزیت متخصص اطفال در منزل:</strong> جهت بررسی دقیق‌تر و تجویز دارو در صورت نیاز.</li>
            <li><strong>آموزش شیردهی و مراقبت:</strong> توسط پرستاران مجرب برای کاهش سریع‌تر زردی.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            نوید زندگی؛ همراهِ روزهای اولِ مادری
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            ما در تمامی مناطق تهران و شهر کرج، به صورت <strong>شبانه‌روزی</strong> آماده اعزام کارشناس با دستگاه بیلی‌چک هستیم. اجازه ندهید اولین خاطرات نوزادتان با درد و سوزن گره بخورد.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              همین حالا برای تست بدون درد زردی نوزاد با ما تماس بگیرید
            </h3>
            <p className="text-muted-foreground mb-4">
              تشخیص دقیق، درمان آرام، در آغوش گرمِ خانه.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              📞 تماس فوری: 09386117912
            </a>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            خدمات مرتبط نوید زندگی
          </h2>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li><a href="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</a></li>
            <li><a href="/general-doctor" className="text-primary hover:underline">ویزیت پزشک عمومی در منزل</a></li>
            <li><a href="/articles/specialist-home-visit" className="text-primary hover:underline">ویزیت متخصص اطفال در منزل</a></li>
            <li><a href="/services/medical-equipment-rental" className="text-primary hover:underline">اجاره تجهیزات پزشکی در منزل</a></li>
          </ul>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </div>
    </ArticleLayout>
  );
};

export default NewbornJaundiceTestPage;
