# 🚀 Cómo publicar tu "Open When..." en internet

## Opción 1: GitHub Pages (Recomendado - Gratis y simple)

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Click en **"+"** → **"New repository"**
3. Nombre: `open-when` (o el que quieras)
4. Descripción: "A collection of digital letters for my best friend"
5. Selecciona **"Public"**
6. Click **"Create repository"**

### Paso 2: Subir los archivos
```bash
# En tu terminal, en la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: Open When gift"
git branch -M main
git remote add origin https://github.com/tuusuario/open-when.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En "Branch", selecciona **"main"**
4. Click **"Save"**
5. ¡En 2-3 minutos estará en: `https://tuusuario.github.io/open-when`

---

## Opción 2: Netlify (Muy fácil con GUI)

### Paso 1: Subir a GitHub
Sigue los pasos 1-2 de arriba (Opción 1)

### Paso 2: Conectar Netlify
1. Ve a [netlify.com](https://www.netlify.com)
2. Haz clic en **"Sign up"** (puedes usar tu cuenta de GitHub)
3. Click **"New site from Git"**
4. Selecciona **"GitHub"** y autoriza
5. Busca tu repositorio `open-when`
6. Click **"Deploy site"**
7. ¡En 30 segundos tendrás tu URL! (ej: `https://open-when-2024.netlify.app`)

**Ventaja**: Puedes setear un dominio personalizado fácilmente

---

## Opción 3: Vercel (Muy moderno)

### Paso 1-2: Igual que Netlify
1. Repositorio en GitHub (igual que arriba)
2. Ve a [vercel.com](https://vercel.com)
3. Click **"Add New..."** → **"Project"**
4. Importa tu repositorio de GitHub
5. Click **"Deploy"**
6. ¡Listo! URL automática

---

## Opción 4: Surge.sh (Si no quieres GitHub)

```bash
# 1. Instala Surge
npm install -g surge

# 2. Desde tu carpeta del proyecto
surge

# 3. Sigue las instrucciones
# (te pedirá email y eligirá un dominio)
```

---

## 🌐 Dominio personalizado

Una vez publicado, puedes agregar un dominio personalizado:

- Compra un dominio en [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), etc.
- En tu plataforma (GitHub Pages, Netlify, Vercel):
  - Configuración → Custom Domain
  - Sigue las instrucciones para apuntar los DNS

---

## ✅ Checkist pre-publicación

Antes de publicar, verifica:

- [ ] El contenido de todas las cartas es correcto
- [ ] Las imágenes se ven bien
- [ ] Las canciones funcionan
- [ ] Probé en mobile y se ve responsive
- [ ] No hay errores en la consola del navegador
- [ ] Todas las frases están en el idioma que quiero

---

## 🔄 Actualizar después de publicar

Si necesitas cambiar algo:

1. Edita los archivos localmente
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "Update: cambio de descripción"
   git push
   ```
3. En Netlify/Vercel: Se actualiza automáticamente en 30 segundos
4. En GitHub Pages: Se actualiza automáticamente en 2-3 minutos

---

## 📞 Soporte rápido

**Mi sitio no se ve:**
- Limpia caché: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)
- Espera 5 minutos a que se propague

**Las imágenes no aparecen después de publicar:**
- Verifica que las rutas sean relativas: `./assets/images/foto.jpg`
- No uses rutas absolutas o del disco local

**Todo se ve pequeño en mobile:**
- Abre DevTools (F12) → Device Toolbar
- Recarga la página

---

**¡Tu regalo está listo para compartir! 💜**

Comparte el link con tu amigo y que disfrute cada carta. 🎁
