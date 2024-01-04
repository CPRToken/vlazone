import { MapOfficeProps } from 'src/components/map';

import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IJobByCompanyProps = {
  id: string;
  name: string;
  logo: string;
  totalJobs: number;
};

export type IJobByCategoryProps = {
  id: string;
  name: string;
  icon: string;
  totalJobs: number;
};

export type IJobByCountryProps = {
  id: string;
  location: string;
  coverUrl: string;
  totalJobs: number;
};

export type IJobProps = {
  id: string;
  type: string;
  slug: string;
  level: string;
  deadline: Date;
  urgent: boolean;
  content: string;
  createdAt: Date;
  category: string;
  location: string;
  skills: string[];
  totalViews: number;
  benefits: string[];
  favorited: boolean;
  languages: string[];
  salary: string | number;
  shareLinks: ISocialLinks;
  experience: string | number;
  locationMap: MapOfficeProps[];
  company: {
    name: string;
    logo: string;
  };
};

export type IJobFiltersProps = {
  filterType: string[];
  filterLevel: string[];
  filterSalary: number[];
  filterBenefits: string[];
  filterKeyword: string | null;
  filterLocation: string | null;
  filterCategories: string | null;
};
