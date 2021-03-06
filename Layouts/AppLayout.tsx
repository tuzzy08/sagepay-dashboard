import React, { useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from '@mantine/core';
type props = {
  children: any
};

export function AppLayout({ children }: props) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			fixed
			navbar={
				<Navbar
					p='md'
					hiddenBreakpoint='sm'
					hidden={!opened}
					width={{ sm: 200, lg: 250 }}
				>
					<Text>Application navbar</Text>
				</Navbar>
			}
			
			header={
				<Header height={70} p='md'>
					<div
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}
					>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>

						<Text>Application header</Text>
					</div>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
}
