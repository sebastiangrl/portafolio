// src/app/[locale]/stories/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { StoriesSection } from '@/components/sections/stories-section';

interface StoriesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function StoriesPage({ params }: StoriesPageProps) {
  await params; // Consume params to avoid unused variable warning
  
  return (
    <CreativeLayout>
      <StoriesSection />
    </CreativeLayout>
  );
}
