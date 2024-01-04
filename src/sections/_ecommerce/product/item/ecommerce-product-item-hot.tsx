import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Theme, SxProps } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import { IProductItemProps } from 'src/types/product';

import ProductPrice from '../../common/product-price';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps;
  hotProduct?: boolean;
  sx?: SxProps<Theme>;
};

export default function EcommerceProductItemHot({ product, hotProduct = false, sx }: Props) {
  return (
    <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'background.default',
          transition: (theme) =>
            theme.transitions.create('background-color', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': {
            bgcolor: 'background.neutral',
          },
          ...sx,
        }}
      >
        <Image
          src={product.coverUrl}
          sx={{
            mb: 2,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5}>
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>

          <ProductPrice
            price={product.price}
            sx={{
              ...(hotProduct && {
                color: 'error.main',
              }),
            }}
          />
        </Stack>

        {hotProduct && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(product.sold / product.stock) * 100}
              sx={{ width: 1 }}
            />

            <Typography
              variant="caption"
              sx={{ flexShrink: 0, color: 'text.disabled' }}
            >{`🔥 ${product.sold} Sold`}</Typography>
          </Stack>
        )}
      </Paper>
    </Link>
  );
}
