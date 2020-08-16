import React from 'react';

const Notification = ({ showNotifications }) => {
	return (
		<div className={`notification-container ${showNotifications ? 'show' : ''}`}>
			<p>You have already entered this letter</p>
		</div>
	);
};

export default Notification;
