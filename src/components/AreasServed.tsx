import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const AreasServed = () => {
  const areas = [
    "شمال تهران", "جنوب تهران", "شرق تهران", "غرب تهران", "مرکز تهران",
    "ولنجک", "نیاوران", "جردن", "الهیه", "زعفرانیه", "تجریش",
    "سعادت‌آباد", "شهرک غرب", "پونک", "ستارخان", "اکباتان",
    "پاسداران", "تهرانپارس", "نارمک", "رسالت",
    "یوسف‌آباد", "میرداماد", "ونک", "ولیعصر",
    "پیروزی", "جوادیه", "مولوی", "شوش",
    "کرج", "شهریار", "اسلامشهر", "ورامین"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              پوشش پزشک در منزل در سراسر تهران
            </h2>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            نوید زندگی خدمات <strong>پزشک در منزل</strong> را در تمام مناطق ۲۲ گانه تهران و حومه ارائه می‌دهد. 
            فقط کافیست با شماره <a href="tel:09386117912" className="text-primary font-semibold hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a> تماس بگیرید 
            تا پزشک عمومی یا متخصص در کمترین زمان به منزل شما اعزام شود.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {areas.map((area, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                پزشک در منزل {area}
              </span>
            ))}
          </div>

          <div className="mt-8 text-right space-y-4 text-muted-foreground leading-relaxed">
            <p>
              اگر در هر نقطه‌ای از تهران هستید و به <strong>پزشک در منزل</strong> نیاز دارید، 
              <Link to="/general-doctor" className="text-primary hover:underline font-semibold"> ویزیت پزشک عمومی در منزل</Link> یا 
              <Link to="/services/specialist" className="text-primary hover:underline font-semibold"> ویزیت متخصص در منزل</Link> نوید زندگی 
              بهترین انتخاب شماست. خدمات ما شامل 
              <Link to="/cardiology" className="text-primary hover:underline"> متخصص قلب در منزل</Link>، 
              <Link to="/services/internal" className="text-primary hover:underline"> متخصص داخلی در منزل</Link>، 
              <Link to="/services/neurology" className="text-primary hover:underline"> متخصص مغز و اعصاب در منزل</Link>، 
              <Link to="/services/nursing" className="text-primary hover:underline"> پرستاری در منزل</Link> و 
              <Link to="/services/echo-ecg" className="text-primary hover:underline"> اکو و نوار قلب در منزل</Link> می‌شود.
            </p>
            <p>
              همچنین خدمات <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، 
              <Link to="/services/radiology" className="text-primary hover:underline"> سونوگرافی در منزل</Link>، 
              <Link to="/services/physiotherapy" className="text-primary hover:underline"> فیزیوتراپی در منزل</Link> و 
              <Link to="/articles" className="text-primary hover:underline"> مقالات پزشکی</Link> را 
              از طریق وب‌سایت ما دنبال کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
