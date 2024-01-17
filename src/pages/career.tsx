import React from 'react';
import MainLayout from 'src/layouts/main';
import CareerLandingView from 'src/sections/_career/view/career-landing-view';

export default function CareerPage() {
  return (
    <MainLayout headerOnDark>
      <CareerLandingView />
    </MainLayout>
  );
}
