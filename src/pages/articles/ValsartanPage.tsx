import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import valsartanImage from "@/assets/valsartan-medication.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";
import sacubitrilValsartanImage from "@/assets/sacubitril-valsartan.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";

const ValsartanPage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.slice(1)}`, '_blank');
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "والزارتان", url: "/articles/valsartan" }
  ];

  const faqs = [
    {
      question: "والزارتان برای چه بیماری‌هایی تجویز می‌شود؟",
      answer: "والزارتان برای درمان فشار خون بالا، نارسایی قلبی، بهبود وضعیت پس از حمله قلبی و در برخی موارد برای محافظت از کلیه در بیماران دیابتی تجویز می‌شود."
    },
    {
      question: "چگونه والزارتان فشار خون را کاهش می‌دهد؟",
      answer: "والزارتان با مسدود کردن گیرنده‌های آنژیوتانسین II، از تنگی عروق و احتباس سدیم و آب جلوگیری می‌کند و باعث گشاد شدن رگ‌های خونی و کاهش فشار خون می‌شود."
    },
    {
      question: "آیا والزارتان در دوران بارداری امن است؟",
      answer: "خیر، مصرف والزارتان در دوران بارداری مطلقاً ممنوع است زیرا می‌تواند باعث آسیب جدی یا مرگ جنین شود، به‌خصوص در سه‌ماهه دوم و سوم بارداری."
    },
    {
      question: "شایع‌ترین عوارض جانبی والزارتان چیست؟",
      answer: "شایع‌ترین عوارض جانبی شامل سرگیجه، خستگی، سردرد، افت فشار خون، و درد شکمی هستند. در صورت بروز سرگیجه شدید یا احساس غش، باید دراز بکشید و به پزشک اطلاع دهید."
    },
    {
      question: "آیا والزارتان بر سطح پتاسیم خون تأثیر دارد؟",
      answer: "بله، والزارتان می‌تواند سطح پتاسیم خون را افزایش دهد. بنابراین لازم است پتاسیم خون به‌طور منظم کنترل شود و از مصرف جایگزین‌های نمک حاوی پتاسیم خودداری شود."
    },
    {
      question: "چه زمانی باید مصرف والزارتان را قطع کنم؟",
      answer: "هرگز بدون مشورت با پزشک، مصرف والزارتان را قطع نکنید. در صورت بروز استفراغ یا اسهال شدید، واکنش‌های آلرژیک (تورم صورت، لب‌ها یا زبان)، یا مشکلات تنفسی، فوراً با پزشک تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "فشار خون بالا: علائم، عوارض و روش‌های کنترل",
      description: "راهنمای جامع فشار خون بالا، علائم هشداردهنده، عوارض جدی و روش‌های درمانی مؤثر",
      image: bloodPressureImage,
      link: "/articles/high-blood-pressure",
      category: "قلب و عروق"
    },
    {
      title: "ساکوبیتریل/والزارتان (انترستو): داروی پیشرفته نارسایی قلبی",
      description: "آشنایی با داروی ترکیبی ساکوبیتریل/والزارتان، موارد مصرف و نکات مهم مصرف",
      image: sacubitrilValsartanImage,
      link: "/articles/sacubitril-valsartan",
      category: "دارو"
    },
    {
      title: "خدمات تخصصی قلب و عروق در منزل",
      description: "ویزیت متخصص قلب، انجام نوار قلب و اکوکاردیوگرافی در منزل با تیم نوید زندگی",
      image: cardiologyImage,
      link: "/services/cardiology",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="والزارتان (دیووان): موارد مصرف، عوارض جانبی و نکات مهم"
        description="راهنمای جامع داروی والزارتان برای درمان فشار خون بالا و نارسایی قلبی. آشنایی با مکانیسم اثر، عوارض جانبی، هشدارها و نکات مهم مصرف این داروی قلبی-عروقی."
        keywords="والزارتان, دیووان, Valsartan, Diovan, فشار خون بالا, نارسایی قلبی, ARB, مسدودکننده گیرنده آنژیوتانسین, داروهای قلبی, عوارض جانبی والزارتان"
        canonical="https://navidzendegi.com/articles/valsartan"
        ogType="article"
        publishedTime="2024-01-19"
        modifiedTime="2024-01-19"
      />
      <ArticleSchema
        title="والزارتان (دیووان): موارد مصرف، عوارض جانبی و نکات مهم"
        description="راهنمای جامع داروی والزارتان برای درمان فشار خون بالا و نارسایی قلبی"
        publishedTime="2024-01-19"
        modifiedTime="2024-01-19"
        image={valsartanImage}
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <img
            src={valsartanImage}
            alt="داروی والزارتان (دیووان) برای درمان فشار خون بالا و نارسایی قلبی"
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            💊 داروی والزارتان (Valsartan) - دیووان (Diovan)
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            والزارتان یک داروی پرکاربرد در حوزه قلب و عروق است که برای کنترل فشار خون بالا و درمان نارسایی قلبی تجویز می‌شود. این دارو متعلق به دسته مسدودکننده‌های گیرنده آنژیوتانسین II (ARBs) است و به بهبود گردش خون و کاهش بار کاری قلب کمک می‌کند.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            موارد مصرف اصلی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            موارد مصرف اصلی داروی والزارتان بر اساس منابع تخصصی عبارتند از:
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li>
              <strong>درمان فشار خون بالا (Hypertension):</strong> والزارتان به عنوان یک درمان اولیه یا ترکیبی برای کاهش فشار خون بالا تجویز می‌شود. این کار از آسیب به عروق، سکته مغزی و حمله قلبی جلوگیری می‌کند.
            </li>
            <li>
              <strong>درمان نارسایی قلبی (Heart Failure):</strong> برای درمان نارسایی قلبی و کمک به بهبود عملکرد پمپاژ قلب استفاده می‌شود.
            </li>
            <li>
              <strong>پس از حمله قلبی (Post-Myocardial Infarction):</strong> برای بهبود بقا و کاهش خطر مرگ ناشی از مشکلات قلبی-عروقی در بیمارانی که پس از حمله قلبی دچار نارسایی یا اختلال عملکرد بطن چپ شده‌اند، تجویز می‌گردد.
            </li>
            <li>
              <strong>نفروپاتی دیابتی (Diabetic Kidney Disease):</strong> در برخی موارد برای مدیریت مشکلات کلیوی در بیماران دیابتی نیز کاربرد دارد.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            مکانیسم اثر (Mechanism of Action)
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            والزارتان به عنوان یک مسدودکننده گیرنده آنژیوتانسین II (ARB) عمل می‌کند:
          </p>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li>
              <strong>مسدود کردن هورمون:</strong> این دارو با اتصال به گیرنده‌های نوع AT1، از اتصال هورمون آنژیوتانسین II به این گیرنده‌ها جلوگیری می‌کند.
            </li>
            <li>
              <strong>اثرات آنژیوتانسین II:</strong> آنژیوتانسین II یک ماده تنظیم‌کننده قوی فشار خون است که باعث تنگی عروق (انقباض عروق)، احتباس سدیم و آب، و افزایش فشار خون می‌شود.
            </li>
            <li>
              <strong>نتیجه عملکرد:</strong> والزارتان با مهار این اثرات، باعث شل شدن و گشاد شدن رگ‌های خونی (Vasodilation)، کاهش مقاومت عروقی و در نتیجه کاهش فشار خون می‌شود. این عمل، بار کاری قلب را کاهش داده و جریان خون را بهبود می‌بخشد.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            عوارض جانبی و هشدارها
          </h2>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۱. عوارض جانبی شایع
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            برخی از عوارض جانبی شایع این دارو، به ویژه در بیماران مبتلا به نارسایی قلبی یا فشار خون بالا، عبارتند از:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>سرگیجه (شایع‌ترین عارضه)</li>
            <li>افت فشار خون (Hypotension)</li>
            <li>خستگی</li>
            <li>سردرد</li>
            <li>درد شکمی</li>
            <li>اسهال</li>
            <li>درد مفاصل و کمر</li>
            <li>سرفه (در صورت بروز سرفه خشک و تحریک‌کننده، والزارتان اغلب جایگزین مهارکننده‌های ACE می‌شود)</li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۲. هشدارهای جدی و منع مصرف
          </h3>

          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li>
              <strong>خطر در بارداری (Pregnancy):</strong> مصرف والزارتان در دوران بارداری مطلقاً ممنوع است. این دارو می‌تواند باعث آسیب جدی یا مرگ جنین شود، به خصوص اگر در سه ماهه دوم یا سوم استفاده شود.
            </li>
            <li>
              <strong>آنژیوادم (Angioedema):</strong> بروز واکنش‌های آلرژیک شدید که شامل تورم صورت، لب‌ها، زبان یا گلو و مشکل در تنفس و بلع است. این حالت یک اورژانس پزشکی محسوب می‌شود.
            </li>
            <li>
              <strong>افزایش پتاسیم خون (Hyperkalemia):</strong> والزارتان می‌تواند سطح پتاسیم خون را بالا ببرد، که در صورت عدم کنترل می‌تواند منجر به مشکلات جدی مانند ضربان قلب نامنظم شود. لازم است سطح پتاسیم به طور منظم توسط پزشک کنترل شود و از مصرف جایگزین‌های نمک حاوی پتاسیم اجتناب شود.
            </li>
            <li>
              <strong>مشکلات کلیوی:</strong> در بیمارانی که از قبل مشکلات کلیوی یا قلبی دارند، والزارتان ممکن است عملکرد کلیه را بدتر کند. پایش عملکرد کلیه با آزمایش خون ضروری است.
            </li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-950/30 border-r-4 border-amber-500 p-6 my-8 rounded-lg">
            <p className="text-foreground leading-relaxed">
              <strong>⚠️ هشدار مهم:</strong> اگر هنگام مصرف والزارتان احساس سرگیجه، ضعف یا غش کردید، دراز بکشید و در اسرع وقت به پزشک خود اطلاع دهید. در صورت بروز استفراغ یا اسهال شدید که منجر به کم‌آبی بدن می‌شود، با پزشک مشورت کنید، زیرا ممکن است لازم باشد مصرف دارو برای مدتی قطع شود. هرگز بدون نظر پزشک، داروی خود را قطع یا تغییر دوز ندهید.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 border-r-4 border-red-500 p-6 my-8 rounded-lg">
            <p className="text-foreground leading-relaxed">
              <strong>⚠️ هشدار عدم خودسرانه مصرف دارو:</strong> والزارتان یک داروی تجویزی است و مصرف آن بدون نسخه پزشک و بدون نظارت پزشکی می‌تواند خطرناک باشد. تنظیم دوز و پایش عوارض جانبی نیاز به ارزیابی پزشکی دارد. هرگز بر اساس تجربه دیگران یا خودسرانه این دارو را مصرف نکنید.
            </p>
          </div>

          <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-3">
              📞 نیاز به مشاوره تخصصی دارید؟
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              اگر شما یا عزیزانتان از داروهای قلبی-عروقی مانند والزارتان استفاده می‌کنید و نیاز به پایش وضعیت قلبی، کنترل فشار خون یا مشاوره دارویی دارید، می‌توانید از خدمات{" "}
              <a href="/services/cardiology" className="text-primary hover:underline font-semibold">
                ویزیت متخصص قلب در منزل
              </a>
              {" "}یا{" "}
              <a href="/services/internal-medicine" className="text-primary hover:underline font-semibold">
                ویزیت پزشک داخلی در منزل
              </a>
              {" "}استفاده کنید.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleCall} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </Button>
              <Button onClick={handleWhatsApp} variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                واتساپ
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <PricingInfo />
          </div>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default ValsartanPage;
