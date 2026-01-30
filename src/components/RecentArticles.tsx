import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";
import { useMemo } from "react";
import { extraArticles } from "@/content/articles-extra";

// Import images for latest articles
import cardiacRehabHomeImage from "@/assets/cardiac-rehab-home.jpg";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";
import diabetesHeartImage from "@/assets/diabetes-heart-connection.jpg";
import heartValveDiseaseImage from "@/assets/heart-valve-disease.jpg";
import echoSafetyHomeImage from "@/assets/echo-safety-home.jpg";
import postprandialHypotensionImage from "@/assets/postprandial-hypotension.jpg";
import pulmonaryEdemaImage from "@/assets/pulmonary-edema.jpg";
import preoperativeCardiacImage from "@/assets/preoperative-cardiac-evaluation.jpg";
import resistantHypertensionImage from "@/assets/resistant-hypertension.jpg";
import postCCUCareImage from "@/assets/post-ccu-care-home.jpg";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";

// مقالات اصلی با ID بالا - به‌روزترین مقالات
const mainArticles = [
  {
    id: 1092,
    title: "بازتوانی قلبی در منزل؛ چطور بعد از سکته یا جراحی به زندگی عادی برگردیم؟",
    description: "راهنمای کامل بازتوانی قلبی: شروع تدریجی ورزش، نقش اکو و نوار قلب در تعیین ظرفیت قلب",
    image: cardiacRehabHomeImage,
    link: "/articles/cardiac-rehab-home",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1091,
    title: "راهنمای کنترل فشار خون با دستگاه‌های خانگی؛ چرا اعداد گاهی اشتباه هستند؟",
    description: "آموزش روش صحیح استفاده از فشارسنج دیجیتال و کالیبره کردن دستگاه توسط متخصص",
    image: bloodPressureReadingsImage,
    link: "/articles/blood-pressure-readings",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1090,
    title: "دیابت و قلب؛ چرا بیماران دیابتی باید بیش از دیگران مراقب قلب خود باشند؟",
    description: "سکته قلبی خاموش در دیابت، تصلب شرایین و چک‌آپ قلبی با اکو و نوار قلب در منزل",
    image: diabetesHeartImage,
    link: "/articles/diabetes-heart",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1089,
    title: "بیماری‌های دریچه‌ای قلب؛ از تشخیص تا مراقبت‌های تخصصی در منزل",
    description: "تنگی و نارسایی دریچه، علائم هشداردهنده و تشخیص با اکو در منزل",
    image: heartValveDiseaseImage,
    link: "/articles/heart-valve-disease",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1088,
    title: "دقت اکو و نوار قلب در منزل با بیمارستان برابر است؟",
    description: "مقایسه فنی تجهیزات پورتابل با دستگاه‌های ثابت بیمارستانی و استانداردهای FDA",
    image: echoSafetyHomeImage,
    link: "/articles/portable-device-accuracy",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1087,
    title: "افت فشار خون بعد از غذا؛ پدیده‌ای شایع در سالمندان",
    description: "علائم، علل و تشخیص افت فشار خون پس از غذا در منزل",
    image: postprandialHypotensionImage,
    link: "/articles/postprandial-hypotension",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1086,
    title: "آب آوردن ریه (ادم ریوی)؛ وقتی تنگی نفس اورژانسی می‌شود",
    description: "علائم هشداردهنده ادم ریوی، علل قلبی و تشخیص با اکو در منزل",
    image: pulmonaryEdemaImage,
    link: "/articles/pulmonary-edema",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1085,
    title: "تاییدیه قلب قبل از جراحی؛ چرا و چگونه؟",
    description: "ارزیابی قلبی قبل از جراحی: نوار قلب، اکو و صدور گواهی تاییدیه در منزل",
    image: preoperativeCardiacImage,
    link: "/articles/preoperative-cardiac-evaluation",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1084,
    title: "فشار خون مقاوم به درمان؛ وقتی داروها کار نمی‌کنند",
    description: "علل فشار خون مقاوم، بررسی‌های تشخیصی و خدمات ویزیت متخصص در منزل",
    image: resistantHypertensionImage,
    link: "/articles/resistant-hypertension",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1083,
    title: "مراقبت‌های تخصصی پس از ترخیص از CCU در منزل",
    description: "خدمات ویزیت، اکو، نوار قلب و هولتر در منزل برای بیماران پس از ترخیص",
    image: postCCUCareImage,
    link: "/articles/post-ccu-care",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1082,
    title: "سکته قلبی خاموش؛ وقتی قلب بی‌صدا آسیب می‌بیند",
    description: "علائم سکته قلبی بدون درد و اهمیت چک‌آپ دوره‌ای با اکو و نوار قلب",
    image: silentHeartAttackImage,
    link: "/articles/silent-heart-attack",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  }
];

const RecentArticles = () => {
  // ترکیب و مرتب‌سازی خودکار مقالات بر اساس ID (جدیدترین بالاتر)
  const sortedArticles = useMemo(() => {
    const allArticles = [...mainArticles, ...extraArticles];
    
    // حذف تکراری‌ها بر اساس لینک
    const uniqueMap = new Map<string, typeof allArticles[0]>();
    allArticles.forEach((article) => {
      // فقط مقاله با ID بالاتر را نگه دار
      const existing = uniqueMap.get(article.link);
      if (!existing || (article.id || 0) > (existing.id || 0)) {
        uniqueMap.set(article.link, article);
      }
    });
    
    // مرتب‌سازی بر اساس ID نزولی و انتخاب 6 مقاله اول
    return Array.from(uniqueMap.values())
      .sort((a, b) => (b.id || 0) - (a.id || 0))
      .slice(0, 6);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            جدیدترین مقالات پزشکی
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            آخرین مطالب آموزشی و علمی در حوزه سلامت و پزشکی توسط تیم تخصصی نوید زندگی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <Link to={article.link} className="block">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </Link>
              <CardHeader className="flex-none">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  {article.date && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  )}
                </div>
                <Link to={article.link}>
                  <CardTitle className="text-base font-bold leading-tight hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {article.description}
                </CardDescription>
                <Link 
                  to={article.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                >
                  مطالعه مقاله
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/articles"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            مشاهده همه مقالات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
