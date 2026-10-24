export interface Teacher {
  id: string;
  initial: string;
  name: string;
  subject: string;
  subjectKey: string;
  city: string;
  country: string;
  countryKey: string;
  pricePerSession: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  bio: string;
  curriculum: string;
  gradeLevel: string;
  verified: boolean;
  mode: 'both' | 'online' | 'in-person';
  experienceYears?: number;
  qualification?: string;
  specialties?: string[];
  availableSlots?: string[];
}

export interface CourseLesson {
  title: string;
  duration: string;
  isFreePreview?: boolean;
}

export interface Course {
  id: string;
  title: string;
  subject: string;
  subjectKey: string;
  instructor: string;
  instructorId: string;
  grade: string;
  lessonsCount: number;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  level: string;
  isUniversity?: boolean;
  faculty?: string;
  description: string;
  image: string;
  badge?: string;
  syllabus: CourseLesson[];
  features: string[];
}

export interface AssessmentQuestion {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const HERO_SLIDES = [
  {
    id: 1,
    badge: 'التعليم المتكامل',
    title: 'Student Academy (Student Center)',
    description: 'منصة تعليمية متكاملة تقدم خدمات التعليم أونلاين وحضوري للطلاب في مختلف المراحل الدراسية بجميع الدول العربية',
    image: '/assets/hero-slide-1.jpg',
  },
  {
    id: 2,
    badge: 'أونلاين بجودة عالية',
    title: 'تعلم من أي مكان',
    description: 'نوفر تجربة تعليمية مرنة تعتمد على المتابعة الفردية وجودة الشرح مع نخبة من أفضل المدرسين المتخصصين',
    image: '/assets/hero-slide-2.jpg',
  },
  {
    id: 3,
    badge: 'لكل طالب طريقته',
    title: 'متابعة فردية',
    description: 'نحرص على التواصل المستمر مع أولياء الأمور من خلال فريق إشراف متخصص لمتابعة مستوى الطلاب وتحقيق أفضل النتائج',
    image: '/assets/hero-slide-3.jpg',
  },
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 't1',
    initial: 'أ',
    name: 'أحمد محمد علي',
    subject: 'الرياضيات',
    subjectKey: 'Mathematics',
    city: 'القاهرة',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 150,
    currency: 'ج.م',
    rating: 4.9,
    reviewsCount: 124,
    studentsCount: 340,
    bio: 'مدرس رياضيات بخبرة 15 عام في تدريس المرحلة الثانوية والإعدادية. حاصل على ماجستير في الرياضيات التطبيقية ومتخصص في التفاضل والتكامل والجبر.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'both',
    experienceYears: 15,
    qualification: 'ماجستير في الرياضيات التطبيقية - جامعة القاهرة',
    specialties: ['التفاضل والتكامل', 'الجبر والهندسة الفراغية', 'الاستاتيكا والديناميكا'],
    availableSlots: ['السبت 4:00 م', 'الإثنين 6:00 م', 'الأربعاء 8:00 م'],
  },
  {
    id: 't2',
    initial: 'م',
    name: 'محمد حسن إبراهيم',
    subject: 'اللغة العربية',
    subjectKey: 'Arabic Language',
    city: 'الإسكندرية',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 120,
    currency: 'ج.م',
    rating: 4.8,
    reviewsCount: 98,
    studentsCount: 280,
    bio: 'متخصص في اللغة العربية والنحو والبلاغة. خبرة 10 سنوات في تأسيس الطلاب وتدريبهم على نظام الامتحانات الحديثة.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الإعدادية',
    verified: true,
    mode: 'both',
    experienceYears: 10,
    qualification: 'ليسانس الآداب والتربية قسم اللغة العربية - جامعة الإسكندرية',
    specialties: ['النحو والصرف', 'البلاغة والنصوص المتحررة', 'التأسيس الإملائي والتعبير'],
    availableSlots: ['الأحد 5:00 م', 'الثلاثاء 7:00 م', 'الخميس 6:00 م'],
  },
  {
    id: 't3',
    initial: 'س',
    name: 'سارة أحمد محمود',
    subject: 'اللغة الإنجليزية',
    subjectKey: 'English Language',
    city: 'الجيزة',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 200,
    currency: 'ج.م',
    rating: 5.0,
    reviewsCount: 156,
    studentsCount: 410,
    bio: 'مدرسة لغة إنجليزية معتمدة دولياً (CELTA). متخصصة في IELTS و TOEFL وتأسيس المحادثة والقواعد للمناهج الدولية.',
    curriculum: 'المنهج الدولي (IGCSE / American)',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'online',
    experienceYears: 11,
    qualification: 'شهادة CELTA المعتمدة من جامعة كامبريدج + بكالوريوس الألسن',
    specialties: ['التحضير لاختبار IELTS', 'مناهج IGCSE & SAT', 'المحادثة الصوتية والكتابة الأكاديمية'],
    availableSlots: ['السبت 7:00 م', 'الثلاثاء 5:00 م', 'الجمعة 4:00 م'],
  },
  {
    id: 't4',
    initial: 'ع',
    name: 'عبدالله سعيد الحربي',
    subject: 'الفيزياء',
    subjectKey: 'Physics',
    city: 'الرياض',
    country: 'السعودية',
    countryKey: 'saudi_arabia',
    pricePerSession: 180,
    currency: 'ج.م',
    rating: 4.9,
    reviewsCount: 87,
    studentsCount: 215,
    bio: 'دكتور في الفيزياء النظرية. خبرة 12 عام في تدريس الفيزياء للمرحلة الثانوية واختبارات القدرات والتحصيلي.',
    curriculum: 'المنهج السعودي',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'online',
    experienceYears: 12,
    qualification: 'دكتوراه في الفيزياء النظرية - جامعة الملك سعود',
    specialties: ['الفيزياء الكهربائية والمغناطيسية', 'الفيزياء الحديثة والكم', 'التدريب على التحصيلي العلمي'],
    availableSlots: ['الأحد 8:00 م', 'الأربعاء 6:00 م', 'الخميس 9:00 م'],
  },
  {
    id: 't5',
    initial: 'ف',
    name: 'فاطمة عبدالرحمن',
    subject: 'الكيمياء',
    subjectKey: 'Chemistry',
    city: 'جدة',
    country: 'السعودية',
    countryKey: 'saudi_arabia',
    pricePerSession: 160,
    currency: 'ج.م',
    rating: 4.8,
    reviewsCount: 74,
    studentsCount: 190,
    bio: 'متخصصة في الكيمياء العضوية والتحليلية. أسلوب شرح مبسط ومميز مع تدريبات تفاعلية وخرائط ذهنية.',
    curriculum: 'المنهج السعودي',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'both',
    experienceYears: 9,
    qualification: 'ماجستير الكيمياء العضوية - جامعة الملك عبدالعزيز',
    specialties: ['الكيمياء العضوية', 'الحسابات الكيميائية والاتزان', 'الكيمياء الكهربية والحرارية'],
    availableSlots: ['السبت 6:00 م', 'الإثنين 5:00 م', 'الأربعاء 7:00 م'],
  },
  {
    id: 't6',
    initial: 'خ',
    name: 'خالد محمود عثمان',
    subject: 'الأحياء',
    subjectKey: 'Biology',
    city: 'المنصورة',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 130,
    currency: 'ج.م',
    rating: 4.7,
    reviewsCount: 65,
    studentsCount: 175,
    bio: 'أستاذ أحياء بخبرة كبيرة. متخصص في التحضير للثانوية العامة والمراجعات النهائية مع رسوم توضيحية تفاعلية.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'both',
    experienceYears: 14,
    qualification: 'بكالوريوس العلوم والتربية قسم البيولوجي - جامعة المنصورة',
    specialties: ['البيولوجيا الجزيئية (DNA/RNA)', 'المناعة والهرمونات', 'التكاثر والدعامة والحركة'],
    availableSlots: ['الأحد 4:00 م', 'الثلاثاء 6:00 م', 'الخميس 8:00 م'],
  },
  {
    id: 't7',
    initial: 'ن',
    name: 'نورة سعد القحطاني',
    subject: 'الرياضيات',
    subjectKey: 'Mathematics',
    city: 'الدمام',
    country: 'السعودية',
    countryKey: 'saudi_arabia',
    pricePerSession: 170,
    currency: 'ج.م',
    rating: 4.9,
    reviewsCount: 92,
    studentsCount: 230,
    bio: 'معلمة رياضيات متميزة. حاصلة على جائزة أفضل معلمة على مستوى المنطقة الشرقية ومتخصصة في القدرات الكمي.',
    curriculum: 'المنهج السعودي',
    gradeLevel: 'المرحلة الإعدادية',
    verified: true,
    mode: 'online',
    experienceYears: 8,
    qualification: 'بكالوريوس الرياضيات التربوية - جامعة الإمام عبدالرحمن بن فيصل',
    specialties: ['تأسيس القدرات الكمي', 'الهندسة والإحصاء', 'الجبر للمرحلة المتوسطة والثانوية'],
    availableSlots: ['السبت 5:00 م', 'الإثنين 7:00 م', 'الأربعاء 5:00 م'],
  },
  {
    id: 't8',
    initial: 'ي',
    name: 'يوسف إبراهيم حسن',
    subject: 'العلوم',
    subjectKey: 'Science',
    city: 'أسيوط',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 100,
    currency: 'ج.م',
    rating: 4.8,
    reviewsCount: 54,
    studentsCount: 160,
    bio: 'مدرس علوم للمرحلة الإعدادية والابتدائية. أسلوب تفاعلي وممتع في الشرح مع تجارب علمية مبسطة.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الإعدادية',
    verified: true,
    mode: 'both',
    experienceYears: 7,
    qualification: 'بكالوريوس العلوم والتربية - جامعة أسيوط',
    specialties: ['علوم المرحلة الإعدادية', 'التجارب العلمية التفاعلية', 'تأسيس الفيزياء والكيمياء المبكر'],
    availableSlots: ['الأحد 6:00 م', 'الثلاثاء 4:00 م', 'الخميس 5:00 م'],
  },
  {
    id: 't9',
    initial: 'س',
    name: 'سارة أحمد حسن',
    subject: 'اللغة العربية',
    subjectKey: 'Arabic Language',
    city: 'الإسكندرية',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 120,
    currency: 'ج.م',
    rating: 4.9,
    reviewsCount: 81,
    studentsCount: 205,
    bio: 'معلمة لغة عربية حاصلة على ماجستير في الأدب العربي والنقد الحديث وخبرة واسعة في تدريس المرحلة الثانوية.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'both',
    experienceYears: 9,
    qualification: 'ماجستير الأدب العربي والنقد - جامعة الإسكندرية',
    specialties: ['الأدب والنصوص المتحررة', 'القواعد النحوية العليا', 'التعبير الإبداعي والوظيفي'],
    availableSlots: ['السبت 8:00 م', 'الإثنين 4:00 م', 'الأربعاء 6:00 م'],
  },
  {
    id: 't10',
    initial: 'م',
    name: 'محمود عبدالله',
    subject: 'الفيزياء',
    subjectKey: 'Physics',
    city: 'الجيزة',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 180,
    currency: 'ج.م',
    rating: 4.8,
    reviewsCount: 69,
    studentsCount: 185,
    bio: 'أستاذ فيزياء مع خبرة في تدريس الثانوية العامة والكليات الهندسية والعملية.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الجامعية',
    verified: true,
    mode: 'both',
    experienceYears: 13,
    qualification: 'ماجستير الفيزياء الهندسية - جامعة القاهرة',
    specialties: ['فيزياء إعدادي هندسة', 'الميكانيكا والديناميكا الحرارية', 'الدوائر الكهربية والإلكترونيات'],
    availableSlots: ['الأحد 7:00 م', 'الثلاثاء 8:00 م', 'الجمعة 6:00 م'],
  },
  {
    id: 't11',
    initial: 'ف',
    name: 'فاطمة الزهراء',
    subject: 'الكيمياء',
    subjectKey: 'Chemistry',
    city: 'القاهرة',
    country: 'مصر',
    countryKey: 'egypt',
    pricePerSession: 140,
    currency: 'ج.م',
    rating: 4.9,
    reviewsCount: 77,
    studentsCount: 195,
    bio: 'مدرسة كيمياء متميزة في شرح المناهج بطريقة مبسطة وتطبيقات عملية لطلاب الثانوي والجامعات.',
    curriculum: 'المنهج المصري',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'online',
    experienceYears: 10,
    qualification: 'دبلوم الكيمياء الحيوية والتحليلية - جامعة عين شمس',
    specialties: ['الكيمياء الحيوية لطلاب الطب والصيدلة', 'الكيمياء التحليلية', 'مراجعات ليلة الامتحان'],
    availableSlots: ['السبت 5:00 م', 'الثلاثاء 7:00 م', 'الخميس 7:00 م'],
  },
  {
    id: 't12',
    initial: 'خ',
    name: 'خالد إبراهيم',
    subject: 'اللغة الإنجليزية',
    subjectKey: 'English Language',
    city: 'الرياض',
    country: 'السعودية',
    countryKey: 'saudi_arabia',
    pricePerSession: 200,
    currency: 'ج.م',
    rating: 5.0,
    reviewsCount: 112,
    studentsCount: 310,
    bio: 'مدرس لغة إنجليزية معتمد دولياً مع شهادة IELTS وخبرة في المناهج الخليجية واختبار STEP.',
    curriculum: 'المنهج السعودي',
    gradeLevel: 'المرحلة الثانوية',
    verified: true,
    mode: 'online',
    experienceYears: 11,
    qualification: 'ماجستير اللغويات التطبيقية TESOL',
    specialties: ['التحضير لاختبار STEP و IELTS', 'قواعد اللغة الإنجليزية المتقدمة', 'مهارات الاستماع والقراءة السريعة'],
    availableSlots: ['الأحد 9:00 م', 'الإثنين 8:00 م', 'الأربعاء 9:00 م'],
  },
];

