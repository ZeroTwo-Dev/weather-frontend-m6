Módulo 6 – App del Clima (Teyvat Weather SPA)
* Estudiante: César Ossa
* Repositorio: https://github.com/ZeroTwo-Dev/weather-frontend-m6.git

# 1. Descripción y Propósito
En esta sexta etapa, la aplicación ha sido migrada íntegramente al framework Vue.js, 
transformándose en una Single Page Application (SPA). 
El objetivo principal es gestionar la interfaz de forma reactiva, organizando el código en 
componentes reutilizables y permitiendo una navegación fluida entre regiones sin recargar el navegador.

# 2. Arquitectura de Componentes (Vue.js)
Siguiendo los requisitos de modularización, la App se divide en componentes claros:
**App.vue (Raíz):** Contiene el marco global, la barra de navegación elemental y el contenedor principal de vistas.
**HomeView.vue:** Gestiona el listado dinámico de las 12 regiones de Teyvat utilizando directivas de renderizado.
**DetalleView.vue:** Componente de ruta dinámica que procesa y muestra las estadísticas climáticas del lugar seleccionado.

# 3. Navegación y Rutas (Vue Router)
Se implementó Vue Router para gestionar el historial y la navegación interna:
**Ruta Inicio (/):** Despliega el Dashboard principal con todas las regiones.
**Ruta Dinámica (/lugar/:id):** Carga la información específica de cada región basándose en el ID enviado por la URL.
**Navegación SPA:** Uso de <router-link> para transiciones instantáneas, mejorando la experiencia de usuario (UX).

# 4. Reactividad e Interactividad (Directivas)
La aplicación aprovecha el motor de reactividad de Vue para cumplir con la rúbrica:
**Buscador en Tiempo Real:** Implementación de un filtro de regiones mediante un formulario vinculado con v-model.
**Interpolación y Binding:** Uso de {{ }} y :key para sincronizar los datos del JSON directamente con el DOM.
**Lógica Computada:** Cálculo automático de promedios, máximas y mínimas dentro de los componentes utilizando computed properties de Vue.

# 5. Tecnologías Utilizadas
**Framework:** Vue.js 3 (Composition API).Herramienta de Construcción: Vite (Entorno de desarrollo rápido).
**Enrutado:** Vue Router 4.
**Estilos:** SASS/CSS con técnicas de Glassmorphism heredadas y optimizadas para componentes de Vue

# 6. Instrucciones de Ejecución
Para ejecutar este proyecto localmente, es necesario tener instalado Node.js. A diferencia del módulo anterior, ya no se utiliza Live Server, sino el servidor de desarrollo de Vite.
**Clonar el repositorio:**
git clone https://github.com/ZeroTwo-Dev/weather-frontend-m6.git
**Instalar dependencias:**
npm install
**Iniciar servidor de desarrollo:**
npm run dev
**Acceder a la App:** Abrir el navegador en http://localhost:5173.

# 7. Control de Versiones (Git)
Se mantiene un flujo de trabajo profesional con commits descriptivos (mínimo 3) que documentan la inicialización del entorno, la creación de vistas y la implementación de la lógica reactiva.
