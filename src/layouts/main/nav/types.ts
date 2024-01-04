import { StackProps } from '@mui/material/Stack';
import { ListItemButtonProps } from '@mui/material/ListItemButton';

// ----------------------------------------------------------------------

export type NavItemBaseProps = {
  title: string;
  path: string;
  children?: {
    subheader: string;
    isNew?: boolean;
    cover?: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemProps = ListItemButtonProps & NavItemBaseProps & NavItemStateProps;

export type NavListProps = {
  data: NavItemBaseProps;
};

export type NavSubListProps = {
  subheader: string;
  isNew?: boolean;
  cover?: string;
  items: {
    title: string;
    path: string;
  }[];
};

export type NavProps = StackProps & {
  data: NavItemBaseProps[];
};