export const COURSES_DATA: Course[] = [
  {
    id: 'c1',
    title: 'المراجعة الشاملة في التفاضل والتكامل للثانوية العامة',
    subject: 'الرياضيات',
    subjectKey: 'Mathematics',
    instructor: 'أ. أحمد محمد علي',
    instructorId: 't1',
    grade: 'الصف الثالث الثانوي',
    lessonsCount: 24,
    duration: '18 ساعة',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    students: 420,
    level: 'متقدم',
    badge: 'الأكثر مبيعاً',
    image: '/assets/hero-slide-1.jpg',
    description: 'كورس متكامل يغطي جميع أبواب التفاضل والتكامل للصف الثالث الثانوي مع حل أكثر من 500 مسألة من امتحانات الأعوام السابقة والنماذج الاسترشادية.',
    features: ['مذكرات PDF شاملة القوانين', 'اختبار إلكتروني بعد كل محاضرة', 'متابعة مباشرة مع المعلم'],
    syllabus: [
      { title: 'الاشتقاق وتطبيقاته الهندسية والمعدلات الزمنية', duration: '3 ساعات', isFreePreview: true },
      { title: 'تفاضل وتكامل الدوال الأسية واللوغاريتمية', duration: '4 ساعات', isFreePreview: true },
      { title: 'سلوك الدالة ورسم المنحنيات والقيم العظمى والصغرى', duration: '5 ساعات' },
      { title: 'طرق التكامل والمساحات والحجوم الدورانية', duration: '6 ساعات' },
    ],
  },
  {
    id: 'c2',
    title: 'إتقان النحو والبلاغة من الصفر حتى الاحتراف',
    subject: 'اللغة العربية',
    subjectKey: 'Arabic Language',
    instructor: 'أ. محمد حسن إبراهيم',
    instructorId: 't2',
    grade: 'المرحلة الثانوية',
    lessonsCount: 18,
    duration: '14 ساعة',
    price: 250,
    originalPrice: 320,
    rating: 4.8,
    students: 315,
    level: 'متوسط - متقدم',
    badge: 'تأسيس شامل',
    image: '/assets/individual-learning.jpg',
    description: 'دورة تأسيسية وتطبيقية شاملة في القواعد النحوية والبلاغية، مصممة لتمكين الطالب من إعراب أي نص وفهم الصور البيانية والمحسنات البديعية بسهولة.',
    features: ['خرائط ذهنية لكل وحدة نحوية', 'تطبيقات عملية على النصوص المتحررة', 'تصحيح واجبات أسبوعي'],
    syllabus: [
      { title: 'أساسيات الجملة الاسمية والفعلية والنواسخ', duration: '3.5 ساعة', isFreePreview: true },
      { title: 'المنصوبات والمجرورات والتوابع في النحو العربي', duration: '4 ساعات' },
      { title: 'علم البيان (التشبيه، الاستعارة، الكناية، المجاز)', duration: '3.5 ساعة' },
      { title: 'علم البديع وعلم المعاني والتجربة الشعرية', duration: '3 ساعات' },
    ],
  },
  {
    id: 'c3',
    title: 'الكيمياء العضوية والكهربية بالخرائط الذهنية',
    subject: 'الكيمياء',
    subjectKey: 'Chemistry',
    instructor: 'أ. فاطمة عبدالرحمن',
    instructorId: 't5',
    grade: 'الصف الثالث الثانوي',
    lessonsCount: 20,
    duration: '16 ساعة',
    price: 300,
    originalPrice: 400,
    rating: 4.9,
    students: 290,
    level: 'متقدم',
    badge: 'مكثف',
    image: '/assets/teacher-student.jpg',
    description: 'وداعاً لصعوبة معادلات الكيمياء العضوية ومسائل الكيمياء الكهربية! تعلم كيفية الربط بين المركبات الكيميائية وحل مسائل الخلايا الجلفانية والتحليلية.',
    features: ['مخططات تفاعلات الكيمياء العضوية كاملة', 'بنك أسئلة محلول بالخطوات', 'مراجعات دورية مباشرة'],
    syllabus: [
      { title: 'مقدمة الكيمياء العضوية والهيدروكربونات الأليفاتية', duration: '4 ساعات', isFreePreview: true },
      { title: 'البنزين العطري ومشتقات الهيدروكربونات (الكحولات والأحماض)', duration: '5 ساعات' },
      { title: 'الخلايا الجلفانية وسلسلة الجهود الكهربية', duration: '3.5 ساعة' },
      { title: 'الخلايا الإلكتروليتية وقوانين فاراداي والتطبيقات', duration: '3.5 ساعة' },
    ],
  },
  {
    id: 'c4',
    title: 'تأسيس المحادثة والقواعد باللغة الإنجليزية (IELTS Prep)',
    subject: 'اللغة الإنجليزية',
    subjectKey: 'English Language',
    instructor: 'أ. سارة أحمد محمود',
    instructorId: 't3',
    grade: 'جميع المراحل',
    lessonsCount: 30,
    duration: '22 ساعة',
    price: 450,
    originalPrice: 600,
    rating: 5.0,
    students: 580,
    level: 'مبتدئ - متقدم',
    badge: 'الأعلى تقييماً ⭐',
    image: '/assets/students-group.jpg',
    description: 'البرنامج الأقوى لتطوير المهارات الأربع في اللغة الإنجليزية (Listening, Reading, Writing, Speaking) والتحضير المنهجي لاجتياز اختبار IELTS بدرجة 7.5+.',
    features: ['نماذج اختبارات IELTS محاكية للواقع', 'تصحيح مقالات Writing Task 1 & 2', 'جلسات محادثة تفاعلية'],
    syllabus: [
      { title: 'إتقان الأزمنة والتراكيب اللغوية المتقدمة (Grammar in Use)', duration: '5 ساعات', isFreePreview: true },
      { title: 'استراتيجيات القراءة السريعة وحل قطع الاستيعاب', duration: '5 ساعات', isFreePreview: true },
      { title: 'الكتابة الأكاديمية (Academic Essay & Graph Description)', duration: '6 ساعات' },
      { title: 'تطوير الطلاقة الصوتية واجتياز مقابلة المحادثة', duration: '6 ساعات' },
    ],
  },
  {
    id: 'c5',
    title: 'الفيزياء الحديثة والكهربية - شرح وحل مسائل',
    subject: 'الفيزياء',
    subjectKey: 'Physics',
    instructor: 'د. عبدالله سعيد الحربي',
    instructorId: 't4',
    grade: 'الصف الثالث الثانوي',
    lessonsCount: 28,
    duration: '21 ساعة',
    price: 380,
    originalPrice: 480,
    rating: 4.9,
    students: 360,
    level: 'متقدم',
    badge: 'شامل المسائل',
    image: '/assets/expert-teacher.jpg',
    description: 'شرح عميق ومبسط لقوانين التيار الكهربي، قانون أوم وكيرشوف، الحث الكهرومغناطيسي، والفيزياء الحديثة مع التركيز على مهارات التفكير العليا.',
    features: ['محاكاة تفاعلية للدوائر الكهربية', 'حل أكثر من 600 سؤال متدرج', 'ملخصات قوانين لكل فصل'],
    syllabus: [
      { title: 'التيار الكهربي وقانون أوم وقوانين كيرشوف', duration: '5 ساعات', isFreePreview: true },
      { title: 'التأثير المغناطيسي للتيار الكهربي وأجهزة القياس', duration: '5 ساعات' },
      { title: 'الحث الكهرومغناطيسي ودوائر التيار المتردد', duration: '6 ساعات' },
      { title: 'ازدواجية الموجة والجسيم والأطياف الذرية والليزر', duration: '5 ساعات' },
    ],
  },
  {
    id: 'c6',
    title: 'فيزياء عامة (1) وميكانيكا هندسية لطلاب كلية الهندسة',
    subject: 'الفيزياء',
    subjectKey: 'Physics',
    instructor: 'د. محمود عبدالله',
    instructorId: 't10',
    grade: 'الفرقة الإعدادية - هندسة',
    lessonsCount: 16,
    duration: '15 ساعة',
    price: 400,
    originalPrice: 500,
    rating: 4.9,
    students: 210,
    level: 'جامعي',
    isUniversity: true,
    faculty: 'كلية الهندسة',
    badge: 'جامعي متخصص',
    image: '/assets/hero-slide-2.jpg',
    description: 'مقرر مخصص لطلاب الفرقة الإعدادية بكليات الهندسة يغطي الاستاتيكا، اتزان القوى في الفراغ، خواص المادة، والديناميكا الحرارية مع حل شيتات الكليات.',
    features: ['حل شيتات وامتحانات ميدتيرم وفاينل', 'شرح باللغتين العربية والإنجليزية للمصطلحات', 'مجموعات نقاش علمية'],
    syllabus: [
      { title: 'المتجهات في الفراغ ثلاثي الأبعاد واتزان الجسيمات (3D Equilibrium)', duration: '4 ساعات', isFreePreview: true },
      { title: 'العزوم والازدواج واتزان الأجسام الجاسئة (Rigid Bodies)', duration: '4 ساعات' },
      { title: 'خواص المادة والمرونة وميكانيكا الموائع (Fluid Mechanics)', duration: '4 ساعات' },
      { title: 'قوانين الديناميكا الحرارية والغازات المثالية', duration: '3 ساعات' },
    ],
  },
  {
    id: 'c7',
    title: 'الكيمياء الحيوية والعضوية لطلاب الكليات الطبية والعلوم',
    subject: 'الكيمياء',
    subjectKey: 'Chemistry',
    instructor: 'د. فاطمة الزهراء',
    instructorId: 't11',
    grade: 'الفرقة الأولى - طب وصيدلة',
    lessonsCount: 22,
    duration: '19 ساعة',
    price: 450,
    originalPrice: 550,
    rating: 5.0,
    students: 195,
    level: 'جامعي',
    isUniversity: true,
    faculty: 'الكليات الطبية',
    badge: 'طب وصيدلة',
    image: '/assets/about-academy.jpg',
    description: 'شرح منهجي لمقررات Biochemistry & Organic Chemistry لطلاب كليات الطب البشري، الصيدلة، طب الأسنان، والعلوم مع ربط الجانب الكيميائي بالحالات الإكلينيكية.',
    features: ['ملخصات مصورة للمسارات الأيضية (Metabolism)', 'بنك أسئلة MCQ للامتحانات الطبية', 'مراجعات عملية قبل الاختبارات'],
    syllabus: [
      { title: 'كيمياء الكربوهيدرات والليبيدات (Carbohydrates & Lipids)', duration: '5 ساعات', isFreePreview: true },
      { title: 'الأحماض الأمينية والبروتينات والإنزيمات (Enzymology)', duration: '5 ساعات' },
      { title: 'الأيض الخلوي وإنتاج الطاقة (Bioenergetics & Krebs Cycle)', duration: '5 ساعات' },
      { title: 'الأحماض النووية والوراثة الجزيئية (Molecular Biology)', duration: '4 ساعات' },
    ],
  },
  {
    id: 'c8',
    title: 'الرياضيات المتقطعة وهياكل البيانات لطلاب حاسبات ومعلومات',
    subject: 'الرياضيات',
    subjectKey: 'Mathematics',
    instructor: 'أ. أحمد محمد علي',
    instructorId: 't1',
    grade: 'الفرقة الأولى - حاسبات',
    lessonsCount: 20,
    duration: '17 ساعة',
    price: 380,
    originalPrice: 480,
    rating: 4.9,
    students: 340,
    level: 'جامعي',
    isUniversity: true,
    faculty: 'كلية الحاسبات والمعلومات',
    badge: 'علوم الحاسب',
    image: '/assets/hero-slide-3.jpg',
    description: 'أساسيات الرياضيات المتقطعة (Discrete Mathematics) والمنطق الرياضي ونظرية الرسوم البيانية (Graph Theory) مع تطبيقاتها البرمجية في هياكل البيانات.',
    features: ['تطبيقات عملية وتمارين خوارزمية', 'حل امتحانات السنوات السابقة لكليات الحاسبات', 'دعم مستمر طوال الترم'],
    syllabus: [
      { title: 'المنطق الرياضي وطرق البرهان (Logic & Proofs)', duration: '4 ساعات', isFreePreview: true },
      { title: 'المجموعات والعلاقات والدوال والاستنتاج الرياضي', duration: '4 ساعات' },
      { title: 'نظرية الأعداد والتباديل والتوافيق (Combinatorics)', duration: '4.5 ساعة' },
      { title: 'نظرية الرسوم البيانية والأشجار (Graphs & Trees)', duration: '4.5 ساعة' },
    ],
  },
  {
    id: 'c9',
    title: 'البيولوجيا الجزيئية والمناعة للثانوية العامة',
    subject: 'الأحياء',
    subjectKey: 'Biology',
    instructor: 'أ. خالد محمود عثمان',
    instructorId: 't6',
    grade: 'الصف الثالث الثانوي',
    lessonsCount: 22,
    duration: '16 ساعة',
    price: 290,
    originalPrice: 360,
    rating: 4.8,
    students: 265,
    level: 'متقدم',
    badge: 'رسوم تفاعلية',
    image: '/assets/teacher-student.jpg',
    description: 'شرح تفصيلي مدعم بالرسوم التوضيحية والأنيميشن لأهم فصول الأحياء: المناعة في الكائنات الحية والبيولوجيا الجزيئية (DNA و RNA والهندسة الوراثية).',
    features: ['رسوم تخطيطية عالية الدقة', 'تدريبات شاملة على أسئلة الاستنتاج', 'متابعة دورية لمستوى الطالب'],
    syllabus: [
      { title: 'المناعة في النبات والمناعة الطبيعية في الإنسان', duration: '4 ساعات', isFreePreview: true },
      { title: 'المناعة المكتسبة (الخلطية والخلوية) وآلية عمل الأجسام المضادة', duration: '4 ساعات' },
      { title: 'تركيب وتضاعف DNA وإصلاح العيوب الوراثية', duration: '4 ساعات' },
      { title: 'الأحماض النووية الريبوسومية RNA وتخليق البروتين والهندسة الوراثية', duration: '4 ساعات' },
    ],
  },
  {
    id: 'c10',
    title: 'تأسيس القدرات الكمي والتحصيلي للمرحلة الثانوية',
    subject: 'الرياضيات',
    subjectKey: 'Mathematics',
    instructor: 'أ. نورة سعد القحطاني',
    instructorId: 't7',
    grade: 'المرحلة الثانوية - السعودية',
    lessonsCount: 26,
    duration: '20 ساعة',
    price: 420,
    originalPrice: 520,
    rating: 5.0,
    students: 490,
    level: 'جميع المستويات',
    badge: 'المنهج السعودي',
    image: '/assets/individual-learning.jpg',
    description: 'دورة متكاملة لتأسيس وتدريب طلاب وطالبات المرحلة الثانوية على مهارات الحل السريع في اختبارات القدرات العامة (القسم الكمي) والتحصيلي العلمي.',
    features: ['استراتيجيات الحل في أقل من دقيقة', 'تجميعات محوسب وورقي محدثة', 'اختبارات تجريبية محاكية لقياس'],
    syllabus: [
      { title: 'مهارات الحساب الذهني السريع والكسور والنسب المئوية', duration: '5 ساعات', isFreePreview: true },
      { title: 'الأسس والجذور والمعادلات والمتباينات الجبرية', duration: '5 ساعات' },
      { title: 'الهندسة المستوية والفراغية والزوايا والمثلثات', duration: '5 ساعات' },
      { title: 'الإحصاء والاحتمالات وأسئلة المقارنات والرسوم البيانية', duration: '5 ساعات' },
    ],
  },
  {
    id: 'c11',
    title: 'العلوم المتكاملة والتجارب العملية للمرحلة الإعدادية',
    subject: 'العلوم',
    subjectKey: 'Science',
    instructor: 'أ. يوسف إبراهيم حسن',
    instructorId: 't8',
    grade: 'المرحلة الإعدادية',
    lessonsCount: 16,
    duration: '12 ساعة',
    price: 200,
    originalPrice: 260,
    rating: 4.8,
    students: 230,
    level: 'مبتدئ - متوسط',
    badge: 'تفاعلي',
    image: '/assets/students-group.jpg',
    description: 'رحلة علمية شيقة تبسط مفاهيم الكيمياء والفيزياء والأحياء لطلاب المرحلة الإعدادية مع تجارب مصورة وملخصات شاملة لكل وحدة دراسية.',
    features: ['تجارب عملية مصورة', 'ملخصات مبسطة ومراجعات شهرية', 'تواصل مستمر مع ولي الأمر'],
    syllabus: [
      { title: 'التفاعلات الكيميائية والجدول الدوري الحديث', duration: '3 ساعات', isFreePreview: true },
      { title: 'الحركة والسرعة والعجلة والمرايا والعدسات', duration: '3 ساعات' },
      { title: 'الكون والنظام الشمسي والتكاثر في الكائنات الحية', duration: '3 ساعات' },
      { title: 'المبادئ الأساسية للوراثة والهرمونات', duration: '3 ساعات' },
    ],
  },
  {
    id: 'c12',
    title: 'المحاسبة المالية وإدارة الأعمال لطلاب كلية التجارة',
    subject: 'الرياضيات',
    subjectKey: 'Mathematics',
    instructor: 'أ. أحمد محمد علي',
    instructorId: 't1',
    grade: 'الفرقة الأولى - تجارة وإدارة أعمال',
    lessonsCount: 18,
    duration: '15 ساعة',
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    students: 275,
    level: 'جامعي',
    isUniversity: true,
    faculty: 'كلية التجارة وإدارة الأعمال',
    badge: 'عربي وإنجليزي',
    image: '/assets/hero-slide-1.jpg',
    description: 'تأسيس شامل في مبادئ المحاسبة المالية (Financial Accounting) والرياضة المالية والإحصاء التطبيقي لطلاب كليات التجارة (عربي وإنجليزي).',
    features: ['تطبيقات عملية على القوائم المالية', 'مذكرات شاملة للمصطلحات المحاسبية', 'حل امتحانات سابقة بالخطوات'],
    syllabus: [
      { title: 'المعادلة المحاسبية وقاعدة القيد المزدوج ودفتر اليومية', duration: '4 ساعات', isFreePreview: true },
      { title: 'الترحيل لدفتر الأستاذ وميزان المراجعة والتسويات الجردية', duration: '4 ساعات' },
      { title: 'إعداد القوائم المالية الختامية (قائمة الدخل والمركز المالي)', duration: '4 ساعات' },
      { title: 'أساسيات الرياضة المالية والفائدة البسيطة والمركبة', duration: '3 ساعات' },
    ],
  },
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    subject: 'الرياضيات',
    question: 'إذا كانت د(س) = 3س² - 12، فما قيمة س الموجبة التي تجعل د(س) = 0؟',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'بحل المعادلة 3س² = 12، نقسم على 3 فنحصل على س² = 4، ومنها القيمة الموجبة هي س = 2.',
  },
  {
    id: 2,
    subject: 'اللغة الإنجليزية',
    question: 'Choose the correct form: "If she _____ harder, she would have passed the exam."',
    options: ['studied', 'studies', 'had studied', 'has studied'],
    correctIndex: 2,
    explanation: 'هذه الحالة الشرطية الثالثة (Third Conditional) وتتكون من If + Past Perfect (had + p.p).',
  },
  {
    id: 3,
    subject: 'الفيزياء',
    question: 'وحدة قياس المقاومة النوعية لمادة موصل في النظام الدولي هي:',
    options: ['أوم / متر', 'أوم . متر', 'فولت / أمبير', 'أمبير . متر'],
    correctIndex: 1,
    explanation: 'المقاومة النوعية ρ = R · A / L وبالتالي وحدتها أوم × م² / م = أوم . متر (Ω·m).',
  },
  {
    id: 4,
    subject: 'اللغة العربية',
    question: 'ما إعراب كلمة (طالبٍ) في جملة: "ما حضر من طالبٍ متأخراً"؟',
    options: [
      'اسم مجرور لفظاً مرفوع محلاً على أنه فاعل',
      'مفعول به منصوب بالفتحة المقدرة',
      'مبتدأ مؤخر مجرور لفظاً',
      'حال منصوبة بالفتحة',
    ],
    correctIndex: 0,
    explanation: '(من) هنا حرف جر زائد لأنها سبقت بنفي وجاء بعدها نكرة، فـ (طالبٍ) فاعل مجرور لفظاً مرفوع محلاً.',
  },
  {
    id: 5,
    subject: 'الكيمياء',
    question: 'أي من العناصر الانتقالية التالية يشذ تركيبه الإلكتروني في المستوى الفرعي 3d؟',
    options: ['الحديد (Fe - 26)', 'الكروم (Cr - 24)', 'التيتانيوم (Ti - 22)', 'المنجنيز (Mn - 25)'],
    correctIndex: 1,
    explanation: 'الكروم (24) توزيعه [Ar] 4s¹ 3d⁵ لكي يكون المستوى الفرعي 3d نصف ممتلئ وأكثر استقراراً.',
  },
];

