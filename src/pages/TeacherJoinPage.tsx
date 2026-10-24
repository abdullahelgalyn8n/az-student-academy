import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Briefcase, Laptop } from 'lucide-react';

export const TeacherJoinPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const subjects = [
    'الرياضيات (Mathematics)',
    'اللغة العربية (Arabic)',
    'اللغة الإنجليزية (English)',
    'الفيزياء (Physics)',
    'الكيمياء (Chemistry)',
    'الأحياء (Biology)',
    'العلوم (Science)',
    'الدراسات الاجتماعية',
    'البرمجة وعلوم الحاسب',
  ];

  const stages = [
    'المرحلة الابتدائية',
    'المرحلة الإعدادية / المتوسطة',
    'المرحلة الثانوية',
    'المرحلة الجامعية',
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl border border-slate-800">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-3 py-1 rounded-lg text-xs mb-3">
            بوابة انضمام المعلمين والمحاضرين
          </span>
          <h1 className="text-2xl sm:text-4xl font-black mb-3 text-white">
            انضم إلى نخبة المعلمين في أكاديمية الطالب
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            نرحب بالمعلمين المتميزين وأعضاء هيئة التدريس الجامعيين لتقديم حصص وكورسات أونلاين لآلاف الطلاب في مصر والعالم العربي.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                تم إرسال طلب الانضمام كمعلم بنجاح!
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6">
                ستقوم اللجنة الأكاديمية بمراجعة سيرتك الذاتية والتواصل معك خلال 48 ساعة لتحديد موعد المقابلة التجريبية.
              </p>
              <Link
                to="/teachers"
                className="inline-block bg-[#279b57] hover:bg-[#1e7a44] text-white px-6 py-3 rounded-xl font-bold text-sm"
              >
                عرض صفحة المعلمين
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                استمارة التقديم الأكاديمي للمعلمين
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    الاسم الرباعي واللقب العلمي
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="أ. / د. ..."
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
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    التخصص الأساسي
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]">
                    {subjects.map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    المرحلة الدراسية المستهدفة
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]">
                    {stages.map((stg) => (
                      <option key={stg} value={stg}>
                        {stg}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    عدد سنوات الخبرة
                  </label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={5}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    المؤهل العلمي والجامعة
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="بكالوريوس / ماجستير / دكتوراه..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  نبذة مختصرة عن خبراتك في التدريس الأونلاين والأدوات المستخدمة
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="أستخدم القلم الضوئي والسبورة التفاعلية وخبرة في تدريس مناهج..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs font-bold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                  <Award className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>عائد مادي مجزٍ وعمولة تنافسية</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                  <Laptop className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>نظام فصول افتراضية متكامل</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                  <Briefcase className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                  <span>حرية كاملة في تحديد جدولك</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#279b57] hover:bg-[#1e7a44] text-white py-3.5 rounded-xl font-black text-sm shadow-lg transition-all cursor-pointer"
              >
                إرسال طلب الانضمام كمعلم
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
