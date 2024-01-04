'use client';

import AuthCoverLayout from 'src/layouts/auth/cover';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthCoverLayout
      title="Hi, Welcome Back"
      images={[
        '/assets/images/travel/travel_post_01.jpg',
        '/assets/images/travel/travel_post_03.jpg',
      ]}
    >
      {children}
    </AuthCoverLayout>
  );
}
