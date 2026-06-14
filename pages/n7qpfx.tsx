import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";
import styles from "@/styles/Freelance.module.css";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import { getAllProjects, Project } from "@/lib/projects";

interface FreelanceProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<FreelanceProps> = async () => {
  return {
    props: {
      projects: getAllProjects(),
    },
  };
};

export default function Freelance({ projects }: FreelanceProps) {
  return (
    <>
      <Head>
        <title>Pablo Villacañas — Desarrollo full-stack &amp; dashboards de datos</title>
        <meta
          name="description"
          content="Desarrollo full-stack a medida, dashboards de datos y consultoría técnica para empresas. Más de cinco años de experiencia con React, Next.js, Python y cloud."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bgGrid" />
      <ScrollProgress />

      <nav className="nav">
        <Link href="/" className="navMark">
          Pablo Villacañas
        </Link>
        <div className="navLinks">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <main>
        {/* ===================== HERO ===================== */}
        <section className={styles.hero}>
          <div className="container">
            <ScrollReveal variant="fade" as="p" className={styles.heroKicker}>
              Desarrollador full-stack freelance
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" as="h1">
              Producto digital,
              <br />
              de la idea
              <br />a <em>producción</em>.
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={140} as="p" className={styles.heroRole}>
              Ayudo a empresas a diseñar, construir y mantener aplicaciones web,
              paneles de datos y arquitecturas cloud — con el mismo nivel de cuidado
              que pondría en mi propio producto.
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={260} as="div" className={styles.heroRow}>
              <a className="btn btnSolid" href="#contacto">
                Cuéntame tu proyecto <span className="btnArrow">→</span>
              </a>
              <a className="btn" href="#proyectos">
                Ver casos de éxito
              </a>
            </ScrollReveal>
          </div>
          <div className={styles.heroScroll}>Desplázate</div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section id="servicios">
          <div className="container">
            <p className="sectionLabel">Servicios</p>
            <h2 style={{ marginBottom: "3rem" }}>
              Tres formas de trabajar juntos, según lo que necesite tu proyecto.
            </h2>

            <div className={styles.services}>
              <ScrollReveal variant="rise-lg" as="div" className={styles.service}>
                <span className={styles.serviceIndex}>01 — Producto</span>
                <h3>Desarrollo full-stack a medida</h3>
                <p>
                  Aplicaciones web completas: desde la interfaz hasta la API y la
                  infraestructura que la sostiene.
                </p>
                <ul>
                  <li>Frontend con React, Next.js y TypeScript</li>
                  <li>Backend con Node, Python o Django</li>
                  <li>Integración y despliegue en AWS / Azure</li>
                  <li>CI/CD con GitHub Actions</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal variant="rise-lg" delay={80} as="div" className={styles.service}>
                <span className={styles.serviceIndex}>02 — Datos</span>
                <h3>Dashboards &amp; visualización de datos</h3>
                <p>
                  Paneles a medida para convertir datos complejos — incluidos datos
                  geoespaciales — en decisiones claras.
                </p>
                <ul>
                  <li>Paneles de analítica en tiempo real</li>
                  <li>Visualización geoespacial (deck.gl)</li>
                  <li>Diseño centrado en quien lo usa a diario</li>
                  <li>Rendimiento con grandes volúmenes de datos</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal variant="rise-lg" delay={160} as="div" className={styles.service}>
                <span className={styles.serviceIndex}>03 — Estrategia</span>
                <h3>Consultoría técnica &amp; arquitectura</h3>
                <p>
                  Apoyo puntual o continuo en decisiones de arquitectura, estándares
                  de equipo y procesos de desarrollo.
                </p>
                <ul>
                  <li>Revisión de arquitectura y stack</li>
                  <li>Estándares de testing y buenas prácticas</li>
                  <li>Mentoring y liderazgo técnico de equipos</li>
                  <li>Auditoría de procesos CI/CD</li>
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===================== CASE STUDIES ===================== */}
        <section id="proyectos">
          <div className="container">
            <p className="sectionLabel">Casos de éxito</p>
            <h2 style={{ marginBottom: "1rem" }}>
              Algunos proyectos en los que el resultado ha marcado la diferencia.
            </h2>

            <div>
              {projects.map((project, i) => (
                <ScrollReveal
                  key={project.titulo}
                  variant="rise-lg"
                  delay={i * 60}
                  as="div"
                  className={`${styles.case} ${i === 0 ? styles.caseFirst : ""}`}
                >
                  <div className={styles.caseNumber}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <span className={styles.caseTag}>
                      {project.stack.slice(0, 2).join(" · ")}
                    </span>
                    <h3>{project.titulo}</h3>
                    <p>{project.descripcion}</p>
                    <div className={styles.caseResults}>
                      <div>
                        <div className={styles.caseResultValue}>{project.cliente}</div>
                        <div className={styles.caseResultLabel}>Cliente</div>
                      </div>
                      <div>
                        <div className={styles.caseResultValue}>{project.periodo}</div>
                        <div className={styles.caseResultLabel}>Periodo</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== PROCESS ===================== */}
        <section id="como-trabajo">
          <div className="container">
            <p className="sectionLabel">Cómo trabajo</p>
            <h2 style={{ marginBottom: "3rem" }}>Un proceso simple, pensado para minimizar sorpresas.</h2>

            <div className={styles.process}>
              <ScrollReveal variant="rise-lg" as="div" className={styles.processStep}>
                <span className={styles.processNumber}>01</span>
                <h3>Conversación inicial</h3>
                <p>Entendemos el problema, el contexto y qué significa &quot;éxito&quot; para tu proyecto.</p>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={60} as="div" className={styles.processStep}>
                <span className={styles.processNumber}>02</span>
                <h3>Propuesta &amp; alcance</h3>
                <p>Defino alcance, tecnología y plazos, con hitos claros desde el principio.</p>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={120} as="div" className={styles.processStep}>
                <span className={styles.processNumber}>03</span>
                <h3>Desarrollo iterativo</h3>
                <p>Entregas frecuentes, comunicación constante y espacio para ajustar sobre la marcha.</p>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={180} as="div" className={styles.processStep}>
                <span className={styles.processNumber}>04</span>
                <h3>Entrega &amp; soporte</h3>
                <p>Despliegue, documentación y acompañamiento posterior si lo necesitas.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section id="sobre-mi">
          <div className="container">
            <ScrollReveal variant="rise-lg" style={{ maxWidth: "56ch" }}>
              <p className="sectionLabel">Sobre mí</p>
              <h2>Background en psicología, oficio en ingeniería.</h2>
              <p style={{ marginTop: "1.5rem" }}>
                Antes de dedicarme al desarrollo de software me formé en psicología,
                y esa perspectiva sigue presente en cómo trabajo: escuchar primero,
                entender a quién va dirigido lo que construyo, y traducir eso en
                decisiones técnicas concretas. Más de cinco años desarrollando
                producto end-to-end — desde interfaces hasta infraestructura — para
                equipos internacionales.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section id="contacto" className={styles.contact}>
          <div className="container">
            <p className="sectionLabel">Trabajemos juntos</p>
            <ScrollReveal variant="rise-lg" as="h2" className={styles.contactTitle}>
              ¿Tienes un proyecto
              <br />
              <em>en mente</em>?
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={120} as="p" className="lede" style={{ marginTop: "1.5rem" }}>
              Cuéntame qué necesitas y te respondo en menos de 48 horas para ver si
              puedo ayudarte.
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={220} as="div" className={styles.contactRow}>
              <a className="btn btnSolid" href="mailto:pablo.villacanas@gmail.com">
                Escribir un correo <span className="btnArrow">→</span>
              </a>
              <a className="btn" href="https://www.linkedin.com/in/pablovillacanas" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn" href="https://github.com/pablovillacanas" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={320} as="div" className={styles.availability}>
              Disponible para nuevos proyectos
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
            <a href="https://github.com/pablovillacanas" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
