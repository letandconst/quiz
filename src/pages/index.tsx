import QuizCard from '@/components/QuizCard';
import QuizCountdown from '@/components/QuizCountdown';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
	const [showCountDown, setShowCountdown] = useState<boolean>(false);
	const [timeLeft, setTimeLeft] = useState<number>(5);

	const handleShowCountdown = (additionalTime: number, increment: boolean) => {
		setShowCountdown(true);

		const audio = new Audio('./audio/wrong-answer.mp3');
		audio.volume = 1;
		audio.play();

		document.body.style.overflow = 'hidden';
	};

	const handleHideCountdown = () => {
		setShowCountdown(false);
		document.body.style.overflow = 'auto';
	};

	useEffect(() => {}, [timeLeft]);

	const quizData = [
		{
			question: 'Az első kódot a Ximen Walking District-ben 西門町徒步區 találjátok a Walker feliratú kör 100 méteres körzetében. Figyeljetek a járókelőkre, és ne lábatlankodjatok sokáig, hiszen sietnetek kell! ',
			correctAnswer: '1268',
			type: 'text',
		},
		{
			question: 'Mi a neve a tradicionális fülöp-szigeteki harcművészetnek?',
			videoURL: './video/video-v2-1.mp4',
			options: ['A. Arnis', 'B. Armes', 'C. Tinikling', 'D. Artes'],
			correctAnswer: 'A. Arnis',
			type: 'multiple_choice',
		},
		{
			question:
				'Ahhoz, hogy megfejtsétek a következő kódot, el kell jutnotok Taiwan leghíresebb és legmagasabb épületéhez, és meg kell oldanotok az alábbi matematikai műveletet. Ehhez azonban, miután megérkeztetek, össze kell gyűjtenetek pár érdekes adatot az ikonikus épületről. Néhány információt a 89. emeleten fogtok megtalálni... <br/>a felvonó maximális sebessége + a gömb súlya - az épület második neve + a lengéscsillapítás mértéke - a gömböt tartó kábelek hossza',
			correctAnswer: '1567',
			type: 'text',
		},
		{
			question: 'Mi a neve a Fülöp-szigetek északi hegyvidékein élő törzseknek?',
			videoURL: './video/video-v2-2.mp4',
			options: ['A. Tagalog', 'B. Igorot', 'C. Iguana', 'D. Bontoc'],
			correctAnswer: 'B. Igorot',
			type: 'multiple_choice',
		},
		{
			question: 'Ahhoz, hogy kiderítsétek az utolsó kódot, menjetek a Xinyi District-be, (信義區) és hegyezzétek a fületeket!',
			correctAnswer: '1976',
			type: 'text',
		},
		{
			question: 'Mi a neve a kínai gőzgombócnak, amit változatos töltelékekkel árulnak?',
			videoURL: './video/video-v2-3.mp4',
			options: ['A. Binalot', 'B. Dumpling', 'C. Balut', 'D. Gyoza'],
			correctAnswer: 'B. Dumpling',
			type: 'multiple_choice',
		},
	];

	return (
		<Box
			sx={{
				height: '100%',
				display: 'flex',
				width: '100%',
				position: 'relative',
			}}
		>
			{showCountDown && (
				<QuizCountdown
					handleHideCountdown={handleHideCountdown}
					remainingTime={timeLeft}
				/>
			)}
			<QuizCard
				data={quizData}
				handleShowCountdown={handleShowCountdown}
			/>
		</Box>
	);
}
