'use client';

import MainLayout from 'src/layouts/main';
import EcommerceLayout from 'src/layouts/ecommerce';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <MainLayout>
      <EcommerceLayout>{children}</EcommerceLayout>
    </MainLayout>
  );
}
