import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Lock, Mail, Phone, User, ShieldCheck } from 'lucide-react';
import { validateAuthForm } from '../utils/platformLogic';

export const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<'student' | 'parent' | 'teacher'>('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const validation = validateAuthForm(mode, email, password, name);
    if (!validation.valid) {
      setErrorMsg(validation.error || 'يرجى مراجعة البيانات المدخلة');
      return;
    }

    setSuccessMsg(
      mode === 'login'
        ? 'تم تسجيل الدخول بنجاح! مرحباً بك في أكاديمية الطالب.'
        : 'تم إنشاء حسابك بنجاح! يمكنك الآن حجز حصصك وكورساتك.'
    );
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] dark:bg-slate-950 py-14 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="inline-block bg-white p-2 rounded-2xl shadow-xs border border-slate-100 mb-3">
            <img
              src="/assets/student-academy-logo.png"
              alt="أكاديمية الطالب"
              className="h-14 w-auto mx-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">
            {mode === 'login' ? 'تسجيل الدخول إلى حسابك' : 'إنشاء حساب جديد في الأكاديمية'}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 font-medium">
            بوابتك للتفوق الدراسي مع نخبة المعلمين المعتمدين
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrorMsg(null);
              setSuccessMsg(null);
            }}
            className={`py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white dark:bg-slate-900 text-[#279b57] dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            تسجيل الدخول
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setErrorMsg(null);
              setSuccessMsg(null);
            }}
            className={`py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-white dark:bg-slate-900 text-[#279b57] dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            حساب جديد
          </button>
        </div>

        {/* Role Selector */}
        <div className="mb-5">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            نوع الحساب:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'student', label: 'طالب' },
              { id: 'parent', label: 'ولي أمر' },
              { id: 'teacher', label: 'معلم' },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id as 'student' | 'parent' | 'teacher')}
                className={`py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                  role === r.id
                    ? 'border-[#279b57] bg-[#e8f5ee] dark:bg-emerald-950/60 text-[#1e7a44] dark:text-emerald-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {errorMsg && (
          <div className="mb-4 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-3 rounded-xl text-xs font-bold">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="mb-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                الاسم الكامل
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك ثلاثي"
                  className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                رقم الهاتف (واتساب)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010XXXXXXXX"
                  className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              كلمة المرور
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#279b57]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#279b57] hover:bg-[#1e7a44] text-white py-3.5 rounded-xl font-black text-sm shadow-lg transition-all cursor-pointer mt-2"
          >
            {mode === 'login' ? 'دخول للمنصة' : 'إنشاء الحساب الآن'}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 font-bold">
            <ShieldCheck className="w-4 h-4 text-[#279b57] dark:text-emerald-400" />
            اتصال آمن ومشفر
          </span>
          <Link to="/" className="font-bold text-[#279b57] dark:text-emerald-400 hover:underline">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};
