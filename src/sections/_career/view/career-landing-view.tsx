'use client';

import {
  _jobs,
  _careerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories, _members,
} from 'src/_mock';



import CareerLandingHero from '../landing/career-landing-hero';

import CareerTestimonial from '../testimonial/career-testimonial';

import CareerLandingHotCategories from '../landing/career-landing-hot-categories';

import TravelTeam from "../../_travel/team/travel-team";

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />






      <CareerLandingHotCategories categories={_jobsByCategories} />


      <TravelTeam members={_members} />

      <CareerTestimonial testimonials={_testimonials} />








    </>
  );
}
