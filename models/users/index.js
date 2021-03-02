const User = require("../mongodb/schema/user");

module.exports.getUserData = async (user_id) => {
	try {
		const user = await User.findOne({ id: user_id });
		return user;
	} catch (err) {
		return err;
	}
};
module.exports.getAllUsersData = async () => {
	try {
		const user = await User.find();
		return user;
	} catch (err) {
		return err;
	}
};

module.exports.addUserData = async (data) => {
	try {
		const user = new User(data);
		const res = await user.save();
		return res;
	} catch (err) {
		return err;
	}
};

module.exports.deleteUserData = async (user_id) => {
	try {
		const res = await User.remove({ id: user_id });
		return res;
	} catch (err) {
		return err;
	}
};
