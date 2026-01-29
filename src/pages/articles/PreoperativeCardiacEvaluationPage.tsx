import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import preoperativeCardiacImage from "@/assets/preoperative-cardiac-evaluation.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import specialistDoctorImage from "@/assets/specialist-doctor.jpg";

const PreoperativeCardiacEvaluationPage = () => {
  const publishDate = "2025-01-29";

  const faqs = [
    {
      question: "تاییدیه قلب قبل از جراحی چیست؟",
      answer: "تاییدیه قلب یک ارزیابی پزشکی است که پیش از جراحی‌های مختلف انجام می‌شود تا میزان ریسک بیهوشی سنجیده شود و از سکته قلبی در حین عمل جلوگیری شود."
    },
    {
      question: "برای چه جراحی‌هایی به تاییدیه قلب نیاز است؟",
      answer: "جراحی‌های مختلف از دندانپزشکی گرفته تا تعویض مفصل، جراحی‌های زیبایی، جراحی‌های شکمی و ارتوپدی نیاز به تاییدیه قلب دارند."
    },
    {
      question: "چه تست‌هایی برای تاییدیه قلب لازم است؟",
      answer: "معمولاً نوار قلب (ECG) برای بررسی ریتم و سابقه سکته، و اکوکاردیوگرافی برای سنجش قدرت پمپاژ قلب (EF) انجام می‌شود. پزشک ممکن است آزمایش‌های تکمیلی نیز تجویز کند."
    },
    {
      question: "آیا می‌توان تاییدیه قلب را در منزل انجام داد؟",
      answer: "بله. نوید زندگی با اعزام پزشک متخصص و تجهیزات پرتابل، تمام مراحل تاییدیه قلب شامل نوار قلب، اکو و صدور گواهی را در منزل شما انجام می‌دهد."
    },
    {
      question: "EF قلب چیست و چرا مهم است؟",
      answer: "EF یا کسر جهشی (Ejection Fraction) نشان‌دهنده قدرت پمپاژ قلب است و حیاتی‌ترین فاکتور برای متخصص بیهوشی محسوب می‌شود. EF نرمال بالای ۵۵٪ است."
    }
  ];

  const relatedArticles = [
    {
      title: "نوار قلب در منزل؛ راهنمای کامل ECG",
      description: "همه چیز درباره انجام نوار قلب در منزل و تفسیر نتایج",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب و عروق"
    },
    {
      title: "اکوکاردیوگرافی در منزل؛ راهنمای کامل",
      description: "همه چیز درباره انجام اکو قلب در منزل و مزایای آن",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب و عروق"
    },
    {
      title: "ویزیت متخصص در منزل",
      description: "خدمات ویزیت پزشک متخصص در منزل تهران",
      image: specialistDoctorImage,
      link: "/articles/specialist-home-visit",
      category: "خدمات منزل"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تاییدیه قلب قبل از جراحی", url: "/articles/preoperative-cardiac-evaluation" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تاییدیه قلب قبل از جراحی؛ چرا و چگونه؟ | نوید زندگی"
        description="راهنمای کامل تاییدیه قلب قبل از جراحی: چرا لازم است، چه تست‌هایی انجام می‌شود و چگونه در منزل انجام دهید. اکو و نوار قلب در منزل برای صدور گواهی جراحی."
        keywords="تاییدیه قلب، گواهی قلب، جراحی، نوار قلب قبل از عمل، اکو قبل از جراحی، ریسک بیهوشی، EF قلب، متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/preoperative-cardiac-evaluation"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema
        title="تاییدیه قلب قبل از جراحی؛ چرا و چگونه؟"
        description="راهنمای کامل تاییدیه قلب قبل از جراحی: چرا لازم است، چه تست‌هایی انجام می‌شود و چگونه در منزل انجام دهید"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={preoperativeCardiacImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              تاییدیه قلب قبل از جراحی؛ چرا و چگونه؟
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</p>
          </header>

          <img
            src={preoperativeCardiacImage}
            alt="تاییدیه قلب قبل از جراحی - ارزیابی قلبی در منزل"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg mb-6">
              بسیاری از افراد برای جراحی‌های مختلف (از دندانپزشکی گرفته تا تعویض مفصل یا جراحی‌های زیبایی) نیاز به <strong>«نامه تاییدیه قلب»</strong> دارند. این کار برای سنجش میزان ریسک بیهوشی و جلوگیری از سکته قلبی در حین عمل انجام می‌شود.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار: هرگز بدون مشورت با پزشک، جراحی را انجام ندهید. ارزیابی قلبی قبل از عمل می‌تواند جان شما را نجات دهد.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چرا انجام این چک‌آپ در منزل نوید زندگی بهتر است؟</h2>
            
            <p className="mb-6">
              بیماری که نیاز به جراحی ارتوپدی دارد، جابه‌جایی‌اش سخت است. بیماری که جراحی عمومی دارد، وقت کافی برای صف‌های طولانی مطب را ندارد. ما پکیج کامل را به خانه شما می‌آوریم:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. نوار قلب در منزل</h3>
            <p className="mb-4">
              <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب</a> برای بررسی ریتم قلب و هرگونه سابقه سکته قدیمی انجام می‌شود. این تست اولین قدم در ارزیابی قلبی قبل از جراحی است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. اکو در منزل</h3>
            <p className="mb-4">
              <a href="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی</a> برای سنجش قدرت پمپاژ قلب (EF) انجام می‌شود که حیاتی‌ترین فاکتور برای متخصص بیهوشی است. EF نشان می‌دهد که قلب چه مقدار از خون موجود در بطن را به بدن پمپ می‌کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۳. ویزیت متخصص و صدور گواهی</h3>
            <p className="mb-6">
              پزشک متخصص قلب پس از معاینه و بررسی مدارک، <strong>گواهی کتبی تاییدیه جراحی</strong> را در همان جلسه برای شما صادر می‌کند. این گواهی شامل نظر متخصص قلب درباره ریسک‌های احتمالی و توصیه‌های لازم برای تیم جراحی است.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چه کسانی بیشتر به ارزیابی قلبی نیاز دارند؟</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li>افراد بالای ۵۰ سال</li>
              <li>بیماران قلبی یا افراد با سابقه سکته</li>
              <li>مبتلایان به دیابت یا فشار خون بالا</li>
              <li>افراد چاق یا با سابقه سیگار</li>
              <li>هرکسی که جراحی بزرگ (مثل تعویض مفصل، جراحی شکمی) در پیش دارد</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">EF قلب چیست و چرا مهم است؟</h2>
            <p className="mb-6">
              EF یا <strong>کسر جهشی (Ejection Fraction)</strong> درصدی از خون بطن چپ است که در هر ضربان به بدن پمپ می‌شود. مقدار نرمال EF بالای ۵۵٪ است. اگر EF پایین باشد (مثلاً زیر ۴۰٪)، نشان‌دهنده ضعف قلب است و ریسک بیهوشی افزایش می‌یابد. در این موارد، تیم جراحی و بیهوشی اقدامات احتیاطی ویژه‌ای انجام می‌دهند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مراحل دریافت تاییدیه قلب در منزل</h2>
            <ol className="list-decimal list-inside space-y-2 mb-6 mr-4">
              <li>تماس با <a href="/" className="text-primary hover:underline">نوید زندگی</a> و هماهنگی زمان مراجعه</li>
              <li>مراجعه تیم پزشکی به منزل با تجهیزات پرتابل</li>
              <li>انجام نوار قلب و اکوکاردیوگرافی</li>
              <li>معاینه توسط متخصص قلب</li>
              <li>صدور گواهی تاییدیه جراحی در همان جلسه</li>
            </ol>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                تاییدیه قلب قبل از جراحی در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای دریافت پکیج کامل ارزیابی قلبی قبل از جراحی (نوار قلب + اکو + صدور گواهی) در منزل، همین حالا تماس بگیرید:
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: 09386117912
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
            <p className="mb-6">
              اگر در آستانه یک عمل جراحی هستید، نباید اجازه دهید استرسِ پیگیری‌های پزشکی وضعیت شما را بدتر کند. مرکز خدمات پزشکی <a href="/" className="text-primary hover:underline">نوید زندگی</a> با تیمی مجرب و تجهیزات کامل، امنیت و دقت بیمارستان را در محیط گرم خانه برای شما فراهم کرده است.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع معتبر</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4 text-muted-foreground">
              <li>Mayo Clinic: Preoperative cardiac evaluation: What to expect</li>
              <li>American College of Cardiology: Guidelines on Perioperative Cardiovascular Evaluation</li>
            </ul>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default PreoperativeCardiacEvaluationPage;
