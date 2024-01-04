'use client';

import AccountLayout from 'src/layouts/account';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return <AccountLayout>{children}</AccountLayout>;
}
