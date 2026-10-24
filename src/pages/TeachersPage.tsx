import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Star,
  Award,
  Users,
  CheckCircle2,
  SlidersHorizontal,
  UserPlus,
  Eye,
  MapPin,
} from 'lucide-react';
import {
  TEACHERS_DATA,
  filterTeachers,
  Teacher,
} from '../utils/platformLogic';

export const TeachersPage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [country, setCountry] = useState<string>('all');
  const [subject, setSubject] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [bookingTeacher, setBookingTeacher] = useState<Teacher | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const filteredTeachers = filterTeachers(TEACHERS_DATA, {
    search,
    country,
    city: 'all',
    subject,
    priceRange,
  });

  const handleBookConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingTeacher(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 pb-20 transition-colors">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-3.5 py-1 rounded-lg text-xs mb-3">
              نخبة المعلمين المعتمدين ({TEACHERS_DATA.length} معلماً خبيراً)
            </span>
            <h1 className="text-3xl sm:text-4xl font-black mb-3 text-white">
              اختر معلمك الخصوصي بعناية
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
              فريق متكامل من المعلمين والخبراء الأكاديميين لتدريس جميع المناهج المصرية، الخليجية، والدولية ومواد الجامعات.
            </p>
          </div>
          <Link
            to="/teachers/join"
            className="bg-[#279b57] hover:bg-[#1e7a44] text-white px-6 py-3.5 rounded-xl font-black text-sm flex items-center gap-2 shadow-lg transition-all shrink-0"
          >
            <UserPlus className="w-4 h-4" />
            انضم كمعلم في الأكاديمية
          </Link>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-5 sm:p-6 transition-colors">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث باسم المعلم أو المادة..."
                className="w-full pr-11 pl-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#279b57] transition-colors"
              />
            </div>

            {/* Subject Select */}
            <div className="relative">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                aria-label="تصفية حسب المادة"
                className="w-full pr-10 pl-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#279b57]"
              >
                <option value="all">جميع المواد الدراسية</option>
                <option value="Mathematics">الرياضيات (Mathematics)</option>
                <option value="Arabic Language">اللغة العربية (Arabic)</option>
                <option value="English Language">اللغة الإنجليزية (English)</option>
                <option value="Physics">الفيزياء (Physics)</option>
                <option value="Chemistry">الكيمياء (Chemistry)</option>
                <option value="Biology">الأحياء (Biology)</option>
                <option value="Science">العلوم (Science)</option>
                <option value="Social Studies">الدراسات الاجتماعية</option>
              </select>
            </div>

            {/* Country Select */}
            <div>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                aria-label="تصفية حسب الدولة"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#279b57]"
              >
                <option value="all">جميع الدول</option>
                <option value="Saudi Arabia">المملكة العربية السعودية</option>
                <option value="Egypt">مصر</option>
                <option value="UAE">الإمارات العربية المتحدة</option>
                <option value="Kuwait">الكويت</option>
                <option value="Qatar">قطر</option>
              </select>
            </div>

            {/* Price Range Select */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                aria-label="تصفية حسب السعر"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#279b57]"
              >
                <option value="all">جميع الفئات السعرية</option>
                <option value="low">اقتصادي (حتى 130 ج.م)</option>
                <option value="medium">متوسط (130 - 170 ج.م)</option>
                <option value="high">متقدم (أكثر من 170 ج.م)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredTeachers.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800">
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
              لا توجد نتائج مطابقة لبحثك حالياً
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              جرب تغيير الفلاتر أو البحث بكلمة أخرى.
            </p>
            <button
              onClick={() => {
                setSubject('all');
                setCountry('all');
                setPriceRange('all');
                setSearch('');
              }}
              className="bg-[#279b57] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1e7a44] transition-colors cursor-pointer"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-[#279b57]/50 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-[#279b57] text-white font-black text-xl flex items-center justify-center shadow-sm shrink-0">
                        {teacher.initial}
                      </div>
                      <div>
                        <Link
                          to={`/teachers/${teacher.id}`}
                          className="font-black text-lg text-slate-900 dark:text-white hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors block"
                        >
                          {teacher.name}
                        </Link>
                        <span className="inline-block text-xs font-extrabold text-[#1e7a44] dark:text-emerald-300 bg-[#e8f5ee] dark:bg-emerald-950/60 border border-[#279b57]/20 dark:border-emerald-800/50 px-2.5 py-0.5 rounded-md mt-1">
                          {teacher.subject} • {teacher.gradeLevel}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50 px-2.5 py-1 rounded-lg text-xs font-black shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {teacher.rating}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                    {teacher.bio}
                  </p>

                  {/* Location & Curriculum */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#279b57] dark:text-emerald-400" />
                      {teacher.city} - {teacher.country}
                    </span>
                    <span className="text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg">
                      {teacher.curriculum}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-800/70 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                      <Award className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                      <span>خبرة {teacher.experienceYears || 8} سنوات</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                      <Users className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{teacher.studentsCount}+ طالب</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50/90 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-bold">
                      سعر الحصة
                    </span>
                    <span className="text-lg font-black text-[#279b57] dark:text-emerald-400">
                      {teacher.pricePerSession} {teacher.currency}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/teachers/${teacher.id}`}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#279b57] hover:text-[#279b57] text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      الملف
                    </Link>
                    <button
                      onClick={() => setBookingTeacher(teacher)}
                      className="bg-[#279b57] hover:bg-[#1e7a44] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                    >
                      احجز حصة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {bookingTeacher && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl">
            {bookingSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                  تم استلام طلب الحجز بنجاح!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  سيتواصل معك فريق التنسيق الأكاديمي لتأكيد موعد الحصة التجريبية مع{' '}
                  {bookingTeacher.name}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookConfirm}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    حجز حصة مع {bookingTeacher.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setBookingTeacher(null)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold cursor-pointer"
                  >
                    إغلاق ✕
                  </button>
                </div>

                <div className="bg-[#e8f5ee] dark:bg-emerald-950/60 border border-[#279b57]/30 dark:border-emerald-800/60 rounded-xl p-3.5 mb-5 text-xs text-[#1e7a44] dark:text-emerald-200 font-bold">
                  التخصص: {bookingTeacher.subject} ({bookingTeacher.gradeLevel}) —{' '}
                  {bookingTeacher.pricePerSession} {bookingTeacher.currency} / حصة
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      اسم الطالب رباعي
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسم الطالب"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      رقم الهاتف (واتساب)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010XXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#279b57] hover:bg-[#1e7a44] text-white py-3.5 rounded-xl font-black text-sm shadow-lg transition-all cursor-pointer"
                >
                  تأكيد الحجز الآن
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
