import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import lichenPlanusImage from "@/assets/lichen-planus-article.jpg";
import skinItchingImage from "@/assets/skin-itching-article.jpg";
import mouthUlcerImage from "@/assets/mouth-ulcer-article.jpg";
import hairLossImage from "@/assets/hair-loss-article.jpg";

const LichenPlanusPage = () => {
  const faqs = [
    {
      question: "آیا لیکن پلان مسری است؟",
      answer: "خیر، لیکن پلان یک بیماری خودایمنی است و هیچ‌گاه از طریق تماس پوستی یا استفاده از وسایل مشترک به دیگران منتقل نمی‌شود."
    },
    {
      question: "آیا لیکن پلان درمان قطعی دارد؟",
      answer: "لیکن پلان معمولاً خودبه‌خود در طی ۱ تا ۲ سال بهبود می‌یابد، اما درمان‌های دارویی می‌توانند علائم را کنترل و دوره بیماری را کوتاه‌تر کنند."
    },
    {
      question: "لیکن پلان دهانی چقدر خطرناک است؟",
      answer: "لیکن پلان دهانی در موارد نادر می‌تواند به سمت بدخیمی پیشرفت کند، بنابراین پیگیری منظم و در صورت نیاز بیوپسی ضروری است."
    },
    {
      question: "آیا استرس باعث تشدید لیکن پلان می‌شود؟",
      answer: "بله، استرس یکی از عوامل تشدیدکننده لیکن پلان است. مدیریت استرس می‌تواند در کنترل بیماری کمک‌کننده باشد."
    },
    {
      question: "آیا بیوپسی برای تشخیص لیکن پلان ضروری است؟",
      answer: "در بسیاری از موارد، پزشک متخصص می‌تواند با معاینه بالینی تشخیص دهد، اما در موارد مشکوک یا غیرتیپیک، بیوپسی برای تأیید تشخیص لازم است."
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
      title: "آفت دهان: علل و درمان",
      description: "بررسی علل آفت دهان و روش‌های درمان خانگی و پزشکی",
      image: mouthUlcerImage,
      link: "/articles/mouth-ulcer",
      category: "دهان"
    },
    {
      title: "ریزش مو: تشخیص و درمان",
      description: "علل ریزش مو و روش‌های درمان تخصصی در منزل",
      image: hairLossImage,
      link: "/articles/hair-loss",
      category: "پوست"
    },
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="لیکن پلان چیست؟ راهنمای کامل تشخیص و درمان تخصصی در منزل | نوید زندگی"
        description="لیکن پلان یک بیماری التهابی پوست و مخاط است. با ویزیت متخصص پوست و بیوپسی در منزل تهران و کرج، تشخیص و درمان دقیق را تجربه کنید."
        keywords="لیکن پلان، لیکن پلانوس، متخصص پوست در منزل، بیوپسی پوست در منزل، لیکن پلان دهانی، نوید زندگی"
        canonical="https://navidzendegi.com/articles/lichen-planus"
        ogImage={lichenPlanusImage}
        ogType="article"
      />

      <ArticleSchema
        title="لیکن پلان چیست؟ راهنمای کامل تشخیص و درمان تخصصی در منزل"
        description="بررسی علمی لیکن پلان، علائم، انواع و روش‌های درمان تخصصی با ویزیت متخصص پوست در منزل"
        image={lichenPlanusImage}
        publishedTime="2025-12-27"
        modifiedTime="2025-12-27"
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"لیکن پلان",url:"/articles/lichen-planus"}]} />

          {/* Main Image */}
          <img
            src={lichenPlanusImage}
            alt="لیکن پلان - تشخیص و درمان تخصصی در منزل"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-foreground">
            <h1 className="text-3xl font-bold mb-6 text-foreground">
              لیکن پلان چیست؟ راهنمای کامل تشخیص و درمان تخصصی در منزل
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              لیکن پلان یک بیماری التهابی و مزمن است که پوست، غشاهای مخاطی (مانند داخل دهان)، ناخن‌ها و مو را درگیر می‌کند. طبق گزارش‌های Mayo Clinic، این بیماری یک اختلال مسری نیست، بلکه نتیجه حمله اشتباه سیستم ایمنی بدن به سلول‌های پوست یا مخاط است.
            </p>

            <p className="mb-6">
              تشخیص دقیق این بیماری از حساسیت بالایی برخوردار است، زیرا ظاهر آن ممکن است با سایر بیماری‌های پوستی اشتباه گرفته شود. مرکز نوید زندگی با اعزام متخصصین مجرب به منزل شما در تهران و کرج، فرآیند تشخیص و درمان را بدون نیاز به جابه‌جایی بیمار تسهیل می‌کند.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              علائم بالینی: قانون ۶ پ (6 Ps)
            </h2>

            <p className="mb-4">
              در منابع دانشگاهی مانند StatPearls، لیکن پلان کلاسیک را با ۶ ویژگی اصلی می‌شناسند که به "6 Ps" معروف است:
            </p>

            <p className="mb-2"><strong>Planar (صاف):</strong> ضایعات دارای سطحی صاف هستند.</p>
            <p className="mb-2"><strong>Purple (بنفش):</strong> رنگ ضایعات معمولاً مایل به بنفش یا ارغوانی است.</p>
            <p className="mb-2"><strong>Polygonal (چندضلعی):</strong> شکل ضایعات منظم نیست و گوشه‌دار است.</p>
            <p className="mb-2"><strong>Pruritic (خارش‌دار):</strong> خارش شدید یکی از آزاردهنده‌ترین علائم است.</p>
            <p className="mb-2"><strong>Papules (پاپول):</strong> ضایعات به صورت برجستگی‌های کوچک پوستی ظاهر می‌شوند.</p>
            <p className="mb-6"><strong>Plaques (پلاک):</strong> تجمع پاپول‌ها که ضایعات بزرگتری را تشکیل می‌دهند.</p>

            <p className="mb-6 p-4 bg-muted rounded-lg">
              <strong>نکته تشخیصی مهم:</strong> روی این ضایعات معمولاً خطوط سفید و ظریفی به نام خطوط ویکهام (Wickham Striae) دیده می‌شود که یکی از نشانه‌های اصلی تشخیص برای پزشک است.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              انواع مختلف لیکن پلان
            </h2>

            <p className="mb-4">
              لیکن پلان فقط محدود به پوست نیست و می‌تواند بخش‌های مختلفی را درگیر کند:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-right">نوع بیماری</th>
                    <th className="border border-border px-4 py-2 text-right">محل درگیری</th>
                    <th className="border border-border px-4 py-2 text-right">علائم شایع</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">لیکن پلان دهانی</td>
                    <td className="border border-border px-4 py-2">داخل گونه‌ها، لثه و زبان</td>
                    <td className="border border-border px-4 py-2">خطوط سفید شبکه‌ای، زخم‌های دردناک دهانی</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-2">لیکن پلان مویی</td>
                    <td className="border border-border px-4 py-2">پوست سر</td>
                    <td className="border border-border px-4 py-2">ریزش موی سکه‌ای و دائمی (اسکارینگ)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">لیکن پلان ناخن</td>
                    <td className="border border-border px-4 py-2">ناخن دست و پا</td>
                    <td className="border border-border px-4 py-2">نازک شدن ناخن، ایجاد شیار و جدا شدن ناخن</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-2">لیکن پلان تناسلی</td>
                    <td className="border border-border px-4 py-2">نواحی تناسلی</td>
                    <td className="border border-border px-4 py-2">قرمزی، سوزش و گاهی زخم‌های باز</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              علت بروز لیکن پلان از دیدگاه علمی
            </h2>

            <p className="mb-4">
              بر اساس مقالات منتشر شده در PubMed (NCBI)، این بیماری یک پاسخ ایمنی واسطه‌ای توسط سلول‌های T است. عوامل محرک احتمالی عبارتند از:
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>عفونت‌های ویروسی (مانند هپاتیت C)</li>
              <li>واکنش به برخی داروها (داروهای فشار خون، قلبی و آرتریت)</li>
              <li>استرس شدید عصبی</li>
              <li>پرکننده‌های دندانی فلزی (در موارد دهانی)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              خدمات تخصصی «نوید زندگی» برای بیماران لیکن پلان
            </h2>

            <p className="mb-4">
              تشخیص و درمان این بیماری به دلیل ماهیت مزمن آن، نیاز به پیگیری دقیق دارد. ما خدمات زیر را در منزل شما ارائه می‌دهیم:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">
              ۱. ویزیت متخصص پوست و مو
            </h3>
            <p className="mb-4">
              متخصصین ما با معاینه دقیق ضایعات و بررسی سوابق دارویی، پروتکل درمانی شامل استروئیدهای موضعی یا خوراکی، مهارکننده‌های کلسینورین و یا نوردرمانی را تجویز می‌کنند.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">
              ۲. بیوپسی (نمونه‌برداری) در منزل
            </h3>
            <p className="mb-4">
              در بسیاری از موارد برای اطمینان از نوع لیکن پلان و رد احتمال بدخیمی (به‌ویژه در موارد دهانی)، نیاز به نمونه‌برداری کوچک از پوست است. پزشکان نوید زندگی این روش جراحی سرپایی را با رعایت کامل استریل در منزل انجام می‌دهند.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">
              ۳. مدیریت خارش و تزریقات ضایعه‌ای
            </h3>
            <p className="mb-6">
              برای ضایعات مقاوم، تزریق مستقیم کورتون به داخل ضایعه (Intralesional injection) توسط پرستار یا پزشک در منزل انجام می‌شود تا خارش و التهاب به سرعت فروکش کند.
            </p>

            {/* Warning Box */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-destructive mb-3">هشدار مهم</h3>
              <p className="text-foreground">
                از مصرف خودسرانه داروهای کورتونی بدون تجویز پزشک متخصص خودداری کنید. استفاده نادرست از این داروها می‌تواند باعث تشدید بیماری، نازک شدن پوست و عوارض جدی‌تر شود.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              منابع و رفرنس‌های معتبر (References)
            </h2>

            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>
                <a 
                  href="https://www.aad.org/public/diseases/a-z/lichen-planus-overview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  American Academy of Dermatology (AAD): Lichen planus: Signs, symptoms, and causes
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mayoclinic.org/diseases-conditions/lichen-planus/diagnosis-treatment/drc-20351383" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mayo Clinic: Lichen planus - Diagnosis and treatment
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ncbi.nlm.nih.gov/books/NBK526126/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  NCBI (StatPearls): Lichen Planus, by S. Gorouhi et al., 2023
                </a>
              </li>
              <li>Journal of the American Medical Association (JAMA): Management of Lichen Planus</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 my-10 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                چرا نوید زندگی را انتخاب کنیم؟
              </h2>
              <p className="mb-4">
                درگیری با بیماری‌های پوستی مانند لیکن پلان می‌تواند استرس‌زا باشد. ما با ارائه خدمات در تهران و کرج:
              </p>
              <ul className="text-right list-disc list-inside mb-6 inline-block">
                <li>زمان انتظار برای ویزیت متخصص را به حداقل می‌رسانیم.</li>
                <li>نمونه‌گیری و آزمایش‌های لازم را در محل انجام می‌دهیم.</li>
                <li>حریم خصوصی و آرامش بیمار را حفظ می‌کنیم.</li>
              </ul>
              <div>
                <a 
                  href="tel:09386117912" 
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                </a>
              </div>
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

export default LichenPlanusPage;
