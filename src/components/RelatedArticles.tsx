import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface RelatedArticle {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-3xl font-bold text-foreground mb-6">مقالات مرتبط</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link key={index} to={article.link} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image && article.image.trim() !== "" ? article.image : "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== window.location.origin + "/placeholder.svg") {
                      img.src = "/placeholder.svg";
                    }
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary font-medium text-sm">
                  <span>ادامه مطلب</span>
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:mr-3 transition-all" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
