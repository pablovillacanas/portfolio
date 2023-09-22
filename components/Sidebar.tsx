import React from 'react';
import styled, { useTheme } from 'styled-components';
import { BsHouseDoorFill, BsGithub, BsFileEarmarkPerson } from 'react-icons/bs';
import Tooltip from './Tooltip';

import { GrMail } from 'react-icons/gr';
import { CustomTheme } from './App';
import Link from 'next/link';
import hexToRgba from 'hex-to-rgba';
import { useRouter } from 'next/router';

const StyledLink = styled(Link)<{ highlight: boolean }>`
	width: 100%;
	background-color: ${(props) =>
		props.highlight && props.theme.colors.background};
`;

interface DivLinkStyledProps {
	highlight?: boolean;
}
const DivLinkStyled = styled.div<DivLinkStyledProps>`
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 0.5em 0em;
	width: 100%;
	color: transparent;
	background-color: ${(props) =>
		props.highlight && props.theme.colors.background};
	&:hover {
		background-color: ${(props) =>
			!props.highlight && hexToRgba(props.theme.colors.secondary, 0.5)};
	}
`;

const Sidebar = () => {
	const theme = useTheme() as CustomTheme;
	const { query } = useRouter();

	return (
		<div
			style={{
				width: '4%',
				minWidth: '60px',
				background: `linear-gradient(0deg, rgba(163,184,0,1) 0%, rgba(253,187,45,1) 100%)`,
				position: 'fixed',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 2,
			}}
		>
			<StyledLink href={'/'} shallow={true}>
				<DivLinkStyled highlight={!query.section || query.section === 'home'}>
					<Tooltip content='Home'>
						<BsHouseDoorFill
							size={40}
							color={
								!query.section || query.section === 'home'
									? '#D9BA1E'
									: theme.colors.primaryVariant
							}
							style={{
								cursor: 'pointer',
							}}
						/>
					</Tooltip>
				</DivLinkStyled>
			</StyledLink>

			<StyledLink href={'/?section=contact'} shallow={true}>
				<DivLinkStyled highlight={query.section === 'contact'}>
					<Tooltip content='Contact'>
						<GrMail
							size={40}
							color={
								query.section === 'contact'
									? '#D3B91D'
									: theme.colors.primaryVariant
							}
							style={{ cursor: 'pointer' }}
						/>
					</Tooltip>
				</DivLinkStyled>
			</StyledLink>

			<StyledLink href={'/?section=cv'} shallow={true}>
				<DivLinkStyled highlight={query.section === 'cv'}>
					<Tooltip content='CV'>
						<BsFileEarmarkPerson
							size={40}
							color={
								query.section === 'cv' ? '#CCB919' : theme.colors.primaryVariant
							}
							style={{ cursor: 'pointer' }}
						/>
					</Tooltip>
				</DivLinkStyled>
			</StyledLink>

			<DivLinkStyled>
				<Tooltip content='Github'>
					<BsGithub
						size={40}
						color={theme.colors.primaryVariant}
						onClick={() => {
							window.open('https://github.com/pablovillacanas', '_newtab');
						}}
						style={{ cursor: 'pointer' }}
					/>
				</Tooltip>
			</DivLinkStyled>
		</div>
	);
};

export default Sidebar;
