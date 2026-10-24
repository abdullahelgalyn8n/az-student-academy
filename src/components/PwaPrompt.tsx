import React, { useState } from 'react';
import { X, Smartphone, CheckCircle2 } from 'lucide-react';

export const PwaPrompt: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);

  if (dismissed) return null;

  const handleInstall = () => {
    setInstalled(true);
    setTimeout(() => {
      setDismissed(true);
    }, 1800);
  };

  return (
    <div
      role="region"
      aria-label="تثبيت تطبيق Student Academy"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-5 sm:right-5 z-40 sm:w-[360px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all"
    >
      {/* Top Green Accent Strip */}
      <div className="h-1.5 w-full bg-[#279b57]" />

      <div className="p-4 relative">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="إغلاق نافذة التثبيت"
          className="absolute top-3 left-3 p-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white p-1 flex items-center justify-center shrink-0">
            <img
              src="/assets/student-academy-logo.png"
              alt="Student Academy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-right">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">Student Academy</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">حمّل التطبيق للوصول السريع</p>
          </div>
        </div>

        {installed ? (
          <div className="py-2 px-3 bg-[#e8f5ee] dark:bg-emerald-950 text-[#279b57] dark:text-emerald-400 rounded-xl text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>تم حفظ اختصار التطبيق بنجاح على جهازك!</span>
          </div>
        ) : (
          <>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4 font-medium">
              احصل على تجربة أفضل وأسرع عبر تثبيت التطبيق على جهازك مباشرة!
            </p>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleInstall}
                className="flex-1 py-2.5 px-4 bg-[#279b57] hover:bg-[#21854a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>تثبيت التطبيق</span>
              </button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="py-2.5 px-4 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                لاحقاً
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
