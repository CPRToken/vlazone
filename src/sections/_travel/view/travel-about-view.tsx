'use client';

import { _brands, _members, _travelPosts, _testimonials } from 'src/_mock';

import TravelTeam from '../team/travel-team';
import TravelAbout from '../about/travel-about';
import TravelNewsletter from '../travel-newsletter';
import TravelOurClients from '../travel-our-clients';
import TravelTestimonial from '../testimonial/travel-testimonial';
import TravelAboutOurMission from '../about/travel-about-our-mission';
import TravelLatestPosts from '../../blog/travel/travel-latest-posts';

// ----------------------------------------------------------------------

export default function TravelAboutView() {
  return (
    <>


      <TravelTeam members={_members} />








    </>
  );
}
