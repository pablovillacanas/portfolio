import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import DevNav from '@/components/DevNav';

export default function Home() {
	return (
		<>
			<Head>
				<title>Pablo Domínguez Villacañas</title>
				<meta
					name='description'
					content='Pablo Domínguez Villacañas — desarrollador full-stack.'
				/>
			</Head>

			<DevNav />
			<div className='bgGrid' />

			<main className={styles.home}>
				<div className={styles.inner}>
					<div className={styles.avatar}>
						<Image
							src='/portrait.png'
							alt='Pablo Domínguez Villacañas'
							fill
							priority
						/>
					</div>
					<p className='eyebrow' style={{ marginBottom: '1rem' }}>
						Pablo Domínguez Villacañas
					</p>
					<h1>Software, con perspectiva.</h1>
					<p className='lede'>
						Desarrollador full-stack. Si nos conocemos o buscas mi contacto
						profesional, escríbeme directamente.
					</p>
					<div className={styles.links}>
						<a className='btn' href='mailto:pablo.villacanas@gmail.com'>
							Escribir un correo <span className='btnArrow'>→</span>
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
					</div>
				</div>
			</main>
		</>
	);
}
