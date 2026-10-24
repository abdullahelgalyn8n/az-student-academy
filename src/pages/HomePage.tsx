import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  Calendar,
  Zap,
  Crown,
  BookOpen,
  UserPlus,
  Target,
  Clock,
  BarChart3,
  PlayCircle,
  Star,
} from 'lucide-react';
import { HERO_SLIDES, COURSES_DATA } from '../utils/platformLogic';

export const HomePage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-slate-950 transition-colors">
      {/* SECTION 1: HERO SLIDER + OVERLAPPING STATS BAR */}
      <section className="relative w-full min-h-[620px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden bg-slate-100 dark:bg-slate-900">
        {/* Background Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* High-contrast directional scrim for Light and Dark modes */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/90 to-white/60 dark:from-slate-950/95 dark:via-slate-950/88 dark:to-slate-950/65" />
          </div>
        ))}

        {/* Top Progress Line */}
        <div className="relative z-10 w-full h-1 bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full bg-[#279b57] transition-all duration-500"
            style={{ width: `${((activeSlide + 1) / HERO_SLIDES.length) * 100}%` }}
          />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-28 flex items-center">
          <div className="w-full max-w-3xl text-right mr-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950/90 border border-[#279b57]/30 dark:border-emerald-500/40 text-[#1e7a44] dark:text-emerald-300 text-sm font-extrabold mb-6 shadow-2xs">
              <GraduationCap className="w-4 h-4" />
              <span>{HERO_SLIDES[activeSlide].badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight lg:whitespace-nowrap">
              {HERO_SLIDES[activeSlide].title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-800 dark:text-slate-200 leading-relaxed mb-8 max-w-2xl font-bold">
              {HERO_SLIDES[activeSlide].description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/auth"
                onClick={scrollToTop}
                className="px-7 py-3.5 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2.5"
              >
                <span>ابدأ رحلتك التعليمية</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/courses"
                onClick={scrollToTop}
                className="px-7 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-base rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition-all"
              >
                تصفح الكورسات
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="الشريحة السابقة"
          className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-md items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="الشريحة التالية"
          className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-md items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="relative z-20 flex items-center justify-center gap-2 pb-6">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`الذهاب للشريحة ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === activeSlide
                  ? 'w-8 bg-[#279b57] dark:bg-emerald-400'
                  : 'w-2.5 bg-slate-400 dark:bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats Strip */}
        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-6">
          <div className="bg-white dark:bg-slate-900 rounded-t-3xl shadow-lg border border-b-0 border-slate-200 dark:border-slate-800 px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">+12</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold">دولة عربية</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">+50,000</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold">معلم متخصص</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">+10K</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold">طالب نشط</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums">99%</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold">نسبة الرضا</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW CAN WE HELP YOU (كيف يمكننا مساعدتك؟) */}
      <section className="py-20 bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>انضم إلينا</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
              كيف يمكننا <span className="text-[#279b57] dark:text-emerald-400">مساعدتك؟</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium">اختر الفئة التي تناسبك وابدأ رحلتك معنا</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 (Right in RTL): Teachers */}
            <Link
              to="/teachers/join"
              onClick={scrollToTop}
              className="group rounded-3xl border border-amber-300/80 dark:border-amber-500/30 bg-gradient-to-b from-amber-50/70 via-white to-white dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <span className="px-4 py-1 rounded-full bg-amber-600 text-white text-xs font-bold mb-6">
                👨‍🏫 للمعلمين
              </span>
              <div className="w-16 h-16 rounded-2xl bg-[#279b57] text-white flex items-center justify-center shadow-md mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">هل أنت معلم؟</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-6">انضم لفريقنا وشارك خبرتك مع آلاف الطلاب</p>

              <div className="grid grid-cols-3 gap-2.5 w-full mb-8 mt-auto">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
                  <div className="text-base mb-0.5">🌍</div>
                  <div className="text-sm font-extrabold text-[#279b57] dark:text-emerald-400 tabular-nums">+12</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">دولة</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
                  <div className="text-base mb-0.5">👨‍🎓</div>
                  <div className="text-sm font-extrabold text-[#279b57] dark:text-emerald-400 tabular-nums">+5K</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">طالب</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
                  <div className="text-base mb-0.5">💪</div>
                  <div className="text-sm font-extrabold text-[#279b57] dark:text-emerald-400 tabular-nums">100%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">دعم</div>
                </div>
              </div>

              <span className="w-full py-3.5 px-6 bg-[#279b57] group-hover:bg-[#21854a] text-white font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors">
                <span>سجّل كمعلم</span>
                <ArrowLeft className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 2 (Center): Parents (Most Popular) */}
            <Link
              to="/parent-register"
              onClick={scrollToTop}
              className="group rounded-3xl border-2 border-[#279b57] dark:border-emerald-500 bg-gradient-to-b from-[#e8f5ee]/60 via-white to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900 p-8 pt-0 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="px-5 py-1.5 rounded-b-xl bg-[#279b57] text-white text-xs font-bold mb-6 shadow-xs">
                الأكثر طلباً
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#279b57] text-white flex items-center justify-center shadow-md mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">هل أنت ولي أمر؟</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                تابع مستوى أبنائك أولاً بأول مع تقارير مفصلة وتواصل مباشر مع المعلمين
              </p>

              <div className="space-y-3 mb-8 mt-auto text-sm text-slate-700 dark:text-slate-200 font-bold">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>متابعة فردية لكل طالب</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>تقارير أداء مفصلة</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>تواصل مع المعلمين</span>
                </div>
              </div>

              <span className="px-8 py-3.5 bg-[#279b57] group-hover:bg-[#21854a] text-white font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors">
                <span>سجّل أبناءك الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 3 (Left in RTL): University Students */}
            <Link
              to="/university-students"
              onClick={scrollToTop}
              className="group rounded-3xl border border-emerald-300/80 dark:border-emerald-500/30 bg-gradient-to-b from-[#e8f5ee]/70 via-white to-white dark:from-emerald-950/30 dark:via-slate-900 dark:to-slate-900 p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <span className="px-4 py-1 rounded-full bg-[#279b57] text-white text-xs font-bold mb-6">
                🎓 للجامعات
              </span>
              <div className="w-16 h-16 rounded-2xl bg-[#279b57] text-white flex items-center justify-center shadow-md mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">منصة طلاب الجامعات</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-6">كورسات ومحاضرات أونلاين لجميع الكليات والأقسام</p>

              <div className="grid grid-cols-3 gap-2.5 w-full mb-8 mt-auto">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
                  <div className="text-base mb-0.5">🏛️</div>
                  <div className="text-sm font-extrabold text-[#279b57] dark:text-emerald-400 tabular-nums">+15</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">كلية</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
                  <div className="text-base mb-0.5">🎥</div>
                  <div className="text-sm font-extrabold text-[#279b57] dark:text-emerald-400 tabular-nums">+200</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">محاضرة</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
                  <div className="text-base mb-0.5">👨‍🏫</div>
                  <div className="text-sm font-extrabold text-[#279b57] dark:text-emerald-400 tabular-nums">+50</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">معيد</div>
                </div>
              </div>

              <span className="w-full py-3.5 px-6 bg-[#279b57] group-hover:bg-[#21854a] text-white font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors">
                <span>استكشف الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: TEACHER PACKAGES (باقات المعلمين) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>باقات المعلمين</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
              اختر الباقة <span className="text-[#279b57] dark:text-emerald-400">المناسبة لك</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
              اشترك الآن وابدأ في نشر كورساتك والوصول لآلاف الطلاب
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Monthly Plan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center mb-5">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">الباقة الشهرية</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-6">مثالية للتجربة</p>

              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tabular-nums">50</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">ج.م</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">/ شهرياً</div>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200 font-medium mb-8 text-right w-full max-w-[220px] mx-auto">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>نشر كورسات غير محدودة</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>لوحة تحكم كاملة</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>متابعة أداء الطلاب</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>دعم فني عبر الواتساب</span>
                </li>
              </ul>

              <Link
                to="/teachers/join"
                onClick={scrollToTop}
                className="mt-auto w-full py-3 px-6 border-2 border-[#279b57] dark:border-emerald-500 hover:bg-[#e8f5ee] dark:hover:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            {/* Term Plan (Center) */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-[#279b57] dark:border-emerald-500 p-8 pt-0 flex flex-col items-center text-center shadow-lg relative">
              <div className="px-5 py-1.5 rounded-b-xl bg-[#279b57] text-white text-xs font-bold mb-6">
                ✨ الأكثر طلباً
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#279b57] text-white flex items-center justify-center mb-5 shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">باقة الترم</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-6">3 أشهر بسعر مخفض</p>

              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tabular-nums">120</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">ج.م</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-1.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 line-through tabular-nums">150 ج.م</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold">
                    وفر 20%
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200 font-medium mb-8 text-right w-full max-w-[220px] mx-auto">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>جميع مميزات الباقة الشهرية</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>شارة معلم موثوق ✓</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>أولوية في نتائج البحث</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>تقارير أداء متقدمة</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>دعم فني مباشر</span>
                </li>
              </ul>

              <Link
                to="/teachers/join"
                onClick={scrollToTop}
                className="mt-auto w-full py-3.5 px-6 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            {/* Annual Plan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center mb-5">
                <Crown className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">الباقة السنوية</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-6">أفضل قيمة</p>

              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tabular-nums">360</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">ج.م</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-1.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 line-through tabular-nums">600 ج.م</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold">
                    وفر 40%
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200 font-medium mb-8 text-right w-full max-w-[220px] mx-auto">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>جميع مميزات باقة الترم</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>كورسات غير محدودة</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>أولوية قصوى في البحث</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>شارة معلم مميز ⭐</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>تحليلات متقدمة للأداء</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>دعم فني على مدار الساعة</span>
                </li>
              </ul>

              <Link
                to="/teachers/join"
                onClick={scrollToTop}
                className="mt-auto w-full py-3 px-6 border-2 border-[#279b57] dark:border-emerald-500 hover:bg-[#e8f5ee] dark:hover:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 font-bold text-sm rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-slate-600 dark:text-slate-400 font-medium mt-8">
            جميع الباقات تشمل فترة تجريبية • يمكنك الترقية أو الإلغاء في أي وقت
          </p>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS (كيف تعمل المنصة؟) */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>خطوات بسيطة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
              كيف تعمل <span className="text-[#279b57] dark:text-emerald-400">المنصة؟</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
              ابدأ رحلتك التعليمية في 4 خطوات بسيطة وسهلة
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'سجّل حسابك',
                desc: 'أنشئ حسابك مجاناً في دقيقة واحدة وابدأ رحلتك التعليمية',
                color: 'bg-blue-600',
                icon: UserPlus,
              },
              {
                step: '2',
                title: 'اختر مادتك',
                desc: 'تصفح الكورسات والمواد الدراسية واختر ما يناسب مستواك',
                color: 'bg-[#059669]',
                icon: BookOpen,
              },
              {
                step: '3',
                title: 'تعلم مع الخبراء',
                desc: 'احضر الدروس مباشرة أو شاهد المحاضرات المسجلة في أي وقت',
                color: 'bg-amber-600',
                icon: GraduationCap,
              },
              {
                step: '4',
                title: 'حقق التفوق',
                desc: 'أكمل الاختبارات واحصل على شهاداتك وتابع تقدمك المستمر',
                color: 'bg-purple-600',
                icon: Award,
              },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs p-7 pt-10 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className={`-top-4 absolute w-8 h-8 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center shadow-sm`}
                  >
                    {item.step}
                  </div>
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-5 shadow-md`}
                  >
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/auth"
              onClick={scrollToTop}
              className="px-8 py-3.5 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>ابدأ رحلتك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIVERSE EDUCATIONAL OPTIONS (خيارات تعليمية متنوعة) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>اختر طريقتك</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              خيارات تعليمية <span className="text-[#279b57] dark:text-emerald-400">متنوعة</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Right Card in RTL: معلمون محترفون */}
            <div className="bg-gradient-to-br from-[#e8f5ee]/70 via-white to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-all">
              <div className="text-right flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold mb-3">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>تعلم مع الخبراء</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">معلمون محترفون</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                  نخبة من أفضل المعلمين والخبراء في مختلف المجالات التعليمية
                </p>
                <Link
                  to="/teachers"
                  onClick={scrollToTop}
                  className="px-6 py-3 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 transition-colors"
                >
                  <span>استعرض المعلمين</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

              {/* Collage Thumbnail */}
              <div className="relative w-44 h-48 shrink-0 flex flex-col items-center justify-end">
                <div className="w-12 h-12 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 border border-[#279b57]/30 text-[#279b57] dark:text-emerald-400 flex items-center justify-center mb-auto self-end">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-md self-end">
                  <img
                    src="/assets/expert-teacher.jpg"
                    alt="معلم محترف"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-12 right-2 w-16 h-16 rounded-xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
                  <img
                    src="/assets/teacher-student.jpg"
                    alt="تعليم"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-[#279b57] text-white text-[11px] font-bold shadow-sm">
                  ⭐ +500 معلم
                </div>
              </div>
            </div>

            {/* Left Card in RTL: للأفراد والمتعلمين */}
            <div className="bg-gradient-to-br from-[#e8f5ee]/70 via-white to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-all">
              <div className="text-right flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold mb-3">
                  <Target className="w-3.5 h-3.5" />
                  <span>اكتسب المهارات</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">للأفراد والمتعلمين</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                  مسارات تعليمية مخصصة تناسب احتياجاتك ومستواك الدراسي
                </p>
                <Link
                  to="/auth"
                  onClick={scrollToTop}
                  className="px-6 py-3 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 transition-colors"
                >
                  <span>ابدأ التعلم الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

              {/* Collage Thumbnail */}
              <div className="relative w-44 h-48 shrink-0 flex flex-col items-center justify-end">
                <div className="w-12 h-12 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 border border-[#279b57]/30 text-[#279b57] dark:text-emerald-400 flex items-center justify-center mb-auto self-end">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-md self-end">
                  <img
                    src="/assets/individual-learning.jpg"
                    alt="تعلم فردي"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-12 right-2 w-16 h-16 rounded-xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
                  <img
                    src="/assets/students-group.jpg"
                    alt="طلاب"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-[#279b57] text-white text-[11px] font-bold shadow-sm">
                  👥 +10K طالب
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED COURSES SHOWCASE (أحدث الكورسات التعليمية - 6 منتجات مباشرة) */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4">
              <PlayCircle className="w-3.5 h-3.5" />
              <span>كورساتنا المميزة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
              أحدث الكورسات <span className="text-[#279b57] dark:text-emerald-400">التعليمية</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
              اكتشف مجموعة متنوعة من الكورسات التعليمية المميزة من أفضل المدرسين لجميع المراحل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
            {COURSES_DATA.slice(0, 6).map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                onClick={scrollToTop}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    {course.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-[#279b57] text-white text-xs font-bold shadow-sm">
                        {course.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-slate-900/75 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      {course.subject} · {course.grade}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-[#279b57] dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-2 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-bold py-3 border-y border-slate-100 dark:border-slate-800 tabular-nums">
                      <span>{course.instructor}</span>
                      <span>{course.lessonsCount} محاضرة · {course.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                      {course.price}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">ج.م</span>
                    {course.originalPrice && (
                      <span className="text-xs text-slate-400 line-through tabular-nums">
                        {course.originalPrice} ج.م
                      </span>
                    )}
                  </div>
                  <span className="px-4 py-2 bg-[#279b57] group-hover:bg-[#21854a] text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 transition-colors">
                    <span>تفاصيل الكورس</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              onClick={scrollToTop}
              className="px-8 py-3.5 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>استعرض جميع الكورسات ({COURSES_DATA.length} كورس)</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICES GRID (خدماتنا المميزة) */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4 shadow-2xs">
              <span>خدماتنا المميزة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
              كل ما تحتاجه في{' '}
              <span className="text-[#279b57] dark:text-emerald-400 underline decoration-[#279b57]/40 underline-offset-8">
                منصة واحدة
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-relaxed">
              نقدم لك مجموعة متكاملة من الأدوات والميزات التي تساعدك على إدارة العملية التعليمية بكفاءة واحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'تعليم ذكي مخصص',
                desc: 'الذكاء الاصطناعي يتابع تقدم كل طالب ويوجه الدروس وفق احتياجاته الفردية',
                icon: Target,
              },
              {
                num: '2',
                title: 'تعلم في أي وقت',
                desc: 'المنصة متاحة عبر الإنترنت مما يتيح للطلاب التعلم حسب جدولهم ووتيرتهم',
                icon: Clock,
              },
              {
                num: '3',
                title: 'تحليل الأداء بدقة',
                desc: 'تقارير مفصلة عن مستوى الطالب لكل مادة لمتابعة تطوره ومشاركة النتائج',
                icon: BarChart3,
              },
              {
                num: '4',
                title: 'محتوى تفاعلي',
                desc: 'فيديوهات تفاعلية وتدريبات ومسابقات تعليمية لجعل التعلم ممتعاً وفعالاً',
                icon: PlayCircle,
              },
              {
                num: '5',
                title: 'اختبارات ذكية',
                desc: 'اختبارات تقييم ذكية تساعد على تحسين مستوى التعليم بشكل مستمر',
                icon: Award,
              },
              {
                num: '6',
                title: 'أمان وخصوصية',
                desc: 'حماية كاملة للبيانات مع صلاحيات متعددة المستويات',
                icon: Shield,
              },
            ].map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.num}
                  className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-right shadow-xs hover:shadow-md transition-all"
                >
                  <div className="absolute -top-3.5 right-6 w-9 h-9 rounded-xl bg-[#279b57] text-white text-sm font-extrabold flex items-center justify-center shadow-sm">
                    {srv.num}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center mb-6 mr-0">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full py-2 px-3 pl-2 shadow-xs">
              <div className="flex items-center gap-2 pr-3 text-sm font-bold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
                <span>وأكثر من ذلك بكثير...</span>
              </div>
              <Link
                to="/auth"
                onClick={scrollToTop}
                className="px-5 py-2 bg-[#279b57] hover:bg-[#21854a] text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 transition-colors"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY US (لماذا نحن؟) */}
      <section id="features" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <img
                  src="/assets/teacher-student.jpg"
                  alt="معلمة تساعد طالبة"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xl font-black text-slate-900 dark:text-white tabular-nums">98%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-bold">رضا العملاء</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#279b57] text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Text Checklist Column */}
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>لماذا نحن؟</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
                مميزات تجعلنا <span className="text-[#279b57] dark:text-emerald-400">الخيار الأول</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-relaxed mb-8">
                نحن نقدم حلولاً تعليمية متكاملة تجمع بين سهولة الاستخدام والقوة الوظيفية، مع دعم فني متميز ومستمر.
              </p>

              <ul className="space-y-4">
                {[
                  'تجربة تعليمية شخصية بالذكاء الاصطناعي',
                  'متاحة في أي وقت ومكان',
                  'تقارير مفصلة لأولياء الأمور والمدارس',
                  'محتوى حديث وجذاب',
                  'دعم فني متواصل',
                  'تطبيقات للهواتف الذكية',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base font-bold text-slate-800 dark:text-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#279b57] dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: GREEN CTA BANNER */}
      <section className="py-20 bg-[#279b57] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            جاهز لبدء رحلتك التعليمية؟
          </h2>
          <p className="text-white/95 text-base sm:text-lg font-medium mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المؤسسات التعليمية التي تستخدم منصتنا لتحسين جودة التعليم
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/auth"
              onClick={scrollToTop}
              className="px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md transition-colors"
            >
              <span>سجل الآن مجاناً</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 border-2 border-white/80 hover:bg-white/15 text-white font-bold text-sm rounded-xl transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
