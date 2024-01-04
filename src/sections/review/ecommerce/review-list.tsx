import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IReviewItemProp } from 'src/types/review';

import ReviewItem from './review-item';

// ----------------------------------------------------------------------

type Props = {
  reviews: IReviewItemProp[];
};

export default function ReviewList({ reviews }: Props) {
  return (
    <Box sx={{ pt: 5 }}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          name={review.name}
          avatarUrl={review.avatarUrl}
          createdAt={review.createdAt}
          message={review.message}
          rating={review.rating}
          helpful={review.helpful}
        />
      ))}

      <Pagination
        count={10}
        color="primary"
        sx={{
          mt: 5,
          mb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  );
}
