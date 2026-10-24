import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Users, Bell, FileSpreadsheet } from 'lucide-react';

export const ParentRegisterPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Panel */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800">
          <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold px-3 py-1 rounded-lg text-xs mb-4">
            بوابة أولياء الأمور
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mb-4 text-white">
            تابع رحلة أبنائك التعليمية لحظة بلحظة
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            يتيح لك حساب ولي الأمر في أكاديمية الطالب الاطلاع الكامل على جدول الحصص، تقارير الحضور، ومستوى التقدم الدراسي لكل ابن من أبنائك.
          </p>

          <div className="space-y-5">
            {[
              {
                icon: Bell,
                title: 'إشعارات فورية للحضور والواجبات',
                desc: 'رسائل تنبيه عند بدء الحصة وانتهائها وتقييم المعلم لأداء الطالب.',
              },
              {
                icon: FileSpreadsheet,
                title: 'تقارير شهرية مفصلة',
                desc: 'تحليل شامل لنقاط القوة والجوانب التي تحتاج لمزيد من التدريب.',
              },
              {
                icon: Users,
                title: 'إدارة حسابات عدة أبناء من مكان واحد',
                desc: 'ربط جميع أبنائك في مراحلهم الدراسية المختلفة بحساب إشرافي واحد.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-0.5">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Panel */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                تم تفعيل حساب ولي الأمر بنجاح!
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6">
                تم إرسال بيانات الدخول وكود ربط حساب الأبناء إلى رقم الواتساب والبريد الإلكتروني المسجل.
              </p>
              <Link
                to="/"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm"
              >
                العودة للرئيسية
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-extrabold text-xs mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>تسجيل حساب إشراف عائلي</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                بيانات ولي الأمر
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    اسم ولي الأمر الكامل
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="الأستاذ / ..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    رقم الجوال (واتساب للتقارير)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    عدد الأبناء في المراحل الدراسية
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500">
                    <option>طالب واحد</option>
                    <option>طالبان</option>
                    <option>3 طلاب أو أكثر</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  المرحلة الدراسية للأبناء والمواد المطلوب متابعتها
                </label>
                <textarea
                  rows={3}
                  placeholder="مثال: الصف الثالث الثانوي (فيزياء ورياضيات) - الصف الأول الإعدادي (لغة إنجليزية)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-black text-sm shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
              >
                إنشاء حساب ولي الأمر وتلقي التقارير
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
