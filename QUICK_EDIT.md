# 🎯 Guía Rápida de Edición - Open When...

## TL;DR - Los cambios más comunes

### 📝 Cambiar el contenido de una carta

**Archivo:** `script.js` (línea ~15-60)

```javascript
const lettersData = [
    {
        id: 1,
        emoji: "✈️",                          // ← Cambia el emoji
        title: "Ábreme cuando llegues",       // ← Cambia el título
        text: "¡Lo hiciste! Llegaste...",     // ← Cambia el texto
        images: ["./assets/photo.jpg"],       // ← Agregar imágenes
        song: "https://open.spotify..."       // ← Agregar canción
    },
];
```

### 🎨 Cambiar los colores morado

**Archivo:** `styles.css` (línea ~9-20)

```css
:root {
    --primary-deep: #5a3a7a;      /* Cambiar aquí */
    --primary-medium: #7a5a9a;    /* Y aquí */
    --primary-light: #b8a1c7;     /* Y aquí */
    --accent-cream: #f5f3f0;      /* Crema/fondo */
}
```

### 📄 Cambiar texto de portada

**Archivo:** `index.html` (línea ~21-28)

```html
<h1>Open When... 💜</h1>                           <!-- Cambiar -->
<p class="landing-subtitle">Para que nunca...</p>  <!-- Cambiar -->
<button>I have something for you</button>          <!-- Cambiar -->
```

### 🎁 Cambiar texto de bienvenida

**Archivo:** `index.html` (línea ~33-45)

```html
<h2>Un pequeño regalo</h2>  <!-- Cambiar -->
<p>Hice esto para ti...</p> <!-- Cambiar -->
<button>Open the letters</button>  <!-- Cambiar -->
```

### 🏷️ Cambiar título de colección

**Archivo:** `index.html` (línea ~50-54)

```html
<h2>Mis cartas para ti</h2>        <!-- Cambiar -->
<p>Elige una carta para abrir</p>  <!-- Cambiar -->
```

### 💜 Cambiar "Made with 💜 for you"

**Archivo:** `index.html` (línea ~76)

```html
<p class="made-with">Made with 💜 for you</p>  <!-- Cambiar -->
```

---

## 🔧 Operaciones comunes

### Agregar una carta nueva

1. Abre `script.js`
2. En el array `lettersData`, copia una tarjeta
3. Cambia el `id` a un número nuevo
4. Edita emoji, title, text

### Eliminar una carta

1. Abre `script.js`
2. Busca la tarjeta en `lettersData`
3. Borra todo el bloque `{ id: X, ... }`

### Cambiar número de columnas en mobile

**Archivo:** `styles.css` (línea ~490)

```css
@media (max-width: 480px) {
    .letters-grid {
        grid-template-columns: repeat(2, 1fr);  /* Cambia 2 por 3, 4, etc */
    }
}
```

### Hacer animaciones más lentas

**Archivo:** `styles.css` (línea ~13-15)

```css
--transition-fast: 0.2s ease-out;    /* Más rápido/lento */
--transition-normal: 0.3s ease-out;  /* Más rápido/lento */
--transition-slow: 0.5s ease-out;    /* Más rápido/lento */
```

---

## 📂 Estructura de carpetas recomendada

```
emi/
├── index.html
├── styles.css
├── script.js
├── README.md
├── QUICK_EDIT.md (este archivo)
└── assets/
    └── images/
        ├── nosotros1.jpg
        ├── memo.jpg
        └── ...
```

---

## ⚡ Consejos útiles

1. **Cambios en `script.js`**: Los cambios se ven al recargar la página
2. **Cambios en `styles.css`**: Los cambios se ven al recargar la página
3. **Cambios en `index.html`**: Los cambios se ven al recargar la página
4. **localStorage**: Las cartas abiertas se guardan automáticamente
5. **Imágenes**: Usa rutas relativas: `./assets/images/foto.jpg`

---

## 🎯 Pinpoint Navigation

Busca estas frases exactas con Ctrl+F:

| Qué cambiar | Buscar en | Texto |
|-----------|-----------|-------|
| Cartas | script.js | `const lettersData = [` |
| Colores | styles.css | `:root {` |
| Portada | index.html | `screen-1` |
| Bienvenida | index.html | `screen-2` |
| Colección | index.html | `screen-3` |

---

**¡Listo para personalizar tu regalo! 💜**
