// src/app/[locale]/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { HeroCreative } from '@/components/sections/hero-creative';
import { WorkSelector } from '@/components/sections/work-selector';
import { IllustrationGallery } from '@/components/creative/illustration-gallery';
import { DevShowcase } from '@/components/creative/dev-showcase';
import { CreativeProcess } from '@/components/creative/creative-process';
import { AboutDual } from '@/components/sections/about-dual';
import { ContactCreative } from '@/components/sections/contact-creative';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  
  return (
    <CreativeLayout>
      {/* Hero - Dualidad creativa */}
      <section id="hero" className="min-h-screen">
        <HeroCreative />
      </section>

      {/* Selector de trabajo - Illustration vs Development */}
      <section id="work-selector" className="py-20 section-primary">
        <WorkSelector />
      </section>

      {/* Galería de ilustraciones */}
      <section id="illustrations" className="py-24 section-muted">
        <IllustrationGallery />
      </section>

      {/* Proyectos de desarrollo */}
      <section id="development" className="py-24 section-accent">
        <DevShowcase />
      </section>

      {/* Proceso creativo */}
      <section id="process" className="py-24 section-primary">
        <CreativeProcess />
      </section>

      {/* About dual */}
      <section id="about" className="py-24 section-muted">
        <AboutDual />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 section-accent">
        <ContactCreative />
      </section>
    </CreativeLayout>
  );
}