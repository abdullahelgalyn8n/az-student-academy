import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Clock,
  Star,
  CheckCircle2,
  PlayCircle,
  GraduationCap,
  ArrowLeft,
  Users,
} from 'lucide-react';
import { COURSES_DATA, Course, filterCourses } from '../utils/platformLogic';

export const CoursesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);

  const categories = [
    { key: 'all', label: 'الكل', icon: '🎓' },
    { key: 'Mathematics', label: 'الرياضيات (Mathematics)', icon: '📐' },
    { key: 'Arabic Language', label: 'اللغة العربية (Arabic)', icon: '📚' },
    { key: 'English Language', label: 'اللغة الإنجليزية (English)', icon: '🇬🇧' },
    { key: 'Physics', label: 'الفيزياء (Physics)', icon: '⚛️' },
    { key: 'Chemistry', label: 'الكيمياء (Chemistry)', icon: '🧪' },
    { key: 'Biology', label: 'الأحياء (Biology)', icon: '🧬' },
    { key: 'Science', label: 'العلوم (Science)', icon: '🔬' },
  ];

  const filtered = filterCourses(COURSES_DATA, search, activeCategory, false);

  const handleEnroll = (e: React.MouseEvent, course: Course) => {
    e.preventDefault();
    if (!enrolledCourseIds.includes(course.id)) {
      setEnrolledCourseIds([...enrolledCourseIds, course.id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 pb-20 transition-colors">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#e8f5ee]/90 to-[#f8faf9] dark:from-emerald-950/50 dark:to-slate-950 pt-16 pb-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#279b57] text-white text-xs font-bold mb-4">
            مكتبة الكورسات المتكاملة ({COURSES_DATA.length} كورس)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            استكشف كورساتنا التعليمية
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium mb-8">
            تعلم من أفضل المدرسين واكتسب مهارات جديدة مع كورساتنا المتميزة لجميع المراحل الدراسية والجامعية
          </p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-500 dark:text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن كورس بالاسم، المادة، أو المعلم..."
              aria-label="ابحث عن كورس..."
              className="w-full pr-12 pl-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-xs focus:outline-none focus:border-[#279b57] text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#279b57] text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mb-6 flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
          <span>إجمالي الكورسات المعروضة: {filtered.length} كورس</span>
          {(search || activeCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
              className="text-xs text-[#279b57] dark:text-emerald-400 hover:underline cursor-pointer"
            >
              إعادة تعيين الفلتر
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-14 text-center max-w-xl mx-auto">
            <BookOpen className="w-14 h-14 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">لا توجد كورسات مطابقة</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">جرّب البحث بكلمات أخرى أو استعراض جميع الأقسام</p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
              className="px-6 py-2.5 bg-[#279b57] text-white text-sm font-bold rounded-xl hover:bg-[#21854a] cursor-pointer"
            >
              عرض جميع الكورسات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((course) => {
              const isEnrolled = enrolledCourseIds.includes(course.id);
              return (
                <div
                  key={course.id}
                  className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between text-right"
                >
                  <div>
                    {/* Thumbnail */}
                    <Link to={`/courses/${course.id}`} className="block relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={course.image}
                        alt={course.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      {course.badge && (
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-[#279b57] text-white text-xs font-bold shadow-sm">
                          {course.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs font-bold text-white">
                        <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                          {course.subject}
                        </span>
                        <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                          {course.grade}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6">
                      <Link to={`/courses/${course.id}`}>
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[#279b57] dark:group-hover:text-emerald-400 transition-colors">
                          {course.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-2 mb-4 leading-relaxed">
                        {course.description}
                      </p>

                      <Link
                        to={`/teachers/${course.instructorId}`}
                        className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-[#279b57] dark:hover:text-emerald-400 mb-4 inline-flex items-center gap-1.5"
                      >
                        <GraduationCap className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
                        <span>{course.instructor}</span>
                      </Link>

                      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-bold py-3 border-y border-slate-100 dark:border-slate-800 tabular-nums">
                        <span className="inline-flex items-center gap-1">
                          <PlayCircle className="w-3.5 h-3.5 text-[#279b57] dark:text-emerald-400" />
                          {course.lessonsCount} محاضرة
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#279b57] dark:text-emerald-400" />
                          {course.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#279b57] dark:text-emerald-400" />
                          {course.students} طالب
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                        {course.price}
                      </span>{' '}
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">ج.م</span>
                      {course.originalPrice && (
                        <span className="block text-[11px] text-slate-400 line-through tabular-nums">
                          بدلاً من {course.originalPrice} ج.م
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/courses/${course.id}`}
                        className="px-3.5 py-2.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors"
                      >
                        التفاصيل
                      </Link>
                      {isEnrolled ? (
                        <span className="px-3.5 py-2.5 bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 text-xs font-bold rounded-xl inline-flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>مشترك</span>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => handleEnroll(e, course)}
                          className="px-4 py-2.5 bg-[#279b57] hover:bg-[#21854a] text-white text-xs font-bold rounded-xl inline-flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>اشترك</span>
                          <ArrowLeft className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
