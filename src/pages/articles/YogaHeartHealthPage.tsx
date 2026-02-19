import { Phone, MessageCircle } from "lucide-react";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import yogaHeartImage from "@/assets/yoga-heart-health.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const YogaHeartHealthPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟",
      description: "راهنمای کامل فشار خون بالا، علائم قاتل خاموش، علت‌ها و روش‌های کنترل",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    },
    {
      title: "رژیم مدیترانه‌ای: بهترین رژیم غذایی برای قلب، کنترل قند خون و دیابت",
      description: "راهنمای کامل رژیم مدیترانه‌ای برای سلامت قلب و کنترل قند خون",
      image: mediterraneanDietImage,
      link: "/articles/mediterranean-diet",
      category: "تغذیه"
    },
    {
      title: "تپش قلب؛ علل، علائم و روش‌های بررسی",
      description: "راهنمای کامل تپش قلب، علل شایع، علائم خطرناک و روش‌های بررسی",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  const faqs = [
    {
      question: "آیا یوگا برای همه بیماران قلبی مناسب است؟",
      answer: "یوگا برای بسیاری از بیماران قلبی مفید است، اما حتماً باید قبل از شروع با پزشک متخصص قلب مشورت کنید. برخی از حالات یوگا ممکن است برای افراد با شرایط خاص قلبی مناسب نباشند. پزشک می‌تواند سبک مناسب یوگا و شدت تمرینات را توصیه کند."
    },
    {
      question: "چند بار در هفته باید یوگا انجام دهم؟",
      answer: "برای دیدن اثرات مثبت بر سلامت قلب، توصیه می‌شود حداقل 3 تا 5 بار در هفته، هر بار 30 تا 60 دقیقه یوگا انجام دهید. البته شروع با جلسات کوتاه‌تر و افزایش تدریجی مدت زمان نیز مفید است."
    },
    {
      question: "کدام سبک یوگا برای سلامت قلب بهتر است؟",
      answer: "سبک‌های ملایم‌تر یوگا مانند هاتا یوگا، ین یوگا یا یوگای احیاکننده (Restorative Yoga) برای بیماران قلبی مناسب‌تر هستند. این سبک‌ها تمرکز بیشتری بر تنفس، آرام‌سازی و حالات ملایم دارند. از سبک‌های شدید و گرم (مانند بیکرام یوگا) بدون مشورت پزشکی باید پرهیز کنید."
    },
    {
      question: "آیا یوگا می‌تواند جایگزین داروهای قلبی شود؟",
      answer: "خیر، یوگا هرگز نباید جایگزین داروهای تجویز شده توسط پزشک شود. یوگا به عنوان یک مکمل برای درمان پزشکی عمل می‌کند و می‌تواند به بهبود وضعیت کلی سلامت کمک کند. همیشه داروهای خود را طبق دستور پزشک مصرف کنید."
    },
    {
      question: "یوگا چگونه به کاهش فشار خون کمک می‌کند؟",
      answer: "یوگا از طریق چند مکانیسم به کاهش فشار خون کمک می‌کند: کاهش استرس و آرام‌سازی سیستم عصبی، بهبود گردش خون، افزایش انعطاف‌پذیری عروق و کاهش التهاب. تکنیک‌های تنفسی یوگا نیز به تنظیم سیستم عصبی خودمختار کمک می‌کنند."
    },
    {
      question: "آیا یوگا برای بیماران پس از سکته قلبی ایمن است؟",
      answer: "بله، یوگا می‌تواند برای بیماران پس از سکته قلبی مفید باشد، اما باید پس از دوره بهبودی اولیه و با تأیید پزشک متخصص قلب شروع شود. معمولاً توصیه می‌شود ابتدا با حالات بسیار ملایم و تمرکز بر تنفس شروع کنید و تدریجاً شدت را افزایش دهید."
    }
  ];

  return (
    <>
      <SEOHead
        title="یوگا و سلامت قلب: کاهش ریسک بیماری‌های قلبی با یوگا"
        description="راهنمای جامع تأثیر یوگا بر سلامت قلب، کاهش فشار خون، بهبود پروفایل چربی خون و کاهش ریسک بیماری‌های قلبی"
        keywords="یوگا, سلامت قلب, کاهش فشار خون, بیماری قلبی, پیشگیری قلبی, سبک زندگی سالم, ویزیت پزشک در منزل, کاهش استرس"
        canonical="https://navidzendegi.com/articles/yoga-heart-health"
        ogImage={yogaHeartImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-22"
        modifiedTime="2025-01-22"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingContact />

        <div className="container mx-auto px-4 pt-32 max-w-4xl">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"یوگا و سلامت قلب",url:"/articles/yoga-heart-health"}]} />
        </div>
        <article className="container mx-auto px-4 pb-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            یوگا و بیماری‌های قلبی: راهی مؤثر برای کاهش ریسک و بهبود سلامت قلب
          </h1>

          <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span>نویسنده: نوید زندگی</span>
            <span>•</span>
            <span>تاریخ انتشار: 1403/11/02</span>
          </div>

          <img 
            src={yogaHeartImage}
            alt="یوگا و سلامت قلب"
            className="w-full h-auto rounded-lg mb-8"
            loading="lazy"
          />

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">معرفی یوگا و مفاهیم آن</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              یوگا یک تمرین ترکیبی از حالات بدنی (آساناها)، تکنیک‌های تنفس (پرانایاما)، و مراقبه است که هدف آن برقراری تعادل بین جسم، ذهن و روح می‌باشد. این روش در سال‌های اخیر به‌عنوان یک مداخله سبک زندگی در پیشگیری و کنترل بیماری‌های مزمن مورد توجه قرار گرفته است.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              یوگا نه تنها یک فعالیت بدنی است، بلکه یک رویکرد جامع به سلامتی است که می‌تواند بر سلامت جسمی، روانی و عاطفی افراد تأثیر مثبت بگذارد. در زمینه <Link to="/cardiology" className="text-primary hover:underline">بیماری‌های قلبی و عروقی</Link>، یوگا به عنوان یک مکمل درمانی مؤثر شناخته شده است.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">تأثیر یوگا بر عوامل خطر بیماری‌های قلبی</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              تحقیقات گسترده نشان داده‌اند که یوگا می‌تواند بر بخشی از عوامل خطر قلبی و متابولیک تأثیرگذار باشد:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">کاهش فشار خون</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              با مقایسه با عدم انجام تمرین، یوگا باعث <strong>کاهش فشار خون سیستولیک تا حدود 5.21 میلی‌متر جیوه</strong> و <strong>فشار دیاستولیک تا حدود 4.98 میلی‌متر جیوه</strong> شده است. این کاهش می‌تواند به طور قابل توجهی ریسک حملات قلبی و سکته مغزی را کاهش دهد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">بهبود پروفایل چربی خون</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              کاهش سطح <strong>کلسترول LDL (کلسترول بد)</strong> و <strong>تری‌گلیسریدها</strong> دیده شده است، همچنین <strong>افزایش کلسترول HDL (کلسترول خوب)</strong> نیز گزارش شده است. این تغییرات مثبت در <Link to="/articles/mediterranean-diet" className="text-primary hover:underline">پروفایل چربی خون</Link> می‌تواند از تجمع پلاک در عروق جلوگیری کند.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">کاهش وزن و BMI</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              کاهش <strong>شاخص توده‌ی بدن (BMI)</strong> و کاهش وزن نیز در مطالعه‌های متعدد دیده شده است. چاقی یکی از مهم‌ترین عوامل خطر برای بیماری‌های قلبی است و کاهش وزن حتی اندک می‌تواند تأثیرات مثبت قابل توجهی داشته باشد.
            </p>

            <p className="text-muted-foreground leading-relaxed italic border-r-4 border-primary pr-4">
              به نقل از American Heart Association، «یوگا ممکن است به پایین آوردن عوامل خطر قلبی کمک کند».
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">کاربرد یوگا در بیماران مبتلا به بیماری‌های قلبی</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              در زمینه پیشگیری ثانویه (برای کسانی که مبتلا به بیماری قلبی هستند) نیز شواهد اولیه وجود دارد:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              مطالعه‌ای روی بیماران مبتلا به <strong>بیماری عروق کرونر</strong> نشان داد که یوگا باعث <strong>بهبود کیفیت زندگی مرتبط با سلامت</strong> شده است. بیماران گزارش کردند که احساس بهتری دارند، <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</Link> کمتری دارند و می‌توانند فعالیت‌های روزمره خود را راحت‌تر انجام دهند.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              با این حال، کمیّت داده‌ها برای نتیجه‌گیری قطعی در کاهش مرگ‌ومیر یا رخدادهای قلبی بزرگ هنوز محدود است. به همین دلیل یوگا باید همیشه به عنوان <strong>مکمل درمان پزشکی</strong> و نه جایگزین آن در نظر گرفته شود.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">چرا یوگا می‌تواند مفید باشد؟</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              یوگا می‌تواند از چند مسیر به سلامت قلب کمک کند:
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>کاهش استرس و آرام‌سازی سیستم عصبی سمپاتیک:</strong> استرس مزمن یکی از عوامل خطر مهم برای بیماری‌های قلبی است. یوگا با آرام‌سازی سیستم عصبی، کاهش هورمون‌های استرس و تقویت سیستم پاراسمپاتیک، به کاهش فشار خون و ضربان قلب کمک می‌کند.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>افزایش تحرک بدنی ملایم و بهبود گردش خون:</strong> حالات مختلف یوگا به بهبود انعطاف‌پذیری عروق، افزایش جریان خون و تقویت عضله قلب کمک می‌کنند.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>بهبود پروفایل چربی خون و کنترل وزن:</strong> یوگا با افزایش متابولیسم بدن و کمک به سوزاندن کالری، می‌تواند به کاهش وزن و بهبود سطح چربی‌های خون کمک کند.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong>کمک به عادات زندگی سالم‌تر:</strong> افرادی که یوگا انجام می‌دهند معمولاً تمایل بیشتری به <Link to="/articles/mediterranean-diet" className="text-primary hover:underline">تغذیه سالم</Link>، کاهش مصرف سیگار و حفظ سبک زندگی فعال دارند.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">نکات اجرایی برای بیماران قلبی</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              برای استفاده ایمن و مؤثر از یوگا در بیماران قلبی، نکات زیر را رعایت کنید:
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>مشورت با پزشک قبل از شروع:</strong> بیماران مبتلا به بیماری قلبی یا کسانی با ریسک بالا، پیش از شروع هر برنامه یوگا، حتماً با <Link to="/cardiology" className="text-primary hover:underline">پزشک متخصص قلب</Link> مشورت کنند.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>انتخاب سبک مناسب:</strong> سبک‌های ملایم‌تر مثل <strong>هاتا یوگا</strong> یا تمرکز بر تنفس و آرام‌سازی برای بیماران قلبی مناسب‌تر است. از سبک‌های شدید و گرم بدون مشورت پزشکی پرهیز کنید.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>انجام منظم:</strong> انجام یوگا به صورت منظم (مثلاً 3 تا 5 بار در هفته) همراه با سایر مداخلات پزشکی و سبک زندگی توصیه می‌شود.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>شروع تدریجی:</strong> با جلسات کوتاه (15-20 دقیقه) شروع کنید و به تدریج زمان و شدت را افزایش دهید.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong>یوگا مکمل است، نه جایگزین:</strong> یوگا را به عنوان مکمل—نه جایگزین—برای داروها یا توصیه‌های پزشکی تلقی کنید. همیشه داروهای <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون</Link> و قلب خود را طبق دستور پزشک مصرف کنید.
            </p>
          </section>

          <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ویزیت پزشک قلب در منزل برای ارزیابی وضعیت قلب و عروق
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              خدمات ویزیت پزشک در منزل می‌تواند به افرادی که مراجعه حضوری مشکل دارند کمک کند تا وضعیت قلب و عروق، فشار خون، چربی خون و اثر یوگا را با پزشک در منزل بررسی نمایند. پزشک متخصص می‌تواند برنامه یوگای مناسب برای شما را تعیین کند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCall}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                <Phone className="w-4 h-4" />
                تماس تلفنی: <a href="tel:09386117912" className="font-bold">09386117912</a>
              </Button>
              <Button 
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4" />
                پیام در واتساپ
              </Button>
            </div>
          </section>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              برای کسب اطلاعات بیشتر درباره <Link to="/contact" className="text-primary hover:underline">خدمات ویزیت پزشک در منزل</Link> و مشاوره رایگان درباره سبک زندگی سالم و یوگا، با ما تماس بگیرید.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              همچنین می‌توانید از خدمات <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب و عروق در منزل</Link> برای پیگیری دقیق و منظم وضعیت قلب خود استفاده کنید.
            </p>
          </div>

          <FAQSection faqs={faqs} />

          <div className="mt-12">
            <PricingInfo />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default YogaHeartHealthPage;
