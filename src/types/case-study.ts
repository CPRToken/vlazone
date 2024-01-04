import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ICaseStudyProps = {
  id: string;
  title: string;
  heroUrl: string;
  createdAt: Date;
  website: string;
  category: string;
  coverUrl: string;
  description: string;
  galleryImgs: string[];
  socialLinks?: ISocialLinks;
};
