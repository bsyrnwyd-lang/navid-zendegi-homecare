import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import vaccinationImage from "@/assets/vaccination-article.jpg";

const InfluenzaVaccinePage = () => {
  const handleCall = () => {
    window.location.href = "tel:02126701329";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989054060794", "_blank");
  };

  return (
    <>
      <SEOHead
        title="تزریق واکسن آنفولانزا در منزل تهران | راهنمای کامل | نوید زندگی"
        description="تزریق واکسن آنفولانزا در منزل تهران توسط پرستار متخصص. راهنمای کامل زمان‌بندی، گروه‌های پرخطر و مزایای واکسیناسیون سالانه آنفولانزا با خدمات نوید زندگی."
        keywords="تزریق واکسن آنفولانزا در منزل، واکسن آنفولانزا تهران، زمان تزریق واکسن آنفولانزا، گروه‌های پرخطر آنفولانزا، تزریق واکسن در خانه"
        canonical="https://navidzendegi.ir/articles/influenza-vaccine"
        ogType="article"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            <img
              src={vaccinationImage}
              alt="تزریق واکسن آنفولانزا در منزل"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <h1 className="text-3xl font-bold mb-6 text-foreground">
              تزریق واکسن آنفولانزا در منزل: راهنمای کامل، زمان‌بندی و گروه‌های پرخطر
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
              <p>
                آنفولانزا یک بیماری تنفسی جدی است که هر ساله با آغاز فصول سرد شیوع پیدا می‌کند. تزریق واکسن مؤثرترین راه برای پیشگیری از ابتلا یا کاهش شدت بیماری است. برای گروه‌های پرخطر و افرادی که مایلند واکسیناسیون خود را در آرامش کامل انجام دهند، خدمات تزریق واکسن آنفولانزا در منزل بهترین انتخاب است.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                چرا واکسن آنفولانزا ضروری و سالانه است؟
              </h2>
              <p>
                ویروس آنفولانزا به سرعت در حال تغییر (جهش) است. به همین دلیل، سازمان بهداشت جهانی (WHO) هر سال واکسن را به‌روزرسانی می‌کند تا با سویه‌های جدید منطبق باشد.
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>محافظت در برابر سویه‌های جدید:</strong> واکسن سال قبل، شما را در برابر ویروس‌های جهش‌یافته سال جاری محافظت نمی‌کند.
                </li>
                <li>
                  <strong>کاهش شدت بیماری:</strong> حتی اگر واکسن صد در صد از ابتلا جلوگیری نکند (اثربخشی حدود ۴۰ تا ۶۰ درصد متغیر است)، به طور چشمگیری خطر عوارض جدی، ذات‌الریه، بستری شدن در بیمارستان و مرگ و میر ناشی از آنفولانزا را کاهش می‌دهد.
                </li>
                <li>
                  <strong>ایمنی کاهشی:</strong> سطح آنتی‌بادی‌های تولیدشده پس از واکسیناسیون به مرور زمان (حدود ۶ ماه) کاهش می‌یابد و نیاز به تزریق مجدد سالانه را ضروری می‌سازد.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                بهترین زمان برای تزریق واکسن آنفولانزا (زمان‌بندی طلایی)
              </h2>
              <p>
                ایمنی بدن حدود دو هفته پس از تزریق واکسن آغاز می‌شود. بنابراین، زمان‌بندی تزریق بسیار مهم است:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>عموم مردم:</strong> بهترین زمان اواخر شهریور تا پایان مهرماه است. این زمان به بدن فرصت کافی می‌دهد تا قبل از اوج‌گیری بیماری در اواخر پاییز و زمستان، ایمنی لازم را کسب کند.
                </li>
                <li>
                  <strong>سالمندان و گروه‌های پرخطر:</strong> تزریق در اوایل مهرماه توصیه می‌شود تا ایمنی برای ماه‌های اوج فصل حفظ شود.
                </li>
                <li>
                  <strong>مادران باردار:</strong> می‌توانند واکسن را در هر مرحله از بارداری دریافت کنند و این کار ایمنی لازم را به جنین نیز منتقل می‌کند.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                گروه‌های پرخطر: اولویت‌های اصلی تزریق واکسن آنفولانزا
              </h2>
              <p>
                تزریق واکسن برای این گروه‌ها که بیشترین خطر ابتلا به عوارض شدید را دارند، حیاتی است:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>سالمندان بالای ۶۵ سال:</strong> به دلیل ضعف سیستم ایمنی.
                </li>
                <li>
                  <strong>زنان باردار</strong> و زنان در آستانه بارداری.
                </li>
                <li>
                  <strong>کودکان ۶ ماهه تا ۵ سال</strong> (به ویژه زیر ۲ سال).
                </li>
                <li>
                  <strong>بیماران مزمن:</strong> افراد مبتلا به دیابت، بیماری‌های قلبی-عروقی، بیماری‌های مزمن ریوی (آسم، COPD)، بیماری‌های کلیوی و کبدی.
                </li>
                <li>
                  <strong>افراد دارای نقص سیستم ایمنی:</strong> بیماران تحت شیمی‌درمانی، یا مصرف‌کنندگان داروهای کورتونی.
                </li>
                <li>
                  <strong>کارکنان بهداشت و درمان:</strong> برای محافظت از خود و جلوگیری از انتقال به بیماران پرخطر.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                مزایای تزریق واکسن آنفولانزا در منزل با خدمات نوید زندگی
              </h2>
              <p>
                برای بسیاری از گروه‌های پرخطر، جابجایی برای تزریق واکسن می‌تواند چالش‌برانگیز یا پرخطر باشد. خدمات تزریقات در منزل نوید زندگی این فرآیند را تسهیل می‌کند:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>امنیت و آرامش:</strong> تزریق واکسن توسط پرستار متخصص در محیط امن خانه، که برای بیماران سالمند یا دارای محدودیت حرکتی ایده‌آل است.
                </li>
                <li>
                  <strong>حفظ زنجیره سرد:</strong> پرستاران ما به درستی از نگهداری واکسن در شرایط دمایی مناسب (یخچال و دور از یخ‌زدگی) اطمینان حاصل می‌کنند.
                </li>
                <li>
                  <strong>تزریق ایمن:</strong> اطمینان از تزریق صحیح (عضلانی در ناحیه دلتوئید یا ران) و رعایت نکات بهداشتی و عدم ماساژ دادن محل تزریق.
                </li>
                <li>
                  <strong>مشاوره و مراقبت پس از تزریق:</strong> ارائه توصیه‌های لازم برای مدیریت عوارض جانبی خفیف احتمالی (مانند درد بازو یا تب گذرا).
                </li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  با اطمینان از تزریق صحیح و حفظ ایمنی، واکسیناسیون آنفولانزای سالانه خود را جدی بگیرید
                </h3>
                <p className="mb-4">
                  برای هماهنگی و اعزام پرستار مجرب جهت تزریق واکسن آنفولانزا در منزل تهران، همین حالا با نوید زندگی تماس بگیرید.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button
                    onClick={handleCall}
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <Phone className="w-4 h-4" />
                    تماس فوری: ۰۲۱-۲۶۷۰۱۳۲۹
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    ارسال پیام در واتساپ
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <PricingInfo />
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  خدمات ویزیت پزشک در منزل ۲۴ساعته
                </h3>
                <p className="mb-2">
                  برای دریافت خدمات ویزیت پزشک در منزل در تهران می‌توانید با شماره تلفن زیر تماس بگیرید:
                </p>
                <p className="font-bold text-lg text-primary">
                  ۰۲۱-۲۶۷۰۱۳۲۹
                </p>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default InfluenzaVaccinePage;
