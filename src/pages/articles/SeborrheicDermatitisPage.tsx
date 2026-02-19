import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import seborrheicDermatitisImage from "@/assets/seborrheic-dermatitis.jpg";
import skinItchingImage from "@/assets/skin-itching-article.jpg";
import hairLossImage from "@/assets/hair-loss-article.jpg";
import skinMolesImage from "@/assets/skin-moles-article.jpg";

const SeborrheicDermatitisPage = () => {
  const faqs = [
    {
      question: "آیا درماتیت سبوره درمان قطعی دارد؟",
      answer: "درماتیت سبوره یک بیماری مزمن و عودکننده است و درمان قطعی ندارد، اما با مدیریت صحیح و استفاده از داروهای مناسب می‌توان علائم را کنترل کرد و دوره‌های عود را کاهش داد."
    },
    {
      question: "آیا درماتیت سبوره مسری است؟",
      answer: "خیر، درماتیت سبوره یک بیماری غیرمسری است و از طریق تماس پوستی یا استفاده از وسایل مشترک منتقل نمی‌شود."
    },
    {
      question: "تفاوت شوره سر با درماتیت سبوره چیست؟",
      answer: "شوره سر شکل خفیف‌تری از درماتیت سبوره است که فقط پوست سر را درگیر می‌کند. در درماتیت سبوره، علائم شدیدتر بوده و ممکن است نواحی دیگر مثل صورت و سینه را نیز درگیر کند."
    },
    {
      question: "چرا درماتیت سبوره در زمستان بدتر می‌شود؟",
      answer: "هوای سرد و خشک زمستان باعث خشکی پوست و تشدید علائم می‌شود. همچنین استفاده از بخاری و سیستم‌های گرمایشی، رطوبت هوا را کاهش داده و وضعیت را بدتر می‌کند."
    },
    {
      question: "آیا استرس باعث تشدید درماتیت سبوره می‌شود؟",
      answer: "بله، استرس یکی از عوامل تشدیدکننده درماتیت سبوره است. کنترل استرس با تکنیک‌های آرامش‌بخش می‌تواند به کاهش عود کمک کند."
    },
  ];

  const relatedArticles = [
    {
      title: "خارش پوستی: علل و درمان‌های موثر",
      description: "بررسی علل مختلف خارش پوست و روش‌های درمانی نوین",
      image: skinItchingImage,
      link: "/articles/skin-itching",
      category: "پوست"
    },
    {
      title: "ریزش مو: تشخیص و درمان",
      description: "علل ریزش مو و روش‌های درمان تخصصی در منزل",
      image: hairLossImage,
      link: "/articles/hair-loss",
      category: "پوست"
    },
    {
      title: "خال‌های پوستی: چه زمانی نگران‌کننده هستند؟",
      description: "راهنمای تشخیص خال‌های خطرناک و زمان مراجعه به متخصص",
      image: skinMolesImage,
      link: "/articles/skin-moles",
      category: "پوست"
    },
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="درماتیت سبوره؛ راهنمای کامل تشخیص و درمان تخصصی در منزل | نوید زندگی"
        description="آیا از شوره و پوسته‌ریزی صورت و سر رنج می‌برید؟ درماتیت سبوره با ویزیت متخصص پوست در منزل قابل درمان است. خدمات تخصصی نوید زندگی در تهران و کرج."
        keywords="درماتیت سبوره، شوره سر، متخصص پوست در منزل، درمان درماتیت سبوره، شوره صورت، قارچ مالاسزیا، نوید زندگی"
        canonical="https://navidzendegi.com/articles/seborrheic-dermatitis"
        ogImage={seborrheicDermatitisImage}
        ogType="article"
      />

      <ArticleSchema
        title="درماتیت سبوره؛ راهنمای کامل تشخیص و درمان تخصصی در منزل"
        description="بررسی علمی درماتیت سبوره، علل بروز، علائم و روش‌های درمان تخصصی با ویزیت متخصص پوست در منزل"
        image={seborrheicDermatitisImage}
        publishedTime="2025-12-27"
        modifiedTime="2025-12-27"
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"درماتیت سبوره",url:"/articles/seborrheic-dermatitis"}]} />

          {/* Main Image */}
          <img
            src={seborrheicDermatitisImage}
            alt="درماتیت سبوره - تشخیص و درمان تخصصی در منزل"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl font-bold mb-6 text-foreground">
              درماتیت سبوره؛ راهنمای کامل تشخیص و درمان تخصصی در منزل
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              درماتیت سبوره (Seborrheic Dermatitis) یک اختلال پوستی مزمن، عودکننده و التهابی است که طبق آمارهای منتشر شده در NCBI، حدود ۱ تا ۳ درصد از جمعیت عمومی و تا ۵ درصد از بزرگسالان جوان را درگیر می‌کند. این بیماری که در نواحی غنی از غدد چربی (سباسه) ظاهر می‌شود، فراتر از یک شوره ساده سر است و نیاز به مدیریت تخصصی دارد.
            </p>

            <p className="mb-6">
              مرکز خدمات پزشکی نوید زندگی با اعزام پزشکان متخصص پوست به منزل در تهران و کرج، این عارضه را طبق آخرین پروتکل‌های درمانی بین‌المللی مدیریت می‌کند.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              بررسی علمی: علت بروز درماتیت سبوره چیست؟
            </h2>

            <p className="mb-4">
              بر اساس یافته‌های Mayo Clinic و مقالات منتشر شده در Journal of Clinical and Aesthetic Dermatology، علت دقیق این بیماری هنوز ناشناخته است، اما سه فاکتور کلیدی در آن نقش دارند:
            </p>

            <p className="mb-3">
              <strong>قارچ مالاسزیا (Malassezia):</strong> این مخمر به طور طبیعی روی پوست زندگی می‌کند، اما فعالیت بیش از حد آن باعث واکنش التهابی می‌شود.
            </p>

            <p className="mb-3">
              <strong>ترشح چربی (Sebum):</strong> غدد چربی بیش‌فعال، محیط مناسبی برای رشد قارچ‌ها فراهم می‌کنند.
            </p>

            <p className="mb-6">
              <strong>پاسخ سیستم ایمنی:</strong> حساسیت سلول‌های ایمنی بدن به متابولیت‌های قارچ مالاسزیا باعث قرمزی و خارش می‌شود.
            </p>

            <p className="mb-6 p-4 bg-muted rounded-lg">
              <strong>نکته علمی:</strong> تحقیقات نشان می‌دهند که درماتیت سبوره در بیماران مبتلا به پارکینسون و HIV با شدت بسیار بیشتری بروز می‌کند که نشان‌دهنده ارتباط این بیماری با سیستم عصبی و ایمنی بدن است.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              علائم و نشانه‌های بالینی
            </h2>

            <p className="mb-4">
              علائم این بیماری بر اساس سن و ناحیه درگیر متفاوت است:
            </p>

            <p className="mb-3">
              <strong>در بزرگسالان:</strong> پوسته‌های زرد و چرب، اریتم (قرمزی) در کناره‌های بینی، ابروها و پشت گوش.
            </p>

            <p className="mb-6">
              <strong>در نوزادان (Cradle Cap):</strong> پوسته‌های ضخیم و چسبنده روی سر که معمولاً در ۳ ماهه اول تولد ظاهر می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              مقایسه درماتیت سبوره با بیماری‌های مشابه (تشخیص افتراقی)
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-right">ویژگی</th>
                    <th className="border border-border px-4 py-2 text-right">درماتیت سبوره</th>
                    <th className="border border-border px-4 py-2 text-right">پسوریازیس</th>
                    <th className="border border-border px-4 py-2 text-right">درماتیت تماسی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">محل شایع</td>
                    <td className="border border-border px-4 py-2">نواحی چرب (صورت، سینه)</td>
                    <td className="border border-border px-4 py-2">نواحی خشک (آرنج، زانو)</td>
                    <td className="border border-border px-4 py-2">محل تماس با ماده حساسیت‌زا</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-2">نوع پوسته</td>
                    <td className="border border-border px-4 py-2">زرد، نرم و چرب</td>
                    <td className="border border-border px-4 py-2">سفید، نقره‌ای و خشک</td>
                    <td className="border border-border px-4 py-2">معمولاً بدون پوسته، دارای تاول</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">شدت خارش</td>
                    <td className="border border-border px-4 py-2">متوسط تا شدید</td>
                    <td className="border border-border px-4 py-2">کم تا متوسط</td>
                    <td className="border border-border px-4 py-2">بسیار شدید</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              ضرورت ویزیت متخصص پوست در منزل برای این بیماران
            </h2>

            <p className="mb-4">
              تشخیص درست درماتیت سبوره کلید درمان است. بسیاری از بیماران با استفاده خودسرانه از کورتون‌ها، باعث نازکی پوست و تشدید بیماری می‌شوند. متخصصان نوید زندگی در منزل شما:
            </p>

            <p className="mb-3">
              <strong>تشخیص قطعی:</strong> تمایز بین این بیماری و پسوریازیس (که درمان‌های کاملاً متفاوتی دارند).
            </p>

            <p className="mb-3">
              <strong>تجویز داروهای نوین:</strong> استفاده از مهارکننده‌های کلسینورین (مانند تاکرولیموس) که عوارض کورتون را ندارند.
            </p>

            <p className="mb-6">
              <strong>مدیریت بیماری در بیماران خاص:</strong> ارائه خدمات به بیماران مبتلا به پارکینسون یا معلولیت‌های حرکتی در تهران و کرج که حضور در مطب برایشان دشوار است.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              راهکارهای درمانی تایید شده (Evidence-Based)
            </h2>

            <p className="mb-4">
              طبق راهنماهای درمانی AAD (انجمن آکادمی درماتولوژی آمریکا)، درمان‌ها شامل موارد زیر است:
            </p>

            <p className="mb-3">
              <strong>عوامل ضد قارچ:</strong> شامپوها و کرم‌های حاوی کتوکونازول یا سلوم سولفاید.
            </p>

            <p className="mb-3">
              <strong>داروهای ضد التهاب:</strong> کورتیکواستروئیدهای موضعی برای دوره‌های کوتاه.
            </p>

            <p className="mb-6">
              <strong>ترکیبات کراتولیتیک:</strong> اسید سالیسیلیک برای جداسازی پوسته‌های ضخیم.
            </p>

            {/* Warning Box */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-destructive mb-3">هشدار مهم</h3>
              <p className="text-foreground">
                از مصرف خودسرانه داروهای کورتونی و ضد قارچ بدون تجویز پزشک متخصص خودداری کنید. استفاده نادرست از این داروها می‌تواند باعث تشدید بیماری، نازک شدن پوست و عوارض جدی‌تر شود.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              منابع و رفرنس‌های معتبر (References)
            </h2>

            <p className="mb-2">برای اطمینان از صحت مطالب، می‌توانید به منابع زیر مراجعه کنید:</p>

            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>
                <a 
                  href="https://www.ncbi.nlm.nih.gov/books/NBK551707/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  National Center for Biotechnology Information (NCBI): Seborrheic Dermatitis: Diagnosis and Treatment
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  American Academy of Dermatology (AAD): Seborrheic dermatitis: Overview and clinical guidelines
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mayoclinic.org/diseases-conditions/seborrheic-dermatitis/symptoms-causes/syc-20352710" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mayo Clinic: Diseases & Conditions: Seborrheic dermatitis
                </a>
              </li>
              <li>StatPearls Publishing: Seborrheic Dermatitis, updated 2023</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 my-10 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                خدمات نوید زندگی در تهران و کرج
              </h2>
              <p className="mb-6">
                ما با درک حساسیت بیماری‌های پوستی، تیم تخصصی خود را به خانه شما می‌فرستیم تا بدون استرس و در کمترین زمان، روند بهبودی خود را آغاز کنید.
              </p>
              <p className="mb-4">
                <strong>خدمات ما:</strong> ویزیت متخصص، نمونه‌برداری از پوست در منزل، و آموزش روتین‌های مراقبتی.
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>
          </article>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection faqs={faqs} />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Pricing Info */}
          <div className="mt-12">
            <PricingInfo />
          </div>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default SeborrheicDermatitisPage;
