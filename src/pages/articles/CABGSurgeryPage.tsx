import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import cabgImage from "@/assets/cabg-surgery.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import cardiacRehabImage from "@/assets/cardiac-rehab-exercise.jpg";

const CABGSurgeryPage = () => {
  const faqs = [
    {
      question: "جراحی بای‌پس قلب چند ساعت طول می‌کشد؟",
      answer: "جراحی بای‌پس قلب معمولاً ۴ تا ۶ ساعت طول می‌کشد، اما بسته به تعداد رگ‌هایی که باید بای‌پس شوند و شرایط بیمار ممکن است بیشتر یا کمتر باشد."
    },
    {
      question: "آیا بعد از بای‌پس می‌توان زندگی عادی داشت؟",
      answer: "بله، اکثر بیماران پس از ۲ تا ۳ ماه به زندگی عادی برمی‌گردند. رعایت رژیم غذایی سالم، ورزش منظم و مصرف داروها برای موفقیت طولانی‌مدت ضروری است."
    },
    {
      question: "تفاوت بای‌پس با استنت چیست؟",
      answer: "استنت یک فنر کوچک است که در محل تنگی رگ قرار می‌گیرد، در حالی که بای‌پس یک مسیر جدید از رگ‌های خود بیمار ایجاد می‌کند. بای‌پس برای گرفتگی‌های متعدد و پیچیده مناسب‌تر است."
    },
    {
      question: "چه مدت بعد از بای‌پس می‌توان رانندگی کرد؟",
      answer: "معمولاً ۴ تا ۶ هفته پس از جراحی و با تأیید پزشک می‌توانید رانندگی کنید. استخوان جناغ سینه باید به اندازه کافی جوش بخورد."
    },
    {
      question: "آیا نوید زندگی خدمات مراقبتی پس از بای‌پس ارائه می‌دهد؟",
      answer: "بله، تیم نوید زندگی خدمات جامعی شامل هولتر ریتم، اکوکاردیوگرافی، فیزیوتراپی تنفسی، پانسمان زخم و آزمایش خون در منزل ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "خدمات هولتر ریتم قلب در منزل",
      description: "نصب و تفسیر هولتر ۲۴ ساعته توسط متخصصین در منزل شما",
      image: holterImage,
      link: "/services/holter",
      category: "خدمات قلب"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "انجام اکو قلب با دستگاه پرتابل در محیط امن خانه",
      image: echoHomeImage,
      link: "/services/echo-ecg",
      category: "خدمات قلب"
    },
    {
      title: "بازتوانی قلبی و فیزیوتراپی",
      description: "برنامه ورزشی تخصصی برای بیماران قلبی در منزل",
      image: cardiacRehabImage,
      link: "/articles/cardiac-rehab",
      category: "بازتوانی"
    }
  ];

  const publishDate = "۱۴۰۴/۱۰/۱۶";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="جراحی بای‌پس قلب (CABG) | راهنمای کامل و مراقبت در منزل | نوید زندگی"
        description="راهنمای جامع جراحی بای‌پس عروق کرونر (CABG): اندیکاسیون‌ها، انواع پیوند، روش‌های جراحی و مراقبت‌های تخصصی پس از عمل در منزل تهران و کرج"
        keywords="بای‌پس قلب, جراحی CABG, بای‌پس عروق کرونر, مراقبت پس از بای‌پس, هولتر در منزل, اکو در منزل, نوید زندگی"
        canonical="https://navidzendegi.com/articles/cabg-surgery"
        ogType="article"
      />

      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">خانه</Link>
              <span>/</span>
              <Link to="/articles" className="hover:text-primary">مقالات</Link>
              <span>/</span>
              <span>جراحی بای‌پس قلب</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              دانشنامه کامل جراحی بای‌پس قلب (CABG)؛ از اتاق عمل تا بازیابی کامل در منزل
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: {publishDate}</p>
          </header>

          <img 
            src={cabgImage} 
            alt="جراحی بای‌پس قلب CABG" 
            className="w-full rounded-lg mb-8 shadow-md"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            
            <p className="text-lg leading-relaxed mb-6">
              جراحی بای‌پس عروق کرونر یا <strong>CABG</strong> (مخفف Coronary Artery Bypass Grafting)، نه یک جراحی ساده، بلکه یک بازسازی مهندسی در حیاتی‌ترین عضو بدن است. زمانی که رگ‌های تغذیه‌کننده قلب دچار انسدادهای طولانی و سخت می‌شوند، استنت (فنر) دیگر پاسخگو نیست. در این زمان، جراحان با ایجاد مسیرهای جانبی، خون‌رسانی به قلب را تضمین می‌کنند.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              مرکز <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با درک حساسیت‌های این دوران، تمامی مراقبت‌های فوق‌تخصصی پس از جراحی را به محیط امن خانه شما در تهران و کرج می‌آورد.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۱. چرا به جراحی بای‌پس نیاز داریم؟ (اندیکاسیون‌های علمی)</h2>
            
            <p className="mb-4">
              برخلاف آنژیوپلاستی که برای گرفتگی‌های نقطه‌ای است، CABG معمولاً در موارد زیر انتخاب اول است:
            </p>

            <p className="mb-3">
              <strong>درگیری سه رگ اصلی (3VD):</strong> زمانی که هر سه شریان اصلی قلب دچار انسداد شده باشند.
            </p>
            <p className="mb-3">
              <strong>تنگی شریان اصلی چپ (Left Main):</strong> خطرناک‌ترین نوع گرفتگی که خون‌رسانی به کل بطن چپ را تهدید می‌کند.
            </p>
            <p className="mb-3">
              <strong>دیابت:</strong> تحقیقات نشان داده بیماران دیابتی با گرفتگی‌های متعدد، نتایج بسیار بهتری از جراحی بای‌پس نسبت به استنت می‌گیرند.
            </p>
            <p className="mb-6">
              <strong>نارسایی عضله قلب:</strong> وقتی پمپاژ قلب ضعیف شده و نیاز به بازسازی کامل خون‌رسانی دارد.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۲. کالبدشکافی پیوندها؛ رگ‌ها از کجا می‌آیند؟</h2>
            
            <p className="mb-4">
              جراح از رگ‌های خود بیمار برای ایجاد مسیر جدید استفاده می‌کند. انتخاب نوع رگ در ماندگاری عمل نقش کلیدی دارد:
            </p>

            <p className="mb-3">
              <strong>شریان پستانی داخلی (LIMA):</strong> این رگ «استاندارد طلایی» جراحی قلب است. از داخل قفسه سینه جدا شده و به رگ اصلی قلب وصل می‌شود. ماندگاری این پیوند بالای ۲۰ سال است.
            </p>
            <p className="mb-3">
              <strong>ورید صافن (از پا):</strong> پرکاربردترین رگ برای بای‌پس‌های دوم، سوم و چهارم. به دلیل ماهیت وریدی، ممکن است در درازمدت دوباره تنگ شود، لذا کنترل چربی خون در این بیماران حیاتی است.
            </p>
            <p className="mb-6">
              <strong>شریان رادیال (از مچ دست):</strong> لوله‌ای قطورتر و مقاوم‌تر از ورید پا، که برای برخی بیماران جوان‌تر ترجیح داده می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۳. روش‌های مدرن جراحی: با پمپ یا بدون پمپ؟</h2>
            
            <p className="mb-3">
              <strong>روش کلاسیک (On-Pump):</strong> قلب توسط داروهای خاص متوقف شده و دستگاه ریه-قلب مصنوعی وظیفه گردش خون را به عهده می‌گیرد. این روش دقت بسیار بالایی برای جراح فراهم می‌کند.
            </p>
            <p className="mb-6">
              <strong>روش قلب تپنده (Off-Pump):</strong> جراحی در حالی انجام می‌شود که قلب در حال تپش است. این روش ریسک سکته مغزی و عوارض کلیوی را در افراد مسن کاهش می‌دهد اما نیازمند مهارت فوق‌العاده جراح است.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۴. پایش‌های حیاتی «نوید زندگی» در منزل؛ پیشگیری از بازگشت به بیمارستان</h2>
            
            <p className="mb-4">
              بزرگترین چالش پس از ترخیص، مدیریت عوارض احتمالی است. خدمات ما شامل موارد زیر است:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">الف) هولتر ریتم ۲۴ ساعته (مدیریت AFib)</h3>
            <p className="mb-3">
              حدود ۳۰ درصد از بیماران پس از بای‌پس دچار «فیبریلاسیون دهلیزی» می‌شوند که می‌تواند منجر به لخته و سکته مغزی شود.
            </p>
            <p className="mb-4">
              <strong>خدمات ما:</strong> نصب دستگاه <Link to="/services/holter" className="text-primary hover:underline">هولتر در منزل</Link> برای شناسایی بی‌نظمی‌های ریتم که ممکن است در نوار قلب ساده نشان داده نشوند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">ب) مدیریت استرنوم (استخوان جناغ) و زخم</h3>
            <p className="mb-3">
              استخوان سینه با سیم‌های فلزی بسته می‌شود و ۳ ماه زمان برای جوش خوردن نیاز دارد.
            </p>
            <p className="mb-4">
              <strong>خدمات ما:</strong> پرستاران ما نحوه صحیح جابه‌جایی (Log Roll) و استفاده از شکم‌بند/سینه‌بند طبی را آموزش داده و پانسمان‌های تخصصی برای جلوگیری از «مدیاستینیت» (عفونت شدید قفسه سینه) انجام می‌دهند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">ج) فیزیوتراپی تنفسی و استفاده از اسپیرومتری</h3>
            <p className="mb-3">
              به دلیل استفاده از دستگاه بیهوشی، ریه‌ها پس از عمل تمایل به روی هم خوابیدن (آتلکتازی) دارند.
            </p>
            <p className="mb-4">
              <strong>خدمات ما:</strong> کنترل روزانه حجم تنفسی بیمار در منزل و آموزش تمرینات بازکننده ریه.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">د) آزمایشگاه سیار (کنترل چربی، قند و غلظت خون)</h3>
            <p className="mb-6">
              تنظیم داروهای ضدپلاکت و استاتین‌ها بر اساس آزمایش‌های دقیق. <strong>خدمات ما:</strong> خون‌گیری در منزل و تفسیر سریع نتایج توسط پزشک متخصص.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۵. مقایسه جامع: بای‌پس (CABG) در مقابل آنژیوپلاستی (PCI)</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">شاخص مقایسه</th>
                    <th className="border border-border p-3 text-right">آنژیوپلاستی (استنت)</th>
                    <th className="border border-border p-3 text-right">جراحی بای‌پس (CABG)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">نوع مداخله</td>
                    <td className="border border-border p-3">تهاجم اندک (بدون برش)</td>
                    <td className="border border-border p-3">جراحی بزرگ قلبی</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3">مدت نقاهت</td>
                    <td className="border border-border p-3">۴۸ ساعت</td>
                    <td className="border border-border p-3">۲ ماه</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">ماندگاری طولانی</td>
                    <td className="border border-border p-3">متوسط (احتمال تنگی مجدد)</td>
                    <td className="border border-border p-3">بسیار بالا (به‌ویژه با پیوند شریانی)</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3">تعداد رگ‌های درگیر</td>
                    <td className="border border-border p-3">۱ یا ۲ رگ</td>
                    <td className="border border-border p-3">۳ رگ یا تنگی‌های پیچیده</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">بیهوشی</td>
                    <td className="border border-border p-3">موضعی</td>
                    <td className="border border-border p-3">عمومی سنگین</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">۶. رژیم غذایی و سبک زندگی پس از عمل</h2>
            
            <p className="mb-4">
              بای‌پس به معنای درمان قطعی نیست، بلکه یک «فرصت دوباره» است. برای محافظت از رگ‌های جدید:
            </p>

            <p className="mb-3">
              <strong>کاهش سدیم:</strong> برای جلوگیری از ورم پاها و فشار به قلب.
            </p>
            <p className="mb-3">
              <strong>پیاده‌روی تدریجی:</strong> شروع با ۵ دقیقه در منزل و افزایش هفتگی تحت نظر متخصصین نوید زندگی.
            </p>
            <p className="mb-6">
              <strong>مدیریت استرس:</strong> جلوگیری از انقباض عروق جدید (اسپاسم شریانی).
            </p>

            {/* Warning Section */}
            <div className="bg-amber-50 border-r-4 border-amber-500 p-4 my-8 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-amber-800 font-semibold mb-2">هشدار مهم:</p>
                <p className="text-amber-700">
                  هرگز بدون مشورت با پزشک متخصص قلب، داروهای خود را قطع یا کم و زیاد نکنید. مصرف خودسرانه یا قطع ناگهانی داروها می‌تواند عوارض جدی به همراه داشته باشد.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">۷. منابع و رفرنس‌های معتبر</h2>
            
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>American College of Cardiology (ACC): Guidelines for Coronary Artery Revascularization.</li>
              <li>The Lancet: Long-term outcomes of CABG vs PCI in multivessel disease.</li>
              <li>Journal of Thoracic and Cardiovascular Surgery (JTCVS): Management of sternal wound infections.</li>
              <li>Mayo Clinic: Recovery after heart bypass surgery: A step-by-step guide.</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold mb-4">نوید زندگی؛ مراقبتی فراتر از مرزهای بیمارستان</h3>
              <p className="mb-4 text-muted-foreground">
                ما می‌دانیم که خروج از بیمارستان پس از یک جراحی سنگین، همراه با اضطراب است. تیم نوید زندگی در تهران و کرج تمام تجهیزات تشخیصی (هولتر، اکو، نوار قلب) و کادر درمانی را به خانه شما می‌آورد.
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>

          </div>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />

        </article>
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default CABGSurgeryPage;
