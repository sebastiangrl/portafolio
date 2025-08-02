// src/data/dev-projects.ts

export interface WebProject {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string; // Imagen principal (escritorio)
  mobileImage?: string; // Imagen móvil opcional
  liveUrl: string;
  codeUrl?: string; // Solo proyectos didácticos
  features: string[];
  year: number;
  client?: string;
  stats: {
    [key: string]: string;
  };
  isCommercial: boolean; // true = proyecto real, false = didáctico
}

// Proyectos principales (se muestran por defecto)
export const mainProjects: WebProject[] = [
  {
    id: "sevenclub-web",
    title: "SevenClub Platform",
    category: "Full-Stack Development",
    description: "Marketplace que conecta marcas con influencers",
    longDescription: "Plataforma completa para conectar marcas con los influencers más adecuados. Incluye dashboard en tiempo real, sistema de pagos y analytics avanzados.",
    technologies: ["Next.js", "Supabase", "React", "Tailwind CSS", "TypeScript", "Stripe"],
    image: "/projects/SevenClubDesk.webp",
    mobileImage: "/projects/SevenClubMobile.webp",
    liveUrl: "https://sevenclub.club",
    features: [
      "Dashboard en tiempo real",
      "Sistema de eventos",
      "Pagos integrados",
      "Analytics y métricas",
      "SEO Optimizado",
      "Tres dashboards"
    ],
    year: 2025,
    client: "SevenClub",
    stats: {
      users: "500+",
      revenue: "$10K+",
      campaigns: "200+",
      satisfaction: "98%"
    },
    isCommercial: true
  },
  {
    id: "topuria-web",
    title: "Ilia Topuria Official",
    category: "Frontend Development",
    description: "Desarrollo de Sitio web para el campeón UFC con animaciones premium y estadísticas",
    longDescription: "Website del campeón de UFC Ilia Topuria. Incluye estadísticas de peleas actualizadas, galería multimedia interactiva, timeline de carrera y integración con redes sociales.",
    technologies: ["Astro", "Framer Motion", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/TopuriaDesk.webp",
    mobileImage: "/projects/TopuriaMobile.webp",
    liveUrl: "https://topuria-website.vercel.app",
    codeUrl: "https://github.com/sebastiangrl/topuria-website",
    features: [
      "Animaciones premium con Framer Motion",
      "Estadísticas en tiempo real",
      "Galería multimedia interactiva",
      "Timeline de carrera",
      "Responsive design",
      "SEO optimizado"
    ],
    year: 2024,
    stats: {
      visits: "50K+",
      performance: "98/100",
      loadTime: "<1s",
      mobile: "100%"
    },
    isCommercial: false
  },
  {
    id: "instinto-web",
    title: "Instinto Real Estate",
    category: "WordPress Development",
    description: "Plataforma inmobiliaria boutique con sistema CRM integrado y generación de leads",
    longDescription: "Sitio web para inmobiliaria boutique especializada en propiedades premium. Sistema completo de gestión de propiedades, generación automática de leads, SEO local optimizado y CRM personalizado.",
    technologies: ["WordPress", "Custom PHP", "MySQL", "JavaScript", "SCSS"],
    image: "/projects/instinto.jpg",
    liveUrl: "https://instinto.co",
    features: [
      "Sistema de gestión de propiedades",
      "Generación automática de leads",
      "SEO local optimizado",
      "CRM integrado",
      "Búsqueda avanzada",
      "Tours virtuales"
    ],
    year: 2023,
    client: "Instinto Real Estate",
    stats: {
      properties: "200+",
      leads: "1K+",
      sales: "$2M+",
      conversion: "15%"
    },
    isCommercial: true
  }
];

// Proyectos adicionales (se cargan bajo demanda)
export const additionalProjects: WebProject[] = [
  {
    id: "puraysacra-web",
    title: "Pura y Sacra Jewelry",
    category: "E-commerce Development",
    description: "E-commerce de lujo para joyería artesanal con experiencia premium",
    longDescription: "Tienda online especializada en joyería de lujo con diseño premium, catálogo interactivo, sistema de personalización y checkout optimizado para conversión.",
    technologies: ["WordPress", "WooCommerce", "Custom PHP", "jQuery", "SCSS"],
    image: "/projects/puraysacra.jpg",
    liveUrl: "https://puraysacra.com",
    features: [
      "Catálogo interactivo premium",
      "Sistema de personalización",
      "Checkout optimizado",
      "Galería de alta resolución",
      "Integración con pasarelas",
      "SEO especializado"
    ],
    year: 2024,
    client: "Pura y Sacra",
    stats: {
      products: "300+",
      sales: "$500K+",
      conversion: "12%",
      avgOrder: "$450"
    },
    isCommercial: true
  },
  {
    id: "barrio-latino-web",
    title: "Barrio Latino Store",
    category: "E-commerce Development",
    description: "Concept store online con integración API SIIGO y gestión avanzada",
    longDescription: "E-commerce para concept store con integración completa a SIIGO, gestión automática de inventario, facturación electrónica y analytics avanzados.",
    technologies: ["WordPress", "WooCommerce", "API SIIGO", "PHP", "JavaScript"],
    image: "/projects/barrio-latino.jpg",
    liveUrl: "https://barriolatino.co",
    features: [
      "Integración API SIIGO",
      "Facturación electrónica",
      "Gestión automática inventario",
      "Analytics avanzados",
      "Multi-categorías",
      "Sistema de descuentos"
    ],
    year: 2023,
    client: "Barrio Latino",
    stats: {
      products: "800+",
      orders: "2K+",
      automation: "95%",
      efficiency: "+40%"
    },
    isCommercial: true
  },
  {
    id: "noble-colibri-web",
    title: "Noble Colibrí Menu",
    category: "Mobile Development",
    description: "Menú digital interactivo para cervecería con Flutter y Firebase",
    longDescription: "Aplicación móvil para menú digital de cervecería artesanal. Incluye catálogo interactivo, recomendaciones personalizadas, sistema de pedidos y notificaciones push.",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions", "FCM"],
    image: "/projects/noble-colibri.jpg",
    liveUrl: "https://noble-colibri.web.app",
    codeUrl: "https://github.com/sebastiangrl/noble-colibri-menu",
    features: [
      "Menú interactivo",
      "Recomendaciones IA",
      "Sistema de pedidos",
      "Notificaciones push",
      "Modo offline",
      "Analytics de consumo"
    ],
    year: 2023,
    stats: {
      downloads: "1K+",
      orders: "500+",
      rating: "4.8/5",
      retention: "85%"
    },
    isCommercial: false
  }
];

export const getAllProjects = (): WebProject[] => {
  return [...mainProjects, ...additionalProjects];
};

export const getProjectsByType = (isCommercial: boolean): WebProject[] => {
  return getAllProjects().filter(project => project.isCommercial === isCommercial);
};
