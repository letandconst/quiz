import { Box, Button, LinearProgress, TextField, Typography } from '@mui/material';
import QuestionItem from './QuestionItem';
import { useState, useEffect } from 'react';

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import QuizCompleted from './QuizCompleted';
import QuizCover from './QuizCover';
interface QuizData {
	question: string;
	correctAnswer: string;
}

interface QuizCardProps {
	data: QuizData[];
}

const QuizCard = ({ data }: QuizCardProps) => {
	const [showConfetti, setShowConfetti] = useState(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [userAnswer, setUserAnswer] = useState<string>('');
	const [incorrectAnswer, setIncorrectAnswer] = useState<boolean>(false);
	const [showQuiz, setShowQuiz] = useState<boolean>(false);
	const currentQuestion = data[currentIndex];
	const totalQuestions = data.length;

	const initialOverallProgress = (currentIndex + 1) * (100 / totalQuestions);
	const [overallProgress, setOverallProgress] = useState<number>(initialOverallProgress);

	const allQuestionsAnswered = currentIndex === totalQuestions;

	const handleCheckAnswer = () => {
		if (userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
			setOverallProgress((currentIndex + 1) * (100 / totalQuestions));
			setUserAnswer('');
			setIncorrectAnswer(false);
		} else {
			setIncorrectAnswer(true);
			// Handle incorrect answer behavior (if needed)
		}
	};

	const handleStartQuiz = () => {
		setShowQuiz(true);
	};

	useEffect(() => {
		if (allQuestionsAnswered) {
			setShowConfetti(true);
			// Hide confetti after a delay
			setTimeout(() => setShowConfetti(false), 5000);
		}
	}, [allQuestionsAnswered]);

	return (
		<>
			<Box
				className='quiz-card'
				sx={{
					borderRadius: '8px',
					display: 'flex',
					flexDirection: 'column',
					height: '600px',
					width: '100%',
					margin: 'auto',
					border: '1px solid #f1f4f9',
					boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
					position: 'relative',
					' &::before': {
						position: 'absolute',
						content: '""',
						width: '100%',
						height: '100%',
						zIndex: '-1',
						opacity: '0.1',
						backgroundImage: 'url(./assets/logo.png)',
						backgroundSize: '500px',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					},
				}}
			>
				<>
					{!showQuiz && <QuizCover onStart={handleStartQuiz} />}

					{showConfetti && <Fireworks autorun={{ speed: 1, duration: 5000 }} />}

					{showQuiz && (
						<Box
							bgcolor='rgba(255,255,255,0.4)'
							height='100%'
						>
							{allQuestionsAnswered ? (
								<QuizCompleted />
							) : (
								<>
									<LinearProgress
										variant='determinate'
										value={overallProgress}
									/>

									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											gap: '18px',
											padding: '24px',
											justifyContent: 'space-between',
											height: '100%',
										}}
									>
										{currentIndex < data.length && (
											<>
												<QuestionItem
													currentIndex={currentIndex}
													totalQuestions={totalQuestions}
													question={currentQuestion.question}
												/>
												<Box sx={{ marginTop: 'auto' }}>
													<TextField
														variant='outlined'
														placeholder='Enter your answer'
														fullWidth
														value={userAnswer}
														onChange={(e) => setUserAnswer(e.target.value)}
														autoComplete='off'
														sx={{
															input: {
																borderWidth: '1px!important',
																border: 'solid',
																borderRadius: '6px',
																borderColor: incorrectAnswer ? '#ff6161' : ' #c5c8d5',
																'&:focus': {
																	borderColor: incorrectAnswer ? '#ff6161' : '#1976d2',
																},
															},
															'& fieldset': {
																display: 'none',
															},
														}}
													/>
													<Button
														variant='contained'
														onClick={handleCheckAnswer}
														sx={{
															marginTop: '8px',
														}}
													>
														Check answer
													</Button>
												</Box>
											</>
										)}
									</Box>
								</>
							)}
						</Box>
					)}
				</>
			</Box>
		</>
	);
};

export default QuizCard;
