const { getUserData, getAllUsersData, deleteUserData } = require("../models/users");

module.exports.getUser = async (req, res) => {
	try {
		const user_id = req.query.user_id;
		const user = await getUserData(user_id);
		res.json(user);
	} catch (err) {
		res.status(500).json({ err: "err" });
	}
};

module.exports.getAllUsers = async (req, res) => {
	try {
		const users = await getAllUsersData();
		res.json(users);
	} catch (err) {
		res.status(500).json({ err: "err" });
	}
};

module.exports.updateUser = async (req, res) => {
	try {
		const users = await getAllUsersData();
		res.json(users);
	} catch (err) {
		res.status(500).json({ err: "err" });
	}
};

module.exports.deleteUser = async (req, res) => {
	try {
		const id = req.query.user_id;
		const status = await deleteUserData(id);
		if (status.ok) {
			return res.json("Success");
		}
	} catch (err) {
		res.status(500).json({ err: "err" });
	}
};
