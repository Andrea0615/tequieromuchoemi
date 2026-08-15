# Open When... 💜

Una colección digital de cartas para tu mejor amigo que se va de intercambio.

## 📁 Estructura del Proyecto

```
emi/
├── index.html       # Estructura HTML
├── styles.css       # Estilos y diseño
├── script.js        # Lógica y interactividad
├── assets/          # Carpeta para imágenes y recursos
└── README.md        # Este archivo
```

## 🚀 Cómo usar

1. **Clonar o descargar** el proyecto
2. **Abrir `index.html`** en tu navegador
3. **Modificar el contenido** según las instrucciones abajo
4. **Publicar** en GitHub Pages, Netlify o Vercel

## ✏️ GUÍA DE PERSONALIZACIÓN

### 1️⃣ **Modificar el contenido de las cartas**

Abre el archivo `script.js` y busca la sección **`DATA: LETTERS`** (línea ~15).

Aquí encontrarás un array llamado `lettersData` con todas las cartas:

```javascript
const lettersData = [
    {
        id: 1,
        emoji: "✈️",
        title: "Ábreme cuando llegues",
        text: "¡Lo hiciste! Llegaste a tu nuevo destino de intercambio...",
        images: [],
        song: null
    },
    // ... más cartas ...
];
```

**Cada tarjeta tiene:**
- `id`: Número único (no cambiar)
- `emoji`: El ícono que aparece en la tarjeta (ej: ✈️, 🥺, 🌧️)
- `title`: El título "Ábreme cuando..."
- `text`: El contenido de la carta (usa '\n\n' para párrafos)
- `images`: Array de URLs de imágenes (ej: `["./assets/photo1.jpg", "./assets/photo2.jpg"]`)
- `song`: URL de una canción (ej: link de Spotify, YouTube, etc.)

**Ejemplo con imágenes y canción:**

```javascript
{
    id: 1,
    emoji: "✈️",
    title: "Ábreme cuando llegues",
    text: "Aquí va tu texto...",
    images: ["./assets/airport.jpg", "./assets/arrival.jpg"],
    song: "https://open.spotify.com/track/..."
}
```

### 2️⃣ **Cambiar colores**

Abre `styles.css` y busca la sección **`:root`** (línea ~9).

Aquí puedes modificar los colores principales:

```css
:root {
    --primary-deep: #5a3a7a;      /* Morado profundo */
    --primary-medium: #7a5a9a;    /* Morado medio */
    --primary-light: #b8a1c7;     /* Lila/Lavanda */
    --accent-cream: #f5f3f0;      /* Crema/off-white */
    --accent-white: #ffffff;      /* Blanco puro */
    /* ... más colores ... */
}
```

