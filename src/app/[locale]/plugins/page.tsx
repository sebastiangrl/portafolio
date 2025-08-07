// src/app/[locale]/plugins/page.tsx
import { CreativeLayout } from '@/components/layout/creative-layout';
import { PluginsShowcase } from '@/components/sections/plugins-showcase';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PluginsPage({ params }: PageProps) {
  await params;
  
  return (
    <CreativeLayout>
      <section className="py-24 min-h-screen">
        <PluginsShowcase />
      </section>
    </CreativeLayout>
  );
}
