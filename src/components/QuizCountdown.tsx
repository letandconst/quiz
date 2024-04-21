import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const QuizCountdown = () => {
	const [timeLeft, setTimeLeft] = useState<number>(120);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (timeLeft > 0) {
				setTimeLeft((prevTime) => prevTime - 1);
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeLeft]);

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	return (
		<Box
			id='countdown-timer'
			sx={{
				position: 'absolute',
				top: '24px',
				left: '50%',
				transform: 'translateX(-50%)',
				fontFamily: 'Figtree-Bold',
				fontSize: '24px',
				color: '#ff6161',
				border: '2px solid #ff6161',
				padding: '8px 12px',
				letterSpacing: '0.04em',
				minWidth: '82px',
				borderRadius: '16px',
			}}
		>
			{formatTime(timeLeft)}
		</Box>
	);
};

export default QuizCountdown;
