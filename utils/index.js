module.exports.filterBubbleUser = (data) => {

    const { id, firstName, lastName, email, address, children } = data;

    const newUser = {
		id,
		firstName,
		lastName,
		email,
		address,
		children,
	};
	return newUser;
};
