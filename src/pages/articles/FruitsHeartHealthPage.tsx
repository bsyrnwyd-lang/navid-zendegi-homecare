import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/fruits-heart-health.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import cholesterolImage from "@/assets/cholesterol-test-article.jpg";
import dashDietImage from "@/assets/dash-diet.jpg";

const FruitsHeartHealthPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بهترین میوه‌ها برای سلامت قلب", url: "/articles/fruits-heart-health" }
  ];

  const faqs = [
    {
      question: "بهترین میوه برای کاهش فشار خون کدام است؟",
      answer: "موز و آووکادو به دلیل محتوای بالای پتاسیم، بهترین میوه‌ها برای کاهش فشار خون هستند. پتاسیم باعث دفع سدیم اضافی از بدن شده و دیواره عروق را شل می‌کند. البته اگر داروی فشار خون مصرف می‌کنید، قبل از مصرف زیاد پتاسیم حتماً با پزشک مشورت کنید."
    },
    {
      question: "آیا گریپ‌فروت برای بیماران قلبی مضر است؟",
      answer: "گریپ‌فروت با بسیاری از داروهای قلبی مثل آتورواستاتین، وراپامیل و برخی داروهای فشار خون تداخل شدید دارد. این تداخل می‌تواند سطح دارو در خون را به طور خطرناکی افزایش دهد. قبل از مصرف گریپ‌فروت حتماً با متخصص مشورت کنید."
    },
    {
      question: "انار چه تأثیری بر رگ‌های قلب دارد؟",
      answer: "انار حاوی آنتوسیانین و پلی‌فنول‌های قوی است که از اکسید شدن کلسترول LDL جلوگیری می‌کنند. تحقیقات نشان داده مصرف منظم آب انار می‌تواند ضخامت دیواره شریان کاروتید را کاهش داده و از تشکیل پلاک جلوگیری کند."
    },
    {
      question: "بیماران دیابتی-قلبی چه میوه‌هایی می‌توانند بخورند؟",
      answer: "سیب به دلیل فیبر پکتین بهترین گزینه است چون مانع نوسانات ناگهانی قند خون می‌شود. توت‌ها نیز قند کمی دارند و آنتی‌اکسیدان بالایی دارند. از میوه‌های پرقند مانند انگور و خرما باید با احتیاط استفاده شود."
    },
    {
      question: "روزانه چند واحد میوه برای سلامت قلب کافی است؟",
      answer: "توصیه علمی مصرف ۳ تا ۵ واحد میوه متنوع در روز است. تنوع رنگ میوه‌ها (قرمز، بنفش، نارنجی، سبز) تضمین‌کننده دریافت طیف کامل آنتی‌اکسیدان‌ها و ویتامین‌هاست."
    }
  ];

  const relatedArticles = [
    {
      title: "رژیم مدیترانه‌ای و سلامت قلب",
      description: "بررسی جامع رژیم غذایی مدیترانه‌ای و تأثیر آن بر قلب و عروق",
      link: "/articles/mediterranean-diet",
      image: mediterraneanDietImage,
      category: "تغذیه"
    },
    {
      title: "آزمایش کلسترول و چربی خون",
      description: "راهنمای کامل آزمایش کلسترول و تفسیر نتایج آن",
      link: "/articles/cholesterol-test",
      image: cholesterolImage,
      category: "قلب و عروق"
    },
    {
      title: "رژیم غذایی DASH برای فشار خون",
      description: "رژیم DASH: بهترین رژیم غذایی برای کنترل فشار خون بالا",
      link: "/articles/dash-diet",
      image: dashDietImage,
      category: "تغذیه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بهترین میوه‌ها برای سلامت قلب و عروق | نوید زندگی"
        description="راهنمای علمی بهترین میوه‌ها برای قلب: انار، موز، مرکبات و سیب. تداخل دارویی گریپ‌فروت. آزمایش خون و اکو قلب در منزل نوید زندگی."
        keywords="بهترین میوه برای قلب و عروق، میوه‌های کاهنده فشار خون، آزمایش خون در منزل، تداخل گریپ‌فروت با داروهای قلب، نوید زندگی"
        canonical="https://navidzendegi.com/articles/fruits-heart-health"
        ogType="article"
      />
      <ArticleSchema
        title="بهترین میوه‌ها برای سلامت قلب و عروق"
        description="راهنمای علمی تأثیر میوه‌ها بر سلامت قلب و نقش پایش‌های منزل"
        publishedTime="2026-03-10"
        modifiedTime="2026-03-10"
        image={heroImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <img
          src={heroImage}
          alt="بهترین میوه‌ها برای سلامت قلب و عروق"
          className="w-full rounded-2xl shadow-lg mb-8 mt-6"
        />

        <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۲۰ اسفند ۱۴۰۴</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          بهترین میوه‌ها برای سلامت قلب و عروق؛ داروخانه‌های طبیعی
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          میوه‌ها فراتر از یک میان‌وعده ساده، «داروخانه‌های طبیعی» برای قلب هستند. ترکیبات موجود در میوه‌ها مستقیماً بر فشار خون، کلسترول و انعطاف‌پذیری عروق اثر می‌گذارند. تحقیقات نشان می‌دهد که مصرف منظم میوه‌های خاص می‌تواند ریسک سکته قلبی را تا ۲۵٪ کاهش دهد.
        </p>

        {/* بخش ۱ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۱. میوه‌های قرمز و بنفش؛ محافظان رگ‌ها</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          میوه‌هایی مثل انار، شاتوت، تمشک و انگور سیاه حاوی رنگدانه‌هایی به نام «آنتوسیانین» هستند.
        </p>

        <h3 className="text-xl font-bold mb-3">مکانیسم اثر</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          این ترکیبات مانع از اکسید شدن کلسترول LDL می‌شوند. کلسترول تا زمانی که اکسید نشود، به دیواره رگ نمی‌چسبد؛ بنابراین این میوه‌ها از تشکیل پلاک و نیاز به <Link to="/articles/stent-smoking-danger" className="text-primary font-bold hover:underline">استنت‌گذاری</Link> پیشگیری می‌کنند.
        </p>

        <h3 className="text-xl font-bold mb-3">انار: پاک‌کننده طبیعی عروق</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          انار به عنوان «پاک‌کننده طبیعی عروق» شناخته می‌شود و می‌تواند ضخامت دیواره شریان کاروتید را کاهش دهد.
        </p>

        {/* بخش ۲ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۲. موز و آووکادو؛ تنظیم‌کننده‌های فشار خون</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          پتاسیم دشمن اصلی سدیم (نمک) در بدن است. پتاسیم باعث دفع نمک اضافی از طریق کلیه‌ها شده و دیواره عروق را شل می‌کند. این کار مستقیماً <Link to="/articles/high-blood-pressure" className="text-primary font-bold hover:underline">فشار خون</Link> را پایین می‌آورد.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          اگر داروی فشار خون مصرف می‌کنید، مصرف زیاد پتاسیم ممکن است با برخی داروها تداخل کند. تیم <Link to="/services/laboratory" className="text-primary font-bold hover:underline">آزمایشگاه سیار ما</Link> با انجام آزمایش خون در منزل، سطح پتاسیم شما را چک می‌کند تا رژیم میوه‌ای شما ایمن باشد.
        </p>

        {/* بخش ۳ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۳. مرکبات؛ تقویت‌کننده قدرت پمپاژ</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          پرتقال، لیموشیرین و گریپ‌فروت حاوی فلاونوئیدی به نام «هسپریدین» هستند. این ماده عملکرد لایه داخلی رگ‌ها (اندوتلیوم) را بهبود بخشیده و خاصیت ارتجاعی قلب را حفظ می‌کند.
        </p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-base font-bold text-destructive mb-2">⚠️ هشدار تداخل دارویی</p>
          <p className="text-muted-foreground">
            گریپ‌فروت با بسیاری از داروهای قلبی مثل <Link to="/articles/atorvastatin" className="text-primary hover:underline">آتورواستاتین</Link> و وراپامیل تداخل شدید دارد. متخصصین ما در <Link to="/services/specialist" className="text-primary hover:underline">ویزیت منزل</Link>، لیست میوه‌های ممنوعه را بر اساس نسخه دارویی شما تنظیم می‌کنند.
          </p>
        </div>

        {/* بخش ۴ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۴. سیب؛ فیبر محلول و کاهش کلسترول</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          سیب حاوی فیبر «پکتین» است که مانند یک آهنربا در روده عمل کرده و مانع جذب <Link to="/articles/cholesterol-test" className="text-primary font-bold hover:underline">کلسترول</Link> بد می‌شود.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          فیبر سیب همچنین مانع نوسانات ناگهانی قند خون می‌شود؛ موضوعی که برای بیماران قلبی-دیابتی حیاتی است.
        </p>

        {/* بخش ۵ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۵. نقش «نوید زندگی» در مدیریت تغذیه قلب</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          میوه‌ها همیشه بی‌خطر نیستند، به‌ویژه برای بیماران قلبی. ما این خدمات را در منزل فراهم کرده‌ایم:
        </p>

        <h3 className="text-xl font-bold mb-3">آنالیز بیوشیمیایی در منزل</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          قبل از پیشنهاد رژیم میوه‌ای، سطح قند خون (HbA1c) و الکترولیت‌های شما (پتاسیم، سدیم، کلسیم) را در منزل اندازه می‌گیریم.
        </p>

        <h3 className="text-xl font-bold mb-3">اکوکاردیوگرافی و مانیتورینگ</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          در بیمارانی که دچار نارسایی قلبی هستند، ما با <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">اکو در منزل</Link> بررسی می‌کنیم که آیا رژیم غذایی به کاهش بار قلب کمک کرده است یا خیر.
        </p>

        <h3 className="text-xl font-bold mb-3">تنظیم تداخلات دارویی</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          <Link to="/services/specialist" className="text-primary font-bold hover:underline">پزشک متخصص ما در منزل</Link>، تداخل میوه‌هایی مثل گریپ‌فروت یا موز را با داروهای حساس شما (مثل <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link>) بررسی و اصلاح می‌کند.
        </p>

        {/* بخش ۶ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۶. پکیج طلایی میوه برای قلب (روزانه)</h2>

        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>صبح:</strong> یک عدد سیب با پوست (فیبر).</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>میان‌وعده:</strong> یک مشت توت یا شاتوت (آنتوسیانین).</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>عصر:</strong> نصف آووکادو یا یک عدد موز متوسط (پتاسیم).</span>
          </li>
        </ul>

        {/* هشدار */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-base font-bold text-destructive mb-2">⚠️ هشدار مهم</p>
          <p className="text-muted-foreground">
            هرگز بدون مشاوره پزشک، رژیم غذایی خود را تغییر ندهید. مصرف بیش از حد برخی میوه‌ها برای بیماران دیابتی یا کلیوی می‌تواند خطرناک باشد. قبل از شروع هر رژیم میوه‌ای، حتماً با متخصص مشورت کنید.
          </p>
        </div>

        {/* نتیجه‌گیری */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">نتیجه‌گیری</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          میوه‌ها ابزارهای قدرتمندی برای بازسازی قلب هستند، اما مانند هر دارویی، باید هوشمندانه مصرف شوند. رنگارنگ بودن بشقاب میوه شما، ضامن سلامت لایه‌های مختلف قلب شماست. مرکز نوید زندگی در کنار شماست تا با پایش‌های دقیق پزشکی در منزل، مطمئن شود که رژیم غذایی شما در بهترین مسیر درمانی قرار دارد.
        </p>

        {/* CTA */}
        <div className="bg-muted/30 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-bold mb-3">دریافت خدمات تخصصی در منزل</h3>
          <p className="text-muted-foreground mb-4">
            برای آزمایش خون، اکو قلب یا مشاوره تغذیه‌ای در منزل با ما تماس بگیرید:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={handleCall} className="group">
              <Phone className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              <span>تماس: <a href="tel:09386117912" className="underline">۰۹۳۸۶۱۱۷۹۱۲</a></span>
            </Button>
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default FruitsHeartHealthPage;
