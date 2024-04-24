import QuizCard from '@/components/QuizCard';
import QuizCountdown from '@/components/QuizCountdown';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
	const [showCountDown, setShowCountdown] = useState<boolean>(false);
	const [timeLeft, setTimeLeft] = useState<number>(5);

	const handleShowCountdown = (additionalTime: number, increment: boolean) => {
		setShowCountdown(true);

		if (increment) {
			setTimeLeft((prevTime) => prevTime + additionalTime);

			const audio = new Audio('./audio/wrong-answer.mp3');
			audio.volume = 1;
			audio.play();
		} else {
			setTimeLeft(180);
		}
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
			videoURL: './video/video2-1.mp4',
			options: ['A. Arnis', 'B. Armes', 'C. Tinikling', 'D. Artes'],
			correctAnswer: 'A. Arnis',
			type: 'multiple_choice',
		},
		{
			question:
				'Ahhoz, hogy megtaláljátok a következő kódot, menjetek Tajvan leghíresebb épületének kilátójába. Egy kis segítség: az ikonikus épület utóneve az alábbi összeadás eredménye: 15 + 10 + 3 + 2 + 12 + 18 + 9+ 6+ 11 + 15 <br/><br/>Amikor odaértetek, keressétek a digitális távcsövet a nagy virágszív mellett.  Ha belenéztek, egy piros hirdetőtáblán találtok egy fehérrel írt telefonszámot, ami a következő kódot rejti. ',
			correctAnswer: '0493',
			type: 'text',
		},
		{
			question: 'Mi a neve a Fülöp-szigetek északi hegyvidékein élő törzseknek?',
			videoURL: './video/video2-2.mp4',
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
			videoURL: './video/video2-3.mp4',
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
