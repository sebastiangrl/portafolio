// src/app/page.tsx
// Esta página se maneja automáticamente por next-intl middleware
// La ruta raíz "/" mostrará el contenido en español (idioma por defecto)
// La ruta "/en" mostrará el contenido en inglés

export default function RootPage() {
  // Este componente no debería ejecutarse normalmente porque
  // el middleware redirige automáticamente a /[locale]
  return null;
}