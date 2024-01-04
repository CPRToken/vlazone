import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { IProductItemCompareProps } from 'src/types/product';

import EcommerceCompareItem from './ecommerce-compare-item';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemCompareProps[];
};

export default function EcommerceCompareList({ products }: Props) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, md: 3 }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
    >
      {products.map((product) => (
        <EcommerceCompareItem key={product.id} product={product} />
      ))}
    </Stack>
  );
}
