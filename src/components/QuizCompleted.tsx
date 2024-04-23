import { Typography, Box, Button } from '@mui/material';

const QuizCompleted = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '60px 0 80px 0',
				justifyContent: 'space-between',
				height: '100%',
				h3: {
					fontSize: '72px',
				},
			}}
		>
			<Box>
				<Typography
					variant='h3'
					textAlign='center'
				>
					Congratulations!
				</Typography>
				<Typography
					variant='body1'
					align='center'
					sx={{
						fontSize: '20px',
					}}
				>
					Good Job! You've answered all the questions correctly.
				</Typography>
			</Box>
			<Button
				variant='contained'
				onClick={() => window.location.reload()}
				sx={{
					width: '300px',
					border: '2px solid #ffffff',
					color: '#ffffff',
					boxShadow: 'none',
					background: 'transparent',
					borderRadius: '45px',
				}}
			>
				Retry
			</Button>
		</Box>
	);
};

export default QuizCompleted;
