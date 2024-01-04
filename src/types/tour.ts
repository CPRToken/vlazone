import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITourProps = {
  id: string;
  slug: string;
  price: number;
  heroUrl: string;
  createdAt: Date;
  coverUrl: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  services: string[];
  description: string;
  languages: string[];
  ratingNumber: number;
  totalReviews: number;
  highlights: string[];
  tourGuide: IAuthorProps;
  shareLinks: ISocialLinks;
  available: {
    start: Date;
    end: Date;
  };
  program: {
    label: string;
    text: string;
  }[];
};

export type ITourCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      ccv: string;
    };
  };
};
