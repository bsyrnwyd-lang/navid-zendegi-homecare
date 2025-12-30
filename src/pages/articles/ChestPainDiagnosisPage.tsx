import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle } from "lucide-react";
import chestPainImage from "@/assets/chest-pain-diagnosis.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import heartAttackImage from "@/assets/cardiology-home-visit.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const ChestPainDiagnosisPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تفاوت درد قلبی، عضلانی و عصبی", url: "/articles/chest-pain-diagnosis" }
  ];

  const faqItems = [
    {
      question: "چطور بفهمم درد قفسه سینه‌ام قلبی است یا عضلانی؟",
      answer: "درد قلبی معمولاً حالت فشار و سنگینی دارد و با فشار دادن انگشت تغییر نمی‌کند. درد عضلانی تیز و نقطه‌ای است و با لمس یا حرکت بدتر می‌شود."
    },
    {
      question: "آیا درد قفسه سینه همیشه خطرناک است؟",
      answer: "خیر، بسیاری از دردهای قفسه سینه عضلانی یا ناشی از استرس هستند. اما هر دردی که با تعریق سرد، تنگی نفس یا انتشار به بازو همراه باشد باید جدی گرفته شود."
    },
    {
      question: "درد قلبی چند دقیقه طول می‌کشد؟",
      answer: "درد آنژین معمولاً ۵ تا ۲۰ دقیقه طول می‌کشد. اگر درد بیش از ۲۰ دقیقه ادامه داشت، ممکن است سکته قلبی باشد و نیاز به اقدام فوری است."
    },
    {
      question: "آیا استرس می‌تواند درد قفسه سینه ایجاد کند؟",
      answer: "بله، حملات پانیک و اضطراب می‌توانند دردی شبیه سکته قلبی ایجاد کنند که با آرام شدن فروکش می‌کند."
    },
    {
      question: "چه تستی برای تشخیص درد قلبی لازم است؟",
      answer: "نوار قلب (ECG) و اکوکاردیوگرافی دو تست اصلی هستند که می‌توانند در منزل انجام شوند و وضعیت قلب را مشخص کنند."
    }
  ];

  const relatedArticles = [
    {
      title: "نوار قلب (ECG) چیست؟",
      description: "راهنمای کامل نحوه انجام و تحلیل نوار قلب در منزل",
      image: ecgHomeImage,
      link: "/articles/ecg-guide",
      category: "قلب و عروق"
    },
    {
      title: "علائم سکته قلبی",
      description: "علائم هشداردهنده سکته قلبی و اقدامات فوری",
      image: heartAttackImage,
      link: "/articles/heart-attack-symptoms",
      category: "قلب و عروق"
    },
    {
      title: "تپش قلب",
      description: "علل و درمان تپش قلب و ضربان نامنظم",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تفاوت درد قلبی، عضلانی و عصبی قفسه سینه | راهنمای تشخیص فوری | نوید زندگی"
        description="چگونه درد قلبی را از درد عضلانی و عصبی تشخیص دهیم؟ راهنمای علمی تفاوت دردهای قفسه سینه با خدمات نوار قلب و اکو در منزل تهران و کرج."
        keywords="درد قفسه سینه, درد قلبی, درد عضلانی سینه, درد عصبی, آنژین, سکته قلبی, تپش قلب, نوار قلب در منزل, اکو قلب, تهران, کرج"
        canonical="https://navidzendegi.com/articles/chest-pain-diagnosis"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
      />
      
      <ArticleSchema
        title="تفاوت درد قلبی، عضلانی و عصبی در یک نگاه"
        description="راهنمای تشخیص فوری انواع درد قفسه سینه و خدمات نوار قلب در منزل"
        publishedTime="2024-12-30"
        modifiedTime="2024-12-30"
        image={chestPainImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              تفاوت درد قلبی، عضلانی و عصبی در یک نگاه
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              راهنمای تشخیص فوری با خدمات نوار قلب و اکو در منزل تهران و کرج
            </p>
            <img 
              src={chestPainImage} 
              alt="تشخیص درد قفسه سینه توسط پزشک" 
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </header>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-foreground leading-relaxed mb-4">
              درد در ناحیه قفسه سینه همیشه به معنای مشکل قلبی نیست، اما همیشه باید جدی گرفته شود. تشخیص تفاوت بین درد قلبی، درد عصبی و درد عضلانی قفسه سینه یکی از حیاتی‌ترین دانش‌هایی است که هر فرد باید داشته باشد.
            </p>
            <p className="text-foreground leading-relaxed">
              مرکز نوید زندگی با ارائه خدمات نوار قلب و اکو در منزل (تهران و کرج)، به شما کمک می‌کند تا در کمترین زمان و بدون استرس، علت دقیق درد خود را بیابید.
            </p>
          </section>

          {/* Cardiac Pain */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">۱. درد قلبی (آنژین یا سکته قلبی)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              درد قلبی معمولاً به دلیل کاهش جریان خون به عضله قلب رخ می‌دهد. این درد لزوماً یک «درد» تیز نیست، بلکه بیشتر شبیه به یک فشار یا سنگینی است.
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground mr-4">
              <li><strong>احساس درد:</strong> فشار، سنگینی، انگار وزنه سنگینی روی سینه گذاشته شده یا دست غول‌آسایی سینه را می‌فشارد</li>
              <li><strong>محل درد:</strong> مرکز یا سمت چپ قفسه سینه؛ اما ممکن است به فک، دندان‌ها، گردن، پشت و بازوی چپ نیز منتشر شود</li>
              <li><strong>عوامل تحریک‌کننده:</strong> فعالیت بدنی، پله بالا رفتن یا استرس شدید</li>
              <li><strong>علائم همراه:</strong> تعریق سرد، حالت تهوع، تنگی نفس و سرگیجه</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4 bg-muted p-4 rounded-lg">
              <strong>نکته کلیدی:</strong> این درد معمولاً با فشار دادن ناحیه با انگشت تغییر نمی‌کند و با استراحت (در موارد آنژین پایدار) بهبود می‌یابد.
            </p>
          </section>

          {/* Muscular Pain */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">۲. درد عضلانی و اسکلتی (دیواره قفسه سینه)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              این نوع درد معمولاً ناشی از التهاب مفاصل بین دنده‌ها، کشیدگی عضلات سینه یا ضربه است.
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground mr-4">
              <li><strong>احساس درد:</strong> معمولاً تیز و نقطه‌ای است</li>
              <li><strong>محل درد:</strong> در یک نقطه خاص متمرکز است</li>
              <li><strong>عوامل تحریک‌کننده:</strong> با حرکت دادن دست، چرخاندن کمر یا سرفه کردن تشدید می‌شود</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4 bg-muted p-4 rounded-lg">
              <strong>ویژگی اصلی:</strong> اگر با انگشت روی قسمتی که درد می‌کند فشار دهید و درد بیشتر شود، به احتمال زیاد درد عضلانی یا التهاب غضروف دنده (کاستوکندریت) است، نه درد قلبی.
            </p>
          </section>

          {/* Nerve Pain */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">۳. درد عصبی و ناشی از اضطراب (پانیک)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              استرس و حملات پانیک می‌توانند دردی را شبیه به سکته قلبی شبیه‌سازی کنند. این درد معمولاً با ضربان قلب بالا و تنفس تند همراه است.
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground mr-4">
              <li><strong>احساس درد:</strong> تیر کشیدن‌های لحظه‌ای و ناگهانی (مانند نیش زنبور یا برق‌گرفتگی)</li>
              <li><strong>مدت زمان:</strong> یا بسیار کوتاه است (چند ثانیه) یا به صورت مداوم و مبهم برای ساعت‌ها ادامه دارد</li>
              <li><strong>علائم همراه:</strong> لرزش دست، احساس گزگز در انگشتان، ترس از مرگ و تپش قلب شدید</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4 bg-muted p-4 rounded-lg">
              <strong>ویژگی اصلی:</strong> معمولاً با تنفس عمیق یا تغییر موقعیت بدن تغییر نمی‌کند، اما با آرام شدن ذهن، درد فروکش می‌کند.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">جدول مقایسه سریع (برای تشخیص در لحظه)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">ویژگی</th>
                    <th className="border border-border p-3 text-right">درد قلبی</th>
                    <th className="border border-border p-3 text-right">درد عضلانی</th>
                    <th className="border border-border p-3 text-right">درد عصبی/اضطراب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">نوع احساس</td>
                    <td className="border border-border p-3">فشار و سنگینی مبهم</td>
                    <td className="border border-border p-3">تیز و سوزنی</td>
                    <td className="border border-border p-3">تیر کشیدن لحظه‌ای</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">انتشار درد</td>
                    <td className="border border-border p-3">به فک، بازو و پشت</td>
                    <td className="border border-border p-3">معمولاً ثابت در یک نقطه</td>
                    <td className="border border-border p-3">متغیر در کل سینه</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">واکنش به لمس</td>
                    <td className="border border-border p-3">با فشار دادن تغییر نمی‌کند</td>
                    <td className="border border-border p-3">با فشار دست بدتر می‌شود</td>
                    <td className="border border-border p-3">تأثیری ندارد</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">تنگی نفس</td>
                    <td className="border border-border p-3">دارد (شدید)</td>
                    <td className="border border-border p-3">معمولاً ندارد</td>
                    <td className="border border-border p-3">دارد (تند تند نفس زدن)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">عامل محرک</td>
                    <td className="border border-border p-3">فعالیت بدنی و ورزش</td>
                    <td className="border border-border p-3">حرکت بدن و دست</td>
                    <td className="border border-border p-3">استرس و فشارهای روانی</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Warning Signs */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">چه زمانی باید فوراً تماس بگیرید؟</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>دردی که به فک یا بازوی چپ می‌زند</li>
                  <li>دردی که همراه با عرق سرد و حالت تهوع است</li>
                  <li>سنگینی قفسه سینه که بیش از ۵ دقیقه طول کشیده است</li>
                  <li>دردی که در هنگام راه رفتن شروع شده و با نشستن بهتر می‌شود</li>
                </ul>
                <p className="mt-4 font-semibold">
                  از خوددرمانی خودداری کنید و فوراً با پزشک تماس بگیرید.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">خدمات تخصصی ما در منزل شما (تهران و کرج)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              ما در نوید زندگی می‌دانیم که انتقال بیمار مشکوک به سکته قلبی به بیمارستان در ترافیک تهران چقدر خطرناک است. متخصصین ما با تجهیزات کامل شامل نوار قلب (ECG) و اکوکاردیوگرافی پرتابل به منزل شما می‌آیند تا در کمتر از یک ساعت، تکلیف سلامت قلب شما روشن شود.
            </p>
          </section>

          {/* References */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">منابع علمی</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>Mayo Clinic: Chest pain - Symptoms and causes</li>
              <li>Harvard Health: What's that chest pain?</li>
              <li>American Heart Association: Warning Signs of a Heart Attack</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-lg p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">نوید زندگی؛ چون هر ثانیه برای قلب شما حیاتی است</h2>
            <p className="text-foreground leading-relaxed mb-6">
              اگر نگران درد قفسه سینه هستید، منتظر نمانید. تیم ما ۲۴ ساعته آماده اعزام به منزل شما در تهران و کرج است.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
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

export default ChestPainDiagnosisPage;
