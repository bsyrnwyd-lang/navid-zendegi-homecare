import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import cholesterolTestImage from "@/assets/cholesterol-test-article.jpg";
import breathingTreatmentImage from "@/assets/shortness-breath-treatment.jpg";
import neurobionImage from "@/assets/neurobion-ampoule-article.jpg";
import heatExhaustionImage from "@/assets/heat-exhaustion-article.jpg";
import gardasilImage from "@/assets/gardasil-vaccine-article.jpg";
import medicalConsultationImage from "@/assets/medical-consultation-article.jpg";
import hpvPoolImage from "@/assets/hpv-pool-article.jpg";
import nailSpotsImage from "@/assets/nail-spots-article.jpg";
import strokeImage from "@/assets/neurology.jpg";
import heartAttackImage from "@/assets/cardiology-home-visit.jpg";
import influenzaImage from "@/assets/infectious-disease.jpg";
import smokingImage from "@/assets/iranian-cardiology-home.jpg";
import aiCardiologyImage from "@/assets/ai-cardiology-article.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import migrainImage from "@/assets/migraine-article.jpg";

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "تشخیص سریع علائم سکته مغزی",
      description: "راهنمای کامل تشخیص علائم سکته مغزی و اقدامات فوری در منزل",
      image: strokeImage,
      link: "/articles/stroke-symptoms",
      category: "اورژانس پزشکی"
    },
    {
      id: 2,
      title: "علائم حمله قلبی و اقدامات فوری",
      description: "تشخیص زودهنگام علائم سکته قلبی و ارائه کمک‌های اولیه",
      image: heartAttackImage,
      link: "/articles/heart-attack-symptoms",
      category: "اورژانس پزشکی"
    },
    {
      id: 3,
      title: "درمان آنفولانزا در منزل",
      description: "راهکارهای درمانی و مراقبتی برای بهبود سریع آنفولانزا",
      image: influenzaImage,
      link: "/articles/influenza-treatment",
      category: "بیماری‌های عفونی"
    },
    {
      id: 4,
      title: "تاثیرات سیگار بر سلامت قلب",
      description: "بررسی آسیب‌های سیگار به سیستم قلبی عروقی و راه‌های ترک",
      image: smokingImage,
      link: "/articles/smoking-heart-effects",
      category: "پیشگیری"
    },
    {
      id: 5,
      title: "آزمایش چربی خون HDL/LDL",
      description: "راهنمای کامل آزمایش کلسترول و تفسیر نتایج",
      image: cholesterolTestImage,
      link: "/articles/cholesterol-test",
      category: "آزمایش‌ها"
    },
    {
      id: 6,
      title: "درمان فوری تنگی نفس در منزل",
      description: "اقدامات اورژانسی برای درمان تنگی نفس و مشکلات تنفسی",
      image: breathingTreatmentImage,
      link: "/articles/breathing-treatment",
      category: "اورژانس پزشکی"
    },
    {
      id: 7,
      title: "آمپول نوروبیون",
      description: "راهنمای کامل تزریق ویتامین‌های گروه B و فواید آن",
      image: neurobionImage,
      link: "/articles/neurobion-ampoule",
      category: "تزریقات"
    },
    {
      id: 8,
      title: "گرمازدگی: تشخیص و درمان",
      description: "شناسایی علائم گرمازدگی و ارائه درمان‌های فوری",
      image: heatExhaustionImage,
      link: "/articles/heat-exhaustion",
      category: "اورژانس پزشکی"
    },
    {
      id: 9,
      title: "تزریق واکسن گارداسیل بعد از ابتلا",
      description: "راهنمای واکسیناسیون HPV و فواید آن پس از ابتلا",
      image: gardasilImage,
      link: "/articles/gardasil-vaccine",
      category: "واکسیناسیون"
    },
    {
      id: 10,
      title: "تشخیص زگیل تناسلی",
      description: "راهنمای شناسایی علائم و روش‌های تشخیص زگیل تناسلی",
      image: medicalConsultationImage,
      link: "/articles/genital-warts",
      category: "بیماری‌های عفونی"
    },
    {
      id: 11,
      title: "انتقال HPV از استخر و مکان‌های عمومی",
      description: "بررسی راه‌های انتقال ویروس HPV و روش‌های پیشگیری",
      image: hpvPoolImage,
      link: "/articles/hpv-pool",
      category: "پیشگیری"
    },
    {
      id: 12,
      title: "لکه‌های سفید ناخن",
      description: "علل، تشخیص و درمان سفیدی ناخن و کمبود ویتامین",
      image: nailSpotsImage,
      link: "/articles/nail-spots",
      category: "پوست و مو"
    },
    {
      id: 13,
      title: "استفاده از هوش مصنوعی در تفسیر اکو و‌ نوار قلب",
      description: "نقش هوش مصنوعی در تحلیل نوار قلب و اکوکاردیوگرافی و محدودیت‌های آن",
      image: aiCardiologyImage,
      link: "/articles/ai-cardiology",
      category: "تکنولوژی پزشکی"
    },
    {
      id: 14,
      title: "تب در کودکان | علل، درمان خانگی و ویزیت پزشک در منزل",
      description: "راهنمای کامل مدیریت تب کودکان در خانه و زمان مراجعه به پزشک",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "کودکان"
    },
    {
      id: 15,
      title: "سردرد میگرنی | چیست، علائم و عوامل تحریک‌کننده",
      description: "راهنمای کامل تشخیص، علائم و درمان میگرن و روش‌های پیشگیری",
      image: migrainImage,
      link: "/articles/migraine",
      category: "مغز و اعصاب"
    }
  ];

  const categories = ["همه", "اورژانس پزشکی", "بیماری‌های عفونی", "پیشگیری", "آزمایش‌ها", "تزریقات", "واکسیناسیون", "پوست و مو", "تکنولوژی پزشکی", "کودکان", "مغز و اعصاب"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                مقالات پزشکی نوید زندگی
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                راهنمای جامع سلامت و درمان در منزل با بهترین متخصصان پزشکی
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.reverse().map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold leading-tight hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </CardDescription>
                    <Link 
                      to={article.link}
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      مطالعه مقاله
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                نیاز به مشاوره پزشکی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                متخصصان نوید زندگی آماده ارائه خدمات پزشکی در منزل شما هستند
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما
                </Link>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  مشاهده خدمات
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ArticlesPage;