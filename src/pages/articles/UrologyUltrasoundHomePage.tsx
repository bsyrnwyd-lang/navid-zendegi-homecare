import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import urologyUltrasoundImage from "@/assets/urology-ultrasound-home.jpg";
import dopplerDvtImage from "@/assets/doppler-ultrasound-dvt.jpg";
import abdominalUltrasoundImage from "@/assets/abdominal-ultrasound-home.jpg";
import urologyImage from "@/assets/urology.jpg";

const UrologyUltrasoundHomePage = () => {
  const publishDate = "1404/05/10";
  const publishedTime = "2025-07-31T10:00:00+03:30";
  const modifiedTime = "2025-07-31T10:00:00+03:30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سونوگرافی ارولوژی در منزل", url: "/articles/urology-ultrasound-home" }
  ];

  const faqs = [
    {
      question: "سونوگرافی پروستات در منزل چگونه انجام می‌شود؟",
      answer: "سونوگرافی پروستات معمولاً از طریق شکم (ترانس‌ابدومینال) انجام می‌شود. بیمار باید با مثانه نیمه‌پر باشد. متخصص با دستگاه پرتابل حجم پروستات و تغییرات بافتی را بررسی می‌کند."
    },
    {
      question: "آیا سونوگرافی مجاری ادراری درد دارد؟",
      answer: "خیر، سونوگرافی کاملاً بدون درد است. فقط ژل سرد روی پوست احساس می‌شود و پروب روی شکم حرکت می‌کند."
    },
    {
      question: "تست باقی‌مانده ادرار (PVR) چیست؟",
      answer: "PVR میزان ادرار باقی‌مانده در مثانه پس از دفع را اندازه می‌گیرد. اگر بیش از ۱۰۰ سی‌سی باشد، نشان‌دهنده اختلال در تخلیه مثانه است که معمولاً به دلیل بزرگی پروستات رخ می‌دهد."
    },
    {
      question: "چه آمادگی برای سونوگرافی ارولوژی لازم است؟",
      answer: "برای سونوگرافی کلیه نیاز به ناشتا بودن نیست. برای بررسی مثانه و پروستات، بیمار باید ۱ تا ۲ ساعت قبل ۳-۴ لیوان آب بنوشد و از دفع ادرار خودداری کند تا مثانه پر باشد."
    },
    {
      question: "آیا می‌توان همزمان آزمایش PSA هم داد؟",
      answer: "بله، تیم نوید زندگی می‌تواند همزمان با سونوگرافی، نمونه خون برای آزمایش PSA و کراتینین بگیرد تا تشخیص کامل‌تری انجام شود."
    }
  ];

  const relatedArticles = [
    {
      title: "سونوگرافی داپلر و تشخیص DVT",
      description: "تشخیص لخته خون در پا با سونوگرافی داپلر در منزل",
      image: dopplerDvtImage,
      link: "/articles/doppler-dvt",
      category: "سونوگرافی"
    },
    {
      title: "سونوگرافی شکم و لگن در منزل",
      description: "تشخیص سنگ کلیه و کیسه صفرا با سونوگرافی در منزل",
      image: abdominalUltrasoundImage,
      link: "/articles/abdominal-ultrasound-home",
      category: "سونوگرافی"
    },
    {
      title: "ویزیت متخصص اورولوژی در منزل",
      description: "خدمات تخصصی اورولوژی شامل سوندگذاری و درمان در منزل",
      image: urologyImage,
      link: "/services/urology",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سونوگرافی ارولوژی در منزل تهران | تشخیص مشکلات پروستات و مجاری ادراری | نوید زندگی"
        description="سونوگرافی تخصصی ارولوژی در منزل برای تشخیص بزرگی پروستات، سنگ کلیه و مثانه، و بررسی باقی‌مانده ادرار. اعزام متخصص با دستگاه پورتابل به تمام نقاط تهران."
        keywords="سونوگرافی پروستات در منزل، سونوگرافی کلیه در محل، سونوگرافی مثانه، تشخیص BPH، آزمایش PSA در منزل، هولتر فشار خون، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/urology-ultrasound-home"
        ogType="article"
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
      />
      <ArticleSchema
        title="سونوگرافی ارولوژی در منزل؛ تشخیص دقیق مشکلات پروستات و مجاری ادراری"
        description="راهنمای کامل سونوگرافی تخصصی ارولوژی در منزل برای آقایان"
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        image={urologyUltrasoundImage}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img
                src={urologyUltrasoundImage}
                alt="سونوگرافی ارولوژی در منزل تهران"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>

            <div className="text-sm text-muted-foreground mb-4">
              تاریخ انتشار: {publishDate}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              مشکلات ادراری و پروستات در آقایان؛ تشخیص دقیق با سونوگرافی ارولوژی در منزل
            </h1>

            <p className="text-xl text-foreground leading-relaxed mb-8">
              مشکلات ادراری، از تکرر ادرار شبانه گرفته تا درد در ناحیه مثانه و کلیه، بخش بزرگی از دغدغه‌های سلامتی آقایان، به‌ویژه در سنین بالای ۵۰ سال را تشکیل می‌دهد. بسیاری از آقایان به دلیل سختی جابه‌جایی یا تمایل به حفظ حریم خصوصی، مراجعه به مراکز شلوغ سونوگرافی را به تأخیر می‌اندازند. اما تاخیر در تشخیص بیماری‌هایی مثل بزرگی پروستات یا سنگ‌های مجاری ادرار، می‌تواند منجر به آسیب‌های جبران‌ناپذیر به کلیه‌ها شود.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با اعزام متخصص و انجام سونوگرافی تخصصی ارولوژی در منزل، این موانع را از میان برداشته است.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
              <p className="text-foreground font-medium">
                ⚠️ هشدار مهم: هرگز خوددرمانی نکنید. علائم ادراری می‌توانند نشانه مشکلات جدی‌تری باشند. حتماً با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. سونوگرافی ارولوژی شامل بررسی چه مواردی است؟
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              در یک پایش تخصصی در منزل، پزشک موارد زیر را به دقت بررسی می‌کند:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-foreground mb-8">
              <li><strong>پروستات:</strong> سنجش دقیق حجم پروستات و بررسی تغییرات بافتی (BPH)</li>
              <li><strong>مثانه:</strong> بررسی ضخامت دیواره مثانه، وجود سنگ، تومور یا باقی‌مانده ادرار (PVR) که عامل اصلی عفونت‌های مکرر است</li>
              <li><strong>کلیه‌ها:</strong> تشخیص سنگ کلیه، کیست‌ها و بررسی ورم کلیه (هیدرونفروز) ناشی از انسداد مجاری</li>
              <li><strong>بیضه‌ها:</strong> انجام سونوگرافی داپلر برای تشخیص واریکوسل یا توده‌های بیضه</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. ارتباط تنگاتنگ بیماری‌های ارولوژی با قلب و عروق
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              جالب است بدانید که بسیاری از مشکلات ارولوژی با سیستم قلبی-عروقی در ارتباط هستند:
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg text-foreground mb-8">
              <li>
                <strong>تکرر ادرار شبانه و نارسایی قلب:</strong> گاهی بیدار شدن مکرر در شب برای دفع ادرار، نه به دلیل پروستات، بلکه به دلیل تجمع مایعات در بدن ناشی از نارسایی قلبی است. در مرکز نوید زندگی، پزشک می‌تواند همزمان با سونوگرافی، وضعیت قلب شما را با <Link to="/services/echocardiography" className="text-primary hover:underline">اکو در منزل</Link> بررسی کند.
              </li>
              <li>
                <strong>فشار خون و کلیه:</strong> سنگ‌ها و تنگی عروق کلیه عامل اصلی فشار خون بالا هستند. نصب <Link to="/services/holter-monitoring" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته</Link> همزمان با سونوگرافی کلیه، بهترین راه برای ریشه‌یابی فشار خون‌های مقاوم به درمان است.
              </li>
              <li>
                <strong>استرس جراحی پروستات:</strong> برای بیمارانی که کاندید جراحی پروستات هستند، انجام <Link to="/services/ecg" className="text-primary hover:underline">نوار قلب</Link> و اکو در منزل به عنوان چک‌آپ پیش از عمل، امنیت جراحی را تضمین می‌کند.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. چرا سونوگرافی ارولوژی در منزل "نوید زندگی" را انتخاب کنیم؟
            </h2>
            <ul className="list-decimal list-inside space-y-4 text-lg text-foreground mb-8">
              <li>
                <strong>حفظ حریم خصوصی:</strong> معاینات و سونوگرافی‌های مجاری ادراری در محیط امن و آرام خانه انجام می‌شود.
              </li>
              <li>
                <strong>تست بقایای ادرار (PVR):</strong> برای این تست، بیمار باید یک بار با مثانه پر و یک بار بلافاصله بعد از دفع ادرار سونوگرافی شود. انجام این کار در منزل بسیار راحت‌تر و دقیق‌تر از مراکز درمانی است.
              </li>
              <li>
                <strong>پایش ضربان قلب با هولتر:</strong> برخی داروهای پروستات (مثل آلفابلاکرها) می‌توانند باعث افت فشار خون یا تپش قلب شوند. ما با ارائه <Link to="/services/holter-monitoring" className="text-primary hover:underline">هولتر قلب در منزل</Link>، اثرات این داروها را بر ریتم قلب شما پایش می‌کنیم.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. علائمی که نیاز به سونوگرافی فوری دارند
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-foreground mb-8">
              <li>کاهش فشار جریان ادرار یا قطع و وصل شدن آن</li>
              <li>احساس عدم تخلیه کامل مثانه</li>
              <li>وجود خون در ادرار (هماچوری)</li>
              <li>دردهای مبهم در ناحیه کمر، پهلو یا زیر شکم</li>
              <li>بیدار شدن بیش از ۲ بار در شب برای ادرار کردن</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۵. خدمات مکمل: آزمایش خون در محل
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              تیم <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> همزمان با سونوگرافی، می‌تواند آزمایش‌های ضروری ارولوژی مانند PSA (برای غربالگری سرطان پروستات)، کراتینین (برای سنجش عملکرد کلیه) و آزمایش ادرار را در محل انجام دهد تا تشخیص پزشک کامل شود. برای اطلاعات بیشتر به صفحه <Link to="/services/urology" className="text-primary hover:underline">ویزیت متخصص اورولوژی در منزل</Link> مراجعه کنید.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              مشکلات ادراری نباید کیفیت زندگی شما را کاهش دهند. مرکز نوید زندگی با ترکیب دانش ارولوژی و کاردیولوژی، پکیج کاملی از سونوگرافی، اکو، نوار قلب و هولتر در منزل را فراهم کرده است تا شما در کوتاه‌ترین زمان و با بالاترین دقت، مسیر بهبودی را طی کنید.
            </p>

            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">منابع معتبر علمی:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Urology Care Foundation: Ultrasound of the Urinary Tract</li>
                <li>Mayo Clinic: Benign prostatic hyperplasia (BPH) diagnosis</li>
                <li>Journal of Clinical Urology: Home-based diagnostic imaging</li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center my-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                برای درخواست سونوگرافی ارولوژی در منزل تماس بگیرید
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                تیم تخصصی نوید زندگی آماده خدمت‌رسانی در تمام نقاط تهران است
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-bold hover:bg-primary/90 transition-colors"
              >
                <Phone className="ml-2 h-6 w-6" />
                09386117912
              </a>
            </div>
          </article>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default UrologyUltrasoundHomePage;
