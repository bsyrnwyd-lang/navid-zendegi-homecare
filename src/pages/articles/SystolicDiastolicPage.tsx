import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle } from "lucide-react";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import captoprilImage from "@/assets/captopril-medication.jpg";

const SystolicDiastolicPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "فشار سیستولیک و دیاستولیک", url: "/articles/systolic-diastolic" }
  ];

  const faqItems = [
    {
      question: "فشار خون سیستولیک (عدد اول) چیست؟",
      answer: "عدد سیستولیک نشان‌دهنده فشاری است که خون به دیواره رگ‌ها وارد می‌کند، درست زمانی که قلب منقبض می‌شود و خون را به کل بدن پمپاژ می‌کند."
    },
    {
      question: "فشار خون دیاستولیک (عدد دوم) چیست؟",
      answer: "عدد دیاستولیک نشان‌دهنده فشار موجود در رگ‌ها در زمانی است که قلب در حال استراحت است (بین دو تپش). در این زمان، قلب دوباره از خون پر می‌شود."
    },
    {
      question: "کدام عدد فشار خون مهم‌تر است؟",
      answer: "هر دو عدد مهم هستند، اما با افزایش سن، تمرکز پزشکان بیشتر روی عدد سیستولیک (اول) است. در افراد جوان، بالا بودن عدد دیاستولیک شایع‌تر است."
    },
    {
      question: "فشار خون نرمال چقدر است؟",
      answer: "فشار خون نرمال و ایده‌آل کمتر از ۱۲۰ روی ۸۰ میلی‌متر جیوه است. فشار ۱۲۰ تا ۱۲۹ روی کمتر از ۸۰ نشان‌دهنده فشار خون افزایش یافته است."
    },
    {
      question: "سندرم روپوش سفید چیست؟",
      answer: "این وضعیت زمانی اتفاق می‌افتد که فشار خون فرد در مطب پزشک به دلیل استرس بالا می‌رود اما در خانه نرمال است. اندازه‌گیری فشار خون در منزل می‌تواند این مشکل را برطرف کند."
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
      title: "هولتر فشار خون در منزل",
      description: "پایش ۲۴ ساعته فشار خون در منزل تهران و کرج",
      image: holterHomeImage,
      link: "/articles/holter-guide",
      category: "خدمات"
    },
    {
      title: "داروی کاپتوپریل",
      description: "راهنمای کامل داروی فشار خون کاپتوپریل",
      image: captoprilImage,
      link: "/articles/captopril",
      category: "دارو"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="فشار خون سیستولیک و دیاستولیک | تفاوت عدد اول و دوم | نوید زندگی"
        description="راهنمای کامل تفسیر اعداد فشار خون: تفاوت فشار سیستولیک و دیاستولیک، جدول فشار خون نرمال و پایش فشار خون در منزل تهران و کرج."
        keywords="فشار خون سیستولیک, فشار خون دیاستولیک, عدد اول فشار خون, عدد دوم فشار خون, فشار خون نرمال, اندازه گیری فشار خون"
        canonical="https://navidzendegi.com/articles/systolic-diastolic"
        ogType="article"
      />

      <ArticleSchema
        title="فشار خون بالا و پایین؛ تفاوت عدد اول و دوم (سیستولیک و دیاستولیک) چیست؟"
        description="راهنمای کامل تفسیر اعداد فشار خون بر اساس منابع معتبر پزشکی"
        publishedTime="2024-12-31"
        modifiedTime="2024-12-31"
        image={bloodPressureReadingsImage}
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              فشار خون سیستولیک و دیاستولیک؛ تفاوت عدد اول و دوم چیست؟
            </h1>
            <p className="text-muted-foreground mb-6">
              نویسنده: تیم پزشکی نوید زندگی | آخرین به‌روزرسانی: دی ۱۴۰۳
            </p>
            <img
              src={bloodPressureReadingsImage}
              alt="دستگاه فشارسنج دیجیتال - نمایش فشار سیستولیک و دیاستولیک"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </header>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              وقتی فشار خون خود را در منزل اندازه‌گیری می‌کنید، دستگاه دو عدد به شما نشان می‌دهد (مثلاً ۱۲۰ روی ۸۰). 
              بسیاری از افراد فقط به عدد اول توجه می‌کنند، اما هر دو عدد داستان متفاوتی از سلامت قلب و رگ‌های شما را روایت می‌کنند.
            </p>
            <p className="text-foreground leading-relaxed">
              مرکز نوید زندگی با ارائه خدمات پایش فشار خون و هولتر ۲۴ ساعته در منزل (تهران و کرج)، 
              به شما کمک می‌کند تا این اعداد را به درستی تفسیر کرده و ریسک‌های قلبی خود را مدیریت کنید.
            </p>
          </section>

          {/* Systolic Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">۱. فشار خون سیستولیک (عدد اول یا بالا) چیست؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              این عدد نشان‌دهنده فشاری است که خون به دیواره رگ‌ها وارد می‌کند، درست زمانی که قلب منقبض می‌شود و خون را به کل بدن پمپاژ می‌کند.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>اهمیت:</strong> این عدد نشان می‌دهد که قلب شما با چه قدرتی کار می‌کند و رگ‌های شما چقدر توانایی تحمل این فشار را دارند.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>ریسک:</strong> برای افراد بالای ۵۰ سال، بالا بودن عدد سیستولیک مهم‌ترین نشانه برای پیش‌بینی خطر سکته مغزی و بیماری‌های قلبی است، زیرا نشان‌دهنده سفت شدن رگ‌های بزرگ (تصلب شرایین) می‌باشد.</span>
              </li>
            </ul>
          </section>

          {/* Diastolic Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">۲. فشار خون دیاستولیک (عدد دوم یا پایین) چیست؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              این عدد نشان‌دهنده فشار موجود در رگ‌ها در زمانی است که قلب در حال استراحت است (بین دو تپش). در این زمان، قلب دوباره از خون پر می‌شود.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>اهمیت:</strong> این عدد نشان‌دهنده مقاومت رگ‌های کوچک‌تر بدن است.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>ریسک:</strong> بالا بودن مداوم این عدد می‌تواند به کلیه‌ها و خودِ عضله قلب آسیب بزند، زیرا قلب حتی در زمان استراحت هم تحت فشار زیادی قرار دارد.</span>
              </li>
            </ul>
          </section>

          {/* Table Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">جدول راهنمای اعداد فشار خون (طبق استاندارد AHA)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">وضعیت فشار خون</th>
                    <th className="border border-border p-3 text-right">سیستولیک (عدد بالا)</th>
                    <th className="border border-border p-3 text-right">دیاستولیک (عدد پایین)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="border border-border p-3 font-medium">نرمال و ایده‌آل</td>
                    <td className="border border-border p-3">کمتر از ۱۲۰</td>
                    <td className="border border-border p-3">کمتر از ۸۰</td>
                  </tr>
                  <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                    <td className="border border-border p-3 font-medium">فشار خون افزایش یافته</td>
                    <td className="border border-border p-3">۱۲۰ تا ۱۲۹</td>
                    <td className="border border-border p-3">کمتر از ۸۰</td>
                  </tr>
                  <tr className="bg-orange-50 dark:bg-orange-900/20">
                    <td className="border border-border p-3 font-medium">فشار خون بالا (مرحله ۱)</td>
                    <td className="border border-border p-3">۱۳۰ تا ۱۳۹</td>
                    <td className="border border-border p-3">۸۰ تا ۸۹</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="border border-border p-3 font-medium">فشار خون بالا (مرحله ۲)</td>
                    <td className="border border-border p-3">۱۴۰ یا بیشتر</td>
                    <td className="border border-border p-3">۹۰ یا بیشتر</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="border border-border p-3 font-bold text-destructive">بحران فشار خون (اورژانس)</td>
                    <td className="border border-border p-3 font-bold">۱۸۰ یا بیشتر</td>
                    <td className="border border-border p-3 font-bold">۱۲۰ یا بیشتر</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Which is more important */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">کدام عدد مهم‌تر است؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>پاسخ کوتاه:</strong> هر دو؛ اما با افزایش سن، تمرکز پزشکان بیشتر روی عدد اول (سیستولیک) است.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>در <strong>افراد جوان</strong>، بالا بودن عدد دوم (دیاستولیک) شایع‌تر است.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>در <strong>افراد مسن</strong>، رگ‌ها سفت می‌شوند و عدد اول بالا می‌رود، در حالی که عدد دوم ممکن است حتی پایین بیاید.</span>
              </li>
            </ul>
          </section>

          {/* Home measurement */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">چرا اندازه‌گیری فشار خون در منزل دقیق‌تر است؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              بسیاری از بیماران دچار «سندرم روپوش سفید» هستند؛ یعنی فشار آن‌ها در مطب پزشک به دلیل استرس بالا می‌رود 
              اما در خانه نرمال است. تیم نوید زندگی با اعزام کارشناس به منزل شما:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>فشار خون شما را در محیط آرام خانه اندازه‌گیری می‌کند.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>با استفاده از هولتر ۲۴ ساعته، میانگین فشار شما را در خواب و بیداری ثبت می‌کند.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>به شما آموزش می‌دهد که چگونه با دستگاه‌های خانگی، دقیق‌ترین عدد را ثبت کنید.</span>
              </li>
            </ul>
          </section>

          {/* Tips Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">نکات طلایی برای گرفتن فشار دقیق در خانه</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>استراحت:</strong> ۵ دقیقه قبل از تست، آرام بنشینید.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>وضعیت بدن:</strong> پاها را روی هم نیندازید و دست خود را هم‌سطح قلب روی تکیه‌گاه قرار دهید.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>زمان:</strong> فشار خون را در ساعت‌های مشخصی از روز (مثلاً صبح قبل از دارو و شب قبل از خواب) چک کنید.</span>
              </li>
            </ul>
          </section>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">هشدار مهم</h3>
                <p className="text-foreground">
                  اگر فشار خون شما به ۱۸۰/۱۲۰ یا بالاتر رسید، بلافاصله با اورژانس یا تیم نوید زندگی تماس بگیرید. 
                  این وضعیت یک بحران فشار خون است و نیاز به مداخله فوری دارد.
                </p>
              </div>
            </div>
          </div>

          {/* References Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">منابع علمی</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• American Heart Association (AHA): Understanding Blood Pressure Readings</li>
              <li>• Harvard Health: Systolic vs. diastolic blood pressure: Which matters more?</li>
              <li>• Mayo Clinic: Blood pressure test: What the numbers mean</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-lg p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              پایش فشار خون در منزل
            </h2>
            <p className="text-foreground mb-6">
              ما در نوید زندگی آماده‌ایم تا با اعزام متخصص قلب و پرستار مجرب به منزل شما، 
              علت نوسانات فشار خون شما را بررسی کنیم.
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

export default SystolicDiastolicPage;
