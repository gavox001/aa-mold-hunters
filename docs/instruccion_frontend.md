Respuestas:
1. PALETA DE COLORES (Decisión crítica)
El diseño de referencia usa NARANJA (#FBA442), pero AA Mold Hunters usa VERDE LIMA (#D5FD38) como marca.
¿Qué paleta prefieres?
- A) Mantener el NARANJA del diseño de referencia (interior-design)
- B) Usar el VERDE LIMA de AA Mold Hunters (para alinear con marca real)
- C) Híbrido: Estructura del diseño de referencia pero con colores de AA Mold Hunters
- D) Otra propuesta
R: Paleta Principal - "EcoTrust Pro"
Rol	Color	Hex	Uso Recomendado	Psicología
Verde Primario	🟢 #2ECC71	Botones principales, logo, iconos clave	Frescura, crecimiento, solución activa	
Verde Oscuro	🟢 #1B5E20	Headers, footer, textos destacados	Autoridad, profesionalismo, estabilidad	
Verde Menta	🟢 #A5D6A7	Fondos secundarios, hover states	Calma, limpieza, espacio respirable	
Ámbar Persuasivo	🟠 #FFB300	CTAs secundarios, badges, alertas	Urgencia amigable, atención sin alarma	
Gris Neutro	⚪ #F5F7FA	Fondos de sección	Limpieza visual, contraste suave	
Texto Principal	⚫ #1A1A2E	Body copy	Legibilidad máxima, seriedad	
Blanco Puro	⚪ #FFFFFF	Tarjetas, contenedores	Claridad, higiene visual	
Gradientes Sugeridos (para botones y héroes)
/* Botón CTA Principal - Efecto "Pulsante" */
background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
/* Header/Hero - Profundidad profesional */
background: linear-gradient(180deg, #1B5E20 0%, #2E7D32 100%);
/* Badge de urgencia sutil */
background: linear-gradient(90deg, #FFB300 0%, #FFA726 100%);
El tema por defecto debe ser Light-First. Además puedes apoyarte con los archivos style.css y tailwind.config.js ubicados en C:\wamp64\www\aamold-hunter\docs\css
2. SERVICIOS A IMPLEMENTAR
Well Done Mitigation tiene 4 servicios, pero no todos aplican 100% a mold:
Servicio Well Done
Water Mitigation
Roof Protection
Mold Remediation
Shrinkwrap & Tarps
¿Implemento:
- A) Los 4 servicios exactos de Well Done (adaptando textos)
- B) Solo los servicios relevantes para mold (Water + Mold + quizás Roof)
- C) Servicios personalizados basados en AA Mold Hunters real
R: A
3. MARCA/NOMBRE DEL PROYECTO
Hay inconsistencia en el nombre:
- Tu proyecto: aamold-hunter (monorepo)
- Sitio real: AA Mold Hunters (con espacios y plural)
- Base de datos: aamold_hunter_db
¿Cuál es el nombre oficial para la landing?
- A) AA Mold Hunters (igual al sitio real)
- B) AAMold Hunter (sin espacios)
- C) AAMold Hunters (tu monorepo actual)
R: A
4. IMÁGENES Y ASSETS
El diseño de referencia usa imágenes específicas:
- header-bg.png (fondo hero)
- service-bg.png (sección servicios)
- about-us-bg.png (sección about)
- power-icon.png, rocket-icon.png (iconos)
¿Tienes:
- A) Imágenes propias de AA Mold Hunters para usar
- B) Quieres que busque imágenes de Unsplash relacionadas (hogares, moho, técnicos)
- C) Usar placeholders genéricos por ahora
R: A, tengo todo logo y demas imágenes pero utiliza placeholders de imágenes reales acorde al tipo de servicio para luego únicamente cambiarlas
5. FUNCIONALIDAD DEL FORMULARIO "FREE INSPECTION"
Well Done y AA Mold Hunters tienen un formulario de contacto para "Free Inspection".
¿Necesitas:
- A) Solo el botón visual (decorative) que lleve a /contact
- B) Formulario funcional real con campos (nombre, email, teléfono, mensaje)
- C) Integración con backend (NestJS) para recibir leads
B y C pero la Integración con backend (NestJS) para recibir leads la haremos después en este momento en foco es el Frontend únicamente.
6. TESTIMONIOS
AA Mold Hunters tiene 5 testimonios reales en su sitio.
¿Los usamos?
- A) Sí, los 5 testimonios reales de aamoldhunters.com
- B) No, crear testimonios genéricos de ejemplo
- C) Omitir sección de testimonios por ahora
R: A y si es posible optimízalos.
7. SECCIONES DEL DISEÑO DE REFERENCIA
El diseño de referencia tiene estas secciones:
1. Nav (fijo)
2. Header/Hero (con imagen de fondo)
3. Dream Home (3 features)
4. About (texto + imagen)
5. Service (texto + imagen lateral)
6. Creative Director (sección especial)
7. Our Projects (galería)
8. Footer
¿Todas las implemento o elimino alguna?
- A) Todas las secciones (completa)
- B) Eliminar "Creative Director" y "Our Projects" (no aplica a servicios de mold)
- C) Custom: ¿cuáles específicamente?
R: A, todo debe ir acoplado a  AA Mold Hunters
8. ANIMACIONES
El diseño de referencia usa animaciones de Chakra UI.
¿Qué nivel de animaciones?
- A) Exactas al diseño de referencia (transiciones, hovers)
- B) Animaciones simples CSS (fade-in, slide-up)
- C) Sin animaciones (estático, más simple)
R: A, y optimizadas acopladas a nuestro stack
9. IDIOMA
- A) Todo en inglés (como Well Done y AA Mold Hunters reales)
- B) Todo en español
- C) Mix: inglés principal, opción de español
R: C
10. FOOTER - DATOS DE CONTACTO
AA Mold Hunters real no muestra dirección específica en el sitio, solo área (South Florida).
¿Tienes:
- Dirección física real
- Teléfono real
- Email real
- Redes sociales (Facebook, Instagram, etc.)
O uso datos placeholder por ahora?
R: usa placeholder por ahora 
Thinking: El usuario ha proporcionado respuestas detalladas a las 10 preguntas. Estoy en modo PLAN, por lo que debo analizar estas respuestas y construir un plan detallado sin hacer cambios aún.
Análisis de respuestas:
1. Paleta: EcoTrust Pro con verde #2ECC71 como primario (no usaré naranja ni verde lima de AA Mold Hunters originales)
2. Servicios: Los 4 de Well Done
3. Nombre: AA Mold Hunters
4. Imágenes: Placeholders de Unsplash
5. Formulario: Opción B (funcional, frontend primero, backend después)
6. Testimonios: Los 5 reales de AA Mold Hunters
7. Secciones: Todas, adaptadas
8. Animaciones: Exactas al diseño de referencia
9. Idioma: Mix inglés/español
10. Footer: Placeholders
Ahora debo construir un plan detallado y presentarlo al usuario para aprobación antes de comenzar la implementación
Perfecto. He recibido todas las respuestas. Estoy en modo PLAN y voy a construir el plan detallado basado en tus especificaciones.
---
📋 PLAN DETALLADO - Landing Page AA Mold Hunters
✅ RESUMEN DE DECISIONES CONFIRMADAS
Aspecto	Decisión	Detalle
Paleta	EcoTrust Pro	Verde #2ECC71 primario, verde oscuro #1B5E20, ámbar #FFB300
Servicios	4 de Well Done	Water Mitigation, Roof Protection, Mold Remediation, Shrinkwrap & Tarps
Nombre	AA Mold Hunters	Con espacios y plural
Imágenes	Placeholders Unsplash	Hogares, técnicos, moho (para reemplazar después)
Formulario	Funcional frontend	Conexión backend NestJS después
Testimonios	5 reales	Optimizados de aamoldhunters.com
Secciones	Todas	Nav, Hero, DreamHome, About, Service, CreativeDirector, OurProjects, Footer
Animaciones	Exactas + optimizadas	Transiciones, hovers, GSAP/Framer
Idioma	Mix	Inglés principal, opción español
Footer	Placeholders	Datos de contacto temporales
---
🎨 ESPECIFICACIONES DE DISEÑO FINAL
Paleta EcoTrust Pro
Rol	Color	Hex	Uso
Primario	Verde	#2ECC71	Botones CTA, logo, iconos clave
Oscuro	Verde Bosque	#1B5E20	Headers, footer, texto destacado
Menta	Verde Claro	#A5D6A7	Fondos secundarios, hover states
Ámbar	Naranja/Dorado	#FFB300	CTAs secundarios, badges, urgencias
Neutro	Gris	#F5F7FA	Fondos de sección
Texto	Negro Suave	#1A1A2E	Body copy
Blanco	Blanco Puro	#FFFFFF	Tarjetas, contenedores
Gradientes Oficiales
/* Botón CTA Principal */
background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
/* Header/Hero */
background: linear-gradient(180deg, #1B5E20 0%, #2E7D32 100%);
/* Badge Urgencia */
background: linear-gradient(90deg, #FFB300 0%, #FFA726 100%);
Tipografía
- Fuente Principal: Inter (de Next.js) - reemplaza Mukta
- Tamaños: Mantener escala del diseño de referencia
  - Hero: 60px desktop / 40px mobile
  - H2: 40px desktop / 28px mobile  
  - H3: 32px desktop / 24px mobile
  - Body: 16px-18px
---
📐 ESTRUCTURA DE SECCIONES (Pixel-Perfect)
1. NAVBAR (Fixed, Glassmorphism)
Basado en: nav.tsx del diseño de referencia
Adaptaciones para AA Mold Hunters:
- Logo: Texto "AA Mold Hunters" o placeholder de imagen
- Menú: Home | About | Services | Testimonials | Contact
- CTA Derecha: 
  - "Sign In" (ghost button)
  - "Free Inspection" (verde #2ECC71, con gradiente)
Responsive:
- Desktop: Menú horizontal
- Mobile: Hamburger menu (SVG icon)
- Fondo: rgba(255,255,255,0.8) con backdrop-blur
---
2. HERO SECTION (Header)
Basado en: header.tsx del diseño de referencia
Estructura exacta:
- Grid con imagen de fondo (Unsplash: casa/hogar moderno)
- 3 filas grid, contenido en fila 3
- Título H2 (estilo destacado):
  - Texto: "PROFESSIONAL MOLD REMEDIATION SERVICES"
  - Color: #FFFFFF
  - Fondo: #1B5E20 (verde oscuro)
  - Padding: 16px 24px
  - max-width: fit-content
- Subtítulo H3:
  - Texto: "FREE INSPECTION • SOUTH FLORIDA"
  - Color: #1B5E20
  - Fondo: #FFFFFF
  - Text-transform: uppercase
CTA Principal:
- Botón: "GET YOUR FREE INSPECTION"
- Estilo: Gradient #2ECC71 → #27AE60
- Icono: Arrow right
---
3. DREAM HOME SECTION (Features)
Basado en: dream-home.tsx del diseño de referencia
Título: "Why Choose AA Mold Hunters?"
3 Cards de features:
Card	Icono	Título	Descripción
1	Shield/Check	"Certified Experts"	"Licensed and certified mold remediation specialists with years of experience."
2	Home/House	"Fast Response"	"24/7 emergency services available. We respond within hours, not days."
3	Heart/Health	"Health First"	"Your family's safety is our priority. We use safe, effective remediation methods."
Layout:
- Flex row desktop
- Flex column mobile
- Iconos: 50x50px, color #2ECC71
- Cards: max-width 380px
---
4. ABOUT SECTION
Basado en: about.tsx del diseño de referencia
Layout: Grid 6 columnas (texto izquierda + imagen derecha)
Contenido:
- Título: "About AA Mold Hunters"
- Subtítulo: "Your Trusted Mold Remediation Partner"
- Texto: 
  "AA Mold Hunters is South Florida's leading mold inspection and remediation company. We specialize in identifying hidden mold problems and providing comprehensive solutions to protect your home and health.
  With over 10 years of experience, our certified technicians use advanced technology to detect mold in areas others miss. We're committed to transparency, quality, and your complete satisfaction."
  
- CTA: "Learn More About Us"
Imagen: Placeholder Unsplash (técnico trabajando/equipo)
---
5. SERVICES SECTION
Basado en: service.tsx del diseño de referencia
Layout: Grid 12 columnas con imagen absoluta posicionada
Fondo: Color #2ECC71 (verde primario) - REEMPLAZA naranja #FBA442
Contenido derecha:
- Título: "OUR PROFESSIONAL SERVICES"
- Subtítulo: "Complete Mold & Water Damage Solutions"
- Descripción: "From initial inspection to complete remediation, we handle every step of the mold removal process."
- CTA: "View All Services" (botón blanco, texto verde)
Imagen lateral (izquierda):
- Position: absolute
- Left: 5%
- Width: 40% desktop / hidden mobile
- Border: 10px solid white
- Box-shadow: 0px 4px 4px rgba(0,0,0,0.25)
- Placeholder: Técnico inspeccionando
---
6. CREATIVE DIRECTOR SECTION
Basado en: creative-director.tsx del diseño de referencia
Adaptación: Cambiar de "Creative Director" a "Lead Inspector" o "Our Process"
Contenido:
- Título: "Meet Our Lead Inspector"
- Nombre: "Carlos Rodriguez" (placeholder)
- Bio: Breve descripción del experto líder
- Imagen: Placeholder (persona profesional)
---
7. OUR PROJECTS SECTION (Galería)
Basado en: our-projects.tsx del diseño de referencia
Adaptación: Cambiar de "Projects" a "Before & After"
Título: "Our Recent Transformations"
Grid de imágenes: 4-6 proyectos de ejemplo
- Before/After photos (placeholders)
- Hover: Overlay con título del proyecto
---
8. WHY YOU NEED SECTION (Lista de beneficios)
Basado en: Sección de aamoldhunters.com
Título: "Why You NEED a Mold Inspection ASAP!"
6 Items con checkmarks (iconos SVG verde #60AD5E):
1. ✅ Protect Your Health: Mold can trigger allergies and respiratory issues...
2. ✅ Prevent Property Damage: Mold can damage your home's structure...
3. ✅ South Florida's Ideal Mold Habitat: If your home was recently in the path...
4. ✅ Real Estate Value: Whether selling or buying...
5. ✅ Insurance Compliance: Many insurance policies require...
6. ✅ Peace of Mind: Don't wait for visible signs...
---
9. QUALIFICATION SECTION
Título: "SEE IF YOU QUALIFY FOR OUR FREE MOLD INSPECTION"
5 Criterios (checkmarks verde lima #D5FD38):
1. ✅ There is visible water damage in your home...
2. ✅ You live in a tropical wet climate where mold thrives
3. ✅ Your home recently endured serious weather conditions
4. ✅ Family members have worsened allergies or asthma
5. ✅ You have a homeowner's insurance policy
CTA: "Apply for your FREE Inspection" (botón verde #2ECC71)
---
10. TESTIMONIALS SECTION (Carrusel)
Título: "How a FREE Mold Inspection Changed Their Lives…"
5 Testimonios (de aamoldhunters.com):
1. Claudia Sierra - ⭐⭐⭐⭐⭐
   "AA Mold Hunter identified chaetomium mold from a hidden dishwasher leak..."
2. Vanessa Berroteran - ⭐⭐⭐⭐⭐
   "Upon discovering persistent allergies in my children, a mold blood test revealed mold..."
3. Elida Nina - ⭐⭐⭐⭐⭐
   "My property was rent for a couple of years and once tenants left i could notice mold..."
4. Dolores Ramirez - ⭐⭐⭐⭐⭐
   "My family's health and mine are the most important to me..."
5. Juan Pérez - ⭐⭐⭐⭐⭐
   "I would give this company more than 5 stars if I could..."
Estilo: Tarjetas con fondo blanco, estrellas doradas/verdes
---
11. FREE INSPECTION FORM SECTION
Título: "GET YOUR FREE MOLD INSPECTION"
Formulario funcional (frontend):
- Nombre completo (input)
- Email (input)
- Teléfono (input)
- Tipo de propiedad (select: House / Apartment / Commercial)
- Mensaje (textarea)
- Botón: "SCHEDULE FREE INSPECTION"
Validación: HTML5 + React Hook Form
Estado: Submit muestra "Thank you" message (backend después)
---
12. FOOTER
Basado en: footer.tsx del diseño de referencia
4 Columnas:
Col 1	Col 2	Col 3	Col 4
Logo + descripción	Services	Contact	Newsletter
"AA Mold Hunters..."	Water Mitigation	Address: Miami, FL	"Subscribe..."
Redes sociales	Mold Remediation	Phone: (800) 000-0000	Input + Botón
(iconos #2ECC71)	Roof Protection	Email: info@...	 
 	Shrinkwrap	 	 
Copyright: "© 2024 AA Mold Hunters Services | All Rights Reserved"
---
🛠️ STACK TÉCNICO
- Framework: Next.js 15.2 (App Router)
- Lenguaje: TypeScript
- Estilos: Tailwind CSS 4.2
- UI Components: shadcn/ui
- Iconos: Lucide React + SVGs personalizados
- Animaciones: Framer Motion / GSAP
- Formularios: React Hook Form (opcional)
- Fuentes: Inter (Next.js)
---
📱 RESPONSIVE BREAKPOINTS
Breakpoint	Width	Layout
Mobile	< 640px	Single column, stacked, hamburger menu
Tablet	640px - 1024px	2 columns, adjusted spacing
Desktop	> 1024px	Full 12-column grid, side-by-side
---
## 🎬 ANIMACIONES (Exactas al diseño de referencia)
1. **Navbar:** Slide down on load, backdrop blur effect
2. **Hero:** Fade in + slide up text elements
3. **Features:** Stagger fade-in on scroll
4. **Services:** Parallax en imagen lateral
5. **Buttons:** Hover scale + shadow
6. **Testimonios:** Carrusel auto-slide o swipe
7. **Scroll:** Smooth scroll behavior
---
📂 ESTRUCTURA DE ARCHIVOS
apps/web/src/
├── app/
│   ├── page.tsx                    # Landing page principal
│   ├── layout.tsx                  # Root layout con fonts
│   └── globals.css                 # Tailwind + custom styles
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx              # Navigation fixed
│   │   ├── Hero.tsx                # Header section
│   │   ├── DreamHome.tsx           # Features 3 cards
│   │   ├── About.tsx               # About section
│   │   ├── Services.tsx            # Services grid
│   │   ├── CreativeDirector.tsx    # Lead inspector
│   │   ├── OurProjects.tsx         # Gallery
│   │   ├── WhyNeed.tsx             # Benefits list
│   │   ├── Qualification.tsx       # Qualification checklist
│   │   ├── Testimonials.tsx        # Reviews carousel
│   │   ├── FreeInspectionForm.tsx  # Contact form
│   │   └── Footer.tsx              # Footer 4 columns
│   └── ui/                         # shadcn components
├── hooks/                          # Custom hooks
├── lib/                            # Utilities
└── types/                          # TypeScript types
---
⏱️ TIMELINE DE IMPLEMENTACIÓN
Fase	Tiempo	Tareas
1. Setup	30 min	Configurar Tailwind con paleta EcoTrust, instalar dependencias
2. Navbar + Hero	1.5h	Navbar sticky, Hero con imagen y textos destacados
3. DreamHome + About	1h	Features cards, About section con imagen
4. Services + Creative	1h	Services grid verde, Creative Director adaptado
5. Projects + Why	1h	Gallery grid, Why Need list
6. Qualification + Testimonials	1h	Checklist, Reviews carousel
7. Form + Footer	1h	Formulario funcional, Footer 4 columnas
8. Responsive + Animations	1h	Mobile-first, animaciones Framer Motion
9. Testing + Polish	30 min	Test responsive, ajustes finales
TOTAL	~7.5 horas	 
---
## ✅ CHECKLIST PRE-IMPLEMENTACIÓN
- [x] Paleta de colores definida (EcoTrust Pro)
- [x] Estructura de secciones confirmada (12 secciones)
- [x] Servicios identificados (4 de Well Done)
- [x] Testimonios listos (5 de AA Mold Hunters)
- [x] Formulario funcional (frontend primero)
- [x] Responsive breakpoints definidos
- [x] Animaciones especificadas
- [x] Stack tecnológico confirmado
---
❓ PREGUNTAS FINALES ANTES DE COMENZAR
1. ¿Confirmas la paleta EcoTrust Pro con verde #2ECC71? (En lugar de usar naranja o verde lima originales)
2. ¿El formulario "Free Inspection" debe enviar datos a algún endpoint específico, o por ahora solo es visual y guardamos en estado local?
3. ¿Quieres que busque imágenes específicas de Unsplash, o prefieres que use URLs de placeholder genéricas por ahora? (Ej: picsum.photos)
4. ¿Los testimonios van en carrusel/swipe o en grid estático?
5. ¿Confirmas que el idioma sea Mix (inglés principal), o prefieres empezar todo en inglés y agregar español después?
---
Una vez respondas estas 5 preguntas finales, procedo inmediatamente a la implementación.
¿Estás listo para que comience la construcción de la landing page pixel-perfect?
▣  Plan · Kimi K2.5 · 3m 40s
R1: EcoTrust Pro con verde #2ECC71, R2: por ahora solo es visual, R3: busca imágenes específicas de Unsplash, R4: carrusel/swipe, R5: Mix (inglés principal) falto una ultima cosa añade un toggle para cambiar a modo oscuro pero el tema por defecto debe ser Light-First
Thinking: El usuario ha respondido a las preguntas finales y ha agregado un requisito adicional: toggle para modo oscuro/claro con tema Light-First por defecto.
Resumen de respuestas:
1. ✅ Paleta EcoTrust Pro con verde #2ECC71 confirmada
2. ✅ Formulario solo visual (estado local)
3. ✅ Buscar imágenes específicas de Unsplash
4. ✅ Testimonios en carrusel/swipe
5. ✅ Mix (inglés principal)
6. ✅ Toggle modo oscuro/claro, tema Light-First por defecto
Ahora debo actualizar el plan para incluir el toggle de tema oscuro/claro y luego proceder a la implementación.
El usuario dice "falto una ultima cosa" y luego menciona el toggle. Esto significa que es el último requisito antes de comenzar.
Debo:
1. Actualizar el plan con el toggle de tema
2. Confirmar que todo está listo
3. Pedir confirmación final para comenzar la implementación
Recuerdo que estoy en modo PLAN y no puedo hacer cambios todavía. Debo presentar el plan actualizado y ped
Perfecto. Actualizo el plan con el requisito adicional del toggle modo oscuro/claro. --- # 📋 PLAN FINAL ACTUALIZADO - AA Mold Hunters Landing ## ✅ RESPUESTAS CONFIRMADAS | Pregunta | Respuesta | Implementación | |----------|-----------|----------------| | R1: Paleta | EcoTrust Pro #2ECC71 | ✅ Verde primario, gradientes oficiales | | R2: Formulario | Solo visual (estado local) | ✅ React state, sin backend por ahora | | R3: Imágenes | Unsplash específicas | ✅ Buscar: mold remediation, water damage, home inspection | | R4: Testimonios | Carrusel/swipe | ✅ Componente carousel con navegación | | R5: Idioma | Mix (inglés principal) | ✅ Inglés + opción español después | | R6: Toggle | Modo Oscuro/Claro | Tema Light-First por defecto | --- ## 🌙 NUEVO REQUISITO: TOGGLE MODO OSCURO/CLARO ### Especificaciones: - Default: Tema Light (como solicitado) - Toggle: Botón en navbar para cambiar entre Light/Dark - Persistencia: Guardar preferencia en localStorage - Transición: Suave entre modos (transition-colors duration-300) ### Paleta Dark Mode Adaptada: | Elemento | Light Mode | Dark Mode | |----------|------------|-----------| | Fondo | #FFFFFF | #1A1A2E | | Texto principal | #1A1A2E | #F5F7FA | | Fondo cards | #F5F7FA | #2D2D44 | | Verde primario | #2ECC71 | #2ECC71 (igual) | | Verde oscuro | #1B5E20 | #4ADE80 (más brillante) | | Footer | #1B5E20 | #0F172A | ### Componente Toggle: - Ubicación: Navbar derecha (junto a CTA) - Icono: 🌞 (sol) / 🌙 (luna) - Animación: Rotación suave al cambiar --- ## 🎨 IMPLEMENTACIÓN DEL TOGGLE ### Técnica: CSS Variables + Tailwind 1. Definir variables CSS en :root para ambos temas 2. Clase .dark en html/body cuando modo oscuro activo 3. next-themes (librería) o implementación nativa con Context ### Código estructura: tsx // Context para ThemeProvider const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} }); // En Navbar <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"> {theme === 'light' ? <MoonIcon /> : <SunIcon />} </button>  --- ## 📐 SECCIONES ACTUALIZADAS (13 total) 1. Navbar (con toggle theme) 2. Hero 3. DreamHome (Features) 4. About 5. Services 6. CreativeDirector → Renombrar a "Our Expert" 7. OurProjects → Renombrar a "Before & After" 8. WhyYouNeed 9. Qualification 10. Testimonials (Carrusel) 11. FreeInspectionForm 12. Footer --- ## 🔍 IMÁGENES UNSPLASH A BUSCAR Lista específica de imágenes necesarias: | Sección | Búsqueda Unsplash | Uso | |---------|-------------------|-----| | Hero | "modern home exterior" o "house inspection" | Fondo hero | | About | "technician inspecting home" o "mold inspection" | Imagen lateral | | Services | "water damage restoration" | Imagen lateral servicios | | Before/After | "mold damage wall" + "clean wall" | Galería proyectos | | CreativeDirector | "professional technician portrait" | Foto del experto | | Testimonials | (Opcional) Avatares genéricos | Fotos de clientes | --- ## ⏱️ TIMELINE ACTUALIZADO (con toggle theme) | Fase | Tiempo | Tareas | |------|--------|--------| | 1. Setup | 45 min | Tailwind config + Paleta + Theme Provider + Toggle | | 2. Navbar | 1h | Navbar + Toggle theme + Responsive menu | | 3. Hero | 1h | Hero + Imagen Unsplash + Textos | | 4. DreamHome + About | 1h | Features + About section | | 5. Services + Expert | 1h | Services grid + Expert section | | 6. Projects + Why | 1h | Gallery + WhyNeed list | | 7. Qualification + Testimonials | 1h | Checklist + Carousel reviews | | 8. Form + Footer | 1h | Formulario funcional + Footer | | 9. Responsive + Polish | 1h | Mobile-first + Dark mode testing | | TOTAL | ~8 horas | | --- ## 📂 ESTRUCTURA DE ARCHIVOS ACTUALIZADA  apps/web/src/ ├── app/ │ ├── page.tsx # Landing page │ ├── layout.tsx # Root con ThemeProvider │ └── globals.css # Tailwind + variables tema ├── components/ │ ├── sections/ # 13 secciones │ ├── ui/ # shadcn + custom │ └── theme/ │ ├── ThemeProvider.tsx # Contexto tema │ ├── ThemeToggle.tsx # Botón toggle │ └── useTheme.ts # Hook personalizado ├── hooks/ ├── lib/ └── types/  --- ## ✅ CHECKLIST FINAL - x Paleta EcoTrust Pro confirmada - x Toggle modo oscuro/claro (Light-First) - x 13 secciones definidas - x Imágenes Unsplash especificadas - x Testimonios en carrusel - x Formulario solo visual - x Idioma Mix (inglés) - x Responsive mobile-first - x Animaciones incluidas --- ## 🚀 ESTÁS LISTO PARA COMENZAR He preparado todo el plan detallado. Una vez me des el GO, procederé con: 1. Configuración inicial: Tailwind con paleta EcoTrust + Theme Provider 2. Navbar: Con toggle de tema oscuro 3. Todas las secciones: Siguiendo el diseño pixel-perfect del proyecto de referencia 4. Responsive: Mobile-first con breakpoints 5. Imágenes: De Unsplash según especificaciones ¿Confirmas para comenzar la implementación inmediata? Responde "GO" o "Sí, comienza" y empezaré a construir la landing page.