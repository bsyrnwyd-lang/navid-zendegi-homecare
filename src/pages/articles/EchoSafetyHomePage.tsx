import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart, Shield, Waves, CheckCircle2 } from "lucide-react";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import echoSafetyImage from "@/assets/echo-safety-home.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";

const EchoSafetyHomePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912?text=سلام، نیاز به اکوکاردیوگرافی در منزل دارم.", "_blank");
  };

  const faqItems = [
    {
      question: "آیا اکو قلب اشعه دارد؟",
      answer: "خیر، اکوکاردیوگرافی از امواج صوتی (اولتراسوند) استفاده می‌کند و هیچ‌گونه اشعه یونیزانی ندارد. این روش کاملاً ایمن است."
    },
    {
      question: "آیا اکو در منزل دقت کافی دارد؟",
      answer: "بله، دستگاه‌های پرتابل ما دارای تکنولوژی Color Doppler هستند و دقتی مشابه دستگاه‌های بیمارستانی دارند."
    },
    {
      question: "اکو قلب چقدر طول می‌کشد؟",
      answer: "معمولاً بین ۲۰ تا ۳۰ دقیقه طول می‌کشد. در صورت نیاز به بررسی‌های دقیق‌تر ممکن است کمی بیشتر شود."
    },
    {
      question: "آیا نیاز به آمادگی خاصی دارم؟",
      answer: "خیر، نیاز به ناشتایی یا آمادگی خاصی نیست. فقط لباس راحت بپوشید."
    },
    {
      question: "هزینه اکو در منزل چقدر است؟",
      answer: "هزینه بستگی به نوع اکو و منطقه دارد. با شماره 09386117912 تماس بگیرید تا اطلاعات دقیق دریافت کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "اکو قلب در منزل",
      description: "راهنمای کامل خدمات اکوکاردیوگرافی در خانه",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب در منزل",
      description: "خدمات ECG و نوار قلب در خانه شما",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب و عروق"
    },
    {
      title: "خدمات قلب در منزل",
      description: "ویزیت متخصص قلب و عروق در منزل",
      image: cardiologyImage,
      link: "/articles/cardiology-home-services",
      category: "قلب و عروق"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="اکوکاردیوگرافی در منزل | ایمنی امواج اکو و نحوه کارکرد | تهران و کرج"
        description="آیا اکو قلب اشعه دارد؟ بررسی کامل ایمنی امواج اکوکاردیوگرافی، نحوه کارکرد و خدمات اکو در منزل تهران و کرج. بدون درد، بدون اشعه."
        keywords="عوارض اکو قلب، آیا اکو اشعه دارد، اکو قلب در منزل تهران، تفسیر اکو در خانه، ایمنی اکوکاردیوگرافی، اکو پرتابل"
        canonical="https://navidzendegi.com/articles/echo-safety-home"
        ogType="article"
      />
      <Header />
      <FloatingContact />

      <main className="py-12 px-4">
        <article className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"ایمنی اکو در منزل",url:"/articles/echo-safety-home"}]} />
          <img
            src={echoSafetyImage}
            alt="اکوکاردیوگرافی در منزل - بررسی ایمنی امواج اکو"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            اکوکاردیوگرافی در منزل؛ نحوه کارکرد، دقت و بررسی ایمنی امواج
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            بسیاری از بیماران زمانی که با تجویز «اکو قلب» روبرو می‌شوند، سوالات زیادی در ذهن دارند: 
            این دستگاه چطور کار می‌کند؟ آیا تصاویری که در خانه گرفته می‌شود دقیق است؟ و مهم‌تر از همه، 
            <strong> آیا این امواج برای قلب ضرر دارند؟</strong>
          </p>

          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <p className="text-foreground leading-relaxed">
              مرکز خدمات پزشکی <strong>نوید زندگی</strong> با آوردن پیشرفته‌ترین تجهیزات اکوکاردیوگرافی به منزل شما 
              در تهران و کرج، پاسخی علمی و تخصصی به این دغدغه‌ها می‌دهد.
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
              <Waves className="h-6 w-6 text-primary" />
              اکو قلب دقیقاً چگونه کار می‌کند؟
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              اکوکاردیوگرافی بر خلاف رادیولوژی، <strong>از هیچ‌گونه اشعه‌ای استفاده نمی‌کند</strong>. 
              مکانیزم این دستگاه بر پایه فیزیک صوت است:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-2 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">۱</span>
                </div>
                <div>
                  <strong className="text-foreground">تولید امواج فراصوت:</strong>
                  <span className="text-muted-foreground"> دستگاه اکو از طریق دسته‌ای به نام پروب (Transducer)، امواجی با فرکانس بسیار بالا تولید می‌کند که گوش انسان قادر به شنیدن آن‌ها نیست.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-2 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">۲</span>
                </div>
                <div>
                  <strong className="text-foreground">ارسال و بازگشت (پژواک):</strong>
                  <span className="text-muted-foreground"> این امواج به سمت قلب فرستاده می‌شوند. وقتی به بافت‌های مختلف (عضله قلب، دریچه‌ها یا خون) برخورد می‌کنند، درست مثل پژواک صدای شما در کوه، بازمی‌گردند.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-2 mt-1 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">۳</span>
                </div>
                <div>
                  <strong className="text-foreground">ترسیم تصویر زنده:</strong>
                  <span className="text-muted-foreground"> دستگاه زمان رفت و برگشت این امواج را با دقت میلی‌ثانیه محاسبه کرده و آن‌ها را به یک تصویر متحرک و رنگی روی مانیتور تبدیل می‌کند.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              بررسی ایمنی: آیا امواج اکو برای بدن ضرر دارند؟
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <p className="text-foreground leading-relaxed font-bold text-center text-lg mb-2">
                ✅ اکوکاردیوگرافی ۱۰۰٪ ایمن و بدون عوارض است
              </p>
              <p className="text-muted-foreground text-center">
                یکی از بزرگ‌ترین نگرانی‌های بیماران، ترس از «اشعه» است. اما باید بدانید که این نگرانی بی‌اساس است.
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4">
              تفاوت ماهیت اکو با رادیولوژی (X-Ray)
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-3 text-right text-foreground">نوع تصویربرداری</th>
                    <th className="border border-border p-3 text-right text-foreground">نوع امواج</th>
                    <th className="border border-border p-3 text-right text-foreground">ایمنی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-muted-foreground">اشعه ایکس و سی‌تی اسکن</td>
                    <td className="border border-border p-3 text-muted-foreground">تابش‌های یونیزان</td>
                    <td className="border border-border p-3 text-muted-foreground">در صورت تکرار زیاد می‌تواند آسیب‌رسان باشد</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-muted-foreground">اکوکاردیوگرافی</td>
                    <td className="border border-border p-3 text-muted-foreground">امواج صوتی (اولتراسوند)</td>
                    <td className="border border-border p-3 text-muted-foreground">کاملاً ایمن - بدون هیچ عارضه</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <p className="text-foreground leading-relaxed">
                <strong>یک واقعیت علمی:</strong> ایمنی این امواج به قدری بالاست که از همین تکنولوژی (سونوگرافی) 
                برای بررسی <strong>حساس‌ترین موجود زنده یعنی جنین در شکم مادر</strong> استفاده می‌شود. 
                بنابراین اکو برای قلب سالمندان، کودکان و بیماران قلبی کاملاً بی‌خطر است و می‌توان آن را به دفعات تکرار کرد.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              در اکوکاردیوگرافی چه مواردی تشخیص داده می‌شود؟
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              متخصص قلب و عروق نوید زندگی با استفاده از این تکنولوژی در منزل شما، موارد زیر را بررسی می‌کند:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>قدرت پمپاژ قلب (EF):</strong> بررسی نارسایی قلبی و توان قلب در خون‌رسانی.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>سلامت دریچه‌ها:</strong> تشخیص تنگی یا گشادی دریچه‌های قلب.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>اندازه حفره‌ها:</strong> تشخیص بزرگ شدن قلب بر اثر فشار خون یا بیماری‌های دیگر.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>جریان خون (داپلر):</strong> مشاهده جهت و سرعت حرکت خون در رگ‌ها و قلب.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              چرا خدمات اکو در منزل «نوید زندگی» در تهران و کرج؟
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              جابه‌جایی بیمار قلبی در ترافیک سنگین تهران یا اتوبان‌های کرج می‌تواند باعث استرس و افزایش ضربان قلب شود 
              که نتیجه تست را تحت تأثیر قرار می‌دهد.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>حذف استرس محیطی:</strong> انجام تست در آرامش کامل منزل باعث می‌شود پارامترهای قلبی در واقعی‌ترین حالت خود ثبت شوند.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>تجهیزات پرتابل مدرن:</strong> دستگاه‌های ما دارای تکنولوژی Color Doppler بوده و دقتی کاملاً مشابه دستگاه‌های بزرگ بیمارستانی دارند.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"><strong>تفسیر آنی توسط متخصص:</strong> پزشک اعزامی بلافاصله پس از تست، نتیجه را برای شما شرح داده و برنامه درمانی را تنظیم می‌کند.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">منابع و رفرنس‌های معتبر</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• American Heart Association (AHA): تاکید بر ماهیت غیرتهاجمی و ایمن اولتراسوند.</li>
              <li>• Mayo Clinic: تایید عدم وجود اشعه در تمامی انواع اکوکاردیوگرافی.</li>
              <li>• NCBI: بررسی دقت دستگاه‌های اکو پرتابل در تشخیص‌های بالینی در منزل.</li>
            </ul>
          </section>

          <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg mb-12">
            <p className="text-foreground text-center font-bold">
              ⚠️ هشدار: از خوددرمانی خودداری کنید. نتایج اکو باید توسط متخصص قلب تفسیر شود.
            </p>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              مراقب قلب خود در خانه باشید
            </h3>
            <p className="text-muted-foreground mb-6">
              اگر نیاز به ویزیت متخصص قلب و انجام اکو در منزل دارید، تیم نوید زندگی در تمام مناطق تهران و کرج آماده اعزام سریع است. 
              بدون درد، بدون اشعه و بدون نیاز به جابه‌جایی، از سلامت قلب خود مطمئن شوید.
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

export default EchoSafetyHomePage;
