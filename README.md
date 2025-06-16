## 🌌 Planet of the Ads
Planet of the Ads es una Single Page Application desarrollada con React + TypeScript que simula una plataforma de visualización de campañas publicitarias y métricas de rendimiento, inspirada en herramientas como las que se utilizan en Adsmurai.

Esta plataforma permite visualizar creatividades publicitarias, filtrarlas por campaña y plataforma, y explorar un dashboard de métricas con visualización de datos y filtros dinámicos.

### 📸 Preview 
![Cities Quiz Preview](https://res.cloudinary.com/drdwtcsc4/image/upload/v1750042386/Others/chrome_bfrvRz8Fja_ssyvsv.gif "Cities Quiz Preview")

### 🛠 Stack técnico
React 18 + Vite

TypeScript

React Router DOM

Tailwind CSS

Recharts (visualización de datos)

Arquitectura de componentes

JSON local simulado como backend

### 🚀 Funcionalidades principales
Galería de anuncios con filtro por campaña y plataforma

Dashboard de métricas con CTR, clics, impresiones y gasto

Filtros dinámicos para segmentar métricas por campaña/plataforma

Visualización de datos en gráficos de líneas (Recharts)

Componentes reutilizables y tipado estricto con TypeScript

Diseño responsive y minimalista con Tailwind CSS

### 📁 Estructura del proyecto
src/
├── App.tsx
├── main.tsx
├── components/
│ ├── Header.tsx
│ ├── AdCard.tsx
│ ├── GalleryFilters.tsx
│ ├── MetricCard.tsx
│ └── MetricsFilters.tsx
├── routes/
│ ├── Gallery.tsx
│ └── MetricsDashboard.tsx
├── types.ts
└── index.css

### ▶️ Instalación y ejecución
Clona el repositorio:

git clone https://github.com/tu-usuario/planet-of-the-ads.git
cd planet-of-the-ads

Instala dependencias:

npm install

Inicia el servidor de desarrollo:

npm run dev

### 📄 Licencia
MIT