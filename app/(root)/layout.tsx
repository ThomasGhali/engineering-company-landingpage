import { Suspense } from 'react';
import Footer from '@/components/layout/footer/footer';
import MainHeader from '@/components/layout/header/components/main-header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Suspense>
        <MainHeader />
      </Suspense> */}
      
      {children}

      {/* <Suspense>
        <Footer />
      </Suspense> */}
    </>
  );
}
