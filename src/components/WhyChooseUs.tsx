import { CheckCircle, Award, Clock, Users, Shield, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "تیم متخصص و مجرب",
      description: "پزشکان و پرستاران با سال‌ها تجربه و مدارک معتبر"
    },
    {
      icon: Shield,
      title: "تضمین کیفیت خدمات",
      description: "استفاده از بهترین تجهیزات و رعایت استانداردهای بین‌المللی"
    },
    {
      icon: Clock,
      title: "دسترسی سریع",
      description: "ارائه خدمات در کمترین زمان ممکن در تمام نقاط شهر"
    },
    {
      icon: Users,
      title: "مراقبت شخصی‌سازی شده",
      description: "توجه ویژه به نیازهای فردی هر بیمار و خانواده"
    },
    {
      icon: CheckCircle,
      title: "قیمت‌گذاری شفاف",
      description: "بدون هزینه‌های پنهان و با بهترین نرخ‌های بازار"
    },
    {
      icon: Star,
      title: "رضایت ۱۰۰٪ مشتریان",
      description: "اعتماد هزاران خانواده و نظرات مثبت مشتریان"
    }
  ];

  return (
    <section className="medical-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">چرا نوید زندگی؟</h2>
          <p className="section-subtitle">
            دلایل اعتماد هزاران خانواده به خدمات پزشکی نوید زندگی
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <reason.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              آماده خدمات‌رسانی در سراسر شهر
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              تیم پزشکی نوید زندگی آماده ارائه بهترین خدمات پزشکی در منزل شما است
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                پوشش ۲۴ ساعته
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full">
                تجهیزات پیشرفته
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                قیمت مناسب
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;