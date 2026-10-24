import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TEACHERS_DATA,
  COURSES_DATA,
  ASSESSMENT_QUESTIONS,
  filterTeachers,
  filterCourses,
  getCourseById,
  getTeacherById,
  evaluateAssessment,
  validateAuthForm,
} from './platformLogic';

test('filterTeachers filters by country, subject, and search query', () => {
  const all = filterTeachers(TEACHERS_DATA, {
    search: '',
    country: 'all',
    city: 'all',
    subject: 'all',
    priceRange: 'all',
  });
  assert.equal(all.length, TEACHERS_DATA.length);

  const saudiOnly = filterTeachers(TEACHERS_DATA, {
    search: '',
    country: 'saudi_arabia',
    city: 'all',
    subject: 'all',
    priceRange: 'all',
  });
  assert.equal(saudiOnly.every((t) => t.countryKey === 'saudi_arabia'), true);
  assert.equal(saudiOnly.length > 0, true);

  const mathTeachers = filterTeachers(TEACHERS_DATA, {
    search: 'أحمد',
    country: 'all',
    city: 'all',
    subject: 'الرياضيات',
    priceRange: 'all',
  });
  assert.equal(mathTeachers.length, 1);
  assert.equal(mathTeachers[0].name, 'أحمد محمد علي');
});

test('filterCourses filters by subject and university flag on expanded catalog', () => {
  assert.equal(COURSES_DATA.length, 12);

  const physicsCourses = filterCourses(COURSES_DATA, '', 'Physics', false);
  assert.equal(physicsCourses.length, 2);

  const uniCourses = filterCourses(COURSES_DATA, '', 'all', true);
  assert.equal(uniCourses.length, 4);
  assert.equal(uniCourses.every((c) => c.isUniversity), true);
});

test('getCourseById and getTeacherById retrieve exact items', () => {
  const c1 = getCourseById(COURSES_DATA, 'c1');
  assert.ok(c1);
  assert.equal(c1.subject, 'الرياضيات');
  assert.equal(c1.syllabus.length > 0, true);

  const t1 = getTeacherById(TEACHERS_DATA, 't1');
  assert.ok(t1);
  assert.equal(t1.name, 'أحمد محمد علي');
});

test('evaluateAssessment calculates score and level accurately', () => {
  const perfectAnswers: Record<number, number> = {};
  for (const q of ASSESSMENT_QUESTIONS) {
    perfectAnswers[q.id] = q.correctIndex;
  }
  const resultPerfect = evaluateAssessment(perfectAnswers, ASSESSMENT_QUESTIONS);
  assert.equal(resultPerfect.percentage, 100);
  assert.equal(resultPerfect.score, ASSESSMENT_QUESTIONS.length);
  assert.equal(resultPerfect.levelLabel.includes('متفوق'), true);

  const zeroResult = evaluateAssessment({}, ASSESSMENT_QUESTIONS);
  assert.equal(zeroResult.percentage, 0);
  assert.equal(zeroResult.score, 0);
});

test('validateAuthForm enforces email, password, and registration name rules', () => {
  assert.equal(validateAuthForm('login', 'invalid-email', '123456').valid, false);
  assert.equal(validateAuthForm('login', 'student@example.com', '123').valid, false);
  assert.equal(validateAuthForm('login', 'student@example.com', '123456').valid, true);
  assert.equal(validateAuthForm('register', 'student@example.com', '123456', '').valid, false);
  assert.equal(validateAuthForm('register', 'student@example.com', '123456', 'أحمد محمد').valid, true);
});
