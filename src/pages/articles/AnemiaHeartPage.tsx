import { Link } from "react-router-dom";
import { Phone, MessageCircle, AlertTriangle, Heart, Activity, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

import anemiaHeartImage from "@/assets/anemia-heart-article.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import legEdemaImage from "@/assets/leg-edema-article.jpg";

const AnemiaHeartPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "کم‌خونی و قلب", url: "/articles/anemia-heart" }
  ];

  const relatedArticles = [
    {
      title: "نوار قلب در منزل",
      description: "تشخیص تپش قلب و آریتمی بدون نیاز به مراجعه به بیمارستان",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "خدمات"
    },
    {
      title: "خدمات اکوکاردیوگرافی در منزل",
      description: "بررسی قدرت پمپاژ قلب و دریچه‌ها در محیط آرام خانه",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "خدمات"
    },
    {
      title: "ورم پا؛ زنگ خطر خاموش قلب یا مشکل ساده؟",
      description: "رابطه ورم پا با نارسایی قلبی و روش‌های تشخیص در منزل",
      image: legEdemaImage,
      link: "/articles/leg-edema",
      category: "قلب"
    }
  ];

  const faqItems = [
    {
      question: "آیا کم‌خونی واقعاً به قلب آسیب می‌زند؟",
      answer: "بله. وقتی هموگلوبین پایین می‌آید، قلب مجبور می‌شود سریع‌تر و قوی‌تر بزند تا اکسیژن کافی به بدن برسد. کم‌خونی طولانی‌مدت و شدید می‌تواند به بزرگ شدن قلب و در نهایت نارسایی قلبی منجر شود؛ به‌ویژه در سالمندان و افراد دارای بیماری زمینه‌ای قلبی."
    },
    {
      question: "از کجا بفهمم کم‌خونی من قلبم را درگیر کرده است؟",
      answer: "تپش قلب مکرر، خستگی شدید با کمترین فعالیت، تنگی نفس هنگام راه رفتن یا خوابیدن، سرگیجه و رنگ‌پریدگی نشانه‌های هشدار هستند. در این شرایط انجام نوار قلب (ECG) و اکوکاردیوگرافی برای بررسی وضعیت قلب ضروری است."
    },
    {
      question: "چه آزمایش‌هایی برای بررسی کم‌خونی لازم است؟",
      answer: "آزمایش کامل سلول‌های خون (CBC)، آهن سرم، فریتین و TSH (برای بررسی تیروئید) پایه‌ی تشخیص هستند. تمام این آزمایش‌ها در منزل شما توسط پرستار نمونه‌گیری می‌شوند و نیازی به مراجعه به آزمایشگاه نیست."
    },
    {
      question: "آیا می‌توانم قرص آهن را بدون آزمایش مصرف کنم؟",
      answer: "خیر. مصرف خودسرانه آهن خطرناک است؛ اگر علت کم‌خونی فقر آهن نباشد (مثلاً کمبود ویتامین B12 یا بیماری‌های زمینه‌ای باشد)، مصرف آهن نه‌تنها مفید نیست بلکه ذخیره اضافی آهن می‌تواند به کبد و قلب آسیب بزند. ابتدا آزمایش بدهید و فقط با تجویز پزشک دارو مصرف کنید."
    },
    {
      question: "آموزش کم‌خونی در منزل چگونه انجام می‌شود؟",
      answer: "در نوید زندگی، پرستار در محل شما نمونه خون می‌گیرد، نوار قلب و در صورت نیاز اکوکاردیوگرافی پورتابل انجام می‌شود و پزشک متخصص با ویزیت در منزل، نتیجه را بررسی کرده و برنامه درمانی از جمله آمپول آهن وریدی را در منزل اجرا می‌کند."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="کم‌خونی و قلب؛ وقتی فقر آهن قلب را خسته می‌کند | نوید زندگی"
        description="رابطه کم‌خونی و فقر آهن با بیماری قلبی: علائم تپش قلب و تنگی نفس، آزمایش CBC و فریتین در منزل، نوار قلب و اکو در منزل تهران و کرج."
        keywords="کم‌خونی و قلب, فقر آهن و تپش قلب, آزمایش خون در منزل, CBC در منزل, نوار قلب در منزل, اکو در منزل, آمپول آهن در منزل, ویزیت پزشک منزل"
        canonical="https://navidzendegi.com/articles/anemia-heart"
        ogType="article"
      />

      <ArticleSchema
        title="کم‌خونی و قلب؛ وقتی فقر آهن قلب را خسته می‌کند"
        description="راهنمای جامع اثر کم‌خونی بر قلب و خدمات تشخیصی و درمانی در منزل"
        publishedTime="2026-09-14"
        modifiedTime="2026-09-14"
        author="تیم پزشکی نوید زندگی"
        image={anemiaHeartImage}
      />

      <Header />
      <FloatingContact />

      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              کم‌خونی و قلب؛ وقتی فقر آهن قلب را خسته می‌کند
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۲۴ شهریور ۱۴۰۵</p>
          </header>

          <img
            src={anemiaHeartImage}
            alt="آزمایش خون کم‌خونی و نوار قلب در منزل"
            className="w-full h-auto rounded-lg mb-8"
            width={1280}
            height={854}
            loading="lazy"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            <p className="text-lg">
              خستگی دائمی، رنگ‌پریدگی و تپش قلب را بسیاری از افراد بخشی از زندگی شلوغ امروزی می‌دانند؛ اما این سه نشانه با هم، می‌توانند پیام یک مشکل شایع اما جدی باشند: کم‌خونی. آنچه کمتر کسی می‌داند این است که کم‌خونی درمان‌نشده، فقط «کمی ضعف و سرگیجه» نیست؛ بلکه قلب را مجبور به کار اضافه می‌کند و در طول زمان می‌تواند به بزرگ شدن قلب، آریتمی و حتی نارسایی قلبی بینجامد.
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                کم‌خونی چگونه قلب را درگیر می‌کند؟
              </h2>
              <p>
                هموگلوبین، پروتئین موجود در گلبول‌های قرمز است که وظیفه حمل اکسیژن از ریه‌ها به تمام اندام‌ها را بر عهده دارد. وقتی سطح هموگلوبین پایین می‌آید، مقدار اکسیژنی که به قلب و سایر اندام‌ها می‌رسد کاهش می‌یابد. قلب برای جبران این کمبود، دو کار انجام می‌دهد:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>تندتر زدن:</strong> افزایش ضربان قلب تا اکسیژن بیشتری در هر دقیقه به گردش درآید؛ همین موضوع تپش قلب (Palpitation) ایجاد می‌کند.</li>
                <li><strong>قوی‌تر زدن:</strong> افزایش قدرت انقباض هر ضربان؛ در نتیجه قلب می‌تواند در مدت چند ماه بزرگ شود و عملکرد پمپاژ آن دچار اختلال شود.</li>
              </ul>
              <p>
                این وضعیت که به آن «نارسایی قلبی با برون‌ده بالا» گفته می‌شود، در سالمندان، بیماران دیابتی و افراد با سابقه انسداد عروق کرونر بسیار خطرناک‌تر است؛ چون قلب این افراد قبلاً ذخیره چندانی برای کار اضافه ندارد.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg my-4">
                <p className="text-blue-800 m-0">
                  <strong>نکته مهم:</strong> اگر کم‌خونی شما با تنگی نفس یا درد قفسه سینه همراه است، این می‌تواند نشانه فشار حاد بر قلب باشد. انجام <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> و بررسی <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکوکاردیوگرافی در منزل</Link> سریع‌ترین راه رد کردن مشکل قلبی است.
                </p>
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نشانه‌های هشدار کم‌خونی که نباید نادیده گرفت
              </h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>خستگی و ضعف که با استراحت بهتر نمی‌شود</li>
                <li>تپش قلب یا احساس «لرزیدن» قلب، به‌ویژه بعد از فعالیت ساده</li>
                <li>تنگی نفس هنگام بالا رفتن از پله یا حتی راه رفتن</li>
                <li>سرگیجه و سیاهی رفتن چشم هنگام بلند شدن</li>
                <li>رنگ‌پریدگی پوست و داخل پلک</li>
                <li>سردرد، ریزش مو و شکنندگی ناخن‌ها (به‌ویژه در فقر آهن)</li>
                <li>بی‌حسی و گزگز دست و پا (در کم‌خونی ناشی از کمبود ویتامین B12)</li>
              </ul>
              <p>
                در افراد مسن، این علائم اغلب به اشتباه به «پیری» نسبت داده می‌شود؛ در حالی که یک آزمایش خون ساده می‌تواند علت واقعی را مشخص کند.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                شایع‌ترین علل کم‌خونی
              </h2>
              <p>
                <strong>۱. فقر آهن:</strong> شایع‌ترین علت در جهان و ایران؛ به‌ویژه در زنان (خونریزی قاعدگی)، بارداری، خونریزی پنهان گوارشی (زخم معده یا هموروئید) و رژیم‌های غذایی نامناسب.
              </p>
              <p>
                <strong>۲. کمبود ویتامین B12 و فولات:</strong> شایع در گیاه‌خواران، سالمندان و افرادی که داروهای کاهش اسید معده مصرف می‌کنند.
              </p>
              <p>
                <strong>۳. بیماری‌های مزمن:</strong> نارسایی کلیه، کم‌کاری تیروئید، عفونت‌ها و بیماری‌های التهابی می‌توانند تولید گلبول قرمز را سرکوب کنند.
              </p>
              <p>
                <strong>۴. خونریزی‌های پنهان:</strong> گاهی تنها نشانه یک زخم یا حتی تومور روده، کم‌خونی تدریجی است؛ به همین دلیل کم‌خونی در بزرگسالان هرگز نباید «ساده» فرض شود.
              </p>
            </section>

            <section className="mt-8 bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تشخیص کم‌خونی و پیگیری قلبی در منزل؛ بدون ترافیک و نوبت
              </h2>
              <p>
                خبر خوب این است که تمام مراحل تشخیص و پیگیری کم‌خونی و اثر آن بر قلب، در منزل شما قابل انجام است. ما در نوید زندگی بیمارستان را به خانه شما می‌آوریم:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">آزمایش خون در منزل</h3>
              <p>
                پرستار مجرب ما در منزل شما نمونه‌گیری انجام می‌دهد؛ آزمایش کامل خون (CBC)، آهن سرم، فریتین، ویتامین B12، فولات و TSH. جواب‌ها به پزشک شما ارسال می‌شود و اگر آزمایش <Link to="/articles/cholesterol-test" className="text-primary hover:underline">چربی خون</Link> یا قند خون هم لازم باشد، در همان نوبت انجام می‌شود.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">نوار قلب (ECG) در منزل</h3>
              <p>
                در بیماران کم‌خون که تپش قلب دارند، <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> اولین قدم برای بررسی آریتمی‌ها و فشار حاد بر قلب است؛ بدون نیاز به حمل بیمار مسن به بیمارستان.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">اکوکاردیوگرافی پورتابل در منزل</h3>
              <p>
                اگر کم‌خونی طولانی‌مانده باشد، اکو مشخص می‌کند آیا قلب بزرگ شده، ضخامت دیواره‌ها تغییر کرده یا قدرت پمپاژ (EF) افت کرده است یا خیر. تمام این بررسی‌ها روی تخت خانه و در حضور خانواده انجام می‌شود.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">ویزیت پزشک و تزریق‌های درمانی در منزل</h3>
              <p>
                پزشک متخصص با <Link to="/services/specialist-doctor" className="text-primary hover:underline font-semibold">ویزیت در منزل</Link> علت کم‌خونی را مشخص و درمان را شروع می‌کند. در مواردی که قرص آهن جواب نمی‌دهد یا تحمل آن سخت است (تهوع شدید)، <Link to="/services/nursing" className="text-primary hover:underline font-semibold">خدمات پرستاری در منزل</Link> آمپول آهن وریدی و سایر تزریق‌ها را با استانداردهای ایمن اجرا می‌کند.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                درمان کم‌خونی؛ چرا خوددرمانی خطرناک است؟
              </h2>
              <p>
                بسیاری از افراد با شنیدن «کم‌خونی» بلافاصله سراغ قرص آهن می‌روند. این کار می‌تواند خطرناک باشد؛ زیرا:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>اگر علت کم‌خونی کمبود B12 یا فولات باشد، مصرف آهن مشکل را حل نمی‌کند و آسیب عصبی ادامه می‌یابد.</li>
                <li>تجمع آهن اضافی در بدن می‌تواند به کبد، قلب و لوزالمعده آسیب بزند.</li>
                <li>کم‌خونی گاهی تنها نشانه خونریزی پنهان گوارشی است؛ پنهان کردن آن با مصرف مکمل، تشخیص بیماری زمینه‌ای را به تعویق می‌اندازد.</li>
              </ul>
              <p>
                به همین دلیل اولین قدم همیشه «آزمایش» است، نه دارو. دارو فقط با تجویز پزشک و بر اساس نتیجه آزمایش شروع می‌شود.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تغذیه‌ای که به قلب کم‌خون کمک می‌کند
              </h2>
              <p>
                در کنار درمان دارویی، رژیم غذایی سرشار از آهن و ویتامین C سرعت بهبود را بالا می‌برد: گوشت قرمز کم‌چرب، جگر، عدس و حبوبات، سبزیجات برگ‌سبز و مصرف همزمان مرکبات یا فلفل دلمه‌ای همراه غذا (برای جذب بهتر آهن). چای و قهوه را با فاصله یک‌ساعت از وعده غذایی مصرف کنید؛ چون جذب آهن را مهار می‌کنند. برای آشنایی بیشتر با تغذیه سالم قلب، مقاله <Link to="/articles/fruits-heart-health" className="text-primary hover:underline">میوه‌ها و سلامت قلب</Link> را بخوانید.
              </p>
            </section>

            <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span className="font-bold text-red-800">چه زمانی کم‌خونی یک وضعیت اورژانسی است؟</span>
              </div>
              <p className="text-red-800 m-0">
                در صورت مشاهده علائم زیر بدون تأخیر با تیم پزشکی تماس بگیرید:
              </p>
              <ul className="list-disc list-inside text-red-800 mt-2 space-y-1">
                <li>درد یا فشار در قفسه سینه</li>
                <li>تنگی نفس در حالت استراحت</li>
                <li>غش کردن یا عدم هوشیاری</li>
                <li>ضربان بسیار تند یا نامنظم همراه با تعریق سرد</li>
              </ul>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع معتبر</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>World Health Organization (WHO): Anaemia Fact Sheet</li>
                <li>American Heart Association: Anemia and Heart Disease</li>
                <li>Cleveland Clinic: Anemia - Symptoms &amp; Causes</li>
              </ul>
            </section>

            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg my-6">
              <p className="text-yellow-800 m-0 font-medium">
                ⚠️ هشدار: اطلاعات این مقاله جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. از مصرف خودسرانه قرص آهن و هرگونه خوددرمانی جداً خودداری کنید؛ تشخیص و تجویز دارو فقط توسط پزشک و بر اساس آزمایش انجام می‌شود.
              </p>
            </div>

            <section className="mt-8 bg-primary/10 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                با «نوید زندگی» قلب سالم را به خانه بیاورید
              </h2>
              <p className="mb-6">
                اگر خستگی و تپش قلب شما را نگران کرده، اجازه دهید بدون یک قدم بیرون رفتن، آزمایش خون، نوار قلب و ویزیت متخصص در منزل شما انجام شود. همین حالا تماس بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCall}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  <a href="tel:09386117912">تماس: ۰۹۳۸۶۱۱۷۹۱۲</a>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  size="lg"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  مشاوره واتساپ
                </Button>
              </div>
            </section>
          </div>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </article>
      </main>

      <Footer />
    </ArticleLayout>
  );
};

export default AnemiaHeartPage;
