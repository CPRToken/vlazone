// ----------------------------------------------------------------------

type IReviewUsers = {
  id: string;
  name: string;
  avatarUrl: string;
};

type IReviewReplyComment = {
  id: string;
  userId: string;
  message: string;
  createdAt: Date;
  tagUser?: string;
};

export type IReviewItemProp = {
  id: string;
  name: string;
  rating: number;
  createdAt: Date;
  message: string;
  helpful: number;
  avatarUrl: string;
  users: IReviewUsers[];
  replyComment: IReviewReplyComment[];
};
