import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Landing', path: paths.marketing.root },

    ],
  },
  {
    order: '6',
    subheader: 'Travel',
    cover: '/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Landing', path: paths.travel.root },

    ],
  },
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: paths.career.root },

    ],
  },
  {
    order: '5',
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [
      { title: 'Landing', path: paths.eLearning.root },

    ],
  },
  {
    isNew: true,
    order: '3',
    subheader: 'E-commerce',
    cover: '/assets/images/menu/menu_ecommerce.jpg',
    items: [
      { title: 'Landing', path: paths.eCommerce.root },

    ],
  },
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: 'Login Cover', path: paths.loginCover },
      { title: 'Login Illustration', path: paths.loginIllustration },
      { title: 'Login Background', path: paths.loginBackground },
      { title: 'Register Cover', path: paths.registerCover },
      { title: 'Register Illustration', path: paths.registerIllustration },
      { title: 'Register Background', path: paths.registerBackground },
      { title: 'Forgot Password', path: paths.forgotPassword },
      { title: 'Verify Code', path: paths.verify },
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const navConfig = [
  { title: 'INICIO', path: '/' },
  { title: 'ÁREAS', path: paths.components.root },
  {
    title: 'FIRMA',
    path: paths.pages,
    children: [pageLinks[0], pageLinks[1], pageLinks[2], pageLinks[3], pageLinks[4], pageLinks[5]],
  },
  { title: 'EQUIPO', path: paths.travel.about },
];
