/**
 * فایل مرکزی تعریف تمام مقالات
 * ===================================
 * هر مقاله جدید را فقط اینجا اضافه کنید
 * صفحه اصلی و صفحه مقالات خودکار آپدیت می‌شوند
 * 
 * نکته مهم: ID مقاله جدید باید بیشتر از بالاترین ID موجود باشد
 * در حال حاضر بالاترین ID: 1107
 */

// Import all article images
import womenHeartDiseaseImage from "@/assets/women-heart-disease.jpg";
import cardiacRehabHomeImage from "@/assets/cardiac-rehab-home.jpg";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";
import diabetesHeartImage from "@/assets/diabetes-heart-connection.jpg";
import heartValveDiseaseImage from "@/assets/heart-valve-disease.jpg";
import echoSafetyHomeImage from "@/assets/echo-safety-home.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import drugInteractionsHeartProstateImage from "@/assets/drug-interactions-heart-prostate.jpg";
import prostateVolumeImage from "@/assets/prostate-volume-ultrasound.jpg";
import osteosarcomaImage from "@/assets/osteosarcoma-home-care.jpg";
import urologyUltrasoundImage from "@/assets/urology-ultrasound-home.jpg";
import abdominalUltrasoundImage from "@/assets/abdominal-ultrasound-home.jpg";
import dopplerDVTImage from "@/assets/doppler-ultrasound-dvt.jpg";
import supplementsHeartImage from "@/assets/supplements-heart-athletes.jpg";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";
import bellsPalsyImage from "@/assets/bells-palsy-home-care.jpg";
import guillainBarreImage from "@/assets/guillain-barre-home-care.jpg";
import postprandialHypotensionImage from "@/assets/postprandial-hypotension.jpg";
import pulmonaryEdemaImage from "@/assets/pulmonary-edema.jpg";
import preoperativeCardiacImage from "@/assets/preoperative-cardiac-evaluation.jpg";
import resistantHypertensionImage from "@/assets/resistant-hypertension.jpg";
import postCCUCareImage from "@/assets/post-ccu-care-home.jpg";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";
import sildenfilTadalafilImage from "@/assets/sildenafil-tadalafil-article.jpg";
import angiographyHistoryImage from "@/assets/angiography-history-technology.jpg";
import angiographyVsAngioplastyImage from "@/assets/angiography-vs-angioplasty.jpg";
import methocarbamolImage from "@/assets/methocarbamol-article.jpg";
import levothyroxineImage from "@/assets/levothyroxine-article.jpg";
import chromiumSupplementImage from "@/assets/chromium-supplement-article.jpg";
import ranolazineImage from "@/assets/ranolazine-medication.jpg";
import ivabradineImage from "@/assets/ivabradine-medication.jpg";
import ivabradineVsBetablockerImage from "@/assets/ivabradine-vs-betablocker.jpg";
import heartFailureDrugInteractionsImage from "@/assets/heart-failure-drug-interactions.jpg";
import hiddenStrokeHeartAttackImage from "@/assets/hidden-stroke-heart-attack-symptoms.jpg";
import heartStrokeRiskQuizImage from "@/assets/heart-stroke-risk-quiz.jpg";
import repathaEvolocumabImage from "@/assets/repatha-evolocumab-article.jpg";
import famotidineImage from "@/assets/famotidine-article.jpg";
import downSyndromeHomeVisitImage from "@/assets/down-syndrome-home-visit.jpg";
import caffeineHeartEffectsImage from "@/assets/caffeine-heart-effects.jpg";
import turnerSyndromeImage from "@/assets/turner-syndrome-article.jpg";
import hivArticleImage from "@/assets/hiv-article.jpg";
import hpvTreatmentGuideImage from "@/assets/hpv-treatment-guide.jpg";

export interface ArticleData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  date?: string;
}

/**
 * لیست اصلی مقالات - مرتب شده بر اساس ID نزولی (جدیدترین بالا)
 * برای اضافه کردن مقاله جدید:
 * 1. عکس را import کنید
 * 2. مقاله را به ابتدای این آرایه اضافه کنید
 * 3. ID را یکی بیشتر از بالاترین عدد (در حال حاضر 1123) قرار دهید
 */
