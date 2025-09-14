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
                <strong>پزشک متخصص در منزل تهران</strong> نوید زندگی شامل <strong>ویزیت پزشک قلب در منزل</strong>، 
                ویزیت متخصص داخلی، اعصاب و سایر تخصص‌های پزشکی. <strong>ویزیت در منزل تهران</strong> بدون نیاز به مراجعه به مطب یا بیمارستان.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">خدمات زیبایی در منزل تهران</h3>
              <p className="text-muted-foreground leading-relaxed">
                علاوه بر خدمات درمانی، <strong>نوید زندگی</strong> خدمات <strong>زیبایی در منزل تهران</strong> نیز ارائه می‌دهد. 
                از تزریق بوتاکس و فیلر تا مراقبت‌های تخصصی پوست و مو، همه در راحتی منزل شما توسط متخصصان مجرب.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">خدمات تخصصی نوید زندگی در تهران</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "ویزیت پزشک در منزل تهران",
                "پزشکی در منزل تهران", 
                "پرستاری در منزل تهران",
                "پزشک در منزل نوید زندگی",
                "تزریقات در منزل تهران",
                "پزشک متخصص در منزل تهران",
                "ویزیت پزشک قلب در منزل",
                "خدمات زیبایی در منزل تهران",
                "ویزیت در منزل تهران و کرج",
                "درماتولوژی در منزل",
                "کاردیولوژی در منزل"
              ].map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;