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
			type: 'text',
		},
		{
			question: 'Watch the video and select the correct answer:',
			videoURL: './video/sample.mp4',
			options: ['A. China', 'B. Japan', 'C. South Korea'],
			correctAnswer: 'B. Japan',
			type: 'multiple_choice',
		},
		{
			question: 'Answer this question: 1 + 1 = ?',
			correctAnswer: '2',
			type: 'text',
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
