import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, HelpCircle, RotateCcw, Award, ArrowLeft } from 'lucide-react';
import { ASSESSMENT_QUESTIONS, evaluateAssessment } from '../utils/platformLogic';

export const AssessmentPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const allAnswered = Object.keys(selectedAnswers).length === ASSESSMENT_QUESTIONS.length;

  const handleCalculateResult = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const result = submitted ? evaluateAssessment(selectedAnswers, ASSESSMENT_QUESTIONS) : null;

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl border border-slate-800">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-3.5 py-1 rounded-lg text-xs mb-3">
            التشخيص الأكاديمي الذكي مجاناً
          </span>
          <h1 className="text-2xl sm:text-4xl font-black mb-3 text-white">
            اختبار تحديد المستوى الدراسي
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            أجب عن الأسئلة التقييمية التالية بدقة ليقوم نظام الأكاديمية بتحديد مستواك الحالي وترشيح البرنامج الدراسي والمعلمين الأنسب لك.
          </p>
        </div>

        {/* Result Card */}
        {submitted && result && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-[#279b57] shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#279b57] text-white flex items-center justify-center shadow-lg shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[#279b57] dark:text-emerald-400 uppercase">
                    نتيجة التقييم الأكاديمي
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                    {result.levelLabel} ({result.percentage}%)
                  </h2>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                    الإجابات الصحيحة: {result.score} من {result.total}
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#279b57] bg-slate-100 dark:bg-slate-800 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة الاختبار
              </button>
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium leading-relaxed my-5">
              {result.recommendation}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="bg-[#279b57] hover:bg-[#1e7a44] text-white px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 transition-colors"
              >
                <span>استكشف الكورسات المرشحة لك</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/teachers"
                className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                احجز جلسة استشارية مع معلم
              </Link>
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-6">
          {ASSESSMENT_QUESTIONS.map((q, qIdx) => {
            const picked = selectedAnswers[q.id];
            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1e7a44] dark:text-emerald-300 bg-[#e8f5ee] dark:bg-emerald-950/60 border border-[#279b57]/20 dark:border-emerald-800/50 px-3 py-1 rounded-lg">
                    <HelpCircle className="w-3.5 h-3.5" />
                    السؤال {qIdx + 1} من {ASSESSMENT_QUESTIONS.length} • {q.subject}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-5">
                  {q.question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = picked === optIdx;
                    const isCorrect = submitted && optIdx === q.correctIndex;
                    const isWrongSelected = submitted && isSelected && optIdx !== q.correctIndex;

                    let btnStyle =
                      'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:border-[#279b57] dark:hover:border-emerald-500/60';
                    if (isSelected && !submitted) {
                      btnStyle =
                        'border-[#279b57] bg-[#e8f5ee] dark:bg-emerald-950/60 text-[#1e7a44] dark:text-emerald-200 ring-2 ring-[#279b57]/20';
                    } else if (isCorrect) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200';
                    } else if (isWrongSelected) {
                      btnStyle =
                        'border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`text-right px-4 py-3.5 rounded-xl border font-bold text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isSelected && !submitted && (
                          <CheckCircle2 className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                        )}
                        {isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        {!submitted && (
          <div className="mt-8 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
              أجبت على {Object.keys(selectedAnswers).length} من أصل {ASSESSMENT_QUESTIONS.length}{' '}
              أسئلة
            </span>
            <button
              type="button"
              disabled={!allAnswered}
              onClick={handleCalculateResult}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm transition-all ${
                allAnswered
                  ? 'bg-[#279b57] hover:bg-[#1e7a44] text-white shadow-lg cursor-pointer'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
              }`}
            >
              إظهار النتيجة والتوصية الأكاديمية
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
