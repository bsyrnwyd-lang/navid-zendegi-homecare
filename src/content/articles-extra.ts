import vitaminEImage from "@/assets/vitamin-e-article.jpg";

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
    id: 1001,
    title: "ویتامین E؛ نقش، کاربردها و نکاتی که باید بدانیم",
    description: "راهنمای جامع ویتامین E: عملکرد، منابع غذایی، نیاز روزانه، علائم کمبود و احتیاط‌های مصرف مکمل",
    image: vitaminEImage,
    link: "/articles/vitamin-e",
    category: "تغذیه",
    date: "1403/11/03"
  }
];