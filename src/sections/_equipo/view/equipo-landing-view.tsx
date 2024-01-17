'use client';

import {
  _courses,
  _members,
  _coursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from 'src/_mock';

import EquipoTeam from '../team/equipo-team';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningDownloadApp from '../elearning-download-app';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningTestimonial from '../testimonial/elearning-testimonial';
import EquipoLandingIntroduce from '../landing/equipo-landing-introduce';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';
import ElearningLandingCategories from '../landing/elearning-landing-categories';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';

// ----------------------------------------------------------------------

export default function EquipoLandingView() {
  return (
    <>




      <EquipoLandingIntroduce />


      <EquipoTeam members={_members.slice(0, 8)} />



      <ElearningLatestPosts posts={_coursePosts.slice(0, 4)} />



      <ElearningNewsletter />
    </>
  );
}
