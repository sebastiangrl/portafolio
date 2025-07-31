// src/app/[locale]/entrepreneurs/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { EntrepreneursSection } from '@/components/sections/entrepreneurs-section';

interface EntrepreneursPageProps {
  params: Promise<{ locale: string }>;
}

export default async function EntrepreneursPage({ params }: EntrepreneursPageProps) {
  await params; // Consume params to avoid unused variable warning
  
  return (
    <CreativeLayout>
      <EntrepreneursSection />
    </CreativeLayout>
  );
}
