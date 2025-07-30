// src/app/[locale]/stories/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { StoriesSection } from '@/components/sections/stories-section';

interface StoriesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function StoriesPage({ params }: StoriesPageProps) {
  const { locale } = await params;
  
  return (
    <CreativeLayout>
      <StoriesSection />
    </CreativeLayout>
  );
}
