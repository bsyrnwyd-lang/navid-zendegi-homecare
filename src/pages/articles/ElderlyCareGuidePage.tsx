import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import elderlyCareImage from "@/assets/elderly-care-home.jpg";

const ElderlyCareGuidePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "راهنمای جامع مراقبت از سالمند در منزل", url: "/articles/elderly-care-guide" }
  ];

  const relatedArticles = [
    {
      title: "خدمات پرستاری در منزل",
      description: "دریافت خدمات پرستاری حرفه‌ای و مراقبت‌های تخصصی در خانه",
      link: "/services/nursing",
      image: "/src/assets/nursing-home-care.jpg",
      category: "خدمات پزشکی"
    },
    {
      title: "فیزیوتراپی در منزل",
      description: "خدمات توانبخشی و فیزیوتراپی تخصصی برای سالمندان در خانه",
      link: "/services/physiotherapy",
      image: "/src/assets/physiotherapy.jpg",
      category: "توانبخشی"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "دریافت خدمات پزشک عمومی و معاینات دوره‌ای در خانه",
      link: "/general-doctor",
      image: "/src/assets/doctor-patient-home.jpg",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <>
      <SEOHead
        title="راهنمای جامع مراقبت از سالمند در منزل | پرستار و ویزیت پزشک در خانه تهران"
        description="راهنمای کامل مراقبت از سالمند در منزل، چالش‌ها، مزایا و خدمات تخصصی پرستاری، ویزیت پزشک و فیزیوتراپی در خانه برای سالمندان"
        keywords="مراقبت از سالمند در منزل، پرستار سالمند در خانه، نگهداری از سالمند در منزل تهران، ویزیت پزشک در منزل، فیزیوتراپی سالمند"
        canonical="https://navid-zendegi-homecare.lovable.app/articles/elderly-care-guide"
        ogType="article"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-20">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 mt-6">
              <img 
                src={elderlyCareImage}
                alt="راهنمای جامع مراقبت از سالمند در منزل"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              راهنمای جامع مراقبت از سالمند در منزل: چرا خدمات پرستاری در خانه بهترین گزینه است؟
            </h1>

            {/* مقدمه */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                با افزایش سن، دغدغه اصلی بسیاری از خانواده‌ها تأمین بهترین کیفیت زندگی برای عزیزان سالمندشان است. <strong>مراقبت از سالمند در منزل</strong> به جای انتقال آن‌ها به مراکز درمانی یا سرای سالمندان، نه تنها به حفظ روحیه آن‌ها کمک می‌کند، بلکه راهکاری امن و تخصصی برای مدیریت نیازهای پزشکی و روزمره است.
              </p>
            </div>

            {/* H2: چالش‌های نگهداری */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                چالش‌های نگهداری از سالمند در خانه و راه‌حل‌های تخصصی
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                <strong>نگهداری از سالمند</strong>، به‌ویژه در صورت ابتلا به بیماری‌های مزمن (مانند آلزایمر، دیابت یا محدودیت‌های حرکتی)، نیازمند دانش و زمان کافی است که اغلب از توان خانواده‌ها خارج است.
              </p>

              {/* H3: نیازهای اصلی */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">
                  نیازهای اصلی سالمندان در منزل
                </h3>

                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>نیازهای پزشکی و درمانی:</strong> کنترل داروها، تزریقات، ویزیت پزشک و چکاپ‌های دوره‌ای.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>نیازهای حرکتی و توانبخشی:</strong> جلوگیری از زمین خوردن، کمک به حرکت، و نیاز به جلسات فیزیوتراپی در منزل.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>نیازهای روانی و عاطفی:</strong> کاهش احساس تنهایی، نیاز به هم‌صحبتی و مراقبت مداوم.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* H2: مزایای استفاده از خدمات پرستاری */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                مزایای استفاده از خدمات پرستاری و ویزیت پزشک در منزل برای سالمندان
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                استخدام یک <strong>پرستار در منزل</strong> مزایای قابل توجهی نسبت به بستری شدن در مراکز درمانی دارد:
              </p>

              <ul className="space-y-4 text-lg mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>حفظ استقلال و کرامت فردی:</strong> سالمند در محیط آشنای خانه احساس امنیت و آرامش بیشتری دارد.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>مراقبت یک به یک (One-on-One Care):</strong> پرستار تمام توجه و تمرکز خود را به یک بیمار اختصاص می‌دهد.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>بهبود وضعیت روانی:</strong> دوری از محیط‌های درمانی شلوغ و کاهش افسردگی سالمندی.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>پایش بهتر بیماری‌های مزمن:</strong> کنترل دقیق‌تر فشار خون، قند خون، و تنظیم دارو زیر نظر پرستار متخصص.
                  </div>
                </li>
              </ul>
            </section>

            {/* H2: خدمات کلیدی */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                خدمات کلیدی قابل ارائه برای سالمندان در خانه توسط نوید زندگی
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                تیم متخصص نوید زندگی یک بسته جامع از خدمات را برای <strong>مراقبت از سالمند در منزل تهران</strong> ارائه می‌دهد تا تمامی نیازهای درمانی و مراقبتی پوشش داده شود:
              </p>

              <ul className="space-y-4 text-lg mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>پرستار دائمی و مقطعی:</strong> اعزام پرستار ماهر به صورت ۲۴ ساعته، شبانه‌روزی، یا ساعتی برای مدیریت امور روزانه و مراقبت‌های بالینی. <Link to="/services/nursing" className="text-primary hover:underline">اطلاعات بیشتر</Link>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>ویزیت پزشک در منزل:</strong> اعزام فوری پزشک عمومی یا متخصص داخلی در منزل برای معاینات دوره‌ای، درمان بیماری‌های حاد و تنظیم دارو. <Link to="/general-doctor" className="text-primary hover:underline">اطلاعات بیشتر</Link>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>خدمات توانبخشی و فیزیوتراپی:</strong> انجام جلسات فیزیوتراپی در منزل برای بهبود قدرت عضلانی و کاهش خطر زمین خوردن. <Link to="/services/physiotherapy" className="text-primary hover:underline">اطلاعات بیشتر</Link>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>تزریقات و پانسمان در منزل:</strong> ارائه خدمات بالینی مورد نیاز مانند نصب سوند، تعویض پانسمان زخم بستر و تزریقات بدون نیاز به خروج از خانه.
                  </div>
                </li>
              </ul>
            </section>

            {/* H2: انتخاب بهترین مرکز */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                چگونه بهترین مرکز مراقبت از سالمند در منزل را انتخاب کنیم؟
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                انتخاب مرکز مناسب برای <strong>نگهداری از سالمند در خانه</strong> تصمیمی حیاتی است. مطمئن شوید که مرکز انتخابی شما دارای این ویژگی‌ها باشد:
              </p>

              <ul className="space-y-4 text-lg mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>دارای مجوز رسمی:</strong> ارائه خدمات با تأیید و نظارت سازمان‌های بهداشتی.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>کادر متخصص و با تجربه:</strong> به‌کارگیری پرستاران دارای سابقه کار با سالمندان و بیماری‌های خاص.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <div>
                    <strong>پشتیبانی شبانه‌روزی:</strong> امکان ارائه خدمات اورژانسی در تمام ساعات شبانه‌روز.
                  </div>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>نوید زندگی</strong> با سابقه درخشان در خدمات پزشکی و پرستاری در منزل تهران، آماده ارائه بهترین راهکارهای مراقبتی و درمانی برای آسایش سالمندان شماست.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mb-12 bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">مشاوره رایگان و دریافت خدمات</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                برای مشاوره رایگان و دریافت خدمات تخصصی <strong>پرستاری از سالمند در منزل</strong> (شامل ویزیت پزشک و فیزیوتراپی)، همین حالا با ما تماس بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={handleCall}
                  className="group"
                >
                  <Phone className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                  تماس برای مشاوره رایگان
                </Button>
              </div>
            </section>

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </article>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default ElderlyCareGuidePage;