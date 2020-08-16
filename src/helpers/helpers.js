export const showNotifications = (setter) => {
	setter(true);
	setTimeout(() => {
		setter(false);
	}, 2000);
};
