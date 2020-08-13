import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
	return (
		<div className="word">
			{selectedWord.split('').map((letter, index) => (
				<span key={index} className="letter">
					{correctLetters.includes(letter) ? letter : ''}
				</span>
			))}
		</div>
	);
};

export default Word;
