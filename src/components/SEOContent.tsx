const SEOContent = () => {
  return (
    <section className="medical-section bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-8">چرا ویزیت پزشک در منزل؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">پزشکی در منزل با کیفیت</h3>
              <p className="text-muted-foreground leading-relaxed">
                خدمات <strong>پزشکی در منزل</strong> نوید زندگی شامل <strong>ویزیت پزشک در منزل</strong> توسط 
                پزشکان مجرب و متخصص می‌باشد. <strong>پزشک در منزل</strong> شما حاضر می‌شود و بهترین 
                خدمات درمانی را ارائه می‌دهد.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">پرستاری در منزل حرفه‌ای</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>پرستاری در منزل</strong> با تیم پرستاران مجرب و <strong>تزریقات در منزل</strong> 
                با بالاترین استانداردهای بهداشتی انجام می‌شود. خدمات مراقبتی ۲۴ ساعته در اختیار شماست.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent">پزشک متخصص در منزل</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>پزشک متخصص در منزل</strong> شامل <strong>ویزیت پزشک قلب در منزل</strong> و 
                سایر تخصص‌های پزشکی. <strong>ویزیت در منزل</strong> بدون نیاز به مراجعه به مطب یا بیمارستان.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">خدمات زیبایی در منزل</h3>
              <p className="text-muted-foreground leading-relaxed">
                علاوه بر خدمات درمانی، <strong>خدمات زیبایی در منزل</strong> نیز ارائه می‌دهیم. 
                از تزریق بوتاکس و فیلر تا مراقبت‌های تخصصی پوست، همه در راحتی منزل شما.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">کلمات کلیدی خدمات ما</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "ویزیت پزشک در منزل",
                "پزشکی در منزل", 
                "پرستاری در منزل",
                "پزشک در منزل",
                "تزریقات در منزل",
                "پزشک متخصص در منزل",
                "ویزیت پزشک قلب در منزل",
                "خدمات زیبایی در منزل",
                "ویزیت در منزل"
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