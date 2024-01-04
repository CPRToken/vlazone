import { useState, useCallback } from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack, { StackProps } from '@mui/material/Stack';

import Iconify from 'src/components/iconify';

import FilterTime from './filter-time';
import FilterGuests from './filter-guests';
import FilterLocation from './filter-location';

// ----------------------------------------------------------------------

export default function TravelFilters({ sx, ...other }: StackProps) {
  const [departureDay, setDepartureDay] = useState<Date | null>(null);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const handleChangeDepartureDay = useCallback((newValue: Date | null) => {
    setDepartureDay(newValue);
  }, []);

  const handleIncrementGuests = useCallback(
    (guest?: string) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children + 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults + 1 });
      }
    },
    [guests]
  );

  const handleDecreaseGuests = useCallback(
    (guest?: string) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children - 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults - 1 });
      }
    },
    [guests]
  );

  return (
    <Stack
      spacing={2.5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ p: 4, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}
      {...other}
    >
      <FilterLocation />

      <Divider flexItem orientation="vertical" />

      <FilterTime departureDay={departureDay} onChangeDepartureDay={handleChangeDepartureDay} />

      <Divider flexItem orientation="vertical" />

      <FilterGuests
        guests={guests}
        onDecreaseGuests={handleDecreaseGuests}
        onIncrementGuests={handleIncrementGuests}
      />

      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{
          px: 0,
          flexShrink: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" />
      </Button>
    </Stack>
  );
}
