import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import citalopramImage from "@/assets/citalopram-medication.jpg";
import opiumHeartImage from "@/assets/opium-heart-effects.jpg";
import telmisartanImage from "@/assets/telmisartan-medication.jpg";
import diabetesPregnancyImage from "@/assets/diabetes-pregnancy.jpg";
import maleUTIImage from "@/assets/male-uti-article.jpg";
import { extraArticles } from "@/content/articles-extra";

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  
  const articles = [
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
      image: diabetesPregnancyImage,
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
      id: 76,
      title: "سیتالوپرام (Citalopram): مدیریت تخصصی افسردگی و اختلالات اضطراب",
      description: "راهنمای جامع سیتالوپرام: مکانیسم اثر، کاربردهای درمانی در افسردگی و اضطراب، عوارض جانبی و اهمیت ویزیت آنلاین روانپزشک",
      image: citalopramImage,
      link: "/articles/citalopram",
      category: "روانپزشکی",
      date: "1403/11/10"
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
      category: "داروها",
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
      category: "داروها",
      date: "1403/11/03"
    },
    {
      id: 63,
      title: "رُزُواستاتین (Rosuvastatin): مدیریت کاهش چربی خون و پیشگیری از سکته",
      description: "راهنمای جامع رُزُواستاتین، یکی از قدرتمندترین استاتین‌ها برای کاهش کلسترول و پیشگیری از حوادث قلبی عروقی",
      image: rosuvastatinImage,
      link: "/articles/rosuvastatin",
      category: "داروها",
      date: "1403/11/03"
    },
    {
      id: 62,
      title: "آتورواستاتین (Atorvastatin): مدیریت کلسترول و پیشگیری از سکته قلبی",
      description: "راهنمای جامع آتورواستاتین، کاربردها، عوارض جانبی، پایش دوره‌ای و ضرورت مراقبت در منزل",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "داروها",
      date: "1403/11/03"
    },
    {
      id: 61,
      title: "آسپرین (Aspirin): کاربرد حیاتی در بیماری‌های قلبی و سکته مغزی",
      description: "راهنمای جامع آسپرین، مکانیسم اثر، کاربردهای حیاتی در بیماری‌های قلبی و سکته مغزی، عوارض جانبی و ملاحظات درمانی",
      image: aspirinImage,
      link: "/articles/aspirin",
      category: "داروها",
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
      category: "داروها",
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
      category: "سلامت عمومی"
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
      category: "داروها"
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
      category: "داروها"
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
    return Array.from(map.values());
  }, []);

  const categories = ["همه", "اورژانس پزشکی", "بیماری‌های عفونی", "پیشگیری", "آزمایش‌ها", "تزریقات", "واکسیناسیون", "پوست و مو", "تکنولوژی پزشکی", "کودکان", "مغز و اعصاب", "قلب و عروق", "تغذیه", "عمومی", "بیماری‌های مزمن", "سلامت مادر و کودک"];

  // Calculate pagination
  const totalPages = Math.ceil(mergedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = mergedArticles.slice(startIndex, endIndex);

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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  مقالات پزشکی نوید زندگی
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  راهنمای جامع سلامت و درمان در منزل با بهترین متخصصان پزشکی
                </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Link to={article.link} className="block">
                    <div className="overflow-hidden rounded-t-lg">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold leading-tight hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </CardDescription>
                    <Link 
                      to={article.link}
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
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
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما
                </Link>
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