import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import PricingInfo from "@/components/PricingInfo";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import holterImage from "@/assets/holter-monitoring.jpg";

const HolterPage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "خدمات", url: "/#services" },
    { name: "هولتر قلب و فشار خون در منزل", url: "" }
  ];

  const serviceData = {
    name: "خدمات هولتر قلب و فشار خون در منزل",
    description: "خدمات هولتر ریتم قلب و هولتر فشار خون در منزل با دستگاه‌های مدرن و گزارش تخصصی",
    provider: "نوید زندگی",
    areaServed: "تهران",
    serviceType: "خدمات پزشکی در منزل"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="خدمات هولتر قلب و فشار خون در منزل تهران | نوید زندگی"
        description="خدمات هولتر ریتم قلب و هولتر فشار خون در منزل با دستگاه‌های مدرن و گزارش تخصصی توسط نوید زندگی. نصب و جمع‌آوری در منزل"
        keywords="هولتر قلب در منزل, هولتر فشار خون در خانه, خدمات پزشکی در منزل, نصب هولتر ریتم و فشار در منزل, تپش قلب و فشار خون بالا"
      />
      <StructuredData breadcrumbs={breadcrumbItems} service={serviceData} />
      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                خدمات هولتر قلب و فشار خون در منزل
              </h1>
              <p className="text-lg text-muted-foreground">
                بررسی دقیق ضربان قلب و فشار خون در محیط راحت منزل
              </p>
            </header>

            <div className="mb-8">
              <img 
                src={holterImage} 
                alt="هولتر قلب و فشار خون در منزل - نصب دستگاه هولتر توسط پرستار"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="prose max-w-none text-right space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">هولتر قلب (هولتر ریتم) چیست؟</h2>
                <p className="text-muted-foreground leading-relaxed">
                  هولتر ریتم قلب یک دستگاه کوچک و قابل‌حمل است که فعالیت الکتریکی قلب (نوار قلب) را به مدت ۲۴ تا ۴۸ ساعت ثبت می‌کند. این دستگاه برای بررسی اختلالات ضربان قلب بسیار کاربردی است، چون در حالی‌که نوار قلب معمولی فقط چند ثانیه وضعیت قلب را نشان می‌دهد، هولتر ریتم امکان بررسی مداوم قلب در طول شبانه‌روز را فراهم می‌کند.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">چه کسانی به هولتر ریتم نیاز دارند؟</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>افراد با تپش قلب‌های نامنظم یا شدید</li>
                  <li>بیمارانی که دچار سرگیجه یا غش‌های مکرر می‌شوند</li>
                  <li>کسانی که دچار درد قفسه سینه مشکوک هستند</li>
                  <li>بررسی ضربان قلب پس از سکته قلبی یا جراحی قلب</li>
                  <li>افرادی که باید اثربخشی داروهای قلبی در آن‌ها ارزیابی شود</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">هولتر فشار خون چیست؟</h2>
                <p className="text-muted-foreground leading-relaxed">
                  هولتر فشار خون دستگاهی است که به بازوی بیمار بسته می‌شود و به صورت خودکار در طول ۲۴ ساعت فشار خون را در بازه‌های زمانی مشخص (مثلاً هر ۲۰ یا ۳۰ دقیقه) اندازه‌گیری و ثبت می‌کند. برخلاف اندازه‌گیری‌های لحظه‌ای فشار خون، این روش تصویری دقیق از نوسانات فشار خون در طول شبانه‌روز ارائه می‌دهد.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">چه کسانی به هولتر فشار نیاز دارند؟</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>بیماران با فشار خون بالا یا پایین که در مطب مقادیر متفاوتی نشان می‌دهند (سندروم فشار خون سفیدپوش)</li>
                  <li>بررسی اثربخشی داروهای ضد فشار خون</li>
                  <li>بیمارانی که دچار سردرد، سرگیجه یا تاری دید مکرر هستند</li>
                  <li>افراد مشکوک به فشار خون مقاوم (فشاری که با چند دارو کنترل نمی‌شود)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">مزایای انجام هولتر در منزل</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>راحتی بیشتر بیمار در محیط خانه</li>
                  <li>کاهش استرس ناشی از حضور در کلینیک</li>
                  <li>صرفه‌جویی در زمان و هزینه رفت‌وآمد</li>
                  <li>ثبت نتایج دقیق‌تر، چون بیمار در شرایط طبیعی زندگی خود قرار دارد</li>
                  <li>نصب و جمع‌آوری دستگاه توسط پرستار یا تکنسین در منزل</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">مراحل انجام هولتر در منزل</h2>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                  <li>نصب دستگاه توسط پرستار یا تکنسین در منزل</li>
                  <li>ثبت اطلاعات به مدت ۲۴ تا ۴۸ ساعت:
                    <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                      <li>در هولتر ریتم: ثبت فعالیت قلبی</li>
                      <li>در هولتر فشار: اندازه‌گیری خودکار فشار خون در بازه‌های زمانی مشخص</li>
                    </ul>
                  </li>
                  <li>بیمار فعالیت‌های روزمره خود را ادامه می‌دهد (فقط باید از خیس شدن دستگاه جلوگیری کند)</li>
                  <li>پس از پایان مدت، دستگاه جمع‌آوری شده و داده‌ها توسط پزشک متخصص قلب تحلیل و گزارش می‌شوند</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
                <p className="text-muted-foreground leading-relaxed">
                  استفاده از هولتر قلب و فشار خون یکی از دقیق‌ترین روش‌ها برای تشخیص مشکلات قلبی و فشار خون است. انجام این خدمات در منزل علاوه بر راحتی بیمار، امکان بررسی واقعی‌تر وضعیت قلب و فشار خون در شرایط روزمره را فراهم می‌کند. اگر شما یا عزیزانتان نیاز به این بررسی‌ها دارید، استفاده از خدمات هولتر در منزل بهترین انتخاب خواهد بود.
                </p>
              </section>
            </div>

            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  برای دریافت خدمات هولتر قلب و فشار خون در منزل تماس بگیرید
                </h3>
                <button 
                  onClick={handleCall}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  {phoneNumber}
                </button>
              </CardContent>
            </Card>

            <div className="mt-12">
              <PricingInfo />
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default HolterPage;