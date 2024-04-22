import QuizCard from '@/components/QuizCard';
import QuizCountdown from '@/components/QuizCountdown';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function Home() {
	const [showCountDown, setShowCountdown] = useState<boolean>(false);

	const handleShowCountdown = () => {
		setShowCountdown(true);
		document.body.style.overflow = 'hidden';
	};

	const handleHideCountdown = () => {
		setShowCountdown(false);
		document.body.style.overflow = 'auto';
	};

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
				position: 'relative',
			}}
		>
			{showCountDown && <QuizCountdown handleHideCountdown={handleHideCountdown} />}
			<QuizCard
				data={quizData}
				handleShowCountdown={handleShowCountdown}
			/>
		</Box>
	);
}
