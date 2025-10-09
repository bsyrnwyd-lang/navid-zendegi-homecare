import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";

const AtorvastatinPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09122593357";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989122593357", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="آتوروستاتین چیست و چه کاربردی دارد؟ | نوید زندگی"
        description="آتوروستاتین دارویی برای کنترل چربی خون و پیشگیری از بیماری‌های قلبی است. در این مقاله با نحوه مصرف، عوارض و اهمیت پیگیری پزشکی در منزل آشنا شوید."
        keywords="آتوروستاتین, دارو چربی خون, کلسترول بد, LDL, HDL, پروفایل چربی, عوارض آتوروستاتین, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/atorvastatin"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی، متخصص قلب و عروق"
      />
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              آتوروستاتین چیست و چه کاربردی دارد؟
            </h1>
            <p className="text-foreground/90 text-lg font-semibold mb-2">نویسنده: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق</p>
          </div>

          <img
            src={atorvastatinImage}
            alt="آتوروستاتین - داروی کنترل چربی خون"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">معرفی دارو</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                آتوروستاتین (Atorvastatin) یکی از داروهای رایج برای کاهش چربی خون است. این دارو با کاهش کلسترول بد (LDL) و افزایش کلسترول خوب (HDL) در بدن، به پیشگیری از بیماری‌های قلبی‌عروقی و گرفتگی عروق کرونر قلب کمک می‌کند.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">نحوه مصرف آتوروستاتین</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                مصرف داروی آتوروستاتین باید به صورت منظم و روزانه انجام شود. پزشک معمولاً بر اساس وضعیت بیمار و نتایج آزمایش خون، دوز دارو را تنظیم می‌کند. توصیه می‌شود بیماران هر چند ماه یک‌بار چکاپ سریال پروفایل چربی خون (Lipid Profile) انجام دهند تا روند درمان بررسی شود.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">عوارض آتوروستاتین</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                آتوروستاتین معمولاً عارضه خطرناکی ندارد، اما یکی از عوارض شایع آن درد یا گرفتگی عضلانی است. در موارد نادر ممکن است باعث آسیب عضلانی (میوپاتی) شود. اگر در حین مصرف دارو دچار درد یا ضعف غیرعادی در عضلات شدید، باید فوراً موضوع را با پزشک خود در میان بگذارید.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 my-6">
                <p className="text-foreground/90 font-semibold">
                  ⚠️ نکته مهم: از قطع خودسرانه دارو جداً خودداری کنید. قطع ناگهانی ممکن است باعث افزایش ناگهانی چربی خون و خطر مشکلات قلبی شود.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">نقش پزشک در تنظیم درمان</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                تنظیم دوز آتوروستاتین و پیگیری اثرات دارو باید حتماً زیر نظر پزشک انجام شود. خدمات ویزیت پزشک در منزل از طریق سایت navidzendegi.com این امکان را فراهم می‌کند تا بدون مراجعه به مراکز درمانی، وضعیت چربی خون، عملکرد کبد و عوارض احتمالی دارو توسط پزشک بررسی شود.
              </p>
            </section>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              ویزیت پزشک در منزل ۲۴ ساعته
            </h3>
            <p className="text-center text-foreground/80 mb-4">
              برای مشاوره و ویزیت پزشک در منزل با شماره زیر تماس بگیرید:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                onClick={handleCall}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                <Phone className="ml-2 h-4 w-4" />
                تماس: ۰۹۱۲۲۵۹۳۳۵۷
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                واتساپ
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <p className="text-center text-foreground/80">
              برای کسب اطلاعات بیشتر درباره خدمات پزشکی در منزل، به{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                صفحه تماس با ما
              </a>{" "}
              مراجعه کنید یا با{" "}
              <a href="/services/cardiology" className="text-primary hover:underline font-semibold">
                خدمات قلب و عروق
              </a>{" "}
              ما آشنا شوید.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AtorvastatinPage;
