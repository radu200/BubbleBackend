const { getBubbleUser } = require("../api/index");
const { getUserData, addUserData } = require("../models/users");
const _ = require("lodash");
const { filterBubbleUser } = require("../utils");

///notes
// In real world I will use pagination to slice data and keep track what was inserted
module.exports.processUserData = async () => {
	try {
		const user = await getBubbleUser();
		const user_id = user.id;

		//check data from api exist
		// object expected
		const userBubbleExist = !_.isEmpty(user);

		if (userBubbleExist) {
			//check if user data already exist in  db
			const userExist = await getUserData(user_id);

			if (!userExist) {
				const newUser = filterBubbleUser(user);
				await addUserData(newUser);
			}
		}
	} catch (err) {
		//logs
	}
};
