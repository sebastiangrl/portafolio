// src/app/[locale]/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { HeroCreative } from '@/components/sections/hero-creative';
import { IllustrationGallery } from '@/components/creative/illustration-gallery';
import { DevShowcase } from '@/components/creative/dev-showcase';
import { TechSkills } from '@/components/creative/tech-skills';
import { AboutDual } from '@/components/sections/about-dual';
import { ContactCreative } from '@/components/sections/contact-creative';
import { SupportSection } from '@/components/sections/support-section';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  await params; // Consume params to avoid unused variable warning
  
  return (
    <CreativeLayout>
      {/* Hero - Dualidad creativa */}
      <section id="hero" className="min-h-screen">
        <HeroCreative />
      </section>

      {/* Galería de ilustraciones */}
      <section id="illustrations" className="py-24 section-muted">
        <IllustrationGallery />
      </section>

      {/* Proyectos de desarrollo */}
      <section id="development" className="py-24">
        <DevShowcase />
      </section>

      {/* Tech Skills */}
      <section id="skills" className="section-primary">
        <TechSkills />
      </section>

      {/* About dual */}
      <section id="about" className="py-24 section-about">
        <AboutDual />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 section-muted">
        <ContactCreative />
      </section>

      {/* Support Section */}
      <section id="support">
        <SupportSection />
      </section>
    </CreativeLayout>
  );
}