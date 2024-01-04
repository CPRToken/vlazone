import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IProductItemProps } from 'src/types/product';

import EcommerceProductViewListItem from '../item/ecommerce-product-view-list-item';
import EcommerceProductViewGridItem from '../item/ecommerce-product-view-grid-item';
import EcommerceProductViewListItemSkeleton from '../item/ecommerce-product-view-list-item-skeleton';
import EcommerceProductViewGridItemSkeleton from '../item/ecommerce-product-view-grid-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  products: IProductItemProps[];
  viewMode: string;
  loading?: boolean;
};

export default function EcommerceProductList({ loading, viewMode, products }: Props) {
  return (
    <>
      {viewMode === 'grid' ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {(loading ? [...Array(16)] : products).map((product, index) =>
            product ? (
              <EcommerceProductViewGridItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewGridItemSkeleton key={index} />
            )
          )}
        </Box>
      ) : (
        <Stack spacing={4}>
          {(loading ? [...Array(16)] : products).map((product, index) =>
            product ? (
              <EcommerceProductViewListItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewListItemSkeleton key={index} />
            )
          )}
        </Stack>
      )}

      <Pagination
        count={10}
        color="primary"
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
