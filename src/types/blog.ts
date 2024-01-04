import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IBlogCategoryProps = {
  label: string;
  path: string;
};

export type IBlogPostProps = {
  id: string;
  title: string;
  heroUrl: string;
  tags?: string[];
  createdAt: Date;
  category: string;
  coverUrl: string;
  duration: string;
  favorited: boolean;
  description: string;
  author: IAuthorProps;
  shareLinks?: ISocialLinks;
};
