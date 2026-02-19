import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, AlertTriangle, CheckCircle2, Droplets, Syringe } from "lucide-react";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import foodPoisoningImage from "@/assets/food-poisoning-treatment.jpg";
import ivTherapyImage from "@/assets/iv-therapy-home.jpg";
import ivSerumImage from "@/assets/iv-serum-home.jpg";
import nursingImage from "@/assets/nurse-home-visit.jpg";

const FoodPoisoningPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912?text=سلام، نیاز به سرم‌تراپی برای مسمومیت غذایی دارم.", "_blank");
  };

  const faqItems = [
    {
      question: "سرم‌تراپی برای مسمومیت غذایی چقدر طول می‌کشد؟",
      answer: "معمولاً یک جلسه سرم‌تراپی بین ۳۰ تا ۶۰ دقیقه طول می‌کشد. اما بسته به شدت کم‌آبی، ممکن است نیاز به تکرار باشد."
    },
    {
      question: "آیا سرم در منزل بی‌خطر است؟",
      answer: "بله، پرستاران مجرب ما با رعایت کامل اصول استریل و زیر نظر پزشک، سرم‌تراپی را به صورت ایمن انجام می‌دهند."
    },
    {
      question: "چه داروهایی همراه سرم تزریق می‌شود؟",
      answer: "بسته به وضعیت بیمار، داروهای ضد تهوع، ضد اسپاسم و ویتامین‌ها ممکن است تجویز شود. همه داروها با دستور پزشک هستند."
    },
    {
      question: "هزینه سرم‌تراپی در منزل چقدر است؟",
      answer: "هزینه بستگی به نوع سرم و داروهای مورد نیاز دارد. با شماره 09386117912 تماس بگیرید تا اطلاعات دقیق دریافت کنید."
    },
    {
      question: "در چه مناطقی خدمات ارائه می‌دهید؟",
      answer: "خدمات سرم‌تراپی در منزل در تمام مناطق تهران و کرج ارائه می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "سرم‌تراپی در منزل",
      description: "راهنمای کامل خدمات سرم‌درمانی در خانه",
      image: ivTherapyImage,
      link: "/articles/iv-therapy-home",
      category: "خدمات پزشکی"
    },
    {
      title: "نکات ایمنی سرم در منزل",
      description: "آنچه باید درباره وصل کردن سرم بدانید",
      image: ivSerumImage,
      link: "/articles/iv-serum-home-safety",
      category: "آموزش سلامت"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "معرفی خدمات پرستاری نوید زندگی",
      image: nursingImage,
      link: "/services/nursing",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="درمان سریع مسمومیت غذایی در منزل | سرم‌تراپی فوری تهران و کرج"
        description="مسمومیت غذایی دارید؟ با خدمات سرم‌تراپی و تزریقات در منزل نوید زندگی در تهران و کرج، در کمترین زمان و بدون نیاز به مراجعه به بیمارستان، انرژی خود را بازیابی کنید."
        keywords="سرم تراپی در منزل تهران، درمان سریع مسمومیت در خانه، وصل کردن سرم در کرج، آمپول ضد تهوع در منزل، مسمومیت غذایی، درمان کم‌آبی"
        canonical="https://navidzendegi.com/articles/food-poisoning"
        ogType="article"
      />
      <Header />
      <FloatingContact />

      <main className="py-12 px-4">
        <article className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"مسمومیت غذایی",url:"/articles/food-poisoning"}]} />
          <img
            src={foodPoisoningImage}
            alt="درمان سریع مسمومیت غذایی با سرم‌تراپی در منزل"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            درمان سریع مسمومیت غذایی در منزل؛ سرم‌تراپی و مراقبت‌های فوری (تهران و کرج)
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            مسمومیت غذایی (Food Poisoning) ناشی از مصرف غذا یا آب آلوده به باکتری‌ها، ویروس‌ها یا انگل‌هاست. 
            طبق گزارش‌های CDC (مرکز کنترل و پیشگیری از بیماری‌ها)، سالانه میلیون‌ها نفر دچار مسمومیت می‌شوند 
            که شایع‌ترین عارضه آن، <strong>کم‌آبی شدید بدن (Dehydration)</strong> است.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <p className="text-foreground leading-relaxed">
              در کلان‌شهرهایی مثل تهران و کرج، جابه‌جایی بیماری که دچار تهوع و اسهال شدید است در ترافیک شهری بسیار دشوار است. 
              مرکز <strong>نوید زندگی</strong> با ارائه خدمات سرم‌تراپی و تزریقات در منزل، اورژانس را به اتاق خواب شما می‌آورد.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button onClick={handleCall} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              تماس فوری: 09386117912
            </Button>
            <Button onClick={handleWhatsApp} variant="outline" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              درخواست از واتس‌اپ
            </Button>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Droplets className="h-6 w-6 text-primary" />
              چرا سرم‌تراپی سریع‌ترین راه درمان مسمومیت است؟
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              وقتی دچار مسمومیت می‌شوید، معده و روده توانایی جذب مایعات و داروهای خوراکی را از دست می‌دهند. 
              بر اساس منابع معتبر پزشکی مانند <strong>Mayo Clinic</strong>، سرم‌تراپی (IV Therapy) به دو دلیل کلیدی بهترین درمان است:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>جبران آنی مایعات:</strong> مایعات استریل مستقیماً وارد خون شده و افت فشار و بی‌حالی را برطرف می‌کنند.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>تزریق مستقیم دارو:</strong> داروهای ضدتهوع و ضداسپاسم از طریق سرم، بدون نیاز به گذشتن از دستگاه گوارش، بلافاصله اثر می‌کنند.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Syringe className="h-6 w-6 text-primary" />
              داروهای تزریقی و ترکیبات سرم برای مسمومیت
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              پرستاران اعزامی نوید زندگی تحت نظر و دستور پزشک، معمولاً از ترکیبات زیر برای بهبود سریع بیمار استفاده می‌کنند:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>محلول‌های پایه (رینگر یا کلرور سدیم):</strong> برای تعادل الکترولیت‌های بدن (سدیم و پتاسیم) که در اثر اسهال و استفراغ از دست رفته‌اند.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>داروهای ضد تهوع (مانند اندانسترون یا متوکلوپرامید):</strong> برای قطع فوری استفراغ و اجازه دادن به معده برای استراحت.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>داروهای ضد اسپاسم (مانند هیوسین):</strong> جهت کاهش دردهای پیچشی شکم و کرامپ‌های روده‌ای.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>ب-کمپلکس و ویتامین C:</strong> برای بازگرداندن انرژی و تقویت سیستم ایمنی جهت مبارزه با عامل عفونی.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              علائم خطر: چه زمانی باید فوراً تماس بگیرید؟
            </h2>
            <div className="bg-destructive/10 p-6 rounded-lg">
              <p className="text-foreground mb-4 leading-relaxed">
                اگر خود یا عزیزانتان این علائم را دارید، زمان را برای درمان خانگی سنتی تلف نکنید و درخواست اعزام پرستار دهید:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  ناتوانی در نگه داشتن حتی یک جرعه آب در معده
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  اسهال خونی یا دردهای بسیار شدید شکمی
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  تب بالای ۳۸.۵ درجه
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  علائم کم‌آبی شدید (خشکی شدید دهان، سرگیجه موقع ایستادن، کاهش ادرار)
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              مزایای خدمات نوید زندگی در تهران و کرج
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-3 text-right text-foreground">ویژگی</th>
                    <th className="border border-border p-3 text-right text-foreground">درمان در بیمارستان</th>
                    <th className="border border-border p-3 text-right text-foreground">درمان در منزل (نوید زندگی)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-muted-foreground">آلودگی محیطی</td>
                    <td className="border border-border p-3 text-muted-foreground">خطر ابتلا به عفونت‌های دیگر</td>
                    <td className="border border-border p-3 text-muted-foreground">محیط کاملاً استریل و شخصی</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-muted-foreground">راحتی بیمار</td>
                    <td className="border border-border p-3 text-muted-foreground">انتظار روی صندلی‌های اورژانس</td>
                    <td className="border border-border p-3 text-muted-foreground">استراحت روی تخت شخصی</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-muted-foreground">هزینه و زمان</td>
                    <td className="border border-border p-3 text-muted-foreground">اتلاف وقت در ترافیک و پذیرش</td>
                    <td className="border border-border p-3 text-muted-foreground">اعزام سریع در کمتر از یک ساعت</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-muted-foreground">پشتیبانی</td>
                    <td className="border border-border p-3 text-muted-foreground">پیگیری دشوار</td>
                    <td className="border border-border p-3 text-muted-foreground">پشتیبانی ۲۴ ساعته تا بهبودی کامل</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">منابع و رفرنس‌های علمی</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• World Health Organization (WHO): Food safety and foodborne diseases.</li>
              <li>• Mayo Clinic: Food poisoning: Diagnosis and treatment.</li>
              <li>• Centers for Disease Control and Prevention (CDC): Symptoms of Food Poisoning.</li>
              <li>• National Health Service (NHS): Treatment for food poisoning and dehydration.</li>
            </ul>
          </section>

          <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg mb-12">
            <p className="text-foreground text-center font-bold">
              ⚠️ هشدار: از مصرف خودسرانه دارو خودداری کنید. همیشه با پزشک مشورت کنید.
            </p>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              نوید زندگی؛ اورژانس مسمومیت در منزل شما
            </h3>
            <p className="text-muted-foreground mb-6">
              فرقی نمی‌کند در شمال تهران باشید یا در محله‌های کرج؛ تیم پرستاری نوید زندگی با تجهیزات کامل، 
              سرم و داروهای لازم به بالین شما می‌آید تا کابوس مسمومیت غذایی را در کوتاه‌ترین زمان پایان دهد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCall} size="lg" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:09386117912">تماس فوری: 09386117912</a>
              </Button>
              <Button onClick={handleWhatsApp} variant="outline" size="lg" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                درخواست از واتس‌اپ
              </Button>
            </div>
          </div>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default FoodPoisoningPage;
