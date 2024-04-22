import { Typography, Button, Box } from '@mui/material';

import React from 'react';

const QuizCover = ({ onStart }: { onStart: () => void }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				'@media screen and (max-width:479px)': {
					padding: '0 12px',
				},
			}}
		>
			<Typography
				variant='h3'
				gutterBottom
			>
				Welcome!
			</Typography>
			<Typography
				variant='body1'
				align='center'
				sx={{
					maxWidth: '30ch',
					marginBottom: '12px',
				}}
			>
				Ready to challenge your mind? <br /> Join us and see if you have what it takes to be the ultimate champion!
			</Typography>
			<Button
				variant='contained'
				onClick={onStart}
			>
				Start
			</Button>
		</Box>
	);
};

export default QuizCover;
