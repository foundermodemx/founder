import type { Translations } from "./en";

export const es: Translations = {
  // Navigation
  nav: {
    home: "Inicio",
    services: "Servicios",
    ecosystem: "Ecosistema",
    projects: "Proyectos",
    process: "Proceso",
    contact: "Contacto",
  },

  // Hero section
  hero: {
    verticalLabel: "SEÑAL",
    tagline: "Estudio de Desarrollo de Software",
    description:
      "Construimos productos digitales que escalan. Del concepto al despliegue, creamos software que impulsa el crecimiento empresarial.",
    viewProjects: "Ver Proyectos",
    latestUpdates: "Últimas Novedades",
    floatingTag: "v.01 / Build Experimental",
  },

  // Signals / Services section
  signals: {
    sectionLabel: "01 / Servicios",
    title: "LO QUE HACEMOS",
    serviceLabel: "Servicio",
    items: [
      {
        title: "Desarrollo Web",
        note: "Aplicaciones web personalizadas con React, Next.js y frameworks modernos. Escalables, rápidas y optimizadas para SEO.",
      },
      {
        title: "Apps Móviles",
        note: "Aplicaciones móviles nativas y multiplataforma para iOS y Android usando React Native y Flutter.",
      },
      {
        title: "API & Backend",
        note: "Sistemas backend robustos, APIs RESTful y arquitectura de microservicios con Node.js, Python y Go.",
      },
      {
        title: "Cloud & DevOps",
        note: "Configuración de infraestructura, pipelines CI/CD y despliegue en la nube con AWS, GCP y Azure.",
      },
      {
        title: "Integración IA",
        note: "Modelos de machine learning, chatbots y funciones impulsadas por IA integradas en tus productos.",
      },
    ],
  },

  // Ecosystem section
  ecosystem: {
    sectionLabel: "02 / Ecosistema",
    title: "NUESTRAS MARCAS",
    description:
      "Founder no es una sola empresa — es un ecosistema. Cada sub-marca se especializa en un vertical diferente, trabajando juntas para construir, comercializar y escalar productos digitales.",
  },

  // Work / Portfolio section
  work: {
    sectionLabel: "02 / Portafolio",
    title: "TRABAJO SELECCIONADO",
    subtitle:
      "Soluciones en desarrollo web, aplicaciones móviles y sistemas empresariales.",
    portfolioLabel: "Portafolio",
    projectsDelivered: "Proyectos entregados en este vertical.",
  },

  // Principles section
  principles: {
    sectionLabel: "03 / Principios",
    title: "CÓMO TRABAJAMOS",
    items: [
      {
        number: "01",
        titleParts: [
          { text: "CÓDIGO", highlight: true },
          { text: " LIMPIO", highlight: false },
        ],
        description:
          "Escribimos código mantenible y escalable. Cada línea tiene un propósito.",
      },
      {
        number: "02",
        titleParts: [
          { text: "ENTREGA", highlight: true },
          { text: " ÁGIL", highlight: false },
        ],
        description:
          "Desarrollo iterativo con retroalimentación continua. Entrega rápida y frecuente.",
      },
      {
        number: "03",
        titleParts: [
          { text: "ENFOCADO ", highlight: false },
          { text: "AL USUARIO", highlight: true },
        ],
        description:
          "Cada decisión comienza con el usuario final. Una gran UX no es negociable.",
      },
      {
        number: "04",
        titleParts: [
          { text: "A PRUEBA ", highlight: false },
          { text: "DE FUTURO", highlight: true },
        ],
        description:
          "Construido pensando en el mañana. Stack y prácticas modernas.",
      },
    ],
  },

  // Work experiments / Projects
  projects: {
    rastreadito: {
      description:
        "Plataforma SaaS de rastreo de cannabis semilla-a-venta con monitoreo de cumplimiento en tiempo real, gestión de inventario y panel de analíticas.",
      medium: "Plataforma SaaS",
    },
    dispensaryHub: {
      description:
        "Sistema de punto de venta y gestión de clientes diseñado para dispensarios de cannabis con cumplimiento normativo integrado.",
      medium: "Aplicación Web",
    },
    growthEngine: {
      description:
        "Plataforma automatizada de analíticas de marketing con atribución multicanal y optimización de conversiones.",
      medium: "Producto SaaS",
    },
    brandForge: {
      description:
        "Kit de herramientas de identidad de marca con asistencia de IA para nombres, generación de logotipos y creación de guías de marca.",
      medium: "Herramienta de Diseño",
    },
    fleetTracker: {
      description:
        "Plataforma de logística y gestión de flotas en tiempo real para empresas de distribución de cannabis.",
      medium: "Software Empresarial",
    },
    catalystCms: {
      description:
        "Sistema de gestión de contenidos headless optimizado para equipos de marketing y gestión de campañas.",
      medium: "Plataforma Web",
    },
    verdeAnalytics: {
      description:
        "Plataforma de analítica de datos para tendencias del mercado de cannabis, comportamiento del consumidor e insights regulatorios.",
      medium: "Plataforma de Analíticas",
    },
    launchPad: {
      description:
        "Herramienta interna para gestionar el flujo de incubación de marcas, seguimiento de hitos y asignación de recursos.",
      medium: "Herramienta Interna",
    },
    pixelStudio: {
      description:
        "Gestión de activos creativos y plataforma de flujo de trabajo de producción para equipos de marketing.",
      medium: "Suite Creativa",
    },
    codeForge: {
      description:
        "Aplicación empresarial a medida con arquitectura modular para la automatización de flujos de trabajo específicos de clientes.",
      medium: "Solución Empresarial",
    },
  },

  // Legacy work experiments
  experiments: [
    {
      title: "Plataforma FinTech",
      medium: "Aplicación Web",
      description:
        "Plataforma de gestión financiera full-stack con análisis en tiempo real y transacciones seguras.",
    },
    {
      title: "Suite E-Commerce",
      medium: "Móvil y Web",
      description:
        "Solución de comercio escalable con gestión de inventario e integración de pagos.",
    },
    {
      title: "Portal de Salud",
      medium: "Software Empresarial",
      description:
        "Sistema de gestión de pacientes compatible con HIPAA con funciones de telemedicina.",
    },
    {
      title: "Dashboard SaaS",
      medium: "Diseño de Producto",
      description:
        "Panel de análisis con widgets personalizables y visualización de datos.",
    },
    {
      title: "Integración IA",
      medium: "Machine Learning",
      description:
        "Soluciones de IA personalizadas para flujos automatizados y procesamiento inteligente de datos.",
    },
    {
      title: "Gateway de API",
      medium: "Infraestructura",
      description:
        "Gestión de API de alto rendimiento con limitación de velocidad y autenticación.",
    },
  ],

  // Footer / Colophon
  footer: {
    sectionLabel: "04 / Colofón",
    title: "CRÉDITOS",
    services: "Servicios",
    webDev: "Desarrollo Web",
    mobileApps: "Apps Móviles",
    stack: "Stack",
    typography: "Tipografía",
    location: "Ubicación",
    remote: "Remoto",
    everywhere: "En todas partes",
    contact: "Contacto",
    email: "Correo",
    twitter: "Twitter/X",
    year: "Año",
    ongoing: "En curso",
    copyright: "© {year} Founder. Todos los derechos reservados.",
    tagline: "Diseñado con intención. Construido con precisión.",
  },

  // Footer ecosystem variant
  footerEcosystem: {
    sectionLabel: "Ecosistema",
    title: "LA RED FOUNDER",
    description:
      "Explora el ecosistema completo de marcas, productos y servicios construidos por Founder.",
    visitBrand: "Visitar",
    backToFounder: "Volver a Founder",
  },

  // Brand pages
  brand: {
    ecosystemLabel: "Ecosistema Founder",
    viewProjects: "Ver Proyectos",
    ourServices: "Nuestros Servicios",
    servicesLabel: "Servicios",
    servicesTitle: "LO QUE HACEMOS",
    serviceLabel: "Servicio",
    brands: {
      foundgreen: {
        tagline: "Software Enfocado en Cannabis",
        description:
          "Construimos software especializado para la industria del cannabis — desde el rastreo de semilla-a-venta hasta la gestión de dispensarios, herramientas de cumplimiento y plataformas para el consumidor.",
        services: [
          {
            title: "Rastreo Semilla-a-Venta",
            description:
              "Software de trazabilidad de extremo a extremo para el cultivo, procesamiento y distribución de cannabis.",
          },
          {
            title: "Gestión de Dispensarios",
            description:
              "Sistemas POS, gestión de inventario y plataformas de fidelización de clientes construidas para dispensarios.",
          },
          {
            title: "Cumplimiento y Reportes",
            description:
              "Herramientas automatizadas de reporte y cumplimiento regulatorio adaptadas a la legislación del cannabis.",
          },
          {
            title: "Plataformas de Consumo",
            description:
              "E-commerce, aplicaciones de entrega y plataformas orientadas al consumidor para el mercado del cannabis.",
          },
        ],
      },
      foundream: {
        tagline: "Productos SaaS Internos",
        description:
          "Soñamos, diseñamos y lanzamos nuestros propios productos SaaS. Desde la idea hasta el mercado, creamos productos de software que resuelven problemas reales a escala.",
        services: [
          {
            title: "Ideación de Producto",
            description:
              "Investigación de mercado, validación y desarrollo de conceptos para nuevos productos SaaS.",
          },
          {
            title: "Desarrollo de MVP",
            description:
              "Prototipado rápido y desarrollo de producto mínimo viable para probar el ajuste en el mercado.",
          },
          {
            title: "Escalamiento de Producto",
            description:
              "Arquitectura, infraestructura y desarrollo para escalar productos desde un MVP hasta el mercado masivo.",
          },
          {
            title: "Analítica y Crecimiento",
            description:
              "Estrategias de crecimiento basadas en datos, analítica de usuarios y optimización de producto.",
          },
        ],
      },
      founding: {
        tagline: "Servicios de Marketing",
        description:
          "Marketing estratégico que impulsa el crecimiento. Combinamos la narrativa creativa con estrategias basadas en datos para construir marcas y adquirir clientes.",
        services: [
          {
            title: "Estrategia de Marca",
            description:
              "Posicionamiento de marca, sistemas de identidad y narrativas estratégicas que diferencian.",
          },
          {
            title: "Marketing Digital",
            description:
              "SEO, medios pagados, campañas sociales y estrategias de contenido que impulsan resultados medibles.",
          },
          {
            title: "Producción Creativa",
            description:
              "Contenido visual, producción de video y activos creativos para campañas y presencia de marca.",
          },
          {
            title: "Analítica de Crecimiento",
            description:
              "Analítica de marketing basada en datos, modelado de atribución y optimización de conversiones.",
          },
        ],
      },
      foundev: {
        tagline: "Desarrollo de Software para Clientes",
        description:
          "Desarrollo de software a medida para clientes que necesitan que se haga bien. Aplicaciones web, apps móviles, APIs y soluciones empresariales construidas a medida.",
        services: [
          {
            title: "Aplicaciones Web",
            description:
              "Aplicaciones web personalizadas construidas con React, Next.js y frameworks modernos. Escalables y rápidas.",
          },
          {
            title: "Desarrollo Móvil",
            description:
              "Apps móviles nativas y multiplataforma para iOS y Android usando React Native y Flutter.",
          },
          {
            title: "API y Backend",
            description:
              "Sistemas backend robustos, APIs RESTful y arquitectura de microservicios con Node.js y Go.",
          },
          {
            title: "Cloud y DevOps",
            description:
              "Configuración de infraestructura, pipelines CI/CD y despliegue en la nube en AWS, GCP y Azure.",
          },
        ],
      },
      foundbrands: {
        tagline: "Marcas Creadas por Founder",
        description:
          "Las marcas que hemos construido desde cero. Desde el concepto hasta el mercado, estas son las empresas y productos nacidos del ecosistema Founder.",
        services: [
          {
            title: "Creación de Marca",
            description:
              "Desarrollo de marca de servicio completo, desde el nombre e identidad hasta la estrategia de lanzamiento.",
          },
          {
            title: "Diseño de Producto",
            description:
              "Diseño de producto de extremo a extremo que incluye investigación UX, diseño UI y prototipado.",
          },
          {
            title: "Lanzamiento al Mercado",
            description:
              "Estrategia de entrada al mercado, campañas de lanzamiento y programas de crecimiento inicial.",
          },
          {
            title: "Incubación de Marca",
            description:
              "Soporte continuo, iteración y estrategia de crecimiento para marcas dentro del ecosistema.",
          },
        ],
      },
    },
  },

  // Contact / Lead form
  lead: {
    sectionLabel: "Contacto",
    title: "CONSTRUYAMOS JUNTOS",
    description: "Cuéntanos sobre tu proyecto. Te responderemos en 24 horas.",
    name: "Nombre",
    namePlaceholder: "Tu nombre completo",
    email: "Correo electrónico",
    emailPlaceholder: "tu@empresa.com",
    phone: "Teléfono",
    phonePlaceholder: "+52 (555) 000-0000",
    company: "Empresa",
    companyPlaceholder: "Tu empresa (opcional)",
    projectType: "Tipo de Proyecto",
    projectTypePlaceholder: "Selecciona un tipo",
    projectTypes: {
      web: "Aplicación Web",
      mobile: "App Móvil",
      ai: "IA / Machine Learning",
      marketing: "Marketing",
      branding: "Branding",
      other: "Otro",
    },
    budgetRange: "Rango de Presupuesto",
    budgetRangePlaceholder: "Selecciona un rango (opcional)",
    budgetRanges: {
      small: "< $10k",
      medium: "$10k – $50k",
      large: "$50k – $100k",
      enterprise: "$100k+",
    },
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
    submit: "Enviar Mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado! Nos pondremos en contacto pronto.",
    error: "Algo salió mal. Por favor intenta de nuevo.",
  },

  // Sidebar
  sidebar: {
    home: "Inicio",
  },

  // Language
  language: {
    en: "EN",
    es: "ES",
  },

  // Common UI
  common: {
    soundOn: "Sonido Activado",
    soundOff: "Sonido Desactivado",
    mute: "Silenciar sonidos",
    unmute: "Activar sonidos",
  },
} as const;
