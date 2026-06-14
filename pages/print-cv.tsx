import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import styles from '@/styles/PrintCv.module.css';
import { getAllProjects, Project } from '@/lib/projects';

interface Props {
  projects: Project[];
  lastUpdated: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = getAllProjects();
  const lastUpdated = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
  });
  return { props: { projects, lastUpdated } };
};

export default function PrintCV({ projects, lastUpdated }: Props) {
  return (
    <>
      <Head>
        <title>CV — Pablo Domínguez Villacañas</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className={styles.wrapper}>
        <button className={styles.printBtn} onClick={() => window.print()}>
          ↓ Imprimir / Guardar como PDF
        </button>

        <div className={styles.page}>
          {/* ===== SIDEBAR ===== */}
          <aside className={styles.sidebar}>
            <div className={styles.photoWrap}>
              <Image
                src="/portrait.png"
                alt="Pablo Domínguez Villacañas"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            <div className={styles.sidebarContent}>
              <div>
                <h1 className={styles.name}>Pablo Domínguez Villacañas</h1>
                <p className={styles.titleLine}>
                  Frontend Team Lead
                  <br />
                  Full-Stack Developer
                </p>
              </div>

              {/* Contact */}
              <div className={styles.sidebarSection}>
                <h2 className={styles.sidebarSectionTitle}>Contacto</h2>
                <ul className={styles.contactList}>
                  <li>
                    <em className={styles.contactIcon}>✉</em>
                    pablo.villacanas@gmail.com
                  </li>
                  <li>
                    <em className={styles.contactIcon}>in</em>
                    linkedin.com/in/pablovillacanas
                  </li>
                  <li>
                    <em className={styles.contactIcon}>gh</em>
                    github.com/pablovillacanas
                  </li>
                  <li>
                    <em className={styles.contactIcon}>⊙</em>
                    Terrassa, España
                  </li>
                  <li>
                    <em className={styles.contactIcon}>↔</em>
                    Remoto · Europa / CET
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div className={styles.sidebarSection}>
                <h2 className={styles.sidebarSectionTitle}>Tecnologías</h2>

                <p className={styles.skillGroup}>Frontend</p>
                <p className={styles.skillList}>
                  React · TypeScript · Next.js · Tailwind CSS · deck.gl
                </p>

                <p className={styles.skillGroup}>Backend &amp; datos</p>
                <p className={styles.skillList}>
                  Node.js · Python · Django · Ruby on Rails · Spring Boot
                </p>

                <p className={styles.skillGroup}>Cloud &amp; DevOps</p>
                <p className={styles.skillList}>
                  AWS · Azure · Docker · Kubernetes · CI/CD · GitHub Actions
                </p>

                <p className={styles.skillGroup}>Metodología</p>
                <p className={styles.skillList}>
                  Agile · Scrum · Jira · Microsoft ADO
                </p>
              </div>

              {/* Languages */}
              <div className={styles.sidebarSection}>
                <h2 className={styles.sidebarSectionTitle}>Idiomas</h2>
                <div className={styles.langItem}>
                  <span className={styles.langName}>Español</span>
                  <span className={styles.langLevel}>Nativo</span>
                </div>
                <div className={styles.langItem}>
                  <span className={styles.langName}>Inglés</span>
                  <span className={styles.langLevel}>Profesional</span>
                </div>
              </div>

              <p className={styles.updated}>Actualizado: {lastUpdated}</p>
            </div>
          </aside>

          {/* ===== MAIN ===== */}
          <main className={styles.main}>
            {/* Profile */}
            <section>
              <h2 className={styles.mainSectionTitle}>Perfil</h2>
              <p className={styles.profile}>
                Frontend Team Lead y Full-Stack Developer con más de 5 años de
                experiencia liderando equipos de desarrollo y construyendo
                producto end-to-end para compañías internacionales. Especializado
                en React, TypeScript y Next.js, con sólida experiencia en
                arquitecturas cloud (AWS, Azure) y desarrollo backend con
                Python/Django y Spring Boot. Formación en psicología que enriquece
                el enfoque en experiencia de usuario, comunicación y liderazgo.
                Idiomas de trabajo: español nativo, inglés profesional.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className={styles.mainSectionTitle}>Experiencia</h2>

              <div className={styles.expItem}>
                <div className={styles.expHeader}>
                  <div className={styles.expLeft}>
                    <h3 className={styles.expRole}>
                      Frontend Team Lead &amp; Full-Stack Developer
                    </h3>
                    <span className={styles.expCompany}>DEUS · Remoto</span>
                  </div>
                  <span className={styles.expPeriod}>Mar 2022 — Presente</span>
                </div>
                <ul className={styles.expBullets}>
                  <li>
                    Desarrollo de funcionalidades de visualización y análisis de
                    datos para una de las mayores compañías energéticas del mundo.
                  </li>
                  <li>
                    Decisiones sobre arquitectura, estándares de testing y elección
                    de tecnologías entre equipos.
                  </li>
                  <li>
                    Stack: React, Next.js, Tailwind CSS, Django. Desarrollo ágil en
                    entorno multicultural e internacional (Microsoft ADO).
                  </li>
                </ul>
              </div>

              <div className={styles.expItem}>
                <div className={styles.expHeader}>
                  <div className={styles.expLeft}>
                    <h3 className={styles.expRole}>
                      Full-Stack Developer (freelance)
                    </h3>
                    <span className={styles.expCompany}>Opseeker · Remoto</span>
                  </div>
                  <span className={styles.expPeriod}>Oct 2022 — Presente</span>
                </div>
                <ul className={styles.expBullets}>
                  <li>
                    Sistema de metaprogramación desde cero para flujos de chat
                    conversacional embebibles en webs de terceros.
                  </li>
                  <li>
                    Webapp Next.js para gestionar usuarios, workflows, proyectos y
                    activos de la empresa.
                  </li>
                  <li>
                    Integración AWS: Lambda, S3, CloudFront, API Gateway, Cognito.
                    Pipelines CI/CD con GitHub Actions.
                  </li>
                </ul>
              </div>

              <div className={styles.expItem}>
                <div className={styles.expHeader}>
                  <div className={styles.expLeft}>
                    <h3 className={styles.expRole}>Full-Stack Developer</h3>
                    <span className={styles.expCompany}>
                      Situm · Santiago de Compostela
                    </span>
                  </div>
                  <span className={styles.expPeriod}>Ago 2019 — Mar 2022</span>
                </div>
                <ul className={styles.expBullets}>
                  <li>
                    Panel de análisis de datos geoespaciales en tiempo real con
                    React y deck.gl.
                  </li>
                  <li>
                    Microservicios Spring Boot. Soporte técnico a clientes
                    internacionales con instalaciones on-premise.
                  </li>
                </ul>
              </div>

              <div className={styles.expItem}>
                <div className={styles.expHeader}>
                  <div className={styles.expLeft}>
                    <h3 className={styles.expRole}>Web Developer</h3>
                    <span className={styles.expCompany}>usheru · Dublín</span>
                  </div>
                  <span className={styles.expPeriod}>Mar 2019 — Jul 2019</span>
                </div>
                <ul className={styles.expBullets}>
                  <li>
                    Desarrollo de pasarela de pagos y nuevas funcionalidades.
                    JavaScript vanilla + Spring / PrimeFaces.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className={styles.mainSectionTitle}>Proyectos destacados</h2>
              {projects.map((p) => (
                <div key={p.titulo} className={styles.projectItem}>
                  <div className={styles.projectHeader}>
                    <span className={styles.projectTitle}>{p.titulo}</span>
                    <span className={styles.projectPeriod}>{p.periodo}</span>
                  </div>
                  <em className={styles.projectRole}>{p.rol}</em>
                  <p className={styles.projectDesc}>{p.descripcion}</p>
                  <p className={styles.projectStack}>{p.stack.join(' · ')}</p>
                </div>
              ))}
            </section>

            {/* Education & Certifications */}
            <section>
              <h2 className={styles.mainSectionTitle}>
                Formación &amp; Certificaciones
              </h2>

              <div className={styles.eduGrid}>
                <div className={styles.eduItem}>
                  <span className={styles.eduYear}>2017 — 2019</span>
                  <div>
                    <span className={styles.eduDegree}>
                      TSU en Desarrollo de Aplicaciones Web
                    </span>
                    <span className={styles.eduSchool}>
                      IES San Clemente, Santiago de Compostela
                    </span>
                    <span className={styles.eduNote}>Graduado con honores</span>
                  </div>
                </div>
                <div className={styles.eduItem}>
                  <span className={styles.eduYear}>2011 — 2015</span>
                  <div>
                    <span className={styles.eduDegree}>Grado en Psicología</span>
                    <span className={styles.eduSchool}>
                      Universidad de Santiago de Compostela
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.certsGrid}>
                <div className={styles.certItem}>
                  <span className={styles.certIssuer}>Oracle</span>
                  <span className={styles.certName}>
                    Oracle Certified Professional, Java SE 8
                  </span>
                </div>
                <div className={styles.certItem}>
                  <span className={styles.certIssuer}>Oracle</span>
                  <span className={styles.certName}>
                    Oracle Certified Expert, Java EE 6
                  </span>
                </div>
                <div className={styles.certItem}>
                  <span className={styles.certIssuer}>Microsoft</span>
                  <span className={styles.certName}>
                    Azure Data Engineering Associate
                  </span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
