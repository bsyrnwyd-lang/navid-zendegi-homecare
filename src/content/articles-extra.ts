import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";
import legSwellingImage from "@/assets/leg-swelling-article.jpg";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import constipationImage from "@/assets/constipation-article.jpg";
import pacemakerICDImage from "@/assets/pacemaker-icd-article.jpg";
import muscleBridgeImage from "@/assets/muscle-bridge-holter.jpg";
import mitralClipImage from "@/assets/mitral-clip-article.jpg";
import mitralValveReplacementImage from "@/assets/mitral-valve-replacement.jpg";
import tricuspidValveReplacementImage from "@/assets/tricuspid-valve-replacement.jpg";
import taviProcedureImage from "@/assets/tavi-procedure.jpg";
import cabgSurgeryImage from "@/assets/cabg-surgery.jpg";
import alopeciaAreataImage from "@/assets/alopecia-areata.jpg";
import heartMedicationsWarningImage from "@/assets/heart-medications-warning.jpg";
import legEdemaImage from "@/assets/leg-edema-article.jpg";
import inrMonitoringImage from "@/assets/inr-monitoring-article.jpg";
import heparinEnoxaparinImage from "@/assets/heparin-enoxaparin-article.jpg";

export interface ArticleCard {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  date?: string;
}

export const extraArticles: ArticleCard[] = [
  {
    id: 1081,
    title: "راهنمای جامع هپارین و انوکساپارین؛ مراقبت و تزریق در منزل",
    description: "راهنمای کامل مصرف هپارین و انوکساپارین: تفاوت انواع هپارین، تکنیک تزریق، عوارض HIT و خدمات پایش و تزریق در منزل",
    image: heparinEnoxaparinImage,
    link: "/articles/heparin-enoxaparin",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۸"
  },
  {
    id: 1080,
    title: "چرا عدد INR ثابت نمی‌ماند؟ عوامل موثر بر نوسانات وارفارین",
    description: "راهنمای جامع عوامل موثر بر نوسانات INR شامل تداخلات دارویی، رژیم غذایی و ویتامین K. خدمات آزمایش INR و ویزیت در منزل",
    image: inrMonitoringImage,
    link: "/articles/inr-monitoring",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۸"
  },
  {
    id: 1079,
    title: "ورم پا؛ زنگ خطر خاموش قلب یا مشکل ساده؟",
    description: "علت ورم پا چیست؟ رابطه ورم پا با بیماری قلبی، لخته وریدی و نارسایی کلیه. خدمات اکو، نوار قلب و ویزیت در منزل",
    image: legEdemaImage,
    link: "/articles/leg-edema",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۷"
  },
  {
    id: 1078,
    title: "چرا نباید داروهای قلبی را خودسرانه قطع کرد؟",
    description: "خطرات قطع ناگهانی آسپرین، پلاویکس، استاتین و بتابلاکرها. راهنمای مراقبت قلبی در منزل با خدمات ویزیت، اکو و نوار قلب",
    image: heartMedicationsWarningImage,
    link: "/articles/heart-medications-warning",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۷"
  },
  {
    id: 1077,
    title: "ریزش سکه‌ای مو و ریش (آلوپسی آره‌آتا)؛ علل و درمان",
    description: "راهنمای جامع ریزش سکه‌ای مو: مکانیسم بیماری، علل و محرک‌ها، روش‌های تشخیص و جدیدترین درمان‌ها شامل PRP در منزل",
    image: alopeciaAreataImage,
    link: "/articles/alopecia-areata",
    category: "پوست و مو",
    date: "۱۴۰۴/۱۰/۱۶"
  },
  {
    id: 1076,
    title: "جراحی بای‌پس قلب (CABG)؛ راهنمای کامل و مراقبت در منزل",
    description: "راهنمای جامع جراحی بای‌پس عروق کرونر: اندیکاسیون‌ها، انواع پیوند، روش‌های جراحی و مراقبت‌های تخصصی پس از عمل در منزل",
    image: cabgSurgeryImage,
    link: "/articles/cabg-surgery",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۶"
  },
  {
    id: 1075,
    title: "عمل تاوی (TAVI)؛ تعویض دریچه آئورت بدون جراحی باز",
    description: "راهنمای جامع عمل تاوی: تعویض دریچه آئورت بدون شکافتن سینه، کاندیداها، عوارض و مراقبت‌های پس از عمل در منزل",
    image: taviProcedureImage,
    link: "/articles/tavi-procedure",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۵"
  },
  {
    id: 1074,
    title: "تعویض دریچه تریکاسپید؛ بازسازی مسیر خون و مراقبت در منزل",
    description: "راهنمای جامع تعویض دریچه تریکاسپید: بیماری‌های دریچه سه‌لتی، انتخاب دریچه بیولوژیک یا مکانیکی و خدمات هولتر و اکو در منزل",
    image: tricuspidValveReplacementImage,
    link: "/articles/tricuspid-valve-replacement",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۵"
  },
  {
    id: 1073,
    title: "تعویض دریچه میترال؛ تشخیص، پیگیری و مراقبت در منزل",
    description: "راهنمای جامع تعویض دریچه میترال: تشخیص با اکو، انواع دریچه مصنوعی و مراقبت‌های تخصصی در منزل",
    image: mitralValveReplacementImage,
    link: "/articles/mitral-valve-replacement",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۴"
  },
  {
    id: 1072,
    title: "میترال کلیپ (MitralClip)؛ ترمیم انقلابی دریچه قلب بدون جراحی باز",
    description: "راهنمای جامع میترال کلیپ: ترمیم دریچه میترال بدون جراحی باز، مقایسه با جراحی سنتی و مراقبت‌های پس از عمل در منزل",
    image: mitralClipImage,
    link: "/articles/mitral-clip",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۴"
  },
  {
    id: 1072,
    title: "میترال کلیپ (MitralClip)؛ ترمیم انقلابی دریچه قلب بدون جراحی باز",
    description: "راهنمای جامع میترال کلیپ: ترمیم دریچه میترال بدون جراحی باز، مقایسه با جراحی سنتی و مراقبت‌های پس از عمل در منزل",
    image: mitralClipImage,
    link: "/articles/mitral-clip",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۴"
  },
  {
    id: 1071,
    title: "ماسل بریج (پل میوکارد)؛ نقش هولتر در تشخیص دردهای قلبی پنهان",
    description: "راهنمای جامع ماسل بریج: علت پنهان دردهای قلبی، نقش حیاتی هولتر در تشخیص، علائم و درمان",
    image: muscleBridgeImage,
    link: "/articles/muscle-bridge",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۳"
  },
  {
    id: 1070,
    title: "پیس‌میکر و ICD؛ راهنمای کامل باتری و دفیبریلاتور قلب",
    description: "راهنمای جامع پیس‌میکر و ICD: نحوه عملکرد، تفاوت‌ها، زندگی روزمره با باتری قلب و خدمات مراقبتی در منزل",
    image: pacemakerICDImage,
    link: "/articles/pacemaker-icd",
    category: "قلب",
    date: "۱۴۰۴/۱۰/۱۳"
  },
  {
    id: 1005,
    title: "یبوست؛ علل، انواع، تشخیص و راهکارهای علمی",
    description: "راهنمای کامل یبوست: انواع یبوست حاد و مزمن، علل شایع، تأثیر تغذیه و فعالیت بدنی، روش‌های تشخیص و درمان علمی",
    image: constipationImage,
    link: "/articles/constipation",
    category: "عمومی",
    date: "۱۴۰۴/۱۱/۰۷"
  },
  {
    id: 1004,
    title: "درد شکم؛ علل، انواع، تشخیص و مدیریت",
    description: "راهنمای کامل درد شکم: انواع درد حاد و مزمن، علل شایع، علائم هشدار و روش‌های تشخیص و درمان",
    image: abdominalPainImage,
    link: "/articles/abdominal-pain",
    category: "عمومی",
    date: "۱۴۰۴/۱۱/۰۶"
  },
  {
    id: 1003,
    title: "ورم پا؛ انواع، علل، تشخیص و درمان",
    description: "راهنمای جامع ورم پا شامل انواع ادم، علل احتباس مایع، تشخیص DVT و روش‌های درمانی",
    image: legSwellingImage,
    link: "/articles/leg-swelling",
    category: "عمومی",
    date: "۱۴۰۴/۱۱/۰۵"
  },
  {
    id: 1002,
    title: "تأثیرات علمی ویتامین‌ها در زمان سرماخوردگی",
    description: "بررسی کامل شواهد علمی درباره تأثیر ویتامین C، D، E و A در پیشگیری و درمان سرماخوردگی",
    image: vitaminsColdImage,
    link: "/articles/vitamins-cold",
    category: "تغذیه",
    date: "۱۴۰۴/۱۱/۰۴"
  },
  {
    id: 1001,
    title: "ویتامین E؛ نقش، کاربردها و نکاتی که باید بدانیم",
    description: "راهنمای جامع ویتامین E: عملکرد، منابع غذایی، نیاز روزانه، علائم کمبود و احتیاط‌های مصرف مکمل",
    image: vitaminEImage,
    link: "/articles/vitamin-e",
    category: "تغذیه",
    date: "۱۴۰۴/۱۱/۰۳"
  }
];