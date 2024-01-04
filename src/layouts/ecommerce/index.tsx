import Header from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function EcommerceLayout({ children }: Props) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
