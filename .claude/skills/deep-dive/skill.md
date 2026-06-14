---
name: deep-dive
description: Hace preguntas orientadas a un cliente C-level sobre un proyecto del portfolio y genera o actualiza su página de detalle con la información obtenida.
---

# /deep-dive — Narrative de proyecto para clientes C-level

Extrae la historia de impacto de negocio de un proyecto concreto haciendo preguntas al estilo de las que haría un CEO, CFO o COO de una empresa mediana. Con las respuestas, genera o actualiza la página de detalle del proyecto.

## Contexto de uso

El cliente objetivo es un **C-level de empresa pequeña o mediana** (CEO, COO, CFO, CTO). Sus prioridades:
- Retorno sobre la inversión y ahorro de costes
- Tiempo hasta el valor real (time-to-value)
- Riesgo: ¿qué pasa si falla?, ¿cuánto dependo del proveedor?
- Adopción por el equipo (cambio organizacional)
- Escalabilidad y mantenimiento a largo plazo

No le interesan los detalles técnicos per se — le interesan los **resultados de negocio** que los detalles técnicos hicieron posibles.

## Workflow

### 1. Identificar el proyecto

Pregunta al usuario qué proyecto quiere trabajar si no lo ha indicado ya. Lee `content/projects.md` para tener el contexto de base.

### 2. Preguntas de impacto — Ronda 1 (negocio)

Usa AskUserQuestion con hasta 4 preguntas enfocadas en:

- **Volumen / frecuencia**: ¿Cuántas veces al mes/semana se ejecutaba el proceso antes? ¿Cuántas personas lo hacían?
- **Coste de oportunidad**: ¿Qué dejaban de hacer esas personas mientras hacían eso? ¿Cuál era el coste real de ese tiempo?
- **Detonante**: ¿Qué llevó a la empresa a buscar una solución? ¿Hubo un incidente o fue acumulación?
- **Alternativas consideradas**: ¿Se consideró contratar más gente, comprar software existente, subcontratar? ¿Por qué se eligió desarrollar a medida?

### 3. Preguntas de impacto — Ronda 2 (resultados y adopción)

- **Métricas antes/después**: ¿Hay números concretos? (tiempo, coste, errores, velocidad)
- **Adopción**: ¿Lo adoptó todo el equipo desde el principio o hubo resistencia? ¿Cómo se resolvió?
- **Riesgos gestionados**: ¿Qué salió mal o casi mal durante el proyecto? ¿Cómo se resolvió?
- **¿Qué harían diferente?**: Si el cliente pudiera volver atrás, ¿cambiaría algo del enfoque?

### 4. Preguntas de valor diferencial (opcional, si queda tiempo/contexto)

- ¿Qué parte del proyecto sorprendió más (positiva o negativamente) al equipo del cliente?
- ¿Han repetido el patrón en otros procesos internos desde entonces?
- ¿Qué diría el cliente a otra empresa que está evaluando hacer algo similar?

### 5. Generar o actualizar la narrativa

Con las respuestas, produce una propuesta de contenido para la página de detalle del proyecto siguiendo esta estructura:

```
Hero: título con el resultado, no con la tecnología
El problema: situación de partida, sin jerga técnica
La solución: qué se construyó y por qué ese enfoque
Cómo funciona: 3 pasos simples que un no-técnico entiende
El impacto: métricas antes/después + impacto cualitativo
CTA: pregunta que conecta con el problema del lector
```

Si ya existe una página en `pages/proyectos/`, propón las ediciones concretas. Si no existe, genera el contenido listo para que el usuario lo revise antes de escribirlo.

### 6. Confirmación antes de escribir

**Nunca escribas en archivos de página sin confirmación explícita del usuario.** Muestra el contenido propuesto, espera aprobación y solo entonces aplica los cambios.

## Reglas de tono

- Sin jerga técnica en los títulos ni en los párrafos de impacto
- Los números concretos siempre van antes de la explicación ("2 días → 4 horas, porque...")
- Evita adjetivos vacíos: "innovador", "disruptivo", "de vanguardia"
- La voz es directa, cercana y orientada al problema del lector
- Los títulos de sección responden a la pregunta implícita del C-level: "¿Y eso qué tiene que ver conmigo?"

## Qué NO hacer

- No inventes métricas. Si el usuario no tiene el dato, usa lenguaje cualitativo ("redujo significativamente") o deja un marcador `[PENDIENTE]`.
- No incluyas detalles técnicos de implementación en las secciones de impacto.
- No hagas preguntas sobre tecnología — el cliente C-level no las responderá con utilidad para la narrativa.
