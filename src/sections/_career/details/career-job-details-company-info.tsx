import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

import { IJobProps } from 'src/types/job';

// ----------------------------------------------------------------------

type Props = {
  job: IJobProps;
};

export default function CareerJobDetailsCompanyInfo({ job }: Props) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Image
          alt={job.company.name}
          src={job.company.logo}
          sx={{ width: 48, height: 48, borderRadius: 1 }}
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">{job.company.name}</Typography>
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            View Company Profile
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}
