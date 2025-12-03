import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import annualScreeningImage from "@/assets/annual-screening-tests.jpg";
import cholesterolTestImage from "@/assets/cholesterol-test-article.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import elderlyCareImage from "@/assets/elderly-care-home.jpg";

const AnnualScreeningTestsPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "آزمایشات و غربالگری‌های سالانه", url: "/articles/annual-screening-tests" }
  ];

  const faqs = [
    {
      question: "چه زمانی باید اولین آزمایش چکاپ سالانه را انجام دهم؟",
      answer: "از ۱۸ سالگی می‌توانید با معاینات فیزیکی پایه و بررسی فشار خون شروع کنید. آزمایش چربی خون از ۲۰ سالگی و غربالگری قند خون از ۴۵ سالگی (یا زودتر در صورت چاقی) توصیه می‌شود."
    },
    {
      question: "آیا آزمایش خون سالانه برای همه ضروری است؟",
      answer: "بله، آزمایشات پایه مانند CBC و CMP برای ارزیابی سلامت عمومی توصیه می‌شود. با افزایش سن، آزمایشات تخصصی‌تر (مانند غربالگری سرطان) نیز اضافه می‌شوند."
    },
    {
      question: "فرق بین آزمایش غربالگری و تشخیصی چیست؟",
      answer: "آزمایش غربالگری برای افراد سالم بدون علائم انجام می‌شود تا بیماری در مراحل اولیه شناسایی شود. آزمایش تشخیصی برای افراد دارای علائم جهت تأیید یا رد بیماری انجام می‌گردد."
    },
    {
      question: "غربالگری سرطان روده بزرگ از چه سنی شروع می‌شود؟",
      answer: "طبق توصیه‌های جدید، غربالگری سرطان کولورکتال از ۴۵ سالگی شروع می‌شود. در صورت سابقه خانوادگی قوی، ممکن است زودتر آغاز شود."
    },
    {
      question: "آیا می‌توان آزمایشات غربالگری را در منزل انجام داد؟",
      answer: "بله، خدمات آزمایشگاهی در منزل امکان نمونه‌گیری خون و ادرار را فراهم می‌کند. برای مشاوره و درخواست خدمات با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "تست چربی خون (لیپید پروفایل)",
      description: "راهنمای کامل آزمایش چربی خون: انواع کلسترول، تری‌گلیسیرید و تفسیر نتایج",
      image: cholesterolTestImage,
      link: "/articles/cholesterol-test",
      category: "آزمایشگاهی"
    },
    {
      title: "دیابت و پیش‌دیابت: تشخیص و پیشگیری",
      description: "علائم دیابت، روش‌های تشخیص زودهنگام و راهکارهای پیشگیری از بیماری",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "غدد و دیابت"
    },
    {
      title: "راهنمای مراقبت از سالمندان در منزل",
      description: "اصول مراقبت، پایش سلامت و خدمات پزشکی ویژه سالمندان",
      image: elderlyCareImage,
      link: "/articles/elderly-care-guide",
      category: "سالمندان"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آزمایشات و غربالگری‌های پزشکی سالانه بر اساس سن | نوید زندگی"
        description="راهنمای جامع آزمایشات و غربالگری‌های سالانه برای جوانان، میانسالان و سالمندان: چکاپ قند و چربی خون، ماموگرافی، کولونوسکوپی، تراکم استخوان و واکسیناسیون"
        keywords="آزمایش خون سالانه, غربالگری سرطان, چکاپ سالانه, آزمایش قند خون, کلسترول, ماموگرافی, کولونوسکوپی, تراکم استخوان, واکسن سالمندان"
        canonical="https://navidzendegi.com/articles/annual-screening-tests"
        ogType="article"
        publishedTime="2024-12-03"
        modifiedTime="2024-12-03"
      />
      <ArticleSchema
        title="آزمایشات و غربالگری‌های پزشکی سالانه: تفکیک بر اساس گروه‌های سنی"
        description="راهنمای جامع آزمایشات و غربالگری‌های توصیه شده سالانه برای جوانان، میانسالان و سالمندان"
        publishedTime="2024-12-03"
        modifiedTime="2024-12-03"
        image={annualScreeningImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            آزمایشات و غربالگری‌های پزشکی سالانه: تفکیک بر اساس گروه‌های سنی
          </h1>

          <img 
            src={annualScreeningImage} 
            alt="آزمایشات و غربالگری‌های پزشکی سالانه" 
            className="w-full rounded-lg mb-8"
          />

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            برنامه‌های غربالگری و آزمایشات سالانه برای افراد سالم، با توجه به عوامل خطر مرتبط با سن، متفاوت هستند. با افزایش سن، تمرکز از پیشگیری اولیه به غربالگری بیماری‌های مزمن (مانند سرطان، دیابت و <Link to="/articles/heart-palpitations" className="text-primary hover:underline">بیماری‌های قلبی</Link>) و حفظ عملکرد تغییر می‌یابد.
          </p>

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-amber-800 mb-1">هشدار مهم</p>
                <p className="text-amber-700 text-sm">
                  این مقاله صرفاً جنبه آموزشی دارد. هر برنامه غربالگری باید با نظر پزشک معالج و بر اساس سابقه پزشکی فردی تعیین شود. از خوددرمانی و تفسیر خودسرانه نتایج آزمایشات اجتناب کنید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            مقایسه آزمایشات غربالگری بر اساس گروه سنی
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-right">نوع آزمایش/غربالگری</th>
                  <th className="border border-border p-3 text-center">جوانان (۱۸-۳۰ سال)</th>
                  <th className="border border-border p-3 text-center">میانسالان (۴۰-۶۵ سال)</th>
                  <th className="border border-border p-3 text-center">سالمندان (۶۵+ سال)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">بررسی <Link to="/articles/blood-pressure-measurement" className="text-primary hover:underline">فشار خون</Link></td>
                  <td className="border border-border p-3 text-center">در هر ویزیت سالانه</td>
                  <td className="border border-border p-3 text-center">در هر ویزیت سالانه</td>
                  <td className="border border-border p-3 text-center">در هر ویزیت سالانه</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-medium">غربالگری <Link to="/articles/cholesterol-test" className="text-primary hover:underline">چربی خون</Link> (Lipid Panel)</td>
                  <td className="border border-border p-3 text-center">شروع از ۲۰ سالگی؛ هر ۴-۶ سال</td>
                  <td className="border border-border p-3 text-center">هر ۱ تا ۳ سال یکبار</td>
                  <td className="border border-border p-3 text-center">سالانه</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">غربالگری قند خون (HbA1c/فستینگ)</td>
                  <td className="border border-border p-3 text-center">از ۴۵ سالگی یا زودتر در صورت چاقی</td>
                  <td className="border border-border p-3 text-center">هر ۳ سال یکبار</td>
                  <td className="border border-border p-3 text-center">سالانه</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-medium">بررسی عملکرد تیروئید (TSH)</td>
                  <td className="border border-border p-3 text-center">بر اساس علائم بالینی</td>
                  <td className="border border-border p-3 text-center">از ۵۰ سالگی به صورت غربالگری</td>
                  <td className="border border-border p-3 text-center">غربالگری منظم</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">غربالگری سرطان پستان (ماموگرافی)</td>
                  <td className="border border-border p-3 text-center">نیاز نیست</td>
                  <td className="border border-border p-3 text-center">شروع از ۴۰-۵۰ سالگی؛ سالانه/دوسالانه</td>
                  <td className="border border-border p-3 text-center">ادامه تا سن ۷۵ سال</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-medium">غربالگری سرطان دهانه رحم (Pap Smear)</td>
                  <td className="border border-border p-3 text-center">هر ۳ سال یکبار (از ۲۵ سالگی)</td>
                  <td className="border border-border p-3 text-center">هر ۳ تا ۵ سال یکبار</td>
                  <td className="border border-border p-3 text-center">معمولاً پس از ۶۵ سال متوقف می‌شود</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">غربالگری سرطان روده بزرگ (Colonoscopy)</td>
                  <td className="border border-border p-3 text-center">نیاز نیست (مگر سابقه خانوادگی)</td>
                  <td className="border border-border p-3 text-center">شروع از ۴۵ سالگی؛ هر ۱۰ سال</td>
                  <td className="border border-border p-3 text-center">ادامه تا سن ۷۵ سال</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-medium">غربالگری سرطان پروستات (PSA)</td>
                  <td className="border border-border p-3 text-center">نیاز نیست</td>
                  <td className="border border-border p-3 text-center">شروع از ۵۰ سالگی (با مشورت پزشک)</td>
                  <td className="border border-border p-3 text-center">سالانه (تصمیم‌گیری مشترک)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">تراکم استخوان (بانوان)</td>
                  <td className="border border-border p-3 text-center">نیاز نیست</td>
                  <td className="border border-border p-3 text-center">نیاز نیست</td>
                  <td className="border border-border p-3 text-center">سالانه/دوسالانه</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-medium">غربالگری شنوایی و بینایی</td>
                  <td className="border border-border p-3 text-center">بر اساس نیاز</td>
                  <td className="border border-border p-3 text-center">بر اساس نیاز</td>
                  <td className="border border-border p-3 text-center">سالانه</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">وضعیت واکسیناسیون</td>
                  <td className="border border-border p-3 text-center">یادآور کزاز و <Link to="/articles/gardasil-vaccine" className="text-primary hover:underline">واکسن HPV</Link></td>
                  <td className="border border-border p-3 text-center">واکسن‌های فصلی و پنوموکوک</td>
                  <td className="border border-border p-3 text-center"><Link to="/articles/influenza-vaccine" className="text-primary hover:underline">آنفولانزا</Link>، پنوموکوک، زونا</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            آزمایشات روتین آزمایشگاهی (Common Routine Labs)
          </h2>

          <p className="text-muted-foreground mb-6">
            این آزمایشات معمولاً برای ارزیابی سلامت عمومی و عملکرد اندام‌ها در هر سه گروه سنی (بسته به صلاحدید پزشک، سالانه یا هر چند سال) درخواست می‌شوند:
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۱. شمارش کامل خون (Complete Blood Count - CBC)
          </h3>
          <p className="text-muted-foreground mb-4">
            ارزیابی گلبول‌های قرمز (تشخیص کم‌خونی)، گلبول‌های سفید (تشخیص عفونت و اختلالات ایمنی) و پلاکت‌ها (تشخیص اختلالات انعقادی).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۲. پنل متابولیک جامع (Comprehensive Metabolic Panel - CMP)
          </h3>
          <p className="text-muted-foreground mb-4">
            ارزیابی عملکرد کبد، کلیه‌ها، سطح الکترولیت‌ها (سدیم، پتاسیم، کلراید)، و سطح قند خون. این پنل به سرعت اختلالات متابولیک را شناسایی می‌کند.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۳. آنالیز ادرار (Urinalysis)
          </h3>
          <p className="text-muted-foreground mb-4">
            غربالگری عفونت‌های مجاری ادراری، وجود قند یا پروتئین در ادرار (نشانه‌های احتمالی <Link to="/articles/diabetes" className="text-primary hover:underline">دیابت</Link> یا بیماری کلیوی).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۴. غربالگری ویتامین D
          </h3>
          <p className="text-muted-foreground mb-4">
            بسیاری از منابع علمی غربالگری <Link to="/articles/vitamins-health" className="text-primary hover:underline">ویتامین D</Link> را به‌ویژه در مناطق کم‌آفتاب یا برای سالمندان (به دلیل ریسک پوکی استخوان) توصیه می‌کنند.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            اهمیت پایش برای سالمندان
          </h2>

          <p className="text-muted-foreground mb-4">
            در گروه سنی <Link to="/articles/elderly-care-guide" className="text-primary hover:underline">سالمندان</Link> (۶۵+ سال)، هدف از غربالگری نه تنها طول عمر، بلکه کیفیت زندگی و استقلال است. آزمایشات تخصصی مانند تراکم استخوان، واکسیناسیون زونا و پنوموکوک و غربالگری دقیق کاهش شناختی (Cognitive Screening) اهمیت مضاعف پیدا می‌کنند.
          </p>

          <p className="text-muted-foreground mb-4">
            همچنین، پایش دارویی برای جلوگیری از تداخلات دارویی و عوارض جانبی در این گروه حیاتی است. استفاده از خدمات <Link to="/services/internal-medicine" className="text-primary hover:underline">ویزیت پزشک داخلی در منزل</Link> می‌تواند روند پیگیری سلامت را تسهیل کند.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            منابع (References)
          </h2>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
            <li>U.S. Preventive Services Task Force (USPSTF) Guidelines. Screening Recommendations.</li>
            <li>American Heart Association (AHA) Guidelines. Cardiovascular Risk Assessment and Management.</li>
            <li>Centers for Disease Control and Prevention (CDC). Recommended Adult Immunization Schedule.</li>
            <li>American Geriatrics Society (AGS) Recommendations. Health Maintenance and Screening for Older Adults.</li>
            <li>Mayo Clinic. Laboratory Tests and Screening for Routine Health Checks.</li>
            <li>Harvard Health Publishing (Harvard Medical School). Which Medical Tests Should You Have, and When?</li>
            <li>National Cancer Institute (NCI). Cancer Screening Recommendations.</li>
          </ul>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-10">
            <h3 className="text-xl font-bold text-foreground mb-3">
              خدمات آزمایشگاهی در منزل
            </h3>
            <p className="text-muted-foreground mb-4">
              برای انجام آزمایشات چکاپ سالانه در منزل یا مشاوره با پزشک متخصص، با ما تماس بگیرید. تیم پزشکی نوید زندگی آماده ارائه خدمات در منزل شماست.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default AnnualScreeningTestsPage;
