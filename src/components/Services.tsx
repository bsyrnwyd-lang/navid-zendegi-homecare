import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Syringe, FileText, UserCheck, Sparkles } from "lucide-react";
import nursingImage from "@/assets/nurse-home-visit.jpg";
import injectionImage from "@/assets/injection-home.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "ویزیت پزشک در منزل",
      description: "ویزیت توسط پزشکان متخصص و عمومی در محیط راحت منزل شما",
      features: ["پزشک عمومی", "پزشک متخصص", "مشاوره پزشکی", "نسخه پیچی"]
    },
    {
      icon: Heart,
      title: "پرستاری در منزل",
      description: "خدمات پرستاری تخصصی با تجهیزات کامل پزشکی",
      features: ["مراقبت از بیمار", "تزریقات", "پانسمان زخم", "فیزیوتراپی"]
    },
    {
      icon: Syringe,
      title: "تزریقات در منزل و آزمایشات",
      description: "تزریقات در منزل و انجام آزمایشات پزشکی با نتایج دقیق",
      features: ["تزریقات در منزل", "نمونه‌گیری خون", "تست قند خون", "فشار خون"]
    },
    {
      icon: UserCheck,
      title: "مراقبت از سالمندان",
      description: "مراقبت ویژه و تخصصی از عزیزان سالمند شما",
      features: ["مراقبت روزانه", "کنترل دارو", "همراهی پزشک", "گزارش‌دهی"]
    },
    {
      icon: Heart,
      title: "ویزیت متخصص قلب در منزل",
      description: "ویزیت تخصصی قلب و عروق توسط پزشکان متخصص در منزل",
      features: ["ویزیت پزشک قلب", "اکوکاردیوگرافی", "نوار قلب ECG", "مشاوره تخصصی قلب"]
    },
    {
      icon: Sparkles,
      title: "خدمات زیبایی در منزل",
      description: "خدمات زیبایی و مراقبت پوست تخصصی در راحتی منزل",
      features: ["تزریق بوتاکس", "تزریق فیلر", "پلاسماتراپی", "مراقبت پوست"]
    }
  ];

  return (
    <section id="services" className="medical-section bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">ویزیت در منزل و پزشکی در منزل</h2>
          <p className="section-subtitle">
            پرستاری در منزل، تزریقات در منزل، پزشک متخصص در منزل و خدمات زیبایی در منزل
          </p>
        </div>
        
        {/* تصاویر واقعی خدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={nursingImage} 
              alt="پرستاری در منزل - خدمات پرستاری حرفه‌ای"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">پرستاری در منزل</h3>
              <p className="text-sm">مراقبت حرفه‌ای توسط پرستاران مجرب</p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={injectionImage} 
              alt="تزریقات در منزل - خدمات تزریق حرفه‌ای"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-secondary/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">تزریقات در منزل</h3>
              <p className="text-sm">تزریقات ایمن و استریل در محیط منزل</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="medical-card group hover:border-primary/20">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;