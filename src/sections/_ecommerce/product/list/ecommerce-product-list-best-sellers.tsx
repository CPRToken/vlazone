import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { IProductItemProps } from 'src/types/product';

import EcommerceProductItemBestSellers from '../item/ecommerce-product-item-best-sellers';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemProps[];
};

export default function EcommerceProductListBestSellers({ products }: Props) {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Best Sellers</Typography>

      {products.slice(0, 8).map((product) => (
        <EcommerceProductItemBestSellers key={product.id} product={product} />
      ))}
    </Stack>
  );
}
