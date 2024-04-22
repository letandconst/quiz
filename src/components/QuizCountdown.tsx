import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const QuizCountdown = ({ handleHideCountdown }: { handleHideCountdown: () => void }) => {
	const [timeLeft, setTimeLeft] = useState<number>(120);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (timeLeft > 0) {
				setTimeLeft((prevTime) => prevTime - 1);
				if (timeLeft === 10) {
					playAudio();
				}
			} else {
				handleHideCountdown();
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeLeft]);

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	const playAudio = () => {
		const audio = new Audio('./audio/countdown-timer.mp3');
		audio.volume = 1;
		audio.play();

		setTimeout(() => {
			audio.pause();
			audio.currentTime = 0;
		}, 10000);
	};

	return (
		<Box
			id='countdown-timer'
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.8)',
				zIndex: 9999,
				transition: 'opacity 0.5s ease',
				opacity: '1',
			}}
		>
			<Box
				sx={{
					fontFamily: 'Figtree-Bold',
					fontSize: '64px',
					color: '#ff6161',
					border: '2px solid #ff6161',
					padding: '8px',
					letterSpacing: '0.06em',
					minWidth: '200px',
					borderRadius: '16px',
					textAlign: 'center',
					animation: 'tilt-shaking 0.25s linear infinite',
				}}
			>
				{formatTime(timeLeft)}
			</Box>
		</Box>
	);
};

export default QuizCountdown;
