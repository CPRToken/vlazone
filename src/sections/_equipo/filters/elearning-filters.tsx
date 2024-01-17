import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import { ICountriesProps } from 'src/types/contact';
import { ICourseFiltersProps } from 'src/types/course';

import FilterFee from './filter-fee';
import FilterLevel from './filter-level';
import FilterRating from './filter-rating';
import FilterLanguage from './filter-language';
import FilterDuration from './filter-duration';
import FilterCategories from './filter-categories';

// ----------------------------------------------------------------------

const defaultValues = {
  filterDuration: [],
  filterCategories: [],
  filterRating: null,
  filterFee: [],
  filterLevel: [],
  filterLanguage: [],
};

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function ElearningFilters({ open, onClose }: Props) {
  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState<ICourseFiltersProps>(defaultValues);

  const handleChangeRating = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({
        ...filters,
        filterRating: (event.target as HTMLInputElement).value,
      });
    },
    [filters]
  );

  const handleChangeCategory = useCallback(
    (newValue: string[]) => {
      setFilters({
        ...filters,
        filterCategories: newValue,
      });
    },
    [filters]
  );

  const handleChangeLevel = useCallback(
    (event: SelectChangeEvent<typeof filters.filterLevel>) => {
      const {
        target: { value },
      } = event;
      setFilters({
        ...filters,
        filterLevel: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [filters]
  );

  const handleChangeFee = useCallback(
    (event: SelectChangeEvent<typeof filters.filterFee>) => {
      const {
        target: { value },
      } = event;
      setFilters({
        ...filters,
        filterFee: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [filters]
  );

  const handleChangeDuration = useCallback(
    (event: SelectChangeEvent<typeof filters.filterDuration>) => {
      const {
        target: { value },
      } = event;
      setFilters({
        ...filters,
        filterDuration: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [filters]
  );

  const handleChangeLanguage = useCallback(
    (newValue: ICountriesProps[]) => {
      setFilters({
        ...filters,
        filterLanguage: newValue,
      });
    },
    [filters]
  );

  const renderContent = (
    <Stack
      spacing={2.5}
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />

      <Block title="Ratings">
        <FilterRating filterRating={filters.filterRating} onChangeRating={handleChangeRating} />
      </Block>

      <Block title="Duration">
        <FilterDuration
          filterDuration={filters.filterDuration}
          onChangeDuration={handleChangeDuration}
        />
      </Block>

      <Block title="Category">
        <FilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
      </Block>

      <Block title="Level">
        <FilterLevel filterLevel={filters.filterLevel} onChangeLevel={handleChangeLevel} />
      </Block>

      <Block title="Fee">
        <FilterFee filterFee={filters.filterFee} onChangeFee={handleChangeFee} />
      </Block>

      <Block title="Language">
        <FilterLanguage
          filterLanguage={filters.filterLanguage}
          onChangeLanguage={handleChangeLanguage}
        />
      </Block>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              pt: 5,
              px: 3,
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type BlockProps = {
  title: string;
  children: React.ReactNode;
};

function Block({ title, children }: BlockProps) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        {title}
      </Typography>

      {children}
    </Stack>
  );
}
