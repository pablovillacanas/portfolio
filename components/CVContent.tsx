/* eslint-disable @typescript-eslint/no-empty-function */
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Ticker from './atoms/Ticker';

import {
	SiKubernetes,
	SiReact,
	SiAmazonaws,
	SiMicrosoftazure,
	SiDocker,
	SiTsnode,
	SiTypescript,
	SiJavascript,
	SiJava,
	SiPython,
	SiRubyonrails,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiRedis,
	SiGit,
	SiWebgl,
	SiNextdotjs,
	SiStyledcomponents,
	SiGraphql,
	SiTailwindcss,
	SiJest,
	SiMocha,
	SiCypress,
	SiWebpack,
	SiBabel,
	SiNpm,
	SiYarn,
	SiPandas,
} from 'react-icons/si';

const discreteGradientColor = [
	'#a3b800',
	'#aab804',
	'#b2b808',
	'#bab80c',
	'#c1b810',
	'#c9b814',
	'#cfb817',
	'#d5b81a',
	'#dcb91e',
	'#fdbb2d',
];
const Indicator = ({
	fillAmount,
	text,
}: {
	fillAmount: number;
	text: JSX.Element;
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: '0.5em',
				alignItems: 'center',
			}}
		>
			{new Array(10).fill('').map((_, i) => {
				return (
					<div
						key={i}
						style={{
							width: '10px',
							height: '20px',
							background: i < fillAmount ? discreteGradientColor[i] : 'gray',
						}}
					></div>
				);
			})}
			{text}
		</div>
	);
};

const CVContent = () => {
	return (
		<div style={{ fontSize: '1.3em' }}>
			<p>At a glance:</p>
			<div style={{ marginBottom: '1em' }}>
				<Indicator fillAmount={10} text='Git'></Indicator>
				<Indicator fillAmount={10} text='React/Typescript'></Indicator>
				<Indicator fillAmount={10} text='Agile development'></Indicator>
				<Indicator
					fillAmount={9}
					text={
						<span>
							Java{' '}
							<a
								href='https://www.credly.com/badges/f4a464fd-42a2-410d-9711-822e6afc42ba/public_url'
								target={'_blank'}
								style={{ color: '#9FC131', fontSize: '0.7em' }}
							>
								(see expert certifications)
							</a>
						</span>
					}
				></Indicator>
				<Indicator
					fillAmount={8}
					text='Backend (Node/Python/Rails)'
				></Indicator>
				<Indicator fillAmount={7} text='Docker/Kubernetes/CD'></Indicator>
				<Indicator fillAmount={7} text='AWS/Azure'></Indicator>
			</div>
			<div style={{ marginBottom: '1em' }}>
				<Ticker
					data={[
						<SiKubernetes />,
						<SiReact />,
						<SiAmazonaws />,
						<SiMicrosoftazure />,
						<SiDocker />,
						<SiTsnode />,
						<SiTypescript />,
						<SiJavascript />,
						<SiJava />,
						<SiPython />,
						<SiRubyonrails />,
						<SiPostgresql />,
						<SiMysql />,
						<SiMongodb />,
						<SiRedis />,
						<SiGit />,
						<SiWebgl />,
						<SiNextdotjs />,
						<SiStyledcomponents />,
						<SiGraphql />,
						<SiTailwindcss />,
						<SiJest />,
						<SiMocha />,
						<SiCypress />,
						<SiWebpack />,
						<SiBabel />,
						<SiNpm />,
						<SiYarn />,
						<SiPandas />,
					]}
				/>
			</div>
			<Link
				href='./CV-PabloVillacanas.pdf'
				rel='noopener noreferrer'
				target='_blank'
			>
				<Button text={'Download the full CV'} onClick={() => {}}></Button>
			</Link>
		</div>
	);
};

export default CVContent;
