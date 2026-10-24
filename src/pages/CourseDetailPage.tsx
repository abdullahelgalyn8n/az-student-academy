import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  PlayCircle,
  Clock,
  Users,
  Star,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  FileText,
  Award,
} from 'lucide-react';
import { COURSES_DATA, getCourseById } from '../utils/platformLogic';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [enrolled, setEnrolled] = useState(false);

  const course = getCourseById(COURSES_DATA, courseId || '') || COURSES_DATA[0];

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
          <Link to="/courses" className="hover:text-[#279b57] dark:hover:text-emerald-400 inline-flex items-center gap-1">
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى الكورسات</span>
          </Link>
          <span>/</span>
          <span className="text-[#279b57] dark:text-emerald-400">{course.subject}</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white truncate max-w-xs">{course.title}</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Right 2 Columns in RTL: Course Info & Syllabus */}
          <div className="lg:col-span-2 space-y-8 text-right">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-extrabold">
                  {course.subject}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                  {course.grade}
                </span>
                {course.badge && (
                  <span className="px-3.5 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4 leading-snug">
                {course.title}
              </h1>

              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-100 dark:border-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 tabular-nums">
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
                  <span>{course.lessonsCount} محاضرة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
                  <span>{course.students} طالب</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span>{course.rating} تقييم</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  to={`/teachers/${course.instructorId}`}
                  className="inline-flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#279b57] text-white font-black flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-bold">محاضر الكورس</div>
                    <div className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#279b57] dark:group-hover:text-emerald-400 transition-colors">
                      {course.instructor}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Syllabus Section */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                محتوى المنهج والمحاضرات ({course.syllabus.length} وحدات رئيسية)
              </h2>
              <div className="space-y-3.5">
                {course.syllabus.map((lesson, idx) => (
                  <div
                    key={lesson.title}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-8 h-8 rounded-xl bg-[#279b57] text-white text-xs font-extrabold flex items-center justify-center shrink-0 tabular-nums">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          {lesson.title}
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          المدة: {lesson.duration}
                        </span>
                      </div>
                    </div>
                    {lesson.isFreePreview && (
                      <span className="px-3 py-1 rounded-lg bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold shrink-0">
                        معاينة مجانية
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Enrollment Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-[#279b57] dark:border-emerald-500 overflow-hidden shadow-lg sticky top-28 text-right">
            <div className="h-48 overflow-hidden relative">
              <img
                src={course.image}
                alt={course.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-[#279b57] flex items-center justify-center shadow-lg">
                  <PlayCircle className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                    {course.price}
                  </span>{' '}
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-300">ج.م</span>
                  {course.originalPrice && (
                    <span className="mr-2 text-xs text-slate-400 line-through tabular-nums">
                      {course.originalPrice} ج.م
                    </span>
                  )}
                </div>
                <span className="px-3 py-1 rounded-full bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold">
                  وصول كامل مدى الفصل
                </span>
              </div>

              {enrolled ? (
                <div className="p-4 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-sm font-bold flex items-center gap-2.5 mb-6">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>تم تفعيل اشتراكك في الكورس بنجاح! يمكنك بدء المشاهدة الآن.</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setEnrolled(true)}
                  className="w-full py-4 bg-[#279b57] hover:bg-[#21854a] text-white font-bold text-base rounded-2xl shadow-md transition-colors mb-6 cursor-pointer"
                >
                  اشترك في الكورس الآن
                </button>
              )}

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold border-t border-slate-100 dark:border-slate-800 pt-5">
                <div className="text-slate-900 dark:text-white font-black mb-2">مميزات الاشتراك:</div>
                {course.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>ملفات ومذكرات PDF قابلة للتحميل</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>شهادة إتمام معتمدة من الأكاديمية</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>ضمان استرداد الرسوم خلال 7 أيام</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
