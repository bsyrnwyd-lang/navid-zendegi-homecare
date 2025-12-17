import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import ArticleSchema from "@/components/ArticleSchema";
import LazyImage from "@/components/LazyImage";

import diabetesImage from "@/assets/diabetes-article.jpg";
import weightLossInjectionsImage from "@/assets/weight-loss-injection-article.jpg";
import diabetesPregnancyImage from "@/assets/diabetes-pregnancy.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";

const DiabetesPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "دیابت", url: "/articles/diabetes" }
  ];

  const relatedArticles = [
    {
      title: "آمپول‌های لاغری: سماگلوتاید و لیراگلوتاید",
      description: "بررسی علمی آگونیست‌های GLP-1 برای کاهش وزن و کنترل قند خون",
      image: weightLossInjectionsImage,
      link: "/articles/weight-loss-injections",
      category: "دارو"
    },
    {
      title: "دیابت بارداری",
      description: "راهنمای کامل مدیریت دیابت در دوران بارداری",
      image: diabetesPregnancyImage,
      link: "/articles/diabetes-pregnancy",
      category: "زنان"
    },
    {
      title: "رژیم مدیترانه‌ای",
      description: "تغذیه سالم برای کنترل قند خون و سلامت قلب",
      image: mediterraneanDietImage,
      link: "/articles/mediterranean-diet",
      category: "تغذیه"
    }
  ];

  const faqs = [
    {
      question: "آیا دیابت نوع ۲ قابل درمان است؟",
      answer: "دیابت نوع ۲ قابل کنترل است و در بسیاری از موارد با تغییر سبک زندگی، کاهش وزن و ورزش منظم می‌توان قند خون را به حد نرمال بازگرداند. با این حال، نظارت مداوم و پیگیری پزشکی ضروری است."
    },
    {
      question: "علائم اولیه دیابت چیست؟",
      answer: "تشنگی بیش از حد، تکرر ادرار (به ویژه شب‌ها)، کاهش وزن ناگهانی، خستگی مفرط، تاری دید و کندی در بهبود زخم‌ها از علائم هشداردهنده دیابت هستند."
    },
    {
      question: "تفاوت دیابت نوع ۱ و ۲ چیست؟",
      answer: "دیابت نوع ۱ یک بیماری خودایمنی است که سیستم ایمنی سلول‌های تولیدکننده انسولین را تخریب می‌کند و نیاز به تزریق انسولین دارد. دیابت نوع ۲ معمولاً با مقاومت به انسولین همراه است و با تغییر سبک زندگی و داروهای خوراکی قابل کنترل است."
    },
    {
      question: "آزمایش HbA1c چه چیزی را نشان می‌دهد؟",
      answer: "HbA1c میانگین قند خون در ۲ تا ۳ ماه گذشته را نشان می‌دهد. مقادیر زیر ۵.۷٪ نرمال، ۵.۷٪ تا ۶.۴٪ پیش‌دیابت و ۶.۵٪ و بالاتر دیابت تلقی می‌شود."
    },
    {
      question: "چرا دیابتی‌ها باید مراقب پاهای خود باشند؟",
      answer: "دیابت می‌تواند به اعصاب پا آسیب بزند (نوروپاتی) و حس را کاهش دهد. همچنین گردش خون را مختل می‌کند. این عوامل باعث می‌شود زخم‌های کوچک دیر بهبود یابند و خطر عفونت و قطع عضو افزایش یابد."
    }
  ];

  return (
    <>
      <SEOHead
        title="راهنمای کامل دیابت: از شناخت تا مدیریت هوشمند | نوید زندگی"
        description="اطلاعات جامع درباره دیابت شیرین شامل انواع دیابت (نوع ۱ و ۲)، علائم، تشخیص، عوارض و روش‌های مدیریت. خدمات ویزیت پزشک در منزل برای بیماران دیابتی."
        keywords="دیابت, قند خون, دیابت نوع ۱, دیابت نوع ۲, انسولین, HbA1c, زخم پای دیابتی, نوروپاتی, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/diabetes"
        ogType="article"
      />
      <ArticleSchema
        title="راهنمای کامل دیابت: از شناخت تا مدیریت هوشمند"
        description="اطلاعات جامع درباره دیابت شیرین شامل انواع، علائم، تشخیص و مدیریت"
        image="https://navidzendegi.com/diabetes-article.jpg"
        publishedTime="2024-12-17"
        modifiedTime="2024-12-17"
      />
      <Header />
      <FloatingContact />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        <article className="container mx-auto max-w-4xl px-4">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              راهنمای کامل دیابت: از شناخت تا مدیریت هوشمند
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: ۲۷ آذر ۱۴۰۳
            </p>
          </header>

          <LazyImage
            src={diabetesImage}
            alt="مدیریت دیابت و کنترل قند خون"
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="text-lg mb-6">
              دیابت شیرین (Diabetes Mellitus) یک بیماری مزمن متابولیک است که در آن بدن یا نمی‌تواند به مقدار کافی هورمون انسولین تولید کند و یا نمی‌تواند از انسولین تولید شده به درستی استفاده کند. این وضعیت منجر به افزایش سطح قند (گلوکز) در خون می‌شود که در درازمدت می‌تواند به اعضای مختلف بدن آسیب برساند.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۱. انواع اصلی دیابت</h2>
            <p className="mb-4">
              درک تفاوت انواع دیابت برای انتخاب مسیر درمانی صحیح بسیار حیاتی است:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">الف) دیابت نوع ۱ (وابسته به انسولین)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>علت:</strong> یک بیماری خودایمنی است که در آن سیستم ایمنی به سلول‌های تولیدکننده انسولین در پانکراس (لوزالمعده) حمله کرده و آن‌ها را از بین می‌برد.</li>
              <li><strong>گروه هدف:</strong> معمولاً در کودکان و جوانان تشخیص داده می‌شود.</li>
              <li><strong>درمان:</strong> بیماران باید به صورت روزانه انسولین تزریق کنند.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">ب) دیابت نوع ۲ (مقاومت به انسولین)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>علت:</strong> بدن نسبت به اثرات انسولین مقاوم می‌شود و یا پانکراس نمی‌تواند انسولین کافی برای غلبه بر این مقاومت تولید کند.</li>
              <li><strong>گروه هدف:</strong> شایع‌ترین نوع دیابت (حدود ۹۰٪ موارد) است و با سبک زندگی، چاقی و وراثت در ارتباط است.</li>
              <li><strong>درمان:</strong> اصلاح سبک زندگی، داروهای خوراکی و گاهی انسولین.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">ج) دیابت بارداری</h3>
            <p className="mb-6">
              در طول دوران بارداری ظاهر شده و معمولاً پس از زایمان برطرف می‌شود، اما خطر ابتلا به دیابت نوع ۲ را در آینده افزایش می‌دهد. برای اطلاعات بیشتر به مقاله <Link to="/articles/diabetes-pregnancy" className="text-primary hover:underline">دیابت بارداری</Link> مراجعه کنید.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۲. علائم هشداردهنده دیابت</h2>
            <p className="mb-4">
              اگر علائم زیر را به صورت مداوم تجربه می‌کنید، بررسی سطح قند خون ضروری است:
            </p>
            <ul className="list-disc pr-6 mb-6 space-y-2">
              <li>پرنوشی (تشنگی بیش از حد)</li>
              <li>پرادراری (تکرر ادرار، به ویژه در شب)</li>
              <li>کاهش وزن ناگهانی و بدون دلیل</li>
              <li>خستگی مفرط و بی‌حالی</li>
              <li>تاری دید</li>
              <li>کندی در بهبود زخم‌ها</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">۳. تشخیص و آزمایش‌های کلیدی</h2>
            <p className="mb-4">پزشکان از شاخص‌های زیر برای تشخیص استفاده می‌کنند:</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">نام آزمایش</th>
                    <th className="border border-border p-3 text-right">وضعیت نرمال</th>
                    <th className="border border-border p-3 text-right">پیش‌دیابت</th>
                    <th className="border border-border p-3 text-right">دیابت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">قند خون ناشتا (FBS)</td>
                    <td className="border border-border p-3">کمتر از ۱۰۰</td>
                    <td className="border border-border p-3">۱۰۰ تا ۱۲۵</td>
                    <td className="border border-border p-3">۱۲۶ و بالاتر</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">تست HbA1c (میانگین ۳ ماهه)</td>
                    <td className="border border-border p-3">کمتر از ۵.۷٪</td>
                    <td className="border border-border p-3">۵.۷٪ تا ۶.۴٪</td>
                    <td className="border border-border p-3">۶.۵٪ و بالاتر</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              برای انجام آزمایش خون در منزل و بدون نیاز به مراجعه به آزمایشگاه، از خدمات <Link to="/services/laboratory" className="text-primary hover:underline">نمونه‌گیری خون در منزل</Link> استفاده کنید.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۴. عوارض دیابت در صورت عدم کنترل</h2>
            <p className="mb-4">
              بالا ماندن طولانی‌مدت قند خون می‌تواند به رگ‌های خونی و اعصاب آسیب بزند:
            </p>
            <ul className="list-disc pr-6 mb-6 space-y-2">
              <li><strong>بیماری‌های قلبی و عروقی:</strong> افزایش خطر سکته قلبی و مغزی. برای اطلاعات بیشتر به <Link to="/cardiology" className="text-primary hover:underline">خدمات قلب و عروق</Link> مراجعه کنید.</li>
              <li><strong>نفروپاتی (آسیب کلیوی):</strong> که ممکن است منجر به دیالیز شود.</li>
              <li><strong>رتینوپاتی (آسیب چشمی):</strong> خطر نابینایی.</li>
              <li><strong>نوروپاتی (آسیب عصبی):</strong> منجر به بی‌حسی در پاها و ایجاد زخم پای دیابتی.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">۵. مدیریت و سبک زندگی</h2>
            <p className="mb-4">
              دیابت به معنای پایان زندگی عادی نیست، بلکه به معنای زندگی با برنامه‌ریزی هوشمندانه است:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">تغذیه صحیح</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li>استفاده از غذاهای با شاخص گلیسمی (GI) پایین (مانند حبوبات و غلات کامل).</li>
              <li>افزایش مصرف فیبر (سبزیجات).</li>
              <li>کاهش کربوهیدرات‌های ساده و قندهای مصنوعی.</li>
            </ul>
            <p className="mb-4">
              برای راهنمایی تغذیه‌ای، مقاله <Link to="/articles/mediterranean-diet" className="text-primary hover:underline">رژیم مدیترانه‌ای</Link> را مطالعه کنید.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">فعالیت بدنی</h3>
            <p className="mb-6">
              حداقل ۱۵۰ دقیقه ورزش هوازی (مانند پیاده‌روی سریع) در هفته توصیه می‌شود. ورزش حساسیت سلول‌ها به انسولین را افزایش می‌دهد.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۶. اهمیت خدمات پزشکی در منزل برای دیابتی‌ها</h2>
            <p className="mb-4">
              مدیریت دیابت نیاز به پایش مستمر دارد. خدمات <Link to="/services/internal" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</Link> می‌تواند برای بیماران دیابتی بسیار راهگشا باشد:
            </p>
            <ul className="list-disc pr-6 mb-6 space-y-2">
              <li><strong>آموزش و پایش:</strong> آموزش نحوه صحیح استفاده از دستگاه تست قند خون (گلوکومتر) و تزریق انسولین.</li>
              <li><strong>پانسمان زخم پای دیابتی:</strong> مدیریت حرفه‌ای زخم‌ها در منزل برای جلوگیری از عفونت و قطع عضو.</li>
              <li><strong>چک‌آپ دوره‌ای:</strong> انجام آزمایش خون و معاینه فیزیکی برای بررسی علائم اولیه عوارض (مانند بررسی اعصاب پا) بدون نیاز به خروج از منزل.</li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">نکته حیاتی</h4>
                  <p className="text-amber-700 dark:text-amber-300">
                    افت ناگهانی قند خون (هیپوگلیسمی) نیز به اندازه قند بالا خطرناک است. همیشه باید علائم آن (لرزش، تعریق، گرسنگی شدید و سرگیجه) را بشناسید و همراه خود مواد قندی سریع‌الجذب داشته باشید.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-destructive mb-2">هشدار مهم</h4>
                  <p className="text-foreground">
                    هرگز بدون مشورت با پزشک، داروهای دیابت خود را قطع یا تغییر ندهید. خوددرمانی در دیابت می‌تواند عواقب جدی داشته باشد.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-3">منابع (References)</h3>
            <ol className="list-decimal pr-6 text-sm text-muted-foreground space-y-1">
              <li>Classification and Diagnosis of Diabetes. American Diabetes Association (ADA).</li>
              <li>Global Report on Diabetes. World Health Organization (WHO).</li>
              <li>Standards of Medical Care in Diabetes. The Journal of Clinical and Applied Research and Education (Diabetes Care).</li>
            </ol>
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="text-xl font-bold mb-4">برای مشاوره و ویزیت در منزل تماس بگیرید</h3>
            <p className="mb-4 text-muted-foreground">
              تیم تخصصی نوید زندگی آماده ارائه خدمات پزشکی در منزل به بیماران دیابتی است.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>تماس: 09386117912</span>
            </a>
          </div>
        </article>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <FAQSection faqs={faqs} />
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <PricingInfo />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DiabetesPage;
