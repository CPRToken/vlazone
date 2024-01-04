import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { alpha, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';

import { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ title, path, open, active, hasChild, externalLink, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem ref={ref} active={active} {...other}>
        <Box component="span" sx={{ flexGrow: 1 }}>
          {title}
        </Box>

        {hasChild && (
          <Iconify
            width={16}
            icon={open ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            sx={{ ml: 0.75 }}
          />
        )}
      </StyledNavItem>
    );

    if (hasChild) {
      return renderContent;
    }

    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavItemStateProps>(({ active, theme }) => ({
  ...theme.typography.body1,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(1.5),
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.fontSecondaryFamily,
  ...(active && {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}));
