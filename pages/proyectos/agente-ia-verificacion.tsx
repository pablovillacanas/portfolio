import Head from "next/head";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import DevNav from "@/components/DevNav";
import styles from "@/styles/ProyectoDetalle.module.css";

const stack = ["Python", "Claude API", "FastAPI", "React", "PostgreSQL"];

const steps = [
  {
    title: "Extracción de contexto",
    desc: "El agente procesa cada diapositiva de la presentación y extrae su contenido: texto, estructura y contexto narrativo. No busca palabras clave — entiende de qué trata cada slide y qué parte de la propuesta representa.",
  },
  {
    title: "Cruce con la base de conocimiento",
    desc: "Cada departamento tiene su propio conjunto de reglas parametrizadas: requisitos obligatorios, elementos deseables y puntos de atención. El agente cruza el contenido extraído con esas reglas y emite un veredicto por cada una, justificando su decisión con el extracto relevante.",
  },
  {
    title: "Revisión guiada por el evaluador",
    desc: "El evaluador accede a una interfaz web con un flujo estructurado. Por cada regla ve el resultado del agente (cumple / no cumple), la diapositiva o fragmento que lo fundamenta, y puede confirmar o corregir el criterio. No empieza desde cero — valida el trabajo ya hecho.",
  },
];

const interfaceRows = [
  { status: "pass", rule: "Propuesta incluye desglose de fases y entregables", slide: "Slide 7" },
  { status: "pass", rule: "Logotipo corporativo en posición y tamaño reglamentarios", slide: "Slide 1, 14" },
  { status: "fail", rule: "Cláusula de exclusión de responsabilidad presente", slide: "No encontrado" },
  { status: "pending", rule: "Estimación de recursos revisada por Finanzas", slide: "Slide 11" },
];

