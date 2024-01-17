'use client';

import { _members, _brandsColor, _testimonials } from 'src/_mock';


import VlaTeamAbout from '../team/vla-team-about';


// ----------------------------------------------------------------------

export default function VlaAboutView() {
  return (
    <>


      <VlaTeamAbout members={_members} />




    </>
  );
}
