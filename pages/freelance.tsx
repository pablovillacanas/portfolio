import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { GetStaticProps } from "next";
import styles from "@/styles/Freelance.module.css";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import { getAllProjects, Project } from "@/lib/projects";
import DevNav from "@/components/DevNav";

const PAGE_SIZE = 3;

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
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <>
      <Head>
        <title>Pablo Villacañas — Datos e IA para empresas en crecimiento</title>
        <meta
          name="description"
          content="Ayudo a empresas medianas a poner orden en sus datos y a tomar mejores decisiones con herramientas de IA. Diagnóstico, Business Intelligence y automatización sin fricciones."
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
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <main>
        {/* ===================== HERO ===================== */}
        <section className={styles.hero}>
          <div className={styles.heroPhoto}>
            <Image src="/portrait.png" alt="Pablo Domínguez Villacañas" fill priority style={{ objectFit: "cover", objectPosition: "top center" }} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <ScrollReveal variant="fade" as="p" className={styles.heroKicker}>
              Consultor de datos e IA · Empresas medianas
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" as="h1">
              Tus datos,
              <br />
              convertidos en
              <br />
              <em>decisiones</em>.
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={140} as="p" className={styles.heroRole}>
              Ayudo a empresas a entender qué datos tienen, qué valor pueden
              extraer de ellos y cómo conectar ese valor a herramientas de IA
              que respondan preguntas reales de negocio — sin complejidad innecesaria.
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={260} as="div" className={styles.heroRow}>
              <a className="btn btnSolid" href="#contacto">
                Hablemos de tu negocio <span className="btnArrow">→</span>
              </a>
              <a className="btn" href="#como-trabajo">
                Cómo trabajo
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
              Un camino claro desde los datos que ya tienes hasta las decisiones que necesitas tomar.
            </h2>

            <div className={styles.services}>
              <ScrollReveal variant="rise-lg" as="div" className={styles.service}>
                <span className={styles.serviceIndex}>01 — Diagnóstico</span>
                <h3>Auditoría de datos de negocio</h3>
                <p>
                  Entendemos juntos qué datos existen, cómo se almacenan y si
                  reflejan realmente lo que pasa en la empresa.
                </p>
                <ul>
                  <li>Entrevista sobre flujos y fuentes de datos</li>
                  <li>Mapeo de qué se guarda y qué se pierde</li>
                  <li>Identificación de datos con valor oculto</li>
                  <li>Informe de puntos de mejora prioritarios</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal variant="rise-lg" delay={80} as="div" className={styles.service}>
                <span className={styles.serviceIndex}>02 — Visibilidad</span>
                <h3>Business Intelligence a medida</h3>
                <p>
                  Convertimos los datos relevantes en métricas claras y paneles
                  que el equipo realmente usa para tomar decisiones.
                </p>
                <ul>
                  <li>Definición de KPIs con el equipo operativo</li>
                  <li>Dashboards conectados a las fuentes existentes</li>
                  <li>Automatización de informes recurrentes</li>
                  <li>Formación para que el equipo sea autónomo</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal variant="rise-lg" delay={160} as="div" className={styles.service}>
                <span className={styles.serviceIndex}>03 — IA aplicada</span>
                <h3>Decisiones impulsadas por IA</h3>
                <p>
                  Sobre una base de datos ordenada, incorporamos herramientas de IA
                  que responden preguntas concretas del negocio.
                </p>
                <ul>
                  <li>Agentes que consultan datos internos en lenguaje natural</li>
                  <li>Alertas y recomendaciones automáticas</li>
                  <li>Integración con las herramientas que ya usáis</li>
                  <li>Sin fricción para el equipo existente</li>
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
              {visibleProjects.map((project, i) => (
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
                        <div className={styles.caseResultValue}>
                          {project.exposeCompany ? project.cliente : "Confidencial"}
                        </div>
                        <div className={styles.caseResultLabel}>Cliente</div>
                      </div>
                      <div>
                        <div className={styles.caseResultValue}>{project.periodo}</div>
                        <div className={styles.caseResultLabel}>Periodo</div>
                      </div>
                    </div>
                    {project.ruta && (
                      <div className={styles.caseCta}>
                        <Link href={project.ruta} className="btn">
                          Saber más <span className="btnArrow">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {hasMore && (
              <div className={styles.loadMore}>
                <button
                  className="btn"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  Ver más proyectos <span className="btnArrow">↓</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===================== PROCESS ===================== */}
        <section id="como-trabajo">
          <div className="container">
            <p className="sectionLabel">Cómo trabajo</p>
            <h2 style={{ marginBottom: "3rem" }}>Todo empieza con tres preguntas sobre tu negocio.</h2>

            <div className={styles.process}>
              <ScrollReveal variant="rise-lg" as="div" className={styles.processStep}>
                <span className={styles.processNumber}>01</span>
                <h3>¿Cómo tratáis y almacenáis vuestros datos?</h3>
                <p>Entiendo los sistemas actuales, las fuentes de información y cómo fluyen los datos dentro de la empresa.</p>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={60} as="div" className={styles.processStep}>
                <span className={styles.processNumber}>02</span>
                <h3>¿Son útiles para tomar decisiones?</h3>
                <p>Evalúo si los datos disponibles reflejan lo que importa y si permiten visualizar las métricas que el equipo realmente necesita.</p>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={120} as="div" className={styles.processStep}>
                <span className={styles.processNumber}>03</span>
                <h3>¿Qué podemos mejorar con el menor esfuerzo?</h3>
                <p>Identificamos los puntos donde una mejora pequeña genera el mayor impacto, evitando cambios que generen fricción en la organización.</p>
              </ScrollReveal>
              <ScrollReveal variant="rise-lg" delay={180} as="div" className={styles.processStep}>
                <span className={styles.processNumber}>04</span>
                <h3>Implementación y acompañamiento</h3>
                <p>Ejecuto los cambios de forma cercana y progresiva, asegurando que el equipo entiende y adopta lo que construimos juntos.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section id="sobre-mi">
          <div className="container">
            <ScrollReveal variant="rise-lg" style={{ maxWidth: "56ch" }}>
              <p className="sectionLabel">Sobre mí</p>
              <h2>Formado en psicología. Orientado al dato.</h2>
              <p style={{ marginTop: "1.5rem" }}>
                Mi forma de trabajar es personal y cercana. Antes de proponer nada,
                escucho: quiero entender el negocio, cómo trabaja el equipo y qué
                decisiones se toman cada día. Esa combinación de escucha activa y
                criterio técnico me permite detectar dónde los datos pueden mejorar
                la operativa sin imponer cambios que el equipo no vaya a adoptar.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Me especializo en empresas medianas donde no hacen falta arquitecturas
                extraordinariamente complejas, sino claridad: saber qué datos importan,
                tenerlos accesibles y usarlos para tomar mejores decisiones.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section id="contacto" className={styles.contact}>
          <div className="container">
            <p className="sectionLabel">Trabajemos juntos</p>
            <ScrollReveal variant="rise-lg" as="h2" className={styles.contactTitle}>
              ¿Tus datos podrían
              <br />
              trabajar más <em>para ti</em>?
            </ScrollReveal>
            <ScrollReveal variant="rise-lg" delay={120} as="p" className="lede" style={{ marginTop: "1.5rem" }}>
              Cuéntame cómo gestionáis la información en tu empresa y vemos juntos
              si hay margen de mejora. Sin compromiso, y sin jerga técnica.
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