**Genera colores personalizados** en [coolors.co](https://coolors.co) o [colorhexa.com](https://www.colorhexa.com)

### 3️⃣ **Cambiar textos de las pantallas principales**

#### Portada (Screen 1)
En `index.html`, busca `id="screen-1"`:

```html
<h1 class="landing-title">
    <span class="text-open">Open</span>
    <span class="text-when">When</span>
    <span class="emoji">💜</span>
</h1>
<p class="landing-subtitle">Para que nunca estés tan lejos de casa.</p>
```

#### Carta de bienvenida (Screen 2)
En `index.html`, busca `id="screen-2"`:

```html
<h2>Un pequeño regalo</h2>
<div class="letter-content">
    <p>Hice esto para ti para que, aunque estés lejos...</p>
</div>
```

#### Título de colección (Screen 3)
En `index.html`, busca `id="screen-3"`:

```html
<div class="collection-header">
    <h2>Mis cartas para ti</h2>
    <p>Elige una carta para abrir</p>
</div>
```

### 4️⃣ **Agregar imágenes**

1. **Crea una carpeta** `assets/images/` en tu proyecto
2. **Guarda tus fotos** ahí (jpg, png, webp)
3. **En `script.js`**, agrega las rutas en el array `images`:

```javascript
{
    id: 2,
    emoji: "🥺",
    title: "Ábreme cuando me extrañes",
    text: "Sé que a veces te siento lejos...",
    images: [
        "./assets/images/nosotros1.jpg",
        "./assets/images/nosotros2.jpg"
    ],
    song: null
}
```

### 5️⃣ **Agregar canciones**

Puedes usar links de:
- **Spotify**: Haz clic en "Compartir" → "Copiar enlace de canción"
- **YouTube**: Copia la URL del video
- **SoundCloud**: Copia el enlace compartible

```javascript
{
    id: 5,
    emoji: "😂",
    title: "Ábreme cuando necesites reírte",
    text: "Recuerda aquella vez cuando...",
    images: [],
    song: "https://open.spotify.com/track/3FQB8aPcn1u6O5Q8d6vZjc"
}
```

### 6️⃣ **Cambiar número de cartas**

Por defecto hay 12 cartas. Para añadir más:

1. **Duplica una carta** en el array `lettersData` en `script.js`
2. **Cambia el `id`** a un número nuevo (ej: 13)
3. **Modifica** emoji, title, text, etc.

**Para eliminar cartas:**
- Simplemente borra la tarjeta del array (pero recuerda: la carta secreta (#12) cust debería ir al final)

### 7️⃣ **Personalizar el "Made with 💜 for you"**

En `index.html`, busca:

```html
<p class="made-with">Made with 💜 for you</p>
```

Cámbialo por lo que quieras, ej:
```html
<p class="made-with">Hecho con 💜 para ti</p>
```

### 8️⃣ **Cambiar tipografía**

En `styles.css`, busca la sección `:root` y encuentra:

```css
--font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-elegant: 'Garamond', 'Palatino', serif;
--font-script: 'Brush Script MT', cursive;
```

Puedes importar Google Fonts al inicio de `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400&display=swap');

:root {
    --font-elegant: 'Playfair Display', serif;
    --font-main: 'Lora', serif;
}
```

## 🎨 Personalización avanzada

### Cambiar animaciones
En `styles.css`, busca `@keyframes` y modifica las propiedades de animación.

### Cambiar animación de sobres diferentes
En `styles.css`, la sección `.letter-card:nth-child(...)` define los gradientes únicos de cada tarjeta.

### Cambiar espaciado
En `styles.css`, sección `:root` bajo "Spacing", modifica:
```css
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
```

## 📱 Responsive

La página está totalmente optimizada para:
- **Desktop**: 1920px y más
- **Tablet**: 768px a 1919px
- **Mobile**: 480px a 767px

Las media queries están al final de `styles.css`.

## ♿ Accesibilidad

- ✅ HTML semántico
- ✅ Botones accesibles con `aria-label`
- ✅ Navegación con teclado (Enter, Escape)
- ✅ Contraste adecuado de colores
- ✅ Soporte para `prefers-reduced-motion`

## 🚀 Publicar en internet

### GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a **Settings** → **Pages**
4. Selecciona **Main** como rama
5. ¡Listo! Tu sitio estará en `username.github.io/emi`

### Netlify (Muy fácil)

1. Sube tu carpeta a GitHub
2. Ve a [netlify.com](https://www.netlify.com)
3. Haz clic en **"New site from Git"**
4. Conecta tu repositorio
5. ¡Listo!

### Vercel

1. Sube a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en **"Import Project"**
4. Selecciona tu repositorio
5. Deploy automático

## 💡 Tips

- Usa `localStorage` para guardar qué cartas se abrieron (¡ya implementado!)
- Las cartas abiertas se marcan con 💜 automáticamente
- La carta secreta (#12) se revela solo cuando se abre
- Prueba en mobile antes de publicar

## 🐛 Troubleshooting

**Las imágenes no se ven:**
- Verifica que la ruta sea correcta (ej: `./assets/images/foto.jpg`)
- Asegúrate que la carpeta `assets/` existe

**Las canciones no funcionan:**
- Usa URLs completas (con `https://`)
- Verifica que el link compartible sea válido

**Las animaciones van muy rápido/lento:**
- En `styles.css`, busca `--transition-` y ajusta los valores (ej: `0.5s` en lugar de `0.3s`)

## 📄 Licencia

Este proyecto está hecho con ❤️ para ser un regalo especial.

---

**¡Espero que tu amigo ame este regalo digital! 💜**
