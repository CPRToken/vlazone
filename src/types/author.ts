import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IAuthorProps = {
  name: string;
  role: string;
  about: string;
  quotes: string;
  avatarUrl: string;
  verified?: boolean;
  phoneNumber?: string;
  ratingNumber?: number;
  totalReviews?: number;
  socialLinks?: ISocialLinks;
};
