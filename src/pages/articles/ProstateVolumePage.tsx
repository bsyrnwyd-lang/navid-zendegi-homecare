import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOSchema from "@/components/SEOSchema";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import prostateVolumeImage from "@/assets/prostate-volume-ultrasound.jpg";

// Related article images
import echoImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import urologyImage from "@/assets/urology.jpg";

const ProstateVolumePage = () => {
  const publishDate = "2025-01-30";
  
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "حجم نرمال پروستات", url: "/articles/prostate-volume" }
  ];

  const faqs = [
    {
      question: "حجم نرمال پروستات چند سی‌سی است؟",
      answer: "حجم نرمال پروستات در مردان جوان (۲۰ تا ۳۰ سال) حدود ۲۰ تا ۲۵ سی‌سی است. با افزایش سن، این عدد به طور طبیعی افزایش می‌یابد و در افراد بالای ۵۰ سال تا ۳۵-۵۰ سی‌سی نیز طبیعی محسوب می‌شود."
    },
    {
      question: "آیا حجم پروستات ۵۰ سی‌سی خطرناک است؟",
      answer: "نه لزوماً. حجم ۵۰ سی‌سی در افراد بالای ۵۰ سال شایع است. آنچه اهمیت دارد علائم ادراری، باقی‌مانده ادرار در مثانه (PVR) و عملکرد کلیه است که باید توسط متخصص ارزیابی شود."
    },
    {
      question: "سونوگرافی پروستات در منزل چگونه انجام می‌شود؟",
      answer: "متخصص با دستگاه سونوگرافی پرتابل به منزل شما مراجعه می‌کند. ابتدا با مثانه پر سونوگرافی انجام شده، سپس بعد از ادرار کردن برای اندازه‌گیری باقی‌مانده ادرار (PVR) تکرار می‌شود."
    },
    {
      question: "چرا تکرر ادرار شبانه با درمان پروستات بهتر نمی‌شود؟",
      answer: "در برخی موارد، علت تکرر ادرار شبانه نارسایی قلبی است نه پروستات. قلبی که در طول روز ضعیف کار کرده، شب‌ها مایعات را به کلیه می‌فرستد. انجام اکو قلب می‌تواند این موضوع را مشخص کند."
    },
    {
      question: "آیا داروهای پروستات روی قلب تأثیر دارند؟",
      answer: "بله، داروهای آلفابلاکر مانند تامسولوسین می‌توانند باعث افت فشار خون و سرگیجه شوند. نصب هولتر فشار خون ۲۴ ساعته می‌تواند ایمنی مصرف این داروها را تضمین کند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      slug: "/articles/echo",
      image: echoImage
    },
    {
      title: "هولتر مانیتورینگ قلب",
      slug: "/articles/holter",
      image: holterImage
    },
    {
      title: "ویزیت متخصص اورولوژی در منزل",
      slug: "/services/urology",
      image: urologyImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="حجم نرمال پروستات چند سی‌سی است؟ | راهنمای کامل سونوگرافی | نوید زندگی"
        description="راهنمای جامع حجم نرمال پروستات بر اساس سن، تفسیر نتایج سونوگرافی، ارتباط BPH با قلب و خدمات سونوگرافی، اکو و هولتر در منزل توسط نوید زندگی."
        keywords="حجم نرمال پروستات، سونوگرافی پروستات در منزل، BPH، بزرگی خوش‌خیم پروستات، باقی‌مانده ادرار، تکرر ادرار شبانه، اکو قلب در منزل، هولتر فشار خون"
        canonical="https://navidzendegi.ir/articles/prostate-volume"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <SEOSchema
        type="article"
        title="راهنمای جامع حجم نرمال پروستات؛ اعداد سونوگرافی چه معنایی دارند؟"
        description="راهنمای کامل حجم نرمال پروستات بر اساس سن، ارتباط BPH با سلامت قلب، و خدمات سونوگرافی در منزل"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={prostateVolumeImage}
      />

      <SEOSchema
        type="faq"
        faqs={faqs}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src={prostateVolumeImage} 
                alt="سونوگرافی پروستات در منزل"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                تاریخ انتشار: ۱۱ بهمن ۱۴۰۴
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
              راهنمای جامع حجم نرمال پروستات؛ اعداد سونوگرافی چه معنایی دارند؟
            </h1>

            <p className="text-xl leading-relaxed mb-8 text-foreground">
              بسیاری از آقایان پس از انجام سونوگرافی، با دیدن اعدادی مثل ۴۰، ۵۰ یا حتی ۱۰۰ سی‌سی در برگه گزارش، دچار اضطراب می‌شوند. اولین سوالی که در ذهن شکل می‌گیرد این است: «آیا من به سرطان مبتلا شده‌ام؟». حقیقت این است که عدد حجم پروستات به تنهایی نشان‌دهنده سرطان نیست، بلکه توصیفی از ابعاد یک غده است که با افزایش سن، رفتاری متفاوت از سایر اعضای بدن دارد.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              ما در مرکز خدمات تخصصی <Link to="/" className="text-primary hover:underline">نوید زندگی</Link>، با ارائه <Link to="/services/ultrasound" className="text-primary hover:underline">سونوگرافی در منزل</Link>، این اعداد را نه به عنوان یک داده مجزا، بلکه در کنار وضعیت کلی سلامت قلب و عروق شما تفسیر می‌کنیم.
            </p>

            {/* جدول حجم پروستات */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۱. جدول حجم پروستات بر اساس رده سنی
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                پروستات تنها عضوی است که تقریباً در تمامی مردان رشد مداوم دارد. برای اینکه بدانید عدد سونوگرافی شما کجای نمودار سلامتی قرار دارد، به مقادیر استاندارد زیر توجه کنید:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-border text-right">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 font-bold">رده سنی</th>
                      <th className="border border-border p-3 font-bold">حجم تقریبی نرمال (سی‌سی)</th>
                      <th className="border border-border p-3 font-bold">وضعیت فیزیولوژیک</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">۲۰ تا ۳۰ سال</td>
                      <td className="border border-border p-3">۲۰ تا ۲۵ سی‌سی</td>
                      <td className="border border-border p-3">اندازه یک گردوی کوچک (استاندارد طلایی)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">۳۰ تا ۵۰ سال</td>
                      <td className="border border-border p-3">۲۵ تا ۳۵ سی‌سی</td>
                      <td className="border border-border p-3">شروع تغییرات خوش‌خیم (BPH)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">۵۰ تا ۷۰ سال</td>
                      <td className="border border-border p-3">۳۵ تا ۵۰ سی‌سی</td>
                      <td className="border border-border p-3">بزرگی شایع؛ نیاز به پایش علائم ادراری</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">بالای ۷۰ سال</td>
                      <td className="border border-border p-3">۵۰ تا ۷۰ سی‌سی و بالاتر</td>
                      <td className="border border-border p-3">کاملاً شایع؛ نیاز به بررسی عملکرد کلیه</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* BPH چیست */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۲. بزرگی خوش‌خیم پروستات (BPH) چیست؟
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                وقتی حجم پروستات از ۳۰ سی‌سی فراتر می‌رود، اصطلاحاً به آن BPH گفته می‌شود. این بزرگی لزوماً به معنای بدخیمی نیست. مشکل زمانی آغاز می‌شود که این غده به مجرای ادرار (میزراه) که از میان آن می‌گذرد، فشار وارد کند.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                در ویزیت‌های تخصصی نوید زندگی در منزل، ما به جای تمرکزِ صرف بر حجم، به «باقی‌مانده ادرار» (PVR) توجه می‌کنیم. اگر مثانه نتواند به خوبی تخلیه شود، ادرار به سمت کلیه‌ها پس زده شده و باعث نارسایی کلیوی می‌شود.
              </p>
            </section>

            {/* ارتباط با قلب */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۳. ارتباط استراتژیک پروستات با قلب و عروق
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                یکی از وجوه تمایز مرکز نوید زندگی، نگاه سیستمی به سلامت است. بیماری پروستات در آقایان سالمند اغلب با مشکلات قلبی گره خورده است:
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                الف) تکرر ادرار شبانه (Nocturia)؛ پروستات یا نارسایی قلب؟
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                بسیاری از بیماران برای تکرر ادرار شبانه داروهای پروستات مصرف می‌کنند، اما بهبودی حاصل نمی‌شود. علت ممکن است نارسایی قلبی باشد؛ قلبی که در طول روز قدرت کافی برای به جریان انداختن خون را ندارد، در شب هنگام دراز کشیدن، مایعات تجمع یافته در پاها را به سمت کلیه می‌فرستد. ما با انجام <Link to="/articles/echo" className="text-primary hover:underline">اکو در منزل</Link>، قدرت قلب شما را می‌سنجیم تا ریشه واقعی تکرر ادرار مشخص شود.
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                ب) خطر افت فشار خون با داروهای ارولوژی
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                داروهای رایج پروستات مانند تامسولوسین (Tamsulosin) یا ترازوسین، عروق را باز می‌کنند. این کار می‌تواند باعث افت فشار خون ناگهانی (Orthostatic Hypotension) و زمین‌خوردن بیمار شود.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>راهکار ما:</strong> نصب <Link to="/articles/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته</Link> همزمان با شروع این داروها، به ما نشان می‌دهد که آیا فشار خون شما در طول شبانه‌روز در محدوده ایمن باقی می‌ماند یا خیر.
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                ج) آریتمی قلبی ناشی از داروهای ضد‌احتقان
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                برخی داروهایی که برای علائم ادراری یا سرماخوردگی در بیماران پروستاتی تجویز می‌شود، می‌تواند باعث تپش قلب شود. با خدمات <Link to="/articles/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ما امنیت ریتم قلب شما را تضمین می‌کنیم.
              </p>
            </section>

            {/* چرا سونوگرافی در منزل */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۴. چرا سونوگرافی ارولوژی در منزل «نوید زندگی» دقیق‌تر است؟
              </h2>
              
              <p className="text-lg leading-relaxed mb-4">
                انجام سونوگرافی پروستات و مثانه نیازمند آمادگی خاصی است:
              </p>

              <ul className="space-y-4 text-lg mb-6 mr-6">
                <li className="leading-relaxed">
                  <strong>مثانه پر:</strong> در مراکز درمانی، بیمار باید ساعت‌ها با مثانه پر در صف بماند که باعث اسپاسم شدید و درد می‌شود. در منزل، متخصص ما دقیقاً زمانی که شما احساس پر بودن مثانه دارید، تست را شروع می‌کند.
                </li>
                <li className="leading-relaxed">
                  <strong>اندازه‌گیری دقیق PVR:</strong> برای سنجش میزان تخلیه، بلافاصله بعد از ادرار کردن باید سونوگرافی تکرار شود. در منزل این فرآیند بدون استرس و با دقت ۱۰۰٪ انجام می‌شود.
                </li>
                <li className="leading-relaxed">
                  <strong>پکیج کامل تشخیصی:</strong> در یک جلسه، همزمان با سونوگرافی، می‌توانیم آزمایش خون PSA، <Link to="/services/ecg" className="text-primary hover:underline">نوار قلب</Link> و اکو را انجام دهیم تا چک‌آپ شما کامل شود.
                </li>
              </ul>
            </section>

            {/* علائم هشداردهنده */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۵. علائمی که فراتر از یک عدد ساده هستند
              </h2>
              
              <p className="text-lg leading-relaxed mb-4">
                اگر حجم پروستات شما بالاست و علائم زیر را دارید، تست‌های پاراکلینیکی ما (هولتر و اکو) را جدی بگیرید:
              </p>

              <ul className="space-y-3 text-lg mb-6 mr-6">
                <li>• جریان ادرار ضعیف یا منقطع</li>
                <li>• نیاز به زور زدن برای شروع ادرار</li>
                <li>• بیدار شدن بیش از ۲ بار در شب</li>
                <li>• احساس تپش قلب همزمان با دشواری در دفع</li>
              </ul>
            </section>

            {/* هشدار خوددرمانی */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار مهم</h3>
                  <p className="text-foreground">
                    از مصرف خودسرانه داروهای پروستات بدون مشورت پزشک خودداری کنید. این داروها می‌توانند تداخلات خطرناکی با داروهای قلبی و فشار خون داشته باشند. برای ارزیابی کامل با <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
                  </p>
                </div>
              </div>
            </div>

            {/* نتیجه‌گیری */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                نتیجه‌گیری
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                حجم نرمال پروستات حدود ۲۵ سی‌سی است، اما عدد ۵۰ یا ۶۰ سی‌سی به تنهایی ترسناک نیست. آنچه اهمیت دارد، عملکرد هماهنگ قلب، کلیه و پروستات است. مرکز نوید زندگی با آوردن پیشرفته‌ترین تجهیزات سونوگرافی، هولتر و اکو به منزل، تصویری کامل و علمی از سلامت شما ارائه می‌دهد تا از جراحی‌های غیرضروری یا عوارض دارویی پیشگیری شود.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                برای سونوگرافی پروستات و مثانه در منزل تماس بگیرید
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                پکیج کامل شامل سونوگرافی، اکو قلب و هولتر فشار خون
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-bold"
              >
                <Phone className="ml-2 h-6 w-6" />
                09386117912
              </a>
            </section>

            {/* منابع */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-foreground">
                منابع معتبر علمی
              </h2>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• American Urological Association (AUA): Guideline on Management of Benign Prostatic Hyperplasia</li>
                <li>• European Association of Urology (EAU): Guidelines on Male Lower Urinary Tract Symptoms</li>
                <li>• Mayo Clinic: Prostate Enlargement: Symptoms, Causes, and Home Monitoring</li>
                <li>• Journal of the American Heart Association (JAHA): The impact of alpha-blockers on cardiovascular stability in elderly</li>
              </ul>
            </section>
          </article>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Articles */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link 
                  key={index} 
                  to={article.slug}
                  className="group block"
                >
                  <div className="rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default ProstateVolumePage;
