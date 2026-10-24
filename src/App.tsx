import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PwaPrompt } from './components/PwaPrompt';
import { HomePage } from './pages/HomePage';
import { TeachersPage } from './pages/TeachersPage';
import { TeacherDetailPage } from './pages/TeacherDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { UniversityPage } from './pages/UniversityPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { ParentRegisterPage } from './pages/ParentRegisterPage';
import { TeacherJoinPage } from './pages/TeacherJoinPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('student-academy-theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('student-academy-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('student-academy-theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        dir="rtl"
        className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200"
      >
        <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/teachers/join" element={<TeacherJoinPage />} />
            <Route path="/teachers/:teacherId" element={<TeacherDetailPage />} />
            <Route
              path="/online-lectures"
              element={<UniversityPage mode="online-lectures" />}
            />
            <Route
              path="/university-students"
              element={<UniversityPage mode="university" />}
            />
            <Route path="/level-assessment" element={<AssessmentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/parent-register" element={<ParentRegisterPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <PwaPrompt />
      </div>
    </BrowserRouter>
  );
}
