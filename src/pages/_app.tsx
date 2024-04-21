import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: 'Figtree-SemiBold',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: 'Figtree-Medium',
					background: '#1976d2',
					color: '#ffffff',
					padding: '8px 16px',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					fontFamily: 'Figtree-Medium',
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					backgroundColor: '#e2eaf3',
				},
			},
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
