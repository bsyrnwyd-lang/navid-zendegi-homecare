import { Link } from "react-router-dom";

const SEOContent = () => {
  return (
    <section className="medical-section bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-8">چرا ویزیت متخصص قلب و پزشک در منزل با نوید زندگی؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">ویزیت متخصص قلب در منزل تهران</h3>
              <p className="text-muted-foreground leading-relaxed">
                <Link to="/cardiology" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب در منزل</Link> توسط کاردیولوژیست‌های مجرب نوید زندگی با تجهیزات پیشرفته. 
                <strong> اکوکاردیوگرافی در منزل</strong>، <strong>نوار قلب در منزل</strong> و مشاوره تخصصی قلب و عروق در محیط راحت منزل شما. 
                تماس: <a href="tel:09386117912" className="text-primary hover:underline font-semibold">09386117912</a>
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">هولتر در منزل تهران</h3>
              <p className="text-muted-foreground leading-relaxed">
                <Link to="/services/holter" className="text-primary hover:underline font-semibold">هولتر در منزل</Link> شامل <strong>هولتر ریتم قلب ۲۴-۴۸ ساعته</strong> و 
                <strong> هولتر فشار خون ۲۴ ساعته</strong> با دستگاه‌های مدرن. نصب و جمع‌آوری در منزل و گزارش تخصصی توسط متخصص قلب.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent">ویزیت متخصص در منزل تهران</h3>
              <p className="text-muted-foreground leading-relaxed">
                <Link to="/services/specialist" className="text-primary hover:underline font-semibold">ویزیت متخصص در منزل</Link> شامل 
                <Link to="/services/internal" className="text-primary hover:underline font-semibold"> متخصص داخلی</Link>، 
                <Link to="/services/neurology" className="text-primary hover:underline font-semibold"> متخصص اعصاب</Link>، 
                متخصص ارتوپدی، ریه و عفونی در منزل شما. بدون نیاز به مراجعه به مطب یا بیمارستان.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">ویزیت پزشک عمومی در منزل</h3>
              <p className="text-muted-foreground leading-relaxed">
                <Link to="/general-doctor" className="text-primary hover:underline font-semibold">ویزیت پزشک عمومی در منزل</Link> توسط پزشکان مجرب نوید زندگی. 
                تشخیص بیماری، تجویز دارو و ارجاع به متخصص در صورت نیاز. خدمات ۲۴ ساعته در سراسر تهران و کرج.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">خدمات تخصصی قلب و عروق نوید زندگی در تهران</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/cardiology" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors font-medium">
                ویزیت متخصص قلب در منزل
              </Link>
              <Link to="/services/holter" className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors font-medium">
                هولتر در منزل
              </Link>
              <Link to="/services/holter" className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors font-medium">
                هولتر ریتم قلب در منزل
              </Link>
              <Link to="/services/holter" className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors font-medium">
                هولتر فشار خون در منزل
              </Link>
              <Link to="/services/echo-ecg" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors font-medium">
                اکو قلب در منزل
              </Link>
              <Link to="/services/echo-ecg" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors font-medium">
                نوار قلب در منزل
              </Link>
              <Link to="/general-doctor" className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors font-medium">
                پزشک عمومی در منزل
              </Link>
              <Link to="/services/specialist" className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors font-medium">
                ویزیت متخصص در منزل
              </Link>
              <Link to="/services/internal" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                متخصص داخلی در منزل
              </Link>
              <Link to="/services/nursing" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                پرستاری در منزل تهران
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;