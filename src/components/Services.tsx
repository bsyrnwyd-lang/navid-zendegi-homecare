import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, FileText, UserCheck, Scan, Ear, Activity, Monitor, Baby } from "lucide-react";
import nursingImage from "@/assets/iranian-nurse-home-care-optimized.jpg";
import holterImage from "@/assets/holter-monitoring.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "ویزیت پزشک در منزل تهران",
      description: "ویزیت پزشک در منزل توسط پزشکان متخصص و عمومی نوید زندگی در محیط راحت منزل شما",
      features: ["ویزیت پزشک عمومی در منزل", "ویزیت پزشک متخصص در منزل", "مشاوره پزشکی آنلاین", "تجویز دارو و نسخه پیچی"],
      link: "/general-doctor"
    },
    {
      icon: Heart,
      title: "پرستاری در منزل تهران",
      description: "خدمات پرستاری در منزل تخصصی نوید زندگی با تجهیزات کامل پزشکی و پرستاران مجرب",
      features: ["مراقبت پرستاری در منزل", "پانسمان زخم در منزل", "فیزیوتراپی در منزل", "مراقبت‌های ویژه"],
      link: "/services/nursing"
    },
    {
      icon: UserCheck,
      title: "مراقبت از سالمندان در منزل",
      description: "خدمات مراقبت از سالمندان در منزل توسط نوید زندگی با تجربه ویژه در مراقبت از عزیزان سالمند",
      features: ["مراقبت شبانه‌روزی", "کنترل مصرف دارو", "همراهی در ویزیت پزشک", "گزارش‌دهی مستمر"],
      link: "/services/nursing"
    },
    {
      icon: Heart,
      title: "ویزیت پزشک قلب در منزل",
      description: "ویزیت متخصص قلب در منزل تهران توسط کاردیولوژیست‌های مجرب نوید زندگی",
      features: ["ویزیت کاردیولوژیست در منزل", "اکوکاردیوگرافی در منزل", "نوار قلب ECG در منزل", "مشاوره تخصصی قلب و عروق"],
      link: "/cardiology"
    },
    {
      icon: Activity,
      title: "اکو و نوار قلب در منزل",
      description: "انجام آزمایشات تخصصی قلب شامل اکوکاردیوگرافی و نوار قلب در منزل توسط تکنسین‌های مجرب",
      features: ["اکوکاردیوگرافی در منزل", "نوار قلب در منزل", "هولتر ۲۴ ساعته", "ارزیابی عملکرد قلب"],
      link: "/services/echo-ecg"
    },
    {
      icon: Ear,
      title: "ویزیت متخصص گوش حلق و بینی در منزل",
      description: "ویزیت متخصص گوش حلق و بینی در منزل توسط ENT متخصصان مجرب نوید زندگی",
      features: ["خدمات شستشو گوش در منزل", "درمان خونریزی بینی در منزل", "رویت اودیومتری در منزل", "معاینه تخصصی گوش و حلق"],
      link: "/services/ent"
    },
    {
      icon: Scan,
      title: "رادیولوژی و سونوگرافی در منزل",
      description: "خدمات رادیولوژی و سونوگرافی در منزل توسط تکنسین‌های مجرب نوید زندگی",
      features: ["سونوگرافی در منزل", "رادیولوژی پرتابل", "ارزیابی تصویری", "گزارش تخصصی"],
      link: "/services/radiology"
    },
    {
      icon: Monitor,
      title: "هولتر قلب و فشار خون در منزل",
      description: "خدمات هولتر ریتم قلب و هولتر فشار خون در منزل با دستگاه‌های مدرن و گزارش تخصصی",
      features: ["هولتر ریتم ۲۴-۴۸ ساعته در منزل", "هولتر فشار خون ۲۴ ساعته", "نصب و جمع‌آوری در منزل", "گزارش تخصصی کاردیولوژیست"],
      link: "/services/holter"
    },
    {
      icon: Baby,
      title: "ویزیت متخصص زنان در منزل",
      description: "خدمات تخصصی زنان شامل پاپ اسمیر، درمان HPV و زگیل تناسلی با پلاسما پن در منزل با حفظ حریم خصوصی",
      features: ["پاپ اسمیر در منزل", "درمان HPV و زگیل تناسلی", "پلاسما پن", "حفظ کامل حریم خصوصی"],
      link: "/services/gynecology"
    }
  ];

  return (
    <section id="services" className="medical-section bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">خدمات پزشکی در منزل نوید زندگی</h2>
          <p className="section-subtitle">
            ویزیت پزشک در منزل تهران، پرستاری در منزل، پزشک متخصص در منزل، رادیولوژی و سونوگرافی در منزل توسط تیم متخصص نوید زندگی
          </p>
        </div>
        
        {/* تصاویر واقعی خدمات */}
        <div className="grid grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={nursingImage} 
              alt="پرستاری در منزل تهران - خدمات پرستاری حرفه‌ای شامل تزریقات، پانسمان و مراقبت از بیمار در منزل"
              className="w-full h-64 object-cover"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">پرستاری در منزل تهران - نوید زندگی</h3>
              <p className="text-sm">مراقبت حرفه‌ای از بیمار، سالمندان و نوزادان توسط پرستاران مجرب در سراسر تهران و کرج</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const content = (
              <Card className="medical-card group hover:border-primary/20 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full ml-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
            
            return service.link ? (
              <Link key={index} to={service.link} className="block">
                {content}
              </Link>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;