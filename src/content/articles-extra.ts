import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";
import legSwellingImage from "@/assets/leg-swelling-article.jpg";

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