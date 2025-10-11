import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Calendar } from "lucide-react";
import { format } from "date-fns-jalali";

interface Comment {
  id: string;
  name: string;
  comment: string;
  reply: string | null;
  created_at: string;
  replied_at: string | null;
}

const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const pageUrl = window.location.pathname;

  useEffect(() => {
    fetchComments();
  }, [pageUrl]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("page_url", pageUrl)
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      setComments(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      toast({
        title: "خطا",
        description: "لطفاً نام و نظر خود را وارد کنید",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("comments").insert({
      page_url: pageUrl,
      name: name.trim(),
      email: email.trim() || null,
      comment: comment.trim(),
    });

    if (error) {
      toast({
        title: "خطا",
        description: "ارسال نظر با مشکل مواجه شد. لطفاً دوباره تلاش کنید",
        variant: "destructive",
      });
    } else {
      toast({
        title: "موفق",
        description: "نظر شما با موفقیت ثبت شد و پس از تأیید نمایش داده خواهد شد",
      });
      setName("");
      setEmail("");
      setComment("");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <MessageCircle className="w-8 h-8 text-primary" />
            پرسش و پاسخ
          </h2>
          <p className="text-muted-foreground">
            سوالات و نظرات خود را با ما در میان بگذارید
          </p>
        </div>

        {/* Comment Form */}
        <Card className="p-6 mb-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">نام *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام خود را وارد کنید"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <Label htmlFor="email">ایمیل (اختیاری)</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل خود را وارد کنید"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="comment">نظر یا پرسش شما *</Label>
              <Textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="نظر یا سوال خود را بنویسید..."
                required
                maxLength={1000}
                rows={4}
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "در حال ارسال..." : "ارسال نظر"}
            </Button>
          </form>
        </Card>

        {/* Comments List */}
        {comments.length > 0 ? (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              نظرات و پرسش‌ها ({comments.length})
            </h3>
            {comments.map((item) => (
              <Card key={item.id} className="p-6 shadow-md">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(item.created_at), "yyyy/MM/dd")}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{item.comment}</p>
                </div>

                {item.reply && (
                  <div className="mr-6 p-4 bg-primary/5 border-r-4 border-primary rounded">
                    <div className="font-semibold text-primary mb-2">
                      پاسخ نوید زندگی:
                    </div>
                    <p className="text-foreground leading-relaxed">{item.reply}</p>
                    {item.replied_at && (
                      <div className="text-xs text-muted-foreground mt-2">
                        {format(new Date(item.replied_at), "yyyy/MM/dd")}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            هنوز نظری ثبت نشده است. اولین نفر باشید!
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentsSection;
