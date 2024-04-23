import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

interface MultipleChoiceOptionsProps {
	options: string[] | undefined;
	selectedOption: string;
	onChange: (value: string) => void;
}

const MultipleChoice = ({ options, selectedOption, onChange }: MultipleChoiceOptionsProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange((event.target as HTMLInputElement).value);
	};
	return (
		<FormControl
			component='fieldset'
			sx={{
				'.Mui-checked': {
					color: '#ffffff!important',
				},
			}}
		>
			<RadioGroup
				value={selectedOption}
				onChange={handleChange}
			>
				{options &&
					options.map((option, index) => (
						<FormControlLabel
							key={index}
							value={option}
							control={<Radio />}
							label={option}
						/>
					))}
			</RadioGroup>
		</FormControl>
	);
};

export default MultipleChoice;
