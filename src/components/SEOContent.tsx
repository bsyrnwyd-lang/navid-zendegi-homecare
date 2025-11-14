import { Link } from "react-router-dom";

const SEOContent = () => {
  return (
    <section className="medical-section bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-8">چرا ویزیت پزشک در منزل تهران با نوید زندگی؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">پزشکی در منزل تهران با کیفیت برتر</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>نوید زندگی</strong> با ارائه خدمات <strong>پزشکی در منزل تهران</strong> شامل <strong>ویزیت پزشک در منزل</strong> توسط 
                پزشکان مجرب و متخصص، بهترین کیفیت درمان را در منزل شما فراهم می‌کند. <strong>پزشک در منزل تهران</strong> 
                با سرعت و دقت بالا خدمات درمانی ارائه می‌دهد.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">پرستاری در منزل تهران حرفه‌ای</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>پرستاری در منزل تهران</strong> توسط تیم پرستاران مجرب نوید زندگی و <strong>تزریقات در منزل</strong> 
                با بالاترین استانداردهای بهداشتی بین‌المللی انجام می‌شود. خدمات مراقبتی ۲۴ ساعته در تمام نقاط تهران و کرج ارائه می‌شود.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent">پزشک متخصص در منزل تهران</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>پزشک متخصص در منزل تهران</strong> نوید زندگی شامل <Link to="/cardiology" className="text-primary hover:underline font-semibold">ویزیت پزشک قلب در منزل</Link>، 
                <Link to="/services/internal" className="text-primary hover:underline font-semibold">ویزیت متخصص داخلی</Link>، <Link to="/services/neurology" className="text-primary hover:underline font-semibold">اعصاب</Link> و سایر تخصص‌های پزشکی. <strong>ویزیت در منزل تهران</strong> بدون نیاز به مراجعه به مطب یا بیمارستان.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">چرا ویزیت پزشک در منزل؟</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>ویزیت پزشک در منزل</strong> صرفه‌جویی در وقت، کاهش هزینه‌های جانبی، جلوگیری از انتشار عفونت و ارائه مراقبت شخصی‌تر را به همراه دارد. 
                پزشکان ما با تجربه و تجهیزات پیشرفته آماده خدمت‌رسانی در منزل شما هستند.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">خدمات تخصصی نوید زندگی در تهران</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/general-doctor" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                ویزیت پزشک در منزل تهران
              </Link>
              <Link to="/general-doctor" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                پزشکی در منزل تهران
              </Link>
              <Link to="/services/nursing" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                پرستاری در منزل تهران
              </Link>
              <Link to="/general-doctor" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                پزشک در منزل نوید زندگی
              </Link>
              <Link to="/services/nursing" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                تزریقات در منزل تهران
              </Link>
              <Link to="/services/specialist" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                پزشک متخصص در منزل تهران
              </Link>
              <Link to="/cardiology" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                ویزیت پزشک قلب در منزل
              </Link>
              <Link to="/general-doctor" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                ویزیت در منزل تهران و کرج
              </Link>
              <Link to="/services/specialist" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                درماتولوژی در منزل
              </Link>
              <Link to="/cardiology" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">
                کاردیولوژی در منزل
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;