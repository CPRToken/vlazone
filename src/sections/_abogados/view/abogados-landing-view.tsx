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

import EquipoLandingIntroduce from '../landing/equipo-landing-introduce';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';


// ----------------------------------------------------------------------

export default function AbogadosLandingView() {
  return (
    <>




      <EquipoLandingIntroduce />


      <EquipoTeam members={_members.slice(0, 8)} />



      <ElearningLatestPosts posts={_coursePosts.slice(0, 4)} />



      <ElearningNewsletter />
    </>
  );
}
