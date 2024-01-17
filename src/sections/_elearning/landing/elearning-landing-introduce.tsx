import React, { useState, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // or '@mui/material/Grid' based on your MUI version
import Typography from '@mui/material/Typography';
import { useResponsive } from 'src/hooks/use-responsive';
import Image from 'src/components/image';

interface CollapsibleTextProps {
  children: ReactNode;
}

const CollapsibleText: React.FC<CollapsibleTextProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div style={{ maxHeight: isCollapsed ? '6em' : 'none', overflow: 'hidden' }}>
        {children}
      </div>
      <Button onClick={handleToggle} sx={{ mt: 2 }}>
        {isCollapsed ? 'Expand' : 'Collapse'}
      </Button>
    </div>
  );
};

export default function ElearningLandingIntroduce() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Grid container spacing={3} alignItems={{ md: 'center' }} justifyContent={{ md: 'space-between' }}>
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="about" src="/assets/images/course/course_6.jpg" ratio="4/6" sx={{ borderRadius: 2 }} />
          </Grid>
        )}
        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3}>
            <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
            <Typography variant="h3" sx={{ mb: 3 }}>
              Phasellus gravida semper nisi.
            </Typography>

          </Stack>

          <CollapsibleText>
            <Typography sx={{ color: 'text.secondary' }}>
              Curabitur a felis in nunc fringilla tristique...
            </Typography>




        </CollapsibleText>



          {/* Rest of your content */}
        </Grid>


      </Grid>


    </Container>
  );
}
