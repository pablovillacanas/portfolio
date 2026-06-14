import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Cv.module.css';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollProgress from '@/components/ScrollProgress';
import DevNav from '@/components/DevNav';

export default function CV() {
	return (
		<>
			<Head>
				<title>
					Pablo Domínguez Villacañas — Frontend Lead &amp; Full-Stack Developer
				</title>
				<meta
					name='description'
					content='Currículum de Pablo Domínguez Villacañas: experiencia en DEUS, Situm, Opseeker y usheru, especializado en React/TypeScript, Next.js y arquitecturas cloud.'
				/>
				<meta name='robots' content='noindex, nofollow' />
			</Head>

			<DevNav />
			<div className='bgGrid' />
			<ScrollProgress />

			<nav className='nav'>
				<Link href='/' className='navMark'>
					Pablo Villacañas
				</Link>
				<div className='navLinks'>
					<a href='#experiencia'>Experiencia</a>
					<a href='#skills'>Skills</a>
					<a href='#contacto'>Contacto</a>
				</div>
			</nav>

			<main>
				{/* ===================== HERO ===================== */}
				<section className={styles.hero}>
					<div className={styles.heroPhoto}>
						<Image
							src='/portrait.png'
							alt='Pablo Domínguez Villacañas'
							fill
							priority
							style={{ objectFit: 'cover', objectPosition: 'top center' }}
						/>
					</div>
					<div className={`container ${styles.heroContent}`}>
						<ScrollReveal variant='fade' as='p' className={styles.heroKicker}>
							Frontend Team Lead · Full-Stack Developer
						</ScrollReveal>
						<ScrollReveal variant='rise-lg' as='h1'>
							Construyo interfaces
							<br />
							<em>claras</em>, sistemas
							<br />
							que <em>escalan</em>.
						</ScrollReveal>
						<ScrollReveal
							variant='rise-lg'
							delay={140}
							as='p'
							className={styles.heroRole}
						>
							Más de cinco años liderando equipos de frontend y desarrollando
							producto end-to-end para compañías internacionales — desde paneles
							de datos en tiempo real hasta arquitecturas cloud completas.
						</ScrollReveal>
						<ScrollReveal
							variant='fade'
							delay={260}
							as='div'
							className={styles.heroMeta}
						>
							<div>
								<strong>Terrassa, España</strong>
								Remoto · Europa / CET
							</div>
							<div>
								<strong>React · TypeScript · Next.js</strong>
								Node · Python · Django
							</div>
							<div>
								<strong>AWS · Azure</strong>
								Docker · Kubernetes · CI/CD
							</div>
						</ScrollReveal>
						<ScrollReveal variant='fade' delay={360} as='div' className={styles.heroCta}>
							<a
								href='/CV-PabloVillacanas.pdf'
								download
								className='btnSolid'
							>
								Descargar CV
							</a>
						</ScrollReveal>
					</div>
					<div className={styles.heroScroll}>Desplázate</div>
				</section>

				{/* ===================== ABOUT ===================== */}
				<section id='sobre-mi'>
					<div className='container'>
						<div className={styles.aboutGrid}>
							<ScrollReveal variant='rise-lg'>
								<p className='sectionLabel'>Sobre mí</p>
								<h2>
									De la psicología al código — y un enfoque que combina ambas
									cosas.
								</h2>
								<p style={{ marginTop: '1.5rem' }}>
									Empecé formándome en psicología antes de pasarme al desarrollo
									de software, y esa mezcla sigue marcando cómo trabajo:
									entender primero a quién va a usar lo que construyo —
									compañeros de equipo, clientes, usuarios finales — y diseñar
									la solución técnica alrededor de eso.
								</p>
								<p style={{ marginTop: '1rem' }}>
									Hoy lidero el equipo de frontend en DEUS, donde tomo
									decisiones sobre arquitectura, estándares de testing y
									tecnología para proyectos de analítica de datos para una de
									las mayores compañías energéticas del mundo, en un entorno
									internacional y multicultural.
								</p>
							</ScrollReveal>
							<ScrollReveal
								variant='rise-lg'
								delay={160}
								className={styles.aboutStats}
							>
								<div className={styles.stat}>
									<div className={styles.statValue}>5+</div>
									<div className={styles.statLabel}>Años de experiencia</div>
								</div>
								<div className={styles.stat}>
									<div className={styles.statValue}>4</div>
									<div className={styles.statLabel}>Empresas / equipos</div>
								</div>
								<div className={styles.stat}>
									<div className={styles.statValue}>3</div>
									<div className={styles.statLabel}>
										Certificaciones técnicas
									</div>
								</div>
								<div className={styles.stat}>
									<div className={styles.statValue}>EN / ES</div>
									<div className={styles.statLabel}>Idiomas de trabajo</div>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</section>

				{/* ===================== EXPERIENCE ===================== */}
				<section id='experiencia'>
					<div className='container'>
						<p className='sectionLabel'>Experiencia</p>
						<h2 style={{ marginBottom: '3rem' }}>
							Un recorrido por equipos donde construir y decidir han ido de la
							mano.
						</h2>

						<div className={styles.timeline}>
							<ScrollReveal
								variant='rise-lg'
								as='div'
								className={styles.timelineItem}
							>
								<div className={styles.timelinePeriod}>
									Mar. 2022 — Presente
								</div>
								<div>
									<div className={styles.timelineRole}>
										<h3>Frontend Team Lead &amp; Full-Stack Developer</h3>
										<span className={styles.timelineCompany}>
											DEUS · Remoto
										</span>
									</div>
									<ul>
										<li>
											Desarrollo de nuevas funcionalidades de visualización y
											análisis de datos para una de las mayores compañías
											energéticas del mundo.
										</li>
										<li>
											Decisiones sobre tecnologías a aplicar y estándares de
											librerías/testing entre equipos.
										</li>
										<li>
											Uso intensivo de React, Next.js, Tailwind, HTML, CSS y
											JavaScript.
										</li>
										<li>Creación y mantenimiento de APIs con Django.</li>
										<li>
											Desarrollo ágil con Microsoft ADO en un entorno dinámico,
											multicultural e internacional.
										</li>
									</ul>
								</div>
							</ScrollReveal>

							<ScrollReveal
								variant='rise-lg'
								delay={80}
								as='div'
								className={styles.timelineItem}
							>
								<div className={styles.timelinePeriod}>
									Oct. 2022 — Presente
								</div>
								<div>
									<div className={styles.timelineRole}>
										<h3>Full-Stack Developer (freelance)</h3>
										<span className={styles.timelineCompany}>
											Opseeker · Remoto
										</span>
									</div>
									<ul>
										<li>
											Construcción desde cero de un sistema de metaprogramación
											para crear flujos de chat conversacionales adaptables.
										</li>
										<li>
											Desarrollo de un chat embebible y programable para mejorar
											la experiencia de usuario y guiar la toma de decisiones en
											producto.
										</li>
										<li>
											Creación de una webapp con Next.js para gestionar
											usuarios, workflows, proyectos y activos de la empresa.
										</li>
										<li>
											Integración con servicios de AWS: Lambda, S3, CloudFront,
											API Gateway y Cognito.
										</li>
										<li>
											Pipelines de CI/CD con GitHub Actions y desarrollo ágil
											con Jira.
										</li>
									</ul>
								</div>
							</ScrollReveal>

							<ScrollReveal
								variant='rise-lg'
								delay={160}
								as='div'
								className={styles.timelineItem}
							>
								<div className={styles.timelinePeriod}>
									Ago. 2019 — Mar. 2022
								</div>
								<div>
									<div className={styles.timelineRole}>
										<h3>Full-Stack Developer</h3>
										<span className={styles.timelineCompany}>
											Situm · Santiago de Compostela
										</span>
									</div>
									<ul>
										<li>
											Desarrollo de análisis y representación de datos
											geoespaciales con React y deck.gl.
										</li>
										<li>
											Mantenimiento y desarrollo de microservicios con Spring
											Boot.
										</li>
										<li>
											Soporte técnico a clientes internacionales con
											instalaciones on-premise.
										</li>
										<li>
											Metodología ágil con toma de decisiones conjunta en
											equipo.
										</li>
									</ul>
								</div>
							</ScrollReveal>

							<ScrollReveal
								variant='rise-lg'
								delay={240}
								as='div'
								className={styles.timelineItem}
							>
								<div className={styles.timelinePeriod}>
									Sep. 2021 — Mar. 2022
								</div>
								<div>
									<div className={styles.timelineRole}>
										<h3>Profesor particular de programación</h3>
										<span className={styles.timelineCompany}>
											Santiago de Compostela
										</span>
									</div>
									<ul>
										<li>
											Enseñanza de fundamentos de programación a estudiantes de
											distintos niveles.
										</li>
									</ul>
								</div>
							</ScrollReveal>

							<ScrollReveal
								variant='rise-lg'
								delay={320}
								as='div'
								className={styles.timelineItem}
							>
								<div className={styles.timelinePeriod}>
									Mar. 2019 — Jul. 2019
								</div>
								<div>
									<div className={styles.timelineRole}>
										<h3>Web Developer</h3>
										<span className={styles.timelineCompany}>
											usheru · Dublín
										</span>
									</div>
									<ul>
										<li>Creación de una pasarela de pagos.</li>
										<li>
											Desarrollo de nuevas funcionalidades con JavaScript
											vanilla y Spring + PrimeFaces.
										</li>
									</ul>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</section>

				{/* ===================== SKILLS ===================== */}
				<section id='skills'>
					<div className='container'>
						<p className='sectionLabel'>Skillset</p>
						<h2 style={{ marginBottom: '3rem' }}>
							Herramientas y tecnologías con las que trabajo a diario.
						</h2>

						<div className={styles.skillsCols}>
							<ScrollReveal variant='rise-lg'>
								<h3>Frontend</h3>
								<div className={styles.skillTags}>
									<span className={styles.skillTag}>React</span>
									<span className={styles.skillTag}>TypeScript</span>
									<span className={styles.skillTag}>Next.js</span>
									<span className={styles.skillTag}>Tailwind CSS</span>
									<span className={styles.skillTag}>deck.gl</span>
								</div>
							</ScrollReveal>
							<ScrollReveal variant='rise-lg' delay={60}>
								<h3>Backend &amp; datos</h3>
								<div className={styles.skillTags}>
									<span className={styles.skillTag}>Node.js</span>
									<span className={styles.skillTag}>Python</span>
									<span className={styles.skillTag}>Django</span>
									<span className={styles.skillTag}>Ruby on Rails</span>
									<span className={styles.skillTag}>Spring Boot</span>
									<span className={styles.skillTag}>
										Gestión de bases de datos
									</span>
								</div>
							</ScrollReveal>
							<ScrollReveal variant='rise-lg' delay={120}>
								<h3>Cloud &amp; DevOps</h3>
								<div className={styles.skillTags}>
									<span className={styles.skillTag}>AWS</span>
									<span className={styles.skillTag}>Azure</span>
									<span className={styles.skillTag}>Docker</span>
									<span className={styles.skillTag}>Kubernetes</span>
									<span className={styles.skillTag}>
										CI/CD · GitHub Actions
									</span>
									<span className={styles.skillTag}>Git</span>
								</div>
							</ScrollReveal>
							<ScrollReveal variant='rise-lg' delay={180}>
								<h3>Metodología</h3>
								<div className={styles.skillTags}>
									<span className={styles.skillTag}>Agile / Scrum</span>
									<span className={styles.skillTag}>Jira</span>
									<span className={styles.skillTag}>Microsoft ADO</span>
									<span className={styles.skillTag}>Gestión de proyectos</span>
								</div>
							</ScrollReveal>
							<ScrollReveal variant='rise-lg' delay={240}>
								<h3>Idiomas</h3>
								<div className={styles.skillTags}>
									<span className={styles.skillTag}>Español — nativo</span>
									<span className={styles.skillTag}>Inglés — profesional</span>
								</div>
							</ScrollReveal>
							<ScrollReveal variant='rise-lg' delay={300}>
								<h3>Soft skills</h3>
								<div className={styles.skillTags}>
									<span className={styles.skillTag}>Liderazgo de equipo</span>
									<span className={styles.skillTag}>Trabajo en equipo</span>
									<span className={styles.skillTag}>Gestión del tiempo</span>
									<span className={styles.skillTag}>Responsabilidad</span>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</section>

				{/* ===================== CERTIFICATIONS & EDUCATION ===================== */}
				<section id='formacion'>
					<div className='container'>
						<p className='sectionLabel'>Certificaciones &amp; formación</p>
						<h2 style={{ marginBottom: '3rem' }}>
							Formación técnica y reconocimientos.
						</h2>

						<div className={styles.cards} style={{ marginBottom: '2.5rem' }}>
							<ScrollReveal variant='rise-lg' as='div' className={styles.card}>
								<div className={styles.cardMeta}>Certificación · Oracle</div>
								<h3>Oracle Certified Professional, Java SE 8</h3>
								<p>
									Programación avanzada en Java sobre la plataforma estándar.
								</p>
							</ScrollReveal>
							<ScrollReveal
								variant='rise-lg'
								delay={60}
								as='div'
								className={styles.card}
							>
								<div className={styles.cardMeta}>Certificación · Oracle</div>
								<h3>Oracle Certified Expert, Java EE 6</h3>
								<p>Desarrollo de aplicaciones empresariales con Java EE.</p>
							</ScrollReveal>
							<ScrollReveal
								variant='rise-lg'
								delay={120}
								as='div'
								className={styles.card}
							>
								<div className={styles.cardMeta}>Certificación · Microsoft</div>
								<h3>Azure Data Engineering Associate</h3>
								<p>Diseño e implementación de soluciones de datos en Azure.</p>
							</ScrollReveal>
							<ScrollReveal
								variant='rise-lg'
								delay={180}
								as='div'
								className={styles.card}
							>
								<div className={styles.cardMeta}>Reconocimiento académico</div>
								<h3>Graduado con honores — TSU</h3>
								<p>Técnico Superior en Desarrollo de Aplicaciones Web.</p>
							</ScrollReveal>
						</div>

						<div className={styles.cards}>
							<ScrollReveal variant='rise-lg' as='div' className={styles.card}>
								<div className={styles.cardMeta}>2017 — 2019</div>
								<h3>TSU en Desarrollo de Aplicaciones Web</h3>
								<p>IES San Clemente, Santiago de Compostela.</p>
							</ScrollReveal>
							<ScrollReveal
								variant='rise-lg'
								delay={60}
								as='div'
								className={styles.card}
							>
								<div className={styles.cardMeta}>2011 — 2015</div>
								<h3>Grado en Psicología</h3>
								<p>Universidad de Santiago de Compostela.</p>
							</ScrollReveal>
						</div>
					</div>
				</section>

				{/* ===================== CONTACT ===================== */}
				<section id='contacto' className={styles.contact}>
					<div className='container'>
						<p className='sectionLabel'>Hablemos</p>
						<ScrollReveal
							variant='rise-lg'
							as='h2'
							className={styles.contactTitle}
						>
							¿Buscas a alguien
							<br />
							<em>para tu equipo</em>?
						</ScrollReveal>
						<ScrollReveal
							variant='rise-lg'
							delay={120}
							as='p'
							className='lede'
							style={{ marginTop: '1.5rem' }}
						>
							Disponible para conversar sobre nuevas oportunidades. Puedes
							escribirme directamente o descargar mi CV en PDF.
						</ScrollReveal>
						<ScrollReveal
							variant='rise-lg'
							delay={220}
							as='div'
							className={styles.contactRow}
						>
							<a
								className='btn btnSolid'
								href='mailto:pablo.villacanas@gmail.com'
							>
								Escribir un correo <span className='btnArrow'>→</span>
							</a>
							<a className='btn' href='/CV-PabloVillacanas.pdf' target='_blank'>
								Descargar CV (PDF)
							</a>
							<a
								className='btn'
								href='https://www.linkedin.com/in/pablovillacanas'
								target='_blank'
								rel='noopener noreferrer'
							>
								LinkedIn
							</a>
							<a
								className='btn'
								href='https://github.com/pablovillacanas'
								target='_blank'
								rel='noopener noreferrer'
							>
								GitHub
							</a>
						</ScrollReveal>
					</div>
				</section>
			</main>

			<footer className='footer'>
				<div
					className={`container ${styles.footerInner ?? ''}`}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '1.5rem',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<span>© 2026 Pablo Domínguez Villacañas</span>
					<div className='footerLinks'>
						<a href='mailto:pablo.villacanas@gmail.com'>Email</a>
						<a
							href='https://www.linkedin.com/in/pablovillacanas'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						<a
							href='https://github.com/pablovillacanas'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