export interface TeacherFilters {
  search: string;
  country: string;
  city: string;
  subject: string;
  priceRange: string;
  curriculum?: string;
  gradeLevel?: string;
}

export function filterTeachers(teachers: Teacher[], filters: TeacherFilters): Teacher[] {
  return teachers.filter((t) => {
    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase();
      const matchesName = t.name.toLowerCase().includes(q);
      const matchesSubject = t.subject.toLowerCase().includes(q) || t.subjectKey.toLowerCase().includes(q);
      const matchesCity = t.city.toLowerCase().includes(q);
      if (!matchesName && !matchesSubject && !matchesCity) return false;
    }

    if (filters.country && filters.country !== 'all') {
      if (t.countryKey !== filters.country && t.country !== filters.country) return false;
    }

    if (filters.city && filters.city !== 'all') {
      if (t.city !== filters.city) return false;
    }

    if (filters.subject && filters.subject !== 'all') {
      if (t.subject !== filters.subject && t.subjectKey !== filters.subject) return false;
    }

    if (filters.priceRange && filters.priceRange !== 'all') {
      if (filters.priceRange === 'low' && t.pricePerSession > 130) return false;
      if (filters.priceRange === 'medium' && (t.pricePerSession <= 130 || t.pricePerSession > 170)) return false;
      if (filters.priceRange === 'high' && t.pricePerSession <= 170) return false;
    }

    if (filters.curriculum && filters.curriculum !== 'all') {
      if (!t.curriculum.includes(filters.curriculum)) return false;
    }

    if (filters.gradeLevel && filters.gradeLevel !== 'all') {
      if (!t.gradeLevel.includes(filters.gradeLevel)) return false;
    }

    return true;
  });
}

