import { Box, Typography } from '@mui/material';
import React from 'react';

interface QuestionItemProps {
	question: string;
	currentIndex: number;
	totalQuestions: number;
}

const QuestionItem = ({ currentIndex, totalQuestions, question }: QuestionItemProps) => {
	return (
		<Box>
			<Box>
				Question {currentIndex + 1} of {totalQuestions}
			</Box>
			<Typography
				variant='h3'
				lineHeight='1.1'
				letterSpacing='-0.02em'
				marginTop='4px'
				sx={{
					'@media screen and (max-width:479px)': {
						fontSize: '28px',
					},
				}}
			>
				{question}
			</Typography>
		</Box>
	);
};

export default QuestionItem;
