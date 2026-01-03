export interface SearchItem {
  type: 'service' | 'article' | 'page';
  title: string;
  url: string;
  description?: string;
  keywords: string[];
}

export const servicesData: SearchItem[] = [
  {
    type: 'service',
    title: 'ویزیت پزشک عمومی در منزل',
    url: '/general-doctor',
    description: 'ویزیت دکتر عمومی در منزل تهران با کیفیت بالا و قیمت مناسب',
    keywords: ['دکتر', 'پزشک', 'عمومی', 'منزل', 'ویزیت', 'تهران', 'دوکتور', 'پزشگ', 'عموم']
  },
  {
    type: 'service',
    title: 'ویزیت پزشک متخصص در منزل',
    url: '/services/specialist',
    description: 'ویزیت پزشک متخصص در منزل برای بیماران',
    keywords: ['متخصص', 'پزشک', 'دکتر', 'منزل', 'ویزیت', 'متخصص', 'متخصص']
  },
  {
    type: 'service',
    title: 'ویزیت پزشک قلب در منزل',
    url: '/cardiology',
    description: 'خدمات کاردیولوژی و ویزیت پزشک قلب در منزل',
    keywords: ['قلب', 'کاردیولوژی', 'پزشک قلب', 'متخصص قلب', 'منزل', 'فشار', 'فشارخون', 'قلبی', 'کاردیولوژ']
  },
  {
    type: 'service',
    title: 'ویزیت متخصص داخلی در منزل',
    url: '/services/internal',
    description: 'ویزیت متخصص داخلی در منزل برای بیماری‌های داخلی',
    keywords: ['داخلی', 'متخصص', 'پزشک', 'منزل', 'اینترنال', 'داخله']
  },
  {
    type: 'service',
    title: 'ویزیت متخصص مغز و اعصاب در منزل',
    url: '/services/neurology',
    description: 'ویزیت نورولوژیست در منزل',
    keywords: ['مغز', 'اعصاب', 'نورولوژی', 'سردرد', 'میگرن', 'منزل', 'اعصاب', 'مقز', 'نورولوژ']
  },
  {
    type: 'service',
    title: 'ویزیت متخصص اورولوژی',
    url: '/services/urology',
    description: 'ویزیت متخصص کلیه و مجاری ادراری در منزل',
    keywords: ['اورولوژی', 'کلیه', 'ادراری', 'پروستات', 'منزل', 'اورولوژ']
  },
  {
    type: 'service',
    title: 'ویزیت متخصص گوش، حلق و بینی در منزل',
    url: '/services/ent',
    description: 'ویزیت متخصص ENT در منزل',
    keywords: ['گوش', 'حلق', 'بینی', 'ENT', 'منزل', 'حلوق', 'گوش و حلق', 'حلوق']
  },
  {
    type: 'service',
    title: 'ویزیت متخصص عفونی در منزل',
    url: '/services/infectious',
    description: 'ویزیت متخصص بیماری‌های عفونی در منزل',
    keywords: ['عفونی', 'تب', 'عفونت', 'منزل', 'ویروس', 'باکتری', 'عفون']
  },
  {
    type: 'service',
    title: 'ویزیت متخصص زنان در منزل',
    url: '/services/gynecology',
    description: 'ویزیت متخصص زنان و زایمان در منزل',
    keywords: ['زنان', 'بارداری', 'زایمان', 'منزل', 'گاینکولوژی', 'زنون', 'بارداری']
  },
  {
    type: 'service',
    title: 'ویزیت روانپزشک در منزل',
    url: '/services/psychiatry',
    description: 'ویزیت روانپزشک و مشاوره روانشناسی در منزل',
    keywords: ['روانپزشک', 'روانشناس', 'افسردگی', 'اضطراب', 'منزل', 'روانپزشگ', 'روان']
  },
  {
    type: 'service',
    title: 'ویزیت آنلاین پزشک',
    url: '/services/online-doctor',
    description: 'مشاوره پزشکی آنلاین و تله مدیسین',
    keywords: ['آنلاین', 'تله مدیسین', 'مشاوره', 'اینترنتی', 'انلاین', 'اونلاین']
  },
  {
    type: 'service',
    title: 'خدمات پرستاری در منزل',
    url: '/services/nursing',
    description: 'پرستار در منزل و مراقبت پرستاری',
    keywords: ['پرستار', 'پرستاری', 'منزل', 'تزریق', 'سرم', 'پرستار', 'پرستاری']
  },
  {
    type: 'service',
    title: 'اکو و نوار قلب در منزل',
    url: '/services/echo-ecg',
    description: 'انجام اکوکاردیوگرافی و الکتروکاردیوگرام در منزل',
    keywords: ['اکو', 'نوار قلب', 'ECG', 'منزل', 'قلب', 'اکوکاردیوگرافی', 'نوار', 'اکوو']
  },
  {
    type: 'service',
    title: 'فیزیوتراپی در منزل',
    url: '/services/physiotherapy',
    description: 'خدمات فیزیوتراپی و توانبخشی در منزل',
    keywords: ['فیزیوتراپی', 'توانبخشی', 'درمان فیزیکی', 'منزل', 'فیزیوتراپ', 'فیزیو']
  },
  {
    type: 'service',
    title: 'رادیولوژی و سونوگرافی در منزل',
    url: '/services/radiology',
    description: 'انجام سونوگرافی و رادیولوژی در منزل',
    keywords: ['رادیولوژی', 'سونوگرافی', 'سونو', 'عکس', 'منزل', 'رادیولوژ', 'سونو']
  },
  {
    type: 'service',
    title: 'هولتر قلب و فشار خون در منزل',
    url: '/services/holter',
    description: 'نصب و ارزیابی هولتر قلب و فشار خون در منزل',
    keywords: ['هولتر', 'فشار', 'قلب', 'منزل', 'مانیتورینگ', 'هولتر']
  },
  {
    type: 'service',
    title: 'خدمات آزمایشگاه در منزل',
    url: '/services/laboratory',
    description: 'نمونه‌گیری و آزمایش خون در منزل',
    keywords: ['آزمایش', 'خون', 'نمونه', 'منزل', 'لابراتوار', 'ازمایش', 'ازمایشگاه']
  }
];

