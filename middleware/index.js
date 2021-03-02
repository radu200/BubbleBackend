module.exports.checkUserId = (req, res, next) => {
	const user_id = req.query.user_id;

	if (!user_id) {
		return res.status(403).json("Id required");
	}

	next();
};
