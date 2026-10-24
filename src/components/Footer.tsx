import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="bg-[#f8f9fa] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-10 text-slate-700 dark:text-slate-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Column 1 (Right in RTL): Brand & Bio */}
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-2xl p-2 shadow-2xs">
              <img
                src="/assets/student-academy-logo.png"
                alt="Student Academy"
                referrerPolicy="no-referrer"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs font-medium">
              منصة تعليمية متكاملة تقدم خدمات التعليم أونلاين وحضوري للطلاب في مختلف المراحل الدراسية. نوفر تجربة تعليمية مرنة تعتمد على المتابعة الفردية وجودة الشرح.
            </p>
            <div className="pt-1">
              <a
                href="https://www.facebook.com/share/1FxcSktu6L/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحتنا على فيسبوك"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e8f5ee] dark:bg-emerald-950/80 text-[#279b57] dark:text-emerald-400 hover:bg-[#279b57] hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-5">روابط سريعة</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  الكورسات التعليمية
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  المعلمون المتخصصون
                </Link>
              </li>
              <li>
                <Link
                  to="/auth"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers/join"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  انضم كمعلم
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-5">خدماتنا</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link
                  to="/parent-register"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  إدارة ومتابعة الطلاب
                </Link>
              </li>
              <li>
                <Link
                  to="/online-lectures"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  المحاضرات الأونلاين
                </Link>
              </li>
              <li>
                <Link
                  to="/university-students"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  منصة طلاب الجامعات
                </Link>
              </li>
              <li>
                <Link
                  to="/level-assessment"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  اختبار تقييم المستوى
                </Link>
              </li>
              <li>
                <Link
                  to="/parent-register"
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
                >
                  التقارير والإحصائيات
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-5">تواصل معنا</h3>
            <ul className="space-y-3.5 text-sm">
              {['01514135491', '01021942893', '01004877520', '01557770611'].map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors font-bold tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#279b57] dark:text-emerald-400 shrink-0" />
                    <span dir="ltr">{phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <p className="text-center sm:text-right">
            © 2026 Student Academy (Student Center). جميع الحقوق محفوظة. | تم التصميم بواسطة{' '}
            <a
              href="https://digitfans.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#279b57] dark:text-emerald-400 font-bold hover:underline"
            >
              
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              onClick={scrollToTop}
              className="hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/about"
              onClick={scrollToTop}
              className="hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
