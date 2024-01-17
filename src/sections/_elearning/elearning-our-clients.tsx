import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import Carousel, { useCarousel } from 'src/components/carousel';

import { ITeamMemberProps } from 'src/types/team';
import ElearningTeamItem from './team/elearning-team-item';
// ----------------------------------------------------------------------

type Props = {
  teamMembers: ITeamMemberProps[];
};

export default function ElearningOurClients({ teamMembers = [] }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 4 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 18, lg: 27 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Nuestro Equipo</Typography>


      </Stack>

      <Carousel {...carousel.carouselSettings}>
        {teamMembers.map((member) => (
          <div style={{ margin: '0 30px' }}>
          <ElearningTeamItem key={member.id} member={member} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
}
