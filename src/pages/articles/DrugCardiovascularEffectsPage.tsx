import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import drugCardiovascularImage from "@/assets/drug-cardiovascular-effects.jpg";
import cocaineDangersImage from "@/assets/cocaine-dangers.jpg";
import opiumHeartImage from "@/assets/opium-heart-effects.jpg";
import strokeSymptomsImage from "@/assets/neurology.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const DrugCardiovascularEffectsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مواد مخدر و سکته قلبی", url: "/articles/drug-cardiovascular-effects" }
  ];

  const relatedArticles = [
    {
      title: "خطرات کوکائین برای قلب",
      description: "اثرات مخرب کوکائین بر سیستم قلبی-عروقی و ریسک سکته قلبی",
      image: cocaineDangersImage,
      link: "/articles/cocaine-dangers",
      category: "قلب و عروق"
    },
    {
      title: "اثرات تریاک بر روی قلب",
      description: "مرور علمی اثرات مخرب تریاک و اوپیوم بر سیستم قلبی-عروقی",
      image: opiumHeartImage,
      link: "/articles/opium-heart-effects",
      category: "قلب و عروق"
    },
    {
      title: "علائم سکته مغزی",
      description: "شناخت علائم هشداردهنده سکته مغزی و اقدامات فوری",
      image: strokeSymptomsImage,
      link: "/articles/stroke-symptoms",
      category: "اورژانس"
    }
  ];

  const faqs = [
    {
      question: "آیا مصرف یک بار مواد مخدر می‌تواند باعث سکته قلبی شود؟",
      answer: "بله، حتی مصرف یک بار مواد محرک مانند کوکائین یا مت‌آمفتامین می‌تواند باعث افزایش ناگهانی فشار خون، اسپاسم عروق کرونر و در نتیجه سکته قلبی شود. این خطر حتی در افراد جوان و بدون سابقه بیماری قلبی نیز وجود دارد."
    },
    {
      question: "مواد مخدر چگونه باعث سکته مغزی می‌شوند؟",
      answer: "مواد مخدر از دو مسیر اصلی باعث سکته مغزی می‌شوند: 1) سکته ایسکمیک: از طریق تشکیل لخته یا اسپاسم عروق مغزی که خون‌رسانی را قطع می‌کند. 2) سکته هموراژیک: افزایش ناگهانی فشار خون باعث پارگی رگ‌های خونی در مغز و خونریزی می‌شود."
    },
    {
      question: "آیا آسیب‌های قلبی ناشی از مواد مخدر قابل برگشت هستند؟",
      answer: "بستگی به میزان و مدت مصرف دارد. برخی آسیب‌های حاد مانند اسپاسم عروق پس از ترک مصرف بهبود می‌یابند، اما آسیب‌های مزمن مانند کاردیومیوپاتی یا آسیب به دیواره عروق ممکن است دائمی باشند. ترک زودهنگام و مراقبت پزشکی تخصصی بسیار مهم است."
    },
    {
      question: "چه آزمایش‌هایی برای ارزیابی آسیب قلبی ناشی از مواد مخدر لازم است؟",
      answer: "آزمایش‌های اصلی شامل: اندازه‌گیری فشار خون، نوار قلب (ECG) برای بررسی آریتمی و علائم ایسکمی، اکوکاردیوگرافی برای ارزیابی عملکرد قلب و دریچه‌ها، و آزمایش‌های خونی برای بررسی آنزیم‌های قلبی. این ارزیابی‌ها را می‌توانید از طریق ویزیت متخصص قلب در منزل انجام دهید."
    },
    {
      question: "فرآیند ترک اعتیاد چگونه به سلامت قلب کمک می‌کند؟",
      answer: "ترک اعتیاد مؤثرترین روش برای جلوگیری از آسیب‌های بیشتر است. پس از ترک، فشار خون به تدریج بهبود می‌یابد، ریسک تشکیل لخته کاهش می‌یابد و بار کاری قلب کم می‌شود. این فرآیند باید تحت نظر پزشک و با حمایت روانپزشکی انجام شود."
    },
    {
      question: "آیا مصرف الکل همراه با مواد مخدر خطرناک‌تر است؟",
      answer: "بله، مصرف همزمان الکل و مواد مخدر خطرات قلبی-عروقی را چندین برابر می‌کند. الکل می‌تواند اثرات سمی مواد را تشدید کرده و ریسک آریتمی‌های کشنده، سکته قلبی و سکته مغزی را به شدت افزایش دهد."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="نقش مواد مخدر بر سکته قلبی و مغزی و فشار خون | نوید زندگی"
        description="مکانیسم‌های آسیب‌رسان مواد مخدر به قلب و عروق، افزایش خطر سکته قلبی و مغزی، اسپاسم عروق کرونر و اهمیت ترک اعتیاد. ویزیت متخصص قلب در منزل."
        keywords="مواد مخدر و قلب، سکته قلبی، سکته مغزی، کوکائین و قلب، مت‌آمفتامین، فشار خون، اسپاسم کرونر، ترک اعتیاد، ویزیت متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/drug-cardiovascular-effects"
        ogImage={drugCardiovascularImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2024-01-21T10:00:00Z"
        modifiedTime="2024-01-21T10:00:00Z"
      />

      <ArticleSchema
        title="نقش مواد مخدر بر سکته قلبی و مغزی و فشار خون"
        description="مکانیسم‌های آسیب‌رسان مواد مخدر به قلب و عروق"
        publishedTime="2024-01-21T10:00:00Z"
        modifiedTime="2024-01-21T10:00:00Z"
        image={drugCardiovascularImage}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-relaxed">
            نقش مواد مخدر بر سکته قلبی و مغزی و فشار خون: مکانیسم‌های آسیب‌رسان و ریسک‌های قلبی-عروقی
          </h1>
          <img
            src={drugCardiovascularImage}
            alt="نقش مواد مخدر بر سکته قلبی و مغزی"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
            loading="eager"
          />
        </header>

        <div className="prose prose-lg max-w-none text-foreground space-y-6 leading-relaxed">
          <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg my-6">
            <p className="text-destructive font-semibold mb-2">
              ⚠️ هشدار: مصرف مواد مخدر بسیار خطرناک است
            </p>
            <p className="text-foreground">
              مصرف مواد مخدر می‌تواند باعث سکته قلبی، سکته مغزی و مرگ ناگهانی شود. اگر یا فردی از اطرافیان شما با اعتیاد مواجه هستید، حتماً از کمک تخصصی استفاده کنید. به هیچ عنوان خودسرانه اقدام به ترک نکنید.
            </p>
          </div>

          <p>
            مصرف مواد مخدر و روان‌گردان، تأثیرات مخربی و مستقیم بر سیستم قلبی-عروقی دارد. این مواد از طریق مکانیسم‌های مختلفی می‌توانند باعث افزایش حاد فشار خون (Hypertensive Crisis)، آسیب به دیواره عروق و در نهایت، افزایش چشمگیر خطر وقوع سکته مغزی (Stroke) و سکته قلبی (Myocardial Infarction - MI) شوند. این حوادث جدی اغلب در مصرف‌کنندگان جوان‌تر نیز رخ می‌دهد.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            تأثیر مستقیم مواد مخدر بر قلب و عروق
          </h2>

          <p>
            مواد محرک با فعال‌سازی سیستم عصبی سمپاتیک، فشار ناگهانی بر قلب و عروق وارد می‌کنند:
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            اثرات سمپاتومیمتیک (Sympathomimetic Effects)
          </h3>

          <p>
            مواد مخدری مانند <Link to="/articles/cocaine-dangers" className="text-primary hover:underline">کوکائین</Link> و مت‌آمفتامین (شیشه)، با تقلید عملکرد سیستم عصبی سمپاتیک (سیستم ستیز و گریز)، باعث آزادسازی شدید کاتکول‌آمین‌ها (مانند آدرنالین و نوراپی‌نفرین) می‌شوند.
          </p>

          <p>
            این آزادسازی منجر به انقباض شدید عروق (Vasoconstriction)، افزایش ناگهانی و شدید <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون</Link> و ضربان قلب می‌شود.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            افزایش نیاز اکسیژن میوکارد
          </h3>

          <p>
            افزایش ضربان قلب و فشار خون، بار کاری قلب را به شدت افزایش می‌دهد و نیاز عضله قلب (میوکارد) به اکسیژن را بالا می‌برد. این در حالی است که انقباض عروق کرونر، خون‌رسانی را محدود می‌کند. این عدم تعادل می‌تواند مستقیماً منجر به <Link to="/articles/heart-attack-symptoms" className="text-primary hover:underline">سکته قلبی</Link> شود.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            مکانیسم‌های وقوع سکته قلبی (MI) و سکته مغزی
          </h2>

          <p>
            مصرف مواد مخدر به صورت چند وجهی ریسک حوادث ایسکمیک و هموراژیک را افزایش می‌دهد:
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۱. سکته قلبی (Myocardial Infarction)
          </h3>

          <p>
            <strong>اسپاسم عروق کرونر (Coronary Vasospasm):</strong> مواد محرک می‌توانند باعث اسپاسم شدید و ناگهانی عروق کرونر (عروق خون‌رسان قلب) شوند، حتی در افرادی که تنگی عروق از قبل ندارند. این اسپاسم، جریان خون به عضله قلب را قطع کرده و باعث مرگ بافت می‌شود.
          </p>

          <p>
            <strong>تشکیل لخته (Thrombosis):</strong> مصرف کوکائین می‌تواند باعث افزایش چسبندگی پلاکت‌ها شده و تشکیل لخته‌های خونی را تسهیل کند. این لخته‌ها می‌توانند جریان خون در شریان‌های کرونر را مسدود کرده و منجر به MI شوند.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۲. سکته مغزی (Stroke)
          </h3>

          <p>
            <strong>سکته ایسکمیک:</strong> افزایش تشکیل لخته یا انقباض شدید عروق مغزی (واسپاسم) باعث قطع خون‌رسانی به بخشی از مغز می‌شود.
          </p>

          <p>
            <strong>سکته هموراژیک (خونریزی):</strong> افزایش ناگهانی و شدید فشار خون ناشی از مواد مخدر، بزرگترین عامل خطر برای پارگی آنوریسم‌ها یا رگ‌های خونی در مغز و ایجاد خونریزی داخل مغزی است.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            هشدارها و ضرورت پایش سلامت قلبی-عروقی
          </h2>

          <p>
            ریسک حوادث قلبی-عروقی ناشی از مواد مخدر، فوری و بلندمدت است.
          </p>

          <p>
            <strong>خطر سنین پایین:</strong> حوادث عروقی مرتبط با مواد مخدر اغلب در افراد در دهه 20 و 30 زندگی رخ می‌دهد که به طور معمول فاقد عوامل خطر سنتی هستند.
          </p>

          <p>
            <strong>تشخیص آسیب مزمن:</strong> مصرف مزمن می‌تواند منجر به آسیب‌های دائمی مانند کاردیومیوپاتی (ضعف عضله قلب) و هایپرتنشن مزمن شود.
          </p>

          <p>
            <strong>اهمیت ارزیابی تخصصی:</strong> برای افرادی با سابقه مصرف، ارزیابی وضعیت قلب از طریق <Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب و عروق در منزل</Link> شامل اندازه‌گیری فشار خون، <Link to="/articles/ecg-home" className="text-primary hover:underline">نوار قلب (ECG)</Link> و در صورت نیاز، <Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی</Link>، ضروری است.
          </p>

          <p>
            <strong>نقش ترک اعتیاد:</strong> ترک کامل مواد مخدر مؤثرترین روش برای کاهش این ریسک‌های حیاتی است. این فرآیند باید با حمایت تخصصی و <Link to="/services/psychiatry" className="text-primary hover:underline">مشاوره روانپزشکی و روان‌درمانی</Link> همراه باشد.
          </p>

          <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              دریافت مشاوره تخصصی
            </h3>
            <p className="text-foreground mb-4">
              سلامت قلبی-عروقی خود را پس از مصرف مواد مخدر به تعویق نیندازید. برای <Link to="/cardiology" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب و عروق در منزل</Link> جهت ارزیابی آسیب‌های وارده و <Link to="/services/psychiatry" className="text-primary hover:underline font-semibold">مشاوره روانپزشکی آنلاین</Link> برای شروع روند ترک، همین حالا تماس بگیرید.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              09386117912
            </a>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
            منابع (References)
          </h3>

          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Kaku, J. K., et al. (2018). Illicit Drug Use and Stroke. Stroke, 49(5), e181-e200.</li>
            <li>Sinha, A. K., et al. (2019). Cocaine-Induced Cardiovascular Disease: A Review. Clinical Cardiology, 42(1), 1-8.</li>
            <li>Westover, A. N., et al. (2007). The risk of stroke in young adults exposed to cocaine and methamphetamine use. Archives of Neurology, 64(11), 1640-1644.</li>
          </ol>
        </div>

        <FAQSection faqs={faqs} />
        
        <RelatedArticles articles={relatedArticles} />
        
        <PricingInfo />
      </article>
    </ArticleLayout>
  );
};

export default DrugCardiovascularEffectsPage;
