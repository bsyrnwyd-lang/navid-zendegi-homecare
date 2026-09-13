import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import FAQSection from "@/components/FAQSection";
import InternalLinks, { cardioLinks, generalLinks, diagnosticLinks } from "@/components/InternalLinks";
import { Phone, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import doctorsImage from "@/assets/doctors-team-article.jpg";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  summary: string;
}

const DoctorsPage = () => {
  const phoneNumber = "09386117912";

  // لیست پزشکان در آینده در این آرایه اضافه می‌شود
  const doctors: Doctor[] = [];

  const serviceLinks = [
    ...cardioLinks.slice(0, 2),
    ...generalLinks.slice(0, 3),
    ...diagnosticLinks.slice(0, 2),
  ];

  const faqs = [
    {
      question: "پزشکان نوید زندگی چه تخصص‌هایی دارند؟",
      answer: "تیم پزشکی نوید زندگی شامل متخصصان داخلی، قلب و عروق، مغز و اعصاب، ارتوپدی، زنان، اطفال، روانپزشکی و سایر رشته‌های تخصصی است. جزئیات هر پزشک به زودی در این صفحه منتشر می‌شود."
    },
    {
      question: "چگونه می‌توانم با پزشک مورد نظر خودم ویزیت در منزل هماهنگ کنم؟",
      answer: "کافی است با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید. تیم پشتیبانی نوید زندگی با توجه به نیاز شما، بهترین پزشک متخصص را برای ویزیت در منزل هماهنگ می‌کند."
    },
    {
      question: "آیا پزشکان نوید زندگی مجرب و دارای صلاحیت هستند؟",
      answer: "بله، تمامی پزشکان همکار نوید زندگی دارای پروانه طبابت معتبر و سابقه کاری قابل قبول در تخصص مربوطه هستند."
    },
    {
      question: "هزینه ویزیت پزشک متخصص در منزل چقدر است؟",
      answer: "هزینه ویزیت بسته به تخصص پزشک، منطقه و ساعت درخواست متفاوت است. برای اطلاع از تعرفه دقیق با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="معرفی پزشکان نوید زندگی | پزشکان متخصص در منزل تهران"
        description="آشنایی با پزشکان متخصص و فوق تخصص نوید زندگی. ویزیت در منزل تهران با بهترین دکترهای داخلی، قلب، اعصاب و سایر تخصص‌ها. تماس: ۰۹۳۸۶۱۱۷۹۱۲"
        keywords="پزشکان نوید زندگی, معرفی پزشکان, دکتر در منزل تهران, متخصص در منزل, پزشک متخصص در خانه"
        canonical="https://navidzendegi.com/doctors"
      />
      <SEOSchema
        type="service"
        serviceName="معرفی پزشکان نوید زندگی"
        serviceDescription="آشنایی با پزشکان متخصص و فوق تخصص ارائه‌دهنده خدمات پزشکی در منزل تهران"
        areaServed="تهران"
      />
      <SEOSchema type="faq" faqs={faqs} />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                معرفی پزشکان نوید زندگی
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                نوید زندگی با همراهی تیمی از پزشکان متخصص و فوق تخصص مجرب، خدمات پزشکی در منزل تهران را با کیفیت بالا و دسترسی سریع ارائه می‌دهد. هدف ما ایجاد ارتباطی مستقیم و شفاف بین بیماران و پزشکان است تا بتوانید با اطمینان کامل، درمان مورد نیاز خود را در محیط آرام خانه دریافت کنید.
              </p>
            </div>

            <div className="relative mb-8">
              <img
                src={doctorsImage}
                alt="تیم پزشکی نوید زندگی - پزشکان متخصص در منزل تهران"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                width={1024}
                height={576}
              />
            </div>

            <div className="text-center mb-8">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: {phoneNumber}
              </a>
            </div>
          </div>
        </section>

        {/* Doctors List Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              پزشکان همکار نوید زندگی
            </h2>

            {doctors.length > 0 ? (
              <div className="space-y-8">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="border-b border-border pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                        <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                        <p className="text-foreground leading-relaxed text-justify">{doctor.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <Stethoscope className="w-12 h-12 text-primary/60 mx-auto mb-4" />
                <p className="text-lg text-foreground mb-2">لیست پزشکان به زودی تکمیل می‌شود</p>
                <p className="text-muted-foreground">
                  برای اطلاع از پزشکان فعال و رزرو ویزیت در منزل، همین حالا با ما تماس بگیرید.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Our Doctors Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا پزشکان نوید زندگی را انتخاب کنید؟
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تخصص و تجربه:</strong> همکاری با پزشکان دارای پروانه طبابت معتبر و سابقه کار بالینی مناسب.
              </li>
              <li className="text-base text-foreground">
                <strong>دسترسی سریع:</strong> امکان اعزام پزشک متخصص به منزل در کوتاه‌ترین زمان ممکن در سراسر تهران.
              </li>
              <li className="text-base text-foreground">
                <strong>مشاوره اختصاصی:</strong> هر بیمار با توجه به شرایط بالینی و سابقه پزشکی خود، برنامه درمانی شخصی‌سازی شده دریافت می‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>پیگیری مستمر:</strong> امکان ویزیت‌های دوره‌ای و مشاوره تلفنی برای بیماران مزمن و نیازمند مراقبت طولانی‌مدت.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              رزرو ویزیت پزشک متخصص در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای هماهنگی ویزیت با پزشک مورد نظر خود یا دریافت مشاوره رایگان، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: {phoneNumber}
            </a>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <InternalLinks
              title="خدمات مرتبط در منزل"
              links={serviceLinks}
            />

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">مقالات مرتبط</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li><Link to="/articles/specialist-home-visit" className="text-primary hover:underline text-sm">ویزیت متخصص در منزل</Link></li>
                <li><Link to="/articles/cardiology-home-services" className="text-primary hover:underline text-sm">خدمات قلب در منزل</Link></li>
                <li><Link to="/articles/echo-home" className="text-primary hover:underline text-sm">اکو در منزل</Link></li>
                <li><Link to="/articles/ecg-home" className="text-primary hover:underline text-sm">نوار قلب در منزل</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default DoctorsPage;
