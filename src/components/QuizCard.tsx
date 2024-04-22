import { Box, Button, LinearProgress, TextField, Typography } from '@mui/material';
import QuestionItem from './QuestionItem';
import { useState, useEffect } from 'react';

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import QuizCompleted from './QuizCompleted';
import QuizCover from './QuizCover';
import MultipleChoice from './MultipleChoice';

interface QuizData {
	question: string;
	correctAnswer: string;
	type: string;
	options: string[];
	videoURL: string;
}

interface QuizCardProps {
	data: QuizData[];
	handleShowCountdown: () => void;
}

const QuizCard = ({ data, handleShowCountdown }: QuizCardProps) => {
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

	const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement> | string) => {
		if (typeof e === 'string') {
			setUserAnswer(e);
			if (e === '') {
				setIncorrectAnswer(false);
			}
		} else {
			setUserAnswer(e.target.value);

			if (e.target.value === '') {
				setIncorrectAnswer(false);
			}
		}
	};

	const handleCheckAnswer = () => {
		if (userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
			setOverallProgress((currentIndex + 1) * (100 / totalQuestions));
			setUserAnswer('');
			setIncorrectAnswer(false);
		} else {
			setIncorrectAnswer(true);
			handleShowCountdown();
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
						'@media screen and (max-width:479px)': {
							backgroundSize: 'contain',
						},
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

												{currentQuestion.type === 'text' ? (
													<Box sx={{ marginTop: 'auto' }}>
														<TextField
															variant='outlined'
															placeholder='Enter your answer'
															fullWidth
															value={userAnswer}
															onChange={handleChangeAnswer}
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
													</Box>
												) : (
													<>
														<video controls>
															<source
																src={currentQuestion.videoURL}
																type='video/mp4'
															/>
														</video>

														<MultipleChoice
															options={currentQuestion.options}
															selectedOption={userAnswer}
															onChange={handleChangeAnswer}
														/>
													</>
												)}

												<Button
													disabled={!userAnswer}
													variant='contained'
													onClick={handleCheckAnswer}
													sx={{
														marginTop: '8px',
													}}
												>
													Check answer
												</Button>
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
