'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

import VlaTeam from '../team/vla-team';
import MarketingNewsletter from '../marketing-newsletter';

import VlaLandingFaqs from '../landing/vla-landing-faqs';
import VlaLandingAbout from '../landing/vla-landing-about';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import VlaLandingServices from '../landing/vla-landing-services';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import VlaLandingCaseStudies from '../landing/vla-landing-case-studies';

// ----------------------------------------------------------------------

export default function VlaLandingView() {
  return (
    <>

      <VlaLandingAbout />

      <VlaLandingServices />

      <MarketingLandingProcess />

      <VlaLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />

      <VlaTeam members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <VlaLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
