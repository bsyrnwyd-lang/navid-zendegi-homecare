import { Phone, MessageCircle } from "lucide-react";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import dexamethasoneImage from "@/assets/dexamethasone-injection.jpg";
import injectionHomeImage from "@/assets/injection-home.jpg";
import neurobionImage from "@/assets/neurobion-ampoule-article.jpg";
import ivTherapyImage from "@/assets/iv-therapy-home.jpg";

const DexamethasonePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "نوروبیون آمپول",
      description: "معرفی کامل آمپول نوروبیون و کاربردهای درمانی آن",
      image: neurobionImage,
      link: "/articles/neurobion-ampoule",
      category: "دارو"
    },
    {
      title: "سرم تراپی در منزل",
      description: "همه چیز درباره سرم درمانی و تزریق سرم در منزل",
      image: ivTherapyImage,
      link: "/articles/iv-therapy-home",
      category: "خدمات"
    },
    {
      title: "تزریقات در منزل",
      description: "انواع تزریقات و اهمیت انجام تخصصی آن توسط پرستار",
      image: injectionHomeImage,
      link: "/services/nursing",
      category: "خدمات"
    }
  ];

  const faqItems = [
    {
      question: "دگزامتازون چه زمانی تجویز می‌شود؟",
      answer: "دگزامتازون برای مدیریت آلرژی‌های شدید، التهاب‌های حاد، تورم مغزی، تشدید آسم و COPD، و در بیماران کووید-19 با نیاز به اکسیژن تجویز می‌شود. این دارو تحت نظر پزشک و با تشخیص دقیق استفاده می‌شود."
    },
    {
      question: "آیا تزریق دگزامتازون در منزل امن است؟",
      answer: "بله، تزریق دگزامتازون در منزل توسط پرستاران مجرب و با تجربه کاملاً امن است. تیم نوید زندگی با رعایت کامل استانداردهای پزشکی و با تکنیک‌های صحیح، این خدمت را ارائه می‌دهد."
    },
    {
      question: "عوارض جانبی دگزامتازون چیست؟",
      answer: "عوارض جانبی دگزامتازون شامل افزایش قند خون، احتباس مایعات، افزایش فشار خون، اختلالات خواب، و در صورت مصرف طولانی‌مدت، سرکوب غده آدرنال است. پایش منظم توسط پرستار در منزل این عوارض را کنترل می‌کند."
    },
    {
      question: "چرا نباید دگزامتازون را ناگهان قطع کرد؟",
      answer: "قطع ناگهانی دگزامتازون پس از مصرف طولانی‌مدت می‌تواند به بحران آدرنال منجر شود. این دارو باید به تدریج و طبق دستور پزشک کاهش یابد. پرستار در منزل برنامه قطع تدریجی را دقیقاً اجرا می‌کند."
    },
    {
      question: "دگزامتازون چقدر قوی‌تر از کورتیزون است؟",
      answer: "دگزامتازون تقریباً ۲۵ برابر قوی‌تر از هیدروکورتیزون طبیعی بدن عمل می‌کند. این ویژگی آن را به گزینه‌ای مؤثر برای شرایط حاد و التهابی شدید تبدیل کرده است."
    },
    {
      question: "بیماران دیابتی می‌توانند دگزامتازون دریافت کنند؟",
      answer: "بله، اما با نظارت دقیق قند خون. دگزامتازون می‌تواند قند خون را افزایش دهد، بنابراین پرستار در منزل قند خون بیمار را قبل و بعد از تزریق کنترل کرده و در صورت نیاز با پزشک هماهنگ می‌کند."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="دگزامتازون و تزریق در منزل: درمان تخصصی ضد التهاب | نوید زندگی"
        description="همه چیز درباره دگزامتازون، کاربردها، عوارض و تزریق ایمن آن در منزل توسط پرستاران مجرب نوید زندگی در سراسر تهران"
        keywords="دگزامتازون, تزریق دگزامتازون در منزل, Dexamethasone, کورتیکوستروئید, التهاب, آلرژی, تزریقات در منزل تهران"
        canonical="https://navidzendegi.com/articles/dexamethasone"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-20"
        modifiedTime="2025-01-20"
      />
      <Header />
      <FloatingContact />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"دگزامتازون",url:"/articles/dexamethasone"}]} />
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              دگزامتازون (Dexamethasone) و تزریق در منزل: درمان تخصصی ضد التهاب تحت نظارت کادر مجرب
            </h1>
            <div className="flex flex-col gap-2 text-muted-foreground text-lg">
              <p>نویسنده: نوید زندگی</p>
              <p>تاریخ انتشار: ۱ بهمن ۱۴۰۳</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={dexamethasoneImage}
              alt="تزریق دگزامتازون در منزل توسط پرستار مجرب"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              دگزامتازون، این کورتیکوستروئید قدرتمند، یک داروی حیاتی در مدیریت التهاب، آلرژی‌های شدید و برخی شرایط اورژانسی است. به دلیل اهمیت دوز دقیق و روش صحیح تزریق، دریافت آن در محیط خانه توسط پرستاران مجرب، انتخابی هوشمندانه است.
            </p>

            <p className="text-lg leading-relaxed text-foreground mb-8">
              <a href="/services/nursing" className="text-primary hover:underline">نوید زندگی</a> با ارائه خدمات تزریقات دگزامتازون در منزل تهران، اطمینان حاصل می‌کند که این دارو با بالاترین استانداردهای ایمنی و تحت نظارت کامل، به شما تزریق شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              مکانیسم شگفت‌انگیز دگزامتازون: قدرت ضدالتهابی فوق‌العاده
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              دگزامتازون یک گلوکوکورتیکوئید سنتتیک با پتانسیل بالا است که تقریباً ۲۵ برابر قوی‌تر از هیدروکورتیزون طبیعی بدن عمل می‌کند. مکانیسم اثر آن در دو حوزه حیاتی است:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              مهار کامل آبشار التهاب
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              این دارو با مهار تولید واسطه‌های شیمیایی التهابی (مانند پروستاگلاندین‌ها) در سطح سلولی، از ایجاد درد، قرمزی و تورم جلوگیری می‌کند. این اثر سریع، در شرایط حاد پزشکی ضروری است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              سرکوب سیستم ایمنی
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-8">
              دگزامتازون فعالیت لنفوسیت‌ها و سایر سلول‌های ایمنی را کاهش می‌دهد. این خاصیت، آن را به گزینه‌ای کلیدی برای مدیریت بیماری‌های خودایمنی تبدیل می‌کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              کاربردهای حیاتی و شایع دگزامتازون
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              تزریق دگزامتازون در منزل، به ویژه برای شرایط حاد که نیاز به تسکین سریع دارند، بهترین راهکار است:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ۱. مدیریت آلرژی‌ها و التهاب‌های حاد
            </h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li className="text-lg leading-relaxed text-foreground">
                <strong>آلرژی شدید و کهیر:</strong> تزریق دگزامتازون می‌تواند به سرعت واکنش‌های آلرژیک شدید و منتشر را مهار کرده و علائم خطرناک تنفسی را تسکین دهد.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>تشدید آسم و COPD:</strong> در حملات حاد تنفسی، کاهش التهاب راه‌های هوایی توسط دگزامتازون، باعث بهبود فوری وضعیت تنفسی بیمار می‌شود.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ۲. کاهش تورم مغزی در بیماران خاص
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              یکی از کاربردهای تخصصی دگزامتازون، کاهش تورم مغزی (Cerebral Edema) ناشی از تومورهای مغزی است. این دارو با تثبیت دیواره عروق مغزی، علائم عصبی بیمار را به طور قابل توجهی بهبود می‌بخشد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ۳. استاندارد درمان کووید-۱۹
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-8">
              مطالعات مهمی نظیر RECOVERY Trial نشان دادند که دگزامتازون می‌تواند میزان مرگ و میر را در بیماران مبتلا به کووید-۱۹ که نیاز به اکسیژن تکمیلی دارند، کاهش دهد. این اثر با مهار طوفان سیتوکینی مرتبط است.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ملاحظات تخصصی و ریسک‌های تزریق دگزامتازون
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              دگزامتازون به همان اندازه که قدرتمند است، دارای عوارض جانبی جدی است که نیازمند تزریق ایمن و پایش دقیق می‌باشد:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              خطر عوارض در تزریق نامناسب
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              تزریق غیراصولی می‌تواند باعث درد موضعی، آسیب عصبی یا جذب نامنظم دارو شود. تیم پرستاری <a href="/services/nursing" className="text-primary hover:underline">نوید زندگی</a> با تجربه بالا، تزریق عضلانی و وریدی را با رعایت کامل استانداردها انجام می‌دهد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              پایش قند خون
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              دگزامتازون سطح قند خون را افزایش می‌دهد. پرستار در منزل می‌تواند سطح قند خون بیمار (به‌ویژه <a href="/articles/diabetes" className="text-primary hover:underline">بیماران دیابتی</a>) را قبل و بعد از تزریق کنترل کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              خطر سرکوب آدرنال
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-8">
              قطع ناگهانی این دارو پس از یک دوره مصرف طولانی بسیار خطرناک است. پرستار می‌تواند دستورالعمل‌های پزشک برای قطع تدریجی دارو را به دقت اجرا کند.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                چرا تزریق در منزل؟
              </h3>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                تزریق دگزامتازون در منزل مزایای زیادی دارد:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li className="text-lg leading-relaxed text-foreground">راحتی و آرامش بیمار در محیط خانه</li>
                <li className="text-lg leading-relaxed text-foreground">کاهش خطر عفونت‌های بیمارستانی</li>
                <li className="text-lg leading-relaxed text-foreground">صرفه‌جویی در زمان و هزینه</li>
                <li className="text-lg leading-relaxed text-foreground">نظارت مستقیم پرستار بر وضعیت بیمار</li>
                <li className="text-lg leading-relaxed text-foreground">امکان پایش علائم حیاتی قبل و بعد از تزریق</li>
              </ul>
            </div>

            {/* Call to Action Section */}
            <div className="bg-secondary/10 p-8 rounded-xl my-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                تزریق ایمن دگزامتازون در منزل
              </h3>
              <p className="text-lg text-center text-foreground mb-6 leading-relaxed">
                برای تزریق تخصصی و ایمن دگزامتازون در منزل توسط پرستاران مجرب نوید زندگی، همین حالا تماس بگیرید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  تماس فوری: 09386117912
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  size="lg"
                  className="gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  پیام در واتساپ
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              منابع علمی
            </h2>
            <ol className="list-decimal pr-6 mb-8 space-y-2">
              <li className="text-base leading-relaxed text-muted-foreground">
                Falkner, K. L., & Buse, J. B. (2024). Glucocorticoid therapy: Pharmacology and adverse effects. UpToDate.
              </li>
              <li className="text-base leading-relaxed text-muted-foreground">
                Schimmer, B. P., & Funder, J. W. (2018). Adrenocorticotropic Hormone; Adrenocortical Steroids and Their Synthetic Analogs. In Goodman & Gilman's The Pharmacological Basis of Therapeutics.
              </li>
              <li className="text-base leading-relaxed text-muted-foreground">
                Kostaras, M., et al. (2014). The use of dexamethasone in the palliative management of patients with glioblastoma. Supportive Care in Cancer, 22(12), 3369-3375.
              </li>
              <li className="text-base leading-relaxed text-muted-foreground">
                RECOVERY Collaborative Group. (2021). Dexamethasone in hospitalized patients with Covid-19. The New England Journal of Medicine, 384(8), 693-704.
              </li>
            </ol>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Pricing Info */}
          <div className="mt-12">
            <PricingInfo />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DexamethasonePage;
