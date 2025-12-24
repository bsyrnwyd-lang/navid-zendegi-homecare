import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import cholesterolTestImage from "@/assets/cholesterol-test-article.jpg";
import breathingTreatmentImage from "@/assets/shortness-breath-treatment.jpg";
import neurobionImage from "@/assets/neurobion-ampoule-article.jpg";
import heatExhaustionImage from "@/assets/heat-exhaustion-article.jpg";
import gardasilImage from "@/assets/gardasil-vaccine-article.jpg";
import medicalConsultationImage from "@/assets/medical-consultation-article.jpg";
import hpvPoolImage from "@/assets/hpv-pool-article.jpg";
import nailSpotsImage from "@/assets/nail-spots-article.jpg";
import strokeImage from "@/assets/neurology.jpg";
import heartAttackImage from "@/assets/cardiology-home-visit.jpg";
import influenzaImage from "@/assets/infectious-disease.jpg";
import smokingImage from "@/assets/iranian-cardiology-home.jpg";
import aiCardiologyImage from "@/assets/ai-cardiology-article.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import migrainImage from "@/assets/migraine-article.jpg";
import meningitisImage from "@/assets/meningitis-article.jpg";
import airPollutionImage from "@/assets/air-pollution-article.jpg";
import coffeeHeartImage from "@/assets/coffee-heart-article.jpg";
import pediatricsImage from "@/assets/pediatrics.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import hivAidsImage from "@/assets/hiv-aids-article.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import hyperhidrosisImage from "@/assets/hyperhidrosis-article.jpg";
import headacheImage from "@/assets/headache-article.jpg";
import dizzinessImage from "@/assets/dizziness-comprehensive.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import ivTherapyImage from "@/assets/iv-therapy-home.jpg";
import patientDemandsImage from "@/assets/patient-demands-article.jpg";
import feverTrackingImage from "@/assets/fever-tracking-article.jpg";
import greenTeaImage from "@/assets/green-tea-weight-loss-article.jpg";
import breastMassImage from "@/assets/breast-mass-article.jpg";
import skinItchingImage from "@/assets/skin-itching-article.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";
import hairLossImage from "@/assets/hair-loss-article.jpg";
import skinMolesImage from "@/assets/skin-moles-article.jpg";
import rubellaPregnancyImage from "@/assets/rubella-pregnancy-article.jpg";
import angiographyImage from "@/assets/angiography-article.jpg";
import postAngiographyMedicationsImage from "@/assets/post-angiography-medications.jpg";
import angiographyRecoveryImage from "@/assets/angiography-recovery.jpg";
import postAngiographyLiftingImage from "@/assets/post-angiography-lifting.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import cocaineDangersImage from "@/assets/cocaine-dangers.jpg";
import marijuanaEffectsImage from "@/assets/marijuana-effects.jpg";
import methamphetamineEffectsImage from "@/assets/methamphetamine-effects.jpg";
import pantoprazoleImage from "@/assets/pantoprazole-medication.jpg";
import adhdImage from "@/assets/adhd-disorder.jpg";
import sleepTechniquesImage from "@/assets/sleep-techniques.jpg";
import sacubitrilValsartanImage from "@/assets/sacubitril-valsartan.jpg";
import valsartanImage from "@/assets/valsartan-medication.jpg";
import sertralineImage from "@/assets/sertraline-medication.jpg";
import botulismWarningImage from "@/assets/botulism-warning.jpg";
import gynecologyImage from "@/assets/gynecology.jpg";
import elderlyCareImage from "@/assets/elderly-care-home.jpg";
import cuppingTherapyImage from "@/assets/cupping-therapy-home.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import adultFeverImage from "@/assets/adult-fever-article.jpg";
import echoIndicationsImage from "@/assets/echo-indications-article.jpg";
import afStrokeImage from "@/assets/af-stroke-risk-article.jpg";
import dexamethasoneImage from "@/assets/dexamethasone-injection.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import asthmaImage from "@/assets/asthma-treatment.jpg";
import aspirinImage from "@/assets/aspirin-medication.jpg";
import rosuvastatinImage from "@/assets/rosuvastatin-medication.jpg";
import bisopropolImage from "@/assets/bisoprolol-medication.jpg";
import osteoarthritisImage from "@/assets/osteoarthritis-treatment.jpg";
import varicoseVeinsImage from "@/assets/varicose-veins-article.jpg";
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import clopidogrelImage from "@/assets/clopidogrel-medication.jpg";
import yogaHeartImage from "@/assets/yoga-heart-health.jpg";
import dashDietImage from "@/assets/dash-diet.jpg";
import normalBPImage from "@/assets/normal-blood-pressure.jpg";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";
import aspirationPneumoniaImage from "@/assets/aspiration-pneumonia.jpg";
import citalopramImage from "@/assets/citalopram-antidepressant.jpg";
import opiumHeartImage from "@/assets/opium-heart-effects.jpg";
import telmisartanImage from "@/assets/telmisartan-medication.jpg";
import diabetesPregnancyImage from "@/assets/diabetes-pregnancy.jpg";
import maleUTIImage from "@/assets/male-uti-article.jpg";
import herniatedDiscImage from "@/assets/herniated-disc.jpg";
import appendicitisImage from "@/assets/appendicitis.jpg";
import ginsengImage from "@/assets/ginseng-article.jpg";
import herniaPainImage from "@/assets/hernia-pain-article.jpg";
import medicalAnxietyImage from "@/assets/medical-anxiety-article.jpg";
import eveningPrimroseOilImage from "@/assets/evening-primrose-oil-article.jpg";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";
import vitaminHealthImage from "@/assets/vitamins-health-article.jpg";
import drugCardiovascularImage from "@/assets/drug-cardiovascular-effects.jpg";
import pregnancySupplementsImage from "@/assets/pregnancy-supplements.jpg";
import airPollutionEffectsImage from "@/assets/air-pollution-article.jpg";
import childrenAirPollutionImage from "@/assets/children-air-pollution.jpg";
import mouthUlcerImage from "@/assets/mouth-ulcer-article.jpg";
import pressureInjuryImage from "@/assets/pressure-injury-care.jpg";
import cardiacRehabImage from "@/assets/cardiac-rehab-exercise.jpg";
import troponinImage from "@/assets/troponin-test.jpg";
import annualScreeningImage from "@/assets/annual-screening-tests.jpg";
import hpvVaccineImage from "@/assets/hpv-vaccine-article.jpg";
import trifluoperazineImage from "@/assets/trifluoperazine-medication.jpg";
import bloodPressureMeasurementImage from "@/assets/blood-pressure-measurement.jpg";
import cervicalDiscImage from "@/assets/cervical-disc-article.jpg";
import pregnancySleepImage from "@/assets/pregnancy-sleep-article.jpg";
import huntingtonDiseaseImage from "@/assets/huntington-disease-article.jpg";
import smaImage from "@/assets/sma-article.jpg";
import thrombolyticAgentsImage from "@/assets/thrombolytic-agents-article.jpg";
import dvtAnticoagulantImage from "@/assets/dvt-anticoagulant-article.jpg";
import aiEthicsMedicalImage from "@/assets/ai-ethics-medical-article.jpg";
import fluMortalityImage from "@/assets/flu-mortality-article.jpg";
import fluMedicationsImage from "@/assets/flu-treatment-medications.jpg";
import fluTransmissionImage from "@/assets/flu-transmission-article.jpg";
import botoxImage from "@/assets/botox-treatment-article.jpg";
import coldVsFluImage from "@/assets/cold-vs-flu-article.jpg";
import greenTeaHealthImage from "@/assets/green-tea-health-article.jpg";
import strepThroatImage from "@/assets/strep-throat-article.jpg";
import zincSupplementImage from "@/assets/zinc-supplement-article.jpg";
import earInfectionImage from "@/assets/ear-infection-article.jpg";
import ironSupplementImage from "@/assets/iron-supplement-article.jpg";
import magnesiumSupplementImage from "@/assets/magnesium-supplement-article.jpg";
import phosphorusSupplementImage from "@/assets/phosphorus-supplement-article.jpg";
import calciumSupplementImage from "@/assets/calcium-supplement-article.jpg";
import weightLossInjectionsImage from "@/assets/weight-loss-injection-article.jpg";
import hemoglobinImage from "@/assets/hemoglobin-article.jpg";
import whiteBloodCellsImage from "@/assets/white-blood-cells-article.jpg";
import metforminImage from "@/assets/metformin-medication.jpg";
import tiltTableTestImage from "@/assets/tilt-table-test.jpg";
import injectionHomeImage from "@/assets/iranian-injection-home.jpg";
import infectiousDiseaseImage from "@/assets/infectious-disease.jpg";
import tuberculosisImage from "@/assets/tuberculosis-article.jpg";
import tetanusImage from "@/assets/tetanus-article.jpg";
import pneumoniaImage from "@/assets/pneumonia-article.jpg";
import { extraArticles } from "@/content/articles-extra";

// دیکشنری مترادف‌ها و کلمات مرتبط فارسی
const synonymDictionary: Record<string, string[]> = {
  'قلب': ['کاردیولوژی', 'قلبی', 'عروق', 'قلبی عروقی', 'کرونر', 'عروقی'],
  'فشار': ['فشارخون', 'هیپرتانسیون', 'فشارخون بالا', 'bp'],
  'دیابت': ['قند', 'قندخون', 'شکر', 'شیرین'],
  'سردرد': ['میگرن', 'مغزی', 'سر درد'],
  'افسردگی': ['دپرسیون', 'افسرده', 'خلق'],
  'اضطراب': ['استرس', 'نگرانی', 'وسواس'],
  'تب': ['تب و لرز', 'حرارت', 'یخ کردن'],
  'سرفه': ['سرماخوردگی', 'آنفلوانزا', 'سرما'],
  'درد': ['درد و ناراحتی', 'کمردرد'],
  'بارداری': ['حاملگی', 'زایمان', 'باردار'],
  'کودک': ['نوزاد', 'بچه', 'کودکان'],
  'دارو': ['داروی', 'قرص', 'دوا', 'دواه', 'مصرف دارو'],
  'تغذیه': ['رژیم', 'خوراکی', 'غذا', 'ویتامین'],
  'آنژیو': ['آنژیوگرافی', 'کاتتریزاسیون'],
  'وارفارین': ['وارفارن', 'ضد انعقاد'],
  'کلسترول': ['کلستریل', 'کلسترل', 'چربی خون'],
  'اکو': ['اکوکاردیوگرافی', 'سونوگرافی قلب', 'اکوی قلب'],
  'ریه': ['ریوی', 'تنفس', 'تنفسی', 'پنومونی'],
  'جراحی': ['عمل', 'آپاندیس'],
};

