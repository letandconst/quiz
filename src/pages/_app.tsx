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
					fontFamily: 'Figtree-SemiBold',
					background: 'transparent',
					color: '#ffffff',
					padding: '8px 16px',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					fontFamily: 'Figtree-Medium',
					color: '#000000',
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					backgroundColor: '#ffffff',
				},
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					color: '#ffffff',
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
