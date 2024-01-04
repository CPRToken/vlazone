'use client';

import { useScroll } from 'framer-motion';

import {_members, _pricingHome} from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';


import HomeFAQs from '../home-faqs';


import CareerLandingHero from "../../_career/landing/career-landing-hero";
import TravelTeam from "../../_travel/team/travel-team";

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <CareerLandingHero />

      <HomeFAQs />

      <TravelTeam members={_members} />





    </>
  );
}