export const articlesData: SearchItem[] = [
  {
    type: 'article',
    title: 'نحوه صحیح اندازه‌گیری فشار خون',
    url: '/articles/blood-pressure-measurement',
    description: 'راهنمای کامل اندازه‌گیری دقیق فشار خون: آمادگی بیمار، وضعیت صحیح بدن، تکنیک استفاده از دستگاه و ثبت نتایج به مدت ۱۰ روز',
    keywords: ['اندازه‌گیری فشار خون', 'فشارسنج', 'Blood Pressure Measurement', 'دستگاه فشارسنج دیجیتال', 'نحوه گرفتن فشار', 'ثبت فشار خون', 'پایش فشار خون', 'کاف فشارسنج', 'فشار سیستولیک', 'فشار دیاستولیک', 'کالیبراسیون فشارسنج', 'زمان‌بندی ۱۰ روزه', 'متخصص قلب در منزل', 'هولتر فشار خون', 'مانیتورینگ فشار', 'پروتکل اندازه‌گیری', 'استراحت قبل اندازه‌گیری', 'وضعیت بدن', 'ویزیت قلب و عروق']
  },
  {
    type: 'article',
    title: 'مکمل‌های ضروری دوران بارداری',
    url: '/articles/pregnancy-supplements',
    description: 'راهنمای جامع مکمل‌های حیاتی دوران بارداری: فولیک اسید، آهن، ویتامین D و سایر مکمل‌ها، زمان‌بندی مصرف و هشدارهای مهم',
    keywords: ['مکمل بارداری', 'فولیک اسید', 'آهن بارداری', 'ویتامین D بارداری', 'کم‌خونی بارداری', 'نقص لوله عصبی', 'مکمل مولتی ویتامین', 'ید بارداری', 'کلسیم بارداری', 'امگا-3 بارداری', 'DHA', 'مشاوره تغذیه بارداری', 'آزمایش خون در منزل', 'متخصص زنان', 'Neural Tube Defects', 'NTDs', 'Anemia', 'پره‌اکلامپسی', 'سه ماهه بارداری', 'ویتامین A', 'تداخل مکمل']
  },
  {
    type: 'article',
    title: 'مواد مخدر و سکته قلبی: مکانیسم‌های آسیب‌رسان',
    url: '/articles/drug-cardiovascular-effects',
    description: 'تأثیرات مخرب مواد مخدر بر قلب و عروق: افزایش خطر سکته قلبی و مغزی، اسپاسم کرونر، فشار خون و اهمیت ترک اعتیاد',
    keywords: ['مواد مخدر و قلب', 'سکته قلبی', 'سکته مغزی', 'کوکائین و قلب', 'مت‌آمفتامین', 'شیشه', 'فشار خون', 'اسپاسم کرونر', 'ترک اعتیاد', 'کاردیومیوپاتی', 'آریتمی', 'MI', 'Stroke', 'اعتیاد', 'مواد محرک']
  },
  {
    type: 'article',
    title: 'میزان نیاز روزانه ویتامین‌ها (RDA)',
    url: '/articles/vitamins-health',
    description: 'راهنمای جامع مقادیر توصیه شده روزانه (RDA) ویتامین‌ها، هشدارهای مسمومیت با ویتامین (هایپرویتامینوزیس)، تداخلات دارویی و ضرورت مشاوره پزشکی قبل از مصرف مکمل',
    keywords: ['RDA', 'مقدار مجاز ویتامین', 'هایپرویتامینوزیس', 'مسمومیت ویتامین', 'ویتامین محلول در چربی', 'ویتامین محلول در آب', 'تداخل ویتامین با دارو', 'مکمل ویتامین', 'آزمایش کمبود ویتامین', 'مشاوره تغذیه آنلاین', 'ویتامین A', 'ویتامین D', 'ویتامین K', 'ویتامین E', 'ویتامین C', 'ویتامین B', 'فولات', 'B12', 'وارفارین', 'هایپرکلسمی']
  },
  {
    type: 'article',
    title: 'ویتامین‌ها و سرماخوردگی: نقش علمی ویتامین C و زینک',
    url: '/articles/vitamins-cold',
    description: 'راهنمای جامع ویتامین‌ها در روزهای اول سرماخوردگی: دوز صحیح ویتامین C و زینک، زمان مصرف، تداخلات دارویی و هشدارهای ایمنی',
    keywords: ['ویتامین C سرماخوردگی', 'زینک سرماخوردگی', 'مکمل سرماخوردگی', 'درمان سرماخوردگی', 'ویتامین D', 'تقویت ایمنی', 'Common Cold', 'راینوویروس', 'Zinc Lozenges', 'اسید اسکوربیک', 'مکمل', 'سیستم ایمنی', 'آنفولانزا']
  },
  {
    type: 'article',
    title: 'روغن گل مغربی: خواص GLA و مدیریت PMS',
    url: '/articles/evening-primrose-oil',
    description: 'راهنمای جامع روغن گل مغربی: نقش اسید گاما-لینولنیک، مدیریت سندرم پیش از قاعدگی، علائم یائسگی، درمان اگزما و تداخلات دارویی',
    keywords: ['روغن گل مغربی', 'Evening Primrose Oil', 'EPO', 'GLA', 'اسید گاما-لینولنیک', 'PMS', 'سندرم پیش از قاعدگی', 'یائسگی', 'اگزما', 'مکمل گیاهی', 'تداخل دارویی', 'سلامت زنان', 'گل مغربی']
  },
  {
    type: 'article',
    title: 'مدیریت اضطراب پزشکی: حفظ خونسردی در مطب پزشک',
    url: '/articles/medical-anxiety',
    description: 'روش‌های علمی مدیریت اضطراب و ترس از مراجعه به پزشک: تکنیک‌های تنفس دیافراگمی، حواس‌پرتی و ارتباط مؤثر با تیم درمانی',
    keywords: ['اضطراب پزشکی', 'ترس از پزشک', 'ترس از دندانپزشک', 'White Coat Syndrome', 'فوبیای پزشکی', 'تنفس دیافراگمی', 'مدیریت اضطراب', 'روانپزشک', 'آرامش', 'فوبیا', 'سفیدپوشی']
  },
  {
    type: 'article',
    title: 'درد فتق: انواع، علائم خطر و درمان جراحی',
    url: '/articles/hernia-pain',
    description: 'راهنمای جامع درد فتق شامل انواع فتق اینگوینال، نافی و شکاف مری، علائم خطرناک فتق خفه شده و ویزیت متخصص جراحی',
    keywords: ['فتق', 'درد فتق', 'Hernia', 'فتق اینگوینال', 'فتق کشاله ران', 'فتق خفه شده', 'درد شکم', 'جراحی فتق', 'فتق نافی', 'ویزیت جراح']
  },
  {
    type: 'article',
    title: 'جینسینگ: خواص آداپتوژنیک و ملاحظات مصرف',
    url: '/articles/ginseng',
    description: 'راهنمای جامع جینسینگ: انواع آسیایی و آمریکایی، خواص برای انرژی و تمرکز، عوارض جانبی و تداخلات دارویی خطرناک',
    keywords: ['جینسینگ', 'Ginseng', 'آداپتوژن', 'مکمل گیاهی', 'جینسنوزید', 'خواص جینسینگ', 'عوارض جینسینگ', 'تداخل دارویی', 'جینسینگ آسیایی', 'جینسینگ آمریکایی', 'مکمل', 'گیاه دارویی']
  },
  {
    type: 'article',
    title: 'آپاندیسیت: علائم، تشخیص فوری و درمان جراحی',
    url: '/articles/appendicitis',
    description: 'راهنمای کامل آپاندیسیت شامل علائم کلاسیک، مراحل پیشرفت درد، خطرات پارگی و فوریت مراجعه به اورژانس',
    keywords: ['آپاندیسیت', 'درد آپاندیس', 'علائم آپاندیسیت', 'پارگی آپاندیس', 'جراحی آپاندیس', 'آپاندکتومی', 'اورژانس', 'درد شکم', 'التهاب آپاندیس']
  },
  {
    type: 'article',
    title: 'کمر درد: علل، تشخیص و درمان با فیزیوتراپی در منزل',
    url: '/articles/low-back-pain',
    description: 'راهنمای جامع کمر درد شامل علل، انواع (حاد و مزمن)، فتق دیسک، درمان با فیزیوتراپی و ویزیت متخصص ارتوپدی در منزل',
    keywords: ['کمر درد', 'فتق دیسک', 'فیزیوتراپی', 'کمردرد', 'درمان کمر', 'ارتوپدی', 'سیاتیک', 'مغز و اعصاب', 'دیسک کمر', 'کمر', 'لومبار']
  },
  {
    type: 'article',
    title: 'اثرات تریاک بر روی قلب',
    url: '/articles/opium-heart-effects',
    description: 'مرور علمی اثرات مخرب تریاک و اوپیوم بر سیستم قلبی-عروقی',
    keywords: ['تریاک', 'قلب', 'اوپیوم', 'سکته قلبی', 'آریتمی', 'آترواسکلروز', 'تریاک و قلب', 'مواد مخدر']
  },
  {
    type: 'article',
    title: 'سیتالوپرام: مدیریت تخصصی افسردگی و اختلالات اضطراب',
    url: '/articles/citalopram',
    description: 'راهنمای جامع سیتالوپرام و درمان افسردگی',
    keywords: ['سیتالوپرام', 'افسردگی', 'اضطراب', 'SSRI', 'دارو', 'سیتالوپرام']
  },
  {
    type: 'article',
    title: 'ذات‌الریه آسپیراسیونی',
    url: '/articles/aspiration-pneumonia',
    description: 'علل، تشخیص و درمان ذات‌الریه آسپیراسیونی',
    keywords: ['ذات‌الریه', 'آسپیراسیون', 'ریه', 'تنفس', 'پنومونی']
  },
  {
    type: 'article',
    title: 'تغذیه در بارداری',
    url: '/articles/pregnancy-nutrition',
    description: 'اصول تغذیه صحیح در دوران بارداری',
    keywords: ['بارداری', 'تغذیه', 'مادر', 'جنین', 'بارداری']
  },
  {
    type: 'article',
    title: 'سرگیجه: علل، تشخیص و درمان',
    url: '/articles/dizziness',
    description: 'راهنمای کامل سرگیجه و ورتیگو',
    keywords: ['سرگیجه', 'ورتیگو', 'تعادل', 'گیجی', 'سرگیجه', 'سرگیچه']
  },
  {
    type: 'article',
    title: 'ویتامین E: نقش و کاربردها',
    url: '/articles/vitamin-e',
    description: 'اطلاعات کامل درباره ویتامین E',
    keywords: ['ویتامین', 'ویتامین E', 'مکمل', 'تغذیه', 'ویتامین']
  },
  {
    type: 'article',
    title: 'فشار خون نرمال چیست؟',
    url: '/articles/normal-blood-pressure',
    description: 'راهنمای اعداد ایدئال فشار خون',
    keywords: ['فشار خون', 'نرمال', 'سالم', 'قلب', 'فشارخون']
  },
  {
    type: 'article',
    title: 'رژیم DASH برای کنترل فشار خون',
    url: '/articles/dash-diet',
    description: 'رژیم غذایی DASH و تاثیر آن بر فشار خون',
    keywords: ['رژیم', 'DASH', 'فشار', 'تغذیه', 'قلب', 'رژیم']
  },
  {
    type: 'article',
    title: 'یوگا و سلامت قلب',
    url: '/articles/yoga-heart-health',
    description: 'تاثیر یوگا بر سلامت قلب و عروق',
    keywords: ['یوگا', 'قلب', 'ورزش', 'سلامت', 'یوگا']
  },
  {
    type: 'article',
    title: 'کلوپیدوگرل: ضد انعقاد خون',
    url: '/articles/clopidogrel',
    description: 'راهنمای مصرف داروی کلوپیدوگرل',
    keywords: ['کلوپیدوگرل', 'دارو', 'قلب', 'خون', 'پلاویکس', 'کلوپیدوگرل']
  },
  {
    type: 'article',
    title: 'آنژیوگرافی قلب: مراحل انجام و مراقبت',
    url: '/articles/angiography',
    description: 'راهنمای کامل آنژیوگرافی کرونر: مراحل، مدیریت درد و مراقبت‌های پس از عمل',
    keywords: ['آنژیوگرافی', 'قلب', 'کاتتریزاسیون', 'استنت', 'کرونر', 'انژیوگرافی', 'رگ', 'عروق']
  },
  {
    type: 'article',
    title: 'بیهوشی در آنژیوگرافی: آرام‌بخشی یا بیهوشی کامل؟',
    url: '/articles/angiography-sedation',
    description: 'بررسی کامل نوع بیهوشی و آرام‌بخشی در آنژیوگرافی قلب و مدیریت درد',
    keywords: ['بیهوشی', 'آرام‌بخشی', 'آنژیوگرافی', 'قلب', 'درد', 'بیحسی', 'کاتتریزاسیون']
  },
  {
    type: 'article',
    title: 'پیشگیری از آنفولانزا',
    url: '/articles/influenza-prevention',
    description: 'روش‌های پیشگیری از سرماخوردگی و آنفولانزا',
    keywords: ['آنفولانزا', 'سرماخوردگی', 'پیشگیری', 'واکسن', 'انفلوانزا']
  },
  {
    type: 'article',
    title: 'واریس پا: علل و درمان',
    url: '/articles/varicose-veins',
    description: 'راهنمای کامل درمان واریس',
    keywords: ['واریس', 'پا', 'ورید', 'عروق', 'واریس']
  },
  {
    type: 'article',
    title: 'آرتروز: علل و درمان',
    url: '/articles/osteoarthritis',
    description: 'اطلاعات جامع درباره آرتروز مفاصل',
    keywords: ['آرتروز', 'مفصل', 'استخوان', 'درد', 'ارتروز']
  },
  {
    type: 'article',
    title: 'بیسوپرولول: داروی فشار خون',
    url: '/articles/bisoprolol',
    description: 'راهنمای مصرف بیسوپرولول',
    keywords: ['بیسوپرولول', 'فشار', 'قلب', 'دارو', 'بیسوپرولول']
  },
  {
    type: 'article',
    title: 'رزوواستاتین: کاهش کلسترول',
    url: '/articles/rosuvastatin',
    description: 'اطلاعات کامل درباره رزوواستاتین',
    keywords: ['رزوواستاتین', 'کلسترول', 'دارو', 'قلب', 'رزوواستاتین']
  },
  {
    type: 'article',
    title: 'آسپرین: کاربردها و عوارض',
    url: '/articles/aspirin',
    description: 'راهنمای مصرف آسپرین',
    keywords: ['آسپرین', 'دارو', 'قلب', 'خون', 'اسپرین']
  },
  {
    type: 'article',
    title: 'آسم: علل و درمان',
    url: '/articles/asthma',
    description: 'راهنمای کامل آسم برونش',
    keywords: ['آسم', 'تنفس', 'ریه', 'برونش', 'اسم']
  },
  {
    type: 'article',
    title: 'نوار قلب در منزل',
    url: '/articles/ecg-home',
    description: 'انجام ECG در منزل',
    keywords: ['نوار قلب', 'ECG', 'منزل', 'قلب', 'ای سی جی']
  },
  {
    type: 'article',
    title: 'دگزامتازون: موارد مصرف',
    url: '/articles/dexamethasone',
    description: 'راهنمای تزریق دگزامتازون',
    keywords: ['دگزامتازون', 'کورتون', 'التهاب', 'دارو', 'دگزامتازون']
  },
  {
    type: 'article',
    title: 'فیبریلاسیون دهلیزی و سکته',
    url: '/articles/af-stroke-risk',
    description: 'ارتباط AF با خطر سکته مغزی',
    keywords: ['فیبریلاسیون', 'سکته', 'قلب', 'آریتمی', 'فیبریلاسیون']
  },
  {
    type: 'article',
    title: 'موارد انجام اکوکاردیوگرافی',
    url: '/articles/echo-indications',
    description: 'چه زمانی اکو قلب نیاز است',
    keywords: ['اکو', 'قلب', 'اکوکاردیوگرافی', 'تشخیص', 'اکوو']
  },
  {
    type: 'article',
    title: 'تب در بزرگسالان',
    url: '/articles/adult-fever',
    description: 'علل و درمان تب در بزرگسالان',
    keywords: ['تب', 'تب', 'بزرگسال', 'علائم', 'تب']
  },
  {
    type: 'article',
    title: 'اکو قلب در منزل',
    url: '/articles/echo-home',
    description: 'انجام اکوکاردیوگرافی در منزل',
    keywords: ['اکو', 'منزل', 'قلب', 'تشخیص', 'اکوو']
  },
  {
    type: 'article',
    title: 'حجامت در منزل',
    url: '/articles/cupping-therapy',
    description: 'خدمات حجامت در منزل',
    keywords: ['حجامت', 'درمان', 'منزل', 'سنتی', 'حجامت']
  },
  {
    type: 'article',
    title: 'مراقبت از سالمندان',
    url: '/articles/elderly-care-guide',
    description: 'راهنمای مراقبت از سالمندان در منزل',
    keywords: ['سالمند', 'مراقبت', 'منزل', 'پرستاری', 'سالمند']
  },
  {
    type: 'article',
    title: 'بوتولیسم: هشدارها',
    url: '/articles/botulism',
    description: 'علائم و خطرات بوتولیسم',
    keywords: ['بوتولیسم', 'مسمومیت', 'غذایی', 'خطرناک', 'بوتولیسم']
  },
  {
    type: 'article',
    title: 'خطرات کوکائین',
    url: '/articles/cocaine-dangers',
    description: 'عوارض مصرف کوکائین',
    keywords: ['کوکائین', 'اعتیاد', 'خطر', 'مواد', 'کوکایین']
  },
  {
    type: 'article',
    title: 'رژیم مدیترانه‌ای',
    url: '/articles/mediterranean-diet',
    description: 'فواید رژیم مدیترانه‌ای',
    keywords: ['رژیم', 'مدیترانه', 'سلامت', 'قلب', 'رژیم']
  },
  {
    type: 'article',
    title: 'آتورواستاتین: کاهش کلسترول',
    url: '/articles/atorvastatin',
    description: 'راهنمای مصرف آتورواستاتین',
    keywords: ['آتورواستاتین', 'کلسترول', 'دارو', 'قلب', 'اتورواستاتین']
  },
  {
    type: 'article',
    title: 'کنترل فشار خون بالا',
    url: '/articles/high-blood-pressure',
    description: 'روش‌های کنترل فشار خون',
    keywords: ['فشار', 'فشار خون', 'کنترل', 'درمان', 'فشارخون']
  },
  {
    type: 'article',
    title: 'وارفارین: ضد انعقاد',
    url: '/articles/warfarin',
    description: 'نکات مصرف وارفارین',
    keywords: ['وارفارین', 'خون', 'دارو', 'انعقاد', 'وارفارین']
  },
  {
    type: 'article',
    title: 'تپش قلب',
    url: '/articles/heart-palpitations',
    description: 'علل و درمان تپش قلب',
    keywords: ['تپش', 'قلب', 'آریتمی', 'ضربان', 'تپش قلب']
  },
  {
    type: 'article',
    title: 'بلند کردن وزنه بعد از آنژیوگرافی',
    url: '/articles/post-angiography-lifting',
    description: 'محدودیت‌های پس از آنژیو',
    keywords: ['آنژیوگرافی', 'وزنه', 'ورزش', 'قلب', 'انژیوگرافی']
  },
  {
    type: 'article',
    title: 'داروهای بعد از آنژیوگرافی',
    url: '/articles/post-angiography-medications',
    description: 'داروهای ضروری پس از آنژیو',
    keywords: ['آنژیوگرافی', 'دارو', 'قلب', 'درمان', 'انژیوگرافی']
  },
  {
    type: 'article',
    title: 'بهبودی پس از آنژیوگرافی',
    url: '/articles/angiography-recovery',
    description: 'مراقبت‌های بعد از آنژیو',
    keywords: ['آنژیوگرافی', 'بهبودی', 'مراقبت', 'قلب', 'انژیوگرافی']
  },
  {
    type: 'article',
    title: 'ترس از آنژیوگرافی',
    url: '/articles/angiography-fear',
    description: 'آرامش قبل از آنژیوگرافی',
    keywords: ['آنژیوگرافی', 'ترس', 'اضطراب', 'قلب', 'انژیوگرافی']
  },
  {
    type: 'article',
    title: 'سرخجه در بارداری',
    url: '/articles/rubella-pregnancy',
    description: 'خطرات سرخجه برای مادر باردار',
    keywords: ['سرخجه', 'بارداری', 'خطر', 'جنین', 'سرخجه']
  },
  {
    type: 'article',
    title: 'خال‌های پوستی',
    url: '/articles/skin-moles',
    description: 'شناخت خال‌های خطرناک',
    keywords: ['خال', 'پوست', 'سرطان', 'ملانوم', 'خال']
  },
  {
    type: 'article',
    title: 'ریزش مو',
    url: '/articles/hair-loss',
    description: 'علل و درمان ریزش مو',
    keywords: ['ریزش', 'مو', 'آلوپسی', 'درمان', 'ریزش مو']
  },
  {
    type: 'article',
    title: 'فشار خون: راهنمای کامل',
    url: '/articles/blood-pressure',
    description: 'همه چیز درباره فشار خون',
    keywords: ['فشار', 'خون', 'قلب', 'سلامت', 'فشارخون']
  },
  {
    type: 'article',
    title: 'خارش پوست',
    url: '/articles/skin-itching',
    description: 'علل و درمان خارش پوستی',
    keywords: ['خارش', 'پوست', 'حساسیت', 'درمان', 'خارش']
  },
  {
    type: 'article',
    title: 'توده پستان',
    url: '/articles/breast-mass',
    description: 'بررسی توده‌های پستان',
    keywords: ['پستان', 'توده', 'سرطان', 'معاینه', 'پستون']
  },
  {
    type: 'article',
    title: 'چای سبز و کاهش وزن',
    url: '/articles/green-tea-weight-loss',
    description: 'تاثیر چای سبز بر لاغری',
    keywords: ['چای سبز', 'لاغری', 'وزن', 'رژیم', 'چای']
  },
  {
    type: 'article',
    title: 'پیگیری تب',
    url: '/articles/fever-tracking',
    description: 'روش‌های اندازه‌گیری تب',
    keywords: ['تب', 'دما', 'تب سنج', 'پیگیری', 'تب']
  },
  {
    type: 'article',
    title: 'خواسته‌های بیماران',
    url: '/articles/patient-demands',
    description: 'مدیریت انتظارات بیماران',
    keywords: ['بیمار', 'خواسته', 'پزشک', 'رابطه', 'بیماران']
  },
  {
    type: 'article',
    title: 'سرم درمانی در منزل',
    url: '/articles/iv-therapy-home',
    description: 'تزریق سرم در منزل',
    keywords: ['سرم', 'تزریق', 'منزل', 'IV', 'سرم']
  },
  {
    type: 'article',
    title: 'افسردگی',
    url: '/articles/depression',
    description: 'راهنمای کامل افسردگی',
    keywords: ['افسردگی', 'روان', 'درمان', 'اضطراب', 'افسردگی']
  },
  {
    type: 'article',
    title: 'سردرد',
    url: '/articles/headache',
    description: 'انواع و درمان سردرد',
    keywords: ['سردرد', 'میگرن', 'درد', 'سر', 'سردرد']
  },
  {
    type: 'article',
    title: 'تعریق بیش از حد',
    url: '/articles/hyperhidrosis',
    description: 'علل و درمان تعریق زیاد',
    keywords: ['تعریق', 'عرق', 'هیپرهیدروزیس', 'درمان', 'تعریق']
  },
  {
    type: 'article',
    title: 'دیابت',
    url: '/articles/diabetes',
    description: 'راهنمای جامع دیابت',
    keywords: ['دیابت', 'قند', 'انسولین', 'درمان', 'دیابت']
  },
  {
    type: 'article',
    title: 'HIV و AIDS',
    url: '/articles/hiv-aids',
    description: 'اطلاعات کامل درباره ایدز',
    keywords: ['HIV', 'AIDS', 'ایدز', 'عفونت', 'ای چ ای وی']
  },
  {
    type: 'article',
    title: 'واکسیناسیون',
    url: '/articles/vaccination',
    description: 'اهمیت واکسن‌ها',
    keywords: ['واکسن', 'تزریق', 'پیشگیری', 'ایمنی', 'واکسن']
  },
  {
    type: 'article',
    title: 'رشد کودک',
    url: '/articles/child-growth-monitoring',
    description: 'پیگیری رشد کودکان',
    keywords: ['کودک', 'رشد', 'قد', 'وزن', 'کودک']
  },
  {
    type: 'article',
    title: 'قهوه و قلب',
    url: '/articles/coffee-heart',
    description: 'تاثیر قهوه بر سلامت قلب',
    keywords: ['قهوه', 'قلب', 'کافئین', 'سلامت', 'قهوه']
  },
  {
    type: 'article',
    title: 'آلودگی هوا',
    url: '/articles/air-pollution',
    description: 'تاثیر آلودگی بر سلامت',
    keywords: ['آلودگی', 'هوا', 'ریه', 'قلب', 'الودگی']
  },
  {
    type: 'article',
    title: 'مننژیت',
    url: '/articles/meningitis',
    description: 'علائم و درمان مننژیت',
    keywords: ['مننژیت', 'مغز', 'عفونت', 'خطرناک', 'مننژیت']
  },
  {
    type: 'article',
    title: 'میگرن',
    url: '/articles/migraine',
    description: 'درمان میگرن و سردرد',
    keywords: ['میگرن', 'سردرد', 'درد', 'حمله', 'میگرین']
  },
  {
    type: 'article',
    title: 'تب کودکان',
    url: '/articles/children-fever',
    description: 'مدیریت تب در کودکان',
    keywords: ['تب', 'کودک', 'بچه', 'درمان', 'تب']
  },
  {
    type: 'article',
    title: 'هوش مصنوعی در قلب',
    url: '/articles/ai-cardiology',
    description: 'AI در کاردیولوژی',
    keywords: ['هوش مصنوعی', 'AI', 'قلب', 'تشخیص', 'هوش']
  },
  {
    type: 'article',
    title: 'سیگار و قلب',
    url: '/articles/smoking-heart-effects',
    description: 'عوارض سیگار بر قلب',
    keywords: ['سیگار', 'قلب', 'عوارض', 'خطر', 'سیگار']
  },
  {
    type: 'article',
    title: 'آنفولانزا',
    url: '/articles/influenza-treatment',
    description: 'درمان آنفولانزا',
    keywords: ['آنفولانزا', 'سرماخوردگی', 'درمان', 'تب', 'انفلوانزا']
  },
  {
    type: 'article',
    title: 'سکته قلبی',
    url: '/articles/heart-attack-symptoms',
    description: 'علائم حمله قلبی',
    keywords: ['سکته', 'قلب', 'حمله', 'علائم', 'سکته قلبی']
  },
  {
    type: 'article',
    title: 'علائم سکته مغزی',
    url: '/articles/stroke-symptoms',
    description: 'تشخیص فوری سکته',
    keywords: ['سکته', 'مغز', 'علائم', 'فوری', 'سکته مغزی']
  },
  {
    type: 'article',
    title: 'لکه‌های ناخن',
    url: '/articles/nail-spots',
    description: 'معنی لکه‌های ناخن',
    keywords: ['ناخن', 'لکه', 'سلامت', 'علائم', 'ناخن']
  },
  {
    type: 'article',
    title: 'HPV و استخر',
    url: '/articles/hpv-pool',
    description: 'انتقال HPV در استخر',
    keywords: ['HPV', 'استخر', 'ویروس', 'عفونت', 'اچ پی وی']
  },
  {
    type: 'article',
    title: 'درمان HPV',
    url: '/articles/hpv-treatment-guide',
    description: 'راهنمای درمان HPV',
    keywords: ['HPV', 'درمان', 'ویروس', 'پاپیلوما', 'اچ پی وی']
  },
  {
    type: 'article',
    title: 'مشاوره پزشکی',
    url: '/articles/medical-consultation',
    description: 'اهمیت مشاوره پزشکی',
    keywords: ['مشاوره', 'پزشک', 'ویزیت', 'آنلاین', 'مشاوره']
  },
  {
    type: 'article',
    title: 'واکسن گارداسیل',
    url: '/articles/gardasil-vaccine',
    description: 'همه چیز درباره گارداسیل',
    keywords: ['گارداسیل', 'واکسن', 'HPV', 'پیشگیری', 'گارداسیل']
  },
  {
    type: 'article',
    title: 'گرمازدگی',
    url: '/articles/heat-exhaustion',
    description: 'علائم و درمان گرمازدگی',
    keywords: ['گرمازدگی', 'تابستان', 'گرما', 'علائم', 'گرمازدگی']
  },
  {
    type: 'article',
    title: 'آمپول نوروبیون',
    url: '/articles/neurobion-ampoule',
    description: 'موارد مصرف نوروبیون',
    keywords: ['نوروبیون', 'ویتامین', 'B', 'آمپول', 'نوروبیون']
  },
  {
    type: 'article',
    title: 'تنگی نفس',
    url: '/articles/breathing-treatment',
    description: 'علل و درمان تنگی نفس',
    keywords: ['تنگی نفس', 'نفس', 'تنفس', 'ریه', 'تنگی']
  },
  {
    type: 'article',
    title: 'آزمایش کلسترول',
    url: '/articles/cholesterol-test',
    description: 'آزمایش و تفسیر کلسترول',
    keywords: ['کلسترول', 'آزمایش', 'خون', 'قلب', 'کلسترول']
  },
  {
    type: 'article',
    title: 'زگیل تناسلی',
    url: '/articles/genital-warts',
    description: 'علل و درمان زگیل',
    keywords: ['زگیل', 'HPV', 'تناسلی', 'عفونت', 'زگیل']
  },
  {
    type: 'article',
    title: 'یبوست',
    url: '/articles/constipation',
    description: 'علل و درمان یبوست',
    keywords: ['یبوست', 'گوارش', 'روده', 'درمان', 'یبوست']
  },
  {
    type: 'article',
    title: 'ویتامین‌ها و سرماخوردگی',
    url: '/articles/vitamins-cold',
    description: 'نقش ویتامین‌ها در سرما',
    keywords: ['ویتامین', 'سرما', 'C', 'پیشگیری', 'ویتامین']
  },
  {
    type: 'article',
    title: 'درد شکم',
    url: '/articles/abdominal-pain',
    description: 'علل درد شکم',
    keywords: ['درد شکم', 'شکم', 'گوارش', 'علائم', 'شکم']
  },
  {
    type: 'article',
    title: 'ورم پا',
    url: '/articles/leg-swelling',
    description: 'علل و درمان ورم پا',
    keywords: ['ورم', 'پا', 'ادم', 'تورم', 'ورم پا']
  },
  {
    type: 'article',
    title: 'درمان سرماخوردگی',
    url: '/articles/cold-treatment',
    description: 'روش‌های درمان سرما',
    keywords: ['سرماخوردگی', 'درمان', 'سرما', 'علائم', 'سرماخوردگی']
  },
  {
    type: 'article',
    title: 'واکسن آنفولانزا',
    url: '/articles/influenza-vaccine',
    description: 'اهمیت واکسن آنفولانزا',
    keywords: ['واکسن', 'آنفولانزا', 'پیشگیری', 'تب', 'واکسن']
  },
  {
    type: 'article',
    title: 'افسردگی و بیماری قلبی',
    url: '/articles/depression-heart-disease',
    description: 'ارتباط افسردگی با قلب',
    keywords: ['افسردگی', 'قلب', 'روان', 'ارتباط', 'افسردگی']
  },
  {
    type: 'article',
    title: 'ویتامین‌ها و سلامت',
    url: '/articles/vitamins-health',
    description: 'نقش ویتامین‌ها در بدن',
    keywords: ['ویتامین', 'سلامت', 'تغذیه', 'مکمل', 'ویتامین']
  },
  {
    type: 'article',
    title: 'تأثیر آلودگی هوا بر قلب و ریه',
    url: '/articles/air-pollution-effects',
    description: 'اثرات آلودگی هوا بر سلامت قلبی-ریوی',
    keywords: ['آلودگی هوا', 'PM2.5', 'AQI', 'قلب', 'ریه', 'سکته']
  },
  {
    type: 'article',
    title: 'میترال کلیپ (MitralClip)',
    url: '/articles/mitral-clip',
    description: 'ترمیم دریچه قلب بدون جراحی باز',
    keywords: ['میترال کلیپ', 'دریچه میترال', 'قلب', 'جراحی', 'MitralClip', 'نارسایی دریچه']
  }
];

