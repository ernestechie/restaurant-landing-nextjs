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

export default function Home() {
  return (
    <main className='min-h-screen gradient'>
      <Meta />
      <header>
        <OpeningHours />
        <Navbar />
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
