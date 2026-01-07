import { Link } from "react-router-dom";
import { Phone, MessageCircle, AlertTriangle, Heart, Pill, Activity } from "lucide-react";
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

import heartMedicationsImage from "@/assets/heart-medications-warning.jpg";
import aspirinImage from "@/assets/aspirin-medication.jpg";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";

const HeartMedicationsWarningPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "خطرات قطع داروهای قلبی", url: "/articles/heart-medications-warning" }
  ];

  const relatedArticles = [
    {
      title: "آسپرین؛ داروی ضدپلاکت حیاتی برای قلب",
      description: "نحوه عملکرد آسپرین در پیشگیری از سکته قلبی و مغزی",
      image: aspirinImage,
      link: "/articles/aspirin",
      category: "داروها"
    },
    {
      title: "آتورواستاتین؛ محافظ رگ‌های قلب",
      description: "نقش استاتین‌ها در کنترل چربی و محافظت از قلب",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "داروها"
    },
    {
      title: "خدمات نوار قلب در منزل",
      description: "انجام ECG در منزل برای بررسی ریتم و سلامت قلب",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "خدمات"
    }
  ];

  const faqItems = [
    {
      question: "اگر یک روز فراموش کنم داروی قلبم را بخورم چه کنم؟",
      answer: "اگر چند ساعت از زمان مصرف نگذشته، دارو را مصرف کنید. اما اگر نزدیک دوز بعدی هستید، دوز فراموش شده را مصرف نکرده و به برنامه عادی برگردید. هرگز دوز را دوبرابر نکنید و در اولین فرصت با پزشک مشورت کنید."
    },
    {
      question: "چرا با اینکه فشارم نرمال شده، باید داروی فشار بخورم؟",
      answer: "فشار خون شما به دلیل مصرف دارو نرمال است، نه به این دلیل که بیماری بهبود یافته. قطع دارو باعث بازگشت فشار و آسیب به قلب، کلیه و مغز می‌شود."
    },
    {
      question: "آیا می‌توانم به جای دارو از گیاهان دارویی استفاده کنم؟",
      answer: "گیاهان دارویی هرگز جایگزین داروهای قلبی نیستند. برخی مکمل‌ها حتی با داروها تداخل خطرناک دارند. هر تغییری باید با مشورت متخصص قلب انجام شود."
    },
    {
      question: "قبل از جراحی دندان باید داروی پلاویکس را قطع کنم؟",
      answer: "هرگز خودسرانه این دارو را قطع نکنید. قبل از هر جراحی، حتماً با متخصص قلب مشورت کنید تا پروتکل ایمن قطع یا تغییر دارو برای شما تنظیم شود."
    },
    {
      question: "چرا باید استاتین بخورم در حالی که چربی خونم نرمال است؟",
      answer: "استاتین‌ها علاوه بر کاهش چربی، از پارگی پلاک‌های چربی داخل رگ جلوگیری می‌کنند. بیماران قلبی باید این دارو را مادام‌العمر مصرف کنند."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="چرا نباید داروهای قلبی را خودسرانه قطع کرد؟ | نوید زندگی"
        description="خطرات قطع ناگهانی داروهای قلبی: آسپرین، پلاویکس، استاتین و بتابلاکرها. راهنمای مراقبت قلبی در منزل با خدمات ویزیت، اکو و نوار قلب در تهران و کرج."
        keywords="قطع دارو قلب, خطر قطع پلاویکس, ترومبوز استنت, داروی قلبی, ویزیت قلب منزل, اکو در منزل, نوار قلب خانه"
        canonical="https://navidzendegi.com/articles/heart-medications-warning"
        ogType="article"
      />

      <ArticleSchema
        title="چرا هرگز نباید داروهای قلبی را خودسرانه قطع کرد؟"
        description="راهنمای کامل خطرات قطع ناگهانی داروهای قلبی و خدمات مراقبتی در منزل"
        publishedTime="2025-01-07"
        modifiedTime="2025-01-07"
        author="تیم پزشکی نوید زندگی"
        image={heartMedicationsImage}
      />

      <Header />
      <FloatingContact />

      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              چرا هرگز نباید داروهای قلبی را خودسرانه قطع کرد؟
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۷ دی ۱۴۰۴</p>
          </header>

          <img
            src={heartMedicationsImage}
            alt="داروهای قلبی و اهمیت مصرف منظم"
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            <p className="text-lg">
              بیماری‌های قلبی عروقی ماهیتی مزمن دارند؛ این یعنی درمان آن‌ها نه یک دوره کوتاه، بلکه یک مسیر مداوم برای حفظ حیات است. بسیاری از مراجعین ما در مرکز خدمات پزشکی نوید زندگی می‌پرسند: «تا کی باید این همه قرص مصرف کنیم؟» یا «اگر چند روز دارو را قطع کنیم چه اتفاقی می‌افتد؟».
            </p>

            <p>
              واقعیت این است که قطع ناگهانی داروهای قلبی، بدن را در وضعیت «آماده‌باش نظامی» قرار می‌دهد که می‌تواند منجر به حوادث ناگواری شود. در این مقاله، خطرات این اقدام را بررسی کرده و راهکارهای جایگزین ایمن مانند <Link to="/services/cardiology" className="text-primary hover:underline">خدمات قلبی در منزل</Link> را معرفی می‌کنیم.
            </p>

            <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span className="font-bold text-red-800">هشدار مهم</span>
              </div>
              <p className="text-red-800 m-0">
                هرگز بدون مشورت با پزشک متخصص، داروهای قلبی خود را قطع یا تغییر ندهید. این اقدام می‌تواند جان شما را به خطر بیندازد.
              </p>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Pill className="h-6 w-6 text-red-600" />
                ۱. خطر قرمز: قطع داروهای ضد پلاکت (آسپرین و پلاویکس)
              </h2>
              <p>
                این داروها از چسبیدن پلاکت‌ها به هم و تشکیل لخته در محل‌های حساس (مانند داخل استنت یا رگ‌های تنگ شده) جلوگیری می‌کنند. برای اطلاعات بیشتر درباره <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link> و <Link to="/articles/clopidogrel" className="text-primary hover:underline">پلاویکس (کلوپیدوگرل)</Link> مقالات تخصصی ما را مطالعه کنید.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">فاجعه‌ای به نام ترومبوز استنت</h3>
              <p>
                اگر شما استنت (فنر) گذاشته‌اید، قطع پلاویکس یا آسپرین یعنی دعوت مستقیم از لخته خون برای بستن آن رگ. لخته شدن خون در استنت بسیار خطرناک‌تر از گرفتگی عادی رگ است و معمولاً منجر به سکته‌های قلبی وسیع می‌شود.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">اثر بازگشتی پلاکت‌ها</h3>
              <p>
                تحقیقات نشان می‌دهد که پس از قطع این داروها، فعالیت پلاکت‌ها به طور جبرانی افزایش می‌یابد. اگر به هر دلیلی (مثل جراحی دندان یا جراحی عمومی) جراح از شما خواسته دارو را قطع کنید، حتماً ابتدا درخواست <Link to="/services/specialist-doctor" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link> بدهید تا پروتکل ایمن قطع دارو برای شما تنظیم شود.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity className="h-6 w-6 text-blue-600" />
                ۲. آتورواستاتین؛ بیش از یک چربی‌سوز ساده
              </h2>
              <p>
                بسیاری از بیماران به اشتباه فکر می‌کنند چون آزمایش خون آن‌ها چربی نرمال را نشان می‌دهد، می‌توانند <Link to="/articles/atorvastatin" className="text-primary hover:underline">آتورواستاتین</Link> یا <Link to="/articles/rosuvastatin" className="text-primary hover:underline">روزوواستاتین</Link> را قطع کنند.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">پایداری پلاک‌ها</h3>
              <p>
                استاتین‌ها از «پارگی پلاک‌های چربی» جلوگیری می‌کنند. قطع ناگهانی این دارو باعث می‌شود رسوبات چربی داخل رگ‌ها ناپایدار شده و با یک نوسان فشار خون، کنده شوند و رگ را مسدود کنند.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-600" />
                ۳. بحران فشار خون و تپش قلب (بتا بلاکرها و لوزارتان)
              </h2>
              <p>
                داروهایی مثل متوپرولول (متورال) و کارودیلول ضربان قلب را کنترل کرده و بار کاری قلب را کم می‌کنند. برای اطلاعات بیشتر درباره <Link to="/articles/bisoprolol" className="text-primary hover:underline">بیزوپرولول</Link> مقاله تخصصی ما را بخوانید.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">شوک آدرنالین</h3>
              <p>
                با قطع این داروها، قلب ناگهان در برابر هورمون‌های استرس بی‌دفاع می‌شود. این موضوع باعث افزایش شدید ضربان قلب و فشار خون بازگشتی می‌شود که می‌تواند منجر به پاره شدن عروق مغزی (سکته مغزی) گردد.
              </p>
            </section>

            <section className="mt-8 bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                خدمات نوید زندگی؛ جایگزین هوشمندانه برای قطع خودسرانه دارو
              </h2>
              <p>
                گاهی بیماران به دلیل دشواری رفت‌وآمد به مطب یا ترافیک سنگین، چک‌آپ‌های خود را عقب می‌اندازند و وقتی دارویشان تمام می‌شود، آن را تکرار نمی‌کنند. ما در نوید زندگی این چالش را حل کرده‌ایم:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">ویزیت پزشک متخصص در منزل</h3>
              <p>
                به جای قطع دارو به دلیل عوارض جانبی (مثل سرگیجه یا سرفه)، می‌توانید از خدمات <Link to="/services/specialist-doctor" className="text-primary hover:underline font-semibold">ویزیت متخصص در منزل</Link> استفاده کنید. پزشک با بررسی دقیق وضعیت شما در محیط آرام خانه، دوز دارو را تعدیل کرده یا داروی سازگارتری تجویز می‌کند.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">نوار قلب (ECG) در منزل؛ پایش سریع</h3>
              <p>
                اگر داروهای خود را نامنظم مصرف کرده‌اید و دچار تپش قلب یا سنگینی قفسه سینه شده‌اید، معطل ترافیک نشوید. انجام <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> توسط تیم نوید زندگی، در کمترین زمان ممکن وضعیت ریتم قلب شما را مشخص کرده و از حوادث ناگوار جلوگیری می‌کند.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">اکوکاردیوگرافی (اکو) در منزل</h3>
              <p>
                برای بررسی قدرت پمپاژ قلب و سلامت دریچه‌ها پس از یک دوره مصرف دارو، نیازی به جابه‌جایی بیمار نیست. دستگاه‌های پیشرفته پورتابل ما امکان انجام <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکو در منزل</Link> را فراهم کرده‌اند تا متخصص قلب بتواند بر اساس نتایج دقیق، در مورد ادامه یا تغییر روند دارویی شما تصمیم بگیرد.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                چه زمانی باید نگران شویم؟ (علائم هشدار)
              </h2>
              <p>
                اگر به هر دلیلی مصرف داروهایتان قطع شده و علائم زیر را دارید، بلافاصله باید بررسی‌های پزشکی انجام شود:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تنگی نفس ناگهانی (نیاز به اکو و نوار قلب فوری)</li>
                <li>درد یا احساس فشار در قفسه سینه که به دست چپ یا گردن می‌زند</li>
                <li>سرگیجه شدید یا تاری دید (نشانه نوسان شدید فشار خون)</li>
                <li>تپش قلب نامنظم یا احساس ایست قلبی لحظه‌ای</li>
                <li>تعریق سرد و حالت تهوع</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع معتبر</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>American Heart Association (AHA) - Medication Adherence Guidelines</li>
                <li>European Society of Cardiology (ESC) - Clinical Practice Guidelines</li>
                <li>Mayo Clinic - Risks of stopping heart medications abruptly</li>
              </ul>
            </section>

            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg my-6">
              <p className="text-yellow-800 m-0 font-medium">
                ⚠️ هشدار: اطلاعات این مقاله جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. هرگز بدون نظر پزشک متخصص، داروهای خود را تغییر ندهید یا قطع نکنید.
              </p>
            </div>

            <section className="mt-8 bg-primary/10 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نیاز به مشاوره یا ویزیت در منزل دارید؟
              </h2>
              <p className="mb-6">
                تیم تخصصی نوید زندگی در تهران و کرج آماده ارائه خدمات ویزیت متخصص قلب، نوار قلب و اکو در منزل شماست.
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

export default HeartMedicationsWarningPage;
