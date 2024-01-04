import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Iconify from 'src/components/iconify';

import { IBlogPostProps } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  prevPost?: IBlogPostProps;
  nextPost?: IBlogPostProps;
};

export default function PostPrevAndNext({ prevPost, nextPost }: Props) {
  return (
    <Grid container spacing={5} sx={{ py: 8 }}>
      <Grid xs={12} md={6}>
        <PostItem
          title={prevPost?.title}
          coverUrl={prevPost?.coverUrl}
          icon={<Iconify icon="carbon:chevron-left" width={24} sx={{ color: 'text.disabled' }} />}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <PostItem
          isNext
          title={nextPost?.title}
          coverUrl={nextPost?.coverUrl}
          icon={<Iconify width={24} icon="carbon:chevron-right" sx={{ color: 'text.disabled' }} />}
        />
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = {
  coverUrl?: string;
  title?: string;
  icon?: JSX.Element;
  isNext?: boolean;
};

function PostItem({ coverUrl, title, icon, isNext }: PostItemProps) {
  return (
    <CardActionArea sx={{ borderRadius: 2 }}>
      <Link color="inherit" underline="none">
        <Stack
          alignItems="center"
          direction={isNext ? 'row-reverse' : 'row'}
          spacing={2}
          sx={{
            p: 2.5,
            pl: 1,
            ...(isNext && {
              pr: 1,
            }),
          }}
        >
          {icon}

          <Avatar src={coverUrl} sx={{ width: 64, height: 64 }} />

          <Stack
            spacing={0.5}
            sx={{
              ...(isNext && {
                textAlign: 'right',
              }),
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              {isNext ? 'Next Post' : 'Previous Post'}
            </Typography>

            <Typography variant="subtitle1">{title}</Typography>
          </Stack>
        </Stack>
      </Link>
    </CardActionArea>
  );
}