// تابع نرمال‌سازی متن فارسی
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/ئ/g, 'ی')
    .replace(/ؤ/g, 'و')
    .replace(/إ|أ/g, 'ا')
    .replace(/ه‌/g, 'ه')
    .replace(/ـ/g, '');
};

// تابع محاسبه فاصله Levenshtein برای تشخیص غلط‌های تایپی
const levenshteinDistance = (str1: string, str2: string): number => {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
};

// تابع بررسی تطابق مفهومی با استفاده از دیکشنری مترادف
const hasSemanticMatch = (text: string, query: string): boolean => {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);

  // بررسی تطابق مستقیم
  if (normalizedText.includes(normalizedQuery)) return true;

  // بررسی مترادف‌ها
  for (const [key, synonyms] of Object.entries(synonymDictionary)) {
    const normalizedKey = normalizeText(key);
    
    // اگر کلید در query یافت شد
    if (normalizedQuery.includes(normalizedKey) || levenshteinDistance(normalizedQuery, normalizedKey) <= 2) {
      // بررسی کنیم که آیا متن شامل مترادف‌ها هست
      for (const synonym of synonyms) {
        const normalizedSynonym = normalizeText(synonym);
        if (normalizedText.includes(normalizedSynonym) || 
            levenshteinDistance(normalizedText, normalizedSynonym) <= 2) {
          return true;
        }
      }
    }

    // اگر مترادف در query یافت شد
    for (const synonym of synonyms) {
      const normalizedSynonym = normalizeText(synonym);
      if (normalizedQuery.includes(normalizedSynonym) || 
          levenshteinDistance(normalizedQuery, normalizedSynonym) <= 2) {
        // بررسی کنیم که آیا متن شامل کلید اصلی هست
        if (normalizedText.includes(normalizedKey) || 
            levenshteinDistance(normalizedText, normalizedKey) <= 2) {
          return true;
        }
      }
    }
  }

  return false;
};