export const pagesData: SearchItem[] = [
  {
    type: 'page',
    title: 'صفحه اصلی',
    url: '/',
    description: 'خدمات پزشکی در منزل نوید زندگی',
    keywords: ['صفحه اصلی', 'خانه', 'نوید زندگی', 'منزل', 'خدمات', 'صفحه']
  },
  {
    type: 'page',
    title: 'درباره ما',
    url: '/about',
    description: 'معرفی نوید زندگی',
    keywords: ['درباره', 'معرفی', 'ما', 'نوید زندگی', 'درباره ما']
  },
  {
    type: 'page',
    title: 'تماس با ما',
    url: '/contact',
    description: 'راه‌های تماس با نوید زندگی',
    keywords: ['تماس', 'ارتباط', 'شماره', 'آدرس', 'تماس با ما']
  },
  {
    type: 'page',
    title: 'تعرفه خدمات',
    url: '/pricing',
    description: 'قیمت خدمات پزشکی در منزل',
    keywords: ['تعرفه', 'قیمت', 'هزینه', 'خدمات', 'تعرفه']
  },
  {
    type: 'page',
    title: 'مقالات پزشکی',
    url: '/articles',
    description: 'مقالات آموزشی پزشکی',
    keywords: ['مقالات', 'آموزش', 'بلاگ', 'اطلاعات', 'مقالات']
  },
  {
    type: 'page',
    title: 'همکاری با ما',
    url: '/collaboration',
    description: 'فرصت‌های شغلی و همکاری',
    keywords: ['همکاری', 'کار', 'شغل', 'استخدام', 'همکاری']
  }
];

export const allSearchData = [...servicesData, ...articlesData, ...pagesData];
