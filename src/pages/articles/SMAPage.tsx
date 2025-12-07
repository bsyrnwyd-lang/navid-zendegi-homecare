import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import smaImage from "@/assets/sma-article.jpg";
import neurologyImage from "@/assets/neurology.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";
import huntingtonImage from "@/assets/huntington-disease-article.jpg";

const SMAPage = () => {
  const faqs = [
    {
      question: "آتروفی عضلانی نخاعی (SMA) چیست؟",
      answer: "آتروفی عضلانی نخاعی یک بیماری ژنتیکی و نورودژنراتیو است که به دلیل نقص در ژن SMN1 ایجاد می‌شود. این بیماری باعث تخریب نورون‌های حرکتی در نخاع شده و منجر به ضعف عضلانی پیشرونده و مشکلات تنفسی می‌گردد."
    },
    {
      question: "تفاوت تیپ‌های مختلف SMA چیست؟",
      answer: "SMA به چهار تیپ تقسیم می‌شود: تیپ 1 (شدیدترین، شروع زیر 6 ماهگی، کودک نمی‌تواند بنشیند)، تیپ 2 (شروع 6-18 ماهگی، می‌تواند بنشیند ولی راه نمی‌رود)، تیپ 3 (شروع بعد از 18 ماهگی، ابتدا راه می‌رود ولی بعداً توانایی را از دست می‌دهد)، و تیپ 4 (خفیف‌ترین، شروع در بزرگسالی)."
    },
    {
      question: "آیا درمانی برای SMA وجود دارد؟",
      answer: "بله، در سال‌های اخیر درمان‌های نوین ژنتیکی شامل نوسینرسن (اسپینرازا)، ریسدیپلام (اوریسدی) و ژن‌درمانی زولگنسما توسعه یافته‌اند که می‌توانند با افزایش پروتئین SMN، پیشرفت بیماری را کند کنند."
    },
    {
      question: "چرا مراقبت در منزل برای بیماران SMA مهم است؟",
      answer: "بیماران SMA به دلیل محدودیت‌های شدید حرکتی و وابستگی به تجهیزات تنفسی، نیاز به مراقبت مستمر و چندتخصصی دارند. ویزیت پزشک در منزل امکان ارزیابی دوره‌ای بدون جابه‌جایی پرخطر بیمار را فراهم می‌کند."
    },
    {
      question: "ژن SMN2 چه نقشی در بیماری دارد؟",
      answer: "ژن SMN2 یک ژن پشتیبان است که حدود 10-15% پروتئین SMN فعال تولید می‌کند. تعداد نسخه‌های این ژن در بیماران مختلف متفاوت است و تعداد بیشتر نسخه‌های SMN2 معمولاً با شدت کمتر بیماری همراه است."
    }
  ];

  const relatedArticles = [
    {
      title: "بیماری هانتیگتون: اختلال نورودژنراتیو ارثی",
      image: huntingtonImage,
      link: "/articles/huntington-disease",
      description: "راهنمای جامع بیماری هانتیگتون، مکانیسم ژنتیکی و درمان‌های نوین",
      category: "سلامت عمومی"
    },
    {
      title: "خدمات نورولوژی در منزل",
      image: neurologyImage,
      link: "/services/neurology",
      description: "ویزیت متخصص مغز و اعصاب در منزل برای بیماران نورولوژیک",
      category: "خدمات پزشکی"
    },
    {
      title: "فیزیوتراپی در منزل",
      image: physiotherapyImage,
      link: "/services/physiotherapy",
      description: "جلسات توان‌بخشی و فیزیوتراپی تخصصی در منزل",
      category: "خدمات پزشکی"
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "آتروفی عضلانی نخاعی (SMA)", url: "/articles/sma" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آتروفی عضلانی نخاعی (SMA): پاتوفیزیولوژی، طبقه‌بندی و درمان‌های نوین | نوید زندگی"
        description="راهنمای جامع آتروفی عضلانی نخاعی (SMA): مکانیسم ژنتیکی، تیپ‌های بالینی، درمان‌های تعدیل‌کننده ژن و خدمات مراقبتی در منزل تهران"
        keywords="آتروفی عضلانی نخاعی, SMA, بیماری ژنتیکی, نورودژنراتیو, اسپینرازا, زولگنسما, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/sma"
        ogType="article"
        publishedTime="2024-12-07"
        modifiedTime="2024-12-07"
      />
      <ArticleSchema
        title="آتروفی عضلانی نخاعی (SMA): پاتوفیزیولوژی، طبقه‌بندی و درمان‌های نوین"
        description="راهنمای جامع آتروفی عضلانی نخاعی (SMA): مکانیسم ژنتیکی، تیپ‌های بالینی، درمان‌های تعدیل‌کننده ژن و خدمات مراقبتی در منزل تهران"
        publishedTime="2024-12-07"
        modifiedTime="2024-12-07"
        image={smaImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
            آتروفی عضلانی نخاعی (SMA): پاتوفیزیولوژی، طبقه‌بندی و درمان‌های نوین
          </h1>

          <img 
            src={smaImage} 
            alt="آتروفی عضلانی نخاعی - تصویر علمی نورون‌های حرکتی و ژن SMN"
            className="w-full rounded-lg mb-8"
          />

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-semibold mb-2">هشدار مهم</p>
                <p className="text-amber-700 text-sm">
                  این مقاله صرفاً جنبه آموزشی دارد. تشخیص و درمان SMA نیازمند ارزیابی تخصصی نورولوژیست و متخصص ژنتیک است. از هرگونه خوددرمانی خودداری کنید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چکیده</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            آتروفی عضلانی نخاعی (SMA) یک بیماری نورودژنراتیو، ژنتیکی و نادر است که به‌دلیل نقص یا حذف در ژن SMN1 ایجاد می‌شود. این بیماری با ضعف عضلانی پیشرونده، اختلال در عملکرد تنفسی و نیاز به مراقبت‌های پیچیده و مداوم مشخص می‌شود. ماهیت محدودکننده حرکت SMA، لزوم دسترسی به <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</Link> و مراقبت تخصصی در منزل را برای پایش دقیق و مداوم وضعیت بیمار دوچندان کرده است.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مکانیسم ژنتیکی و پاتوفیزیولوژی</h2>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">نقص در تولید پروتئین SMN</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>ژن SMN1 (ژن اصلی):</strong> این ژن مسئول تولید پروتئین کامل و پایدار SMN است. حذف یا جهش در هر دو نسخه این ژن، علت اصلی بروز SMA است.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>ژن SMN2 (ژن پشتیبان):</strong> انسان‌ها دارای یک ژن تقریباً مشابه به نام SMN2 هستند که تنها مقدار کمی (حدود 10 تا 15 درصد) از پروتئین تولیدی آن کامل و فعال است.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>اثرات نورونی:</strong> کاهش شدید پروتئین SMN منجر به تخریب انتخابی نورون‌های حرکتی آلفا در شاخ قدامی نخاع شده و پیامد آن، عدم ارسال پیام عصبی به عضلات و آتروفی (تحلیل رفتن) عضلانی است.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">طبقه‌بندی بالینی</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SMA بر اساس سن شروع و حداکثر توانایی حرکتی که بیمار به آن دست می‌یابد، به تیپ‌های مختلف تقسیم می‌شود:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تیپ 1 (بیماری ورتنیگ-هافمن)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            شدیدترین شکل بیماری است. شروع علائم در سن کمتر از 6 ماهگی رخ می‌دهد. کودک هرگز توانایی نشستن بدون کمک را پیدا نمی‌کند. مشکلات تنفسی جدی از ویژگی‌های اصلی این تیپ است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تیپ 2</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            شروع علائم در سن 6 تا 18 ماهگی است. کودک می‌تواند بنشیند اما هرگز توانایی ایستادن یا راه رفتن مستقل را پیدا نمی‌کند. شدت بیماری متوسط تا شدید است و نیاز به حمایت حرکتی دارد.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تیپ 3 (بیماری کوگلبرگ-ولاندر)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            شروع علائم بالای 18 ماهگی تا نوجوانی است. بیمار ابتدا می‌تواند راه برود، اما بعداً توانایی راه رفتن را از دست می‌دهد. شدت بیماری متوسط تا خفیف است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تیپ 4</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            خفیف‌ترین شکل بیماری است. شروع علائم در بزرگسالی (20 تا 30 سالگی) رخ می‌دهد. بیمار توانایی راه رفتن را حفظ می‌کند اما ضعف عضلانی تدریجی دارد.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">درمان‌های تعدیل‌کننده ژن و امیدهای نوین</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            درمان‌های SMA در یک دهه اخیر به طور کامل دگرگون شده‌اند و بر تعدیل ژن SMN2 یا جایگزینی ژن SMN1 متمرکز هستند:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nusinersen (اسپینرازا)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            یک داروی آنتی‌سنس اولیگونوکلئوتید که با تزریق به کانال نخاعی (Intrathecal Injection)، تولید پروتئین SMN کامل را از ژن SMN2 افزایش می‌دهد.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Risdiplam (اوریسدی)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            یک داروی خوراکی که مکانیسم مشابهی با نوسینرسن دارد و به افزایش سطح پروتئین SMN منجر می‌شود. مصرف خوراکی این دارو، تجویز آن را ساده‌تر کرده است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Onasemnogene Abeparvovec (زولگنسما)</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            یک روش ژن‌درمانی که نسخه سالم ژن SMN1 را به سلول‌ها منتقل می‌کند. این درمان عمدتاً برای کودکان در سنین بسیار پایین (زیر 2 سال) تجویز می‌شود و تنها با یک تزریق وریدی انجام می‌گیرد.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مراقبت‌های چندتخصصی و ضرورت ویزیت پزشک در منزل</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            با وجود درمان‌های ژنتیکی، مدیریت SMA یک چالش پیچیده و مزمن است که نیازمند نظارت مستمر و چندتخصصی (<Link to="/services/neurology" className="text-primary hover:underline">نورولوژی</Link>، ریه، تغذیه و <Link to="/services/physiotherapy" className="text-primary hover:underline">توان‌بخشی</Link>) است. به دلیل محدودیت‌های شدید حرکتی و وابستگی بیماران به تجهیزات تنفسی و کمکی سنگین، خروج مکرر از منزل برای پیگیری درمان‌ها دشوار و پرخطر است.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            از این رو، مراقبت تخصصی در منزل اهمیت حیاتی می‌یابد:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 mr-4">
            <li><strong>ویزیت پزشک در منزل تهران:</strong> امکان ارزیابی دوره‌ای توسط نورولوژیست و متخصص ریه بدون جابه‌جایی پرخطر بیمار فراهم می‌شود.</li>
            <li><strong>فیزیوتراپی و کاردرمانی در منزل:</strong> جلسات توان‌بخشی برای جلوگیری از آتروفی بیشتر و مدیریت انحراف ستون فقرات (Scoliosis) باید به صورت منظم انجام شود.</li>
            <li><strong>پایش تجهیزات تنفسی:</strong> نظارت پرستاری و فنی بر عملکرد دستگاه‌های حیاتی مانند ونتیلاتورهای غیرتهاجمی و ابزارهای کمک به سرفه ضروری است.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع علمی</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8 mr-4 text-sm">
            <li>Spinal Muscular Atrophy - Overview and Treatment. Mayo Clinic</li>
            <li>Spinal Muscular Atrophy: Pathogenesis, Classification, and Treatment. Journal of the American Academy of Orthopaedic Surgeons</li>
            <li>SMN2 Gene Copy Number and Severity of Spinal Muscular Atrophy. Nature Genetics</li>
            <li>The New Era of Spinal Muscular Atrophy Treatment. Neurology Journal</li>
            <li>Gene therapy for spinal muscular atrophy. The New England Journal of Medicine</li>
          </ul>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              نیاز به مشاوره تخصصی نورولوژی در منزل دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              برای ارزیابی بیماران SMA و سایر بیماری‌های نورودژنراتیو، تیم پزشکی نوید زندگی با ارائه خدمات ویزیت در منزل، در کنار شما و خانواده‌تان است.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تماس: 09386117912
            </a>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default SMAPage;
