import Footer from '@/components/layout/footer/Footer';
import MainHeader from '@/components/layout/header/MainHeader';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
