import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  price: number;
  priceSale?: number;
}

export default function ProductPrice({ price, priceSale = 0, sx, ...other }: Props) {
  return (
    <Stack direction="row" sx={{ typography: 'subtitle2', ...sx }} {...other}>
      {fCurrency(price)}

      <Box
        component="span"
        sx={{
          ml: 0.5,
          color: 'text.disabled',
          textDecoration: 'line-through',
          fontWeight: 'fontWeightMedium',
        }}
      >
        {priceSale > 0 && fCurrency(priceSale)}
      </Box>
    </Stack>
  );
}
