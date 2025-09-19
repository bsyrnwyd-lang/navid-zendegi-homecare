import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import StructuredData from "@/components/StructuredData";
import LazyImage from "@/components/LazyImage";
import medicalConsultationImage from "@/assets/medical-consultation-article.jpg";

const MedicalConsultationPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "خدمات پزشکی و پرستاری در منزل", url: "/articles/medical-consultation" }
  ];

  return (
    <>
      <SEOHead
        title="خدمات پزشکی و پرستاری در منزل - مزایا و معایب | نوید زندگی"
        description="بررسی کامل مزایا و معایب خدمات درمانی و بستری در منزل. راهنمای انتخاب بهترین خدمات پزشکی در منزل با نوید زندگی."
        keywords="خدمات پزشکی در منزل، پرستاری در منزل، ویزیت پزشک در منزل، ICU در منزل، نوید زندگی"
        canonical="/articles/medical-consultation"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2024-03-15"
        modifiedTime="2024-03-15"
      />
      
      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "خدمات پزشکی و پرستاری در منزل – نوید زندگی",
          author: "دکتر نیره مظاهری تهرانی",
          publishedDate: "2024-03-15",
          modifiedDate: "2024-03-15",
          description: "بررسی کامل مزایا و معایب خدمات درمانی و بستری در منزل"
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbs} />
          
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                خدمات پزشکی و پرستاری در منزل – نوید زندگی
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground mb-6">
                <span>نویسنده: دکتر نیره مظاهری تهرانی</span>
                <span className="hidden md:block">•</span>
                <span>متخصص قلب و عروق</span>
                <span className="hidden md:block">•</span>
                <time dateTime="2024-03-15">۱۵ مارس ۲۰۲۴</time>
              </div>
              <LazyImage
                src={medicalConsultationImage}
                alt="خدمات پزشکی و پرستاری در منزل"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
                width={800}
                height={400}
              />
            </header>

            <div className="prose prose-lg max-w-none text-right">
              <h2 className="text-2xl font-bold text-primary mb-4">مزایا و معایب خدمات درمانی و بستری در منزل</h2>
              
              <p className="mb-6 leading-relaxed">
                امروزه بسیاری از خانواده‌ها به جای مراجعه به بیمارستان و درمانگاه، ترجیح می‌دهند از خدمات پزشکی و پرستاری در منزل استفاده کنند. مجموعه نوید زندگی با بیش از ۸ سال تجربه در این حوزه، خدمات متنوعی از درمان سرپایی تا بستری در منزل را ارائه می‌دهد. در ادامه به بررسی مزایا و معایب این خدمات می‌پردازیم:
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">خدمات سرپایی در منزل</h3>
              
              <p className="mb-4 leading-relaxed">
                شامل ویزیت پزشک عمومی و متخصص، درمان بیماری‌های ساده مانند سرماخوردگی، اسهال و استفراغ، انجام اکو و نوار قلب در منزل و سایر خدمات مشابه است.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">مزایا:</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>کاهش نیاز به جابه‌جایی به مطب یا درمانگاه</li>
                  <li>جلوگیری از معطلی و ازدحام مراکز درمانی</li>
                  <li>کاهش احتمال ابتلا به بیماری‌های ویروسی و عفونی جدید</li>
                </ul>

                <h4 className="text-lg font-semibold text-primary mb-3 mt-4">معایب:</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>هزینه این خدمات معمولاً بالاتر از مراجعه حضوری به مطب خواهد بود.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">خدمات بستری در منزل</h3>
              
              <p className="mb-4 leading-relaxed">
                این خدمات شامل مراقبت‌های ویژه (ICU در منزل)، اعزام پرستار حرفه‌ای، ویزیت متخصصان، انجام رادیولوژی، سونوگرافی، اکو و نوار قلب در منزل و سایر خدمات مشابه است.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">مزایا:</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>کاهش خطر ابتلا به عفونت بیمارستانی</li>
                  <li>احساس آرامش و راحتی بیشتر بیمار و خانواده در محیط خانه</li>
                  <li>امکان دریافت خدمات تخصصی متنوع بدون نیاز به بستری در بیمارستان</li>
                </ul>

                <h4 className="text-lg font-semibold text-primary mb-3 mt-4">هزینه:</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>تقریباً هم‌تراز با بیمارستان خصوصی است (چون هزینه تخت بیمارستان حذف می‌شود).</li>
                  <li>اما در مقایسه با بیمارستان دولتی، هزینه بیشتری خواهد داشت.</li>
                </ul>

                <h4 className="text-lg font-semibold text-primary mb-3 mt-4">محدودیت‌ها:</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>برخی خدمات مانند MRI، آنژیوگرافی، عکس رنگی قلب و برخی عمل‌های تخصصی تنها در بیمارستان امکان‌پذیر هستند.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">جمع‌بندی</h3>
              
              <ul className="list-disc list-inside space-y-2 text-foreground mb-6">
                <li>خدمات سرپایی در منزل گزینه‌ای مناسب برای سالمندان و بیماران با مشکلات ساده است، هرچند هزینه بیشتری نسبت به مراجعه حضوری دارد.</li>
                <li>خدمات بستری در منزل از نظر هزینه مشابه بیمارستان خصوصی است و در عین حال، راحتی و آرامش بیشتری برای بیمار و خانواده به همراه دارد.</li>
              </ul>

              <p className="mb-8 leading-relaxed">
                در نهایت، شما می‌توانید برای انتخاب بهترین روش درمان، از مشاوره رایگان مجموعه نوید زندگی استفاده کنید. هدف ما فراهم کردن آرامش، امنیت و بهترین خدمات پزشکی در منزل برای شماست.
              </p>
            </div>
          </article>

          <section className="mt-12 bg-primary/5 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                نیاز به مشاوره پزشکی دارید؟
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                تیم متخصصان نوید زندگی آماده ارائه خدمات پزشکی و پرستاری در منزل به شما هستند. 
                برای دریافت مشاوره رایگان یا رزرو وقت با ما تماس بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:02191309330"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  تماس فوری: ۰۲۱-۹۱۳۰۹۳۳۰
                </a>
                <a
                  href="https://wa.me/989120939330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  پیام در واتساپ
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default MedicalConsultationPage;