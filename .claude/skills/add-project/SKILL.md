---
name: add-project
description: Añade un nuevo proyecto al portfolio freelance haciendo preguntas guiadas, escribiendo en content/projects.md y creando la página de detalle si se solicita.
---

# /add-project — Añadir proyecto al portfolio

Recoge la información de un nuevo proyecto mediante preguntas, lo escribe en `content/projects.md` (fuente de verdad) y, opcionalmente, crea la página de detalle en `pages/proyectos/`.

## Workflow

Sigue estos pasos en orden. No saltes ninguno.

### 1. Presentación

Explica brevemente al usuario que vas a hacerle una serie de preguntas para añadir el proyecto. Confirma que tiene la información a mano.

### 2. Recopilación de datos — usa AskUserQuestion

Haz las siguientes preguntas **en una sola llamada a AskUserQuestion** (máximo 4 por llamada). Si necesitas más de 4, divide en rondas.

**Ronda 1 (identidad del proyecto):**
- `titulo`: ¿Cuál es el nombre corto del proyecto o cliente?
- `cliente`: ¿Cómo se llama el cliente? (si es confidencial, indica "Confidencial")
- `periodo`: ¿Cuál fue el periodo? Formato `MES AAAA - MES AAAA` o `MES AAAA - Presente`
- `estado`: ¿El proyecto está activo, pausado o finalizado?

**Ronda 2 (contenido):**
- `rol`: ¿Cuál fue tu rol en el proyecto?
- `stack`: ¿Qué tecnologías se usaron? (separadas por coma)
- `descripcion`: Describe brevemente el proyecto en 2-4 frases.
- `impacto`: ¿Qué resultados o impacto tuvo para el cliente? (métricas si las hay; si no las tienes aún, escribe "Pendiente")

**Ronda 3 (visibilidad, página de detalle y notas):**
- `mostrar_en_portfolio`: ¿Se puede mostrar en el portfolio público? (`si` / `no`)
- `exponer_cliente`: ¿Se puede mencionar el nombre del cliente en la web? (`si` / `no`)
- `crear_pagina_detalle`: ¿Quieres crear una página de detalle para este proyecto? (`si` / `no`)
- `notas`: ¿Alguna nota interna, aprendizaje o contexto que no vaya en la web? (puede dejarse en blanco)

Si `crear_pagina_detalle` es `si`, haz una cuarta ronda:

**Ronda 4 (detalle de la página — solo si crear_pagina_detalle = si):**
- `slug`: ¿Cuál será la URL del proyecto? (ej. `verificacion-propuestas`, sin barra inicial)
- `categoria`: ¿Cuál es la categoría o tipo del caso? (ej. `IA Aplicada`, `Business Intelligence`, `Desarrollo a medida`)
- `problema`: Describe el problema que tenía el cliente antes de tu intervención (2-4 frases, sin jerga técnica).
- `solucion`: ¿Qué construiste y por qué ese enfoque? (2-3 frases orientadas al resultado, no a la tecnología)

### 3. Confirmación del bloque projects.md

Muestra al usuario el bloque de proyecto formateado y pide confirmación antes de escribir. Si hay página de detalle, incluye también `ruta` en el bloque.

Formato del bloque:

```
---

## <titulo>

- titulo: <titulo>
- cliente: <cliente>
- periodo: <periodo>
- estado: <estado>
- rol: <rol>
- stack: <stack>
- descripcion: >
    <descripcion>
- impacto: >
    <impacto>
- mostrar_en_portfolio: <si|no>
- exponer_cliente: <si|no>
- ruta: /proyectos/<slug>          ← solo si crear_pagina_detalle = si
- notas: |
    <notas>
```

### 4. Escritura en content/projects.md

Solo después de que el usuario confirme, inserta el bloque nuevo **antes del bloque de comentario `<!-- Plantilla... -->`** (al final de los proyectos existentes).

Usa la herramienta Edit con `old_string` apuntando al comentario HTML al final del archivo:

```
<!--
Plantilla para nuevo proyecto:
```

Antepón el bloque nuevo antes de ese comentario.

### 5. Creación de la página de detalle (solo si crear_pagina_detalle = si)

Crea el archivo `pages/proyectos/<slug>.tsx` siguiendo exactamente la estructura del componente existente en `pages/proyectos/agente-ia-verificacion.tsx`.

Reglas de generación de la página:
- Usa `styles` importados desde `@/styles/ProyectoDetalle.module.css`.
- El `<title>` debe seguir el formato: `<Titulo del proyecto> — Pablo Villacañas`.
- En el hero: usa `titulo`, `periodo`, `rol`, `cliente` (o "Confidencial" si `exponer_cliente: no`) y `stack`.
- En la sección "El problema": usa el campo `problema`.
- En la sección "La solución": usa el campo `solucion`. Para los pasos (`steps`), genera 3 pasos plausibles basados en `descripcion` y `solucion`; márcalos con un comentario `// [PENDIENTE — revisar con /deep-dive]`.
- En la sección "El impacto": usa el campo `impacto`. Si hay métricas, extráelas en el array `metrics`; si no, pon 1-2 métricas con valor `[PENDIENTE]` y etiqueta descriptiva.
- En la sección CTA: personaliza la pregunta al problema descrito.
- La sección de interfaz/visual (`interfaceCard`) es opcional: inclúyela solo si `descripcion` o `solucion` mencionan una interfaz, panel o herramienta de revisión; en caso contrario, omítela completamente.

Pide confirmación al usuario antes de crear el archivo.

### 6. Cierre

Confirma qué archivos se han creado o modificado:
- `content/projects.md` — entrada añadida
- `pages/proyectos/<slug>.tsx` — página de detalle creada (si aplica)

Recuerda al usuario:
- La página `/freelance` ya mostrará el nuevo proyecto en el próximo build (se genera estáticamente desde `content/projects.md`).
- Si hay campos `[PENDIENTE]` en la página de detalle, recomienda ejecutar `/deep-dive` para completar la narrativa con preguntas orientadas a cliente C-level.
- Si `mostrar_en_portfolio: no`, el proyecto no aparecerá en la web hasta que se cambie ese campo.

## Reglas

- NUNCA escribas en ningún archivo sin confirmación explícita del usuario.
- Si el usuario no tiene algún dato, usa `(Pendiente de completar)` como valor en `projects.md` y `[PENDIENTE]` como marcador en el TSX.
- Respeta exactamente el formato YAML-like del archivo (sangría de 4 espacios en campos multilínea).
- No modifiques ningún proyecto existente ni ningún archivo TSX existente.
- No toques el bloque de comentario `<!-- Plantilla... -->` — es una plantilla interna.
- El archivo TSX generado debe compilar sin errores: no uses props ni componentes que no existan en el proyecto.
