---
name: add-project
description: Añade un nuevo proyecto al portfolio freelance haciendo preguntas guiadas y escribiendo en content/projects.md
---

# /add-project — Añadir proyecto al portfolio

Recoge la información de un nuevo proyecto mediante preguntas y lo escribe en `content/projects.md`, la fuente de verdad del portfolio freelance.

## Workflow

Sigue estos pasos en orden. No saltes ninguno.

### 1. Presentación

Explica brevemente al usuario que vas a hacerle una serie de preguntas para añadir el proyecto. Confirma que tiene la información a mano.

### 2. Recopilación de datos — usa AskUserQuestion

Haz las siguientes preguntas **en una sola llamada a AskUserQuestion** (máximo 4 por llamada). Si necesitas más de 4, divide en dos rondas.

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

**Ronda 3 (visibilidad y notas):**
- `mostrar_en_portfolio`: ¿Se puede mostrar en el portfolio público? (`si` / `no`)
- `notas`: ¿Alguna nota interna, aprendizaje o contexto que no vaya en la web? (puede dejarse en blanco)

### 3. Confirmación

Muestra al usuario el bloque de proyecto formateado como se ve en `content/projects.md` y pide confirmación antes de escribir.

Formato del bloque a mostrar:

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
- notas: |
    <notas>
```

### 4. Escritura en content/projects.md

Solo después de que el usuario confirme, inserta el bloque nuevo en `content/projects.md` **antes del bloque de comentario `<!-- Plantilla... -->`** (al final de los proyectos existentes, justo antes de esa línea).

Usa la herramienta Edit con `old_string` que apunte al bloque de comentario HTML al final del archivo:

```
<!--
Plantilla para nuevo proyecto:
```

Antepón el bloque nuevo antes de ese comentario.

### 5. Cierre

Confirma al usuario que el proyecto ha sido añadido y recuérdale:
- Si `mostrar_en_portfolio: si`, el proyecto ya está listo para que se redacte su entrada en la web.
- Si hay campos en "Pendiente", señala cuáles quedan por completar.

## Reglas

- NUNCA escribas en el archivo sin confirmación explícita del usuario.
- Si el usuario no tiene algún dato, usa `(Pendiente de completar)` como valor.
- Respeta exactamente el formato YAML-like del archivo (sangría de 4 espacios en campos multilínea).
- No modifiques ningún proyecto existente.
- No toques el bloque de comentario `<!-- Plantilla... -->` — es una plantilla interna, no lo elimines.
