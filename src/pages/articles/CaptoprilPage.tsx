import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle } from "lucide-react";
import captoprilImage from "@/assets/captopril-medication.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";

const CaptoprilPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "داروی کاپتوپریل", url: "/articles/captopril" }
  ];

  const faqItems = [
    {
      question: "کاپتوپریل چگونه فشار خون را کاهش می‌دهد؟",
      answer: "کاپتوپریل با مهار تولید آنژیوتانسین II باعث گشاد شدن رگ‌های خونی می‌شود. این کار فشار خون را کاهش داده و بار کاری قلب را سبک‌تر می‌کند."
    },
    {
      question: "چرا با مصرف کاپتوپریل سرفه خشک می‌کنم؟",
      answer: "کاپتوپریل باعث تجمع ماده‌ای به نام برادیکینین در ریه‌ها می‌شود که پایانه‌های عصبی را تحریک کرده و سرفه خشک ایجاد می‌کند. در صورت آزاردهنده بودن، پزشک می‌تواند دارو را تغییر دهد."
    },
    {
      question: "بهترین زمان مصرف کاپتوپریل چه موقعی است؟",
      answer: "برای جذب حداکثری، کاپتوپریل را ۱ ساعت قبل از غذا با معده خالی مصرف کنید. اولین دوز را شب‌ها قبل از خواب بخورید تا از سرگیجه جلوگیری شود."
    },
    {
      question: "آیا مصرف کاپتوپریل در بارداری مجاز است؟",
      answer: "خیر، این دارو دارای هشدار جعبه سیاه FDA است و مصرف آن در بارداری می‌تواند باعث آسیب‌های شدید و مرگ جنین شود."
    },
    {
      question: "چه علائمی نشان‌دهنده عارضه خطرناک کاپتوپریل است؟",
      answer: "تورم لب‌ها و زبان (آنژیوادم) یک عارضه خطرناک است که نیاز به مراجعه فوری به اورژانس دارد. سرفه خشک و طعم فلزی دهان معمولاً خطرناک نیستند."
    }
  ];

  const relatedArticles = [
    {
      title: "کنترل فشار خون بالا",
      description: "راهنمای کامل مدیریت فشار خون بالا در منزل",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure",
      category: "قلب و عروق"
    },
    {
      title: "تپش قلب",
      description: "علل و درمان تپش قلب و ضربان نامنظم",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    },
    {
      title: "هولتر فشار خون در منزل",
      description: "پایش ۲۴ ساعته فشار خون در منزل تهران و کرج",
      image: holterHomeImage,
      link: "/articles/holter-guide",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="داروی کاپتوپریل | کاربردها، عوارض و نکات مصرف | نوید زندگی"
        description="راهنمای کامل داروی کاپتوپریل: کنترل فشار خون، نارسایی قلبی، عوارض جانبی و نکات حیاتی مصرف. ویزیت متخصص قلب در منزل تهران و کرج."
        keywords="کاپتوپریل, داروی فشار خون, مهارکننده ACE, درمان نارسایی قلبی, عوارض کاپتوپریل, سرفه خشک"
        canonical="https://navidzendegi.com/articles/captopril"
        ogType="article"
      />

      <ArticleSchema
        title="راهنمای جامع داروی کاپتوپریل؛ از کنترل اضطراری فشار خون تا مدیریت نارسایی قلبی"
        description="راهنمای کامل داروی کاپتوپریل بر اساس منابع معتبر پزشکی"
        publishedTime="2024-12-31"
        modifiedTime="2024-12-31"
        image={captoprilImage}
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              راهنمای جامع داروی کاپتوپریل؛ از کنترل اضطراری فشار خون تا مدیریت نارسایی قلبی
            </h1>
            <p className="text-muted-foreground mb-6">
              نویسنده: تیم پزشکی نوید زندگی | آخرین به‌روزرسانی: دی ۱۴۰۳
            </p>
            <img
              src={captoprilImage}
              alt="داروی کاپتوپریل - قرص کنترل فشار خون"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </header>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">هشدار مهم</h3>
                <p className="text-foreground">
                  مصرف خودسرانه کاپتوپریل می‌تواند باعث افت شدید فشار خون و عوارض جدی شود. 
                  این دارو حتماً باید تحت نظر پزشک متخصص تجویز و مصرف شود.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              کاپتوپریل (Captopril) یکی از حیاتی‌ترین داروهای دسته «مهارکننده‌های ACE» است که به عنوان خط اول درمان 
              برای کنترل فشار خون و محافظت از قلب شناخته می‌شود. این دارو نه تنها رگ‌های خونی را شل می‌کند، 
              بلکه بار کاری قلب را کاهش داده و از کلیه‌ها در برابر آسیب‌های ناشی از دیابت محافظت می‌کند.
            </p>
            <p className="text-foreground leading-relaxed">
              تیم متخصص نوید زندگی با ارائه خدمات ویزیت متخصص قلب و پایش فشار خون در منزل، به شما کمک می‌کند 
              تا این داروی حساس را با بیشترین دقت و کمترین عارضه مصرف کنید.
            </p>
          </section>

          {/* Mechanism Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">کاپتوپریل چگونه در بدن عمل می‌کند؟</h2>
            <p className="text-foreground mb-4">
              بر اساس منابع معتبر پزشکی نظیر NCBI، این دارو با مهار تولید ماده‌ای به نام «آنژیوتانسین II» کار می‌کند. 
              این ماده مسئول تنگ کردن رگ‌های خونی است.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>گشاد شدن عروق:</strong> با مسدود شدن این ماده، رگ‌ها گشاد شده و خون با فشار کمتری در بدن جریان می‌یابد.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>سرعت عمل بالا:</strong> کاپتوپریل یکی از سریع‌ترین داروهای خوراکی در کلاس خود است و به همین دلیل در موارد اورژانسی انتخاب اول پزشکان است.</span>
              </li>
            </ul>
          </section>

          {/* Usage Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">موارد مصرف اصلی و کاربردهای اورژانسی</h2>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>پرفشاری خون (Hypertension):</strong> مدیریت نوسانات شدید فشار خون.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>استفاده زیرزبانی در بحران‌ها:</strong> در مواقعی که فشار خون به طور ناگهانی جهش می‌کند، استفاده زیرزبانی کاپتوپریل می‌تواند در عرض ۱۵ تا ۳۰ دقیقه فشار را کاهش دهد.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>پس از سکته قلبی:</strong> جلوگیری از تغییر شکل غیرطبیعی قلب و افزایش طول عمر بیمار.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>نارسایی قلبی:</strong> کاهش تنگی نفس و بهبود توانایی حرکت در بیماران قلبی.</span>
              </li>
            </ul>
          </section>

          {/* Cough Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">چرا برخی بیماران با مصرف کاپتوپریل دچار «سرفه خشک» می‌شوند؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              کاپتوپریل باعث تجمع ماده‌ای به نام برادیکینین در ریه‌ها می‌شود. این ماده پایانه‌های عصبی ریه را 
              تحریک کرده و منجر به سرفه‌های مداوم، خشک و بدون خلط می‌شود.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-foreground">
                <strong>نکته تخصصی:</strong> اگر دچار این عارضه شدید، هرگز دارو را خودسرانه قطع نکنید. 
                متخصصین ما در منزل می‌توانند با بررسی وضعیت شما، دارو را به دسته‌ای دیگر (مثل لوزارتان) تغییر دهند که این عارضه را ندارد.
              </p>
            </div>
          </section>

          {/* Warnings Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">نکات حیاتی و هشدارهای امنیتی</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">۱. پدیده «دوز اول»</h3>
                <p className="text-foreground">
                  در اولین نوبت مصرف، ممکن است فشار خون بیمار به طور ناگهانی افت کند. به همین دلیل توصیه می‌شود 
                  اولین دوز را شب‌ها قبل از خواب مصرف کنید تا از سرگیجه و خطر زمین‌خوردن جلوگیری شود.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">۲. پایش کلیه‌ها و پتاسیم</h3>
                <p className="text-foreground mb-2">
                  کاپتوپریل دفع پتاسیم را کاهش می‌دهد. بالا رفتن سطح پتاسیم خون می‌تواند باعث اختلال در ضربان قلب شود.
                </p>
                <p className="text-primary font-medium">
                  خدمات نوید زندگی: ما با انجام آزمایش خون در منزل، سطح پتاسیم و عملکرد کلیه (کراتینین) شما را به صورت دوره‌ای چک می‌کنیم.
                </p>
              </div>

              <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg">
                <h3 className="text-xl font-bold text-destructive mb-3">۳. ممنوعیت در بارداری</h3>
                <p className="text-foreground">
                  این دارو دارای هشدار جعبه سیاه (Black Box Warning) است. مصرف آن در دوران بارداری 
                  می‌تواند باعث آسیب‌های شدید و مرگ جنین شود.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">۴. تداخلات غذایی و دارویی</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• <strong>معده خالی:</strong> برای جذب حداکثری، کاپتوپریل را ۱ ساعت قبل از غذا مصرف کنید.</li>
                  <li>• <strong>پرهیز از نمک رژیمی:</strong> اکثر نمک‌های رژیمی حاوی پتاسیم هستند و مصرف همزمان آن‌ها با این دارو خطرناک است.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">مقایسه سریع: چه زمانی نگران شویم؟</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">علامت</th>
                    <th className="border border-border p-3 text-right">نوع عارضه</th>
                    <th className="border border-border p-3 text-right">اقدام لازم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">سرفه خشک</td>
                    <td className="border border-border p-3">شایع و غیرخطرناک</td>
                    <td className="border border-border p-3">مشورت با پزشک برای تعویض دارو</td>
                  </tr>
                  <tr className="bg-destructive/5">
                    <td className="border border-border p-3 font-bold">تورم لب‌ها و زبان</td>
                    <td className="border border-border p-3 text-destructive font-bold">آنژیوادم (خطرناک)</td>
                    <td className="border border-border p-3">تماس فوری با اورژانس یا تیم نوید زندگی</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">طعم فلزی در دهان</td>
                    <td className="border border-border p-3">موقت و گذرا</td>
                    <td className="border border-border p-3">ادامه مصرف دارو</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">سرگیجه شدید موقع بلند شدن</td>
                    <td className="border border-border p-3">افت فشار وضعیتی</td>
                    <td className="border border-border p-3">نشستن سریع و مصرف دوز اول در شب</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Navid Zendegi Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">چرا مدیریت فشار خون با «نوید زندگی»؟</h2>
            <p className="text-foreground mb-4">
              در کلان‌شهرهایی مثل تهران و کرج، جابه‌جایی بیمار فشار خونی در ترافیک می‌تواند خطرناک باشد. 
              ما با ارائه خدمات زیر، امنیت شما را تضمین می‌کنیم:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>هولتر فشار خون ۲۴ ساعته:</strong> برای بررسی دقیق اثر کاپتوپریل در تمام طول شبانه‌روز.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>ویزیت متخصص قلب در منزل:</strong> تنظیم دقیق دوز دارو بر اساس وضعیت بالینی شما.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>تزریقات و مراقبت‌های اضطراری:</strong> مدیریت بحران‌های فشار خون در محیط امن خانه.</span>
              </li>
            </ul>
          </section>

          {/* References Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">منابع علمی</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Mayo Clinic: Captopril Oral Route - Precautions and Side Effects</li>
              <li>• American Heart Association (AHA): Understanding ACE Inhibitors</li>
              <li>• NCBI: Clinical Pharmacology of Captopril</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-lg p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              پایش فشار خون و مشاوره دارویی در منزل
            </h2>
            <p className="text-foreground mb-6">
              تیم متخصص نوید زندگی آماده است تا با تجهیزات کامل در کنار شما باشد.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </section>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default CaptoprilPage;
