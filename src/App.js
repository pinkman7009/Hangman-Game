import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import Wrong from './components/Wrong';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import { showNotifications as show } from './helpers/helpers';

const words = [ 'application', 'programming', 'interface', 'wizard' ];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
	const [ playable, setPlayable ] = useState(true);
	const [ correctLetters, setCorrectLetters ] = useState([]);
	const [ wrongLetters, setWrongLetters ] = useState([]);
	const [ showNotifications, setShowNotification ] = useState(false);

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
							show(setShowNotification);
						}
					} else {
						if (!wrongLetters.includes(letter)) {
							setWrongLetters((currentLetters) => [ ...currentLetters, letter ]);
						} else {
							show(setShowNotification);
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
				{wrongLetters.length > 0 && <Wrong wrongLetters={wrongLetters} />}
				<Word selectedWord={selectedWord} correctLetters={correctLetters} />
			</div>
			<Popup />
			<Notification showNotifications={showNotifications} />
		</React.Fragment>
	);
}

export default App;
