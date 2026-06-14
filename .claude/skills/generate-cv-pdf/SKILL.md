---
name: generate-cv-pdf
description: Genera public/CV-PabloVillacanas.pdf a partir de la página /print-cv usando puppeteer. Instala la dependencia si hace falta, arranca el servidor si no está activo y exporta el PDF listo para RRHH.
---

# /generate-cv-pdf — Generar CV en PDF

Genera `public/CV-PabloVillacanas.pdf` renderizando `/print-cv` con Chromium headless (puppeteer).

## Workflow

Sigue estos pasos en orden. No saltes ninguno sin comprobación previa.

### 1. Verificar puppeteer

Comprueba si puppeteer está instalado:

```bash
node -e "require('puppeteer')" 2>/dev/null && echo OK || echo MISSING
```

Si devuelve `MISSING`, instálalo como devDependency:

```bash
yarn add -D puppeteer
```

Puppeteer descarga Chromium automáticamente (~170 MB). Avisa al usuario antes de hacerlo.

### 2. Verificar el servidor

Comprueba si el servidor está escuchando en el puerto 3000:

```bash
lsof -i :3000 | grep LISTEN | head -1
```

- **Si está activo**: continúa al paso 3.
- **Si NO está activo**: arranca el servidor de producción en background:

  ```bash
  # Opción A — dev server (más rápido para pruebas)
  yarn dev &
  
  # Opción B — producción (PDF idéntico al que verá RRHH)
  yarn build && yarn start &
  ```

  Espera a que responda (máx. 60 s) antes de continuar.

### 3. Generar el PDF

Ejecuta el script:

```bash
node scripts/generate-pdf.mjs
```

Si el servidor no está en el puerto 3000, pasa `--url`:

```bash
node scripts/generate-pdf.mjs --url http://localhost:3001
```

### 4. Confirmar resultado

- Comprueba que el archivo existe: `ls -lh public/CV-PabloVillacanas.pdf`
- Informa al usuario:
  - Ruta del PDF generado.
  - Tamaño del archivo.
  - Si el servidor fue arrancado por el skill, recuérdale que puede pararlo con `kill %1` o `Ctrl-C`.

### 5. Actualizar fecha si hace falta

La fecha "Actualizado:" en la página `/print-cv` se genera con `getStaticProps` en el momento del build. Si el servidor lleva muchos días arrancado con `yarn dev`, puede mostrar una fecha antigua. En ese caso, reinicia el servidor o haz un `yarn build && yarn start` para refrescar la fecha.

## Notas

- El PDF se guarda en `public/CV-PabloVillacanas.pdf`, que es la misma ruta que enlaza el botón "Descargar CV (PDF)" en la página `/cv`. Así el PDF que se descarga siempre está sincronizado con el layout de `/print-cv`.
- Si `puppeteer` falla por permisos de sandbox en Linux, el script ya incluye `--no-sandbox`. En macOS debería funcionar sin problemas.
- Para abrir el PDF recién generado en macOS: `open public/CV-PabloVillacanas.pdf`
