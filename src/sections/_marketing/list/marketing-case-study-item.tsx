import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { ICaseStudyProps } from 'src/types/case-study';

// ----------------------------------------------------------------------

type Props = {
  project: ICaseStudyProps;
};

export default function MarketingCaseStudyItem({ project }: Props) {
  const { title, coverUrl, category } = project;

  return (
    <div>
      <Image src={coverUrl} alt={title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {category}
        </Typography>

        <Link component={RouterLink} href={paths.marketing.caseStudy} color="inherit">
          <TextMaxLine variant="h5" line={1}>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  );
}