export function filterCourses(courses: Course[], search: string, subjectFilter: string, universityOnly = false): Course[] {
  return courses.filter((c) => {
    if (universityOnly && !c.isUniversity) return false;
    if (subjectFilter && subjectFilter !== 'all') {
      if (c.subjectKey !== subjectFilter && c.subject !== subjectFilter) return false;
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchInstructor = c.instructor.toLowerCase().includes(q);
      const matchSubject = c.subject.toLowerCase().includes(q);
      if (!matchTitle && !matchInstructor && !matchSubject) return false;
    }
    return true;
  });
}

export function getCourseById(courses: Course[], id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getTeacherById(teachers: Teacher[], id: string): Teacher | undefined {
  return teachers.find((t) => t.id === id);
}

export interface AssessmentResult {
  score: number;
  total: number;
  percentage: number;
  levelLabel: string;
  recommendation: string;
}

export function evaluateAssessment(answers: Record<number, number>, questions: AssessmentQuestion[]): AssessmentResult {
  let score = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correctIndex) {
      score += 1;
    }
  }
  const total = questions.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  let levelLabel = 'مبتدئ - يحتاج تأسيس';
  let recommendation = 'ننصحك بالبدء بكورسات التأسيس والمتابعة الفردية مع معلم متخصص لبناء قاعدة قوية.';

  if (percentage >= 80) {
    levelLabel = 'متفوق (مستوى متقدم)';
    recommendation = 'مستواك ممتاز! ننصحك بالانضمام إلى كورسات المراجعة النهائية والتدريبات المتقدمة لتحقيق الدرجة النهائية.';
  } else if (percentage >= 60) {
    levelLabel = 'جيد جداً (مستوى متوسط متقدم)';
    recommendation = 'لديك أساس جيد جداً، وننصحك بحضور المحاضرات التفاعلية الأونلاين لتقوية نقاط الضعف لديك.';
  } else if (percentage >= 40) {
    levelLabel = 'متوسط (يحتاج تدعيم)';
    recommendation = 'تحتاج إلى مراجعة بعض المفاهيم الأساسية مع معلم متخصص وحل المزيد من الاختبارات الدورية.';
  }

  return {
    score,
    total,
    percentage,
    levelLabel,
    recommendation,
  };
}

export function validateAuthForm(mode: 'login' | 'register', email: string, password: string, name?: string): { valid: boolean; error?: string } {
  if (mode === 'register' && (!name || name.trim().length < 2)) {
    return { valid: false, error: 'يرجى إدخال الاسم الكامل بشكل صحيح' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { valid: false, error: 'يرجى إدخال بريد إلكتروني صحيح' };
  }
  if (!password || password.length < 6) {
    return { valid: false, error: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' };
  }
  return { valid: true };
}
