import React from 'react';

const Wrong = ({ wrongLetters }) => {
	return (
		<div className="wrong-letters-container">
			<div>
				{wrongLetters && <p>Wrong</p>}
				{wrongLetters
					.map((letter, index) => <span key={index}>{letter}</span>)
					.reduce((prev, curr) => (prev === null ? [ curr ] : [ prev, ', ', curr ]), null)}
			</div>
		</div>
	);
};

export default Wrong;
