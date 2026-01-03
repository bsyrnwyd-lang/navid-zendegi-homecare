import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import mitralClipImage from "@/assets/mitral-clip-article.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-monitoring.jpg";
import pacemakerICDImage from "@/assets/pacemaker-icd-article.jpg";

const MitralClipPage = () => {
  const faqs = [
    {
      question: "میترال کلیپ چیست؟",
      answer: "میترال کلیپ یک روش درمانی نوین و کم‌تهاجمی برای ترمیم دریچه میترال قلب است. در این روش، یک گیره کوچک از طریق کاتتر به قلب فرستاده شده و دو لبه دریچه را به هم می‌چسباند تا نشت خون کاهش یابد."
    },
    {
      question: "چه کسانی کاندید میترال کلیپ هستند؟",
      answer: "افراد مسن یا بیمارانی که به دلیل ضعف جسمانی، بیماری‌های همراه یا ریسک بالای جراحی، کاندید جراحی باز قلب نیستند، بهترین گزینه برای این روش هستند."
    },
    {
      question: "آیا میترال کلیپ درد دارد؟",
      answer: "این عمل تحت بیهوشی عمومی انجام می‌شود و بیمار در حین عمل درد احساس نمی‌کند. پس از عمل نیز درد بسیار کمتر از جراحی باز است و معمولاً با مسکن‌های خوراکی کنترل می‌شود."
    },
    {
      question: "مدت بستری پس از میترال کلیپ چقدر است؟",
      answer: "معمولاً ۱ تا ۳ روز بستری در بیمارستان لازم است. دوران نقاهت نیز ۳ تا ۵ روز است که بسیار کوتاه‌تر از ۲ تا ۳ ماه نقاهت جراحی باز می‌باشد."
    },
    {
      question: "پس از میترال کلیپ چه مراقبت‌هایی لازم است؟",
      answer: "پایش قلب با هولتر و اکو، تنظیم داروهای رقیق‌کننده خون، انجام آزمایش خون دوره‌ای و ویزیت منظم توسط متخصص قلب ضروری است. نوید زندگی تمام این خدمات را در منزل ارائه می‌دهد."
    },
    {
      question: "عوارض احتمالی میترال کلیپ چیست؟",
      answer: "عوارض نادر شامل آریتمی قلبی، خونریزی در محل کشاله ران، و به ندرت جابجایی کلیپ است. با پایش مداوم توسط هولتر و اکو، این عوارض قابل شناسایی و مدیریت هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "خدمات اکوی قلب تخصصی در محیط امن خانه شما",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب"
    },
    {
      title: "هولتر نوار قلب و فشار خون",
      description: "پایش ۲۴ ساعته قلب در منزل برای تشخیص دقیق آریتمی‌ها",
      image: holterImage,
      link: "/articles/holter-guide",
      category: "قلب"
    },
    {
      title: "پیس‌میکر و ICD",
      description: "راهنمای کامل باتری و دفیبریلاتور قلب",
      image: pacemakerICDImage,
      link: "/articles/pacemaker-icd",
      category: "قلب"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="میترال کلیپ (MitralClip)؛ ترمیم دریچه قلب بدون جراحی باز | نوید زندگی"
        description="راهنمای جامع میترال کلیپ: ترمیم انقلابی دریچه میترال بدون جراحی باز، مقایسه با جراحی سنتی، مراقبت‌های پس از عمل. خدمات اکو و هولتر در منزل تهران و کرج. تماس: 09386117912"
        keywords="میترال کلیپ, MitralClip, دریچه میترال, نارسایی دریچه قلب, جراحی قلب, ترمیم دریچه, اکو قلب, هولتر, نوید زندگی"
        canonical="https://navidzendegi.ir/articles/mitral-clip"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-01-03"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">تاریخ انتشار: ۱۴۰۴/۱۰/۱۴</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                میترال کلیپ (MitralClip)؛ ترمیم انقلابی دریچه قلب بدون جراحی باز
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                نارسایی دریچه میترال (MR) زمانی رخ می‌دهد که دریچه بین دهلیز و بطن چپ به درستی بسته نمی‌شود و خون به سمت ریه‌ها پس می‌زند. تا مدتی پیش، تنها راه حل این مشکل جراحی سنگین و باز قلب بود. اما امروزه تکنولوژی میترال کلیپ این امکان را فراهم کرده تا بدون باز کردن قفسه سینه، دریچه قلب ترمیم شود. مرکز نوید زندگی با ارائه خدمات تخصصی <Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر ریتم</Link> و <Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link>، همراه شماست تا دوران نقاهت پس از این عمل حساس را با بیشترین امنیت در خانه سپری کنید.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={mitralClipImage} 
                alt="میترال کلیپ - ترمیم دریچه قلب بدون جراحی باز"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center mb-8">
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="medical-section bg-destructive/5">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-foreground">
                <strong>هشدار مهم:</strong> اطلاعات این مقاله صرفاً جهت آگاهی عمومی است و جایگزین مشاوره پزشکی نمی‌شود. هرگز خوددرمانی نکنید و برای تشخیص و درمان حتماً با پزشک متخصص مشورت کنید.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۱. میترال کلیپ چگونه عمل می‌کند؟ (ترمیم لبه‌به‌لبه)
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              این روش یک رویکرد «کم‌تهاجمی» است که در آن از جراحی خبری نیست. پزشک از طریق یک رگ در ناحیه کشاله ران، یک کاتتر (لوله ظریف) را به سمت دهلیز چپ هدایت می‌کند.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>مکانیسم گیره:</strong> یک گیره کوچک (کلیپ) روی دو لبه دریچه میترال قرار می‌گیرد و آن‌ها را به هم می‌چسباند.
              </li>
              <li className="text-base text-foreground">
                <strong>ایجاد سوراخ دوگانه:</strong> با این کار، فضای باز دریچه که باعث نشت خون می‌شد، به دو سوراخ کوچک‌تر تبدیل می‌شود. در نتیجه، در زمان انقباض قلب، خون دیگر به عقب برنمی‌گردد اما در زمان استراحت، مسیر برای عبور خون باز است.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۲. چرا میترال کلیپ یک معجزه درمانی است؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              بر اساس مطالعات معتبر جهانی (مانند مطالعه COAPT)، این روش برای بیمارانی که به دلیل سن بالا یا ضعف جسمانی کاندید جراحی باز نیستند، نتایج خیره‌کننده‌ای دارد:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• کاهش ۳۸ درصدی خطر مرگ در بیماران نارسایی قلبی</li>
              <li className="text-base text-foreground">• کاهش ۵۰ درصدی نیاز به بستری مجدد در بیمارستان</li>
              <li className="text-base text-foreground">• بهبود فوری کیفیت زندگی: بیمار بلافاصله پس از عمل متوجه کاهش تنگی نفس و خستگی می‌شود</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۳. مقایسه: میترال کلیپ در مقابل جراحی باز قلب
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در جراحی باز قلب، قفسه سینه به طور کامل باز می‌شود و نیاز به ۷ تا ۱۰ روز بستری و ۲ تا ۳ ماه نقاهت است. ریسک عفونت نیز بالاست و بیشتر برای افراد جوان و با بنیه قوی مناسب است.
            </p>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              اما در میترال کلیپ، تنها یک سوراخ کوچک در کشاله ران ایجاد می‌شود. بستری فقط ۱ تا ۳ روز است و دوران نقاهت ۳ تا ۵ روز. ریسک عفونت بسیار پایین است و برای افراد مسن یا با ریسک جراحی بالا ایده‌آل می‌باشد.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۴. خدمات تخصصی «نوید زندگی» در دوران نقاهت (تهران و کرج)
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              اگرچه میترال کلیپ روشی سبک‌تر است، اما پایش قلب در هفته‌های اول برای تثبیت نتایج حیاتی است. ما این خدمات را به منزل شما می‌آوریم:
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-foreground">الف) هولتر ریتم ۲۴ ساعته در منزل</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              دستکاری‌های داخل قلب ممکن است باعث <Link to="/articles/af-stroke-risk" className="text-primary hover:underline">آریتمی‌های جدید (مثل فیبریلاسیون دهلیزی)</Link> شود. ما با نصب دستگاه <Link to="/services/holter" className="text-primary hover:underline">هولتر در منزل</Link>، ضربان قلب شما را به دقت رصد می‌کنیم تا از سلامت ریتم قلب پس از نصب کلیپ مطمئن شویم.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">ب) اکوکاردیوگرافی پرتابل</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              برای اطمینان از اینکه کلیپ در جای درست خود باقی مانده و میزان نشت خون به حداقل رسیده است، متخصصین ما با دستگاه‌های <Link to="/articles/echo-home" className="text-primary hover:underline">اکوی پیشرفته در منزل</Link> شما وضعیت دریچه را مجدداً ارزیابی می‌کنند.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">ج) پایش دارویی و آزمایش خون</h3>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              تنظیم دوز داروهای <Link to="/articles/warfarin" className="text-primary hover:underline">رقیق‌کننده خون (مانند وارفارین</Link> یا <Link to="/articles/clopidogrel" className="text-primary hover:underline">پلاویکس)</Link> برای جلوگیری از ایجاد لخته روی کلیپ بسیار مهم است. ما با انجام <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link>، این فرآیند را مدیریت می‌کنیم.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۵. علائم هشدار دهنده پس از عمل
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در صورت مشاهده موارد زیر در منزل، بلافاصله با کارشناسان نوید زندگی تماس بگیرید:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• تنگی نفس ناگهانی یا سنگینی قفسه سینه</li>
              <li className="text-base text-foreground">• خونریزی، کبودی شدید یا درد در ناحیه کشاله ران</li>
              <li className="text-base text-foreground">• تورم غیرعادی در پاها (<Link to="/articles/leg-swelling" className="text-primary hover:underline">ورم پا</Link>)</li>
              <li className="text-base text-foreground">• احساس <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</Link> شدید یا لرزش در سینه</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع و رفرنس‌های معتبر
            </h2>
            <ul className="space-y-2 mb-8 text-foreground">
              <li>• The New England Journal of Medicine (NEJM): COAPT Trial results for Mitral-Valve Repair.</li>
              <li>• Mayo Clinic: Transcatheter Mitral Valve Repair - Overview.</li>
              <li>• American College of Cardiology (ACC): Patient Selection for MitralClip.</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              نوید زندگی؛ مراقبت فوق‌تخصصی در محیط امن خانه
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              عمل میترال کلیپ شروع یک زندگی با کیفیت‌تر است. ما در نوید زندگی متعهد هستیم که با تجهیزات پیشرفته (هولتر، اکو، نوار قلب) و کادر مجرب، این مسیر بهبودی را برای شما در تهران و کرج هموار کنیم.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
            <p className="text-muted-foreground mt-4">
              با نوید زندگی، تپش‌های قلب شما در دستان متخصصین ماست.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default MitralClipPage;