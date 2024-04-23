import { Typography, Button, Box } from '@mui/material';

import React, { useState } from 'react';

const QuizCover = ({ onStart }: { onStart: () => void }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '32px 0 40px 0',
				justifyContent: 'space-between',
				height: '100%',
				h3: {
					fontSize: '72px',
					'@media screen and (max-width:579px)': {
						fontSize: '48px',
					},
				},
				'@media screen and (max-width:579px)': {
					padding: '32px 24px 40px 24px',
					boxSizing: 'border-box',
				},
			}}
		>
			<Box>
				<Typography
					variant='h3'
					textAlign='center'
				>
					Welcome!
				</Typography>
				<Typography
					variant='body1'
					align='center'
					sx={{
						maxWidth: '32ch',
						fontSize: '20px',
						'@media screen and (max-width:579px)': {
							fontSize: '16px',
						},
					}}
				>
					Ready to challenge your mind? <br /> Join us and see if you have what it takes to be the ultimate champion!
				</Typography>
			</Box>
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
