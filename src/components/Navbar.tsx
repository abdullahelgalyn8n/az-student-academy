import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

export type PageRoute =
  | 'home'
  | 'university-students'
  | 'online-lectures'
  | 'courses'
  | 'level-assessment'
  | 'teachers'
  | 'about'
  | 'auth'
  | 'parent-register'
  | 'teachers-join';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: { label: string; to: string; isAnchor?: boolean }[] = [
    { label: 'الرئيسية', to: '/' },
    { label: 'طلاب الجامعات', to: '/university-students' },
    { label: 'المحاضرات الأونلاين', to: '/online-lectures' },
    { label: 'الكورسات', to: '/courses' },
    { label: 'تقييم المستوى', to: '/level-assessment' },
    { label: 'المعلمون', to: '/teachers' },
    { label: 'من نحن', to: '/about' },
    { label: 'تواصل معنا', to: '#contact', isAnchor: true },
  ];

  const handleAnchorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const footerEl = document.getElementById('contact');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo (Right side in RTL) */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 shrink-0 focus:outline-none"
          aria-label="Student Academy الرئيسية"
        >
          <div className="bg-white rounded-xl p-1 flex items-center justify-center">
            <img
              src="/assets/student-academy-logo.png"
              alt="Student Academy"
              referrerPolicy="no-referrer"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] font-bold">
          {navItems.map((item) => {
            const isActive =
              !item.isAnchor &&
              (item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to));

            if (item.isAnchor) {
              return (
                <a
                  key={item.label}
                  href="#contact"
                  onClick={handleAnchorClick}
                  className="whitespace-nowrap shrink-0 text-slate-700 dark:text-slate-200 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive
                    ? 'text-[#279b57] dark:text-emerald-400 font-black border-b-2 border-[#279b57] dark:border-emerald-400'
                    : 'text-slate-700 dark:text-slate-200 hover:text-[#279b57] dark:hover:text-emerald-400'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Left Side Actions (Theme Toggle + Auth + CTA) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <Link
            to="/auth"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-[#279b57] dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            تسجيل الدخول
          </Link>

          <Link
            to="/auth"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-5 py-2.5 text-sm font-bold text-white bg-[#279b57] hover:bg-[#21854a] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            ابدأ الآن
          </Link>
        </div>

        {/* Mobile Hamburger + Theme Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive =
              !item.isAnchor &&
              (item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to));

            if (item.isAnchor) {
              return (
                <a
                  key={item.label}
                  href="#contact"
                  onClick={handleAnchorClick}
                  className="block w-full text-right px-4 py-2.5 rounded-xl text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`block w-full text-right px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive
                    ? 'bg-[#e8f5ee] dark:bg-emerald-950/60 text-[#279b57] dark:text-emerald-400'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <Link
              to="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-bold text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#279b57] hover:bg-[#21854a] rounded-xl"
            >
              ابدأ الآن
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
