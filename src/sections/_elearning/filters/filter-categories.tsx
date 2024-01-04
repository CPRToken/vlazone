import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

import { _tags } from 'src/_mock';

// ----------------------------------------------------------------------

type Props = {
  filterCategories: string[];
  onChangeCategory: (newValue: string[]) => void;
};

export default function FilterCategories({ filterCategories, onChangeCategory }: Props) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      disableCloseOnSelect
      options={_tags}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      slotProps={{
        paper: {
          sx: {
            [`& .${autocompleteClasses.listbox}`]: {
              [`& .${autocompleteClasses.option}`]: {
                [`& .${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              },
            },
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel={!filterCategories.length}
          placeholder="All Categories"
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
          }}
        />
      )}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option}>
          <Checkbox key={option} size="small" disableRipple checked={selected} />
          {option}
        </li>
      )}
      renderTags={(selected, getTagProps) =>
        selected.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option}
            label={option}
            size="small"
            color="info"
            variant="soft"
          />
        ))
      }
    />
  );
}