// تابع fuzzy search پیشرفته با تشخیص غلط‌های تایپی و تطابق مفهومی
const fuzzySearchArticles = (articles: any[], query: string) => {
  if (!query || query.length < 2) return articles;

  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(' ').filter(w => w.length >= 2);

  const scored = articles.map(article => {
    const normalizedTitle = normalizeText(article.title);
    const normalizedDesc = normalizeText(article.description || '');
    const normalizedCategory = normalizeText(article.category || '');

    let score = 0;

    // امتیاز برای تطابق کامل
    if (normalizedTitle.includes(normalizedQuery)) {
      score += 100;
    }
    if (normalizedDesc.includes(normalizedQuery)) {
      score += 50;
    }

    // امتیاز برای تطابق مفهومی (synonyms)
    if (hasSemanticMatch(normalizedTitle, normalizedQuery)) {
      score += 80;
    }
    if (hasSemanticMatch(normalizedDesc, normalizedQuery)) {
      score += 40;
    }
    if (hasSemanticMatch(normalizedCategory, normalizedQuery)) {
      score += 60;
    }

    // امتیاز برای تطابق هر کلمه جداگانه
    queryWords.forEach(word => {
      // تطابق مستقیم
      if (normalizedTitle.includes(word)) score += 30;
      if (normalizedDesc.includes(word)) score += 15;
      if (normalizedCategory.includes(word)) score += 20;

      // fuzzy matching برای تشخیص غلط‌های تایپی
      const titleWords = normalizedTitle.split(' ');
      const descWords = normalizedDesc.split(' ');

      titleWords.forEach(titleWord => {
        if (titleWord.length >= 3 && word.length >= 3) {
          const distance = levenshteinDistance(word, titleWord);
          const maxLen = Math.max(word.length, titleWord.length);
          if (distance <= 2 && distance / maxLen <= 0.4) {
            score += 25;
          }
        }
      });

      descWords.forEach(descWord => {
        if (descWord.length >= 3 && word.length >= 3) {
          const distance = levenshteinDistance(word, descWord);
          const maxLen = Math.max(word.length, descWord.length);
          if (distance <= 2 && distance / maxLen <= 0.4) {
            score += 12;
          }
        }
      });
    });

    return { article, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.article);
};

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const articlesPerPage = 12;

  const handleSearchSubmit = () => {
    setSearchQuery(tempSearchQuery);
    setSearchOpen(false);
    setCurrentPage(1);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };
  
  const articles = [
    {
      id: 1052,
      title: "ذات‌الریه (پنومونی) چیست؟ از علائم تا درمان در منزل",
      description: "راهنمای جامع ذات‌الریه: علائم، انواع پنومونی و خدمات اکسیژن‌تراپی، تزریق آنتی‌بیوتیک و ویزیت پزشک در منزل",
      image: pneumoniaImage,
      link: "/articles/pneumonia",
      category: "بیماری‌ها",
      date: "1403/10/04"
    },
    {
      id: 1051,
      title: "کزاز چیست؟ علائم، پیشگیری و تزریق واکسن در منزل",
      description: "بیماری کزاز یک فوریت پزشکی است. علائم، راه‌های پیشگیری و خدمات تزریق واکسن و سرم کزاز در منزل توسط نوید زندگی",
      image: tetanusImage,
      link: "/articles/tetanus",
      category: "بیماری‌ها",
      date: "1403/10/04"
    },
    {
      id: 1050,
      title: "بیماری سل چیست؟ علائم، راه‌های انتقال و مراقبت در منزل",
      description: "راهنمای جامع بیماری سل (TB): علائم، تفاوت سل نهفته و فعال، تشخیص و درمان با خدمات نمونه‌گیری و مراقبت در منزل",
      image: tuberculosisImage,
      link: "/articles/tuberculosis",
      category: "بیماری‌ها",
      date: "1403/10/02"
    },
    {
      id: 1049,
      title: "هپاتیت چیست؟ انواع، علائم و راهنمای درمان",
      description: "راهنمای کامل هپاتیت شامل انواع A، B و C، علائم، تشخیص و خدمات آزمایش و تزریق واکسن در منزل",
      image: infectiousDiseaseImage,
      link: "/articles/hepatitis",
      category: "بیماری‌ها",
      date: "1403/10/01"
    },
    {
      id: 1048,
      title: "تزریق HBIG در منزل: ایمونوگلوبولین هپاتیت B",
      description: "راهنمای کامل تزریق داروی HBIG شامل کاربردها در نوزادان، مواجهه شغلی، تماس جنسی و پیوند کبد با حفظ زنجیره سرد",
      image: injectionHomeImage,
      link: "/articles/hbig-injection",
      category: "خدمات در منزل",
      date: "1403/10/01"
    },
    {
      id: 1047,
      title: "تست تیلت (Tilt Table Test): تشخیص علل سنکوپ و غش کردن",
      description: "راهنمای کامل تست تیلت شامل مراحل انجام، تفسیر نتایج، کاربرد در تشخیص سنکوپ واسوواگال و افت فشار خون ارتوستاتیک",
      image: tiltTableTestImage,
      link: "/articles/tilt-table-test",
      category: "قلب و عروق",
      date: "1403/09/29"
    },
    {
      id: 1046,
      title: "متفورمین (Metformin): راهنمای کامل مکانیسم اثر و کاربردها",
      description: "راهنمای جامع متفورمین شامل مکانیسم اثر، کاربردها در دیابت نوع ۲ و PCOS، عوارض گوارشی، اسیدوز لاکتیک و نکات مهم مصرف",
      image: metforminImage,
      link: "/articles/metformin",
      category: "دارو",
      date: "1403/09/27"
    },
    {
      id: 1045,
      title: "گلبول‌های سفید (WBC): ارتش دفاعی بدن",
      description: "راهنمای کامل گلبول‌های سفید شامل انواع (نوتروفیل، لنفوسیت، مونوسیت)، نقش در سیستم ایمنی، لکوسیتوز و لکوپنی",
      image: whiteBloodCellsImage,
      link: "/articles/white-blood-cells",
      category: "سلامت عمومی",
      date: "1403/09/26"
    },
    {
      id: 1044,
      title: "هموگلوبین (Hemoglobin): ساختار، عملکرد و اهمیت بالینی",
      description: "راهنمای کامل هموگلوبین شامل ساختار مولکولی، نقش در انتقال اکسیژن، کم‌خونی، تالاسمی و هموگلوبینوپاتی‌ها",
      image: hemoglobinImage,
      link: "/articles/hemoglobin",
      category: "سلامت عمومی",
      date: "1403/09/26"
    },
    {
      id: 1043,
      title: "آمپول‌های لاغری: سماگلوتاید و لیراگلوتاید (GLP-1)",
      description: "بررسی علمی آمپول‌های لاغری GLP-1 شامل سماگلوتاید (Wegovy, Ozempic) و لیراگلوتاید (Saxenda)، مکانیسم اثر، اثربخشی و عوارض",
      image: weightLossInjectionsImage,
      link: "/articles/weight-loss-injections",
      category: "دارو",
      date: "1403/09/25"
    },
    {
      id: 1042,
      title: "کلسیم (Calcium): عنصر حیاتی، نقش‌ها و جذب",
      description: "راهنمای کامل کلسیم شامل نقش در سلامت استخوان و دندان، عملکرد عصبی-عضلانی، لخته شدن خون و اهمیت پایش درمانی",
      image: calciumSupplementImage,
      link: "/articles/calcium-supplement",
      category: "تغذیه",
      date: "1403/09/25"
    },
    {
      id: 1041,
      title: "فسفر (Phosphorus): نقش‌های حیاتی، جذب و کمبود",
      description: "راهنمای کامل فسفر شامل نقش در سلامت استخوان، تولید انرژی ATP، ساختار DNA، کمبود و زیادی فسفر و ملاحظات پزشکی",
      image: phosphorusSupplementImage,
      link: "/articles/phosphorus-supplement",
      category: "تغذیه",
      date: "1403/09/24"
    },
    {
      id: 1040,
      title: "منیزیم (Magnesium): عنصر حیاتی، نقش‌ها و مکمل‌یاری",
      description: "راهنمای کامل منیزیم شامل نقش در سلامت قلب، عضلات و اعصاب، علائم کمبود، منابع غذایی و اهمیت مکمل‌یاری",
      image: magnesiumSupplementImage,
      link: "/articles/magnesium-supplement",
      category: "تغذیه",
      date: "1403/09/23"
    },
    {
      id: 1039,
      title: "آهن (Iron): نقش‌ها، کمبود و میزان مصرف توصیه‌شده",
      description: "راهنمای کامل آهن شامل نقش در حمل اکسیژن، علائم کم‌خونی فقر آهن، میزان مصرف توصیه‌شده برای بزرگسالان و زنان باردار",
      image: ironSupplementImage,
      link: "/articles/iron-supplement",
      category: "تغذیه",
      date: "1403/09/23"
    },
    {
      id: 1038,
      title: "عفونت گوش: انواع، علائم و راهکارهای درمانی",
      description: "راهنمای کامل عفونت گوش شامل انواع عفونت (گوش میانی، خارجی، داخلی)، علائم در کودکان و بزرگسالان، تشخیص و درمان",
      image: earInfectionImage,
      link: "/articles/ear-infection",
      category: "سلامت عمومی",
      date: "1403/09/22"
    },
    {
      id: 1037,
      title: "زینک (روی): عنصر ضروری، نقش‌ها و مکمل‌یاری",
      description: "راهنمای کامل زینک شامل نقش در سیستم ایمنی، التیام زخم، سلامت پوست و مغز، منابع غذایی، علائم کمبود و مکمل‌یاری",
      image: zincSupplementImage,
      link: "/articles/zinc-supplement",
      category: "تغذیه",
      date: "1403/09/22"
    },
    {
      id: 1036,
      title: "گلو درد چرکی (Strep Throat): تشخیص، عامل بیماری و درمان",
      description: "راهنمای کامل گلو درد چرکی شامل علائم، تشخیص با آزمایش سریع، درمان آنتی‌بیوتیکی و پیشگیری از عوارض",
      image: strepThroatImage,
      link: "/articles/strep-throat",
      category: "سلامت عمومی",
      date: "1403/09/21"
    },
    {
      id: 1035,
      title: "چای سبز: فواید سلامتی، مکانیسم اثر و ترکیبات فعال",
      description: "راهنمای کامل فواید چای سبز شامل خواص آنتی‌اکسیدانی، تأثیر بر سلامت قلب و مغز، کنترل قند خون و خواص ضدسرطانی",
      image: greenTeaHealthImage,
      link: "/articles/green-tea-health",
      category: "تغذیه",
      date: "1403/09/21"
    },
    {
      id: 1034,
      title: "تفاوت سرماخوردگی و آنفولانزا: علائم، تشخیص و درمان",
      description: "مقایسه کامل سرماخوردگی و آنفولانزا شامل تفاوت علائم، شدت بیماری، روش‌های درمان و پیشگیری",
      image: coldVsFluImage,
      link: "/articles/cold-vs-flu",
      category: "سلامت عمومی",
      date: "1403/09/20"
    },
    {
      id: 1033,
      title: "بوتاکس: کاربردها، مکانیسم اثر و ملاحظات درمانی",
      description: "راهنمای کامل بوتاکس شامل مکانیسم اثر، کاربردهای زیبایی و درمانی، عوارض جانبی و ملاحظات مهم",
      image: botoxImage,
      link: "/articles/botox",
      category: "سلامت عمومی",
      date: "1403/09/20"
    },
    {
      id: 1032,
      title: "نحوه انتقال آنفولانزا: قطرات تنفسی، تماس و هوا",
      description: "راهنمای کامل مسیرهای انتقال آنفولانزا شامل قطرات تنفسی، تماس مستقیم و غیرمستقیم، انتقال هوایی و دوره واگیرداری",
      image: fluTransmissionImage,
      link: "/articles/influenza-transmission",
      category: "سلامت عمومی",
      date: "1403/09/20"
    },
    {
      id: 1031,
      title: "داروهای درمان آنفولانزا: ضدویروسی‌ها و درمان‌های حمایتی",
      description: "راهنمای جامع داروهای درمان آنفولانزا شامل تامیفلو، زانامیویر، بالوکساویر و درمان‌های حمایتی برای کاهش علائم",
      image: fluMedicationsImage,
      link: "/articles/influenza-medications",
      category: "دارو",
      date: "1403/09/19"
    },
    {
      id: 1030,
      title: "نرخ مرگ و میر آنفولانزا: آمار جهانی و گروه‌های پرخطر",
      description: "بررسی آمار مرگ و میر آنفولانزا در سطح جهانی، گروه‌های سنی پرخطر، تأثیر واکسیناسیون و مقایسه با پاندمی‌ها",
      image: fluMortalityImage,
      link: "/articles/influenza-mortality",
      category: "سلامت عمومی",
      date: "1403/09/19"
    },
    {
      id: 1029,
      title: "محدودیت‌ها و ملاحظات اخلاقی AI در تشخیص و درمان",
      description: "بررسی چالش‌های فنی، اخلاقی و حقوقی استفاده از هوش مصنوعی در پزشکی: مسئله جعبه سیاه، سوگیری داده‌ها و مسئولیت‌پذیری",
      image: aiEthicsMedicalImage,
      link: "/articles/ai-ethics-medical",
      category: "سلامت عمومی",
      date: "1403/09/18"
    },
    {
      id: 1028,
      title: "مقایسه هپارین و انوکساپارین در درمان DVT",
      description: "مقایسه فارماکولوژیک هپارین غیرکسر شده (UFH) و انوکساپارین (LMWH) در درمان ترومبوز ورید عمقی و کاربرد در خدمات پرستاری منزل",
      image: dvtAnticoagulantImage,
      link: "/articles/dvt-anticoagulants",
      category: "دارو",
      date: "1403/09/18"
    },
    {
      id: 1027,
      title: "مقایسه رتپلاز و آلتپلاز: عوامل ترومبولیتیک در درمان سکته قلبی",
      description: "مقایسه فارماکولوژیک آلتپلاز (tPA) و رتپلاز (rPA) در درمان سکته قلبی حاد، نقش تشخیص اورژانس در منزل و انتقال سریع بیمار",
      image: thrombolyticAgentsImage,
      link: "/articles/thrombolytic-agents",
      category: "قلب و عروق",
      date: "1403/09/17"
    },
    {
      id: 1026,
      title: "آتروفی عضلانی نخاعی (SMA): پاتوفیزیولوژی، طبقه‌بندی و درمان‌های نوین",
      description: "راهنمای جامع آتروفی عضلانی نخاعی: مکانیسم ژنتیکی، تیپ‌های بالینی، درمان‌های تعدیل‌کننده ژن و خدمات مراقبتی در منزل",
      image: smaImage,
      link: "/articles/sma",
      category: "سلامت عمومی",
      date: "1403/09/17"
    },
    {
      id: 1025,
      title: "بیماری هانتیگتون: اختلال نورودژنراتیو ارثی و پیشرونده",
      description: "راهنمای جامع بیماری هانتیگتون: مکانیسم ژنتیکی، علائم حرکتی (کوره‌آ) و شناختی، روش‌های تشخیص و درمان‌های حمایتی و توان‌بخشی",
      image: huntingtonDiseaseImage,
      link: "/articles/huntington-disease",
      category: "سلامت عمومی",
      date: "1403/09/15"
    },
    {
      id: 1024,
      title: "تأثیر کم‌خوابی مادران باردار بر رشد جنین و تکامل کودک",
      description: "بررسی علمی تأثیرات کم‌خوابی مادران باردار بر رشد جنین: افزایش خطر زایمان زودرس، محدودیت رشد داخل رحمی و مشکلات رفتاری کودک",
      image: pregnancySleepImage,
      link: "/articles/pregnancy-sleep",
      category: "زنان",
      date: "1403/09/15"
    },
    {
      id: 1023,
      title: "دیسک گردن: آسیب‌های دیسک بین مهره‌ای گردنی",
      description: "راهنمای جامع دیسک گردن شامل آناتومی، علائم رادیکولوپاتی و میلوپاتی گردنی، روش‌های تشخیص و درمان‌های محافظه‌کارانه و جراحی",
      image: cervicalDiscImage,
      link: "/articles/cervical-disc",
      category: "سلامت عمومی",
      date: "1403/09/15"
    },
    {
      id: 1022,
      title: "تری‌فلوئوپرازین: آنتی‌سایکوتیک تیپیکال فنوتییازینی",
      description: "راهنمای جامع داروی تری‌فلوئوپرازین شامل مکانیسم اثر، موارد مصرف در اسکیزوفرنی و اضطراب، عوارض جانبی خارج هرمی و هشدارهای حیاتی",
      image: trifluoperazineImage,
      link: "/articles/trifluoperazine",
      category: "دارو",
      date: "1403/09/15"
    },
    {
      id: 1021,
      title: "واکسن HPV: پیشگیری از سرطان دهانه رحم و بیماری‌های تناسلی",
      description: "راهنمای جامع واکسن HPV شامل انواع واکسن، سن مناسب تزریق، برنامه دوزبندی، اثربخشی و عوارض جانبی. خدمات تزریق واکسن در منزل.",
      image: hpvVaccineImage,
      link: "/articles/hpv-vaccine",
      category: "زنان",
      date: "1403/12/03"
    },
    {
      id: 1020,
      title: "آزمایشات و غربالگری‌های پزشکی سالانه بر اساس گروه‌های سنی",
      description: "راهنمای جامع آزمایشات و غربالگری‌های سالانه برای جوانان، میانسالان و سالمندان: چکاپ قند و چربی خون، ماموگرافی، کولونوسکوپی، تراکم استخوان و واکسیناسیون",
      image: annualScreeningImage,
      link: "/articles/annual-screening-tests",
      category: "سلامت عمومی",
      date: "1403/12/03"
    },
    {
      id: 1019,
      title: "تروپونین قلبی (Cardiac Troponin): بیومارکر طلایی سکته قلبی",
      description: "راهنمای جامع تروپونین قلبی: ساختار، عملکرد، اهمیت در تشخیص سکته قلبی، آزمایش‌های حساسیت بالا و علل غیرایسکمیک افزایش تروپونین",
      image: troponinImage,
      link: "/articles/troponin",
      category: "قلب و عروق",
      date: "1403/12/03"
    },
    {
      id: 1018,
      title: "نقش ورزش در توانبخشی قلبی (Cardiac Rehabilitation)",
      description: "راهنمای جامع توانبخشی قلبی: فواید ورزش برای بیماران قلبی، مراحل برنامه، انواع تمرینات هوازی و مقاومتی و تأثیرات بر بقاء و کیفیت زندگی",
      image: cardiacRehabImage,
      link: "/articles/cardiac-rehab",
      category: "قلب و عروق",
      date: "1403/12/03"
    },
    {
      id: 1017,
      title: "زخم بستر (آسیب فشاری): علل، مراحل و درمان تخصصی",
      description: "راهنمای جامع زخم بستر: مکانیسم ایجاد، عوامل خطر، طبقه‌بندی چهار مرحله‌ای، روش‌های پیشگیری و درمان حرفه‌ای. مراقبت تخصصی از زخم بستر در منزل",
      image: pressureInjuryImage,
      link: "/articles/pressure-injury",
      category: "عمومی",
      date: "1403/12/03"
    },
    {
      id: 1016,
      title: "آفت دهانی (RAS): علل، انواع و درمان بر اساس منابع دانشگاهی",
      description: "راهنمای جامع آفت دهانی عودکننده: طبقه‌بندی انواع آفت (مینور، ماژور، هرپتی‌فرم)، علل ایجاد، کمبودهای تغذیه‌ای و درمان موضعی و سیستمیک",
      image: mouthUlcerImage,
      link: "/articles/mouth-ulcer",
      category: "عمومی",
      date: "1403/12/02"
    },
    {
      id: 1015,
      title: "تأثیر آلودگی هوا بر سلامت کودکان: آسیب‌های ریوی، عصبی و رشدی",
      description: "بررسی جامع تأثیرات مخرب آلودگی هوا بر سیستم تنفسی، مغز و رشد کودکان. آسیب‌پذیری بالای کودکان در برابر PM2.5 و تأثیرات بر بهره هوشی، آسم و بیماری‌های تنفسی",
      image: childrenAirPollutionImage,
      link: "/articles/children-air-pollution",
      category: "محیط زیست و سلامت",
      date: "1403/12/01"
    },
    {
      id: 1014,
      title: "داروی سرتالین (Sertraline) - زولوفت",
      description: "راهنمای جامع داروی سرتالین (Zoloft) برای درمان افسردگی، اضطراب و OCD. مکانیسم اثر SSRIs، عوارض جانبی و هشدارهای FDA.",
      image: sertralineImage,
      link: "/articles/sertraline",
      category: "دارو",
      date: "1403/10/29"
    },
    {
      id: 1013,
      title: "والزارتان (دیووان): موارد مصرف، عوارض جانبی و نکات مهم",
      description: "راهنمای جامع داروی والزارتان برای درمان فشار خون بالا و نارسایی قلبی. آشنایی با مکانیسم اثر، عوارض جانبی و هشدارهای مهم.",
      image: valsartanImage,
      link: "/articles/valsartan",
      category: "دارو",
      date: "1403/10/29"
    },
    {
      id: 1012,
      title: "داروی ساکوبیتریل/والزارتان (Entresto): کاربردها، مکانیسم اثر و عوارض جانبی",
      description: "راهنمای جامع داروی ترکیبی ساکوبیتریل/والزارتان (انترستو) برای درمان نارسایی قلبی: ARNI، موارد مصرف و هشدارهای مهم",
      image: sacubitrilValsartanImage,
      link: "/articles/sacubitril-valsartan",
      category: "دارو",
      date: "1403/10/29"
    },
    {
      id: 1011,
      title: "راهکارهای کمک به خواب رفتن: از تکنیک‌های تنفسی تا مکمل‌های دارویی",
      description: "تکنیک‌های علمی برای بهبود خواب شامل تنفس دیافراگمی، بهداشت خواب، ملاتونین و داروهای خواب‌آور",
      image: sleepTechniquesImage,
      link: "/articles/sleep-techniques",
      category: "سلامت عمومی",
      date: "1403/10/29"
    },
    {
      id: 1010,
      title: "اختلال کم‌توجهی/بیش‌فعالی (ADHD): انواع، علائم و روش‌های درمانی",
      description: "راهنمای جامع اختلال ADHD: انواع اختلال، علائم بی‌توجهی و بیش‌فعالی، علل ژنتیکی و محیطی، روش‌های تشخیص و درمان دارویی و رفتاردرمانی",
      image: adhdImage,
      link: "/articles/adhd",
      category: "روانپزشکی",
      date: "1403/10/29"
    },
    {
      id: 1009,
      title: "قرص پنتوپرازول (Pantoprazole): کاربردها، نحوه مصرف و عوارض جانبی",
      description: "راهنمای کامل قرص پنتوپرازول (PPI): کاربردها در درمان ریفلاکس و زخم معده، نحوه مصرف صحیح، عوارض جانبی طولانی‌مدت و تداخلات دارویی",
      image: pantoprazoleImage,
      link: "/articles/pantoprazole",
      category: "دارو",
      date: "1403/10/28"
    },
    {
      id: 94,
      title: "نحوه صحیح اندازه‌گیری فشار خون",
      description: "راهنمای کامل اندازه‌گیری دقیق فشار خون: آمادگی بیمار، وضعیت صحیح بدن، تکنیک استفاده از دستگاه و ثبت نتایج به مدت ۱۰ روز",
      image: bloodPressureMeasurementImage,
      link: "/articles/blood-pressure-measurement",
      category: "قلب و عروق",
      date: "1403/11/02"
    },
    {
      id: 93,
      title: "تأثیر آلودگی هوا بر قلب و ریه: شاخص AQI",
      description: "بررسی جامع اثرات آلودگی هوا بر سیستم قلبی-عروقی، ذرات PM2.5، شاخص کیفیت هوا (AQI) و راهکارهای حمایت تنفسی در منزل",
      image: airPollutionEffectsImage,
      link: "/articles/air-pollution-effects",
      category: "محیط زیست و سلامت",
      date: "1403/11/02"
    },
    {
      id: 92,
      title: "مکمل‌های ضروری دوران بارداری",
      description: "راهنمای جامع مکمل‌های حیاتی دوران بارداری: فولیک اسید، آهن، ویتامین D و سایر مکمل‌ها، زمان‌بندی مصرف و هشدارهای مهم",
      image: pregnancySupplementsImage,
      link: "/articles/pregnancy-supplements",
      category: "بارداری و زایمان",
      date: "1403/11/02"
    },
    {
      id: 91,
      title: "میزان نیاز روزانه ویتامین‌ها (RDA)",
      description: "راهنمای جامع مقادیر توصیه شده روزانه (RDA) ویتامین‌ها، هشدارهای مسمومیت با ویتامین (هایپرویتامینوزیس)، تداخلات دارویی و ضرورت مشاوره پزشکی قبل از مصرف مکمل",
      image: vitaminHealthImage,
      link: "/articles/vitamins-health",
      category: "تغذیه و رژیم",
      date: "1403/11/02"
    },
    {
      id: 90,
      title: "مواد مخدر و سکته قلبی: مکانیسم‌های آسیب‌رسان",
      description: "تأثیرات مخرب مواد مخدر بر قلب و عروق: افزایش خطر سکته قلبی و مغزی، اسپاسم کرونر، فشار خون و اهمیت ترک اعتیاد",
      image: drugCardiovascularImage,
      link: "/articles/drug-cardiovascular-effects",
      category: "قلب و عروق",
      date: "1403/11/02"
    },
    {
      id: 89,
      title: "ویتامین‌ها و سرماخوردگی: نقش علمی ویتامین C و زینک",
      description: "راهنمای جامع ویتامین‌ها در روزهای اول سرماخوردگی: دوز صحیح ویتامین C و زینک، زمان مصرف، تداخلات دارویی و هشدارهای ایمنی",
      image: vitaminsColdImage,
      link: "/articles/vitamins-cold",
      category: "تغذیه و سلامت",
      date: "1403/11/02"
    },
    {
      id: 88,
      title: "روغن گل مغربی: خواص GLA و مدیریت PMS",
      description: "راهنمای جامع روغن گل مغربی: نقش اسید گاما-لینولنیک، مدیریت سندرم پیش از قاعدگی، علائم یائسگی، درمان اگزما و تداخلات دارویی",
      image: eveningPrimroseOilImage,
      link: "/articles/evening-primrose-oil",
      category: "تغذیه و سلامت",
      date: "1403/11/02"
    },
    {
      id: 87,
      title: "مدیریت اضطراب پزشکی: حفظ خونسردی در مطب پزشک",
      description: "روش‌های علمی مدیریت اضطراب و ترس از مراجعه به پزشک: تکنیک‌های تنفس دیافراگمی، حواس‌پرتی و ارتباط مؤثر با تیم درمانی",
      image: medicalAnxietyImage,
      link: "/articles/medical-anxiety",
      category: "روانپزشکی",
      date: "1403/11/02"
    },
    {
      id: 86,
      title: "درد فتق: انواع، علائم خطر و درمان جراحی",
      description: "راهنمای جامع درد فتق شامل انواع فتق اینگوینال، نافی و شکاف مری، علائم خطرناک فتق خفه شده و ویزیت متخصص جراحی",
      image: herniaPainImage,
      link: "/articles/hernia-pain",
      category: "جراحی",
      date: "1403/11/02"
    },
    {
      id: 85,
      title: "جینسینگ: خواص آداپتوژنیک و ملاحظات مصرف",
      description: "راهنمای جامع جینسینگ: انواع آسیایی و آمریکایی، خواص برای انرژی و تمرکز، عوارض جانبی و تداخلات دارویی خطرناک",
      image: ginsengImage,
      link: "/articles/ginseng",
      category: "تغذیه و سلامت",
      date: "1403/11/02"
    },
    {
      id: 84,
      title: "آپاندیسیت: علائم، تشخیص فوری و درمان جراحی",
      description: "راهنمای کامل آپاندیسیت شامل علائم کلاسیک، مراحل پیشرفت درد، خطرات پارگی و فوریت مراجعه به اورژانس",
      image: appendicitisImage,
      link: "/articles/appendicitis",
      category: "اورژانس پزشکی",
      date: "1403/10/29"
    },
    {
      id: 83,
      title: "کمر درد: علل، تشخیص و درمان با فیزیوتراپی در منزل",
      description: "راهنمای جامع کمر درد شامل علل، انواع (حاد و مزمن)، فتق دیسک، درمان با فیزیوتراپی و ویزیت متخصص ارتوپدی در منزل",
      image: herniatedDiscImage,
      link: "/articles/low-back-pain",
      category: "درمان و سلامت",
      date: "1403/10/29"
    },
    {
      id: 82,
      title: "آیا آنژیوگرافی نیاز به بیهوشی کامل دارد؟",
      description: "بررسی کامل نوع بیهوشی و آرام‌بخشی در آنژیوگرافی: تفاوت بیهوشی کامل و آرام‌بخشی آگاهانه و مدیریت درد",
      image: angiographyImage,
      link: "/articles/angiography-sedation",
      category: "قلب و عروق",
      date: "1403/10/29"
    },
    {
      id: 81,
      title: "آنژیوگرافی قلب: مراحل انجام، مدیریت درد و مراقبت‌های حیاتی",
      description: "راهنمای کامل آنژیوگرافی کرونر: مراحل انجام، آیا دردناک است، مراقبت‌های پس از عمل و ویزیت متخصص قلب در منزل",
      image: angiographyImage,
      link: "/articles/angiography",
      category: "قلب و عروق",
      date: "1403/10/29"
    },
    {
      id: 79,
      title: "عفونت ادراری در مردان (UTI): علائم، علل و درمان تخصصی",
      description: "راهنمای جامع عفونت ادراری در مردان: علل زمینه‌ای، علائم، تشخیص با کشت ادرار و هشدار مهم درباره مصرف خودسرانه آنتی‌بیوتیک",
      image: maleUTIImage,
      link: "/articles/male-uti",
      category: "اورولوژی",
      date: "1403/10/28"
    },
    {
      id: 80,
      title: "دیابت در بارداری: تشخیص و مدیریت GDM",
      description: "راهنمای جامع دیابت بارداری شامل انواع، ریسک‌ها، غربالگری و مدیریت تخصصی با آزمایش در منزل",
      image: pregnancyNutritionImage,
      link: "/articles/diabetes-pregnancy",
      category: "بارداری و زایمان",
      date: "1403/10/28"
    },
    {
      id: 78,
      title: "تلمیزارتان (Telmisartan): داروی فشار خون با محافظت قلبی و کلیوی",
      description: "راهنمای جامع تلمیزارتان، داروی ARB نسل جدید برای کنترل فشار خون بالا با پوشش 24 ساعته و حفاظت از قلب و کلیه",
      image: telmisartanImage,
      link: "/articles/telmisartan",
      category: "دارو",
      date: "1403/10/28"
    },
    {
      id: 77,
      title: "اثرات تریاک بر روی قلب: مرور علمی بر پیامدهای قلبی–عروقی",
      description: "بررسی کامل اثرات مخرب تریاک (اوپیوم) بر سیستم قلبی-عروقی: افزایش خطر سکته قلبی، آترواسکلروز و آریتمی بر اساس شواهد علمی",
      image: opiumHeartImage,
      link: "/articles/opium-heart-effects",
      category: "سلامت قلب",
      date: "1403/11/15"
    },
    {
      id: 1008,
      title: "قرص سیتالوپرام (Citalopram): کاربردها، عوارض جانبی و هشدارهای حیاتی",
      description: "راهنمای کامل قرص سیتالوپرام (SSRI): مکانیسم عمل، کاربردها در درمان افسردگی و اضطراب، عوارض قلبی، سندرم سروتونین و ضرورت نظارت پزشکی",
      image: citalopramImage,
      link: "/articles/citalopram",
      category: "دارو",
      date: "1403/10/27"
    },
    {
      id: 75,
      title: "ذات‌الریه آسپیراسیونی؛ علل، تشخیص، درمان و پیشگیری",
      description: "راهنمای جامع ذات‌الریه آسپیراسیونی: علل، عوامل خطر، علائم، تشخیص، درمان و روش‌های پیشگیری از این عفونت خطرناک ریه",
      image: aspirationPneumoniaImage,
      link: "/articles/aspiration-pneumonia",
      category: "تنفسی",
      date: "1403/11/08"
    },
    {
      id: 74,
      title: "تغذیه در بارداری؛ اصول، نیازها و نکات مهم",
      description: "راهنمای کامل تغذیه در بارداری شامل نیازهای کالری، پروتئین، ویتامین‌ها، مدیریت تهوع و نکات عملی برای سلامت مادر و جنین",
      image: pregnancyNutritionImage,
      link: "/articles/pregnancy-nutrition",
      category: "تغذیه",
      date: "1403/11/08"
    },
    {
      id: 73,
      title: "سرگیجه؛ علل، تشخیص، درمان و نکات مهم",
      description: "راهنمای جامع سرگیجه: تعاریف، دسته‌بندی، علل شایع، تشخیص و درمان. اطلاعات کامل درباره BPPV، سرگیجه موقعیتی و زمان مراجعه ضروری",
      image: dizzinessImage,
      link: "/articles/dizziness",
      category: "عمومی",
      date: "1403/10/30"
    },
    {
      id: 72,
      title: "ویتامین E؛ نقش، کاربردها و نکاتی که باید بدانیم",
      description: "راهنمای جامع ویتامین E: عملکرد، منابع غذایی، نیاز روزانه، علائم کمبود و احتیاط‌های مصرف مکمل",
      image: vitaminEImage,
      link: "/articles/vitamin-e",
      category: "تغذیه",
      date: "1403/11/03"
    },
    {
      id: 71,
      title: "فشار خون نرمال چیست؟ راهنمای کامل اعداد ایدئال فشار خون",
      description: "فشار خون نرمال کمتر از 120/80 است. آشنایی با اعداد ایدئال، روش‌های اندازه‌گیری صحیح و راهکارهای حفظ فشار خون در محدوده سالم",
      image: normalBPImage,
      link: "/articles/normal-blood-pressure",
      category: "قلب و عروق",
      date: "1403/11/02"
    },
    {
      id: 70,
      title: "رژیم DASH؛ راهی علمی برای کاهش فشار خون و تقویت سلامت قلب",
      description: "راهنمای جامع رژیم غذایی DASH برای کنترل فشار خون بالا، کاهش چربی خون و پیشگیری از بیماری‌های قلبی با برنامه غذایی علمی",
      image: dashDietImage,
      link: "/articles/dash-diet",
      category: "تغذیه",
      date: "1403/11/02"
    },
    {
      id: 69,
      title: "یوگا و سلامت قلب: کاهش ریسک بیماری‌های قلبی با یوگا",
      description: "راهنمای جامع تأثیر یوگا بر سلامت قلب، کاهش فشار خون، بهبود پروفایل چربی خون و کاهش ریسک بیماری‌های قلبی",
      image: yogaHeartImage,
      link: "/articles/yoga-heart-health",
      category: "سبک زندگی",
      date: "1403/11/02"
    },
    {
      id: 68,
      title: "کلوپیدوگرل (Clopidogrel) چیست و چه کاربردهایی دارد؟",
      description: "راهنمای جامع کلوپیدوگرل، داروی ضدپلاکت برای پیشگیری از حملات قلبی و سکته، مکانیسم اثر، عوارض و تداخلات دارویی",
      image: clopidogrelImage,
      link: "/articles/clopidogrel",
      category: "دارو",
      date: "1403/11/02"
    },
    {
      id: 67,
      title: "پیشگیری از آنفولانزا: واکسیناسیون، بهداشت و تقویت ایمنی",
      description: "راهکارهای علمی پیشگیری از آنفولانزا شامل واکسیناسیون سالانه، بهداشت فردی و تقویت سیستم ایمنی",
      image: fluPreventionImage,
      link: "/articles/influenza-prevention",
      category: "پیشگیری",
      date: "1403/11/03"
    },
    {
      id: 66,
      title: "واریس: علائم، درمان و ویزیت متخصص عروق در منزل",
      description: "راهنمای جامع واریس، علائم، ریسک فاکتورها، درمان‌های محافظه‌کارانه و مداخلات کم‌تهاجمی، و خدمات متخصص عروق در منزل",
      image: varicoseVeinsImage,
      link: "/articles/varicose-veins",
      category: "قلب و عروق",
      date: "1403/11/03"
    },
    {
      id: 65,
      title: "استئوآرتریت (آرتروز): مدیریت جامع درد و فیزیوتراپی در منزل",
      description: "راهنمای کامل درمان استئوآرتریت شامل کاهش وزن، فیزیوتراپی، ورزش و درمان دارویی",
      image: osteoarthritisImage,
      link: "/articles/osteoarthritis",
      category: "مقالات",
      date: "1403/11/03"
    },
    {
      id: 64,
      title: "بیزوپرولول (کنکور): داروی حیاتی بتا بلاکر برای نارسایی قلبی",
      description: "راهنمای جامع بیزوپرولول، کاربردها در نارسایی قلبی، آنژین صدری و آریتمی‌ها، عوارض و تداخلات دارویی",
      image: bisopropolImage,
      link: "/articles/bisoprolol",
      category: "دارو",
      date: "1403/11/03"
    },
    {
      id: 63,
      title: "رُزُواستاتین (Rosuvastatin): مدیریت کاهش چربی خون و پیشگیری از سکته",
      description: "راهنمای جامع رُزُواستاتین، یکی از قدرتمندترین استاتین‌ها برای کاهش کلسترول و پیشگیری از حوادث قلبی عروقی",
      image: rosuvastatinImage,
      link: "/articles/rosuvastatin",
      category: "دارو",
      date: "1403/11/03"
    },
    {
      id: 62,
      title: "آتورواستاتین (Atorvastatin): مدیریت کلسترول و پیشگیری از سکته قلبی",
      description: "راهنمای جامع آتورواستاتین، کاربردها، عوارض جانبی، پایش دوره‌ای و ضرورت مراقبت در منزل",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "دارو",
      date: "1403/11/03"
    },
    {
      id: 61,
      title: "آسپرین (Aspirin): کاربرد حیاتی در بیماری‌های قلبی و سکته مغزی",
      description: "راهنمای جامع آسپرین، مکانیسم اثر، کاربردهای حیاتی در بیماری‌های قلبی و سکته مغزی، عوارض جانبی و ملاحظات درمانی",
      image: aspirinImage,
      link: "/articles/aspirin",
      category: "دارو",
      date: "1403/11/03"
    },
    {
      id: 60,
      title: "آسم: بیماری مزمن ریوی، علائم و درمان تخصصی",
      description: "راهنمای جامع آسم، محرک‌های آن و مدیریت حملات با ویزیت متخصص ریه در منزل",
      image: asthmaImage,
      link: "/articles/asthma",
      category: "بیماری‌های مزمن",
      date: "1403/11/03"
    },
    {
      id: 59,
      title: "نوار قلب (ECG) در منزل: تشخیص فوری اختلالات قلبی با دقت تخصصی",
      description: "راهنمای جامع نوار قلب در منزل، کاربردها، تشخیص آریتمی و سکته قلبی با دستگاه ECG استاندارد و تفسیر متخصص",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب و عروق",
      date: "1403/11/02"
    },
    {
      id: 58,
      title: "دگزامتازون (Dexamethasone) و تزریق در منزل: درمان تخصصی ضد التهاب",
      description: "راهنمای جامع دگزامتازون، کاربردها، مکانیسم اثر، عوارض جانبی و تزریق ایمن در منزل توسط پرستاران مجرب",
      image: dexamethasoneImage,
      link: "/articles/dexamethasone",
      category: "دارو",
      date: "1403/11/01"
    },
    {
      id: 57,
      title: "فیبریلاسیون دهلیزی (AF) و ریسک سکته مغزی: پیشگیری با نوار قلب در منزل",
      description: "راهنمای جامع فیبریلاسیون دهلیزی، مکانیسم سکته مغزی، تشخیص با نوار قلب در منزل و پیشگیری با داروهای ضد انعقاد",
      image: afStrokeImage,
      link: "/articles/af-stroke-risk",
      category: "قلب و عروق",
      date: "1403/10/30"
    },
    {
      id: 56,
      title: "اندیکاسیون‌های اکو قلب: چه زمانی نیاز به اکوکاردیوگرافی دارید؟",
      description: "راهنمای علمی جامع درباره شرایط و علائمی که انجام اکو قلب را ضروری می‌سازند، از نارسایی قلبی تا بیماری‌های دریچه‌ای",
      image: echoIndicationsImage,
      link: "/articles/echo-indications",
      category: "سلامت قلب",
      date: "1403/10/30"
    },
    {
      id: 55,
      title: "تب در بزرگسالان: راهنمای علمی تشخیص، دلایل و رویکرد تخصصی",
      description: "راهنمای جامع علمی تب در بزرگسالان: تعاریف دقیق، روش‌های اندازه‌گیری، علل عفونی و غیرعفونی، تب با منشأ ناشناخته و زمان مراجعه به پزشک",
      image: adultFeverImage,
      link: "/articles/adult-fever",
      category: "سلامت عمومی",
      date: "1403/10/30"
    },
    {
      id: 54,
      title: "اکو قلب در منزل: تشخیص دقیق بیماری‌های قلبی با دستگاه پرتابل",
      description: "انجام اکوکاردیوگرافی تخصصی در منزل با دستگاه پرتابل و تفسیر توسط متخصص قلب. بررسی ساختار قلب، دریچه‌ها و عملکرد پمپاژ",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "خدمات پزشکی",
      date: "1403/12/16"
    },
    {
      id: 53,
      title: "حجامت در منزل و فصد خون در منزل: راهنمای انتخاب آگاهانه",
      description: "حجامت در منزل و فصد خون در منزل با رعایت کامل اصول بهداشتی. خدمات فصد خون درمانی با تجویز پزشک توسط تیم نوید زندگی",
      image: cuppingTherapyImage,
      link: "/articles/cupping-therapy",
      category: "خدمات پزشکی"
    },
    {
      id: 52,
      title: "تزریق واکسن آنفولانزا در منزل: راهنمای کامل، زمان‌بندی و گروه‌های پرخطر",
      description: "تزریق واکسن آنفولانزا در منزل تهران توسط پرستار متخصص. راهنمای کامل زمان‌بندی، گروه‌های پرخطر و مزایای واکسیناسیون سالانه آنفولانزا",
      image: vaccinationImage,
      link: "/articles/influenza-vaccine",
      category: "واکسیناسیون"
    },
    {
      id: 51,
      title: "راهنمای جامع مراقبت از سالمند در منزل",
      description: "راهنمای کامل مراقبت از سالمند، چالش‌ها، مزایا و خدمات پرستاری، ویزیت پزشک و فیزیوتراپی در خانه",
      image: elderlyCareImage,
      link: "/articles/elderly-care-guide",
      category: "مراقبت از سالمند"
    },
    {
      id: 50,
      title: "راهنمای جامع ویروس HPV و رویکردهای درمانی نوین",
      description: "راهنمای کامل علمی درباره ویروس HPV، درمان زگیل تناسلی با پلاسما پن، پاپ اسمیر و واکسیناسیون HPV در منزل",
      image: gynecologyImage,
      link: "/articles/hpv-treatment-guide",
      category: "سلامت زنان"
    },
    {
      id: 49,
      title: "مسمومیت بوتولیسم: علائم، خطرات فلج تنفسی و راهنمای پیشگیری",
      description: "راهنمای کامل بوتولیسم، علائم فلج تنفسی، منابع انتقال (کنسرو، عسل خام) و پیشگیری از این فوریت پزشکی",
      image: botulismWarningImage,
      link: "/articles/botulism",
      category: "فوریت‌های پزشکی"
    },
    {
      id: 48,
      title: "عوارض خطرناک کوکائین بر قلب، مغز و سیستم عصبی مرکزی",
      description: "آشنایی با عوارض جدی و خطرناک کوکائین بر قلب، مغز و سیستم عصبی و خطر سکته و مرگ آنی",
      image: cocaineDangersImage,
      link: "/articles/cocaine-dangers",
      category: "سلامت عمومی",
      date: "1403/10/25"
    },
    {
      id: 1006,
      title: "عوارض مصرف گل (ماری‌جوانا/حشیش): تأثیرات مخرب بر مغز، قلب و ریه",
      description: "بررسی کامل عوارض جسمی و روانی مصرف گل و حشیش شامل آسیب به مغز، اختلالات روانی، بیماری‌های قلبی و ریوی",
      image: marijuanaEffectsImage,
      link: "/articles/marijuana-effects",
      category: "روانپزشکی",
      date: "1403/10/25"
    },
    {
      id: 1007,
      title: "عوارض مصرف شیشه (مت‌آمفتامین): تخریب شدید مغز، قلب و سیستم عصبی",
      description: "بررسی جامع عوارض خطرناک مصرف شیشه شامل سایکوز، آسیب‌های مغزی، سکته قلبی، کاردیومیوپاتی و دهان مت",
      image: methamphetamineEffectsImage,
      link: "/articles/methamphetamine-effects",
      category: "روانپزشکی",
      date: "1403/10/26"
    },
    {
      id: 47,
      title: "رژیم مدیترانه‌ای: بهترین رژیم غذایی برای قلب، کنترل قند خون و دیابت",
      description: "راهنمای کامل رژیم مدیترانه‌ای برای سلامت قلب، کنترل قند خون و دیابت. آشنایی با مواد غذایی مجاز و فواید علمی",
      image: mediterraneanDietImage,
      link: "/articles/mediterranean-diet",
      category: "تغذیه"
    },
    {
      id: 46,
      title: "آتوروستاتین چیست و چه کاربردی دارد؟",
      description: "راهنمای کامل آتوروستاتین، کاربرد در کنترل چربی خون، نحوه مصرف، عوارض و اهمیت پیگیری پزشکی",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "دارو"
    },
    {
      id: 45,
      title: "فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟",
      description: "راهنمای کامل فشار خون بالا، علائم قاتل خاموش، علت‌ها، روش‌های کنترل و اهمیت اندازه‌گیری منظم فشار خون",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    },
    {
      id: 44,
      title: "وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن",
      description: "راهنمای کامل وارفارین، موارد مصرف، عوارض جانبی، رژیم غذایی، کنترل INR و ویزیت پزشک در منزل",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "دارو"
    },
    {
      id: 43,
      title: "تپش قلب؛ علل، علائم و روش‌های بررسی",
      description: "راهنمای کامل تپش قلب، علل شایع، علائم خطرناک، روش‌های بررسی و خدمات هولتر در منزل",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    },
    {
      id: 42,
      title: "بلند کردن اجسام سنگین بعد از آنژیوگرافی",
      description: "راهنمای کامل محدودیت بلند کردن اجسام بعد از آنژیوگرافی و استنت‌گذاری، مراحل بازگشت به فعالیت",
      image: postAngiographyLiftingImage,
      link: "/articles/post-angiography-lifting",
      category: "قلب و عروق"
    },
    {
      id: 41,
      title: "مدت زمان و بستری بعد از آنژیوگرافی",
      description: "مدت زمان انجام آنژیوگرافی، بستری بعد از آنژیوگرافی و استنت‌گذاری، ترخیص و مراقبت‌های بعد از عمل",
      image: angiographyRecoveryImage,
      link: "/articles/angiography-recovery-time",
      category: "قلب و عروق"
    },
    {
      id: 40,
      title: "داروهای ضروری بعد از آنژیوگرافی و استنت‌گذاری",
      description: "راهنمای کامل داروهای ضد پلاکت، استاتین‌ها و داروهای کنترل فشار خون بعد از آنژیوگرافی و استنت‌گذاری",
      image: postAngiographyMedicationsImage,
      link: "/articles/post-angiography-medications",
      category: "قلب و عروق"
    },
    {
      id: 39,
      title: "آیا آنژیوگرافی ترسناک است؟",
      description: "همه چیز درباره آنژیوگرافی قلب، مراحل انجام، آیا دردناک است و چگونه به تشخیص و درمان بیماری‌های قلبی کمک می‌کند",
      image: angiographyImage,
      link: "/articles/angiography-fear",
      category: "قلب و عروق"
    },
    {
      id: 38,
      title: "ارتباط سرخچه و بارداری؛ خطرات، پیشگیری و نقش خدمات پزشکی",
      description: "راهنمای جامع سرخچه در بارداری، عوارض سندرم سرخچه مادرزادی، پیشگیری با واکسیناسیون و خدمات پزشکی در منزل",
      image: rubellaPregnancyImage,
      link: "/articles/rubella-pregnancy",
      category: "سلامت مادر و کودک"
    },
    {
      id: 37,
      title: "خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل",
      description: "راهنمای جامع خال‌های پوستی، انواع خال، علائم هشداردهنده، قاعده ABCDE و بررسی خال‌ها با خدمات پزشکی در منزل",
      image: skinMolesImage,
      link: "/articles/skin-moles",
      category: "پوست و مو"
    },
    {
      id: 36,
      title: "ریزش مو؛ علل، تشخیص و راه‌های پیگیری در منزل",
      description: "راهنمای جامع ریزش مو، علل ژنتیکی و هورمونی، انواع ریزش مو، روش‌های تشخیص و درمان با خدمات پزشکی در منزل",
      image: hairLossImage,
      link: "/articles/hair-loss",
      category: "پوست و مو"
    },
    {
      id: 35,
      title: "فشار خون؛ علل، عوارض و اهمیت پیگیری در منزل",
      description: "راهنمای جامع فشار خون، علل فشار خون بالا، عوارض، علائم و روش‌های کنترل و پیگیری فشار خون با خدمات پزشکی در منزل",
      image: bloodPressureImage,
      link: "/articles/blood-pressure",
      category: "بیماری‌های مزمن"
    },
    {
      id: 34,
      title: "خارش پوستی؛ علل، تشخیص و درمان در منزل",
      description: "راهنمای جامع خارش پوستی، علل پوستی و سیستمیک، علائم هشداردهنده، مراقبت‌های اولیه و خدمات پزشکی در منزل",
      image: skinItchingImage,
      link: "/articles/skin-itching",
      category: "پوست و مو"
    },
    {
      id: 33,
      title: "توده‌های پستانی؛ علل، تشخیص و اهمیت پیگیری",
      description: "راهنمای جامع توده‌های پستانی، علل خوش‌خیم و بدخیم، علائم هشداردهنده، روش‌های تشخیص و خدمات پزشکی در منزل",
      image: breastMassImage,
      link: "/articles/breast-mass",
      category: "سلامت زنان"
    },
    {
      id: 32,
      title: "چای سبز و کاهش وزن؛ نگاه علمی",
      description: "بررسی علمی تأثیر چای سبز بر کاهش وزن، ترکیبات فعال، شواهد تحقیقاتی و نقش خدمات پزشکی در منزل",
      image: greenTeaImage,
      link: "/articles/green-tea-weight-loss",
      category: "تغذیه"
    },
    {
      id: 31,
      title: "تب و پیگیری آن؛ چه زمانی باید به پزشک در منزل مراجعه کنیم؟",
      description: "راهنمای کامل پیگیری تب در منزل، علل تب، زمان مراجعه به پزشک و نحوه استفاده از خدمات پزشکی در منزل برای درمان تب",
      image: feverTrackingImage,
      link: "/articles/fever-tracking",
      category: "عمومی"
    },
    {
      id: 30,
      title: "چرا بیماران بر دریافت خدمات اضافه اصرار می‌کنند؟",
      description: "بررسی دلایل اصرار بیماران بر دریافت خدمات پزشکی اضافه، پیامدها و نقش خدمات پزشکی در منزل در مدیریت این موضوع",
      image: patientDemandsImage,
      link: "/articles/patient-demands",
      category: "مشاوره پزشکی"
    },
    {
      id: 29,
      title: "سرم درمانی در منزل؛ چرا بیماران به دریافت سرم تمایل دارند؟",
      description: "راهنمای جامع سرم درمانی در منزل، فواید و مضرات تزریق سرم، خدمات سرم تراپی در خانه و نکات مهم درباره استفاده از سرم",
      image: ivTherapyImage,
      link: "/articles/iv-therapy-home",
      category: "خدمات پزشکی"
    },
    {
      id: 28,
      title: "افسردگی: علائم، نشانه‌ها و روش‌های درمان",
      description: "راهنمای جامع افسردگی، علائم هشدار، روش‌های درمان و خدمات روانشناسی در منزل",
      image: depressionImage,
      link: "/articles/depression",
      category: "روانشناسی"
    },
    {
      id: 27,
      title: "سرگیجه: علت‌ها، تفاوت‌ها و راه‌های پیشگیری",
      description: "راهنمای جامع سرگیجه، تفاوت احساس عدم تعادل و سرگیجه واقعی، علائم خطرناک و خدمات پزشکی در منزل",
      image: dizzinessImage,
      link: "/articles/dizziness",
      category: "عمومی"
    },
    {
      id: 26,
      title: "سردرد: علت‌ها، علائم خطر و روش‌های کنترل",
      description: "راهنمای جامع سردرد، علل، علائم خطرناک، روش‌های درمان میگرن و خدمات پزشکی در منزل",
      image: headacheImage,
      link: "/articles/headache",
      category: "عمومی"
    },
    {
      id: 25,
      title: "تعریق بیش از حد: علت‌ها و راهکارهای درمان",
      description: "راهنمای جامع تعریق بیش از حد، علل، علائم خطرناک، راهکارهای درمان و خدمات پزشکی در منزل",
      image: hyperhidrosisImage,
      link: "/articles/hyperhidrosis",
      category: "عمومی"
    },
    {
      id: 24,
      title: "دیابت و راه‌های کنترل آن",
      description: "راهنمای جامع دیابت، انواع دیابت، علائم، کنترل قند خون و خدمات پزشکی در منزل برای بیماران دیابتی",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "بیماری‌های مزمن"
    },
    {
      id: 23,
      title: "عفونت با ویروس HIV (ایدز)",
      description: "راهنمای جامع ویروس HIV، راه‌های انتقال، علائم، مراحل بیماری و خدمات پزشکی در منزل برای بیماران",
      image: hivAidsImage,
      link: "/articles/hiv-aids",
      category: "بیماری‌های عفونی"
    },
    {
      id: 22,
      title: "واکسیناسیون و اهمیت آن در حفظ سلامت",
      description: "همه چیز در مورد واکسیناسیون، نحوه عمل واکسن، برنامه واکسیناسیون و خدمات تزریق واکسن در منزل",
      image: vaccinationImage,
      link: "/articles/vaccination",
      category: "واکسیناسیون"
    },
    {
      id: 21,
      title: "اهمیت ویتامین‌ها در سلامت بدن",
      description: "راهنمای کامل ویتامین‌ها و نقش آنها در سلامت بدن. تعیین نیاز بدن به ویتامین‌ها با ویزیت پزشک در منزل",
      image: medicalConsultationImage,
      link: "/articles/vitamins-health",
      category: "تغذیه"
    },
    {
      id: 20,
      title: "رشد کودک؛ اهمیت پایش منظم در منزل",
      description: "پایش رشد کودک در منزل با خدمات ویزیت پزشک اطفال. بررسی قد، وزن و تکامل رفتاری کودک توسط متخصص در منزل",
      image: pediatricsImage,
      link: "/articles/child-growth-monitoring",
      category: "کودکان"
    },
    {
      id: 19,
      title: "خدمات پزشکی و پرستاری در منزل",
      description: "بررسی کامل مزایا و معایب خدمات درمانی و بستری در منزل و راهنمای انتخاب بهترین خدمات پزشکی",
      image: medicalConsultationImage,
      link: "/articles/medical-consultation",
      category: "خدمات پزشکی"
    },
    {
      id: 18,
      title: "تأثیر مصرف قهوه بر سلامت قلب",
      description: "بررسی تأثیرات مثبت و منفی مصرف قهوه بر سلامت قلب و عروق - دکتر نیره مظاهری تهرانی",
      image: coffeeHeartImage,
      link: "/articles/coffee-heart",
      category: "قلب و عروق"
    },
    {
      id: 17,
      title: "تأثیر آلودگی هوا بر بیماری‌های قلبی و ریوی",
      description: "بررسی تأثیرات آلودگی هوا بر سلامت قلب و ریه‌ها و راه‌های پیشگیری",
      image: airPollutionImage,
      link: "/articles/air-pollution",
      category: "پیشگیری"
    },
    {
      id: 16,
      title: "مننژیت چیست؟ علل، علائم و درمان",
      description: "راهنمای کامل مننژیت: علل، علائم، درمان و پیشگیری التهاب پرده‌های محافظ مغز",
      image: meningitisImage,
      link: "/articles/meningitis",
      category: "اورژانس پزشکی"
    },
    {
      id: 1,
      title: "تشخیص سریع علائم سکته مغزی",
      description: "راهنمای کامل تشخیص علائم سکته مغزی و اقدامات فوری در منزل",
      image: strokeImage,
      link: "/articles/stroke-symptoms",
      category: "اورژانس پزشکی"
    },
    {
      id: 2,
      title: "علائم حمله قلبی و اقدامات فوری",
      description: "تشخیص زودهنگام علائم سکته قلبی و ارائه کمک‌های اولیه",
      image: heartAttackImage,
      link: "/articles/heart-attack-symptoms",
      category: "اورژانس پزشکی"
    },
    {
      id: 3,
      title: "درمان آنفولانزا در منزل",
      description: "راهکارهای درمانی و مراقبتی برای بهبود سریع آنفولانزا",
      image: influenzaImage,
      link: "/articles/influenza-treatment",
      category: "بیماری‌های عفونی"
    },
    {
      id: 4,
      title: "تاثیرات سیگار بر سلامت قلب",
      description: "بررسی آسیب‌های سیگار به سیستم قلبی عروقی و راه‌های ترک",
      image: smokingImage,
      link: "/articles/smoking-heart-effects",
      category: "پیشگیری"
    },
    {
      id: 5,
      title: "آزمایش چربی خون HDL/LDL",
      description: "راهنمای کامل آزمایش کلسترول و تفسیر نتایج",
      image: cholesterolTestImage,
      link: "/articles/cholesterol-test",
      category: "آزمایش‌ها"
    },
    {
      id: 6,
      title: "درمان فوری تنگی نفس در منزل",
      description: "اقدامات اورژانسی برای درمان تنگی نفس و مشکلات تنفسی",
      image: breathingTreatmentImage,
      link: "/articles/breathing-treatment",
      category: "اورژانس پزشکی"
    },
    {
      id: 7,
      title: "آمپول نوروبیون",
      description: "راهنمای کامل تزریق ویتامین‌های گروه B و فواید آن",
      image: neurobionImage,
      link: "/articles/neurobion-ampoule",
      category: "تزریقات"
    },
    {
      id: 8,
      title: "گرمازدگی: تشخیص و درمان",
      description: "شناسایی علائم گرمازدگی و ارائه درمان‌های فوری",
      image: heatExhaustionImage,
      link: "/articles/heat-exhaustion",
      category: "اورژانس پزشکی"
    },
    {
      id: 9,
      title: "تزریق واکسن گارداسیل بعد از ابتلا",
      description: "راهنمای واکسیناسیون HPV و فواید آن پس از ابتلا",
      image: gardasilImage,
      link: "/articles/gardasil-vaccine",
      category: "واکسیناسیون"
    },
    {
      id: 10,
      title: "تشخیص زگیل تناسلی",
      description: "راهنمای شناسایی علائم و روش‌های تشخیص زگیل تناسلی",
      image: medicalConsultationImage,
      link: "/articles/genital-warts",
      category: "بیماری‌های عفونی"
    },
    {
      id: 11,
      title: "انتقال HPV از استخر و مکان‌های عمومی",
      description: "بررسی راه‌های انتقال ویروس HPV و روش‌های پیشگیری",
      image: hpvPoolImage,
      link: "/articles/hpv-pool",
      category: "پیشگیری"
    },
    {
      id: 12,
      title: "لکه‌های سفید ناخن",
      description: "علل، تشخیص و درمان سفیدی ناخن و کمبود ویتامین",
      image: nailSpotsImage,
      link: "/articles/nail-spots",
      category: "پوست و مو"
    },
    {
      id: 13,
      title: "استفاده از هوش مصنوعی در تفسیر اکو و‌ نوار قلب",
      description: "نقش هوش مصنوعی در تحلیل نوار قلب و اکوکاردیوگرافی و محدودیت‌های آن",
      image: aiCardiologyImage,
      link: "/articles/ai-cardiology",
      category: "تکنولوژی پزشکی"
    },
    {
      id: 14,
      title: "تب در کودکان | علل، درمان خانگی و ویزیت پزشک در منزل",
      description: "راهنمای کامل مدیریت تب کودکان در خانه و زمان مراجعه به پزشک",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "کودکان"
    },
    {
      id: 15,
      title: "سردرد میگرنی | چیست، علائم و عوامل تحریک‌کننده",
      description: "راهنمای کامل تشخیص، علائم و درمان میگرن و روش‌های پیشگیری",
      image: migrainImage,
      link: "/articles/migraine",
      category: "مغز و اعصاب"
    },
    {
      id: 20,
      title: "درمان سرماخوردگی در منزل",
      description: "راهنمای کامل درمان سرماخوردگی با روش‌های خانگی مؤثر و زمان مراجعه به پزشک",
      image: medicalConsultationImage,
      link: "/articles/cold-treatment",
      category: "عمومی"
    },
    {
      id: 21,
      title: "افسردگی و بیماری‌های قلبی: نگاهی علمی به یک ارتباط دوطرفه",
      description: "بررسی علمی رابطه دوطرفه میان افسردگی و بیماری‌های قلبی، عوامل خطر و راهکارهای درمانی",
      image: smokingImage,
      link: "/articles/depression-heart-disease",
      category: "قلب و عروق"
    }
  ];

  // Merge with extra articles and de-duplicate by link (newest/custom first)
  const mergedArticles = useMemo(() => {
    const map = new Map<string, any>();
    // Ensure newly added in-app articles appear first
    [...articles, ...extraArticles].forEach((a) => {
      if (!map.has(a.link)) map.set(a.link, a);
    });
    // Sort by id (descending) to show newest articles first
    return Array.from(map.values()).sort((a, b) => (b.id || 0) - (a.id || 0));
  }, []);

  // Define main categories with mappings
  const categoryMappings: Record<string, string[]> = {
    "همه": [],
    "قلب و عروق": ["قلب و عروق", "سلامت قلب"],
    "تنفسی": ["تنفسی"],
    "مغز و اعصاب": ["مغز و اعصاب", "عصبی"],
    "روانپزشکی": ["روانپزشکی"],
    "تغذیه": ["تغذیه", "تغذیه و رژیم", "تغذیه و سلامت"],
    "بارداری": ["بارداری و زایمان", "بارداری", "سلامت مادر و کودک"],
    "دارو": ["دارو", "تغذیه و سلامت"],
    "عمومی": ["عمومی", "درمان و سلامت", "محیط زیست و سلامت", "اورژانس پزشکی", "جراحی", "اورولوژی"],
  };

  const mainCategories = Object.keys(categoryMappings);

  // Filter articles based on selected category and search query
  // جستجوی fuzzy برای dropdown
  const searchResults = useMemo(() => {
    if (!tempSearchQuery || tempSearchQuery.length < 2) return [];
    
    const results = fuzzySearchArticles(mergedArticles, tempSearchQuery);
    
    return results.slice(0, 8);
  }, [tempSearchQuery, mergedArticles]);

  const filteredArticles = useMemo(() => {
    let filtered = mergedArticles;

    // Filter by category
    if (selectedCategory !== "همه") {
      const allowedCategories = categoryMappings[selectedCategory] || [];
      filtered = filtered.filter(article => 
        allowedCategories.includes(article.category)
      );
    }

    // Filter by search query with fuzzy matching
    if (searchQuery.trim()) {
      filtered = fuzzySearchArticles(filtered, searchQuery);
    }

    return filtered;
  }, [mergedArticles, selectedCategory, searchQuery]);

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Calculate pagination based on filtered articles
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section with Search */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                مقالات پزشکی نوید زندگی
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                راهنمای جامع سلامت و درمان در منزل با بهترین متخصصان پزشکی
              </p>

              {/* Search Box with Dropdown */}
              <div className="relative max-w-xl mx-auto">
                <Popover open={searchOpen && tempSearchQuery.length >= 2} onOpenChange={setSearchOpen}>
                  <PopoverTrigger asChild>
                    <div className="relative flex gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                        <Input
                          type="text"
                          placeholder="جستجو در مقالات..."
                          value={tempSearchQuery}
                          onChange={(e) => {
                            setTempSearchQuery(e.target.value);
                            setSearchOpen(e.target.value.length >= 2);
                          }}
                          onKeyDown={handleSearchKeyDown}
                          onFocus={() => setSearchOpen(tempSearchQuery.length >= 2)}
                          className="h-12 text-base pr-12"
                        />
                      </div>
                      <Button
                        onClick={handleSearchSubmit}
                        size="lg"
                        className="h-12 px-6"
                      >
                        <CheckCircle2 className="h-5 w-5 ml-2" />
                        تایید
                      </Button>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-[var(--radix-popover-trigger-width)] p-0" 
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    <Command shouldFilter={false}>
                      <CommandList className="max-h-[400px]">
                        <CommandEmpty>
                          <div className="py-6 text-center">
                            <p className="text-sm text-muted-foreground mb-2">نتیجه‌ای یافت نشد</p>
                            <p className="text-xs text-muted-foreground">
                              برای کمک و راهنمایی با ما تماس بگیرید:{" "}
                              <a 
                                href="tel:09386117912" 
                                className="text-primary font-semibold hover:underline"
                              >
                                09386117912
                              </a>
                            </p>
                          </div>
                        </CommandEmpty>

                        {searchResults.length > 0 && (
                          <CommandGroup heading="مقالات پزشکی">
                            {searchResults.map((article) => (
                              <CommandItem
                                key={article.id}
                                onSelect={() => {
                                  navigate(article.link);
                                  setTempSearchQuery("");
                                  setSearchQuery("");
                                  setSearchOpen(false);
                                }}
                                className="cursor-pointer"
                              >
                                <FileText className="ml-2 h-4 w-4 text-primary" />
                                <div className="flex flex-col items-start flex-1">
                                  <span className="font-medium">{article.title}</span>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                                      {article.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground line-clamp-1">
                                      {article.description}
                                    </span>
                                  </div>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        )}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Tabs Section */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent justify-center">
                {mainCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Results Counter */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground text-center">
              {filteredArticles.length} مقاله یافت شد
              {selectedCategory !== "همه" && ` در دسته "${selectedCategory}"`}
              {searchQuery && ` برای "${searchQuery}"`}
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {currentArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  مقاله‌ای یافت نشد. لطفاً جستجو یا دسته‌بندی دیگری را امتحان کنید.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentArticles.map((article) => (
                    <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      <Link to={article.link} className="block">
                        <div className="overflow-hidden rounded-t-lg">
                          <img 
                            src={article.image}
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
                        </div>
                      </Link>
                      <CardHeader className="flex-none">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                        <Link to={article.link}>
                          <CardTitle className="text-base font-bold leading-tight hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                          {article.description}
                        </CardDescription>
                        <Link 
                          to={article.link}
                          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                        >
                          مطالعه مقاله
                          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }
                            }}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                          />
                        </PaginationItem>
                        
                        {getPageNumbers().map((page, index) => (
                          <PaginationItem key={index}>
                            {page === 'ellipsis' ? (
                              <PaginationEllipsis />
                            ) : (
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(page as number);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                isActive={currentPage === page}
                              >
                                {page}
                              </PaginationLink>
                            )}
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) {
                                setCurrentPage(currentPage + 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }
                            }}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                نیاز به مشاوره پزشکی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                متخصصان نوید زندگی آماده ارائه خدمات پزشکی در منزل شما هستند
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:09386117912"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما: 09386117912
                </a>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  مشاهده خدمات
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ArticlesPage;