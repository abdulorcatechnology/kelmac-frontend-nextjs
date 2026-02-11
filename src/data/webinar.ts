export interface Webinar {
  id: string;
  title: string;
  instructor: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  backgroundImage: string;
  slug: string;
}

export const webinars: Webinar[] = [
  {
    id: '1',
    title:
      'Mastering ISO 45001:2018 Compliance - Effectively Managing Occupational Health And Safety Indicators With The Kelmac Group',
    instructor: {
      name: 'Ins.R.D barma',
      avatar: '/images/bg/webinar-1',
    },
    date: '2024-11-30',
    category: 'Quality management',
    backgroundImage: '/images/bg/webinar-1.png',
    slug: 'mastering-iso-45001-compliance',
  },
  {
    id: '2',
    title:
      'Mastering ISO 45001:2018 Compliance - Effectively Managing Occupational Health And Safety Indicators With The Kelmac Group',
    instructor: {
      name: 'Ins.R.D barma',
      avatar: '/images/instructors/rd-barma.jpg',
    },
    date: '2024-11-30',
    category: 'Quality management',
    backgroundImage: '/images/bg/webinar-1.png',
    slug: 'mastering-iso-45001-compliance-2',
  },

  {
    id: '3',
    title:
      'Mastering ISO 45001:2018 Compliance - Effectively Managing Occupational Health And Safety Indicators With The Kelmac Group',
    instructor: {
      name: 'Ins.R.D barma',
      avatar: '/images/instructors/rd-barma.jpg',
    },
    date: '2024-11-30',
    category: 'Quality management',
    backgroundImage: '/images/bg/webinar-1.png',
    slug: 'mastering-iso-45001-compliance-2',
  },
    {
    id: '4',
    title:
      'Mastering ISO 45001:2018 Compliance - Effectively Managing Occupational Health And Safety Indicators With The Kelmac Group',
    instructor: {
      name: 'Ins.R.D barma',
      avatar: '/images/instructors/rd-barma.jpg',
    },
    date: '2024-11-30',
    category: 'Quality management',
    backgroundImage: '/images/bg/webinar-1.png',
    slug: 'mastering-iso-45001-compliance-2',
  },

      {
    id: '5',
    title:
      'Mastering ISO 45001:2018 Compliance - Effectively Managing Occupational Health And Safety Indicators With The Kelmac Group',
    instructor: {
      name: 'Ins.R.D barma',
      avatar: '/images/instructors/rd-barma.jpg',
    },
    date: '2024-11-30',
    category: 'Quality management',
    backgroundImage: '/images/bg/webinar-1.png',
    slug: 'mastering-iso-45001-compliance-2',
  },
];

// Filter functions for the dropdown filters
export const getUniqueInstructors = (webinars: Webinar[]) => {
  const instructors = webinars.map((w) => w.instructor.name);
  return Array.from(new Set(instructors));
};

export const getUniqueCategories = (webinars: Webinar[]) => {
  const categories = webinars.map((w) => w.category);
  return Array.from(new Set(categories));
};

export const getUniqueDates = (webinars: Webinar[]) => {
  const dates = webinars.map((w) => w.date);
  return Array.from(new Set(dates)).sort();
};