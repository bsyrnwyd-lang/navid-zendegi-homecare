import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, FileText, UserCheck, Baby, Scan } from "lucide-react";
import nursingImage from "@/assets/iranian-nurse-home-care.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "ویزیت پزشک در منزل تهران",
      description: "ویزیت پزشک در منزل توسط پزشکان متخصص و عمومی نوید زندگی در محیط راحت منزل شما",
      features: ["ویزیت پزشک عمومی در منزل", "ویزیت پزشک متخصص در منزل", "مشاوره پزشکی آنلاین", "تجویز دارو و نسخه پیچی"]
    },
    {
      icon: Heart,
      title: "پرستاری در منزل تهران",
      description: "خدمات پرستاری در منزل تخصصی نوید زندگی با تجهیزات کامل پزشکی و پرستاران مجرب",
      features: ["مراقبت پرستاری در منزل", "پانسمان زخم در منزل", "فیزیوتراپی در منزل", "مراقبت‌های ویژه"]
    },
    {
      icon: UserCheck,
      title: "مراقبت از سالمندان در منزل",
      description: "خدمات مراقبت از سالمندان در منزل توسط نوید زندگی با تجربه ویژه در مراقبت از عزیزان سالمند",
      features: ["مراقبت شبانه‌روزی", "کنترل مصرف دارو", "همراهی در ویزیت پزشک", "گزارش‌دهی مستمر"]
    },
    {
      icon: Heart,
      title: "ویزیت پزشک قلب در منزل",
      description: "ویزیت متخصص قلب در منزل تهران توسط کاردیولوژیست‌های مجرب نوید زندگی",
      features: ["ویزیت کاردیولوژیست در منزل", "اکوکاردیوگرافی در منزل", "نوار قلب ECG در منزل", "مشاوره تخصصی قلب و عروق"]
    },
    {
      icon: Baby,
      title: "ویزیت متخصص زنان در منزل",
      description: "ویزیت دکتر زنان در منزل توسط متخصصان زنان و زایمان مجرب نوید زندگی",
      features: ["ویزیت زنان در منزل", "مشاوره بارداری", "کنترل‌های دوره‌ای", "مشاوره تخصصی زنان"]
    },
    {
      icon: Scan,
      title: "رادیولوژی و سونوگرافی در منزل",
      description: "خدمات رادیولوژی و سونوگرافی در منزل توسط تکنسین‌های مجرب نوید زندگی",
      features: ["سونوگرافی در منزل", "رادیولوژی پرتابل", "ارزیابی تصویری", "گزارش تخصصی"]
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
              alt="پرستاری در منزل - خدمات پرستاری حرفه‌ای"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">پرستاری در منزل نوید زندگی</h3>
              <p className="text-sm">مراقبت حرفه‌ای توسط پرستاران مجرب در سراسر تهران</p>
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