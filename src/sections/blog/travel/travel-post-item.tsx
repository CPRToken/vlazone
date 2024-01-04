import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { IBlogPostProps } from 'src/types/blog';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function TravelPostItem({ post }: Props) {
  return (
    <Stack spacing={2.5}>
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1}>
        <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} />

        <Link component={RouterLink} href={paths.travel.post} color="inherit">
          <TextMaxLine variant="h5" persistent>
            {post.title}
          </TextMaxLine>
        </Link>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
        <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
        {post.author.name}
      </Stack>
    </Stack>
  );
}
