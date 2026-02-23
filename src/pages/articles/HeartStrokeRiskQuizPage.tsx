import { useState } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import quizImage from "@/assets/heart-stroke-risk-quiz.jpg";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";
import hiddenStrokeImage from "@/assets/hidden-stroke-heart-attack-symptoms.jpg";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type Answer = "a" | "b" | "c" | null;
type Q5Answer = string[];

interface QuizState {
  q1: Answer;
  q2: Answer;
  q3: Answer;
  q4: Answer;
  q5: Q5Answer;
}

const HeartStrokeRiskQuizPage = () => {
  const [answers, setAnswers] = useState<QuizState>({
    q1: null, q2: null, q3: null, q4: null, q5: []
  });
  const [showResult, setShowResult] = useState(false);

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تست آنلاین ریسک سکته قلبی و مغزی", url: "/articles/heart-stroke-risk-quiz" }
  ];

  const handleAnswer = (question: keyof Omit<QuizState, "q5">, value: Answer) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
    setShowResult(false);
  };

  const handleQ5Toggle = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      q5: prev.q5.includes(value)
        ? prev.q5.filter(v => v !== value)
        : [...prev.q5, value]
    }));
    setShowResult(false);
  };

  const getResult = () => {
    const aCount = [answers.q1, answers.q2, answers.q3, answers.q4].filter(a => a === "a").length;
    const bCount = [answers.q1, answers.q2, answers.q3, answers.q4].filter(a => a === "b").length;
    const hasHistory = answers.q5.length > 0 && !answers.q5.includes("none");

    if (aCount >= 2) return "red";
    if (bCount >= 1 && hasHistory) return "orange";
    if (aCount === 1 && hasHistory) return "orange";
    if (aCount === 1) return "orange";
    return "green";
  };

  const allAnswered = answers.q1 && answers.q2 && answers.q3 && answers.q4 && (answers.q5.length > 0);

  const handleSubmit = () => {
    if (allAnswered) setShowResult(true);
  };

  const result = getResult();

  const optionClass = (selected: boolean) =>
    `block w-full text-right p-4 rounded-lg border-2 cursor-pointer transition-all ${
      selected
        ? "border-primary bg-primary/10 font-semibold"
        : "border-border hover:border-primary/50 bg-card"
    }`;

  const checkboxClass = (selected: boolean) =>
    `flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
      selected
        ? "border-primary bg-primary/10"
        : "border-border hover:border-primary/50 bg-card"
    }`;

  const faqs = [
    {
      question: "آیا این تست جایگزین مراجعه به پزشک است؟",
      answer: "خیر، این تست صرفاً یک ابزار غربالگری اولیه بر اساس استانداردهای انجمن قلب آمریکاست. تشخیص قطعی نیاز به معاینه پزشک متخصص و انجام تست‌های تشخیصی دارد."
    },
    {
      question: "اگر نتیجه تست قرمز شد چه کار کنم؟",
      answer: "فوراً با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید تا تیم متخصص نوید زندگی همراه با تجهیزات تشخیصی به منزل شما اعزام شود. از هرگونه فعالیت بدنی خودداری کنید."
    },
    {
      question: "هر چند وقت یکبار باید این تست را انجام دهم؟",
      answer: "اگر بالای ۵۰ سال هستید یا سابقه بیماری قلبی دارید، هر ۶ ماه یکبار انجام چک‌آپ قلبی (اکو و آزمایش خون) در منزل توصیه می‌شود."
    },
    {
      question: "آیا نتیجه سبز یعنی هیچ مشکلی ندارم؟",
      answer: "نتیجه سبز به معنای عدم وجود علائم فوری است، اما بسیاری از بیماری‌های قلبی بدون علامت پیشرفت می‌کنند. چک‌آپ دوره‌ای برای افراد بالای ۵۰ سال ضروری است."
    }
  ];

  const relatedArticles = [
    {
      title: "علائم پنهان سکته قلبی و مغزی",
      description: "علائم فریبنده سکته و تشخیص سریع با تجهیزات پرتابل در منزل",
      image: hiddenStrokeImage,
      link: "/articles/hidden-stroke-heart-attack-symptoms",
      category: "قلب و عروق"
    },
    {
      title: "سکته قلبی خاموش؛ وقتی قلب بدون فریاد آسیب می‌بیند",
      description: "مکانیسم، علائم پنهان و تشخیص سکته قلبی خاموش",
      image: silentHeartAttackImage,
      link: "/articles/silent-heart-attack",
      category: "قلب و عروق"
    },
    {
      title: "آپنه خواب و خروپف؛ زنگ خطر ایست قلبی",
      description: "مکانیسم تخریب قلب توسط آپنه خواب و پایش شبانه در منزل",
      image: sleepApneaHeartImage,
      link: "/articles/sleep-apnea-heart",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تست آنلاین ریسک سکته قلبی و مغزی | نوید زندگی"
        description="تست رایگان غربالگری ریسک سکته قلبی و مغزی بر اساس استانداردهای انجمن قلب آمریکا. ارزیابی فوری علائم و اعزام متخصص به منزل."
        keywords="تست ریسک سکته قلبی، غربالگری سکته مغزی، تست آنلاین قلب، علائم سکته، ویزیت متخصص در منزل، نوید زندگی"
        canonical="https://navidzendegi.com/articles/heart-stroke-risk-quiz"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-02-23"
        modifiedTime="2026-02-23"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              🚨 تست آنلاین: آیا شما در معرض خطر جدی سکته قلبی یا مغزی هستید؟
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تیم پزشکی نوید زندگی</span>
              <span>•</span>
              <time dateTime="2026-02-23">۵ اسفند ۱۴۰۴</time>
            </div>
            <img
              src={quizImage}
              alt="تست آنلاین ریسک سکته قلبی و مغزی"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              loading="eager"
            />
            <p className="text-lg leading-relaxed text-foreground">
              این تست بر اساس استانداردهای انجمن قلب آمریکا (AHA) طراحی شده است. لطفاً با دقت پاسخ دهید. نتیجه این تست جایگزین مراجعه به پزشک نیست.
            </p>
          </header>

          <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg mb-8">
            <p className="text-foreground font-semibold">
              ⚠️ هشدار: این تست صرفاً یک ابزار غربالگری اولیه است. در صورت بروز علائم حاد، فوراً با اورژانس یا <a href="tel:09386117912" className="text-primary hover:underline">نوید زندگی (۰۹۳۸۶۱۱۷۹۱۲)</a> تماس بگیرید. خوددرمانی نکنید.
            </p>
          </div>

          {/* Quiz Section */}
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                ۱. آیا در حال حاضر احساس فشار، سنگینی یا سوزش در قفسه سینه دارید که به فک، گردن یا دست چپ می‌زند؟
              </h2>
              <div className="space-y-2">
                <button className={optionClass(answers.q1 === "a")} onClick={() => handleAnswer("q1", "a")}>
                  الف) بله، شدید است.
                </button>
                <button className={optionClass(answers.q1 === "b")} onClick={() => handleAnswer("q1", "b")}>
                  ب) بله، خفیف یا مبهم است.
                </button>
                <button className={optionClass(answers.q1 === "c")} onClick={() => handleAnswer("q1", "c")}>
                  ج) خیر.
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                ۲. آیا همراه با درد، دچار عرق سرد ناگهانی، حالت تهوع یا تنگی نفس شده‌اید؟
              </h2>
              <div className="space-y-2">
                <button className={optionClass(answers.q2 === "a")} onClick={() => handleAnswer("q2", "a")}>
                  الف) بله.
                </button>
                <button className={optionClass(answers.q2 === "b")} onClick={() => handleAnswer("q2", "b")}>
                  ب) فقط کمی تنگی نفس دارم.
                </button>
                <button className={optionClass(answers.q2 === "c")} onClick={() => handleAnswer("q2", "c")}>
                  ج) خیر.
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                ۳. آیا هنگام صحبت کردن دچار لکنت شده‌اید یا احساس می‌کنید کلمات را به سختی ادا می‌کنید؟
              </h2>
              <div className="space-y-2">
                <button className={optionClass(answers.q3 === "a")} onClick={() => handleAnswer("q3", "a")}>
                  الف) بله، ناگهانی شروع شده است.
                </button>
                <button className={optionClass(answers.q3 === "b")} onClick={() => handleAnswer("q3", "b")}>
                  ب) گاهی اوقات دچار فراموشی کلمات می‌شوم.
                </button>
                <button className={optionClass(answers.q3 === "c")} onClick={() => handleAnswer("q3", "c")}>
                  ج) خیر.
                </button>
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                ۴. اگر دستانتان را همزمان بالا بیاورید، آیا یکی از آن‌ها به سمت پایین سقوط می‌کند یا ضعیف است؟
              </h2>
              <div className="space-y-2">
                <button className={optionClass(answers.q4 === "a")} onClick={() => handleAnswer("q4", "a")}>
                  الف) بله، ضعف شدید در یک طرف دارم.
                </button>
                <button className={optionClass(answers.q4 === "b")} onClick={() => handleAnswer("q4", "b")}>
                  ب) کمی احساس گزگز یا مورمور دارم.
                </button>
                <button className={optionClass(answers.q4 === "c")} onClick={() => handleAnswer("q4", "c")}>
                  ج) خیر.
                </button>
              </div>
            </div>

            {/* Question 5 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                ۵. سوابق پزشکی شما شامل کدام یک از موارد زیر است؟ (چند مورد انتخاب کنید)
              </h2>
              <div className="space-y-2">
                {[
                  { value: "diabetes_bp", label: "دیابت یا فشار خون بالا" },
                  { value: "heart_history", label: "سابقه بیماری قلبی یا استنت‌گذاری" },
                  { value: "cholesterol_smoking", label: "چربی خون بالا یا مصرف سیگار" },
                  { value: "none", label: "هیچ‌کدام" }
                ].map(opt => (
                  <button
                    key={opt.value}
                    className={checkboxClass(answers.q5.includes(opt.value))}
                    onClick={() => {
                      if (opt.value === "none") {
                        setAnswers(prev => ({ ...prev, q5: prev.q5.includes("none") ? [] : ["none"] }));
                      } else {
                        handleQ5Toggle(opt.value);
                      }
                      setShowResult(false);
                    }}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                      answers.q5.includes(opt.value) ? "border-primary bg-primary" : "border-muted-foreground"
                    }`}>
                      {answers.q5.includes(opt.value) && <span className="text-primary-foreground text-xs">✓</span>}
                    </div>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleSubmit}
                disabled={!allAnswered}
              >
                📊 مشاهده نتیجه تست
              </Button>
              {!allAnswered && (
                <p className="text-sm text-muted-foreground mt-2">لطفاً به تمام سوالات پاسخ دهید.</p>
              )}
            </div>

            {/* Results */}
            {showResult && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {result === "red" && (
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-500 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                      <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">وضعیت قرمز (بحرانی)</h3>
                    </div>
                    <p className="text-foreground leading-relaxed text-lg">
                      شما در <strong>معرض خطر جدی</strong> هستید. هرگونه جابه‌جایی و فعالیت بدنی را متوقف کنید. <strong>همین حالا</strong> با تیم متخصص نوید زندگی تماس بگیرید تا تیم تشخیصی (نوار قلب و اکو) به همراه پزشک به بالین شما اعزام شود. زمان را هدر ندهید!
                    </p>
                    <a href="tel:09386117912" className="block">
                      <Button size="lg" className="w-full gap-2 text-lg py-6 bg-red-600 hover:bg-red-700">
                        <Phone className="w-5 h-5" />
                        تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                      </Button>
                    </a>
                  </div>
                )}

                {result === "orange" && (
                  <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-500 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-8 h-8 text-orange-600 shrink-0" />
                      <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-400">وضعیت نارنجی (هشدار)</h3>
                    </div>
                    <p className="text-foreground leading-relaxed text-lg">
                      علائم شما <strong>مشکوک</strong> است و با توجه به سوابق بیماری، ریسک سکته پنهان وجود دارد. توصیه می‌شود جهت پیشگیری و اطمینان، درخواست <strong>ویزیت متخصص و چک‌آپ قلبی در منزل</strong> ثبت کنید. پیشگیری ارزان‌تر و ایمن‌تر از درمان است.
                    </p>
                    <a href="tel:09386117912" className="block">
                      <Button size="lg" className="w-full gap-2 text-lg py-6 bg-orange-600 hover:bg-orange-700">
                        <Phone className="w-5 h-5" />
                        درخواست ویزیت متخصص: ۰۹۳۸۶۱۱۷۹۱۲
                      </Button>
                    </a>
                  </div>
                )}

                {result === "green" && (
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-500 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600 shrink-0" />
                      <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">وضعیت سبز (احتیاط)</h3>
                    </div>
                    <p className="text-foreground leading-relaxed text-lg">
                      ریسک فوری مشاهده نشد، اما اگر <strong>بالای ۵۰ سال</strong> هستید، انجام یک <strong>چک‌آپ دوره‌ای</strong> (<Link to="/services/echo-ecg" className="text-primary hover:underline">اکو</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون</Link>) در منزل برای اطمینان از سلامت عروق توصیه می‌شود.
                    </p>
                    <a href="tel:09386117912" className="block">
                      <Button size="lg" variant="outline" className="w-full gap-2 text-lg py-6 border-green-600 text-green-700 hover:bg-green-100">
                        <Phone className="w-5 h-5" />
                        رزرو چک‌آپ دوره‌ای: ۰۹۳۸۶۱۱۷۹۱۲
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Additional content */}
          <div className="prose prose-lg max-w-none space-y-8 mt-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">چرا تشخیص زودهنگام حیاتی است؟</h2>
              <p className="text-foreground leading-relaxed">
                بر اساس آمار انجمن قلب آمریکا، هر ثانیه تأخیر در تشخیص <Link to="/articles/hidden-stroke-heart-attack-symptoms" className="text-primary hover:underline">سکته قلبی و مغزی</Link>، میلیون‌ها سلول را نابود می‌کند. بسیاری از <Link to="/articles/silent-heart-attack" className="text-primary hover:underline">سکته‌های قلبی خاموش</Link> با علائم فریبنده مثل سوزش سردل یا درد فک بروز می‌کنند. مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با اعزام تجهیزات تشخیصی (<Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب و اکو</Link>) به منزل، فاصله تا درمان را به حداقل می‌رساند.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">نگران سلامت قلب خود هستید؟</h3>
              <p className="text-foreground leading-relaxed mb-4">
                تیم متخصص <strong>نوید زندگی</strong> آماده اعزام فوری پزشک به همراه <strong>نوار قلب، اکو و آزمایش خون</strong> به منزل شماست.
              </p>
              <a href="tel:09386117912">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  تماس: ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
              </a>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع علمی</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>American Heart Association (AHA): Warning Signs of Heart Attack and Stroke.</li>
                <li>World Stroke Organization (WSO): FAST Assessment Protocol.</li>
                <li>Mayo Clinic: Heart attack symptoms: Know what's a medical emergency.</li>
              </ul>
            </section>
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <FAQSection faqs={faqs} />
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>
        </article>
      </main>
    </ArticleLayout>
  );
};

export default HeartStrokeRiskQuizPage;
