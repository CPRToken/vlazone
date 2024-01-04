import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';

import { IBlogPostProps } from 'src/types/blog';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function ElearningFeaturedPost({ post }: Props) {
  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Image
            src={post.coverUrl}
            alt={post.title}
            sx={{ flexGrow: 1, height: 560, borderRadius: 2 }}
          />

          <Stack
            spacing={1}
            sx={{
              mx: 'auto',
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} />

            <Link component={RouterLink} href={paths.eLearning.post} color="inherit" variant="h3">
              {post.title}
            </Link>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>
              {post.description}
            </Typography>

            <Stack direction="row" alignItems="center" sx={{ pt: 1.5, typography: 'body2' }}>
              <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
              {post.author.name}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
