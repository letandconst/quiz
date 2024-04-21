import QuizCard from '@/components/QuizCard';
import { Box } from '@mui/material';

export default function Home() {
	const quizData = [
		{
			question: 'What is the capital of Philippines?',
			correctAnswer: 'Manila',
		},
		{
			question: 'What is 1+1',
			correctAnswer: '2',
		},
		{
			question: 'How many letters are in the alphabet?',
			correctAnswer: '26',
		},
	];

	return (
		<Box
			sx={{
				height: '100dvh',
				display: 'flex',
				width: '100%',
				padding: '8px',
			}}
		>
			<QuizCard data={quizData} />
		</Box>
	);
}
