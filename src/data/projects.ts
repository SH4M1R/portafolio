import type { ImageMetadata } from 'astro';
import botica from '../assets/Botica.webp';
import mass from '../assets/Mass.webp';
import miahorro from '../assets/Miahorro.webp';
import modastyle from '../assets/Modastyle.webp';

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  image: ImageMetadata;
  tags: string[];
  demo?: string;
  repos: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: 'Botica',
    subtitle: 'Intranet de gestión para botica',
    period: 'Agosto – Octubre 2026',
    description:
      'Sistema integral para la operación de una botica que cubre compras, ventas y administración, además de la gestión de productos, inventario y usuarios con control de accesos.',
    image: botica,
    tags: [],
    demo: 'https://botica-front.onrender.com',
    repos: [
      { label: 'Backend', url: 'https://github.com/SH4M1R/botica_back' },
      { label: 'Frontend', url: 'https://github.com/SH4M1R/botica_front' },
    ],
  },
  {
    title: 'Tiendas Mass',
    subtitle: 'E-commerce con asistente de IA',
    period: 'Mayo – Junio 2026',
    description:
      'E-commerce de tiendas con un asistente de inteligencia artificial que analiza el carrito de compras del usuario y le recomienda productos acordes a lo que ya eligió.',
    image: mass,
    tags: [],
    demo: 'https://ihm-front.onrender.com',
    repos: [
      { label: 'Frontend', url: 'https://github.com/SH4M1R/IHM-front' },
      { label: 'Backend', url: 'https://github.com/SH4M1R/IHM-back' },
      { label: 'Agente IA', url: 'https://github.com/SH4M1R/IHM-ia' },
    ],
  },
  {
    title: 'Mi Ahorro Pharma',
    subtitle: 'Catálogo web responsive',
    period: 'Marzo – Abril 2026',
    description:
      'Desarrollo completo del frontend de un catálogo farmacéutico, con filtros, cards de producto y un sistema visual dinámico. Se organizó con componentes reutilizables y una arquitectura ordenada, optimizando la experiencia de usuario.',
    image: miahorro,
    tags: ['React', 'TailwindCSS'],
    demo: 'https://miahorropharma.onrender.com',
    repos: [{ label: 'Repositorio', url: 'https://github.com/SH4M1R/Catalogo' }],
  },
  {
    title: 'ModaStyle',
    subtitle: 'Intranet y aplicativo móvil para tienda de ropa',
    period: 'Septiembre – Diciembre 2025',
    description:
      'Intranet con control de accesos por roles, CRUD de empleados, productos y ventas con generación de boletas, y reportes con gráficos estadísticos de ventas. La app móvil incluye registro con validación de usuario por 2FA, carrito de compras, ventas y permisos de cámara, notificaciones y ubicación.',
    image: modastyle,
    tags: ['Spring Boot', 'React', 'React Native', 'TailwindCSS'],
    repos: [
      { label: 'Frontend web', url: 'https://github.com/SH4M1R/frontend-fullstack' },
      { label: 'App móvil', url: 'https://github.com/SH4M1R/frontend-movil' },
      { label: 'Backend', url: 'https://github.com/SH4M1R/backend-TiendaRopa' },
    ],
  },
];
