import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Code2,
  Stethoscope,
  Scale,
  Briefcase,
  Cpu,
  CheckCircle2,
  BookOpen,
  Star,
} from 'lucide-react';
import { COURSES_DATA } from '../utils/platformLogic';

interface UniversityPageProps {
  mode?: 'university' | 'online-lectures';
}

export const UniversityPage: React.FC<UniversityPageProps> = ({ mode = 'university' }) => {
  const isLecturesMode = mode === 'online-lectures';
  const universityCourses = COURSES_DATA.filter((c) => c.isUniversity);

  const faculties = [
    {
      icon: Cpu,
      name: 'كليات الهندسة والتكنولوجيا',
      desc: 'شرح مواد الرياضيات الهندسية، الميكانيكا، الدوائر الكهربائية، والرسم الهندسي.',
      coursesCount: '42 مساق جامعي',
    },
    {
      icon: Code2,
      name: 'كليات الحاسبات والذكاء الاصطناعي',
      desc: 'هياكل البيانات، الخوارزميات، البرمجة الكائنية، قواعد البيانات، وتعلم الآلة.',
      coursesCount: '38 مساق جامعي',
    },
    {
      icon: Stethoscope,
      name: 'الكليات الطبية والصيدلة والعلوم',
      desc: 'الكيمياء العضوية والحيوية، الفسيولوجي، الأناتومي، والفيزياء الحيوية.',
      coursesCount: '31 مساق جامعي',
    },
    {
      icon: Briefcase,
      name: 'كليات التجارة وإدارة الأعمال (En/Ar)',
      desc: 'المحاسبة المالية، محاسبة التكاليف، الاقتصاد الجزئي والكلي، والإحصاء التطبيقي.',
      coursesCount: '29 مساق جامعي',
    },
    {
      icon: Scale,
      name: 'كليات الحقوق والشريعة والقانون',
      desc: 'القانون المدني، الجنائي، الدستوري، وتدريبات القضايا العملية.',
      coursesCount: '19 مساق جامعي',
    },
    {
      icon: GraduationCap,
      name: 'مشاريع التخرج والبحث الأكاديمي',
      desc: 'إشراف أكاديمي متكامل ومساعدة في البرمجة والتحليل الإحصائي ومناقشات التخرج.',
      coursesCount: 'إشراف فردي ومجموعات',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 pb-20 transition-colors">
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-3.5 py-1 rounded-lg text-xs mb-4">
              {isLecturesMode
                ? 'نظام المحاضرات التفاعلية المباشرة'
                : 'برامج الدعم الأكاديمي لطلاب الجامعات'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5 text-white">
              {isLecturesMode
                ? 'محاضرات أونلاين مباشرة بأحدث تقنيات الفصول الافتراضية'
                : 'تفوق في دراستك الجامعية مع نخبة الأساتذة والمعيدين'}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {isLecturesMode
                ? 'تواصل صوت وصورة، سبورة ذكية تفاعلية، مشاركة شاشة فورية، وتسجيل كامل لكل محاضرة لمراجعتها في أي وقت قبل الامتحانات.'
                : 'نقدم شروحات معمقة ومراجعات ميدتيرم وفاينل مخصصة لطلاب الجامعات الحكومية والخاصة والدولية في مصر والوطن العربي.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/teachers"
                className="bg-[#279b57] hover:bg-[#1e7a44] text-white px-7 py-3.5 rounded-xl font-black text-sm shadow-lg transition-all"
              >
                احجز محاضرتك الجامعية الآن
              </Link>
              <Link
                to="/courses"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/15 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
              >
                تصفح المساقات المتاحة
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl relative">
              <img
                src="/assets/individual-learning.jpg"
                alt="محاضرات جامعية أونلاين"
                className="w-full h-80 object-cover"
              />
              <div className="bg-slate-900/95 p-5 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                  <span className="font-bold text-emerald-400">● بث مباشر عالي الجودة HD</span>
                  <span>تسجيل تلقائي للمحاضرات</span>
                </div>
                <p className="font-bold text-sm text-white">
                  قاعات دراسية تفاعلية فردية وجماعية مصممة لطلاب الكليات العملية والنظرية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
            التخصصات والكليات الجامعية المدعومة
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            اختر كليتك واحصل على خطة مذاكرة ومراجعة مخصصة لمقرراتك الجامعية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-[#279b57]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950/60 text-[#279b57] dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#1e7a44] dark:text-emerald-400 bg-[#e8f5ee] dark:bg-emerald-950/60 px-3 py-1 rounded-lg">
                    {item.coursesCount}
                  </span>
                  <Link
                    to="/teachers"
                    className="text-xs font-black text-slate-900 dark:text-white hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                  >
                    عرض المحاضرين ←
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated University Courses Section */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[#279b57] dark:text-emerald-400 font-extrabold text-xs block mb-1">
                مساقات جامعية مسجلة ومباشرة
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                أبرز كورسات المرحلة الجامعية المتاحة الآن
              </h3>
            </div>
            <Link
              to="/courses"
              className="text-sm font-bold text-[#279b57] dark:text-emerald-400 hover:underline"
            >
              تصفح كل الكورسات ({COURSES_DATA.length}) ←
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universityCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-lg">
                      {course.faculty || course.subject}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-bold text-[#279b57] dark:text-emerald-400">
                        {course.instructor}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400" /> {course.rating}
                      </span>
                    </div>
                    <h4 className="font-black text-slate-900 dark:text-white text-base mb-2">
                      {course.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                      {course.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-black text-[#279b57] dark:text-emerald-400 text-base">
                    {course.price} ج.م
                  </span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="bg-[#279b57] hover:bg-[#1e7a44] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    تفاصيل المساق
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
              لماذا يفضل طلاب الجامعات منصة أكاديمية الطالب؟
            </h3>
            <div className="space-y-3.5">
              {[
                'شرح مطابق لتوصيف المقرر الخاص بجامعتك وكليتك بالتحديد',
                'حل امتحانات السنوات السابقة (Midterm & Final Past Papers)',
                'مواعيد مرنة صباحية ومسائية تناسب جدول محاضراتك الجامعي',
                'إمكانية تكوين مجموعة خاصة مع زملائك في نفس الدفعة بتكلفة مخفضة',
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-200 text-sm font-bold"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-2xl p-6 sm:p-8 text-center border border-slate-800 dark:border-slate-700">
            <BookOpen className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-xl font-black mb-2">هل تحتاج مساعدة في مقرر جامعي محدد؟</h4>
            <p className="text-slate-300 text-sm mb-6">
              أرسل اسم المادة وتوصيف المقرر وسيقوم المستشار الأكاديمي بترشيح الدكتور أو المعيد المختص فوراً.
            </p>
            <Link
              to="/auth"
              className="w-full inline-block bg-[#279b57] hover:bg-[#1e7a44] text-white py-3.5 rounded-xl font-black text-sm transition-colors"
            >
              اطلب محاضراً لمادتك الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