export const allArticles: ArticleData[] = [
  // ═══════════════════════════════════════════════════════════════
  // جدیدترین مقالات (ID بالاتر = جدیدتر)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 1123,
    title: "از تفسیر آزمایش تا درمان قطعی زگیل تناسلی (HPV)",
    description: "تفسیر آزمایش HPV مثبت، تیپ‌های کم‌خطر و پرخطر، درمان زگیل تناسلی، بهترین مکمل دفع HPV و آزمایش پاپ‌اسمیر در منزل",
    image: hpvTreatmentGuideImage,
    link: "/articles/hpv-treatment-guide",
    category: "زنان",
    date: "۱۴۰۴/۱۲/۰۹"
  },
  {
    id: 1122,
    title: "HIV از فرضیه تا واقعیت؛ تاریخچه، علم و زندگی با ویروس",
    description: "بررسی جامع HIV: تاریخچه، مکانیسم عملکرد، درمان مدرن ART، مفهوم U=U و خدمات آزمایش و پایش محرمانه در منزل نوید زندگی",
    image: hivArticleImage,
    link: "/articles/hiv-modern-treatment",
    category: "سلامت عمومی",
    date: "۱۴۰۴/۱۲/۰۹"
  },
  {
    id: 1121,
    title: "سندرم ترنر؛ ژنتیک، علائم و پایش قلبی در منزل",
    description: "بررسی سندرم ترنر: علت ژنتیکی، علائم ظاهری، ناهنجاری‌های قلبی و اهمیت اکو و هولتر در منزل. خدمات تخصصی نوید زندگی.",
    image: turnerSyndromeImage,
    link: "/articles/turner-syndrome",
    category: "زنان",
    date: "۱۴۰۴/۱۲/۰۹"
  },
  {
    id: 1120,
    title: "تأثیرات کافئین بر قلب و سلامت؛ تیغ دو لبه قهوه",
    description: "بررسی تأثیرات مثبت و منفی کافئین بر قلب، فشار خون و آریتمی. میزان مجاز مصرف قهوه و خدمات هولتر و اکو در منزل نوید زندگی",
    image: caffeineHeartEffectsImage,
    link: "/articles/caffeine-heart-effects",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۲/۰۸"
  },
  {
    id: 1119,
    title: "ویزیت پزشک در منزل برای بیماران سندروم دان | مراقبت تخصصی در خانه",
    description: "ویزیت پزشک در منزل برای بیماران سندروم دان با اعزام سریع پزشک عمومی و متخصص. دریافت خدمات پزشکی ایمن و تخصصی در خانه بدون نیاز به مراجعه حضوری.",
    image: downSyndromeHomeVisitImage,
    link: "/articles/down-syndrome-home-visit",
    category: "سلامت عمومی",
    date: "۱۴۰۴/۱۲/۰۸"
  },
  {
    id: 1118,
    title: "فاموتیدین؛ نگهبان هوشمند معده (تاریخچه، عملکرد و هشدارهای قلبی)",
    description: "راهنمای جامع فاموتیدین: تاریخچه، مکانیسم مهار گیرنده H2، تفاوت درد قلب و معده، عوارض و خدمات پایش در منزل",
    image: famotidineImage,
    link: "/articles/famotidine",
    category: "دارو",
    date: "۱۴۰۴/۱۲/۰۶"
  },
  {
    id: 1117,
    title: "رپتا (Repatha)؛ پایان عصر کلسترول بالا؟ (تکنولوژی نوین در خدمت قلب)",
    description: "راهنمای جامع داروی رپتا (اولوسوکومب): مکانیسم مهار PCSK9، تاریخچه، عوارض، و پایش با سونوگرافی داپلر و آزمایشگاه سیار در منزل",
    image: repathaEvolocumabImage,
    link: "/articles/repatha-evolocumab",
    category: "دارو",
    date: "۱۴۰۴/۱۲/۰۶"
  },
  {
    id: 1116,
    title: "تست آنلاین ریسک سکته قلبی و مغزی؛ آیا در معرض خطر هستید؟",
    description: "تست رایگان غربالگری ریسک سکته قلبی و مغزی بر اساس استانداردهای انجمن قلب آمریکا. ارزیابی فوری علائم و اعزام متخصص به منزل",
    image: heartStrokeRiskQuizImage,
    link: "/articles/heart-stroke-risk-quiz",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۲/۰۵"
  },
  {
    id: 1115,
    title: "علائم پنهان سکته قلبی و مغزی؛ تشخیص سریع با تجهیزات پرتابل در منزل",
    description: "علائم فریبنده سکته قلبی و مغزی: درد فک، سوزش سردل، قانون FAST و تشخیص فوری با نوار قلب، اکو و سونوگرافی داپلر پرتابل در منزل",
    image: hiddenStrokeHeartAttackImage,
    link: "/articles/hidden-stroke-heart-attack-symptoms",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۲/۰۵"
  },
  {
    id: 1114,
    title: "تداخلات دارویی خطرناک در نارسایی قلبی؛ چه داروهایی برای قلب شما سم هستند؟",
    description: "داروهای ممنوع در نارسایی قلبی: خطرات ژلوفن، قرص سرماخوردگی، آنتی‌بیوتیک‌ها و مکمل‌های گیاهی برای بیماران قلبی و پایش دارویی در منزل",
    image: heartFailureDrugInteractionsImage,
    link: "/articles/heart-failure-drug-interactions",
    category: "دارو",
    date: "۱۴۰۴/۱۲/۰۴"
  },
  {
    id: 1113,
    title: "ایوابرادین یا بتابلاکر؟ نبرد برای کنترل ضربان در نارسایی قلبی",
    description: "مقایسه کامل ایوابرادین (کورالان) با بتابلاکرها (متوپرولول و کارودیلول): مکانیسم، عوارض، ترکیب طلایی و پایش با هولتر و اکو در منزل",
    image: ivabradineVsBetablockerImage,
    link: "/articles/ivabradine-vs-betablocker",
    category: "دارو",
    date: "۱۴۰۴/۱۲/۰۴"
  },
  {
    id: 1112,
    title: "ایوابرادین (کورالان)؛ ضربان‌سنج هوشمند قلب",
    description: "راهنمای جامع ایوابرادین: تاریخچه، مکانیسم اثر بر کانال‌های Funny، عوارض و پایش‌های تخصصی قلب در منزل",
    image: ivabradineImage,
    link: "/articles/ivabradine",
    category: "دارو",
    date: "۱۴۰۴/۱۲/۰۳"
  },
  {
    id: 1111,
    title: "رانولازین (رانکسا)؛ رویکردی نوین در درمان دردهای قلبی",
    description: "راهنمای جامع رانولازین: تاریخچه، مکانیسم سلولی، عوارض، تداخلات دارویی و پایش‌های تخصصی قلب در منزل",
    image: ranolazineImage,
    link: "/articles/ranolazine",
    category: "دارو",
    date: "۱۴۰۴/۱۲/۰۳"
  },
  {
    id: 1110,
    title: "مکمل کروم؛ کلید طلایی تنظیم سوخت‌وساز و انسولین (تاریخچه، عملکرد و پایش‌های قلبی)",
    description: "راهنمای جامع مکمل کروم پیکولینات: تاریخچه، مکانیسم اثر بر انسولین، ارتباط با قلب و خدمات پایش در منزل",
    image: chromiumSupplementImage,
    link: "/articles/chromium-supplement",
    category: "تغذیه",
    date: "۱۴۰۴/۱۱/۳۰"
  },
  {
    id: 1109,
    title: "لووتیروکسین؛ عصای معجزه‌گر غده تیروئید (تاریخچه، مکانیسم اثر و پایش‌های قلبی)",
    description: "راهنمای جامع لووتیروکسین: تاریخچه، مکانیسم اثر، تأثیر بر قلب، قوانین مصرف و خدمات پایش تیروئید و قلب در منزل",
    image: levothyroxineImage,
    link: "/articles/levothyroxine",
    category: "دارو",
    date: "۱۴۰۴/۱۱/۳۰"
  },
  {
    id: 1108,
    title: "متوکاربامول (روباکسین)؛ تاریخچه، مکانیسم اثر و نکات ایمنی",
    description: "راهنمای جامع متوکاربامول: تاریخچه کشف، مکانیسم اثر مرکزی، فارماکوکینتیک، عوارض جانبی و خدمات پایش در منزل",
    image: methocarbamolImage,
    link: "/articles/methocarbamol",
    category: "دارو",
    date: "۱۴۰۴/۱۱/۲۹"
  },
  {
    id: 1107,
    title: "تفاوت آنژیوگرافی و آنژیوپلاستی؛ تشخیص در مقابل درمان",
    description: "تفاوت آنژیوگرافی (تشخیصی) و آنژیوپلاستی (فنرگذاری)، استنت قلب چیست، مراقبت‌های قبل و بعد با اکو و هولتر در منزل",
    image: angiographyVsAngioplastyImage,
    link: "/articles/angiography-vs-angioplasty",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1106,
    title: "آنژیوگرافی؛ سفر به اعماق رگ‌ها (تاریخچه، تکنولوژی و شیوه‌ها)",
    description: "تاریخچه کشف آنژیوگرافی از ورنر فورسمن تا امروز، دستگاه سی‌آرم و کت‌لب، مراحل انجام و نقش اکو و هولتر در پایش قبل و بعد از آن",
    image: angiographyHistoryImage,
    link: "/articles/angiography-history",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1105,
    title: "سیلدنافیل و تادالافیل؛ از آزمایشگاه‌های قلب تا اتاق خواب",
    description: "تاریخچه کشف ویاگرا و سیالیس، تفاوت‌های کلیدی، تداخلات خطرناک با نیترات‌ها و داروهای پروستات، نقش اکو و هولتر در پایش ایمنی",
    image: sildenfilTadalafilImage,
    link: "/articles/sildenafil-tadalafil",
    category: "دارو",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1104,
    title: "عدد EF در اکو قلب چیست؟ تفسیر کسر تخلیه‌ای و معنای درصدهای آن",
    description: "تفسیر EF نرمال و غیرنرمال، علت EF پایین، خطرات نارسایی قلبی، نقش هولتر و اکو در پایش قدرت قلب",
    image: ejectionFractionImage,
    link: "/articles/ejection-fraction",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1103,
    title: "تداخلات دارویی خطرناک؛ مثلث قلب، پروستات و ناتوانی جنسی",
    description: "خطرات ترکیب ویاگرا با نیترات‌های قلبی، تداخل داروهای پروستات با فشار خون، نقش هولتر و اکو در پایش ایمنی دارو",
    image: drugInteractionsHeartProstateImage,
    link: "/articles/drug-interactions-heart-prostate",
    category: "دارو",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1102,
    title: "راهنمای جامع حجم نرمال پروستات؛ اعداد سونوگرافی چه معنایی دارند؟",
    description: "حجم نرمال پروستات بر اساس سن، تفسیر BPH، ارتباط پروستات با قلب و عروق، سونوگرافی و اکو در منزل",
    image: prostateVolumeImage,
    link: "/articles/prostate-volume",
    category: "سلامت عمومی",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1101,
    title: "استئوسارکوم؛ تشخیص، مراقبت‌های داخلی و پایش قلب در منزل",
    description: "مدیریت استئوسارکوم در منزل: پایش عوارض شیمی‌درمانی، اکوکاردیوگرافی برای سمیت قلبی، سونوگرافی داپلر",
    image: osteosarcomaImage,
    link: "/articles/osteosarcoma",
    category: "سلامت عمومی",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1100,
    title: "فلج بلز (Bell's Palsy): تفاوت با سکته مغزی، علائم و درمان در منزل",
    description: "راهنمای جامع فلج بلز: تشخیص تفریقی با سکته مغزی، نقش هولتر فشار خون و نوار قلب در منزل",
    image: bellsPalsyImage,
    link: "/articles/bells-palsy",
    category: "سلامت عمومی",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1099,
    title: "بیماری گیلن باره (Guillain-Barré): علائم، درمان و مراقبت در منزل",
    description: "راهنمای جامع گیلن باره: از ضعف عضلانی تا پایش قلبی و عروقی در منزل. نقش هولتر، اکو و سونوگرافی داپلر",
    image: guillainBarreImage,
    link: "/articles/guillain-barre",
    category: "سلامت عمومی",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1098,
    title: "مشکلات ادراری و پروستات در آقایان؛ تشخیص دقیق با سونوگرافی ارولوژی در منزل",
    description: "سونوگرافی تخصصی ارولوژی در منزل برای تشخیص بزرگی پروستات، سنگ کلیه و مثانه و بررسی باقی‌مانده ادرار",
    image: urologyUltrasoundImage,
    link: "/articles/urology-ultrasound-home",
    category: "عمومی",
    date: "۱۴۰۴/۰۵/۱۰"
  },
  {
    id: 1097,
    title: "دردهای شکمی در سالمندان؛ تشخیص فوری سنگ کلیه و کیسه صفرا با سونوگرافی در منزل",
    description: "سونوگرافی شکم و لگن در منزل: تشخیص سنگ کلیه، سنگ کیسه صفرا، کبد چرب و بررسی آئورت شکمی",
    image: abdominalUltrasoundImage,
    link: "/articles/abdominal-ultrasound-home",
    category: "عمومی",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1096,
    title: "ورم پا را جدی بگیرید؛ تشخیص فوری لخته خون (DVT) با سونوگرافی داپلر در منزل",
    description: "علائم DVT، افراد در معرض خطر، مزایای سونوگرافی داپلر سیار و خدمات درمانی در منزل",
    image: dopplerDVTImage,
    link: "/articles/doppler-dvt",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1095,
    title: "مکمل‌های بدنسازی و قلب؛ چرا ورزشکاران به هولتر قلب نیاز دارند؟",
    description: "خطرات محرک‌ها و مکمل‌های ورزشی برای قلب، آریتمی‌های ناشی از مکمل، نقش هولتر و اکو در پایش ورزشکاران",
    image: supplementsHeartImage,
    link: "/articles/supplements-heart-athletes",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1094,
    title: "آپنه خواب و خروپف؛ چرا توقف تنفس شبانه زنگ خطری برای ایست قلبی است؟",
    description: "مکانیسم تخریب قلب توسط آپنه خواب، نقش هولتر فشار خون و قلب در تشخیص، خدمات پایش شبانه در منزل",
    image: sleepApneaHeartImage,
    link: "/articles/sleep-apnea-heart",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1093,
    title: "بیماری قلبی در زنان؛ علائم فریبنده و ضرورت پایش تخصصی در منزل",
    description: "راهنمای کامل بیماری قلبی در زنان: علائم متفاوت سکته قلبی در بانوان، عوامل خطر مثل یائسگی و بارداری، خدمات هولتر، اکو و نوار قلب در منزل",
    image: womenHeartDiseaseImage,
    link: "/articles/women-heart-disease",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1092,
    title: "بازتوانی قلبی در منزل؛ چطور بعد از سکته یا جراحی به زندگی عادی برگردیم؟",
    description: "راهنمای کامل بازتوانی قلبی: شروع تدریجی ورزش، نقش اکو و نوار قلب در تعیین ظرفیت قلب",
    image: cardiacRehabHomeImage,
    link: "/articles/cardiac-rehab-home",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1091,
    title: "راهنمای کنترل فشار خون با دستگاه‌های خانگی؛ چرا اعداد گاهی اشتباه هستند؟",
    description: "آموزش روش صحیح استفاده از فشارسنج دیجیتال، اشتباهات رایج در اندازه‌گیری، انتخاب دستگاه بازویی یا مچی، و خدمات کالیبره کردن دستگاه توسط متخصص قلب در منزل",
    image: bloodPressureReadingsImage,
    link: "/articles/blood-pressure-readings",
    category: "قلب و عروق",
    date: "۱۴۰۴/۱۱/۱۱"
  },
  {
    id: 1090,
    title: "دیابت و قلب؛ چرا بیماران دیابتی باید بیش از دیگران مراقب قلب خود باشند؟",
    description: "راهنمای کامل ارتباط دیابت و بیماری‌های قلبی: سکته قلبی خاموش، تصلب شرایین در دیابت، چک‌آپ قلبی با اکو و نوار قلب در منزل",
    image: diabetesHeartImage,
    link: "/articles/diabetes-heart",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1089,
    title: "بیماری‌های دریچه‌ای قلب؛ از تشخیص تا مراقبت‌های تخصصی در منزل",
    description: "راهنمای کامل بیماری‌های دریچه‌ای قلب: تنگی و نارسایی دریچه، علائم هشداردهنده، تشخیص با اکو در منزل و مراقبت از دریچه‌های مصنوعی",
    image: heartValveDiseaseImage,
    link: "/articles/heart-valve-disease",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1088,
    title: "تکنولوژی در خدمت سلامت؛ آیا دقت اکو و نوار قلب در منزل با بیمارستان برابر است؟",
    description: "مقایسه فنی تجهیزات پورتابل اکو و نوار قلب با دستگاه‌های ثابت بیمارستانی و بررسی استانداردهای FDA و CE",
    image: echoSafetyHomeImage,
    link: "/articles/portable-device-accuracy",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1087,
    title: "افت فشار خون و تپش قلب بعد از غذا (Postprandial Hypotension)؛ پدیده‌ای شایع در سالمندان",
    description: "راهنمای کامل افت فشار خون بعد از غذا: علائم، علل، تشخیص در منزل و راهکارهای عملی برای سالمندان",
    image: postprandialHypotensionImage,
    link: "/articles/postprandial-hypotension",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1086,
    title: "آب آوردن ریه (ادم ریوی)؛ وقتی تنگی نفس به یک وضعیت اورژانسی تبدیل می‌شود",
    description: "راهنمای کامل ادم ریوی: علائم هشداردهنده، علل قلبی، تشخیص با اکو و نوار قلب در منزل و درمان فوری",
    image: pulmonaryEdemaImage,
    link: "/articles/pulmonary-edema",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1085,
    title: "تاییدیه قلب قبل از جراحی؛ چرا و چگونه؟",
    description: "راهنمای کامل ارزیابی قلبی قبل از جراحی: نوار قلب، اکو و صدور گواهی تاییدیه در منزل برای جراحی‌های مختلف",
    image: preoperativeCardiacImage,
    link: "/articles/preoperative-cardiac-evaluation",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1084,
    title: "فشار خون مقاوم به درمان؛ وقتی قرص‌ها جواب نمی‌دهند",
    description: "راهنمای کامل فشار خون مقاوم: علل، تداخلات دارویی، آپنه خواب و خدمات تشخیصی اکو و هولتر در منزل",
    image: resistantHypertensionImage,
    link: "/articles/resistant-hypertension",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1083,
    title: "مراقبت‌های حیاتی پس از ترخیص از CCU؛ هفته اول، پل پیروزی بر بیماری",
    description: "راهنمای گام‌به‌گام مراقبت‌های منزل پس از ترخیص از بخش مراقبت‌های ویژه قلبی شامل مدیریت دارویی، پایش علائم و خدمات در منزل",
    image: postCCUCareImage,
    link: "/articles/post-ccu-care",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  },
  {
    id: 1082,
    title: "سکته قلبی خاموش؛ وقتی قلب بدون فریاد آسیب می‌بیند",
    description: "راهنمای جامع سکته قلبی خاموش (Silent Ischemia): مکانیسم، علائم پنهان، افراد در معرض خطر و خدمات تشخیص در منزل",
    image: silentHeartAttackImage,
    link: "/articles/silent-heart-attack",
    category: "قلب و عروق",
    date: "۱۴۰۳/۱۱/۱۰"
  }
];

/**
 * گرفتن جدیدترین مقالات برای صفحه اصلی
 * @param count تعداد مقالات
 * @returns آرایه‌ای از جدیدترین مقالات
 */
export const getLatestArticles = (count: number = 6): ArticleData[] => {
  return allArticles.slice(0, count);
};

/**
 * گرفتن بالاترین ID موجود برای اضافه کردن مقاله جدید
 */
export const getNextArticleId = (): number => {
  const maxId = Math.max(...allArticles.map(a => a.id));
  return maxId + 1;
};
