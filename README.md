# iSalud — Landing Page

Landing page de captación de leads para **iSalud**, software médico en la nube para consultorios e IPS en Colombia.

---

## Descripción del proyecto

Página de aterrizaje estática (HTML + CSS + JS vanilla) diseñada para convertir visitantes en leads calificados. El flujo principal lleva al usuario a completar un formulario de cotización y/o contactar por WhatsApp con un asesor.

**URL objetivo:** [isalud.co](https://isalud.co)  
**Mercado:** Colombia — consultorios médicos e IPS  
**Idioma:** Español (es-CO)

---

## Estructura de archivos

```
landingIsalud/
├── index.html                          # Única página HTML
├── styles.css                          # Estilos completos (diseño Medilink-style)
├── script.js                           # Interactividad vanilla JS
├── img/
│   ├── logo/
│   │   ├── logo.png                    # Logo principal iSalud
│   │   └── logo (2).png               # Variante de logo
│   ├── img1.png                        # Feature: Soluciones clínicas
│   ├── img2.png                        # Feature: Soluciones administrativas
│   ├── img3.jpeg                       # Benefits: Métricas de crecimiento
│   ├── usuario.png                     # Imagen de usuario
│   └── ref.jpg                         # Imagen de referencia
├── hero-dashboard.png                  # Imagen de referencia (hero)
└── Collections Postman - REST/
    └── APIREST-INTEGRACION-RECEPCION.postman_collection
                                        # Colección Postman para integración futura
```

---

## Secciones de la página (orden)

1. **Hero** — Titular principal + formulario sticky de cotización (grid 2 columnas)
2. **Testimonials Bar** — 3 testimonios en columnas (fondo azul suave)
3. **Feature 1: Soluciones Clínicas** — Imagen + funcionalidades (agenda, historia clínica, RIPS, firmas)
4. **Feature 2: Soluciones Administrativas** — Imagen + funcionalidades (DIAN, inventario, sedes, habilitación)
5. **Ticker Marquee** — Banda animada con características del producto
6. **Benefits Banner** — 4 beneficios con iconos sobre fondo oscuro + imagen de métricas
7. **CTA** — Llamada a acción con botones Demo y WhatsApp (fondo oscuro)
8. **FAQ** — 5 preguntas frecuentes con acordeón
9. **Footer** — Logo, links legales, email, teléfono

**Elementos flotantes:**
- Botón WhatsApp flotante (esquina inferior derecha)
- Botón toggle dark/light mode (esquina superior derecha)

---

## Diseño y marca

### Colores
| Variable | Valor | Uso |
|---|---|---|
| `--blue-100` | `#0EA5E9` | Color primario / CTA |
| `--blue-200` | `#043852` | Hover botones primarios |
| `--blue-50` | `#E0F2FE` | Fondos suaves |
| `--green-100` | `#10B981` | Éxito / checkmarks |
| `--amber` | `#FBBF3F` | Estrellas de rating |
| `--gray-900` | `#0F172A` | Hero, Benefits, CTA (fondo oscuro) |

### Tipografía
- **Fuente:** Inter (Google Fonts) — pesos 400, 500, 600, 700, 800, 900
- **Headline-L:** clamp(1.75rem, 4vw, 2.5rem) — hero principal
- **Headline-M:** clamp(1.5rem, 3vw, 2rem) — secciones

### Estilo general
- Diseño "Medilink-style": limpio, claro, mínimo
- Modo oscuro implementado (`[data-theme="dark"]`) con persistencia en `localStorage`
- Animaciones fade-in con IntersectionObserver
- Totalmente responsivo (breakpoints en 768px y 480px)

---

## Funcionalidades JS

| Feature | Descripción |
|---|---|
| **Formulario sticky** | En móvil, el form se mueve debajo del footer (DOM manipulation) |
| **Smooth scroll** | Navegación suave para todos los `href="#..."` |
| **FAQ Accordion** | Abre/cierra preguntas, solo una activa a la vez |
| **Fade-in observer** | Elementos aparecen al hacer scroll (IntersectionObserver) |
| **Ticker marquee** | Banda de características generada dinámicamente, animación CSS infinita |
| **Form handling** | Validación, muestra pantalla de éxito, genera enlace WhatsApp personalizado |
| **Dark mode toggle** | Alterna tema claro/oscuro, persiste en localStorage con clave `isalud-theme` |

---

## Formulario de leads

**Campos:** Nombre completo, Email, Teléfono  
**Acción actual:** `console.log` (no hay integración backend activa)  
**Post-submit:** Muestra pantalla de éxito + botón WhatsApp con texto pre-cargado personalizado

### WhatsApp de contacto
- **Número:** +57 323 688 3323
- **Link demo:** `https://wa.me/573236883323?text=Hola%2C%20quiero%20una%20demo%20de%20iSalud.`
- **Link info:** `https://wa.me/573236883323?text=Hola%2C%20quiero%20más%20información%20sobre%20iSalud.`

---

## Producto iSalud — Propuesta de valor

### Soluciones Clínicas
- Agenda médica
- Historia clínica digital (personalizable por especialidad)
- Consentimientos
- RIPS automáticos
- Firmas digitales
- Reportes clínicos

### Soluciones Administrativas
- Facturación electrónica DIAN (con certificado digital)
- Reportería avanzada
- Control de inventario
- Roles y permisos
- Múltiples sedes
- Habilitación

### Datos clave de credibilidad
- +500 profesionales de la salud usando el sistema
- Implementación: 1-3 días (consultorio) / 2-4 semanas (IPS multi-sede)
- Permanencia: 1 año con facturación DIAN / 6 meses sin facturación
- Cumple Ley 1581 de Protección de Datos (Colombia)
- Datos en la nube con cifrado y backups automáticos

### Especialidades mencionadas
Medicina general, Odontología, Dermatología, Psicología, Pediatría

---

## Testimonios

| Iniciales | Nombre | Ciudad | Contexto |
|---|---|---|---|
| CM | Dr. Carlos Martínez | Bogotá | Digitalización de historias clínicas |
| AR | Dra. Ana Rodríguez | Medellín (IPS Salud Integral) | IPS con 3 sedes, RIPS |
| LP | Dra. Laura Pineda | Cali | Dermatología, personalización HC |

---

## Contacto y links legales

- **Email:** info@isalud.co
- **Teléfono:** +57 323 688 3323
- **Términos:** https://isalud.co/terminos-y-condiciones
- **Privacidad:** https://isalud.co/politica-de-privacidad

---

## Pendientes / Notas técnicas

- **Integración backend:** El formulario actualmente solo hace `console.log`. Hay una colección Postman (`APIREST-INTEGRACION-RECEPCION`) que sugiere una API REST planeada o existente para recibir los leads.
- **Bug menor en FAQ:** En la primera pregunta ("¿Incluye soporte?") falta el cierre `</div>` en la respuesta (`/div>` sin `<`).
- **Sección de precios:** El CSS tiene estilos para `.section-pricing` y `.price-card` pero no hay HTML de precios en `index.html` — fue removida o está pendiente de implementar.
- **`img/ref.jpg` y `hero-dashboard.png`:** Imágenes de referencia que no se usan en producción.
- **`img/logo (2).png`:** Variante de logo sin uso activo.

---

## Comandos git recientes

```
11f191b  Update images to PNG format and adjust section layout
59242fb  Make feature images larger with object-fit crop
071f9b0  Move CTA section before FAQ
08e4656  Add product images and update logo assets
eb6c494  Add product images to feature and benefits sections
```
