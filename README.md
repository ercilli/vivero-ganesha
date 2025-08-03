# Vivero Ganesha - Vue.js Application

## 🌱 Descripción
Sitio web moderno del Vivero Ganesha desarrollado con Vue.js 3, implementando las mejores prácticas de UX/UI y diseño responsive.

## 🚀 Tecnologías
- **Vue 3** con Composition API
- **TypeScript** para type safety
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **Pinia** para manejo de estado
- **Vue Router 4** para navegación
- **GitHub Pages** para deployment automático

## 📱 Características UX/UI Implementadas
- ✅ **Mobile-First Design** (320px - 1280px+)
- ✅ **Principios de Psicología UX**:
  - Ley de Hick (navegación simplificada)
  - Ley de Fitts (botones optimizados)
  - Principios de Gestalt (agrupación visual)
  - Efecto Zeigarnik (consultas abiertas)
  - Teoría de Carga Cognitiva (información organizada)
  - Umbral de Doherty (interacciones <400ms)

## 🏗️ Estructura del Proyecto
```
vue-ganesha-frontend/
├── src/
│   ├── components/
│   │   ├── common/         # Componentes reutilizables
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Secciones de página
│   │   └── ui/            # Componentes UI especializados
│   ├── composables/       # Lógica reutilizable
│   ├── router/           # Configuración de rutas
│   ├── services/         # APIs y servicios
│   ├── stores/          # Estado global (Pinia)
│   ├── types/           # Tipos TypeScript
│   └── views/           # Páginas principales
├── public/              # Archivos estáticos
└── dist/               # Build de producción
```

## 🛠️ Desarrollo Local

### Prerequisitos
- Node.js 18+
- npm

### Instalación
```bash
cd vue-ganesha-frontend
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre http://localhost:5173

### Build para Producción
```bash
# Build local
npm run build

# Build para GitHub Pages
npm run build:github
```

## 🌐 Deployment

El proyecto se despliega automáticamente en GitHub Pages mediante GitHub Actions:

- **URL del sitio**: https://ercilli.github.io/vivero-ganesha/
- **Trigger**: Push a la rama `main`
- **Workflow**: `.github/workflows/deploy.yml`

### Proceso de Deployment
1. Build automático con Vite
2. Optimización para GitHub Pages
3. Deploy a GitHub Pages
4. Sitio disponible en minutos

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Build para GitHub Pages
npm run build:github

# Preview build local
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🎨 Diseño Responsive

### Breakpoints
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

### Optimizaciones Mobile
- Touch targets ≥44px
- Navegación simplificada
- Imágenes optimizadas
- Carga progresiva

## 📧 Contacto
- **WhatsApp**: +54 9 1169011279
- **Dirección**: Thorne 3055, Ituzaingo, Buenos Aires
- **Horarios**: Lun-Vie 10-13h y 17-19h, Sáb 9-13h

## 🔄 Migración Completada
✅ Migración completa de HTML estático a Vue.js SPA
✅ Implementación de principios UX/UI avanzados  
✅ Diseño mobile-first responsive
✅ Deployment automático configurado
✅ Archivos legacy eliminados

---
*Desarrollado con ❤️ para Vivero Ganesha*
