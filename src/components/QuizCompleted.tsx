import { Typography, Box, Button } from '@mui/material';

const QuizCompleted = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				flexDirection: 'column',
				button: {
					marginTop: '32px',
				},
			}}
		>
			<Typography
				variant='h3'
				color='primary'
				align='center'
				sx={{
					'@media screen and (max-width:479px)': {
						fontSize: '28px',
						marginTop: '60px',
					},
				}}
			>
				Congratulations! <br />
				You've answered all the questions correctly.
			</Typography>
			<Button
				variant='contained'
				onClick={() => window.location.reload()}
			>
				Go back
			</Button>
		</Box>
	);
};

export default QuizCompleted;
