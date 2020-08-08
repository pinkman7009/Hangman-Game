import React from 'react';
import './App.css';
import Header from './components/Header'
import Figure from './components/Figure'
import Wrong from './components/Wrong'
import Word from './components/Word'
import Popup from './components/Popup'
import Notification from './components/Notification'

function App() {
	return (
		<>
			<Header/>
			<div className="game-container">
				<Figure/>
				<Wrong/>
				<Word/>	
			</div>
		</>
	)
}

export default App;
