import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";
import { getLatestArticles } from "@/content/allArticles";

const RecentArticles = () => {
  // گرفتن 6 مقاله جدید از منبع مرکزی - کاملاً خودکار
  const latestArticles = getLatestArticles(6);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            جدیدترین مقالات پزشکی
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            آخرین مطالب آموزشی و علمی در حوزه سلامت و پزشکی توسط تیم تخصصی نوید زندگی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <Link to={article.link} className="block">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </Link>
              <CardHeader className="flex-none">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  {article.date && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  )}
                </div>
                <Link to={article.link}>
                  <CardTitle className="text-base font-bold leading-tight hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {article.description}
                </CardDescription>
                <Link 
                  to={article.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                >
                  مطالعه مقاله
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/articles"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            مشاهده همه مقالات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