export default function AgenteIAVerificacion() {
  return (
    <>
      <Head>
        <title>Agente IA · Verificación de Presentaciones — Pablo Villacañas</title>
        <meta
          name="description"
          content="Cómo automatizamos la verificación de propuestas de una empresa con más de doce departamentos, reduciendo el tiempo de revisión de días a horas."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <DevNav />
      <div className="bgGrid" />
      <ScrollProgress />

      <nav className="nav">
        <Link href="/" className="navMark">
          Pablo Villacañas
        </Link>
        <div className="navLinks">
          <Link href="/freelance#proyectos">Proyectos</Link>
          <Link href="/freelance#contacto">Contacto</Link>
        </div>
      </nav>

      <main>
        {/* ---- HERO ---- */}
        <section className={styles.hero}>
          <div className="container">
            <Link href="/freelance#proyectos" className={styles.backNav}>
              Volver a proyectos
            </Link>

            <ScrollReveal variant="fade" as="p" className="sectionLabel">
              Caso de uso · IA Aplicada
            </ScrollReveal>

            <ScrollReveal variant="rise-lg" as="h1">
              De días a horas:<br />
              revisión de propuestas<br />
              con <em>IA</em>.
            </ScrollReveal>

            <ScrollReveal variant="rise-lg" delay={120} as="p" className="lede" style={{ marginTop: "1.5rem" }}>
              Automatizamos la verificación de presentaciones para una empresa con más de doce
              departamentos, cada uno con sus propias reglas. Lo que tardaba entre dos y tres días
              pasó a completarse en pocas horas.
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={200} as="div" className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Periodo</span>
                <span className={styles.heroMetaValue}>Jul 2025 — Sep 2025</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Rol</span>
                <span className={styles.heroMetaValue}>AI Engineer</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Cliente</span>
                <span className={styles.heroMetaValue}>Confidencial</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={260} as="div" className={styles.heroBadges}>
              {stack.map((t) => (
                <span key={t} className={styles.badge}>{t}</span>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* ---- PROBLEMA ---- */}
        <section>
          <div className="container">
            <ScrollReveal variant="rise-lg" as="p" className="sectionLabel">
              El problema
            </ScrollReveal>

            <ScrollReveal variant="rise-lg" delay={60} as="h2">
              Personas cualificadas, atrapadas en checklists.
            </ScrollReveal>

            <ScrollReveal variant="rise-lg" delay={120}>
              <blockquote className={styles.pullQuote}>
                "Detectamos que el equipo dedicaba la mayor parte de su tiempo a revisar
                manualmente una lista de verificación, no a crear valor."
              </blockquote>
            </ScrollReveal>

            <ScrollReveal variant="rise-lg" delay={180} as="p">
              La empresa tenía más de doce departamentos involucrados en la elaboración de
              propuestas a clientes. Cada uno definía sus propios requisitos: algunos de
              naturaleza legal y de compliance, otros de calidad de propuesta o identidad
              de marca. Antes de presentar cualquier propuesta, alguien tenía que verificar
              que cumplía con todos ellos.
            </ScrollReveal>

            <ScrollReveal variant="rise-lg" delay={220} as="p" style={{ marginTop: "1rem" }}>
              Con dos o tres presentaciones a la semana, el proceso consumía entre dos y
              tres días de trabajo de uno o dos profesionales altamente cualificados.
              Una tarea recurrente, estructurada y repetible — exactamente el tipo de trabajo
              que la IA puede asumir.
            </ScrollReveal>
          </div>
        </section>

        {/* ---- SOLUCIÓN ---- */}
        <section>
          <div className="container">
            <ScrollReveal variant="rise-lg" as="p" className="sectionLabel">
              La solución
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={60} as="h2">
              Un agente que hace el trabajo pesado.
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={100} as="p" style={{ marginTop: "1rem" }}>
              La base de conocimiento ya existía — la checklist de cada departamento.
              Lo que construimos fue un proceso que la usa de forma automática:
              extrae el contenido de la presentación, lo cruza con las reglas, y entrega
              al evaluador un informe estructurado listo para validar, no para construir.
            </ScrollReveal>

            <div className={styles.steps}>
              {steps.map((step, i) => (
                <ScrollReveal key={i} variant="rise-lg" delay={i * 80} as="div" className={styles.step}>
                  <div className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- INTERFAZ ---- */}
        <section>
          <div className="container">
            <ScrollReveal variant="rise-lg" as="p" className="sectionLabel">
              La interfaz
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={60} as="h2" style={{ maxWidth: "22ch" }}>
              El evaluador valida, no construye.
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={120} as="p" style={{ marginTop: "1rem" }}>
              Una presentación de cuarenta diapositivas se convierte en una lista curada
              de verificaciones. El evaluador ve, por cada regla, qué decidió la IA y
              por qué — y puede aceptar o corregir ese criterio en segundos.
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={180} as="div" className={styles.interfaceCard}>
              {interfaceRows.map((row, i) => (
                <div key={i} className={styles.interfaceRow}>
                  <div className={`${styles.interfaceStatus} ${
                    row.status === "pass" ? styles.statusPass :
                    row.status === "fail" ? styles.statusFail :
                    styles.statusPending
                  }`}>
                    {row.status === "pass" ? "✓" : row.status === "fail" ? "✗" : "?"}
                  </div>
                  <p className={styles.interfaceRule}>{row.rule}</p>
                  <span className={styles.interfaceSlide}>{row.slide}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* ---- IMPACTO ---- */}
        <section>
          <div className="container">
            <ScrollReveal variant="rise-lg" as="p" className="sectionLabel">
              El impacto
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={60} as="h2">
              Menos tiempo perdido. Más tiempo creando.
            </ScrollReveal>

            <div className={styles.metrics}>
              <ScrollReveal variant="rise-lg" delay={80} as="div" className={styles.metric}>
                <div className={styles.metricValue}>2–3 días</div>
                <div className={styles.metricLabel}>→ pocas horas por revisión</div>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={140} as="div" className={styles.metric}>
                <div className={styles.metricValue}>+12</div>
                <div className={styles.metricLabel}>departamentos cubiertos automáticamente</div>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={200} as="div" className={styles.metric}>
                <div className={styles.metricValue}>0</div>
                <div className={styles.metricLabel}>checklists manuales desde el despliegue</div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="rise-lg" delay={260} as="p" style={{ marginTop: "2.5rem" }}>
              El equipo de revisión dejó de dedicar su tiempo a tareas estructuradas y repetibles.
              Esa capacidad se liberó hacia trabajo de mayor valor: análisis de propuestas,
              relación con el cliente y mejora continua de las reglas que ahora gestiona la IA.
            </ScrollReveal>
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section>
          <div className="container">
            <ScrollReveal variant="rise-lg" as="p" className="sectionLabel">
              ¿Te resulta familiar?
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={60} as="h2" style={{ maxWidth: "26ch" }}>
              Si hay un proceso repetible en tu empresa, probablemente se puede automatizar.
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={160} as="div" className={styles.cta}>
              <a className="btn btnSolid" href="mailto:pablo.villacanas@gmail.com">
                Hablemos de tu caso <span className="btnArrow">→</span>
              </a>
              <Link href="/freelance#proyectos" className="btn">
                Ver más proyectos
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span>© 2026 Pablo Villacañas</span>
          <div className="footerLinks">
            <a href="mailto:pablo.villacanas@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/pablovillacanas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
