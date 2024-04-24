import { Typography, Button, Box } from '@mui/material';

import React, { useState } from 'react';

const QuizCover = ({ onStart }: { onStart: () => void }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingBottom: '75px',
				justifyContent: 'flex-end',
				height: '100%',
				minHeight: '100dvh',
				h3: {
					fontSize: '72px',
					'@media screen and (max-width:579px)': {
						fontSize: '48px',
					},
				},
				'@media screen and (max-width:579px)': {
					padding: '0 24px 75px 24px',
					boxSizing: 'border-box',
				},
			}}
		>
			<Button
				variant='contained'
				onClick={onStart}
				sx={{
					width: '300px',
					border: '2px solid #ffffff',
					color: '#ffffff',
					boxShadow: 'none',
					background: 'transparent',
					borderRadius: '45px',
					'@media screen and (max-width:579px)': {
						width: '100%',
					},
				}}
			>
				Start
			</Button>
		</Box>
	);
};

export default QuizCover;
