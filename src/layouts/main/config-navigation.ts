import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Villarroel, Lecaros y Aste',
    cover: '/assets/images/menu/vla_white.png',
    items: [
      { title: 'Landing', path: paths.vla.root },
      { title: 'Landing Travel', path: paths.travel.root },
      { title: 'Abogados Landing', path: paths.abogados.root },
      { title: 'Landing Career', path: paths.career.root },
      { title: 'About VLA', path: paths.vla.about },
      { title: 'About eLearn', path: paths.eLearning.about },
      { title: 'About Abogados', path: paths.abogados.about },
      { title: 'Equipo Abogados', path: paths.abogados.equipo },
      { title: 'About Travel', path: paths.travel.about },
      { title: 'Equipo', path: paths.vla.equipo },
      { title: 'Contact', path: paths.travel.contact },
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
  { title: 'ÁREAS', path: paths.vla.about },
  {
    title: 'FIRMA',
    path: paths.pages,
    children: [pageLinks[0], pageLinks[1]],
  },
  { title: 'EQUIPO', path: paths.travel.about },
];
