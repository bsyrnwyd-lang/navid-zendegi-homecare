import { Link } from "react-router-dom";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

import stressHeartImage from "@/assets/stress-heart-article.jpg";
import depressionHeartImage from "@/assets/depression-article.jpg";
import bloodPressureImage from "@/assets/blood-pressure-readings.jpg";
import sleepApneaImage from "@/assets/sleep-apnea-heart.jpg";

const StressHeartPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "استرس و قلب", url: "/articles/stress-heart" }
  ];

  const relatedArticles = [
    {
      title: "افسردگی و بیماری قلبی؛ ارتباطی که جدی گرفته نمی‌شود",
      description: "چرا افسردگی خطر بیماری قلبی را افزایش می‌دهد و چگونه می‌توان هر دو را در منزل پایش کرد",
      image: depressionHeartImage,
      link: "/articles/depression-heart-disease",
      category: "سلامت روان"
    },
    {
      title: "فشار خون بالا؛ دشمن خاموش قلب و راه‌های کنترل آن در منزل",
      description: "اندازه‌گیری صحیح فشار خون در منزل، علائم خطر و نقش ویزیت پزشک در خانه",
      image: bloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    },
    {
      title: "آپنه خواب و قلب؛ وقتی خروپف شبانه قلب را خسته می‌کند",
      description: "رابطه آپنه خواب با فشار خون و آریتمی و راه‌های بررسی در منزل",
      image: sleepApneaImage,
      link: "/articles/sleep-apnea-heart",
      category: "قلب و عروق"
    }
  ];

  const faqItems = [
    {
      question: "استرس واقعاً می‌تواند به قلب آسیب بزند؟",
      answer: "بله. هورمون‌های استرس (آدرنالین و کورتیزول) ضربان قلب و فشار خون را بالا می‌برند، التهاب عروق را افزایش می‌دهند و در طول زمان به تشکیل پلاک‌های چربی در رگ‌های قلب کمک می‌کنند. استرس مزمن حتی می‌تواند بدون گرفتگی عروق، عضله قلب را به‌طور موقت ضعیف کند (کاردیومیوپاتی تاکوتسوبو) که علائمش دقیقاً شبیه سکته قلبی است."
    },
    {
      question: "چه علائمی نشان می‌دهد استرس به قلب من فشار آورده است؟",
      answer: "تپش قلب یا احساس پرش‌های نامنظم، فشار یا سنگینی در قفسه سینه در موقعیت‌های تنش‌زا، درد سینه غیرقابل پیش‌بینی که با استراحت بهتر می‌شود، مشکل در به خواب رفتن، سردردهای مکرر، بالا رفتن اندازه‌گیری‌های فشار خون در روزهای پرتنش و خستگی غیرعادی. اگر چنین علائمی دارید، نوار قلب و اندازه‌گیری منظم فشار خون در منزل بهترین شروع بررسی است."
    },
    {
      question: "آیا تپش قلب ناشی از استرس خطرناک است؟",
      answer: "تپش قلب گاه‌به‌گاه در موقعیت‌های استرس‌زا معمولاً بی‌خطر است، اما نمی‌توان بدون بررسی مطمئن شد که علت آن صرفاً استرس است؛ آریتمی‌های واقعی هم اغلب با استرس بدتر می‌شوند. انجام نوار قلب (ECG) در منزل و در موارد تکرارشونده، مانیتورینگ ۲۴ ساعته (هولتر) مشخص می‌کند ریتم قلب سالم است یا نیاز به درمان دارد."
    },
    {
      question: "بررسی اثرات استرس بر قلب در منزل چطور انجام می‌شود؟",
      answer: "پرستار در منزل شما نوار قلب می‌گیرد و فشار خون را در شرایط آرامش واقعی خانه اندازه می‌گیرد؛ چون فشار خون در مطب به‌دلیل «اثر روپوش سفید» اغلب کاذب بالاتر است. در صورت نیاز پزشک، دستگاه هولتر ۲۴ ساعته در منزل نصب می‌شود تا ریتم قلب در طول یک روز واقعی زندگی ثبت شود و اکوکاردیوگرافی پورتابل وضعیت عضله قلب را بررسی می‌کند."
    },
    {
      question: "برای مدیریت استرس، داروهای آرام‌بخش را خودم شروع کنم؟",
      answer: "هرگز. بسیاری از داروهای آرام‌بخش و ضداضطراب با داروهای قلبی تداخل دارند، باعث افت فشار، کندی شدید ضربان قلب یا وابستگی می‌شوند. مدیریت استرس باید با راهکارهای غیردارویی (تنفس عمیق، خواب منظم، فعالیت بدنی ملایم) و در صورت نیاز با تجویز پزشک انجام شود؛ نه با مصرف خودسرانه دارو."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="استرس و قلب؛ وقتی تنش روزمره ضربان قلب را می‌دزدد | نوید زندگی"
        description="رابطه استرس مزمن با بیماری قلبی: تپش قلب، فشار خون بالا و کاردیومیوپاتی تاکوتسوبو؛ نوار قلب، هولتر و اکو در منزل تهران و کرج."
        keywords="استرس و قلب, تپش قلب ناشی از استرس, فشار خون و استرس, کاردیومیوپاتی تاکوتسوبو, نوار قلب در منزل, هولتر در منزل, اکو در منزل, ویزیت پزشک منزل"
        canonical="https://navidzendegi.com/articles/stress-heart"
        ogType="article"
      />

      <ArticleSchema
        title="استرس و قلب؛ وقتی تنش روزمره ضربان قلب را می‌دزدد"
        description="راهنمای جامع اثر استرس بر قلب و خدمات تشخیصی و پایشی در منزل"
        publishedTime="2026-09-25"
        modifiedTime="2026-09-25"
        author="تیم پزشکی نوید زندگی"
        image={stressHeartImage}
      />

      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              استرس و قلب؛ وقتی تنش روزمره ضربان قلب را می‌دزدد
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۳ مهر ۱۴۰۵</p>
          </header>

          <img
            src={stressHeartImage}
            alt="دستگاه اندازه‌گیری فشار خون و هولتر قلب در منزل برای پایش اثر استرس"
            className="w-full h-auto rounded-lg mb-8"
            width={1280}
            height={864}
            loading="lazy"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            <p className="text-lg">
              «قلبت ریلیکس باشه» را زیاد شنیده‌اید، اما واقعیت این است که قلب، اولین و صادق‌ترین عضوی است که استرس را نشان می‌دهد؛ پیش از آن که شما متوجه تنش خود شوید، قلب تندتر می‌زند، فشار خون بالا می‌رود و رگ‌ها تنگ می‌شوند. استرس کوتاه‌مدت بخشی از زندگی است، اما استرس مزمن — از شغل پرتنش، مشکلات مالی یا بی‌خوابی — به‌تدریج راه خود را به بیماری قلبی باز می‌کند.
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                استرس چگونه قلب را تحت تأثیر قرار می‌دهد؟
              </h2>
              <p>
                وقتی بدن در وضعیت استرس قرار می‌گیرد، سیستم «جنگ یا گریز» فعال می‌شود و هورمون‌های آدرنالین و کورتیزول ترشح می‌شوند. این واکنش برای لحظات کوتاه طبیعی است، اما اگر دائمی شود:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>ضربان قلب بالا می‌ماند:</strong> قلب به‌جای استراحت، مدام در حالت «هشدار» کار می‌کند و احساس تپش قلب ایجاد می‌شود.</li>
                <li><strong>فشار خون بالا می‌رود:</strong> رگ‌ها دائماً منقبض می‌مانند و فشار خون به‌تدریج به فشار خون پایدار تبدیل می‌شود.</li>
                <li><strong>التهاب عروق افزایش می‌یابد:</strong> کورتیزول مزمن به دیواره رگ‌ها آسیب می‌زند و زمینه تشکیل پلاک چربی (آترواسکلروز) را فراهم می‌کند.</li>
                <li><strong>خون مستعد لخته شدن می‌شود:</strong> استرس شدید می‌تواند شکل پلاک‌ها را تغییر دهد و خطر سکته قلبی و مغزی را در همان لحظه بالا ببرد.</li>
                <li><strong>عادت‌های مخرب شکل می‌گیرد:</strong> پرخوری، بی‌خوابی، سیگار و کم‌تحرکی که خودشان عوامل خطر قلبی‌اند.</li>
              </ul>
              <p>
                در موارد نادر اما جدی، استرس بسیار شدید (مثل فقدان عزیز یا خبر وحشتناک) می‌تواند عضله قلب را به‌طور موقت ضعیف کند؛ بیماری‌ای که به آن <strong>کاردیومیوپاتی تاکوتسوبو</strong> یا «سندرم قلب شکسته» می‌گویند و علائمش دقیقاً شبیه سکته قلبی است.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نشانه‌هایی که نشان می‌دهد استرس به قلب شما فشار آورده
              </h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تپش قلب یا احساس پرش‌های نامنظم در موقعیت‌های تنش‌زا</li>
                <li>فشار، سنگینی یا فشردگی در قفسه سینه هنگام نگرانی</li>
                <li>درد قفسه سینه که با استراحت و آرام شدن بهتر می‌شود</li>
                <li>بالا رفتن فشار خون در روزهای پرتنش (حتی با رژیم غذایی ثابت)</li>
                <li>مشکل در به خواب رفتن یا بیدار شدن خسته</li>
                <li>سردرد، گره در گلو و درد عضلانی گردن و شانه</li>
                <li>خستگی غیرعادی که با خواب بهتر نمی‌شود</li>
              </ul>
              <p>
                نکته مهم این است که این علائم را نمی‌توان صرفاً به استرس نسبت داد؛ آریتمی‌های واقعی، مشکل تیروئید و بیماری عروق کرونر هم با همین علائم ظاهر می‌شوند. تنها راه اطمینان، بررسی دقیق قلب است، نه حدس و گمان.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg my-4">
                <p className="text-blue-800 m-0">
                  <strong>نکته مهم:</strong> اگر تپش قلب یا درد سینه ناشی از استرس بارها تکرار شده، <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> و در صورت نیاز <Link to="/articles/holter-guide" className="text-primary hover:underline font-semibold">مانیتورینگ ۲۴ ساعته هولتر</Link> مشخص می‌کند که ریتم قلب سالم است یا نیاز به درمان دارد.
                </p>
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                چرا فشار خون را باید در منزل اندازه گرفت؟
              </h2>
              <p>
                حدود ۱۵ تا ۳۰ درصد افراد در مطب پزشک فشار خون کاذب بالایی دارند که به آن «اثر روپوش سفید» می‌گویند؛ یعنی همین استرسِ مراجعه، اندازه‌گیری را به هم می‌ریزد. برعکس، برخی افراد در منزل فشار بالایی دارند که در مطب دیده نمی‌شود (فشار پنهان). به همین دلیل، اندازه‌گیری منظم فشار خون در منزل — در حالت نشسته، بعد از ۵ دقیقه استراحت، در ساعت‌های مشخص روز — معتبرترین تصویر از وضعیت قلب و عروق شماست. برای آشنایی بیشتر، مقاله <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون بالا</Link> را بخوانید.
              </p>
            </section>

            <section className="mt-8 bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                پایش قلب در منزل؛ بدون استرس مطب و نوبت
              </h2>
              <p>
                زیبایی بررسی اثر استرس بر قلب این است که بهترین جای اندازه‌گیری، همان خانه شماست؛ جایی که بدن در شرایط واقعی و بدون تنشِ محیط درمانی است. ما در نوید زندگی همه این خدمات را به منزل شما می‌آوریم:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">نوار قلب (ECG) در منزل</h3>
              <p>
                اگر تپش قلب، درد سینه یا ضربان نامنظم دارید، <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> در چند دقیقه ریتم قلب را ثبت می‌کند؛ بدون ترافیک، بدون صف و در محیطی که ضربان قلب شما «طبیعی» است، نه مضطرب.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">هولتر قلب ۲۴ ساعته در منزل</h3>
              <p>
                تپش قلب‌های استرسی گاهی فقط چند لحظه‌ای‌اند و در یک نوار قلب لحظه‌ای ثبت نمی‌شوند. دستگاه هولتر که در منزل نصب می‌شود، ریتم قلب را در طول یک شبانه‌روز کامل زندگی عادی ثبت می‌کند و پرش‌های مخفی را آشکار می‌کند.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">اندازه‌گیری فشار خون و آزمایش خون در منزل</h3>
              <p>
                پرستار ما فشار خون را در شرایط استاندارد و آرامش خانه اندازه می‌گیرد و در صورت نیاز آزمایش‌های کلیدی قلب مانند <Link to="/articles/cholesterol-test" className="text-primary hover:underline">پروفایل چربی خون</Link> و قند خون را همان‌جا انجام می‌دهد؛ چون استرس مزمن هم قند و هم چربی خون را بالا می‌برد.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">ویزیت پزشک متخصص در منزل</h3>
              <p>
                پزشک با <Link to="/services/specialist" className="text-primary hover:underline font-semibold">ویزیت در منزل</Link> نتایج نوار قلب، هولتر و آزمایش‌ها را با هم بررسی می‌کند و اگر اضطراب یا بی‌خوابی در مشکلات قلبی شما نقش دارد، برنامه درمانی مناسب — بدون داروهای خودسرانه — تنظیم می‌شود. <Link to="/services/nursing" className="text-primary hover:underline font-semibold">خدمات پرستاری در منزل</Link> هم پیگیری‌های بعدی را انجام می‌دهد.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                مدیریت استرس برای قلب سالم‌تر؛ از این امروز شروع کنید
              </h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>تنفس عمیق:</strong> روزی دو نوبت، ۵ دقیقه تنفس شکمی آرام؛ ساده‌ترین راه خاموش کردن واکنش «جنگ یا گریز».</li>
                <li><strong>خواب منظم:</strong> کمتر از ۷ ساعت خواب، خطر فشار خون و بیماری قلبی را بالا می‌برد.</li>
                <li><strong>پیاده‌روی روزانه:</strong> ۳۰ دقیقه پیاده‌روی ملایم هم استرس را کم می‌کند هم مستقیماً به عروق قلب خوب است.</li>
                <li><strong>کاهش کافئین و نیکوتین:</strong> قهوه زیاد و سیگار، اثر استرس بر قلب را چند برابر می‌کنند؛ درباره اثر قهوه، مقاله <Link to="/articles/coffee-heart" className="text-primary hover:underline">قهوه و قلب</Link> را بخوانید.</li>
                <li><strong>حرف زدن و تقسیم بار:</strong> انزوا و فروخوردن نگرانی‌ها با سلامت قلب بیگانه است؛ ارتباط با عزیزان و در صورت نیاز مشاوره، بخشی از درمان است.</li>
              </ul>
              <p>
                برای درک عمیق‌تر رابطه حال روحی و قلب، مقاله <Link to="/articles/depression-heart-disease" className="text-primary hover:underline">افسردگی و بیماری قلبی</Link> را بخوانید.
              </p>
            </section>

            <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span className="font-bold text-red-800">چه زمانی درد سینه استرس نیست و اورژانس است؟</span>
              </div>
              <p className="text-red-800 m-0">
                در صورت مشاهده علائم زیر بدون تأخیر با اورژانس یا تیم پزشکی تماس بگیرید:
              </p>
              <ul className="list-disc list-inside text-red-800 mt-2 space-y-1">
                <li>درد فشارنده قفسه سینه که بیش از چند دقیقه طول می‌کشد</li>
                <li>انتشار درد به بازو، گردن، فک یا پشت</li>
                <li>تنگی نفس شدید همراه با تعریق سرد</li>
                <li>تپش قلب بسیار شدید همراه با غش یا نزدیک به غش</li>
                <li>درد سینه در فردی که سابقه بیماری قلبی یا استنت دارد</li>
              </ul>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع معتبر</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>American Heart Association: Stress and Heart Health</li>
                <li>European Heart Journal: Chronic Stress and Cardiovascular Disease</li>
                <li>Cleveland Clinic: Broken Heart Syndrome (Takotsubo Cardiomyopathy)</li>
              </ul>
            </section>

            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg my-6">
              <p className="text-yellow-800 m-0 font-medium">
                ⚠️ هشدار: اطلاعات این مقاله جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. از مصرف خودسرانه قرص‌های آرام‌بخش، ضداضطراب و داروهای قلبی برای «آرام کردن» تپش قلب جداً خودداری کنید؛ تشخیص اینکه علائم شما استرس است یا مشکل قلبی، فقط با معاینه و بررسی توسط پزشک انجام می‌شود.
              </p>
            </div>

            <section className="mt-8 bg-primary/10 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                با «نوید زندگی» قلب آرام را به خانه بیاورید
              </h2>
              <p className="mb-6">
                اگر تپش قلب، درد سینه یا فشار خون بالای ناشی از استرس شما را نگران کرده، اجازه دهید بدون یک قدم بیرون رفتن، نوار قلب، هولتر، آزمایش خون و ویزیت متخصص در منزل شما انجام شود. همین حالا تماس بگیرید.
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
    </ArticleLayout>
  );
};

export default StressHeartPage;
