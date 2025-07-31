// src/app/[locale]/blog/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { BlogSection } from '@/components/sections/blog-section';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  await params; // Consume params to avoid unused variable warning
  
  return (
    <CreativeLayout>
      <BlogSection />
    </CreativeLayout>
  );
}
