import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Award,
  Clock,
  Users,
  Video,
  CheckCircle2,
  Calendar,
  BookOpen,
  ArrowRight,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { TEACHERS_DATA, COURSES_DATA, getTeacherById } from '../utils/platformLogic';

export const TeacherDetailPage: React.FC = () => {
  const { teacherId } = useParams<{ teacherId: string }>();
  const teacher = getTeacherById(TEACHERS_DATA, teacherId || '') || TEACHERS_DATA[0];
  const slots = teacher.availableSlots || [
    'السبت والثلاثاء - 6:00 مساءً',
    'الأحد والأربعاء - 7:30 مساءً',
    'الاثنين والخميس - 5:00 مساءً',
  ];
  const [selectedSlot, setSelectedSlot] = useState<string>(slots[0]);
  const [booked, setBooked] = useState(false);

  const teacherCourses = COURSES_DATA.filter((c) => c.instructorId === teacher.id);

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 pb-20 transition-colors">
      {/* Breadcrumb & Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-bold">
            <Link to="/teachers" className="hover:text-emerald-400 inline-flex items-center gap-1 transition-colors">
              <ArrowRight className="w-4 h-4" />
              <span>العودة لقائمة المعلمين</span>
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{teacher.subject}</span>
            <span>/</span>
            <span className="text-white">{teacher.name}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-3xl bg-[#279b57] text-white font-black text-4xl flex items-center justify-center shadow-xl border-4 border-white/10 shrink-0">
                {teacher.initial}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold px-3 py-1 rounded-lg">
                    {teacher.subject}
                  </span>
                  {teacher.verified && (
                    <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-lg flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> معلم معتمد
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  {teacher.name}
                </h1>
                <p className="text-slate-300 text-sm sm:text-base font-medium flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    {teacher.city}، {teacher.country}
                  </span>
                  <span>•</span>
                  <span>{teacher.gradeLevel}</span>
                  <span>•</span>
                  <span>خبرة {teacher.experienceYears || 10} سنوات</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800/90 border border-slate-700 px-6 py-4 rounded-2xl">
              <div className="text-center pl-4 border-l border-slate-700">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-xl">
                  <Star className="w-5 h-5 fill-amber-400" />
                  {teacher.rating}
                </div>
                <span className="text-xs text-slate-400 font-bold">{teacher.reviewsCount} تقييم</span>
              </div>
              <div className="text-center pl-4 border-l border-slate-700">
                <div className="text-white font-black text-xl">{teacher.studentsCount}+</div>
                <span className="text-xs text-slate-400 font-bold">طالب مسجل</span>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 font-black text-xl">
                  {teacher.pricePerSession} {teacher.currency}
                </div>
                <span className="text-xs text-slate-400 font-bold">سعر الحصة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Right 2 Columns: Bio, Specialties, Courses */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#279b57] dark:text-emerald-400" />
                نبذة عن المعلم والمؤهلات العلمية
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-base font-medium">
                {teacher.bio}
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/70 mb-6">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                  المؤهل الأكاديمي والمناهج المدعومة
                </div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  {teacher.qualification || `تخصص تدريس ${teacher.subject} - ${teacher.curriculum}`}
                </div>
              </div>

              {teacher.specialties && teacher.specialties.length > 0 && (
                <>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-3">
                    التخصصات الدقيقة ومجالات التدريس:
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {teacher.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-[#e8f5ee] dark:bg-emerald-950/60 text-[#1e7a44] dark:text-emerald-300 border border-[#279b57]/20 dark:border-emerald-800/60 px-4 py-2 rounded-xl text-sm font-bold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Teacher Courses */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#279b57] dark:text-emerald-400" />
                الكورسات المتاحة مع {teacher.name} ({teacherCourses.length})
              </h2>

              {teacherCourses.length === 0 ? (
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  يمكنك حجز حصص فردية مباشرة مع المعلم من نموذج الحجز الجانبي.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {teacherCourses.map((course) => (
                    <div
                      key={course.id}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col justify-between hover:border-[#279b57] transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-extrabold bg-[#e8f5ee] dark:bg-emerald-950 text-[#1e7a44] dark:text-emerald-300 px-2.5 py-1 rounded-md">
                            {course.badge || course.subject}
                          </span>
                          <span className="text-sm font-black text-[#279b57] dark:text-emerald-400">
                            {course.price} ج.م
                          </span>
                        </div>
                        <h3 className="font-black text-slate-900 dark:text-white text-base mb-2">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                          {course.description}
                        </p>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="w-full text-center bg-[#279b57] hover:bg-[#1e7a44] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                      >
                        عرض تفاصيل الكورس
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Left Column: Direct Session Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md sticky top-28">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                    حصة خاصة أونلاين (ساعة كاملة)
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    {teacher.pricePerSession} {teacher.currency}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
                اختر الموعد المناسب للحصة القادمة:
              </h3>

              <div className="space-y-2.5 mb-6">
                {slots.map((slot, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedSlot(slot);
                      setBooked(false);
                    }}
                    className={`w-full text-right px-4 py-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                      selectedSlot === slot
                        ? 'bg-[#279b57] text-white border-[#279b57] shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#279b57]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      {slot}
                    </span>
                    {selectedSlot === slot && <CheckCircle2 className="w-4 h-4" />}
                  </button>
                ))}
              </div>

              {booked ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="font-extrabold text-emerald-900 dark:text-emerald-200 text-sm mb-1">
                    تم تأكيد طلب الحجز المبدئي!
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    تم حجز موعد ({selectedSlot}) مع {teacher.name}.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setBooked(true)}
                  className="w-full bg-[#279b57] hover:bg-[#1e7a44] text-white font-black py-4 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  تأكيد حجز الحصة الآن
                </button>
              )}

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-bold">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  إمكانية الحجز الفردي (1-on-1) أو مجموعات مصغرة
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  حصة تجريبية أولى لتقييم التوافق الدراسي
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
