import { ISocialLinks } from './socials';
import { ICountriesProps } from './contact';

// ----------------------------------------------------------------------

export type ICourseTeacherProp = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  ratingNumber: number;
  totalCourses: number;
  totalReviews: number;
  totalStudents: number;
};

export type ICourseLessonProp = {
  id: string;
  title: string;
  duration: number;
  videoPath: string;
  unLocked: boolean;
  description: string;
};

export type ICourseByCategoryProps = {
  id: string;
  name: string;
  totalStudents: number;
};

export type ICourseProps = {
  id: string;
  slug: string;
  price: number;
  level: string;
  createdAt: Date;
  coverUrl: string;
  category: string;
  skills: string[];
  priceSale: number;
  resources: number;
  totalHours: number;
  description: string;
  bestSeller: boolean;
  languages: string[];
  learnList: string[];
  ratingNumber: number;
  totalQuizzes: number;
  totalReviews: number;
  totalStudents: number;
  shareLinks: ISocialLinks;
  lessons: ICourseLessonProp[];
  teachers: ICourseTeacherProp[];
};

export type ICourseFiltersProps = {
  filterFee: string[];
  filterLevel: string[];
  filterDuration: string[];
  filterCategories: string[];
  filterRating: string | null;
  filterLanguage: ICountriesProps[];
};
