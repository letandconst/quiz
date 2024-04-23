import { Box, Button, LinearProgress, TextField, Typography } from '@mui/material';
import QuestionItem from './QuestionItem';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import QuizCompleted from './QuizCompleted';
import QuizCover from './QuizCover';
import MultipleChoice from './MultipleChoice';
import React from 'react';

interface QuizData {
	question: string;
	correctAnswer: string;
	type: string;
	options?: string[];
	videoURL?: string;
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
	const [showClue, setShowClue] = useState<boolean>(false);
	const currentQuestion = data[currentIndex];
	const totalQuestions = data.length;

	const videoRef = useRef<HTMLVideoElement>(null);

	const initialOverallProgress = (currentIndex + 1) * (100 / totalQuestions);
	const [overallProgress, setOverallProgress] = useState<number>(initialOverallProgress);

	const allQuestionsAnswered = currentIndex === totalQuestions;

	const handleChangeAnswer = (e: any) => {
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

			if (videoRef.current && !videoRef.current.paused) {
				videoRef.current.pause();
			}

			return;
		}

		if ((currentIndex + 1) % 3 === 0 && currentIndex + 1 !== totalQuestions) {
			setShowClue(true);
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

	useEffect(() => {
		console.log(`Current question index is ${currentIndex}`);
	}, [currentIndex]);

	return (
		<>
			<Box
				className='quiz-card'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					width: '100%',
					margin: 'auto',
					border: '1px solid #f1f4f9',
					position: 'relative',
					' &::before': {
						position: 'absolute',
						content: '""',
						width: '100%',
						height: '100%',
						zIndex: '-1',
						backgroundImage: 'url(./assets/tab-bg.png)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					},
					' > div ': {
						height: '100%',
					},
				}}
			>
				<>
					{!showQuiz && (
						<motion.div
							initial={{ opacity: 1, scale: 1 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.8 }}
						>
							<QuizCover onStart={handleStartQuiz} />
						</motion.div>
					)}

					<AnimatePresence>
						{showQuiz && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 1.2 }}
							>
								<Box height='100%'>
									{allQuestionsAnswered ? (
										<QuizCompleted />
									) : (
										<>
											<LinearProgress
												variant='determinate'
												value={overallProgress}
												sx={{
													' > span': {
														backgroundColor: '#000000',
													},
												}}
											/>

											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													gap: '8px',
													padding: '24px',
													justifyContent: 'space-between',
													height: '100%',
												}}
											>
												{currentIndex < data.length && !showClue && (
													<>
														<motion.div
															initial={{ opacity: 0, scale: 0.9 }}
															animate={{ opacity: 1, scale: 1 }}
															exit={{ opacity: 0, scale: 0.9 }}
															transition={{ duration: 1 }}
														>
															<QuestionItem
																currentIndex={currentIndex}
																totalQuestions={totalQuestions}
																question={data[currentIndex].question}
															/>
														</motion.div>

														{data[currentIndex].type === 'text' ? (
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
																			background: '#ffffff',
																			borderRadius: '6px',
																			borderColor: incorrectAnswer ? '#ff6161' : '#ffffff',
																			'&:focus': {
																				borderColor: incorrectAnswer ? '#ff6161' : '#ffffff',
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
																<video
																	controls
																	ref={videoRef}
																>
																	<source
																		src={data[currentIndex].videoURL}
																		type='video/mp4'
																	/>
																</video>

																<MultipleChoice
																	options={data[currentIndex].options}
																	selectedOption={userAnswer}
																	onChange={handleChangeAnswer}
																/>
															</>
														)}

														<Button
															variant='contained'
															onClick={handleCheckAnswer}
															sx={{
																border: '2px solid #ffffff',
																color: '#ffffff',
																boxShadow: 'none',
																background: 'transparent',
																'&:hover': {
																	background: 'transparent',
																},
															}}
														>
															Check answer
														</Button>
													</>
												)}

												{showClue && (
													<Box
														sx={{
															padding: '50px 0',
															height: '100%',
															display: 'flex',
															justifyContent: 'space-between',
															flexDirection: 'column',
														}}
													>
														<Typography
															variant='h5'
															textAlign='center'
														>
															You've got the clues you need. Time to move forward and uncover what awaits.
														</Typography>
														<Button
															variant='contained'
															onClick={() => {
																setShowClue(false);
															}}
															sx={{
																margin: '0 auto',
																width: '300px',
																border: '2px solid #ffffff',
																color: '#ffffff',
																boxShadow: 'none',
																background: 'transparent',
																borderRadius: '45px',
															}}
														>
															Proceed to the next question
														</Button>
													</Box>
												)}
											</Box>
										</>
									)}
								</Box>
							</motion.div>
						)}
					</AnimatePresence>

					{showConfetti && <Fireworks autorun={{ speed: 1, duration: 5000 }} />}
				</>
			</Box>
		</>
	);
};

export default QuizCard;
