import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import Wrong from './components/Wrong';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

const words = [ 'application', 'programming', 'interface', 'wizard' ];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
	const [ playable, setPlayable ] = useState(true);
	const [ correctLetters, setCorrectLetters ] = useState([]);
	const [ wrongLetters, setWrongLetters ] = useState([]);

	useEffect(
		() => {
			const handleKeydown = (event) => {
				const { key, keyCode } = event;
				if (playable && keyCode >= 65 && keyCode <= 90) {
					const letter = key.toLowerCase();

					if (selectedWord.includes(letter)) {
						if (!correctLetters.includes(letter)) {
							setCorrectLetters((currentLetters) => [ ...currentLetters, letter ]);
						} else {
							//ShowNotification
						}
					} else {
						if (!wrongLetters.includes(letter)) {
							setWrongLetters((currentLetters) => [ ...currentLetters, letter ]);
						} else {
							// Show Notifcation
						}
					}
				}
			};
			window.addEventListener('keydown', handleKeydown);

			return () => window.removeEventListener('keydown', handleKeydown);
		},
		[ correctLetters, wrongLetters, playable ]
	);
	return (
		<React.Fragment>
			<Header />
			<div className="game-container">
				<Figure wrongLetters={wrongLetters} />
				<Wrong wrongLetters={wrongLetters} />
				<Word selectedWord={selectedWord} correctLetters={correctLetters} />
			</div>
		</React.Fragment>
	);
}

export default App;
