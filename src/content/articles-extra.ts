import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";
import legSwellingImage from "@/assets/leg-swelling-article.jpg";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import constipationImage from "@/assets/constipation-article.jpg";
import pacemakerICDImage from "@/assets/pacemaker-icd-article.jpg";
import muscleBridgeImage from "@/assets/muscle-bridge-holter.jpg";

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
    id: 1007,
    title: "ماسل بریج (پل میوکارد)؛ نقش هولتر در تشخیص دردهای قلبی پنهان",
    description: "راهنمای جامع ماسل بریج: علت پنهان دردهای قلبی، نقش حیاتی هولتر در تشخیص، علائم و درمان",
    image: muscleBridgeImage,
    link: "/articles/muscle-bridge",
    category: "قلب",
    date: "1403/10/13"
  },
  {
    id: 1006,
    title: "پیس‌میکر و ICD؛ راهنمای کامل باتری و دفیبریلاتور قلب",
    description: "راهنمای جامع پیس‌میکر و ICD: نحوه عملکرد، تفاوت‌ها، زندگی روزمره با باتری قلب و خدمات مراقبتی در منزل",
    image: pacemakerICDImage,
    link: "/articles/pacemaker-icd",
    category: "قلب",
    date: "1403/10/13"
  },
  {
    id: 1005,
    title: "یبوست؛ علل، انواع، تشخیص و راهکارهای علمی",
    description: "راهنمای کامل یبوست: انواع یبوست حاد و مزمن، علل شایع، تأثیر تغذیه و فعالیت بدنی، روش‌های تشخیص و درمان علمی",
    image: constipationImage,
    link: "/articles/constipation",
    category: "عمومی",
    date: "1403/11/07"
  },
  {
    id: 1004,
    title: "درد شکم؛ علل، انواع، تشخیص و مدیریت",
    description: "راهنمای کامل درد شکم: انواع درد حاد و مزمن، علل شایع، علائم هشدار و روش‌های تشخیص و درمان",
    image: abdominalPainImage,
    link: "/articles/abdominal-pain",
    category: "عمومی",
    date: "1403/11/06"
  },
  {
    id: 1003,
    title: "ورم پا؛ انواع، علل، تشخیص و درمان",
    description: "راهنمای جامع ورم پا شامل انواع ادم، علل احتباس مایع، تشخیص DVT و روش‌های درمانی",
    image: legSwellingImage,
    link: "/articles/leg-swelling",
    category: "عمومی",
    date: "1403/11/05"
  },
  {
    id: 1002,
    title: "تأثیرات علمی ویتامین‌ها در زمان سرماخوردگی",
    description: "بررسی کامل شواهد علمی درباره تأثیر ویتامین C، D، E و A در پیشگیری و درمان سرماخوردگی",
    image: vitaminsColdImage,
    link: "/articles/vitamins-cold",
    category: "تغذیه",
    date: "1403/11/04"
  },
  {
    id: 1001,
    title: "ویتامین E؛ نقش، کاربردها و نکاتی که باید بدانیم",
    description: "راهنمای جامع ویتامین E: عملکرد، منابع غذایی، نیاز روزانه، علائم کمبود و احتیاط‌های مصرف مکمل",
    image: vitaminEImage,
    link: "/articles/vitamin-e",
    category: "تغذیه",
    date: "1403/11/03"
  }
];