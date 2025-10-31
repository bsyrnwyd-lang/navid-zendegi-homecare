import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import onlineDoctorImage from "@/assets/doctor-patient-home.jpg";

const OnlineDoctorPage = () => {
  const faqs = [
    {
      question: "ویزیت آنلاین پزشک چگونه انجام می‌شود؟",
      answer: "ویزیت آنلاین از طریق تماس تلفنی یا ویدیوکال انجام می‌شود. پس از هماهنگی با تیم نوید زندگی، در زمان مقرر با پزشک متخصص مربوطه ارتباط برقرار می‌کنید و مشاوره دریافت می‌کنید."
    },
    {
      question: "آیا می‌توانم نتایج آزمایش‌های خود را برای پزشک آنلاین ارسال کنم؟",
      answer: "بله، شما می‌توانید تصاویر نتایج آزمایش، نوار قلب، سونوگرافی و سایر مدارک پزشکی خود را قبل یا حین ویزیت آنلاین برای پزشک ارسال کنید تا بررسی دقیق‌تری انجام شود."
    },
    {
      question: "آیا پزشک آنلاین می‌تواند نسخه الکترونیکی صادر کند؟",
      answer: "بله، پس از ویزیت آنلاین، پزشک در صورت نیاز نسخه الکترونیکی برای شما ارسال می‌کند که می‌توانید با آن از داروخانه‌ها دارو تهیه کنید."
    },
    {
      question: "ویزیت آنلاین برای چه بیماری‌هایی مناسب است؟",
      answer: "ویزیت آنلاین برای پیگیری بیماری‌های مزمن (دیابت، فشار خون، بیماری‌های قلبی)، مشاوره روانپزشکی، تنظیم دوز داروها، تفسیر نتایج آزمایش و مشاوره‌های اولیه مناسب است. در موارد اورژانسی که نیاز به معاینه فیزیکی دارد، ویزیت حضوری در منزل توصیه می‌شود."
    },
    {
      question: "آیا ویزیت آنلاین فقط در تهران ارائه می‌شود؟",
      answer: "خیر، یکی از مزایای اصلی ویزیت آنلاین این است که بدون محدودیت مکانی در سراسر ایران قابل ارائه است و شما می‌توانید از هر نقطه‌ای با پزشکان متخصص نوید زندگی مشاوره کنید."
    },
    {
      question: "تعرفه ویزیت آنلاین پزشک چقدر است؟",
      answer: "تعرفه ویزیت آنلاین پزشک ۱۵۰,۰۰۰ تومان است. برای اطلاع از جزئیات بیشتر می‌توانید به صفحه تعرفه‌ها مراجعه کنید یا با ما تماس بگیرید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت آنلاین پزشک متخصص قلب، روانپزشک و داخلی | مشاوره فوری پزشکی - نوید زندگی"
        description="ویزیت آنلاین پزشک عمومی و متخصص قلب، روانپزشکی، داخلی و سایر تخصص‌ها. مشاوره فوری پزشکی از راه دور در سراسر ایران با نوید زندگی. تعرفه ویزیت آنلاین: ۱۵۰,۰۰۰ تومان"
        keywords="ویزیت آنلاین پزشک, مشاوره آنلاین پزشکی, متخصص قلب آنلاین, روانپزشک آنلاین, ویزیت پزشک از راه دور, تله مدیسین"
        canonical="https://navidzendegi.ir/services/online-doctor"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  ویزیت آنلاین پزشک: مشاوره فوری با متخصص قلب، روانپزشک و سایر متخصصین در خانه شما (سراسر ایران)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  ویزیت آنلاین پزشک راهکار مدرن، سریع و ایمن برای دسترسی به خدمات درمانی تخصصی است. نوید زندگی با پلتفرمی امن، امکان مشاوره و ویزیت با بهترین پزشکان عمومی و متخصصین قلب، روانپزشکی، داخلی، ریه و ارتوپدی را به صورت آنلاین، بدون محدودیت مکانی و زمانی فراهم می‌کند. این سرویس برای پیگیری درمان‌های مزمن، تنظیم دارو و تفسیر نتایج آزمایش‌ها، حیاتی است.
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
                  src={onlineDoctorImage} 
                  alt="ویزیت آنلاین پزشک - مشاوره پزشکی از راه دور"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">مزایای کلیدی ویزیت آنلاین پزشک (Telemedicine)</h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p><strong>• دسترسی سریع و فوری:</strong> دیگر نیازی به انتظار در مطب یا ترافیک نیست. در زمان بروز علائم ناگهانی یا نیاز به تنظیم سریع دارو، مشاوره فوری در دسترس است.</p>
              
              <p><strong>• پوشش سراسری و فراتر از تهران:</strong> این سرویس، محدودیت مکانی را برطرف کرده و به بیماران در سراسر ایران اجازه می‌دهد تا با متخصصین مجرب نوید زندگی مشورت کنند.</p>
              
              <p><strong>• کاهش هزینه‌ها:</strong> صرفه‌جویی در هزینه‌های جانبی مانند ایاب و ذهاب.</p>
            </div>
          </div>
        </section>

        {/* Specialist Services Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">خدمات تخصصی آنلاین: از قلب تا اعصاب و روان</h2>
            
            <p className="text-lg mb-6">
              ما تیمی از متخصصان باتجربه را برای پاسخگویی به نیازهای درمانی مختلف شما گرد هم آورده‌ایم:
            </p>

            <div className="space-y-6 text-lg leading-relaxed">
              <div>
                <h3 className="text-xl font-bold mb-3">۱. ویزیت آنلاین متخصص قلب و عروق (پایش حوادث قلبی)</h3>
                <p className="mb-2"><strong>تفسیر تست‌ها:</strong> بررسی و تفسیر نتایج <Link to="/articles/ecg-home" className="text-primary hover:underline">نوار قلب در منزل</Link>، فشار خون و <Link to="/articles/cholesterol-test" className="text-primary hover:underline">آزمایش خون در منزل</Link> به صورت الکترونیکی.</p>
                <p className="mb-2"><strong>تنظیم داروهای قلبی:</strong> مشاوره و تنظیم دقیق داروهایی مانند <Link to="/articles/bisoprolol" className="text-primary hover:underline">بیزوپرولول</Link>، <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link> و استاتین‌ها (مانند <Link to="/articles/atorvastatin" className="text-primary hover:underline">آتورواستاتین</Link> و <Link to="/articles/rosuvastatin" className="text-primary hover:underline">رُزُواستاتین</Link>).</p>
                <p><strong>پیگیری پس از جراحی:</strong> پیگیری‌های حیاتی پس از <Link to="/articles/angiography-fear" className="text-primary hover:underline">آنژیوگرافی</Link>، تعبیه استنت یا جراحی قلب.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">۲. ویزیت آنلاین متخصص روانپزشک (اعصاب و روان)</h3>
                <p className="mb-2"><strong>مدیریت داروهای روانپزشکی:</strong> تنظیم و پایش دارو برای اختلالاتی مانند <Link to="/articles/depression" className="text-primary hover:underline">افسردگی</Link>، اضطراب، و اختلال دوقطبی (مناسب برای بیمارانی که به دلیل شرایط روانی یا محدودیت حرکتی قادر به ترک منزل نیستند).</p>
                <p><strong>مشاوره و ارزیابی اولیه:</strong> تشخیص و ارزیابی اولیه بیماری‌های اعصاب و روان.</p>
                <p className="mt-2">برای اطلاعات بیشتر درباره <Link to="/services/psychiatry" className="text-primary hover:underline">ویزیت روانپزشک در منزل</Link> کلیک کنید.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">۳. ویزیت آنلاین متخصص ریه و داخلی</h3>
                <p className="mb-2"><strong>مدیریت بیماری‌های مزمن ریوی:</strong> پایش وضعیت بیماران مبتلا به <Link to="/articles/asthma" className="text-primary hover:underline">آسم</Link> و تنظیم دوز کورتیکواستروئیدهای استنشاقی.</p>
                <p className="mb-2"><strong>تنظیم داروهای داخلی:</strong> مشاوره برای بیماری‌هایی مانند <Link to="/articles/diabetes" className="text-primary hover:underline">دیابت</Link>، <Link to="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون</Link> و بیماری‌های گوارشی.</p>
                <p>برای اطلاعات بیشتر درباره <Link to="/services/internal" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</Link> کلیک کنید.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">۴. ویزیت آنلاین متخصص ارتوپدی و توانبخشی</h3>
                <p className="mb-2"><strong>مشاوره ارتوپدی:</strong> ارزیابی اولیه دردهای مزمن مفصلی مانند <Link to="/articles/osteoarthritis" className="text-primary hover:underline">استئوآرتریت (آرتروز تخریبی)</Link>.</p>
                <p className="mb-2"><strong>پیگیری توانبخشی:</strong> نظارت بر روند پیشرفت <Link to="/services/physiotherapy" className="text-primary hover:underline">فیزیوتراپی در منزل</Link> و تنظیم برنامه تمرینی از راه دور.</p>
              </div>
            </div>
          </div>
        </section>

        {/* General Doctor Online Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">ویزیت آنلاین پزشک عمومی: مشاوره اولیه و دستورات درمانی</h2>
            
            <p className="text-lg mb-6">
              پزشک عمومی آنلاین ما به عنوان خط اول درمان، در دسترس شماست:
            </p>

            <div className="space-y-4 text-lg leading-relaxed">
              <p><strong>• تشخیص و درمان اولیه:</strong> ارزیابی علائم رایج (مانند <Link to="/articles/adult-fever" className="text-primary hover:underline">تب</Link>، <Link to="/articles/cold-treatment" className="text-primary hover:underline">سرماخوردگی</Link>، گلودرد) و تجویز داروهای اولیه.</p>
              
              <p><strong>• درخواست آزمایش و تصویربرداری:</strong> پزشک می‌تواند در صورت نیاز، درخواست <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link> یا سایر خدمات پاراکلینیکی را ثبت کند.</p>
              
              <p><strong>• ارجاع به متخصص:</strong> تشخیص زمان دقیق ارجاع شما به متخصصین دیگر.</p>
            </div>

            <p className="text-lg mt-6">
              برای اطلاعات بیشتر درباره <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک عمومی در منزل</Link> کلیک کنید.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">سلامتی خود را به تعویق نیندازید</h2>
            <p className="text-lg text-muted-foreground mb-8">
              برای رزرو وقت ویزیت آنلاین پزشک عمومی و متخصص (قلب، روانپزشکی، داخلی و ...) در کمترین زمان ممکن و کسب اطلاعات بیشتر در مورد تعرفه ویزیت آنلاین پزشک، همین حالا با ما تماس بگیرید.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Pricing Info Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default OnlineDoctorPage;
