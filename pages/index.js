import {
  AboutSection,
  BlogSection,
  ExpertiesSection,
  FooterSection,
  GallerySection,
  HeroSection,
  MenuSection,
  Meta,
  Navbar,
  NewItemsList,
  OpeningHours,
  ReservationSection,
} from '@/components';
import MobileNav from '@/components/Shared/MobileNav';
import { useState } from 'react';

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const openMobileNav = () => setShowMobileNav(true);
  const closeMobileNav = () => setShowMobileNav(false);

  return (
    <main className='min-h-screen gradient'>
      <Meta />
      <Navbar openNav={openMobileNav} />
      <MobileNav showNav={showMobileNav} closeNav={closeMobileNav} />
      <header>
        <OpeningHours />
      </header>
      <HeroSection />
      <AboutSection />
      <NewItemsList />
      <MenuSection />
      <GallerySection />
      <ExpertiesSection />
      <ReservationSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
