import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import thrombolyticImage from "@/assets/thrombolytic-agents-article.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";
import ecgImage from "@/assets/ecg-home-service.jpg";
import aspirinImage from "@/assets/aspirin-medication.jpg";

const ThrombolyticAgentsPage = () => {
  const faqs = [
    {
      question: "تفاوت اصلی آلتپلاز و رتپلاز چیست؟",
      answer: "تفاوت اصلی در نیمه‌عمر و نحوه تجویز است. رتپلاز نیمه‌عمر طولانی‌تر (13-16 دقیقه) دارد و به‌صورت دو دوز بولوس سریع تزریق می‌شود، در حالی که آلتپلاز نیمه‌عمر کوتاه‌تر (5 دقیقه) دارد و نیازمند انفوزیون 90 دقیقه‌ای است."
    },
    {
      question: "آیا داروهای ترومبولیتیک را می‌توان در منزل تزریق کرد؟",
      answer: "خیر. تزریق عوامل ترومبولیتیک به دلیل خطر خون‌ریزی جدی، تنها در محیط بیمارستانی با نظارت دقیق مجاز است. نقش تیم پزشکی در منزل بر تشخیص سریع و انتقال فوری بیمار به بیمارستان متمرکز است."
    },
    {
      question: "ترومبولیتیک‌ها چگونه عمل می‌کنند؟",
      answer: "این داروها با تبدیل پلاسمینوژن به پلاسمین عمل می‌کنند. پلاسمین آنزیمی است که رشته‌های فیبرین (ماده اصلی تشکیل‌دهنده لخته) را تجزیه کرده و باعث باز شدن عروق مسدودشده می‌شود."
    },
    {
      question: "پنجره زمانی برای درمان ترومبولیتیک چقدر است؟",
      answer: "بهترین نتایج زمانی حاصل می‌شود که درمان در کمتر از 30 دقیقه پس از ورود به بیمارستان (Door-to-Needle Time) شروع شود. هر چه درمان زودتر شروع شود، میزان عضله قلبی نجات‌یافته بیشتر خواهد بود."
    },
    {
      question: "چه کسانی نباید ترومبولیتیک دریافت کنند؟",
      answer: "افرادی با سابقه سکته مغزی خون‌ریزی‌دهنده، جراحی اخیر، خون‌ریزی فعال، آنوریسم مغزی یا فشار خون بسیار بالا نباید این داروها را دریافت کنند. ارزیابی دقیق کنتراندیکاسیون‌ها قبل از تجویز ضروری است."
    }
  ];

  const relatedArticles = [
    {
      title: "علائم سکته قلبی",
      image: cardiologyImage,
      link: "/articles/heart-attack-symptoms",
      description: "تشخیص زودهنگام علائم سکته قلبی و اقدامات اورژانسی",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب در منزل",
      image: ecgImage,
      link: "/articles/ecg-home",
      description: "خدمات نوار قلب پرتابل در منزل برای تشخیص سریع",
      category: "خدمات پزشکی"
    },
    {
      title: "آسپرین: نقش در بیماری‌های قلبی",
      image: aspirinImage,
      link: "/articles/aspirin",
      description: "راهنمای جامع مصرف آسپرین در پیشگیری و درمان بیماری‌های قلبی",
      category: "دارو"
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "مقایسه رتپلاز و آلتپلاز", url: "/articles/thrombolytic-agents" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مقایسه رتپلاز و آلتپلاز: عوامل ترومبولیتیک در درمان سکته قلبی | نوید زندگی"
        description="مقایسه فارماکولوژیک آلتپلاز (tPA) و رتپلاز (rPA) در درمان سکته قلبی حاد، نقش تشخیص اورژانس سکته قلبی در منزل و انتقال سریع بیمار"
        keywords="رتپلاز, آلتپلاز, ترومبولیتیک, سکته قلبی, STEMI, درمان لخته خون, تشخیص سکته قلبی در منزل"
        canonical="https://navidzendegi.com/articles/thrombolytic-agents"
        ogType="article"
        publishedTime="2024-12-07"
        modifiedTime="2024-12-07"
      />
      <ArticleSchema
        title="مقایسه رتپلاز و آلتپلاز: عوامل ترومبولیتیک در درمان سکته قلبی"
        description="مقایسه فارماکولوژیک آلتپلاز (tPA) و رتپلاز (rPA) در درمان سکته قلبی حاد، نقش تشخیص اورژانس سکته قلبی در منزل"
        publishedTime="2024-12-07"
        modifiedTime="2024-12-07"
        image={thrombolyticImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
            مقایسه رتپلاز (rPA) و آلتپلاز (tPA): عوامل ترومبولیتیک در مدیریت سکته قلبی
          </h1>

          <img 
            src={thrombolyticImage} 
            alt="عوامل ترومبولیتیک در درمان سکته قلبی - تصویر عروق کرونر و انحلال لخته"
            className="w-full rounded-lg mb-8"
          />

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-semibold mb-2">هشدار مهم</p>
                <p className="text-amber-700 text-sm">
                  این مقاله صرفاً جنبه آموزشی دارد. تجویز داروهای ترومبولیتیک تنها در محیط بیمارستانی و با نظارت پزشک متخصص مجاز است. از هرگونه خوددرمانی خودداری کنید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چکیده</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            آلتپلاز (Alteplase یا tPA) و رتپلاز (Reteplase یا rPA) هر دو از عوامل حیاتی ترومبولیتیک هستند که برای انحلال لخته خونی در درمان انفارکتوس حاد میوکارد (STEMI) به‌کار می‌روند. تفاوت اصلی آن‌ها در نحوه تجویز و نیمه‌عمر است: رتپلاز دارای نیمه‌عمر طولانی‌تر است و به‌صورت تزریق بولوس وریدی (دو دوز سریع) داده می‌شود، در حالی که آلتپلاز نیازمند انفوزیون طولانی‌مدت وریدی است.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            از آنجا که تزریق این داروها نیازمند تجهیزات و پروتکل‌های بیمارستانی پیشرفته است، نقش خدمات درمانی در منزل بر تشخیص سریع، ارزیابی ریسک و تثبیت اولیه بیمار متمرکز است.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مکانیسم عمل و ویژگی‌های فارماکولوژیک</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ترومبولیتیک‌ها با تبدیل پلاسمینوژن به پلاسمین عمل می‌کنند؛ پلاسمین آنزیمی است که رشته‌های فیبرین (ماده اصلی تشکیل‌دهنده لخته) را تجزیه کرده و باعث باز شدن عروق مسدودشده می‌شود.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">آلتپلاز (Alteplase - tPA نوترکیب)</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 mr-4">
            <li><strong>ساختار:</strong> نسخه نوترکیب کامل tPA طبیعی</li>
            <li><strong>نیمه‌عمر:</strong> بسیار کوتاه (حدود 5 دقیقه)</li>
            <li><strong>اختصاصیت فیبرینی:</strong> بالا (وابسته به فیبرین)</li>
            <li><strong>نحوه تجویز:</strong> تزریق وریدی آهسته (انفوزیون) طی 90 دقیقه</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">رتپلاز (Reteplase - rPA مهندسی‌شده)</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 mr-4">
            <li><strong>ساختار:</strong> فرم مهندسی‌شده tPA (نیمه‌عمر طولانی‌تر)</li>
            <li><strong>نیمه‌عمر:</strong> طولانی‌تر (حدود 13 تا 16 دقیقه)</li>
            <li><strong>اختصاصیت فیبرینی:</strong> متوسط تا کمی کمتر (اتصال کمتر به فیبرین)</li>
            <li><strong>نحوه تجویز:</strong> تزریق بولوس وریدی (معمولاً 2 دوز سریع با فاصله 30 دقیقه)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">کارآیی، ایمنی و نقش تشخیصی در محیط منزل</h2>
          
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">کارآیی و ایمنی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            مطالعات بالینی نشان داده‌اند که هر دو دارو در باز کردن شریان کرونر در STEMI مؤثر هستند. نرخ بازشدگی کامل عروق (TIMI 3) با رتپلاز به دلیل نفوذ بهتر به لخته، می‌تواند اندکی بیشتر باشد.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            از نظر ایمنی، هر دو دارو با خطر خون‌ریزی جدی، به‌ویژه خون‌ریزی داخل جمجمه‌ای (ICH)، همراه هستند و تفاوت در عوارض عمده آن‌ها معمولاً جزئی است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">اولویت تشخیصی در منزل</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            از آنجا که تزریق عوامل ترومبولیتیک مستلزم نظارت دقیق برای مدیریت عوارض خون‌ریزی است، تزریق این داروها در منزل مجاز نیست. نقش حیاتی <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</Link> و تیم‌های اورژانس در مدیریت سکته قلبی، بر تشخیص سریع و تثبیت فوری متمرکز است:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>تشخیص اورژانس سکته قلبی در منزل:</strong> تیم پزشکی متخصص اعزامی به منزل می‌تواند با استفاده از دستگاه <Link to="/articles/ecg-home" className="text-primary hover:underline">نوار قلب (ECG) پرتابل</Link> و ارزیابی علائم بالینی، سکته حاد قلبی (STEMI) را تشخیص دهد.
            </li>
            <li>
              <strong>تثبیت و انتقال ایمن:</strong> در صورت تشخیص STEMI، اقدامات حیاتی اولیه شامل تجویز <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link>، نیتروگلیسیرین و داروهای ضد انعقاد اولیه انجام شده و بیمار فوراً برای دریافت درمان قطعی منتقل می‌شود.
            </li>
            <li>
              <strong>سنجش زمان درمان:</strong> در شرایط پیش‌بیمارستانی، تیم پزشکی باید زمان شروع علائم را دقیقاً ثبت کند تا بیمار کاندیدای ترومبولیز در پنجره زمانی مناسب (Door-to-Needle Time) باشد.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            تفاوت‌های فارماکولوژیک آلتپلاز و رتپلاز بر نحوه استفاده آن‌ها در محیط‌های مختلف درمانی تأثیر می‌گذارد. سهولت تجویز رتپلاز در محیط‌های اورژانسی یک مزیت فارماکولوژیک مهم تلقی می‌شود. در مواجهه با علائم سکته قلبی، مهم‌ترین گام در منزل، تشخیص اورژانس سکته قلبی توسط پزشک یا تیم فوریت‌های پزشکی است تا بیمار بدون تأخیر برای دریافت درمان نجات‌بخش اعزام شود.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع علمی</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8 mr-4 text-sm">
            <li>Reteplase vs. Alteplase for Acute Myocardial Infarction. American Heart Association Journals</li>
            <li>Thrombolytic Therapy for Acute Myocardial Infarction. The New England Journal of Medicine</li>
            <li>Alteplase and Reteplase: Clinical Trials and Pharmacological Differences. JACC</li>
            <li>2022 AHA/ACC Guideline for Evaluation and Diagnosis of Acute Chest Pain</li>
          </ul>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              نیاز به تشخیص اورژانس قلبی در منزل دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              تیم پزشکی نوید زندگی با تجهیزات پرتابل نوار قلب و اکو، آماده ارزیابی فوری بیماران قلبی در منزل و هماهنگی انتقال اورژانسی است.
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

export default ThrombolyticAgentsPage;
