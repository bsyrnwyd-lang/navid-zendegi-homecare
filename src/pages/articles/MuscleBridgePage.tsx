import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import muscleBridgeImage from "@/assets/muscle-bridge-holter.jpg";
import holterImage from "@/assets/holter-monitoring.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import chestPainImage from "@/assets/chest-pain-diagnosis.jpg";

const MuscleBridgePage = () => {
  const faqs = [
    {
      question: "ماسل بریج چیست؟",
      answer: "ماسل بریج یا پل میوکارد وضعیتی است که در آن یکی از رگ‌های اصلی قلب (عروق کرونر) به جای حرکت روی سطح قلب، از میان عضله قلب عبور می‌کند. این رگ در یک تونل عضلانی قرار می‌گیرد که با هر تپش قلب تحت فشار قرار می‌گیرد."
    },
    {
      question: "چرا نوار قلب معمولی ماسل بریج را نشان نمی‌دهد؟",
      answer: "در ماسل بریج، رگ در حالت استراحت کاملاً باز است و مشکل فقط زمانی ظاهر می‌شود که قلب به شدت منقبض شود (مثلاً هنگام ورزش یا استرس). به همین دلیل نوار قلب ساده در مطب ممکن است نرمال باشد."
    },
    {
      question: "هولتر چگونه در تشخیص ماسل بریج کمک می‌کند؟",
      answer: "هولتر به مدت ۲۴ تا ۴۸ ساعت به شما متصل می‌شود و رفتار قلب را در حین فعالیت‌های روزمره ثبت می‌کند. این دستگاه می‌تواند تغییرات ریتم قلب یا علائم کم‌خونی (ایسکمی) ناشی از فشار عضله بر رگ را شناسایی کند."
    },
    {
      question: "آیا ماسل بریج خطرناک است؟",
      answer: "در بسیاری از افراد ماسل بریج بدون علامت است. اما در برخی موارد می‌تواند باعث درد قفسه سینه، تنگی نفس و آریتمی شود. با تشخیص و مدیریت صحیح، اکثر بیماران زندگی طبیعی دارند."
    },
    {
      question: "درمان ماسل بریج چیست؟",
      answer: "درمان شامل داروهای کنترل‌کننده ضربان (مثل بتابلاکرها)، پرهیز از محرک‌ها، مدیریت استرس و پایش مداوم با هولتر است. در موارد نادر، جراحی ممکن است لازم باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "هولتر؛ راهنمای کامل",
      description: "همه چیز درباره هولتر نوار قلب و فشار خون در منزل",
      image: holterImage,
      link: "/articles/holter-guide",
      category: "قلب"
    },
    {
      title: "نوار قلب در منزل",
      description: "خدمات نوار قلب (ECG) در منزل توسط تیم متخصص نوید زندگی",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب"
    },
    {
      title: "تشخیص درد قفسه سینه",
      description: "علل مختلف درد قفسه سینه و روش‌های تشخیصی",
      image: chestPainImage,
      link: "/articles/chest-pain-diagnosis",
      category: "قلب"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ماسل بریج (پل میوکارد)؛ نقش هولتر در تشخیص دردهای قلبی پنهان | نوید زندگی"
        description="راهنمای جامع ماسل بریج: علت پنهان دردهای قلبی، نقش حیاتی هولتر در تشخیص، علائم و درمان. خدمات هولتر در منزل تهران و کرج. تماس: 09386117912"
        keywords="ماسل بریج, پل میوکارد, هولتر قلب, درد قفسه سینه, تشخیص قلب, هولتر در منزل, نوید زندگی"
        canonical="https://navidzendegi.ir/articles/muscle-bridge"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-01-02"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 pt-4">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"ماسل بریج",url:"/articles/muscle-bridge"}]} />
        </div>
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                ماسل بریج (پل میوکارد)؛ علت پنهان دردهای قلبی و نقش حیاتی هولتر در تشخیص آن
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                آیا با وجود درد قفسه سینه، آزمایش‌های ساده قلبی شما چیزی نشان نمی‌دهند؟ ممکن است دچار عارضه‌ای به نام ماسل بریج (Muscle Bridge) باشید. این وضعیت زمانی رخ می‌دهد که یکی از رگ‌های اصلی قلب (عروق کرونر) به جای حرکت روی سطح قلب، از میان عضله عبور می‌کند. تیم متخصص نوید زندگی با ارائه خدمات <Link to="/services/holter" className="text-primary hover:underline">هولتر نوار قلب و فشار خون در منزل</Link> (تهران و کرج)، این امکان را فراهم کرده تا نوسانات قلبی ناشی از این فشار را در حین فعالیت‌های روزمره شما به دقت رصد کند.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={muscleBridgeImage} 
                alt="ماسل بریج و هولتر قلب - تشخیص دردهای قلبی پنهان"
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
              ۱. چرا تشخیص ماسل بریج سخت است؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              در گرفتگی‌های معمولی (تصلب شرایین)، رگ همیشه تنگ است؛ اما در ماسل بریج، رگ در حالت استراحت کاملاً باز است. مشکل زمانی شروع می‌شود که قلب به شدت منقبض می‌شود (مثلاً هنگام ورزش یا استرس). در این لحظه، عضله قلب مانند یک گیره روی رگ فشار آورده و جریان خون را موقتاً قطع می‌کند.
            </p>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              به همین دلیل است که یک <Link to="/articles/ecg-home" className="text-primary hover:underline">نوار قلب ساده</Link> در مطب ممکن است نرمال باشد، اما بیمار همچنان درد داشته باشد.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۲. هولتر؛ کلید طلایی تشخیص ماسل بریج در منزل
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              از آنجایی که علائم ماسل بریج گذرا و وابسته به فعالیت هستند، بهترین راه تشخیص، ثبت طولانی‌مدت رفتار قلب است. خدمات <Link to="/services/holter" className="text-primary hover:underline">هولتر نوید زندگی</Link> در این مسیر به شما کمک می‌کند:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>هولتر نوار قلب (ECG Holter):</strong> این دستگاه به مدت ۲۴ تا ۴۸ ساعت به شما متصل می‌شود تا هرگونه تغییر در ریتم قلب یا علائم کم‌خونی (ایسکمی) را که بر اثر فشار عضله بر رگ ایجاد می‌شود، ثبت کند.
              </li>
              <li className="text-base text-foreground">
                <strong>هولتر فشار خون (ABPM):</strong> بررسی نوسانات فشار خون در کنار ضربان قلب، به پزشک کمک می‌کند تا متوجه شود آیا فشار بالای ناگهانی باعث تشدید فشار ماسل بریج بر رگ شده است یا خیر.
              </li>
              <li className="text-base text-foreground">
                <strong>مزیت در منزل:</strong> شما دستگاه هولتر را در محیط واقعی زندگی خود (هنگام کار، خواب و فعالیت) نصب می‌کنید. این کار دقت تشخیص را نسبت به تست‌های کلینیکی کوتاه بسیار بالاتر می‌برد.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۳. علائم و هشدارهای ماسل بریج
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              اگر این علائم را تجربه می‌کنید، بررسی با دستگاه هولتر پیشنهاد می‌شود:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• احساس سنگینی یا فشار در قفسه سینه هنگام فعالیت بدنی</li>
              <li className="text-base text-foreground">• تنگی نفس ناگهانی که با استراحت برطرف می‌شود</li>
              <li className="text-base text-foreground">• <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</Link> غیرعادی (آریتمی)</li>
              <li className="text-base text-foreground">• خستگی مفرط پس از فعالیت‌های ساده روزانه</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۴. مدیریت و درمان؛ فراتر از دارو
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              درمان ماسل بریج با گرفتگی‌های معمولی متفاوت است:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>داروهای کنترل‌کننده ضربان:</strong> داروهایی مثل <Link to="/articles/bisoprolol" className="text-primary hover:underline">بتا-بلاکرها</Link> تجویز می‌شوند تا زمان استراحت قلب را طولانی‌تر کنند.
              </li>
              <li className="text-base text-foreground">
                <strong>پرهیز از محرک‌ها:</strong> کاهش استرس و مدیریت مصرف کافئین.
              </li>
              <li className="text-base text-foreground">
                <strong>پایش مداوم:</strong> استفاده از هولترهای دوره‌ای برای اطمینان از اثربخشی داروها.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۵. خدمات تخصصی نوید زندگی در تهران و کرج
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              ما در نوید زندگی، تمام ابزارهای لازم برای مدیریت این عارضه را به خانه شما می‌آوریم:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر نوار قلب و فشار خون</Link> در منزل:</strong> توسط کارشناسان مجرب و بدون نیاز به مراجعه حضوری.
              </li>
              <li className="text-base text-foreground">
                <strong>تفسیر نتایج توسط <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب</Link>:</strong> تحلیل دقیق داده‌های هولتر برای تشخیص دقیق ماسل بریج.
              </li>
              <li className="text-base text-foreground">
                <strong><Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی تخصصی</Link> در منزل:</strong> برای بررسی ضخامت عضله‌ای که روی رگ قرار گرفته است.
              </li>
              <li className="text-base text-foreground">
                <strong>ویزیت منظم:</strong> تنظیم دوز داروها بر اساس نتایج هولتر.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع و رفرنس‌های معتبر
            </h2>
            <ul className="space-y-2 mb-8 text-foreground">
              <li>• American College of Cardiology (ACC): Role of Ambulatory ECG Monitoring in Myocardial Bridge Diagnosis.</li>
              <li>• Journal of the American Medical Association (JAMA): Management of Symptomatic Myocardial Bridging.</li>
              <li>• Cleveland Clinic: Diagnostic challenges and the importance of Holter monitors in coronary anomalies.</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              اجازه ندهید دردهای قلبی پنهان بمانند
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              تشخیص درست، نیمی از درمان است. اگر به ماسل بریج مشکوک هستید، به جای تحمل استرس ترافیک و نوبت‌های طولانی، از خدمات هولتر در منزل ما استفاده کنید.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
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

export default MuscleBridgePage;
