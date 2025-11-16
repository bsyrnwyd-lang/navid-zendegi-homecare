import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { Phone, Heart, Stethoscope, Activity, Wind } from "lucide-react";
import equipmentImage from "@/assets/medical-equipment-rental.jpg";

const MedicalEquipmentRentalPage = () => {
  const faqs = [
    {
      question: "آیا دستگاه‌های اجاره‌ای شما استاندارد و ایمن هستند؟",
      answer: "بله، تمام تجهیزات ما استاندارد بوده و قبل از تحویل، کالیبره و کنترل کیفیت می‌شوند. همچنین ست‌ها و فیلترهای آکبند همراه دستگاه‌های حیاتی ارائه می‌شود."
    },
    {
      question: "آیا آموزش کار با دستگاه‌ها ارائه می‌شود؟",
      answer: "بله، تیم فنی ما پیش از تحویل دستگاه، نحوه کار، نگهداری و استفاده صحیح از تجهیزات را به شما آموزش می‌دهد و پشتیبانی فنی ۲۴ ساعته در دسترس است."
    },
    {
      question: "چه مدت زمانی برای تحویل تجهیزات نیاز است؟",
      answer: "معمولاً تحویل تجهیزات در تهران ظرف ۲۴ ساعت انجام می‌شود. در موارد فوری، امکان ارسال سریع‌تر نیز وجود دارد."
    },
    {
      question: "آیا هزینه نصب و راه‌اندازی دستگاه‌ها جداگانه است؟",
      answer: "خیر، هزینه نصب، راه‌اندازی و آموزش در قیمت اجاره ماهانه لحاظ شده است. برای دریافت اطلاعات دقیق‌تر با ما تماس بگیرید."
    },
    {
      question: "آیا امکان اجاره بلندمدت تجهیزات وجود دارد؟",
      answer: "بله، امکان اجاره ماهانه و بلندمدت تجهیزات پزشکی با شرایط ویژه وجود دارد. برای دریافت لیست قیمت و شرایط، لطفاً با ما تماس بگیرید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="اجاره تجهیزات پزشکی در تهران | اکسیژن ساز، ونتیلاتور و هولتر - نوید زندگی"
        description="اجاره تجهیزات پزشکی و پاراکلینیکی در تهران شامل اکسیژن ساز، ونتیلاتور، هولتر، تخت بیمارستانی و سایر تجهیزات تخصصی. با پشتیبانی فنی ۲۴ ساعته و ارسال فوری."
        keywords="اجاره تجهیزات پزشکی, اجاره اکسیژن ساز, اجاره ونتیلاتور, اجاره هولتر, اجاره تخت بیمارستانی, تجهیزات پاراکلینیک"
        canonical="https://navidzendegi.ir/services/medical-equipment-rental"
      />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  اجاره تجهیزات پزشکی و پاراکلینیکی در تهران: تأمین دستگاه‌های حیاتی در منزل
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  آیا بیمار شما نیاز به ادامه درمان و مراقبت تخصصی در محیط آرام خانه دارد؟ اجاره تجهیزات پزشکی راهکار سریع و ایمن برای تأمین دستگاه‌های حیاتی است. نوید زندگی با ارائه خدمات اجاره ماهانه تجهیزات پزشکی، نیاز شما به اکسیژن ساز، ونتیلاتور، تخت بیمارستانی و دیگر وسایل تخصصی را با تضمین کیفیت و پشتیبانی فنی ۲۴ ساعته، برطرف می‌کند.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: 09386117912
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={equipmentImage} 
                  alt="اجاره تجهیزات پزشکی در تهران - اکسیژن ساز، ونتیلاتور و تخت بیمارستانی"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Respiratory Equipment Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Wind className="h-8 w-8 text-primary" />
              خدمات کلیدی اجاره تجهیزات پزشکی و تنفسی
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              ما برای بیماران نیازمند به مراقبت‌های ویژه تنفسی و پایش حیاتی، دستگاه‌های پیشرفته‌ای را اجاره می‌دهیم:
            </p>

            <div className="space-y-6 text-lg leading-relaxed">
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">تجهیزات اکسیژن‌رسانی</h3>
                <p className="mb-2">اجاره <a href="tel:09386117912" className="text-primary hover:underline">اکسیژن سازهای ۵ لیتری و ۱۰ لیتری</a>، و کپسول‌های اکسیژن ۱۰ و ۴۰ لیتری. این تجهیزات برای بیماران مبتلا به COPD، آسم شدید و نارسایی‌های تنفسی ضروری است.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">دستگاه‌های کمک تنفسی پیشرفته</h3>
                <p className="mb-2">شامل <a href="tel:09386117912" className="text-primary hover:underline">ونتیلاتورهای تخصصی</a> (مانند تی برد آمریکایی و الیزه) با ست و فیلتر آکبند، و دستگاه بای‌پپ (BIPAP).</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">مانیتورینگ و ساکشن</h3>
                <p className="mb-2">اجاره دستگاه <a href="tel:09386117912" className="text-primary hover:underline">مانیتورینگ</a> (برای پایش علائم حیاتی)، ساکشن‌های رومیزی و دو مخزن، و نبولایزر (برای رساندن داروهای استنشاقی).</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">سایر تجهیزات تخصصی</h3>
                <p>شامل پرفیوزر و الستون.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Paraclinical Equipment Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Activity className="h-8 w-8 text-primary" />
              اجاره تجهیزات پاراکلینیکی، توانبخشی و مراقبت در منزل
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              برای آسایش بیمار و تسهیل مراقبت‌های روزانه، تجهیزات توانبخشی و پایش در منزل نیز موجود است:
            </p>

            <div className="space-y-6 text-lg leading-relaxed">
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">تجهیزات بستری</h3>
                <p>اجاره <a href="tel:09386117912" className="text-primary hover:underline">تخت برقی و مکانیکی</a>، و انواع تشک مواج (سلولی و تخم مرغی) برای جلوگیری از زخم بستر.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">ابزارهای کمکی حرکتی</h3>
                <p>شامل ویلچر و واکر چرخدار برای کمک به جابجایی بیماران.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">تجهیزات پایش قلبی و فشار خون (هولتر)</h3>
                <p>اجاره دستگاه‌های پیشرفته برای <a href="/services/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته و ۴۸ ساعته</a> و هولتر ریتم ۲۴ ساعته و ۴۸ ساعته.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">خدمات جانبی</h3>
                <p>اجاره پایه سرم و فتوتراپی (برای درمان زردی نوزادان).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              مزایای اجاره تجهیزات از نوید زندگی (پشتیبانی فنی و تخصصی)
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p><strong>• شفافیت و همکاری:</strong> ما متعهد به ارائه <a href="tel:09386117912" className="text-primary hover:underline">لیست قیمت همکاری سال ۱۴۰۴</a> هستیم.</p>
              
              <p><strong>• ایمنی تضمین شده:</strong> تمامی دستگاه‌های حیاتی مانند ونتیلاتور و بای‌پپ، با ست و فیلتر آکبند ارائه می‌شوند تا بالاترین سطح بهداشت و ایمنی رعایت شود.</p>
              
              <p><strong>• تخصص و آموزش:</strong> تیم فنی ما پیش از تحویل، نحوه کار با دستگاه‌ها را آموزش داده و پشتیبانی فنی ۲۴ ساعته را فراهم می‌کند.</p>
              
              <p><strong>• تحویل فوری در تهران:</strong> خدمات ارسال تجهیزات به تمام مناطق تهران با سرعت بالا انجام می‌شود.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <Stethoscope className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                نیاز به اجاره تجهیزات پزشکی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                برای دریافت لیست قیمت اجاره تجهیزات پزشکی (مانند اکسیژن ساز، ونتیلاتور و هولتر) و درخواست ارسال فوری به محل شما، لطفاً همین حالا تماس بگیرید.
              </p>
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-6 w-6" />
                تماس فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Pricing Section */}
        <PricingInfo />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default MedicalEquipmentRentalPage;
