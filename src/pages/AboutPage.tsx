import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Users, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 transition-colors">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold px-3.5 py-1 rounded-lg text-xs mb-3">
            من نحن • Student Center Academy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 text-white">
            أكاديمية الطالب للتعليم الإلكتروني
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            المنصة العربية الرائدة التي تجمع بين نخبة المعلمين الأكاديميين وأحدث تقنيات الفصول التفاعلية المباشرة لخدمة الطلاب من التأسيس وحتى التخرج الجامعي.
          </p>
        </div>
      </div>

      {/* Main Story & Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">
              رسالتنا ورؤيتنا التربوية
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
              انطلقت أكاديمية الطالب بهدف سد الفجوة بين التعليم التقليدي واحتياجات الطالب العصري. نحن نؤمن بأن كل طالب يمتلك قدرات فريدة تحتاج إلى توجيه شخصي، متابعة دقيقة، وبيئة تعليمية آمنة ومحفزة توفر الوقت والجهد.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'انتقاء المعلمين عبر اختبارات تربوية وعلمية صارمة',
                'تغطية شاملة للمناهج المصرية والخليجية والدولية',
                'تقارير أداء دورية فورية لولي الأمر بعد كل حصة',
                'دعم فني وأكاديمي متواصل طوال أيام الأسبوع',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-sm font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/auth"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-black text-sm transition-colors"
              >
                انضم كطالب الآن
              </Link>
              <Link
                to="/parent-register"
                className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                تسجيل حساب ولي أمر
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
              <img
                src="/assets/about-academy.jpg"
                alt="عن أكاديمية الطالب"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: Target,
              title: 'التركيز على النتائج',
              desc: 'نبني خطة دراسية واضحة لكل طالب مع قياس دوري لمستوى التقدم والتحصيل قبل الاختبارات النهائية.',
            },
            {
              icon: ShieldCheck,
              title: 'الأمان والخصوصية التامة',
              desc: 'بيئة تعليمية رقمية آمنة ومراقبة تضمن راحة البال لأولياء الأمور والتركيز الكامل للطلاب.',
            },
            {
              icon: Users,
              title: 'شراكة حقيقية مع الأسرة',
              desc: 'لوحة تحكم خاصة لولي الأمر لمتابعة الحضور، الواجبات، وتقييمات المعلمين أولاً بأول.',
            },
          ].map((val, i) => {
            const Icon = val.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
